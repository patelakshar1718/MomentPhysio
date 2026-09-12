import Link from 'next/link';
import type { CSSProperties } from 'react';
import { site } from '@/config/site';
import { HERO_SLIDE_SECONDS, heroSlides } from '@/data/heroSlides';
import { HeroSlideshow } from './HeroSlideshow';
import { Icon } from './Icon';

/**
 * The first five seconds of the brand.
 *
 * Footage and words: a four-frame slideshow (physio, assessment, training,
 * recovery) runs full-bleed behind the panel, and the visible "headline" is
 * that same list of four, one highlighted at a time as its frame comes up.
 * The h1 carries the actual brand line for SEO/screen readers but is not
 * shown — the animated list is what a sighted visitor sees. No photo tiles
 * compete with the footage, and no brand tint sits on top — just a neutral
 * shade heavy enough on the left to keep the copy legible on a bright frame.
 *
 * The strip below the panel is deliberately not statistics: every figure is a
 * fact about how the centre runs, not a marketing number.
 */
export function Hero() {
  return (
    <>
      <section
        data-surface="stone"
        className="relative isolate flex min-h-[38rem] items-center lg:min-h-[46rem]"
      >
        <HeroSlideshow />

        <div className="container-x pt-36 pb-16 lg:pt-40 lg:pb-24">
          <div className="over-video max-w-3xl">
            <p className="chip chip-accent mb-7">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get Your Body Future Proof.
            </p>

            <h1 className="sr-only">Recover Better. Move Better. Perform Better.</h1>

            <ul className="display-xl">
              {heroSlides.map((slide, i) => (
                <li
                  key={slide.slot}
                  className="hero-slide-nav-item"
                  style={{ '--slide-delay': `${i * HERO_SLIDE_SECONDS}s` } as CSSProperties}
                >
                  {slide.label}
                </li>
              ))}
            </ul>

            <p className="lede mt-7">
              Personalized 1-to-1 physiotherapy, advanced recovery, personal training and sports
              performance — designed around your body and your goals.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#book" className="btn btn-primary">
                Book 1-to-1 Assessment
                <Icon name="arrowRight" size={16} />
              </Link>
              <Link href="/programs" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>

            <p className="mt-10 text-sm text-muted">
              Physiotherapy · Sports performance · Strength training · Recovery — all under one
              roof.
            </p>
          </div>
        </div>
      </section>

      {/* ── Proposition strip ─────────────────────────────────────────── */}
      <div className="container-x">
        <dl className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-5 lg:py-16">
          {[
            { term: '1L+', desc: 'Patients treated' },
            { term: '1:1', desc: 'Every single session' },
            { term: '3', desc: 'Physio · Recovery · Training' },
            { term: '10', desc: 'Recovery modalities' },
            { term: '2', desc: `Centres in ${site.city}` },
          ].map((item) => (
            <div key={item.term} className="flex items-center gap-4">
              <dt className="index-num text-4xl text-fg sm:text-5xl">{item.term}</dt>
              <dd className="max-w-[11rem] text-sm leading-snug text-muted">{item.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
