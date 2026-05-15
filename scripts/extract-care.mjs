// Extract image[0] from line 7525 (first image is the care/standard photo, second is screenshot)
// Convert to ~1200x1200 webp preserving square subject — TailoredCare displays in a 1fr 1fr grid with height 420 fixed.

import { writeFile, mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import sharp from "sharp";

const JSONL = "C:/Users/Sabilux/.claude/projects/c--Users-Sabilux-Desktop-CLINIC-GROWTH-DEPARTEMENT/d2101650-78b6-493d-a2c2-34dea1a08ae3.jsonl";
const TARGET_LINE = 7525;

const rl = createInterface({ input: createReadStream(JSONL, { encoding: "utf8" }), crlfDelay: Infinity });
let lineNum = 0, line = null;
for await (const l of rl) { lineNum++; if (lineNum === TARGET_LINE) { line = l; break; } }
rl.close();
if (!line) { console.error("line not found"); process.exit(1); }

const obj = JSON.parse(line);
const blocks = (obj?.message?.content || []).filter((b) => b.type === "image" && b.source?.type === "base64");
console.log(`Found ${blocks.length} image block(s)`);
// First is the photo (user shows it first), second is screenshot
const target = blocks[0];
const buf = Buffer.from(target.source.data, "base64");
const meta = await sharp(buf).metadata();
console.log(`Source: ${meta.width}x${meta.height}`);

await mkdir(resolve("public/media/care"), { recursive: true });
const out = resolve("public/media/care/standard.webp");
await sharp(buf)
  .resize(1200, 1200, { fit: "cover", position: "centre" })
  .webp({ quality: 82, effort: 5 })
  .toFile(out);
const s = await stat(out);
console.log(`Wrote ${out} (${(s.size/1024).toFixed(1)} KB, 1200x1200)`);
