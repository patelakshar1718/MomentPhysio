import type { SVGProps } from 'react';

/**
 * A hand-rolled stroke icon set.
 *
 * Deliberately not an icon library: this is ~40 icons, they all need to share
 * one stroke weight and one visual language, and shipping a dependency for
 * that would cost more bytes than the icons themselves.
 */
const paths = {
  // ── Physiotherapy ──────────────────────────────────────────────────────────
  hand: (
    <>
      <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M11 12V4.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M14 12V6.5a1.5 1.5 0 0 1 3 0V13" />
      <path d="M17 13v-1.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-1.5" />
      <path d="M8 14.5 6.2 12.7a1.5 1.5 0 0 0-2.1 2.1L6 17" />
    </>
  ),
  joint: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 8.8V3M12 21v-5.8M8.8 12H3M21 12h-5.8" />
    </>
  ),
  wave: (
    <>
      <path d="M2 8c2.5-3 5-3 7.5 0S15 11 17.5 8 22 5 22 5" />
      <path d="M2 14c2.5-3 5-3 7.5 0s5.5 3 8 0 4.5-3 4.5-3" />
      <path d="M2 20c2.5-3 5-3 7.5 0" />
    </>
  ),
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  clipboard: (
    <>
      <path d="M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10v-6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 6H4.5v1.5A3.5 3.5 0 0 0 8 11M17 6h2.5v1.5A3.5 3.5 0 0 1 16 11" />
      <path d="M12 14v3M9 20h6M10 17h4l.5 3h-5z" />
    </>
  ),
  refresh: (
    <>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" />
      <path d="M20.5 4v5h-5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 4.5-9 4.5-9-4.5z" />
      <path d="m3 12.5 9 4.5 9-4.5M3 17l9 4.5 9-4.5" />
    </>
  ),
  run: (
    <>
      <circle cx="15.5" cy="4.5" r="2" />
      <path d="M6 21l3-5 3.5-2.5L11 9l-3.5 2L6 14" />
      <path d="m11 9 3.5-2 3 3.5 3 1" />
      <path d="m12.5 13.5 2 3.5.5 4" />
    </>
  ),

  // ── Recovery ───────────────────────────────────────────────────────────────
  massage: (
    <>
      <path d="M3 15c3-4 6-6 9-6s6 2 9 6" />
      <path d="M3 15a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3" />
      <path d="M8.5 9.5 9 6M12 9V5M15.5 9.5 15 6" />
    </>
  ),
  theragun: (
    <>
      <rect x="9.5" y="3" width="5" height="8" rx="1.5" />
      <path d="M12 11v3" />
      <rect x="8" y="14" width="8" height="7" rx="2" />
      <path d="M4 6.5 6 8M4 12h2.5M20 6.5 18 8M20 12h-2.5" />
    </>
  ),
  tool: (
    <>
      <path d="M14.5 3.5a4 4 0 0 0 5 5L9 19a2.8 2.8 0 1 1-4-4z" />
      <path d="m13 9-2 2" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2v20M4.2 7l15.6 10M19.8 7 4.2 17" />
      <path d="M12 6.5 9.5 4M12 6.5 14.5 4M12 17.5 9.5 20M12 17.5l2.5 2.5" />
      <path d="m6.8 9.3-3.4-.6M6.8 14.7l-3.4.6M17.2 9.3l3.4-.6M17.2 14.7l3.4.6" />
    </>
  ),
  flame: (
    <>
      <path d="M12 22a6 6 0 0 0 6-6c0-4-3.5-6-4.5-9.5C13 4 12 2 12 2s-1 3-3 5.5S6 12 6 16a6 6 0 0 0 6 6z" />
      <path d="M12 22a2.8 2.8 0 0 0 2.8-2.8c0-1.8-2.8-3.7-2.8-3.7s-2.8 1.9-2.8 3.7A2.8 2.8 0 0 0 12 22z" />
    </>
  ),
  compression: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="3" />
      <path d="M7 8h10M7 12h10M7 16h10" />
      <path d="M3.5 10.5 2 12l1.5 1.5M20.5 10.5 22 12l-1.5 1.5" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 17a5.5 5.5 0 1 1 6 0v2a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19z" />
      <path d="M10 21.5h4" />
    </>
  ),
  cupping: (
    <>
      <circle cx="8" cy="9" r="3.2" />
      <circle cx="16.5" cy="14.5" r="3.2" />
      <path d="M8 12.2V21M16.5 3v8.3" />
    </>
  ),
  needle: (
    <>
      <path d="M21 3 9.5 14.5" />
      <path d="m17.5 3 3.5 3.5M12.5 11.5l-3.5-1-3 3 4.5 4.5 3-3z" />
      <path d="M7.5 16.5 3 21" />
    </>
  ),
  zap: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,

  // ── Training ───────────────────────────────────────────────────────────────
  dumbbell: (
    <>
      <path d="M3.5 9v6M6.5 7v10M17.5 7v10M20.5 9v6" />
      <path d="M6.5 12h11" />
    </>
  ),
  strength: (
    <>
      <path d="M4 12h3l2-4 3 8 2.5-6 1.5 3h4" />
      <path d="M2 8v8M22 8v8" />
    </>
  ),
  stretch: (
    <>
      <circle cx="9" cy="4" r="2" />
      <path d="M9 6.5V12l-4 3M9 12l5 1.5 2 5" />
      <path d="M9 8.5 14 7l4 2" />
      <path d="m5 15-1 5" />
    </>
  ),
  mobility: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18" />
      <path d="M12 7.5a4.5 4.5 0 0 0 0 9" />
    </>
  ),
  glutes: (
    <>
      <path d="M12 3v6" />
      <path d="M12 9c-3.5 0-6 2.2-6 5.2A4.8 4.8 0 0 0 10.8 19h2.4A4.8 4.8 0 0 0 18 14.2C18 11.2 15.5 9 12 9z" />
      <path d="M12 9v10" />
    </>
  ),
  hiit: (
    <>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <path d="m4.9 4.9 2.9 2.9M16.2 16.2l2.9 2.9M19.1 4.9l-2.9 2.9M7.8 16.2l-2.9 2.9" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  agility: (
    <>
      <path d="M3 20 8 9l4 6 3-4 6 9z" />
      <path d="M3 20h18" />
      <circle cx="8" cy="5" r="2" />
    </>
  ),
  hyrox: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1" />
      <path d="M13.5 21V13.5H21" />
    </>
  ),

  // ── Value props ────────────────────────────────────────────────────────────
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  chart: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21v-6M11 21V9M16 21v-9M21 21V5" />
    </>
  ),
  badge: (
    <>
      <path d="m12 2 2.6 1.9 3.2-.2.9 3.1 2.5 2-1.5 2.9 1.5 2.9-2.5 2-.9 3.1-3.2-.2L12 21.5l-2.6-1.9-3.2.2-.9-3.1-2.5-2L4.3 11.7 2.8 8.8l2.5-2 .9-3.1 3.2.2z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),

  // ── UI ─────────────────────────────────────────────────────────────────────
  arrowRight: <path d="M4 12h16m-6-6 6 6-6 6" />,
  arrowUp: <path d="M12 20V4m-6 6 6-6 6 6" />,
  arrowDown: <path d="M12 4v16m6-6-6 6-6-6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 13 4 4L19 7" />,
  close: <path d="M6 6 18 18M18 6 6 18" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  phone: (
    <path d="M6.6 3h-2A1.6 1.6 0 0 0 3 4.7C3 14 10 21 19.3 21a1.6 1.6 0 0 0 1.7-1.6v-2a1.6 1.6 0 0 0-1.3-1.6l-2.6-.5a1.6 1.6 0 0 0-1.6.7l-.9 1.3a13 13 0 0 1-5.9-5.9l1.3-.9a1.6 1.6 0 0 0 .7-1.6l-.5-2.6A1.6 1.6 0 0 0 6.6 3z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </>
  ),
  moon: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />,
  star: (
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
  ),
  whatsapp: (
    <path d="M12.03 3a8.94 8.94 0 0 0-7.6 13.66L3 21.5l4.98-1.38A8.94 8.94 0 1 0 12.03 3zm4.4 12.4c-.2.55-1.16 1.07-1.6 1.11-.43.05-.83.2-2.8-.6-2.36-.95-3.86-3.4-3.98-3.55-.11-.16-.95-1.29-.95-2.46s.6-1.75.82-1.98a.85.85 0 0 1 .62-.3h.44c.14 0 .34-.05.52.42l.72 1.78c.06.13.1.28 0 .44l-.28.42-.4.44c-.13.13-.27.27-.12.53.15.26.66 1.12 1.42 1.81.98.89 1.8 1.16 2.06 1.3.26.13.4.11.56-.07l.8-.94c.18-.22.35-.17.58-.09l1.66.8c.24.11.4.17.46.27.06.1.06.56-.14 1.11z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14.5 8.5H17V5.2h-2.6c-2.5 0-4 1.5-4 4v2.1H8v3.3h2.4V21h3.4v-6.4h2.5l.4-3.3h-2.9V9.7c0-.8.3-1.2 1.3-1.2z" />
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 5 2.5-5 2.5z" />
    </>
  ),
  quote: (
    <path d="M9 5c-3 1.5-5 4.5-5 8v6h6v-7H6c0-2.5 1.2-4.5 3-5.4zm10 0c-3 1.5-5 4.5-5 8v6h6v-7h-4c0-2.5 1.2-4.5 3-5.4z" />
  ),
  shieldCheck: (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10v-6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
  /** Filled icons (whatsapp, facebook, star, quote) need fill, not stroke. */
  filled?: boolean;
};

const FILLED: IconName[] = ['whatsapp', 'facebook', 'quote'];

export function Icon({ name, size = 24, filled, ...rest }: IconProps) {
  const isFilled = filled ?? FILLED.includes(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
