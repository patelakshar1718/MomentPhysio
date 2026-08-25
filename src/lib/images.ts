/* ============================================================================
 * IMAGE MANIFEST
 * ----------------------------------------------------------------------------
 * Components reference an image by *slot name*, never by path. A slot listed in
 * AVAILABLE_IMAGES renders the real file from /public/images/<slot>.jpg; a slot
 * that is not listed renders a designed placeholder block instead.
 *
 * To add a photo: drop `<slot>.jpg` into public/images/ and add the slot name
 * to the set below. See IMAGES.md at the repo root for the full slot list and
 * recommended dimensions.
 * ==========================================================================*/

export const AVAILABLE_IMAGES = new Set<string>([
  'pillar-physiotherapy',
  'pillar-recovery',
  'pillar-training',

  // Every recovery modality carries a picture. Four are the real thing; the
  // rest show the technique or the body region rather than the device, because
  // no free library has a photograph of the kit. public/images/CREDITS.md marks
  // which is which — replace those with photos of your own equipment first.
  // <ServiceCard> still falls back to a designed icon panel for any slot that
  // is not listed here.
  'recovery-massage',
  'recovery-theragun',
  'recovery-iastm',
  'recovery-icebath',
  'recovery-sauna',
  'recovery-compression',
  'recovery-redlight',
  'recovery-cupping',
  'recovery-needling',
  'recovery-tecar',

  // Physiotherapy techniques — one frame each, on the physiotherapy page.
  'physio-manual-therapy',
  'physio-joint-mobilization',
  'physio-soft-tissue',
  'physio-myofascial',
  'physio-exercise',
  'physio-assessment',
  'physio-injury-rehab',
  'physio-sports-rehab',
  'physio-post-op',
  'physio-functional',
  'physio-return-to-sport',

  'training-pt',
  'training-strength',
  'training-stretch',
  'training-mobility',
  'training-glutes',
  'training-hiit',

  'performance-agility',
  'performance-mobility',
  'performance-strength',
  'performance-hyrox',
  'performance-marathon',

  'facility-physio-1',
  'facility-physio-2',
  'facility-recovery-1',
  'facility-recovery-2',
  'facility-recovery-3',
  'facility-performance-1',
  'facility-performance-2',
  'facility-pt-1',

  'about-story',
  'about-approach',
  'cta-band',
]);

export function hasImage(slot?: string): slot is string {
  return typeof slot === 'string' && AVAILABLE_IMAGES.has(slot);
}

export function imageSrc(slot: string): string {
  return `/images/${slot}.jpg`;
}

/** Every slot also has a WebP twin written by scripts/optimise-images.mjs. */
export function imageSrcWebp(slot: string): string {
  return `/images/${slot}.webp`;
}
