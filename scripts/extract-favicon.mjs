// Extract gold star/heartbeat logo from JSONL line 7566 (image[0] = logo, image[1] = screenshot).
// Output: app/icon.png (512x512) + app/apple-icon.png (180x180) — Next.js auto-detects.

import { writeFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import sharp from "sharp";

const JSONL = "C:/Users/Sabilux/.claude/projects/c--Users-Sabilux-Desktop-CLINIC-GROWTH-DEPARTEMENT/d2101650-78b6-493d-a2c2-34dea1a08ae3.jsonl";
const TARGET_LINE = 7566;

const rl = createInterface({ input: createReadStream(JSONL, { encoding: "utf8" }), crlfDelay: Infinity });
let lineNum = 0, line = null;
for await (const l of rl) { lineNum++; if (lineNum === TARGET_LINE) { line = l; break; } }
rl.close();
if (!line) { console.error("line not found"); process.exit(1); }

const obj = JSON.parse(line);
const blocks = (obj?.message?.content || []).filter((b) => b.type === "image" && b.source?.type === "base64");
console.log(`Found ${blocks.length} image block(s)`);
const target = blocks[0];
const buf = Buffer.from(target.source.data, "base64");
const meta = await sharp(buf).metadata();
console.log(`Source: ${meta.width}x${meta.height}`);

const sizes = [
  { name: "icon.png", size: 512 },
  { name: "apple-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  const out = resolve(`app/${name}`);
  await sharp(buf)
    .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(out);
  const s = await stat(out);
  console.log(`Wrote ${out} (${(s.size/1024).toFixed(1)} KB, ${size}x${size})`);
}
