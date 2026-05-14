// One-off: extract 3 images from JSONL line 6017 → replace glow, smile, restore webps.

import { writeFile, mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import sharp from "sharp";

const JSONL = "C:/Users/Sabilux/.claude/projects/c--Users-Sabilux-Desktop-CLINIC-GROWTH-DEPARTEMENT/d2101650-78b6-493d-a2c2-34dea1a08ae3.jsonl";
const TARGET_LINE = 6017;
// Order in user's message: 0=glow, 1=smile, 2=restore (family kept as-is per user)
const MAPPING = ["glow", "smile", "restore"];

const rl = createInterface({ input: createReadStream(JSONL, { encoding: "utf8" }), crlfDelay: Infinity });
let lineNum = 0, targetLine = null;
for await (const line of rl) {
  lineNum++;
  if (lineNum === TARGET_LINE) { targetLine = line; break; }
}
rl.close();
if (!targetLine) { console.error("line not found"); process.exit(1); }

const obj = JSON.parse(targetLine);
const content = obj?.message?.content || [];
const imgBlocks = content.filter((b) => b.type === "image" && b.source?.type === "base64");
console.log(`Found ${imgBlocks.length} image blocks`);

if (imgBlocks.length !== MAPPING.length) {
  console.warn(`Expected ${MAPPING.length}, got ${imgBlocks.length}`);
}

await mkdir(resolve("../.tmp/goals-source"), { recursive: true });

for (let i = 0; i < Math.min(imgBlocks.length, MAPPING.length); i++) {
  const slug = MAPPING[i];
  const buf = Buffer.from(imgBlocks[i].source.data, "base64");
  const meta = await sharp(buf).metadata();
  const position = meta.height > meta.width ? "top" : "center";

  // also save source jpg for reference
  await writeFile(resolve(`../.tmp/goals-source/${slug}.jpg`), buf);

  const out = resolve(`public/media/goals/${slug}.webp`);
  await sharp(buf)
    .resize(1200, 800, { fit: "cover", position })
    .webp({ quality: 80, effort: 5 })
    .toFile(out);
  const s = await stat(out);
  console.log(`  [${i}] ${slug}: src ${meta.width}x${meta.height} (${(buf.length/1024).toFixed(0)} KB) → webp ${(s.size/1024).toFixed(1)} KB, ${position}-cropped`);
}

console.log("done");
