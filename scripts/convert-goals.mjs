// One-off image converter for /media/goals/*.webp
// Reads source .jpg files from ../../.tmp/goals-source/
// Outputs optimized .webp into public/media/goals/
//
// Resize strategy: 1200x800 landscape (3:2) with top-biased crop to preserve faces
// when source is portrait. Quality 80 webp ~= 40-70 KB per image.
//
// Run: node scripts/convert-goals.mjs

import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const srcDir = resolve(repoRoot, "../.tmp/goals-source");
const dstDir = resolve(repoRoot, "public/media/goals");

const EXPECTED = ["glow", "smile", "family", "restore", "diagnose"];
const WIDTH = 1200;
const HEIGHT = 800;
const QUALITY = 80;

if (!existsSync(srcDir)) {
  console.error(`[convert-goals] source folder missing: ${srcDir}`);
  process.exit(1);
}

await mkdir(dstDir, { recursive: true });

const files = await readdir(srcDir);
const jpgs = files.filter((f) => /\.(jpe?g|png)$/i.test(f));

if (jpgs.length === 0) {
  console.error(`[convert-goals] no jpg/png in ${srcDir}`);
  process.exit(1);
}

console.log(`[convert-goals] found ${jpgs.length} source file(s) in ${srcDir}`);

let okCount = 0;
const results = [];

for (const slug of EXPECTED) {
  const match = jpgs.find((f) => f.toLowerCase().startsWith(slug + "."));
  if (!match) {
    console.warn(`  · MISSING source for "${slug}" (expected ${slug}.jpg or ${slug}.png)`);
    results.push({ slug, status: "missing" });
    continue;
  }

  const inputPath = join(srcDir, match);
  const outputPath = join(dstDir, `${slug}.webp`);

  try {
    const meta = await sharp(inputPath).metadata();
    // For portrait sources (height > width), bias crop toward top to keep faces.
    // For landscape/square, use center crop.
    const position = meta.height > meta.width ? "top" : "center";

    await sharp(inputPath)
      .resize(WIDTH, HEIGHT, { fit: "cover", position })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(outputPath);

    const { size } = await sharp(outputPath).metadata().then(async () => {
      const fs = await import("node:fs/promises");
      const s = await fs.stat(outputPath);
      return { size: s.size };
    });

    const kb = (size / 1024).toFixed(1);
    console.log(`  ✓ ${slug}: ${match} (${meta.width}x${meta.height}, ${position}-cropped) → ${slug}.webp (${kb} KB)`);
    results.push({ slug, status: "ok", kb });
    okCount++;
  } catch (e) {
    console.error(`  ✗ ${slug}: ${e.message}`);
    results.push({ slug, status: "error", error: e.message });
  }
}

console.log("");
console.log(`[convert-goals] done: ${okCount}/${EXPECTED.length} converted`);

if (okCount < EXPECTED.length) {
  process.exit(2);
}
