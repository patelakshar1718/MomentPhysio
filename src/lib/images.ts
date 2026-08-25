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

  // Sports massage and the sauna are the two recovery modalities with honest
  // imagery. Ice bath, TECAR, red light, cupping, dry needling, compression,
  // percussive therapy and IASTM are icon-led by design: a picture of a
  // therapist working on a back captioned "Ice Bath" would mislead, and padding
  // the grid matters less than that. <ServiceCard> draws a designed icon panel
  // for them instead. Add slot names here once real photos of the kit exist.
  'recovery-massage',
  'recovery-sauna',

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
