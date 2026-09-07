import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Media } from '@/components/Media';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { athleteTypes, performanceServices } from '@/data/performance';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Sports Performance',
  description:
    'Train like an athlete — agility and athletic ability, mobility, strength and conditioning, HYROX and marathon preparation, coached 1-to-1 in Ahmedabad.',
  path: '/sports-performance',
  keywords: [
    'sports performance training Ahmedabad',
    'athletic development',
    'agility training',
    'strength and conditioning',
    'return to sport',
  ],
});

const MEASURES = [
  { label: 'Mobility', detail: 'Range and control, joint by joint' },
  { label: 'Strength', detail: 'Load tolerance and force production' },
  { label: 'Movement', detail: 'Quality and compensation patterns' },
  { label: 'Conditioning', detail: 'Work capacity and repeatability' },
  { label: 'Performance', detail: 'Sport-specific output' },
  { label: 'Return to Sport', detail: 'Criteria met, not weeks elapsed' },
];

export default function SportsPerformancePage() {
  return (
    <>
      <PageHeader
        video="hero-performance"
        eyebrow="Performance"
        title="Train Like An Athlete"
        lede="Whether you compete every weekend or you simply want to move like someone who does — athletic qualities are trainable, and they are trained deliberately."
        crumbs={[{ label: 'Sports Performance' }]}
        image="performance-agility"
        imageAlt="Athlete performing agility work in the performance zone"
        chips={['Agility & speed', 'Strength & conditioning', 'HYROX & marathon']}
      />

      {/* ── Who ───────────────────────────────────────────────────────── */}
      <section className="section-y-sm">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Who this is for"
              title="Competitive Or Not, The Qualities Are The Same"
              lede="Speed, agility, balance, coordination, power and the capacity to repeat them. A cricketer and a 40-year-old who wants to stop feeling slow are training the same system — at different intensities."
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {athleteTypes.map((type) => (
                <li key={type} className="chip">
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Media
              slot="performance-strength"
              alt="Strength and conditioning session in progress"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ── Programmes ────────────────────────────────────────────────── */}
      <section data-surface="tint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Programs"
            title="Five Areas Of Athletic Development"
            lede="Blocks are built from these according to your sport, your calendar and what the assessment found."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {performanceServices.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Progress ──────────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Measurement"
            title="Progress That You Can Measure"
            lede="Baselines are taken at assessment and retested at set intervals. If a marker is not moving, the programme changes — that is the entire point of measuring it."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MEASURES.map((measure, i) => (
              <Reveal key={measure.label} delay={(i % 3) * 60} className="card p-7">
                <div className="flex items-center gap-2.5">
                  <Icon name="chart" size={19} className="text-accent-text" />
                  <h3 className="text-base font-semibold tracking-[-0.02em]">{measure.label}</h3>
                </div>
                <p className="mt-3 text-sm text-muted">{measure.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 rounded-2xl border border-line bg-elev p-6">
            <p className="text-xs leading-relaxed text-subtle">
              <strong className="text-muted">On results:</strong> this page shows what we measure,
              not claimed outcomes. We do not publish before-and-after comparisons, percentage
              improvement claims or client results that we cannot evidence. Your own numbers are
              recorded at assessment and shared with you at every retest — those are the only
              results that matter to your programme.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Find Out What Your Body Can Actually Do"
        body="The assessment gives you a baseline across mobility, strength, movement and conditioning. Everything after that is built on it."
        secondaryLabel="See All Programs"
        image="performance-agility"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Sports Performance', path: '/sports-performance' },
        ])}
      />
    </>
  );
}
