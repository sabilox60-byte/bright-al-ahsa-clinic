import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const base = "https://bright-al-ahsa-clinic.vercel.app";
const outDir = path.resolve(".tmp", "bright-site-scan");
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9223;

const routes = [
  "/",
  "/services",
  "/doctors",
  "/about",
  "/trust",
  "/gallery",
  "/reviews",
  "/journal",
  "/booking",
  "/contact",
  "/faq",
  "/goals/glow",
  "/goals/smile",
  "/goals/family",
  "/goals/restore",
  "/goals/diagnose",
  "/services/full-face-filler",
  "/services/lip-filler",
  "/services/botox",
  "/services/hydrafacial",
  "/services/veneers",
  "/services/teeth-whitening",
  "/services/laser-hair-removal",
  "/services/plasma-prp",
  "/services/dental-implants",
  "/services/gummy-smile",
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, tries = 80) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res.json();
    } catch {}
    await sleep(250);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

class Cdp {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.nextId = 1;
    this.pending = new Map();
    this.events = new Map();
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener("open", resolve, { once: true });
      this.ws.addEventListener("error", reject, { once: true });
    });
    this.ws.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
        return;
      }
      if (msg.method && this.events.has(msg.method)) {
        for (const fn of this.events.get(msg.method)) fn(msg.params);
      }
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id);
          reject(new Error(`CDP timeout: ${method}`));
        }
      }, 30000);
    });
  }

  once(method) {
    return new Promise((resolve) => {
      const fn = (params) => {
        const list = this.events.get(method) || [];
        this.events.set(method, list.filter((item) => item !== fn));
        resolve(params);
      };
      this.events.set(method, [...(this.events.get(method) || []), fn]);
    });
  }

  close() {
    this.ws.close();
  }
}

async function newTarget(url) {
  const res = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, {
    method: "PUT",
  });
  if (!res.ok) throw new Error(`Cannot create target: ${res.status}`);
  return res.json();
}

async function scanPage(route) {
  const url = `${base}${route}`;
  const target = await newTarget("about:blank");
  const cdp = new Cdp(target.webSocketDebuggerUrl);
  await cdp.open();
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Network.enable");

  const load = cdp.once("Page.loadEventFired");
  await cdp.send("Page.navigate", { url });
  await load;
  await sleep(2200);

  const title = await cdp.send("Runtime.evaluate", {
    returnByValue: true,
    expression: "document.title",
  });

  const data = await cdp.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const clean = (s) => (s || "").replace(/\\s+/g, " ").trim();
      const sections = [...document.querySelectorAll("main > section, main > aside, footer, nav")].map((el, i) => ({
        index: i,
        tag: el.tagName.toLowerCase(),
        id: el.id || "",
        className: el.className?.toString?.() || "",
        heading: clean(el.querySelector("h1,h2,h3,.overline")?.textContent),
        text: clean(el.innerText).slice(0, 1100),
        portraitCount: el.querySelectorAll("svg[viewBox='0 0 240 240']").length,
        imgCount: el.querySelectorAll("img").length,
        videoCount: el.querySelectorAll("video").length,
      }));
      return {
        url: location.href,
        title: document.title,
        h1: [...document.querySelectorAll("h1")].map(h => clean(h.textContent)),
        headings: [...document.querySelectorAll("h1,h2,h3")].map(h => clean(h.textContent)).filter(Boolean).slice(0, 80),
        links: [...document.querySelectorAll("a[href]")].map(a => ({ text: clean(a.textContent), href: a.href })).slice(0, 120),
        media: [...document.querySelectorAll("img,video")].map(m => ({
          tag: m.tagName.toLowerCase(),
          alt: m.getAttribute("alt") || "",
          src: m.currentSrc || m.src || m.getAttribute("src") || "",
          poster: m.getAttribute("poster") || "",
        })),
        portraitPlaceholders: document.querySelectorAll("svg[viewBox='0 0 240 240']").length,
        sections,
        bodyText: clean(document.body.innerText).slice(0, 7000),
        scrollHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      };
    })()`,
  });

  const page = data.result.value;
  const safe = route === "/" ? "home" : route.replace(/^\//, "").replace(/[\\/]/g, "__");
  await writeFile(path.join(outDir, `${safe}.json`), JSON.stringify(page, null, 2), "utf8");

  const viewportHeight = Math.min(Math.max(page.scrollHeight, 900), 14000);
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: viewportHeight,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await sleep(300);
  const shot = await cdp.send("Page.captureScreenshot", {
    format: "jpeg",
    quality: 80,
    fromSurface: true,
    captureBeyondViewport: true,
  });
  await writeFile(path.join(outDir, `${safe}.jpg`), Buffer.from(shot.data, "base64"));

  await cdp.send("Target.closeTarget", { targetId: target.id }).catch(() => {});
  cdp.close();
  return {
    route,
    title: title.result.value,
    h1: page.h1,
    portraits: page.portraitPlaceholders,
    sections: page.sections.length,
    media: page.media.length,
  };
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const chrome = spawn(chromePath, [
  "--headless=new",
  `--remote-debugging-port=${port}`,
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-extensions",
  `--user-data-dir=${path.join(outDir, "chrome-profile")}`,
  "--window-size=1440,1200",
  "about:blank",
], { stdio: "ignore" });

try {
  await waitForJson(`http://127.0.0.1:${port}/json/version`);
  const summary = [];
  for (const route of routes) {
    try {
      summary.push(await scanPage(route));
      console.log(`scanned ${route}`);
    } catch (error) {
      summary.push({ route, error: error.message });
      console.error(`failed ${route}: ${error.message}`);
    }
  }
  await writeFile(path.join(outDir, "summary.json"), JSON.stringify(summary, null, 2), "utf8");
  console.log(JSON.stringify(summary, null, 2));
} finally {
  chrome.kill();
}
