// One-off: extract single image from JSONL line 5983 + replace diagnose.webp.

import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import sharp from "sharp";

const JSONL = "C:/Users/Sabilux/.claude/projects/c--Users-Sabilux-Desktop-CLINIC-GROWTH-DEPARTEMENT/d2101650-78b6-493d-a2c2-34dea1a08ae3.jsonl";
const TARGET_LINE = 5983;
const OUT_WEBP = resolve("public/media/goals/diagnose.webp");
const TMP_JPG = resolve("../.tmp/goals-source/diagnose.jpg");

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
const imgBlock = content.find((b) => b.type === "image" && b.source?.type === "base64");
if (!imgBlock) { console.error("no image in line"); process.exit(1); }

const buf = Buffer.from(imgBlock.source.data, "base64");
console.log(`Extracted ${(buf.length / 1024).toFixed(0)} KB ${imgBlock.source.media_type}`);

await mkdir(resolve("../.tmp/goals-source"), { recursive: true });
await writeFile(TMP_JPG, buf);

const meta = await sharp(buf).metadata();
console.log(`Source: ${meta.width}x${meta.height}`);

const position = meta.height > meta.width ? "top" : "center";
await sharp(buf)
  .resize(1200, 800, { fit: "cover", position })
  .webp({ quality: 80, effort: 5 })
  .toFile(OUT_WEBP);

const out = await stat(OUT_WEBP);
console.log(`Wrote ${OUT_WEBP} (${(out.size / 1024).toFixed(1)} KB, ${position}-cropped)`);
