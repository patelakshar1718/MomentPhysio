import { site } from '@/config/site';

/**
 * Typographic wordmark — no logo file needed.
 *
 * A filled disc carrying a spine/movement glyph, then the name. The disc
 * inverts against whatever surface it sits on (white nav pill, teal footer),
 * which is why both halves read from the surface tokens rather than fixed hex.
 */
export function Wordmark({
  showLockup = true,
  className = '',
}: {
  showLockup?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-on"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M8 6.5h8M7 11h10M8 15.5h8M9.5 20h5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.1875rem] font-extrabold tracking-[-0.04em] whitespace-nowrap">
          Movement<span className="font-medium"> Team</span>
        </span>
        {showLockup && (
          <span className="mt-1 text-[0.625rem] font-medium tracking-[0.12em] text-subtle whitespace-nowrap">
            {site.lockup}
          </span>
        )}
      </span>
    </span>
  );
}
