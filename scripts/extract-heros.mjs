// Extract 3 hero images from JSONL line 6412 + convert to 21:5 webp banners.
// Order in user message: 0=lobby (services+journal), 1=reception (contact), 2=counter (gallery), 3=screenshot (skip)

import { writeFile, mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import sharp from "sharp";

const JSONL = "C:/Users/Sabilux/.claude/projects/c--Users-Sabilux-Desktop-CLINIC-GROWTH-DEPARTEMENT/d2101650-78b6-493d-a2c2-34dea1a08ae3.jsonl";
const TARGET_LINE = 6412;
const MAPPING = ["lobby", "contact-hero", "gallery-hero", "_screenshot"];

// 21:5 aspect ratio → 2100x500
const W = 2100, H = 500;

const rl = createInterface({ input: createReadStream(JSONL, { encoding: "utf8" }), crlfDelay: Infinity });
let lineNum = 0, targetLine = null;
for await (const line of rl) { lineNum++; if (lineNum === TARGET_LINE) { targetLine = line; break; } }
rl.close();
if (!targetLine) { console.error("line not found"); process.exit(1); }

const obj = JSON.parse(targetLine);
const content = obj?.message?.content || [];
const imgBlocks = content.filter((b) => b.type === "image" && b.source?.type === "base64");
console.log(`Found ${imgBlocks.length} image blocks`);

await mkdir(resolve("../.tmp/heros-source"), { recursive: true });
await mkdir(resolve("public/media/heros"), { recursive: true });

for (let i = 0; i < imgBlocks.length; i++) {
  const slug = MAPPING[i] || `image-${i}`;
  const buf = Buffer.from(imgBlocks[i].source.data, "base64");
  await writeFile(resolve(`../.tmp/heros-source/${slug}.jpg`), buf);
  if (slug.startsWith("_")) { console.log(`  [${i}] ${slug}: skipped`); continue; }

  const meta = await sharp(buf).metadata();
  const out = resolve(`public/media/heros/${slug}.webp`);
  await sharp(buf)
    .resize(W, H, { fit: "cover", position: "center" })
    .webp({ quality: 82, effort: 5 })
    .toFile(out);
  const s = await stat(out);
  console.log(`  [${i}] ${slug}: src ${meta.width}x${meta.height} → webp ${W}x${H} (${(s.size/1024).toFixed(1)} KB)`);
}

console.log("done");
