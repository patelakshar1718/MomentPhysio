/**
 * Downloads the placeholder photography used across the site.
 *
 * Source: Mixkit (mixkit.co). Every pick is a still from a physiotherapy or
 * manual-therapy clip — a clinician working with a patient. Nothing from a spa
 * and nothing from a gym floor: the site sells assessment-led treatment, and
 * the photography has to say that on sight.
 *
 * Why frames and not a photo library: the CC0 photo sources this project can
 * reach (Openverse/StockSnap) return almost nothing for "physiotherapy", and
 * the large stock sites sit behind bot challenges. Mixkit publishes five
 * thumbnails per clip at 1280x720, which is plenty for a card or a background,
 * and it is the same licence the hero videos already use: free for commercial
 * work, no attribution required, no redistribution as standalone assets.
 *
 * These are TEMPORARY. Replace every file with real photography of the actual
 * centre before launch — see IMAGES.md. Run with: npm run images
 */

import { mkdir, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'images');

/**
 * slot  → filename written to public/images/<slot>.jpg
 * id    → Mixkit clip id; `frame` picks one of its five thumbnails (0–4), which
 *         is what keeps two slots from the same clip looking different.
 * shows → what is in the picture, so a reviewer can check the claim without
 *         opening the file.
 *
 * A pick may instead carry `openverse` — an Openverse image id, CC0 only. That
 * is for equipment shots no physiotherapy clip contains (the sauna cabin), and
 * it is downloaded through Openverse's own proxy because the origin CDNs reject
 * hotlinking.
 */
const PICKS = [
  // Home — the three pillars
  { slot: 'pillar-physiotherapy', id: '18252', frame: 2, shows: 'Physiotherapist working on a patient’s back' },
  { slot: 'pillar-recovery', id: '13041', frame: 2, shows: 'Soft-tissue treatment, from below the table' },
  { slot: 'pillar-training', id: '5561', frame: 3, shows: 'Therapist coaching a patient through loaded rehab' },

  // Recovery — every modality carries a picture. Four are the real thing:
  // sports massage, the sauna cabin, cupping cups under suction and a red-light
  // panel. The rest are the closest honest stand-in, because no free library has
  // a photograph of a TECAR head, compression boots, a dry-needling session or
  // an IASTM tool: they show the technique or the body region rather than the
  // device, and `approx` records that so nobody mistakes them for the kit. The
  // one thing avoided outright is a picture that contradicts the copy — the
  // only free "ice bath" footage is a man wading into a hole in a frozen lake,
  // the opposite of supervised immersion at a controlled temperature, so the
  // ice-bath card gets cold water itself instead.
  { slot: 'recovery-massage', id: '18256', frame: 1, shows: 'Sports massage by a physiotherapist' },
  {
    slot: 'recovery-theragun',
    id: '18255',
    frame: 2,
    shows: 'Focused soft-tissue work on a patient’s back',
    approx: 'manual massage — the percussive device is not in shot',
  },
  {
    slot: 'recovery-iastm',
    id: '49540',
    frame: 2,
    shows: 'Clinician working along the tissue by hand',
    approx: 'the assisting instrument is not in shot',
  },
  {
    slot: 'recovery-icebath',
    id: '1612',
    frame: 1,
    shows: 'Ice and cold water, close',
    approx: 'the water itself, not a plunge tub',
  },
  {
    slot: 'recovery-sauna',
    openverse: 'afbbc065-fb7e-4d9c-a9e5-d2eead71fd22',
    shows: 'Sauna cabin interior (CC0, rawpixel)',
    approx: 'a sauna, but not yours',
  },
  {
    slot: 'recovery-compression',
    id: '36710',
    frame: 2,
    shows: 'Treatment of the calves and lower legs',
    approx: 'the region compression treats — the boots are not in shot',
  },
  { slot: 'recovery-redlight', id: '52164', frame: 0, shows: 'Red-light therapy panel in use' },
  { slot: 'recovery-cupping', id: '32861', frame: 2, shows: 'Cupping cups under suction on the back' },
  {
    slot: 'recovery-needling',
    id: '13062',
    frame: 4,
    shows: 'Clinician working a specific point in the treatment room',
    approx: 'the needles are not in shot',
  },
  {
    slot: 'recovery-tecar',
    id: '27898',
    frame: 2,
    shows: 'An energy-delivery applicator against the skin',
    approx: 'a device applied to skin, not a TECAR unit',
  },

  // Physiotherapy techniques — one frame each, matched to what the technique
  // actually looks like: hands-on work for manual and soft-tissue, a graded
  // joint technique, assisted exercise for therapeutic exercise, an assessment
  // for movement assessment, and an athlete's ankle outdoors for return to
  // sport. All from the same physiotherapy pool as the rest of the site.
  { slot: 'physio-manual-therapy', id: '18265', frame: 3, shows: 'Hands-on treatment at the shoulder' },
  { slot: 'physio-joint-mobilization', id: '13063', frame: 1, shows: 'Graded joint technique on the table' },
  { slot: 'physio-soft-tissue', id: '13061', frame: 0, shows: 'Soft-tissue work, overhead' },
  { slot: 'physio-myofascial', id: '13060', frame: 2, shows: 'Fascial work along the back' },
  { slot: 'physio-exercise', id: '5475', frame: 2, shows: 'Clinician guiding a patient through assisted walking' },
  { slot: 'physio-assessment', id: '36704', frame: 2, shows: 'Clinician explaining findings on a spine model' },
  { slot: 'physio-injury-rehab', id: '12901', frame: 2, shows: 'Treatment after a shoulder injury' },
  { slot: 'physio-sports-rehab', id: '49150', frame: 1, shows: 'Rehabilitation session with an athlete' },
  { slot: 'physio-post-op', id: '5478', frame: 2, shows: 'Patient recovering with crutches' },
  { slot: 'physio-functional', id: '18268', frame: 2, shows: 'Working a patient through a movement' },
  {
    slot: 'physio-return-to-sport',
    id: '4755',
    frame: 1,
    shows: 'An athlete’s ankle being treated outdoors',
  },

  // Personal training — therapist-led, never a gym floor
  { slot: 'training-pt', id: '49541', frame: 2, shows: 'Physio assessing a client on the table' },
  { slot: 'training-strength', id: '5493', frame: 2, shows: 'Loaded rehab with a clinician' },
  { slot: 'training-stretch', id: '13042', frame: 1, shows: 'Assisted neck and shoulder stretch' },
  { slot: 'training-mobility', id: '36393', frame: 2, shows: 'Therapist moving a patient’s neck through range' },
  { slot: 'training-glutes', id: '49542', frame: 1, shows: 'Hands-on work at the hip and knee' },
  { slot: 'training-hiit', id: '49149', frame: 1, shows: 'Suspension-assisted session, working hard' },

  // Sports performance
  { slot: 'performance-agility', id: '49148', frame: 3, shows: 'Therapeutic session with an athlete' },
  { slot: 'performance-mobility', id: '18266', frame: 2, shows: 'Standing neck mobilisation' },
  { slot: 'performance-strength', id: '49151', frame: 2, shows: 'Back and neck treatment in suspension' },
  { slot: 'performance-hyrox', id: '13039', frame: 1, shows: 'Shoulder and upper-back treatment' },
  { slot: 'performance-marathon', id: '13710', frame: 2, shows: 'Physiotherapist working on a runner’s foot' },

  // The facility
  { slot: 'facility-physio-1', id: '18254', frame: 1, shows: 'Treatment room, therapist at the table' },
  { slot: 'facility-physio-2', id: '13059', frame: 2, shows: 'Physical therapy on a patient’s back' },
  { slot: 'facility-recovery-1', id: '49543', frame: 2, shows: 'Neck work on the treatment bed' },
  { slot: 'facility-recovery-2', id: '11539', frame: 2, shows: 'A treatment session in progress' },
  { slot: 'facility-recovery-3', id: '49539', frame: 2, shows: 'Neck work by a physiotherapist' },
  { slot: 'facility-performance-1', id: '18267', frame: 2, shows: 'The treatment room, therapist at work' },
  { slot: 'facility-performance-2', id: '13164', frame: 2, shows: 'Clinic room with assessment equipment' },
  { slot: 'facility-pt-1', id: '27698', frame: 2, shows: 'A one-to-one session in the treatment space' },

  // About
  { slot: 'about-story', id: '12926', frame: 2, shows: 'Inside the centre' },
  { slot: 'about-approach', id: '46426', frame: 3, shows: 'Posture and movement assessment' },
];

const UA = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  Referer: 'https://mixkit.co/',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const kb = (n) => `${Math.round(n / 1024)} KB`;

async function exists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function frameUrl({ id, frame }) {
  return `https://assets.mixkit.co/videos/${id}/${id}-thumb-720-${frame}.jpg`;
}

function sourceUrl(pick) {
  return pick.openverse
    ? `https://api.openverse.org/v1/images/${pick.openverse}/thumb/?full_size=true`
    : frameUrl(pick);
}

async function download(pick, dest) {
  const res = await fetch(sourceUrl(pick), { headers: UA });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error(`suspiciously small (${buf.length}b)`);
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const force = process.argv.includes('--force');
  const credits = [];
  let ok = 0;
  let skipped = 0;
  const failed = [];

  for (const pick of PICKS) {
    const dest = path.join(OUT_DIR, `${pick.slot}.jpg`);

    if (!force && (await exists(dest))) {
      console.log(`· ${pick.slot} — already present, skipping`);
      skipped++;
      continue;
    }

    try {
      const bytes = await download(pick, dest);
      credits.push(pick);
      console.log(`✓ ${pick.slot} — ${pick.shows} (${kb(bytes)})`);
      ok++;
    } catch (err) {
      console.warn(`✗ ${pick.slot} — ${err.message}`);
      failed.push(pick.slot);
    }

    await sleep(200);
  }

  if (credits.length) {
    const md = [
      '# Image credits',
      '',
      'Temporary placeholder photography: frames from physiotherapy clips on',
      '[Mixkit](https://mixkit.co). The Mixkit Free License allows commercial use',
      'with no attribution required, and forbids redistributing the assets',
      'standalone. Credits are listed anyway.',
      '',
      'Every frame shows a clinician working with a patient — no spa imagery and',
      'no gym-floor imagery. Keep it that way when you replace them.',
      '',
      '**Replace these with real photography of the centre before launch — see IMAGES.md.**',
      '',
      'A “stand-in” note means the picture shows the technique or the body region',
      'rather than the equipment named on the card. Replace those first.',
      '',
      '| Slot | Shows | Stand-in | Source |',
      '| --- | --- | --- | --- |',
      ...credits.map((c) => {
        const source = c.openverse
          ? `[Openverse ${c.openverse.slice(0, 8)}](https://openverse.org/image/${c.openverse})`
          : `[${c.id}](https://mixkit.co/free-stock-video/)`;
        return `| \`${c.slot}\` | ${c.shows} | ${c.approx ?? '—'} | ${source} |`;
      }),
      '',
    ].join('\n');
    await writeFile(path.join(OUT_DIR, 'CREDITS.md'), md, 'utf8');
  }

  console.log(`\nDone — ${ok} downloaded, ${skipped} skipped, ${failed.length} failed.`);
  if (failed.length) console.log(`Failed slots: ${failed.join(', ')}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
