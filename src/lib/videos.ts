/* ============================================================================
 * VIDEO MANIFEST
 * ----------------------------------------------------------------------------
 * Hero sections reference a background clip by *slot name*, never by path. A
 * slot listed here renders /public/video/<slot>.webm + .mp4 with a .jpg poster;
 * an unlisted slot renders the plain teal panel instead, so a missing file is a
 * quieter hero rather than a broken one.
 *
 * The clips are produced by `npm run videos` (scripts/fetch-videos.mjs), which
 * trims each to ~6s, strips audio and keeps every file under 1.5 MB. Add a slot
 * name below once its file exists in public/video/.
 * ==========================================================================*/

export const AVAILABLE_VIDEOS = new Set<string>([
  'hero-home',
  'hero-about',
  'hero-physiotherapy',
  'hero-recovery',
  'hero-training',
  'hero-performance',
  'hero-mobility',
  'hero-marathon',
  'hero-hyrox',
  'hero-programs',
  'hero-contact',
]);

export function hasVideo(slot?: string): slot is string {
  return typeof slot === 'string' && AVAILABLE_VIDEOS.has(slot);
}

export function videoMp4(slot: string): string {
  return `/video/${slot}.mp4`;
}

export function videoWebm(slot: string): string {
  return `/video/${slot}.webm`;
}

/** Painted immediately, and the only thing shown under reduced-motion. */
export function videoPoster(slot: string): string {
  return `/video/${slot}.jpg`;
}
