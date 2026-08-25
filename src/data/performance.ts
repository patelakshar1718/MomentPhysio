import type { Service } from './types';

/** Sports performance programmes. */
export const performanceServices: Service[] = [
  {
    id: '01',
    title: 'Agility & Athletic Ability',
    summary:
      'The qualities that separate fit from athletic — how fast you can change direction, react and re-accelerate under pressure.',
    detail: [
      'Agility and change of direction',
      'Coordination and motor control',
      'Balance and single-leg stability',
      'Reaction and decision speed',
      'Acceleration and top-end speed',
    ],
    icon: 'agility',
    image: 'performance-agility',
  },
  {
    id: '02',
    title: 'Mobility',
    summary:
      'Movement preparation and mobility development built around the positions your sport actually demands.',
    detail: [
      'Sport-specific movement preparation',
      'Positional range under load',
      'Integrated into every training block',
    ],
    icon: 'mobility',
    image: 'performance-mobility',
  },
  {
    id: '03',
    title: 'Strength & Conditioning',
    summary:
      'Build the physical capacity underneath the sport — force, power, and the engine to repeat it.',
    detail: [
      'Periodised strength blocks',
      'Power and rate-of-force development',
      'Energy-system conditioning matched to your sport',
      'In-season and off-season structures',
    ],
    icon: 'strength',
    image: 'performance-strength',
  },
  {
    id: '04',
    title: 'HYROX Training',
    summary:
      'Structured preparation for hybrid racing — the running, the eight stations, and the transitions that decide the result.',
    detail: [
      'Strength for the station work',
      'Conditioning across the full race distance',
      'Functional movement patterns under fatigue',
      'Compromised running and transitions',
      'Recovery scheduled between key sessions',
    ],
    icon: 'hyrox',
    image: 'performance-hyrox',
  },
  {
    id: '05',
    title: 'Marathon Training',
    summary:
      'The work that surrounds the miles — strength, mobility, conditioning and recovery, so the training block finishes intact.',
    detail: [
      'Runner-specific strength work',
      'Mobility for hips, ankles and thoracic spine',
      'Conditioning that supports the running plan',
      'Running support and load management',
      'Recovery integrated across the block',
    ],
    icon: 'run',
    image: 'performance-marathon',
  },
];

export const athleteTypes = [
  'Professional athletes',
  'Amateur and club athletes',
  'Cricket players',
  'Football players',
  'Runners',
  'Cyclists',
  'HYROX competitors',
  'Performance-focused clients',
];
