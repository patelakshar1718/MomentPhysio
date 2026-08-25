/**
 * Pulls Google reviews at BUILD time and writes them to static JSON.
 *
 * Why build time rather than in the browser: the Places API key must never be
 * shipped to the client, and this site is a static export with no server to
 * proxy through. Fetching during `npm run build` keeps the key on the build
 * machine and costs the visitor nothing — the reviews arrive as plain HTML.
 *
 * Setup:
 *   1. Google Cloud console → enable "Places API (New)" → create an API key.
 *   2. Restrict the key to the Places API. Billing must be enabled; the free
 *      tier covers a weekly rebuild many times over.
 *   3. Put the Place ID in src/config/site.ts (googlePlaceId).
 *   4. Set GOOGLE_PLACES_API_KEY in .env.local locally, and in your host's
 *      environment variables for production builds.
 *
 * The build NEVER fails because of this script. Without a key or a Place ID it
 * logs a notice, leaves the existing JSON untouched, and exits 0 — the site
 * then renders its clearly-labelled placeholders instead.
 *
 * Note: the Places API returns a maximum of 5 reviews. That is Google's limit,
 * not a bug here.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_FILE = path.join(ROOT, 'src', 'data', 'generated', 'reviews.json');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

/** Reads googlePlaceId out of the TS config without importing TypeScript. */
async function readPlaceId() {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  try {
    const source = await readFile(path.join(ROOT, 'src', 'config', 'site.ts'), 'utf8');
    const match = source.match(/googlePlaceId:\s*'([^']*)'/);
    return match?.[1] ?? '';
  } catch {
    return '';
  }
}

function notice(message) {
  console.log(`\n  ⓘ  Google reviews: ${message}\n`);
}

async function main() {
  const placeId = await readPlaceId();

  if (!API_KEY || !placeId) {
    const missing = [!API_KEY && 'GOOGLE_PLACES_API_KEY', !placeId && 'googlePlaceId']
      .filter(Boolean)
      .join(' and ');
    notice(`${missing} not set — keeping existing data, site will show placeholders.`);
    return;
  }

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;

  let payload;
  try {
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
    });

    if (!res.ok) {
      const body = await res.text();
      notice(`API returned ${res.status}. Keeping existing data.\n     ${body.slice(0, 300)}`);
      return;
    }

    payload = await res.json();
  } catch (err) {
    notice(`request failed (${err.message}). Keeping existing data.`);
    return;
  }

  const reviews = (payload.reviews ?? [])
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? 'Google user',
      rating: typeof r.rating === 'number' ? r.rating : 5,
      text: r.originalText?.text ?? r.text?.text ?? '',
      relativeTime: r.relativePublishTimeDescription ?? '',
      profilePhoto: r.authorAttribution?.photoUri ?? undefined,
      source: 'google',
    }))
    .filter((r) => r.text.trim().length > 0);

  if (reviews.length === 0) {
    notice('API responded but returned no reviews with text. Keeping existing data.');
    return;
  }

  const output = {
    fetchedAt: new Date().toISOString(),
    placeId,
    rating: payload.rating ?? null,
    totalRatings: payload.userRatingCount ?? null,
    reviews,
  };

  await mkdir(path.dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, `${JSON.stringify(output, null, 2)}\n`, 'utf8');

  console.log(
    `\n  ✓  Google reviews: saved ${reviews.length} review(s), rating ${output.rating ?? '—'} ` +
      `from ${output.totalRatings ?? '—'} ratings.\n`,
  );
}

main().catch((err) => {
  // Deliberately swallowed: a review-feed hiccup must not break a deploy.
  notice(`unexpected error (${err.message}). Keeping existing data.`);
  process.exit(0);
});
