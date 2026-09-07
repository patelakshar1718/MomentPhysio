import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Media } from '@/components/Media';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { StepTimeline } from '@/components/StepTimeline';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Marathon Training',
  description:
    'Marathon and long-distance running support in Ahmedabad — runner-specific strength, mobility, conditioning, load management and recovery built around your running plan.',
  path: '/marathon-training',
  keywords: [
    'marathon training Ahmedabad',
    'running strength training',
    'runner injury prevention',
    'long distance running support',
    'half marathon preparation',
  ],
});

const PILLARS = [
  {
    title: 'Strength',
    icon: 'strength' as const,
    blurb:
      'Single-leg strength, posterior chain and calf capacity — the tissues that absorb every one of those thousands of foot strikes.',
  },
  {
    title: 'Mobility',
    icon: 'mobility' as const,
    blurb:
      'Hips, ankles and thoracic spine. Restriction in any of the three shows up in your gait somewhere.',
  },
  {
    title: 'Conditioning',
    icon: 'hiit' as const,
    blurb:
      'Conditioning that supports the running plan rather than competing with it for recovery.',
  },
  {
    title: 'Running support',
    icon: 'run' as const,
    blurb:
      'Load management across the block, so weekly mileage rises at a rate your tissues can follow.',
  },
  {
    title: 'Recovery',
    icon: 'refresh' as const,
    blurb:
      'Massage, compression and heat scheduled around long runs — placed deliberately, not whenever you feel sore.',
  },
  {
    title: 'Rehabilitation',
    icon: 'shield' as const,
    blurb:
      'If something flares mid-block, the physiotherapist is in the same building. No lost weeks finding a clinic.',
  },
];

const STEPS = [
  { index: '01', title: 'Assessment', summary: 'Running history, injury history, current mileage, race date, and a movement and strength baseline.' },
  { index: '02', title: 'Strength', summary: 'A runner-specific strength block that fits around your key running sessions.' },
  { index: '03', title: 'Mobility', summary: 'Targeted work on the restrictions that are affecting your gait.' },
  { index: '04', title: 'Running Support', summary: 'Load managed across the block, with adjustments when life or the body interferes.' },
  { index: '05', title: 'Recovery', summary: 'Recovery modalities placed around long runs and heavy weeks through to race week.' },
];

export default function MarathonTrainingPage() {
  return (
    <>
      <PageHeader
        video="hero-marathon"
        eyebrow="Program"
        title="Marathon Training"
        lede="Most marathon blocks are not lost to a lack of running. They are lost to the strength, mobility and recovery work that never happened around it."
        crumbs={[{ label: 'Performance', href: '/sports-performance' }, { label: 'Marathon Training' }]}
        image="performance-marathon"
        imageAlt="Distance runner training on the road"
        chips={['Runner-specific strength', 'Load management', 'Physio on site']}
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="What we do"
              title="We Do Not Write Your Running Plan. We Protect It."
              lede="If you already have a coach or a plan you trust, keep it. What we build is everything around the running — the strength, mobility, conditioning and recovery that determines whether you arrive at the start line intact."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted">
              And if you do not have a plan yet, the assessment is still the right place to start:
              it tells us what your body can currently absorb before mileage goes anywhere.
            </p>
          </div>
          <div className="lg:col-span-6">
            <Media
              slot="training-strength"
              alt="Strength work supporting distance running"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section data-surface="tint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="The six parts"
            title="What Surrounds The Miles"
            lede="Six components, weighted differently depending on where you are in the block."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 3) * 60} className="card p-7">
                <Icon name={pillar.icon} size={24} className="text-accent-text" />
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="The pathway" title="From Assessment To Race Week" />
          <div className="mt-16">
            <StepTimeline steps={STEPS} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Bring Us Your Race Date"
        body="The further out you start, the more we can do with the block. But there is useful work to do at any point — including the fortnight before."
        secondaryLabel="Explore HYROX Training"
        secondaryHref="/hyrox-training"
        image="performance-marathon"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Sports Performance', path: '/sports-performance' },
          { name: 'Marathon Training', path: '/marathon-training' },
        ])}
      />
    </>
  );
}
