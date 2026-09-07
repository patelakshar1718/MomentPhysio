import Link from 'next/link';
import { site } from '@/config/site';
import { HeroVideo } from './HeroVideo';
import { Icon } from './Icon';

/**
 * The first five seconds of the brand.
 *
 * Footage and words, nothing else: the clip runs full-bleed behind the panel
 * and the only thing over it is the proposition. No photo tiles compete with
 * the video, and no brand tint sits on top of it — just a neutral shade heavy
 * enough on the left to keep the headline legible on a bright frame.
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
        <HeroVideo slot="hero-home" />

        <div className="container-x pt-36 pb-16 lg:pt-40 lg:pb-24">
          <div className="over-video max-w-3xl">
            <p className="chip chip-accent mb-7">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              1-to-1 only · {site.city}
            </p>

            <h1 className="display-xl">
              Recover Better. Move Better.
              <br />
              <em>Perform Better.</em>
            </h1>

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
        <dl className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4 lg:py-16">
          {[
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
