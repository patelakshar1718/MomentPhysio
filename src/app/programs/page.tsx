import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { PageHeader } from '@/components/PageHeader';
import { ProgramCard } from '@/components/ProgramCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { StepTimeline } from '@/components/StepTimeline';
import { journey } from '@/data/process';
import { programs } from '@/data/programs';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Programs',
  description:
    'Goal-based 1-to-1 programs in Ahmedabad — injury recovery, athlete recovery, strength and conditioning, marathon performance, HYROX performance, mobility and personal performance.',
  path: '/programs',
  keywords: [
    'physiotherapy programs Ahmedabad',
    'injury recovery program',
    'strength and conditioning program',
    'marathon training program',
    'HYROX program',
  ],
});

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        video="hero-programs"
        eyebrow="Programs"
        title="Choose An Outcome, Not A Service List"
        lede="You should not have to work out which twelve of our twenty services you need. Pick the result you are after — the assessment decides what goes into the plan."
        crumbs={[{ label: 'Programs' }]}
        image="cta-band"
        imageAlt="Training and rehabilitation at the centre"
        chips={['7 pathways', 'Every one 1-to-1', 'Assessment first']}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="space-y-14 lg:space-y-20">
            {programs.map((program, i) => (
              <Reveal key={program.slug}>
                <ProgramCard
                  program={program}
                  variant="row"
                  reversed={i % 2 === 1}
                  anchorId={program.slug}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-surface="tint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Common to all of them"
            title="Every Program Runs The Same Six Steps"
            lede="The content differs enormously. The structure does not."
          />
          <div className="mt-16">
            <StepTimeline steps={journey} />
          </div>
        </div>
      </section>

      <section className="section-y-sm">
        <div className="container-x">
          <Reveal className="rounded-2xl border border-line bg-elev p-7 lg:p-10">
            <h2 className="display-md max-w-3xl">Not Sure Which One You Need?</h2>
            <p className="lede mt-5">
              That is a completely normal place to start, and it is what the assessment is for.
              Choose “Not Sure” on the booking form — we would rather spend the first session
              working it out properly than have you guess from a web page.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Start here"
        title="One Person. One Plan. One-to-One."
        body="Book a 1-to-1 assessment and we will tell you honestly which pathway fits — including if the answer is that you do not need us yet."
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
        ])}
      />
    </>
  );
}
