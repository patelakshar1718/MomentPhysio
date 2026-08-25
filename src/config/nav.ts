export type NavItem = {
  label: string;
  href: string;
  /** Shown in the mobile mega-menu under the parent label. */
  children?: { label: string; href: string; blurb: string }[];
};

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Physiotherapy', href: '/physiotherapy' },
  { label: 'Recovery', href: '/recovery-center' },
  { label: 'Personal Training', href: '/personal-training' },
  {
    label: 'Performance',
    href: '/sports-performance',
    children: [
      {
        label: 'Sports Performance',
        href: '/sports-performance',
        blurb: 'Agility, speed and athletic development',
      },
      {
        label: 'Mobility Training',
        href: '/mobility-training',
        blurb: 'Movement quality and range of motion',
      },
      {
        label: 'Marathon Training',
        href: '/marathon-training',
        blurb: 'Strength and conditioning for distance runners',
      },
      {
        label: 'HYROX Training',
        href: '/hyrox-training',
        blurb: 'Hybrid strength and endurance preparation',
      },
    ],
  },
  { label: 'Programs', href: '/programs' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: [
    { label: 'Manual Physiotherapy', href: '/physiotherapy' },
    { label: 'Recovery Center', href: '/recovery-center' },
    { label: 'Personal Training', href: '/personal-training' },
    { label: 'Sports Performance', href: '/sports-performance' },
    { label: 'Mobility Training', href: '/mobility-training' },
    { label: 'Marathon Training', href: '/marathon-training' },
    { label: 'HYROX Training', href: '/hyrox-training' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'The Facility', href: '/about#facility' },
    { label: 'Programs', href: '/programs' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Medical Disclaimer', href: '/medical-disclaimer' },
  ],
};
