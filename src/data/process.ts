import type { Step } from './types';
import type { IconName } from '@/components/Icon';

/** The three-stage 1-to-1 philosophy, shown directly under the hero. */
export const philosophy: Step[] = [
  {
    index: '01',
    title: 'Assess',
    summary:
      'Before anything is prescribed, we understand the body in front of us.',
    detail: [
      'How you move',
      'Where you are strong and where you are not',
      'Mobility and restriction',
      'Injury history and limitations',
      'Your goals and your deadline',
      'What your training actually needs to look like',
    ],
  },
  {
    index: '02',
    title: 'Personalize',
    summary:
      'A treatment, recovery or training plan written for one person — you.',
    detail: [
      'Built from your assessment findings',
      'Matched to your schedule and training load',
      'Physiotherapy, recovery and training combined where appropriate',
      'Explained so you understand why each part is there',
    ],
  },
  {
    index: '03',
    title: 'Progress',
    summary:
      'Measured, reviewed and adapted. A plan that never changes is not a plan.',
    detail: [
      'Objective markers retested at set intervals',
      'Load and intensity adjusted to response',
      'Direction changed when something is not working',
      'Progress you can actually see',
    ],
  },
];

/** The six-step customer journey timeline. */
export const journey: Step[] = [
  { index: '01', title: 'Assess', summary: 'Understand the client — history, movement, strength, goals.' },
  { index: '02', title: 'Plan', summary: 'Build the individual programme from what the assessment showed.' },
  { index: '03', title: 'Treat / Train', summary: 'Execute the programme 1-to-1, session by session.' },
  { index: '04', title: 'Recover', summary: 'Apply the recovery strategies that match the load being carried.' },
  { index: '05', title: 'Progress', summary: 'Measure against baseline and adjust the plan accordingly.' },
  { index: '06', title: 'Perform', summary: 'Move toward long-term capacity, resilience and performance.' },
];

/** The three core pillars rendered as large cards on the homepage. */
export const pillars = [
  {
    id: '01',
    title: 'Manual Physiotherapy',
    href: '/physiotherapy',
    cta: 'Explore Physiotherapy',
    summary:
      'Individualised physiotherapy focused on movement, rehabilitation, functional recovery and return to activity or sport.',
    points: ['Manual therapy', 'Injury rehabilitation', 'Movement assessment', 'Return to sport'],
    image: 'pillar-physiotherapy',
    icon: 'hand' as IconName,
  },
  {
    id: '02',
    title: 'Recovery Center',
    href: '/recovery-center',
    cta: 'Explore Recovery',
    summary:
      'Advanced recovery modalities designed to support relaxation, recovery and readiness for training.',
    points: ['Ice bath & sauna', 'Sports massage', 'Compression & red light', 'TECAR & IASTM'],
    image: 'pillar-recovery',
    icon: 'snowflake' as IconName,
  },
  {
    id: '03',
    title: 'Personal Training & Performance',
    href: '/personal-training',
    cta: 'Explore Performance',
    summary:
      '1-to-1 strength, mobility, conditioning and athletic performance coaching — no group sessions, no generic plans.',
    points: ['Personal training', 'Mobility & stretching', 'Strength & conditioning', 'HYROX & marathon'],
    image: 'pillar-training',
    icon: 'dumbbell' as IconName,
  },
];

/** Why-us feature blocks. */
export const whyUs: { title: string; summary: string; icon: IconName }[] = [
  {
    title: '100% 1-to-1',
    summary:
      'Every client receives individual attention. Not a coach split across a floor of people — a coach working with you.',
    icon: 'user',
  },
  {
    title: 'Integrated Approach',
    summary:
      'Physiotherapy, recovery, training and performance under one roof, run by one team who talk to each other.',
    icon: 'layers',
  },
  {
    title: 'Personalized Programs',
    summary:
      'Programmes are built from individual assessment findings — never pulled from a template or a class timetable.',
    icon: 'target',
  },
  {
    title: 'Recovery + Training',
    summary:
      'Recovery is scheduled as part of the training journey, not sold separately as an add-on you may or may not use.',
    icon: 'refresh',
  },
  {
    title: 'Performance Focus',
    summary:
      'We do not stop at the absence of pain. The goal is stronger movement, better capacity and real performance.',
    icon: 'chart',
  },
  {
    title: 'Professional Supervision',
    summary:
      'Services are delivered by appropriately trained professionals, with screening before any modality is used.',
    icon: 'badge',
  },
];

/** Audience segments used on the homepage "who this is for" band. */
export const segments = [
  {
    title: 'Injury Recovery',
    summary: 'Sports injuries, joint problems, movement limitations and post-operative rehabilitation.',
    href: '/physiotherapy',
  },
  {
    title: 'Athletes',
    summary: 'Professional and amateur athletes across cricket, football, running, cycling and more.',
    href: '/sports-performance',
  },
  {
    title: 'Fitness Clients',
    summary: 'Personal training, strength, mobility, flexibility and conditioning — no injury required.',
    href: '/personal-training',
  },
  {
    title: 'Endurance Athletes',
    summary: 'Marathon and long-distance runners, HYROX competitors and endurance athletes.',
    href: '/marathon-training',
  },
  {
    title: 'Recovery Clients',
    summary: 'Sports massage, ice bath, sauna, compression, red light and other recovery modalities.',
    href: '/recovery-center',
  },
];
