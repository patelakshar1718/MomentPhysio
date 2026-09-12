import { HERO_SLIDE_SECONDS, heroSlides } from '@/data/heroSlides';
import { imageSrc, imageSrcWebp } from '@/lib/images';

/**
 * Four-frame slideshow standing in for the home hero's old video.
 *
 * Pure CSS, no timer: every slide runs the same crossfade + Ken Burns
 * animation on a 20s loop, staggered by a 5s `animation-delay` each — so the
 * four frames round-robin in perfect sync without a client component. Same
 * approach as <HeroVideo />: a server component shipping zero JS.
 *
 * Which slide is "up" is named on screen by the highlighted list in <Hero>,
 * not here — the two read `heroSlides` off the same array so they can never
 * fall out of sync.
 */
export function HeroSlideshow() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      {heroSlides.map((slide, i) => {
        const delay = `${i * HERO_SLIDE_SECONDS}s`;
        return (
          <div key={slide.slot} className="hero-slide" style={{ animationDelay: delay }}>
            <picture>
              <source srcSet={imageSrcWebp(slide.slot)} type="image/webp" />
              <img
                src={imageSrc(slide.slot)}
                alt=""
                className="hero-slide-img h-full w-full object-cover"
                style={{ animationDelay: delay }}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'auto'}
              />
            </picture>
          </div>
        );
      })}

      <div className="hero-scrim absolute inset-0" />
    </div>
  );
}
