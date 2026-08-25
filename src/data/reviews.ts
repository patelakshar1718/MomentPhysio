import type { Review } from './types';
import generated from './generated/reviews.json';

/* ============================================================================
 * GOOGLE REVIEWS
 * ----------------------------------------------------------------------------
 * `generated/reviews.json` is rewritten by scripts/fetch-reviews.mjs during
 * `npm run build`. Until a Place ID and API key are configured it stays empty,
 * and the site falls back to the clearly-labelled placeholders below.
 *
 * Nothing here is ever presented as a real review unless it came from Google.
 * ==========================================================================*/

type GeneratedReviews = {
  fetchedAt: string | null;
  placeId: string | null;
  rating: number | null;
  totalRatings: number | null;
  reviews: Review[];
};

const data = generated as GeneratedReviews;

export const googleReviews: Review[] = data.reviews ?? [];

export const googleRating = {
  rating: data.rating,
  totalRatings: data.totalRatings,
  fetchedAt: data.fetchedAt,
};

/**
 * Shown only when no real reviews have been fetched. Deliberately generic and
 * attributed to "Placeholder" so it can never be mistaken for a real client.
 */
export const placeholderReviews: Review[] = [
  {
    author: 'Placeholder review',
    rating: 5,
    text: 'Real Google reviews will appear here once the Place ID and API key are configured. Nothing on this site invents client feedback.',
    relativeTime: 'awaiting setup',
    source: 'placeholder',
  },
  {
    author: 'Placeholder review',
    rating: 5,
    text: 'Add your Google Business Profile Place ID to src/config/site.ts and set GOOGLE_PLACES_API_KEY, then run npm run reviews.',
    relativeTime: 'awaiting setup',
    source: 'placeholder',
  },
  {
    author: 'Placeholder review',
    rating: 5,
    text: 'Reviews are fetched at build time and stored as static JSON, so no API key is ever exposed in the browser.',
    relativeTime: 'awaiting setup',
    source: 'placeholder',
  },
];

export const hasRealReviews = googleReviews.length > 0;

export const displayReviews: Review[] = hasRealReviews ? googleReviews : placeholderReviews;
