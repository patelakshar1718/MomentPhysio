import type { Review } from '@/data/types';
import { Icon } from './Icon';

/**
 * A loose field of floating review cards rather than a single-file rail.
 *
 * Every card sits at a different resting height (alternating margin by
 * column) and drifts gently up and down on its own out-of-phase loop — pure
 * CSS, negative `animation-delay` staggers the phase so nothing pops in
 * synchronised on load. No JS, no scroll track: all reviews are visible at
 * once, which is the point of "floating" rather than "scroll to see more."
 */
export function Reviews({ reviews, isPlaceholder }: { reviews: Review[]; isPlaceholder: boolean }) {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <div
            key={`${review.author}-${i}`}
            className={`review-float ${
              i % 3 === 1 ? 'lg:mt-12' : i % 3 === 2 ? 'lg:-mt-6' : ''
            }`}
            style={{ animationDelay: `${-(i * 1.3).toFixed(1)}s` }}
          >
            <article className="card shadow-card flex h-full flex-col p-7">
              <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon
                    key={s}
                    name="star"
                    size={15}
                    filled={s < review.rating}
                    className={s < review.rating ? 'text-fg' : 'text-subtle opacity-40'}
                  />
                ))}
              </div>

              <p className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                “{review.text}”
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-fg"
                >
                  {review.author.trim().charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{review.author}</p>
                  <p className="text-xs text-subtle">
                    {review.source === 'google' ? 'Google review' : 'Placeholder'} ·{' '}
                    {review.relativeTime}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {isPlaceholder && (
        <p className="mt-10 rounded-2xl bg-accent-soft p-4 text-xs leading-relaxed text-muted">
          <strong className="text-fg">Setup required.</strong> These are placeholders, not real
          client feedback. Add each centre&rsquo;s Google Place ID to its entry in{' '}
          <code>src/config/site.ts</code>, set <code>GOOGLE_PLACES_API_KEY</code>, then run{' '}
          <code>npm run reviews</code> to pull genuine reviews. Nothing on this site fabricates
          testimonials.
        </p>
      )}
    </div>
  );
}
