import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Hero } from '@/components/Hero';
import { Icon } from '@/components/Icon';
import { InstagramSpotlight } from '@/components/InstagramSpotlight';
import { JsonLd } from '@/components/JsonLd';
import { Media } from '@/components/Media';
import { Reveal } from '@/components/Reveal';
import { Reviews } from '@/components/Reviews';
import { SectionHeader } from '@/components/SectionHeader';
import { StepTimeline } from '@/components/StepTimeline';
import { locations, site } from '@/config/site';
import { faqs } from '@/data/faqs';
import { journey, whyUs } from '@/data/process';
import { displayReviews, hasRealReviews } from '@/data/reviews';
import { imageSrc, imageSrcWebp } from '@/lib/images';
import { faqSchema } from '@/lib/seo';

const homeFaqs = faqs.slice(0, 8);

/** One real interior shot per centre — matched to `locations` by index. */
const STUDIO_IMAGES = ['about-story', 'facility-physio-2'];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Reviews ───────────────────────────────────────────────────── */}
      <section data-surface="stone" className="section-y" aria-labelledby="reviews-heading">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="What clients say"
            title={
              <span id="reviews-heading">
                Stories That Reflect <em>Real Recovery</em>
              </span>
            }
            lede={
              hasRealReviews
                ? 'Pulled directly from our Google Business profile when this site was last built.'
                : 'Real Google reviews appear here once the profile is connected. We do not write our own testimonials.'
            }
          />
          <div className="mt-14">
            <Reviews reviews={displayReviews} isPlaceholder={!hasRealReviews} />
          </div>
        </div>
      </section>

      {/* ── Our studios ───────────────────────────────────────────────── */}
      <section className="section-y" aria-labelledby="studios-heading">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="Two centres in Ahmedabad"
            title={<span id="studios-heading">Our Studios</span>}
            lede="Both centres run the same 1-to-1 model. Tap a studio to get directions."
          />
        </div>

        <div className="container-x-wide mt-14 grid gap-6 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 90}>
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate block h-[22rem] overflow-hidden rounded-2xl lg:h-[30rem]"
              >
                <picture>
                  <source srcSet={imageSrcWebp(STUDIO_IMAGES[i])} type="image/webp" />
                  <img
                    src={imageSrc(STUDIO_IMAGES[i])}
                    alt={`Inside the ${loc.name} centre`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </picture>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 p-7 text-white sm:p-9">
                  <h3 className="display-md">{loc.name}</h3>
                  <address className="max-w-xs text-sm leading-relaxed text-white/80 not-italic">
                    {loc.addressLines.join(', ')}, {loc.locality} {loc.postalCode}
                  </address>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold tracking-[0.08em] text-fg uppercase transition-transform duration-300 group-hover:translate-x-1">
                    Get Directions
                    <Icon name="arrowRight" size={14} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Instagram spotlight ──────────────────────────────────────── */}
      <section data-surface="tint" className="section-y" aria-labelledby="instagram-spotlight-heading">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="On Instagram"
            title={<span id="instagram-spotlight-heading">Follow The Everyday Work</span>}
            lede="No stock photography — every frame here is a real session at the centre."
          />
          <div className="mt-14">
            <InstagramSpotlight />
          </div>
        </div>
      </section>

      {/* ── Journey ───────────────────────────────────────────────────── */}
      <section className="section-y" aria-labelledby="journey-heading">
        <div className="container-x">
          <SectionHeader
            eyebrow="How it works"
            title={
              <span id="journey-heading">
                From First Assessment To <em>Long-Term Performance</em>
              </span>
            }
            lede="Six steps, in order, every time — whether you arrive with a torn hamstring or a marathon twelve weeks out."
          />
          <div className="mt-16">
            <StepTimeline steps={journey} />
          </div>
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────────────────────── */}
      <section className="section-y" aria-labelledby="why-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why Movement Team"
              title={
                <span id="why-heading">
                  What Makes <em>This Different</em>
                </span>
              }
            />

            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 70}>
                  <Icon name={item.icon} size={26} className="text-accent-text" />
                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.summary}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Media
              slot="about-approach"
              alt={`Inside the ${site.name} centre`}
              aspect="aspect-[4/3]"
              className="lg:sticky lg:top-10"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="section-y" aria-labelledby="faq-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="FAQ"
              title={
                <span id="faq-heading">
                  Frequently Asked
                  <br />
                  <em>Questions</em>
                </span>
              }
              lede="Find quick answers to common questions about appointments, treatments, and what to expect during your care and recovery process."
            />
            <Link href="/contact" className="link-arrow mt-8">
              Ask us something else
              <Icon name="arrowRight" size={15} />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Start here"
        title="Your Next Level Starts With Understanding Your Body."
        body="Whether your goal is to recover from an injury, improve mobility, build strength, prepare for a marathon, train for HYROX, or simply perform better — start with a personalized 1-to-1 assessment."
      />

      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
