'use client';

import { useRef } from 'react';
import type { Review } from '@/data/types';
import { Icon } from './Icon';

/**
 * Horizontal review rail.
 *
 * A scroll-snap track rather than a JS carousel: it is natively swipeable on
 * touch, keyboard-scrollable, and degrades to a plain scrolling list if the
 * arrow buttons never get clicked. The buttons just nudge scrollLeft.
 *
 * Quotes sit directly on the surface — no card frame — with the author row
 * separated by a hairline, which is how the testimonial band is composed.
 */
export function Reviews({ reviews, isPlaceholder }: { reviews: Review[]; isPlaceholder: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('article');
    const amount = card ? card.clientWidth + 32 : track.clientWidth * 0.8;
    track.scrollBy({ left: amount * direction, behavior: 'smooth' });
  }

  return (
    <div>
      <div className="mb-8 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous reviews"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:bg-accent hover:text-accent-on"
        >
          <Icon name="arrowRight" size={17} className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next reviews"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:bg-accent hover:text-accent-on"
        >
          <Icon name="arrowRight" size={17} />
        </button>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2"
        tabIndex={0}
        role="region"
        aria-label="Client reviews"
      >
        {reviews.map((review, i) => (
          <article
            key={`${review.author}-${i}`}
            className="flex w-[82vw] shrink-0 snap-start flex-col sm:w-[24rem]"
          >
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
        ))}
      </div>

      {isPlaceholder && (
        <p className="mt-8 rounded-2xl bg-accent-soft p-4 text-xs leading-relaxed text-muted">
          <strong className="text-fg">Setup required.</strong> These are placeholders, not real
          client feedback. Add your Google Place ID to <code>src/config/site.ts</code>, set{' '}
          <code>GOOGLE_PLACES_API_KEY</code>, then run <code>npm run reviews</code> to pull genuine
          reviews. Nothing on this site fabricates testimonials.
        </p>
      )}
    </div>
  );
}
