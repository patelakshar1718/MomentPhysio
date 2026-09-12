import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Media } from '@/components/Media';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { StepTimeline } from '@/components/StepTimeline';
import { faqs } from '@/data/faqs';
import { physioConditions, physioProcess, physiotherapyServices } from '@/data/physiotherapy';
import { slugify } from '@/lib/anchor';
import { breadcrumbSchema, faqSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Manual Physiotherapy',
  description:
    'Personalised 1-to-1 manual physiotherapy in Ahmedabad — manual therapy, joint mobilisation, injury rehabilitation, sports rehabilitation and return-to-sport training, individualised according to assessment.',
  path: '/physiotherapy',
  keywords: [
    'manual physiotherapy Ahmedabad',
    'sports physiotherapy',
    'injury rehabilitation',
    'post-operative rehabilitation',
    'movement assessment',
  ],
});

const physioFaqs = faqs.filter((f) => f.category === 'Physiotherapy' || f.category === 'General');

export default function PhysiotherapyPage() {
  return (
    <>
      <PageHeader
        video="hero-physiotherapy"
        eyebrow="Pillar 01"
        title="Manual Physiotherapy"
        lede="Personalized treatment and rehabilitation designed around your movement, your condition and your goals — delivered 1-to-1, from the first assessment to the last return-to-sport session."
        crumbs={[{ label: 'Physiotherapy' }]}
        image="pillar-physiotherapy"
        imageAlt="Physiotherapist delivering hands-on treatment"
        chips={['1-to-1 sessions', 'Assessment-led', 'Rehab to return-to-sport']}
      />

      {/* ── What we treat ─────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Treatment, not a protocol"
              title="Two People With The Same Diagnosis Do Not Get The Same Plan"
              lede="A diagnosis tells us what to look at. It does not tell us how you move, what you have already tried, what load your body is under, or what you need to get back to. That comes from the assessment — and the plan comes from there."
            />

            <div className="mt-10">
              <p className="label-xs">
                Commonly seen at the centre
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {physioConditions.map((condition) => (
                  <li key={condition} className="chip">
                    {condition}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 rounded-2xl border border-line bg-elev p-6">
              <p className="flex items-center gap-2 label-xs text-accent-text">
                <Icon name="shieldCheck" size={15} />
                How we talk about outcomes
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Physiotherapy is individualised according to assessment. Techniques are applied
                where clinically appropriate, and treatment is designed to support your
                rehabilitation — but no responsible clinician can guarantee pain relief, a
                permanent cure or a fixed recovery timeline, and we will not claim otherwise.
                What we will do is explain what we found, why we are doing what we are doing, and
                how we will measure whether it is working.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Media
              slot="facility-physio-1"
              alt="Assessment and treatment space at the physiotherapy area"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────── */}
      <section data-surface="tint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="What is available"
            title="Physiotherapy Services"
            lede="Techniques are selected from what the assessment shows — not applied as a fixed package."
          />

          <div className="mt-14 space-y-14 lg:space-y-20">
            {physiotherapyServices.map((service, i) => (
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

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="The pathway"
            title="How A Physiotherapy Engagement Runs"
            lede="Five stages, and you will always know which one you are in."
          />
          <div className="mt-16">
            <StepTimeline steps={physioProcess} />
          </div>
        </div>
      </section>

      {/* ── Combined care ─────────────────────────────────────────────── */}
      <section data-surface="tint" className="section-y-sm">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="The advantage of one roof"
              title="Treatment That Does Not Stop At The Treatment Table"
              lede="In most clinics, rehabilitation ends where the gym begins — and the handover never really happens. Here the physiotherapist and the performance coach are in the same building, working from the same assessment. Recovery modalities, strength work and return-to-sport progression are planned together, where professionally and clinically appropriate."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/recovery-center" className="btn btn-secondary">
                Explore Recovery
              </Link>
              <Link href="/personal-training" className="btn btn-secondary">
                Explore Training
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Media
              slot="about-approach"
              alt="Rehabilitation exercise being coached one to one"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Questions" title="Physiotherapy FAQs" />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={physioFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Book A Physiotherapy Assessment"
        body="Bring any scans, reports or operative notes you have, and wear clothing you can move in. You will leave understanding what was found and what happens next."
        primaryLabel="Book Physiotherapy Assessment"
        secondaryLabel="See All Programs"
        image="pillar-physiotherapy"
      />

      <JsonLd data={faqSchema(physioFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Physiotherapy', path: '/physiotherapy' },
        ])}
      />
    </>
  );
}
