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
  title: 'Mobility Training',
  description:
    '1-to-1 mobility training in Ahmedabad — joint-by-joint assessment, active range work, assisted stretching and strength through new range, so mobility gains actually hold.',
  path: '/mobility-training',
  keywords: [
    'mobility training Ahmedabad',
    'stretching lab',
    'flexibility training',
    'joint mobility',
    'movement quality',
  ],
});

const FOCUS_AREAS = [
  { title: 'Hips', blurb: 'Flexion, rotation and extension — the joint most desk work steals from you.', icon: 'glutes' as const },
  { title: 'Thoracic spine', blurb: 'Rotation and extension for overhead positions and rotational sport.', icon: 'joint' as const },
  { title: 'Ankles', blurb: 'Dorsiflexion, which quietly limits squats, running and landing mechanics.', icon: 'activity' as const },
  { title: 'Shoulders', blurb: 'Overhead range with the control to own it under load.', icon: 'mobility' as const },
];

const STEPS = [
  { index: '01', title: 'Assess', summary: 'A joint-by-joint screen showing exactly where range is limited — and whether the limit is tissue, control or habit.' },
  { index: '02', title: 'Mobility', summary: 'Active work directed at the specific restrictions found, not a generic full-body routine.' },
  { index: '03', title: 'Stretching', summary: 'Assisted and structured stretching in the Stretching Lab, delivered 1-to-1.' },
  { index: '04', title: 'Strength', summary: 'Loading the new range so the body keeps it. This is the step most mobility work skips.' },
  { index: '05', title: 'Movement Control', summary: 'Owning the range in real positions — squats, lunges, overhead, rotation, running.' },
];

export default function MobilityTrainingPage() {
  return (
    <>
      <PageHeader
        video="hero-mobility"
        eyebrow="Program"
        title="Mobility Training"
        lede="Range you can control, not range you can demonstrate. Mobility work here always finishes with loading, because flexibility you cannot use under load does not survive contact with training."
        crumbs={[{ label: 'Performance', href: '/sports-performance' }, { label: 'Mobility Training' }]}
        image="performance-mobility"
        imageAlt="Assisted mobility work in the stretching lab"
        chips={['Joint-by-joint assessment', 'Assisted stretching', 'Strength through range']}
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="The distinction"
              title="Flexibility Is Not Mobility"
              lede="Flexibility is how far a joint can be moved. Mobility is how far you can move it yourself, with control, under load. Plenty of people are flexible and still cannot squat — because nothing ever taught the body to own the range it has."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted">
              That is why every mobility block here ends in strength work. Passive range that is
              never loaded reverts. Range you have earned through loading tends to stay.
            </p>
          </div>
          <div className="lg:col-span-6">
            <Media
              slot="training-stretch"
              alt="Assisted stretching session"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section data-surface="mint" className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="Common focus areas" title="Where Most People Are Restricted" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS_AREAS.map((area, i) => (
              <Reveal key={area.title} delay={i * 60} className="card p-7">
                <Icon name={area.icon} size={24} className="text-accent-text" />
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="The pathway" title="How The Mobility Program Runs" />
          <div className="mt-16">
            <StepTimeline steps={STEPS} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Find Out Where You Are Actually Restricted"
        body="A joint-by-joint assessment takes the guesswork out of it — and usually finds the restriction somewhere other than where it hurts."
        secondaryLabel="Explore Personal Training"
        secondaryHref="/personal-training"
        image="performance-mobility"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Sports Performance', path: '/sports-performance' },
          { name: 'Mobility Training', path: '/mobility-training' },
        ])}
      />
    </>
  );
}
