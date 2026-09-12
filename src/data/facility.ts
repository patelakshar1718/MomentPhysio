export type FacilityZone = {
  id: string;
  title: string;
  summary: string;
  /** Image slot names in /public/images — see IMAGES.md. */
  images: string[];
};

export const facilityZones: FacilityZone[] = [
  {
    id: 'physiotherapy',
    title: 'Physiotherapy Area',
    summary:
      'A private treatment and assessment environment — plinths, assessment space and the room to actually watch someone move.',
    images: ['facility-physio-1', 'facility-physio-2'],
  },
  {
    id: 'recovery',
    title: 'Recovery Zone',
    summary:
      'Ice bath, sauna, pneumatic compression, red light and the rest of the recovery equipment, in one dedicated space.',
    images: ['facility-recovery-1', 'facility-recovery-2', 'facility-recovery-3'],
  },
  {
    id: 'performance',
    title: 'Performance Zone',
    summary:
      'Strength equipment, functional training space, a mobility area and room for agility work.',
    images: ['facility-performance-1', 'facility-performance-2'],
  },
  {
    id: 'personal-training',
    title: 'Personal Training Zone',
    summary:
      'Dedicated 1-to-1 training space — never shared with a class, never queued for.',
    images: ['facility-pt-1'],
  },
];

/**
 * Curated Instagram grid — static tiles linking out to the profile.
 * Swap these slots for real post images (see IMAGES.md) so the grid mirrors
 * what is actually on the feed.
 */
export const instagramGrid = [
  'training-pt',
  'performance-marathon',
  'recovery-massage',
  'facility-performance-1',
  'training-stretch',
  'performance-hyrox',
];

/**
 * A second, deliberately different set of eight for the home page's
 * Instagram spotlight — none overlap `instagramGrid` above, so a visitor who
 * scrolls from one to the other never sees the same frame twice.
 */
export const instagramSpotlight = [
  'physio-manual-therapy',
  'training-glutes',
  'recovery-icebath',
  'performance-agility',
  'recovery-redlight',
  'physio-injury-rehab',
  'training-hiit',
  'facility-recovery-2',
];
