import { physiotherapyServices } from '@/data/physiotherapy';
import { programs } from '@/data/programs';
import { recoveryServices } from '@/data/recovery';
import { trainingServices } from '@/data/training';
import type { Service } from '@/data/types';
import { slugify } from '@/lib/anchor';

export type NavChild = {
  label: string;
  href: string;
  /** The one-line description under the label. Every menu shows one. */
  blurb?: string;
};

export type NavItem = {
  label: string;
  href: string;
  /**
   * How the dropdown renders, and what the children mean:
   *
   *   'detail' — children are distinct destination pages.
   *   'index'  — children are sections of the parent's own page, so the panel
   *              also offers the page itself at the top.
   *
   * Both render the same way: one item per row, label over blurb.
   *
   * Defaults to 'detail'.
   */
  menu?: 'detail' | 'index';
  children?: NavChild[];
};

/**
 * Contents list for a page that renders `services` as a grid of cards.
 *
 * Both halves of the link come from the same place the card does — see
 * slugify() — so these entries stay in step with the page automatically.
 */
const sectionLinks = (path: string, services: Service[]): NavChild[] =>
  services.map((service) => ({
    label: service.title,
    href: `${path}#${slugify(service.title)}`,
    blurb: service.tagline,
  }));

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Physiotherapy',
    href: '/physiotherapy',
    menu: 'index',
    children: sectionLinks('/physiotherapy', physiotherapyServices),
  },
  {
    label: 'Recovery',
    href: '/recovery-center',
    menu: 'index',
    children: sectionLinks('/recovery-center', recoveryServices),
  },
  {
    label: 'Personal Training',
    href: '/personal-training',
    menu: 'index',
    children: sectionLinks('/personal-training', trainingServices),
  },
  {
    label: 'Performance',
    href: '/sports-performance',
    menu: 'detail',
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
  {
    label: 'Programs',
    href: '/programs',
    menu: 'index',
    /* Programs carry their own hand-written slug, which is also what the
       booking form reads from ?program= — so reuse it rather than deriving
       a second one from the title. */
    children: programs.map((program) => ({
      label: program.title,
      href: `/programs#${program.slug}`,
      /* `audience` is already the one-line "who this is for", which is exactly
         what the menu wants to say. */
      blurb: program.audience,
    })),
  },
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
