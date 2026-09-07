import type { Service } from './types';

/**
 * The ten recovery modalities.
 *
 * Copy discipline: every claim is phrased as intent ("designed to", "commonly
 * used for") rather than outcome. No modality here promises to cure, heal or
 * guarantee anything — that is both a regulatory requirement and the reason
 * the brand reads as clinical rather than as a wellness spa.
 */
export const recoveryServices: Service[] = [
  {
    id: '01',
    title: 'Sports Body Massage',
    tagline: 'Pressure and focus set by your training load',
    summary:
      'Hands-on massage designed for active bodies — applied with the pressure, pace and focus your training load actually calls for.',
    detail: [
      'Session focus set from your training week and current load',
      'Pre-event, post-event or maintenance emphasis',
      'Region-specific or full-body depending on requirement',
      'Delivered 1-to-1 by a trained therapist',
    ],
    icon: 'massage',
    image: 'recovery-massage',
  },
  {
    id: '02',
    title: 'Massage + Theragun',
    tagline: 'Manual technique with percussive therapy',
    fullName: 'Manual Massage with Percussive Therapy',
    summary:
      'Manual technique combined with percussive therapy, used where a targeted, higher-frequency stimulus suits the tissue better than hands alone.',
    detail: [
      'Percussive work layered into a manual session, not replacing it',
      'Intensity and attachment selected per region',
      'Commonly used around training blocks and heavy sessions',
    ],
    note: 'Applied only over appropriate tissue and avoided over bony, bruised or acutely injured areas.',
    icon: 'theragun',
    image: 'recovery-theragun',
  },
  {
    id: '03',
    title: 'IASTM',
    tagline: 'Instrument-assisted precision along fascia',
    fullName: 'Instrument-Assisted Soft Tissue Mobilization',
    summary:
      'A clinician-guided soft-tissue technique using specialised instruments to work along fascia and muscle with a level of precision the hand cannot match.',
    detail: [
      'Instrument selection and stroke direction guided by assessment',
      'Typically combined with movement and loading work',
      'Applied to a defined region rather than the whole body',
    ],
    note: 'Performed by trained clinicians, where clinically appropriate following assessment.',
    icon: 'tool',
    image: 'recovery-iastm',
  },
  {
    id: '04',
    title: 'Ice Bath',
    tagline: 'Supervised cold immersion at −3°C to −7°C',
    fullName: 'Cold Water Immersion · −3°C to −7°C',
    summary:
      'Supervised cold water immersion at a controlled temperature, used as a structured part of a recovery plan rather than as a stand-alone treatment.',
    detail: [
      'Controlled temperature range of −3°C to −7°C',
      'Duration set individually and supervised throughout',
      'Screening completed before a first immersion',
      'Positioned deliberately relative to your training, since cold exposure timing matters',
    ],
    note: 'Screening is mandatory. Cold water immersion is not suitable for everyone — including people with certain cardiovascular, circulatory, neurological or blood pressure conditions, and during pregnancy. Tell us about your medical history and never use the ice bath unsupervised.',
    icon: 'snowflake',
    image: 'recovery-icebath',
  },
  {
    id: '05',
    title: 'Advanced Sauna',
    tagline: 'Stone heat, infrared and magnesium salt',
    fullName: 'Stone Heat · Infrared · Magnesium Salt',
    summary:
      'A heat experience combining stone heat and infrared with magnesium salt — built as a premium relaxation and recovery environment.',
    detail: [
      'Stone heat for deep, radiant warmth',
      'Infrared as a lower-ambient-temperature alternative',
      'Magnesium salt integrated into the session',
      'Duration and temperature guided per individual',
    ],
    note: 'Hydrate before and after. Not suitable during pregnancy or with certain cardiovascular conditions — please disclose your medical history before your first session.',
    icon: 'flame',
    image: 'recovery-sauna',
  },
  {
    id: '06',
    title: 'Pneumatic Compression',
    tagline: 'Sequential compression for legs, hips and arms',
    fullName: 'Sequential Compression Therapy',
    summary:
      'Sequential air compression applied to the legs, hips or arms, with pressure and cycle time set around your individual recovery requirement.',
    detail: [
      'Pressure, cycle and duration selected per session',
      'Commonly scheduled after long runs and heavy lower-body work',
      'Frequently paired with mobility work in the same visit',
    ],
    note: 'Not appropriate in the presence of certain circulatory conditions, active infection or suspected blood clots.',
    icon: 'compression',
    image: 'recovery-compression',
  },
  {
    id: '07',
    title: 'Red Light Therapy',
    tagline: 'Short, structured photobiomodulation sessions',
    fullName: 'Photobiomodulation',
    summary:
      'A light-based recovery and wellness modality delivered in short, structured sessions as one component of a wider recovery plan.',
    detail: [
      'Set exposure time and distance per session',
      'Applied regionally or over a larger area',
      'Eye protection provided',
    ],
    note: 'Offered as a recovery and wellness modality. We make no claims that it treats, cures or manages any disease or injury.',
    icon: 'lightbulb',
    image: 'recovery-redlight',
  },
  {
    id: '08',
    title: 'Cupping Therapy',
    tagline: 'Negative pressure within a soft tissue session',
    summary:
      'Negative-pressure cupping, incorporated into an individualised soft-tissue or recovery session where the assessment supports it.',
    detail: [
      'Static or dynamic cupping depending on the region',
      'Usually integrated into a broader hands-on session',
      'Temporary skin marking is expected and normal',
    ],
    note: 'Where clinically appropriate. Not applied over broken skin, and used with caution in people on blood-thinning medication.',
    icon: 'cupping',
    image: 'recovery-cupping',
  },
  {
    id: '09',
    title: 'Dry Needling',
    tagline: 'Fine-needle work on specific myofascial points',
    summary:
      'A fine-needle technique directed at specific myofascial points, used as part of a physiotherapy plan rather than as a booked stand-alone service.',
    detail: [
      'Always preceded by an assessment',
      'Single-use sterile needles',
      'Combined with movement and loading work afterwards',
      'Informed consent taken before the first treatment',
    ],
    note: 'Performed only by appropriately qualified professionals, where clinically appropriate. Not suitable for everyone — a screening conversation happens first.',
    icon: 'needle',
    image: 'recovery-needling',
  },
  {
    id: '10',
    title: 'TECAR Therapy',
    tagline: 'Energy transfer alongside manual therapy',
    fullName: 'Capacitive & Resistive Energy Transfer',
    summary:
      'An advanced physiotherapy modality that may be integrated into an individualised treatment plan, typically alongside manual therapy and exercise.',
    detail: [
      'Capacitive and resistive modes selected by the clinician',
      'Applied to a defined region as part of a session',
      'Combined with hands-on treatment and rehabilitation exercise',
    ],
    note: 'Contraindicated in some circumstances, including pregnancy and the presence of certain implanted electronic devices. Screening is completed first.',
    icon: 'zap',
    image: 'recovery-tecar',
  },
];

/** The four-stage loop shown on the recovery page — Assess → Select → Recover → Reassess. */
export const recoveryJourney = [
  {
    index: '01',
    title: 'Assess',
    summary:
      'Understand your current condition, training load, recent sessions and how your body has been responding.',
  },
  {
    index: '02',
    title: 'Select',
    summary:
      'Choose the modalities that fit that picture — and just as importantly, leave out the ones that do not.',
  },
  {
    index: '03',
    title: 'Recover',
    summary:
      'Run the session under supervision, with duration, intensity and sequence set for you rather than by a timer on a wall.',
  },
  {
    index: '04',
    title: 'Reassess',
    summary:
      'Review how you responded and adjust what happens next time. Recovery is a loop, not a one-off purchase.',
  },
];
