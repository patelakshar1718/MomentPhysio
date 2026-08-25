import type { Service } from './types';

/** Personal training — every service here is delivered 1-to-1. */
export const trainingServices: Service[] = [
  {
    id: '01',
    title: 'Personal Training',
    summary:
      'Individual strength and conditioning, coached in person, session by session. One coach, one client, one plan.',
    detail: [
      'Programme written from your assessment, not from a template',
      'Technique coached in real time',
      'Load and volume adjusted as you progress',
    ],
    icon: 'dumbbell',
    image: 'training-pt',
  },
  {
    id: '02',
    title: 'Strength Training',
    summary:
      'Build strength, control and functional capacity through structured, progressively loaded work.',
    detail: [
      'Compound and accessory work matched to your level',
      'Progressive overload tracked across blocks',
      'Movement quality prioritised over numbers',
    ],
    icon: 'strength',
    image: 'training-strength',
  },
  {
    id: '03',
    title: 'Stretching Lab',
    summary:
      'Dedicated 1-to-1 flexibility sessions — assisted, structured stretching rather than ten minutes tacked onto the end of a workout.',
    detail: [
      'Assisted and active stretching techniques',
      'Region-specific focus based on your restrictions',
      'Suited to desk-bound bodies and athletes alike',
    ],
    icon: 'stretch',
    image: 'training-stretch',
  },
  {
    id: '04',
    title: 'Mobility Training',
    summary:
      'Improve movement quality and usable range — mobility you can control under load, not just range you can demonstrate.',
    detail: [
      'Joint-by-joint mobility assessment',
      'Active range and control work',
      'Integrated into your strength sessions',
    ],
    icon: 'mobility',
    image: 'training-mobility',
  },
  {
    id: '05',
    title: 'Gluteal Lab',
    summary:
      'A focused block on glute strength, hip stability, lower-body control and the functional movement that depends on them.',
    detail: [
      'Glute strength across all three planes',
      'Hip stability and pelvic control',
      'Lower-body movement mechanics',
      'Carry-over into running, lifting and sport',
    ],
    icon: 'glutes',
    image: 'training-glutes',
  },
  {
    id: '06',
    title: 'High-Intensity Training',
    summary:
      'Structured high-intensity conditioning, scaled to your current ability and supervised throughout.',
    detail: [
      'Work-to-rest ratios set individually',
      'Intensity scaled from your assessment',
      'Technique maintained under fatigue',
    ],
    note: 'Intensity is prescribed according to your assessment and current conditioning, never applied as a fixed class format.',
    icon: 'hiit',
    image: 'training-hiit',
  },
];
