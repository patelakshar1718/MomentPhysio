/**
 * Downloads and compresses the hero background videos.
 *
 * Source: Mixkit (mixkit.co). The Mixkit Free License permits use in
 * commercial projects with no attribution required; it forbids redistributing
 * the clips as standalone assets, which a background loop is not.
 *
 * Every clip shows a clinician treating a patient — assessment, manual therapy,
 * mobilisation, loaded rehab. No spa footage and no gym footage: the hero is
 * the first claim the site makes, and it has to be about treatment.
 *
 * These are TEMPORARY placeholders. Replace them with footage of the actual
 * centres — see VIDEO.md.
 *
 * The 720p originals run 5–8 MB each, which is unusable as an autoplaying
 * background on mobile data. Each clip is therefore trimmed to ~6 seconds,
 * stripped of audio, scaled to 1280px and re-encoded until it lands under the
 * size ceiling. A poster JPEG is pulled from the same source so the hero paints
 * instantly while the video is still arriving.
 *
 * Run with: npm run videos
 */

import { mkdir, writeFile, readFile, access, stat, unlink } from 'node:fs/promises';
import { constants } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpegPath from 'ffmpeg-static';

const run = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'video');
const TMP = path.join(ROOT, '.video-tmp');

/** Hard ceiling per clip. Autoplaying anything larger on mobile is indefensible. */
const MAX_BYTES = 1_500_000;
const DURATION = 6;

/**
 * slot → the page whose hero uses it.
 * `id` is the Mixkit asset id; the URL pattern is stable and re-runnable.
 */
const PICKS = [
  { slot: 'hero-home', id: '49541', note: 'Physio assessing a client on the treatment table' },
  { slot: 'hero-about', id: '13164', note: 'Clinician explaining the treatment to a client' },
  { slot: 'hero-physiotherapy', id: '13039', note: 'Hands-on work at the shoulders' },
  { slot: 'hero-recovery', id: '18265', note: 'Physiotherapist working on a patient’s shoulder' },
  { slot: 'hero-training', id: '5561', note: 'Therapist coaching a patient through loaded rehab' },
  { slot: 'hero-performance', id: '49150', note: 'Physiotherapeutic session with a young athlete' },
  { slot: 'hero-mobility', id: '13042', note: 'Neck mobilisation, seated' },
  { slot: 'hero-marathon', id: '13710', note: 'Physiotherapist working on a runner’s foot' },
  { slot: 'hero-hyrox', id: '49148', note: 'Therapeutic session with an athlete' },
  { slot: 'hero-programs', id: '46426', note: 'Posture assessment' },
  { slot: 'hero-contact', id: '5493', note: 'Clinician working with a patient on rehab' },
];

const UA = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  Referer: 'https://mixkit.co/',
};

const kb = (n) => `${Math.round(n / 1024)} KB`;

async function exists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function fetchTo(url, dest) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

/**
 * Encode at a given CRF. Returns the output size.
 * faststart moves the moov atom to the front so playback can begin before the
 * whole file has downloaded — without it, an autoplaying loop stalls.
 */
async function encode(src, dest, crf, width) {
  await run(ffmpegPath, [
    '-y',
    '-ss', '0',
    '-t', String(DURATION),
    '-i', src,
    '-an',
    '-vf', `scale=${width}:-2:flags=lanczos,fps=24`,
    '-c:v', 'libx264',
    '-preset', 'slower',
    '-crf', String(crf),
    '-profile:v', 'high',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    dest,
  ]);
  return (await stat(dest)).size;
}

async function encodeWebm(src, dest, crf, width) {
  await run(ffmpegPath, [
    '-y',
    '-ss', '0',
    '-t', String(DURATION),
    '-i', src,
    '-an',
    '-vf', `scale=${width}:-2:flags=lanczos,fps=24`,
    '-c:v', 'libvpx-vp9',
    '-b:v', '0',
    '-crf', String(crf),
    '-row-mt', '1',
    '-deadline', 'good',
    '-cpu-used', '2',
    dest,
  ]);
  return (await stat(dest)).size;
}

async function main() {
  if (!ffmpegPath) throw new Error('ffmpeg-static did not provide a binary path');

  await mkdir(OUT, { recursive: true });
  await mkdir(TMP, { recursive: true });

  const force = process.argv.includes('--force');
  const credits = [];
  let ok = 0;
  const failed = [];

  for (const pick of PICKS) {
    const mp4Out = path.join(OUT, `${pick.slot}.mp4`);
    if (!force && (await exists(mp4Out))) {
      console.log(`· ${pick.slot} — present, skipping`);
      continue;
    }

    const raw = path.join(TMP, `${pick.id}.mp4`);

    try {
      if (!(await exists(raw))) {
        const bytes = await fetchTo(
          `https://assets.mixkit.co/videos/${pick.id}/${pick.id}-720.mp4`,
          raw,
        );
        console.log(`  ↓ ${pick.slot} source ${kb(bytes)}`);
      }

      // Step the quality down until it fits. 1280 wide first; if even a heavily
      // compressed 1280 misses the ceiling, drop to 960 — a slightly softer
      // background beats a 3 MB autoplay on a phone.
      let size = 0;
      let used = '';
      outer: for (const width of [1280, 960]) {
        for (const crf of [30, 33, 36, 39]) {
          size = await encode(raw, mp4Out, crf, width);
          used = `${width}px crf${crf}`;
          if (size <= MAX_BYTES) break outer;
        }
      }

      // WebM twin — usually 30–40% smaller, served first via <source>.
      const webmOut = path.join(OUT, `${pick.slot}.webm`);
      let webmSize = 0;
      try {
        webmSize = await encodeWebm(raw, webmOut, 36, 1280);
        if (webmSize > MAX_BYTES) webmSize = await encodeWebm(raw, webmOut, 42, 960);
      } catch {
        console.warn(`  ! ${pick.slot} — WebM encode failed, MP4 only`);
      }

      // Poster frame, so the hero paints before a single video byte lands.
      const posterSrc = `https://assets.mixkit.co/videos/${pick.id}/${pick.id}-thumb-720-0.jpg`;
      const posterOut = path.join(OUT, `${pick.slot}.jpg`);
      let posterSize = 0;
      try {
        posterSize = await fetchTo(posterSrc, posterOut);
      } catch {
        console.warn(`  ! ${pick.slot} — poster fetch failed`);
      }

      credits.push({ ...pick });
      console.log(
        `✓ ${pick.slot} — mp4 ${kb(size)} (${used})` +
          (webmSize ? `, webm ${kb(webmSize)}` : '') +
          (posterSize ? `, poster ${kb(posterSize)}` : '') +
          (size > MAX_BYTES ? '  ⚠ OVER CEILING' : ''),
      );
      ok++;
    } catch (err) {
      console.warn(`✗ ${pick.slot} — ${err.message}`);
      failed.push(pick.slot);
    }
  }

  if (credits.length) {
    const md = [
      '# Video credits',
      '',
      'Temporary placeholder footage from [Mixkit](https://mixkit.co).',
      'The Mixkit Free License allows commercial use with no attribution required,',
      'and forbids redistributing the clips as standalone assets.',
      '',
      '**Replace these with footage of the actual centres before launch — see VIDEO.md.**',
      '',
      '| Slot | Mixkit ID | Shows |',
      '| --- | --- | --- |',
      ...credits.map((c) => `| \`${c.slot}\` | [${c.id}](https://mixkit.co/free-stock-video/) | ${c.note} |`),
      '',
    ].join('\n');
    await writeFile(path.join(OUT, 'CREDITS.md'), md, 'utf8');
  }

  // Clean the raw downloads; they are ~6 MB each and serve no further purpose.
  if (!process.argv.includes('--keep-raw')) {
    for (const pick of PICKS) {
      await unlink(path.join(TMP, `${pick.id}.mp4`)).catch(() => {});
    }
  }

  console.log(`\nDone — ${ok} encoded, ${failed.length} failed.`);
  if (failed.length) console.log(`Failed: ${failed.join(', ')}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
