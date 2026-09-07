import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Hero } from '@/components/Hero';
import { Icon } from '@/components/Icon';
import { InstagramGrid } from '@/components/InstagramGrid';
import { JsonLd } from '@/components/JsonLd';
import { Media } from '@/components/Media';
import { Reveal } from '@/components/Reveal';
import { Reviews } from '@/components/Reviews';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { StepTimeline } from '@/components/StepTimeline';
import { site } from '@/config/site';
import { faqs } from '@/data/faqs';
import { journey, philosophy, pillars, segments, whyUs } from '@/data/process';
import { programs } from '@/data/programs';
import { recoveryServices } from '@/data/recovery';
import { displayReviews, hasRealReviews } from '@/data/reviews';
import { faqSchema } from '@/lib/seo';

const homeFaqs = faqs.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── 1-to-1 philosophy ─────────────────────────────────────────── */}
      <section className="section-y" aria-labelledby="philosophy-heading">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Media
              slot="facility-physio-1"
              alt={`A 1-to-1 assessment in progress at ${site.name}`}
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="The 1-to-1 approach"
              title={
                <span id="philosophy-heading">
                  Your Body. Your Goals.
                  <br />
                  <em>Your Program.</em>
                </span>
              }
              lede="Every individual has a different body, history, movement pattern, fitness level and goal. So we work 1-to-1 — no generic treatment protocols, no off-the-shelf workout plans, no session where a coach is watching six people at once."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {philosophy.map((stage, i) => (
                <Reveal key={stage.index} delay={i * 90}>
                  <span className="index-num text-2xl text-accent-text">{stage.index}</span>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">{stage.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{stage.summary}</p>
                </Reveal>
              ))}
            </div>

            <Link href="/about" className="btn btn-primary mt-10">
              About More
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Three pillars ─────────────────────────────────────────────── */}
      <section data-surface="tint" className="section-y" aria-labelledby="pillars-heading">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="One centre, three disciplines"
            title={
              <span id="pillars-heading">
                Everything Your Body Needs,
                <br />
                <em>In One Place</em>
              </span>
            }
            lede="Physiotherapy, recovery and training are not three separate businesses here. They are three parts of one plan, run by one team who talk to each other."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delay={i * 90}>
                <article className="card card-hover group flex h-full flex-col p-3">
                  <Media
                    slot={pillar.image}
                    alt={`${pillar.title} at ${site.name}`}
                    aspect="aspect-[16/11]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />

                  <div className="flex flex-1 flex-col px-3 pt-6 pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="display-md">{pillar.title}</h3>
                      <Link
                        href={pillar.href}
                        className="arrow-disc"
                        aria-label={`${pillar.cta} — ${pillar.title}`}
                      >
                        <Icon name="arrowRight" size={18} className="-rotate-45" />
                      </Link>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">{pillar.summary}</p>

                    <ul className="mt-6 flex-1 space-y-2">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm text-muted">
                          <Icon name="check" size={14} className="mt-1 shrink-0 text-accent-text" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ──────────────────────────────────────────────── */}
      <section className="section-y-sm" aria-labelledby="segments-heading">
        <div className="container-x">
          <SectionHeader
            eyebrow="Who we work with"
            title={
              <span id="segments-heading">
                You Do Not Need An Injury. <em>Or A Sport.</em>
              </span>
            }
            lede="Five very different people walk through the door, and every one of them gets the same thing: an assessment first, then a plan built for them."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {segments.map((segment, i) => (
              <Reveal key={segment.title} delay={i * 60}>
                <Link href={segment.href} className="card card-hover group flex h-full flex-col p-6">
                  <h3 className="text-base font-semibold tracking-[-0.02em]">{segment.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {segment.summary}
                  </p>
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="mt-5 text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-text"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recovery showcase ─────────────────────────────────────────── */}
      <section className="section-y" aria-labelledby="recovery-heading">
        <div className="container-x">
          <SectionHeader
            eyebrow="Advanced Recovery Center"
            title={
              <span id="recovery-heading">
                Ten Modalities. <em>One Recovery Plan.</em>
              </span>
            }
            lede="Premium recovery modalities integrated into a personalised recovery experience — selected around your training load and current condition, not sold as a machine you rent by the minute."
            aside={
              <Link href="/recovery-center" className="btn btn-primary">
                Explore Recovery
                <Icon name="arrowRight" size={16} />
              </Link>
            }
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {recoveryServices.map((service, i) => (
              <Reveal key={service.id} delay={(i % 5) * 60}>
                <ServiceCard service={service} variant="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ──────────────────────────────────────────────────── */}
      <section data-surface="tint" className="section-y" aria-labelledby="programs-heading">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="Goal-based programs"
            title={
              <span id="programs-heading">
                Pick An Outcome, <em>Not A Service List</em>
              </span>
            }
            lede="You should not have to choose between twenty services to work out what you need. Choose the result you want and the plan follows from your assessment."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((program, i) => (
              <Reveal key={program.slug} delay={(i % 3) * 80}>
                <Link href="/programs" className="card card-hover group flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-text">
                      <Icon name={program.icon} size={22} />
                    </span>
                    <span className="arrow-disc" aria-hidden="true">
                      <Icon name="arrowRight" size={18} className="-rotate-45" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{program.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {program.summary}
                  </p>
                  <ol className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2">
                    {program.stages.map((stage, s) => (
                      <li key={stage} className="flex items-center gap-1.5">
                        <span className="text-xs text-subtle">{stage}</span>
                        {s < program.stages.length - 1 && (
                          <span aria-hidden="true" className="text-subtle">
                            ·
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/programs" className="btn btn-primary">
              All Programs
              <Icon name="arrowRight" size={16} />
            </Link>
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
              slot="about-story"
              alt={`Inside the ${site.name} centre`}
              aspect="aspect-[4/3]"
              className="lg:sticky lg:top-10"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

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
          <div className="mt-12">
            <Reviews reviews={displayReviews} isPlaceholder={!hasRealReviews} />
          </div>
        </div>
      </section>

      {/* ── Instagram ─────────────────────────────────────────────────── */}
      <section className="section-y-sm" aria-labelledby="instagram-heading">
        <div className="container-x">
          <SectionHeader
            eyebrow="On Instagram"
            title={<span id="instagram-heading">Inside The Centre</span>}
            aside={
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Icon name="instagram" size={16} />
                Follow @movement.team.physio.fitness
              </a>
            }
          />
          <div className="mt-10">
            <InstagramGrid />
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
