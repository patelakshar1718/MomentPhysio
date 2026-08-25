import type { Program } from './types';

/**
 * Goal-based programmes.
 *
 * Deliberately seven pathways instead of twenty individual services — a
 * visitor picks the outcome they want, not the modality they think they need.
 */
export const programs: Program[] = [
  {
    slug: 'injury-recovery',
    title: 'Injury Recovery',
    audience: 'For anyone working back from an injury, pain or movement limitation.',
    summary:
      'A staged pathway from assessment through hands-on treatment and rehabilitation to strength, and finally back to the activity you stopped doing.',
    stages: ['Assessment', 'Physiotherapy', 'Rehabilitation', 'Strength', 'Return to Activity'],
    outcomes: [
      'A clear explanation of what the assessment found',
      'A staged plan with defined progression criteria',
      'Strength work built in from the start, not bolted on',
      'A structured return to your activity or sport',
    ],
    icon: 'shield',
  },
  {
    slug: 'athlete-recovery',
    title: 'Athlete Recovery',
    audience: 'For athletes in season, in a heavy block, or between competitions.',
    summary:
      'Recovery treated as part of training rather than as an afterthought — matched to your load and scheduled around your key sessions.',
    stages: ['Assessment', 'Recovery', 'Mobility', 'Conditioning', 'Performance'],
    outcomes: [
      'Recovery modalities selected around your training week',
      'Mobility maintained through heavy blocks',
      'Conditioning that supports rather than competes with your sport',
      'Readiness reviewed session to session',
    ],
    icon: 'refresh',
  },
  {
    slug: 'strength-conditioning',
    title: 'Strength & Conditioning',
    audience: 'For anyone who wants to get genuinely stronger and better conditioned.',
    summary:
      'Progressive strength and conditioning coached 1-to-1, with movement quality assessed before load is added.',
    stages: ['Assessment', 'Strength', 'Mobility', 'Conditioning', 'Progress'],
    outcomes: [
      'A periodised strength programme written for you',
      'Technique coached in every session',
      'Objective markers retested at set intervals',
      'Conditioning matched to your goal',
    ],
    icon: 'strength',
  },
  {
    slug: 'marathon-performance',
    title: 'Marathon Performance',
    audience: 'For distance runners preparing for a race — or trying to finish a block injury-free.',
    summary:
      'Everything around the running: the strength, mobility, conditioning and recovery that keeps a training block on the road.',
    stages: ['Assessment', 'Strength', 'Mobility', 'Running Support', 'Recovery'],
    outcomes: [
      'Runner-specific strength and mobility work',
      'Load management across the training block',
      'Recovery scheduled around long runs',
      'Support through to race week',
    ],
    icon: 'run',
  },
  {
    slug: 'hyrox-performance',
    title: 'HYROX Performance',
    audience: 'For first-timers and returning competitors preparing for hybrid racing.',
    summary:
      'Strength, conditioning, functional movement and recovery built into one preparation block for the specific demands of the race.',
    stages: ['Strength', 'Conditioning', 'Functional Training', 'Recovery'],
    outcomes: [
      'Station-specific strength and technique',
      'Compromised running and transition practice',
      'Conditioning across full race distance',
      'Recovery placed between key sessions',
    ],
    icon: 'hyrox',
  },
  {
    slug: 'mobility-program',
    title: 'Mobility Program',
    audience: 'For stiff, desk-bound or restricted bodies — and athletes who need more usable range.',
    summary:
      'Assessment-led mobility work that builds range you can actually control, then loads it so it holds.',
    stages: ['Assessment', 'Mobility', 'Stretching', 'Strength', 'Movement Control'],
    outcomes: [
      'A joint-by-joint picture of where you are restricted',
      'Active range rather than passive flexibility alone',
      'Strength through the new range',
      'Carry-over into training and daily movement',
    ],
    icon: 'mobility',
  },
  {
    slug: 'personal-performance',
    title: 'Personal Performance',
    audience: 'For people who simply want to be stronger, fitter, more mobile and more consistent.',
    summary:
      'No injury required and no sport necessary. A 1-to-1 programme built around where you are now and where you want to be.',
    stages: ['Assessment', 'Plan', 'Train', 'Recover', 'Progress'],
    outcomes: [
      'Stronger, fitter and more mobile',
      'More athletic and better coordinated',
      'A consistent training habit with someone accountable for it',
      'Progress you can see measured',
    ],
    icon: 'target',
  },
];
