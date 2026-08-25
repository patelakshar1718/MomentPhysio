import type { TeamMember } from './types';

/* ============================================================================
 * TEAM — PLACEHOLDER DATA
 * ----------------------------------------------------------------------------
 * No qualification, experience figure or certification below is real. They are
 * structural placeholders so the layout can be built and reviewed.
 *
 * To go live: replace each entry with genuine details, drop the matching photo
 * into /public/images/team/, and set `placeholder: false`. Any member still
 * marked `placeholder: true` renders with a visible "Details to be confirmed"
 * badge, so nothing invented can reach a live site unnoticed.
 * ==========================================================================*/

export const team: TeamMember[] = [
  {
    name: 'Team Member Name',
    role: 'Sports Physiotherapist',
    qualification: 'Qualification to be confirmed',
    experience: 'Experience to be confirmed',
    specialisations: ['Manual Therapy', 'Sports Rehabilitation', 'Movement Assessment'],
    certifications: ['Certification to be confirmed'],
    image: 'team-1',
    placeholder: true,
  },
  {
    name: 'Team Member Name',
    role: 'Performance Coach',
    qualification: 'Qualification to be confirmed',
    experience: 'Experience to be confirmed',
    specialisations: ['Strength & Conditioning', 'HYROX', 'Athletic Performance'],
    certifications: ['Certification to be confirmed'],
    image: 'team-2',
    placeholder: true,
  },
  {
    name: 'Team Member Name',
    role: 'Physiotherapist',
    qualification: 'Qualification to be confirmed',
    experience: 'Experience to be confirmed',
    specialisations: ['Injury Rehabilitation', 'Post-Operative Rehabilitation', 'Dry Needling'],
    certifications: ['Certification to be confirmed'],
    image: 'team-3',
    placeholder: true,
  },
  {
    name: 'Team Member Name',
    role: 'Recovery Therapist',
    qualification: 'Qualification to be confirmed',
    experience: 'Experience to be confirmed',
    specialisations: ['Sports Massage', 'Soft Tissue Therapy', 'Recovery Protocols'],
    certifications: ['Certification to be confirmed'],
    image: 'team-4',
    placeholder: true,
  },
];

export const teamIsPlaceholder = team.some((m) => m.placeholder);
