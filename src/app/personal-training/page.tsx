import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { faqs } from '@/data/faqs';
import { trainingServices } from '@/data/training';
import { slugify } from '@/lib/anchor';
import { breadcrumbSchema, faqSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Personal Training',
  description:
    '100% 1-to-1 personal training in Ahmedabad — strength training, stretching lab, mobility, gluteal lab and high-intensity conditioning. No group classes, no generic workout plans.',
  path: '/personal-training',
  keywords: [
    '1-to-1 personal training Ahmedabad',
    'personal trainer Ahmedabad',
    'strength training',
    'stretching lab',
    'mobility training',
    'glute training',
  ],
});

const trainingFaqs = faqs.filter((f) => f.category === 'Training' || f.category === 'General');

const CONTRASTS = [
  {
    them: 'A coach split across six people',
    us: 'One coach, one client, the whole session',
  },
  {
    them: 'A programme downloaded from a template',
    us: 'A programme written from your assessment',
  },
  {
    them: 'Queueing for a rack at 7pm',
    us: 'A booked slot in a dedicated 1-to-1 space',
  },
  {
    them: 'Injuries handled somewhere else',
    us: 'A physiotherapist in the same building',
  },
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHeader
        video="hero-training"
        eyebrow="Pillar 03"
        title="Personal Training. Completely 1-to-1."
        lede="No generic workout plans. No crowded group sessions. Your training is built around your goals, your body and what your assessment actually showed."
        crumbs={[{ label: 'Personal Training' }]}
        image="pillar-training"
        imageAlt="One-to-one strength coaching in the performance zone"
        chips={['100% 1-to-1', 'Assessment-led programming', 'Physio on site']}
      />

      {/* ── Contrast ──────────────────────────────────────────────────── */}
      <section className="section-y-sm">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why 1-to-1"
            title="This Is Not A Gym Membership"
            lede="The difference is not the equipment. It is who is watching you use it."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {CONTRASTS.map((row, i) => (
              <Reveal key={row.us} delay={(i % 2) * 70} className="card p-7">
                <p className="flex items-start gap-2.5 text-sm text-subtle line-through decoration-1">
                  <Icon name="close" size={15} className="mt-0.5 shrink-0 no-underline" />
                  <span>{row.them}</span>
                </p>
                <p className="mt-3 flex items-start gap-2.5 text-sm font-medium text-fg">
                  <Icon name="check" size={15} className="mt-0.5 shrink-0 text-accent-text" />
                  <span>{row.us}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────── */}
      <section data-surface="tint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="What you can train"
            title="Six Ways To Work"
            lede="Most clients combine two or three of these across a training block, rather than picking one and staying there."
          />

          <div className="mt-14 space-y-14 lg:space-y-20">
            {trainingServices.map((service, i) => (
              <Reveal key={service.id}>
                <ServiceCard
                  service={service}
                  variant="row"
                  reversed={i % 2 === 1}
                  anchorId={slugify(service.title)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-links ───────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Going further"
            title="Training With A Sport Or A Race In Mind?"
            lede="Personal training is the foundation. If you are working toward something specific, these build on top of it."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Sports Performance',
                href: '/sports-performance',
                blurb: 'Agility, speed, athletic development and return to competition.',
                icon: 'agility' as const,
              },
              {
                title: 'Mobility Training',
                href: '/mobility-training',
                blurb: 'Usable range you can control under load.',
                icon: 'mobility' as const,
              },
              {
                title: 'Marathon Training',
                href: '/marathon-training',
                blurb: 'The strength and recovery around your running plan.',
                icon: 'run' as const,
              },
              {
                title: 'HYROX Training',
                href: '/hyrox-training',
                blurb: 'Hybrid strength and endurance for race day.',
                icon: 'hyrox' as const,
              },
            ].map((item, i) => (
              <Reveal key={item.href} delay={i * 70}>
                <Link href={item.href} className="card card-hover group flex h-full flex-col p-7">
                  <Icon name={item.icon} size={25} className="text-accent-text" />
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.blurb}</p>
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="mt-6 text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-text"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section data-surface="tint" className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Questions" title="Training FAQs" />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={trainingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Start With An Assessment, Not A Workout"
        body="The first session is not a workout — it is where we find out how you move, what you can load, and what your programme should actually be."
        secondaryLabel="Explore Performance"
        secondaryHref="/sports-performance"
        image="pillar-training"
      />

      <JsonLd data={faqSchema(trainingFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Personal Training', path: '/personal-training' },
        ])}
      />
    </>
  );
}
