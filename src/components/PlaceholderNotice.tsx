import { hasPlaceholders } from '@/config/site';

/**
 * Development-only reminder that the config still holds TODO values.
 *
 * Guarded on NODE_ENV so it is compiled out of the production build entirely —
 * a live visitor never sees it, but nobody on the team can forget that the
 * phone number is still 00000 00000 while clicking around locally.
 */
export function PlaceholderNotice() {
  if (process.env.NODE_ENV === 'production' || !hasPlaceholders) return null;

  return (
    <div className="fixed bottom-20 left-4 z-50 max-w-xs border border-accent bg-bg/95 p-3 text-xs shadow-card backdrop-blur md:bottom-4">
      <p className="label-xs text-accent-text">
        Dev notice
      </p>
      <p className="mt-1.5 leading-relaxed text-muted">
        Still placeholder in <code>src/config/site.ts</code>: the <strong>email address</strong> and
        the <strong>domain</strong>. Addresses, phone numbers and hours are real.
      </p>
    </div>
  );
}
