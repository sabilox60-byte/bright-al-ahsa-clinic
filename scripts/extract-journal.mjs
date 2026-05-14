// Extract 3 journal images from JSONL line 6359.
// Map: 0=screenshot, 1=dermatology, 2=dental, 3=womens-health

import { writeFile, mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import sharp from "sharp";

const JSONL = "C:/Users/Sabilux/.claude/projects/c--Users-Sabilux-Desktop-CLINIC-GROWTH-DEPARTEMENT/d2101650-78b6-493d-a2c2-34dea1a08ae3.jsonl";
const TARGET_LINE = 6359;
const MAPPING = ["_screenshot", "dermatology", "dental", "womens-health"];

const rl = createInterface({ input: createReadStream(JSONL, { encoding: "utf8" }), crlfDelay: Infinity });
let lineNum = 0, targetLine = null;
for await (const line of rl) { lineNum++; if (lineNum === TARGET_LINE) { targetLine = line; break; } }
rl.close();
if (!targetLine) { console.error("line not found"); process.exit(1); }

const obj = JSON.parse(targetLine);
const content = obj?.message?.content || [];
const imgBlocks = content.filter((b) => b.type === "image" && b.source?.type === "base64");
console.log(`Found ${imgBlocks.length} image blocks`);

await mkdir(resolve("../.tmp/journal-source"), { recursive: true });
await mkdir(resolve("public/media/journal"), { recursive: true });

for (let i = 0; i < imgBlocks.length; i++) {
  const slug = MAPPING[i] || `image-${i}`;
  const buf = Buffer.from(imgBlocks[i].source.data, "base64");
  await writeFile(resolve(`../.tmp/journal-source/${slug}.jpg`), buf);
  if (slug.startsWith("_")) { console.log(`  [${i}] ${slug}: skipped`); continue; }

  const meta = await sharp(buf).metadata();
  const position = meta.height > meta.width ? "top" : "center";
  const out = resolve(`public/media/journal/${slug}.webp`);
  await sharp(buf)
    .resize(1200, 800, { fit: "cover", position })
    .webp({ quality: 80, effort: 5 })
    .toFile(out);
  const s = await stat(out);
  console.log(`  [${i}] ${slug}: src ${meta.width}x${meta.height} → webp ${(s.size/1024).toFixed(1)} KB`);
}

console.log("done");
