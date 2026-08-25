import type { IconName } from '@/components/Icon';

export type Service = {
  /** Zero-padded index rendered as the card's number: 01, 02, … */
  id: string;
  title: string;
  /** Expanded/technical name shown under the title where one exists. */
  fullName?: string;
  summary: string;
  /** Bullet points shown when the card is expanded. */
  detail?: string[];
  /** Safety or scope-of-practice note. Rendered in an outlined callout. */
  note?: string;
  icon: IconName;
  /** Image slot name in /public/images — see IMAGES.md. */
  image?: string;
};

export type Program = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  /** Ordered stages rendered as an arrow-separated pathway. */
  stages: string[];
  outcomes: string[];
  icon: IconName;
};

export type Step = {
  index: string;
  title: string;
  summary: string;
  detail?: string[];
};

export type Faq = {
  question: string;
  answer: string;
  category: 'General' | 'Physiotherapy' | 'Recovery' | 'Training';
};

export type TeamMember = {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  specialisations: string[];
  certifications: string[];
  image?: string;
  /** True until real credentials are supplied — drives the placeholder badge. */
  placeholder: boolean;
};

export type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto?: string;
  source: 'google' | 'instagram' | 'placeholder';
};
