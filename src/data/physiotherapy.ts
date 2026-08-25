import type { Service } from './types';

/**
 * Manual physiotherapy services.
 *
 * Language is deliberately scoped: "designed to", "may help", "where
 * clinically appropriate", "individualised according to assessment".
 * No guarantees of pain relief, cure or recovery timelines anywhere.
 */
export const physiotherapyServices: Service[] = [
  {
    id: '01',
    title: 'Manual Therapy',
    summary:
      'Hands-on treatment applied to joints and soft tissue, selected according to what the assessment shows rather than a fixed protocol.',
    icon: 'hand',
    image: 'physio-manual-therapy',
  },
  {
    id: '02',
    title: 'Joint Mobilization',
    summary:
      'Graded joint techniques designed to address restriction and support better movement at a specific segment.',
    icon: 'joint',
    image: 'physio-joint-mobilization',
  },
  {
    id: '03',
    title: 'Soft Tissue Techniques',
    summary:
      'Targeted soft-tissue work directed at the muscles and structures identified during assessment.',
    icon: 'massage',
    image: 'physio-soft-tissue',
  },
  {
    id: '04',
    title: 'Myofascial Techniques',
    summary:
      'Fascial techniques used where restriction appears to extend beyond a single muscle or region.',
    icon: 'wave',
    image: 'physio-myofascial',
  },
  {
    id: '05',
    title: 'Therapeutic Exercise',
    summary:
      'Prescribed exercise that carries the treatment forward between sessions — the part that makes hands-on work hold.',
    icon: 'activity',
    image: 'physio-exercise',
  },
  {
    id: '06',
    title: 'Movement Assessment',
    summary:
      'Structured screening of how you move, load and compensate, forming the baseline every plan is built from.',
    icon: 'clipboard',
    image: 'physio-assessment',
  },
  {
    id: '07',
    title: 'Injury Rehabilitation',
    summary:
      'Staged rehabilitation progressing from early management through to loading, control and capacity.',
    icon: 'shield',
    image: 'physio-injury-rehab',
  },
  {
    id: '08',
    title: 'Sports Rehabilitation',
    summary:
      'Rehabilitation built around the specific demands of your sport, position and competitive calendar.',
    icon: 'trophy',
    image: 'physio-sports-rehab',
  },
  {
    id: '09',
    title: 'Post-Operative Rehabilitation',
    summary:
      'Progressive rehabilitation following surgery, delivered within the protocol and timeline set by your surgeon.',
    note: 'Delivered in line with your surgeon’s protocol. Please bring your operative notes and any post-operative instructions.',
    icon: 'refresh',
    image: 'physio-post-op',
  },
  {
    id: '10',
    title: 'Functional Rehabilitation',
    summary:
      'Bridging the gap between clinical exercise and the real movements your work, sport and daily life demand.',
    icon: 'layers',
    image: 'physio-functional',
  },
  {
    id: '11',
    title: 'Return-to-Sport Training',
    summary:
      'Criteria-led progression through the final stages — speed, change of direction, contact and sport-specific load.',
    icon: 'run',
    image: 'physio-return-to-sport',
  },
];

/** How a physiotherapy engagement actually runs, start to finish. */
export const physioProcess = [
  {
    index: '01',
    title: 'Subjective & Objective Assessment',
    summary:
      'A full history followed by physical assessment — range, strength, control, load tolerance and the movements that provoke your symptoms.',
  },
  {
    index: '02',
    title: 'Findings & Plan',
    summary:
      'What the assessment showed, explained in plain language, with a plan you agree to rather than one handed to you.',
  },
  {
    index: '03',
    title: 'Treatment & Loading',
    summary:
      'Hands-on treatment where indicated, always paired with the exercise and loading that makes the change stick.',
  },
  {
    index: '04',
    title: 'Reassessment',
    summary:
      'Objective markers rechecked at set intervals. If something is not responding, the plan changes.',
  },
  {
    index: '05',
    title: 'Return to Activity',
    summary:
      'Progression back to training, sport or work against agreed criteria — not against a calendar.',
  },
];

export const physioConditions = [
  'Sports injuries',
  'Muscle strains and tears',
  'Joint pain and restriction',
  'Back and neck concerns',
  'Shoulder and knee complaints',
  'Post-operative rehabilitation',
  'Overuse and load-related pain',
  'Movement limitations',
  'Return-to-sport requirements',
  'Posture and movement quality',
];
