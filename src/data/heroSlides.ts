export type HeroSlide = { slot: string; label: string; alt: string };

/** Shared by <HeroSlideshow> (the imagery) and <Hero> (the highlighted list),
 * so the two stay in lockstep — same order, same slide. */
export const heroSlides: HeroSlide[] = [
  {
    slot: 'pillar-physiotherapy',
    label: 'The Physio',
    alt: 'Physiotherapist delivering hands-on treatment',
  },
  {
    slot: 'physio-assessment',
    label: 'The Assessment',
    alt: 'Movement assessment in progress',
  },
  {
    slot: 'training-pt',
    label: 'The Personal Training',
    alt: 'One-to-one strength coaching',
  },
  {
    slot: 'recovery-sauna',
    label: 'The Recovery Center',
    alt: 'Stone-heat and infrared sauna in the recovery zone',
  },
];

/** Seconds each slide holds before the next takes over. CSS keyframes in
 * globals.css assume this exact value — change both together. */
export const HERO_SLIDE_SECONDS = 5;
