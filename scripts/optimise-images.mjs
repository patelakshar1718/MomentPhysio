/**
 * Compresses everything in public/images in place and emits a WebP twin.
 *
 * The downloaded originals run 20 KB – 1.2 MB, which would wreck Largest
 * Contentful Paint on a mobile connection. This caps width at 1600px, re-encodes
 * JPEG with mozjpeg, and writes a matching .webp that <Media> prefers via
 * <picture>. Idempotent — safe to re-run, and it will not re-process a file
 * that is already under the size ceiling unless you pass --force.
 *
 * Run with: npm run images:optimise
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'public', 'images');

const MAX_WIDTH = 1600;
const JPEG_QUALITY = 76;
const WEBP_QUALITY = 72;

const kb = (n) => `${Math.round(n / 1024)} KB`;

async function main() {
  const force = process.argv.includes('--force');
  const files = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f));

  let before = 0;
  let after = 0;

  for (const file of files) {
    const src = path.join(DIR, file);
    const base = file.replace(/\.jpe?g$/i, '');
    const jpegOut = path.join(DIR, `${base}.jpg`);
    const webpOut = path.join(DIR, `${base}.webp`);

    const original = await readFile(src);
    const originalSize = (await stat(src)).size;
    before += originalSize;

    const meta = await sharp(original).metadata();
    const width = Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH);

    // Already small and already narrow → leave the JPEG alone, still make WebP.
    const needsJpeg = force || originalSize > 180_000 || (meta.width ?? 0) > MAX_WIDTH;

    if (needsJpeg) {
      const buf = await sharp(original)
        .resize({ width, withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
        .toBuffer();
      await writeFile(jpegOut, buf);
      after += buf.length;
      console.log(`✓ ${base}.jpg  ${kb(originalSize)} → ${kb(buf.length)}`);
    } else {
      after += originalSize;
      console.log(`· ${base}.jpg  ${kb(originalSize)} (unchanged)`);
    }

    const webp = await sharp(original)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    await writeFile(webpOut, webp);
    console.log(`  └ ${base}.webp ${kb(webp.length)}`);
  }

  console.log(`\nJPEG total: ${kb(before)} → ${kb(after)} across ${files.length} files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
