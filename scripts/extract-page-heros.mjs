// Extract 6 hero images from JSONL line 6608, convert to 21:8 webp (2100x800).
// Smart vertical positioning: subjects often have face in upper-third, so bias crop slightly up.

import { writeFile, mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import sharp from "sharp";

const JSONL = "C:/Users/Sabilux/.claude/projects/c--Users-Sabilux-Desktop-CLINIC-GROWTH-DEPARTEMENT/d2101650-78b6-493d-a2c2-34dea1a08ae3.jsonl";
const TARGET_LINE = 6608;
// Order: 1=services, 2=doctors, 3=gallery, 4=reviews, 5=journal, 6=contact
const MAPPING = [
  { slug: "services-hero",  position: "centre" },
  { slug: "doctors-hero",   position: "centre" }, // 3 hands around hijab, subject central
  { slug: "gallery-hero",   position: "centre" }, // mirror + smile, subject central
  { slug: "reviews-hero",   position: "centre" }, // hallway portrait
  { slug: "journal-hero",   position: "centre" }, // glass reflections
  { slug: "contact-hero",   position: "centre" }, // marble counter with phone
];

// 21:8 aspect ratio → 2100 x 800 (subject-centered cinematic banner)
const W = 2100, H = 800;

const rl = createInterface({ input: createReadStream(JSONL, { encoding: "utf8" }), crlfDelay: Infinity });
let lineNum = 0, targetLine = null;
for await (const line of rl) { lineNum++; if (lineNum === TARGET_LINE) { targetLine = line; break; } }
rl.close();
if (!targetLine) { console.error("line not found"); process.exit(1); }

const obj = JSON.parse(targetLine);
const content = obj?.message?.content || [];
const imgBlocks = content.filter((b) => b.type === "image" && b.source?.type === "base64");
console.log(`Found ${imgBlocks.length} image blocks (expected 6)`);

await mkdir(resolve("../.tmp/heros-source"), { recursive: true });
await mkdir(resolve("public/media/heros"), { recursive: true });

for (let i = 0; i < Math.min(imgBlocks.length, MAPPING.length); i++) {
  const { slug, position } = MAPPING[i];
  const buf = Buffer.from(imgBlocks[i].source.data, "base64");
  await writeFile(resolve(`../.tmp/heros-source/${slug}.jpg`), buf);

  const meta = await sharp(buf).metadata();
  const out = resolve(`public/media/heros/${slug}.webp`);
  await sharp(buf)
    .resize(W, H, { fit: "cover", position })
    .webp({ quality: 82, effort: 5 })
    .toFile(out);
  const s = await stat(out);
  console.log(`  [${i}] ${slug}: src ${meta.width}x${meta.height} → webp ${W}x${H} (${(s.size/1024).toFixed(1)} KB, ${position})`);
}

console.log("done");
