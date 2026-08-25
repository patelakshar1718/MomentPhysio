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
  title: 'HYROX Training',
  description:
    'Structured 1-to-1 HYROX preparation in Ahmedabad — strength for the stations, conditioning across race distance, compromised running, transitions and recovery, built around your race date.',
  path: '/hyrox-training',
  keywords: [
    'HYROX training Ahmedabad',
    'hybrid race preparation',
    'functional fitness training',
    'compromised running',
    'HYROX coach India',
  ],
});

const COMPONENTS = [
  {
    title: 'Strength for the stations',
    icon: 'strength' as const,
    blurb:
      'Sled push and pull, farmers carry, lunges and wall balls each demand something different. Strength work is built station by station.',
  },
  {
    title: 'Compromised running',
    icon: 'run' as const,
    blurb:
      'The eight kilometres are not the hard part. Running well immediately after a sled is — so that is trained specifically.',
  },
  {
    title: 'Conditioning',
    icon: 'hiit' as const,
    blurb:
      'Work capacity across full race distance, so the last three stations are not a different race from the first three.',
  },
  {
    title: 'Functional movement',
    icon: 'agility' as const,
    blurb:
      'Technique under fatigue. Form that survives at minute fifty is worth more than form that looks good at minute five.',
  },
  {
    title: 'Transitions',
    icon: 'refresh' as const,
    blurb:
      'The minutes hiding in the roxzone. Practised, not left to race-day improvisation.',
  },
  {
    title: 'Recovery',
    icon: 'snowflake' as const,
    blurb:
      'Placed between key sessions so the training block is sustainable, using the recovery centre downstairs.',
  },
];

const STEPS = [
  { index: '01', title: 'Strength', summary: 'Build the base the stations demand — and find out which ones you are currently weakest at.' },
  { index: '02', title: 'Conditioning', summary: 'Extend work capacity across the full race distance, not just single stations.' },
  { index: '03', title: 'Functional Training', summary: 'Movement patterns, technique under fatigue, and compromised running.' },
  { index: '04', title: 'Recovery', summary: 'Scheduled recovery between key sessions, sharpening into race week.' },
];

export default function HyroxTrainingPage() {
  return (
    <>
      <PageHeader
        video="hero-hyrox"
        eyebrow="Program"
        title="HYROX Training"
        lede="Eight kilometres of running, eight stations, and the transitions in between. Hybrid racing punishes anyone who trained strength and endurance as separate hobbies."
        crumbs={[{ label: 'Performance', href: '/sports-performance' }, { label: 'HYROX Training' }]}
        image="performance-hyrox"
        imageAlt="Functional training equipment used in hybrid race preparation"
        chips={['First-timers welcome', 'Station-specific work', 'Race-date structured']}
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="The demand"
              title="A Strength Athlete And A Runner Both Struggle Here"
              lede="The strong athlete blows up on the running. The runner stalls on the sled. HYROX rewards the person who trained both — and specifically trained the handover between them."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Preparation starts from where you actually are. Your assessment shows which half of
              the race is your problem, and the block is weighted accordingly rather than split
              evenly for the sake of it.
            </p>
          </div>
          <div className="lg:col-span-6">
            <Media
              slot="training-hiit"
              alt="High-intensity functional training session"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section data-surface="mint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="What preparation covers"
            title="Six Components Of A HYROX Block"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPONENTS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 60} className="card p-7">
                <Icon name={item.icon} size={24} className="text-accent-text" />
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="The pathway" title="How A HYROX Block Runs" />
          <div className="mt-16">
            <StepTimeline steps={STEPS} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="First Race Or Chasing A Time?"
        body="Either way the starting point is the same: an assessment that shows which part of the race is going to hurt you most."
        secondaryLabel="Explore Marathon Training"
        secondaryHref="/marathon-training"
        image="performance-hyrox"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Sports Performance', path: '/sports-performance' },
          { name: 'HYROX Training', path: '/hyrox-training' },
        ])}
      />
    </>
  );
}
