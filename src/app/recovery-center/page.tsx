import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { StepTimeline } from '@/components/StepTimeline';
import { faqs } from '@/data/faqs';
import { recoveryJourney, recoveryServices } from '@/data/recovery';
import { breadcrumbSchema, faqSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Advanced Recovery Center',
  description:
    'Sports massage, ice bath (−3°C to −7°C), stone-heat and infrared sauna, pneumatic compression, red light therapy, cupping, dry needling, IASTM and TECAR — ten supervised recovery modalities in Ahmedabad.',
  path: '/recovery-center',
  keywords: [
    'sports recovery centre Ahmedabad',
    'ice bath recovery',
    'sauna recovery',
    'sports massage',
    'pneumatic compression therapy',
    'red light therapy',
    'TECAR therapy',
  ],
});

const recoveryFaqs = faqs.filter((f) => f.category === 'Recovery' || f.category === 'General');

export default function RecoveryCenterPage() {
  return (
    <>
      <PageHeader
        video="hero-recovery"
        eyebrow="Pillar 02"
        title="Advanced Recovery Center"
        lede="Premium recovery modalities integrated into a personalized recovery experience — ten options, selected around your training load and current condition rather than sold by the minute."
        crumbs={[{ label: 'Recovery Center' }]}
        image="pillar-recovery"
        imageAlt="Recovery zone with cold immersion and heat facilities"
        chips={['10 modalities', 'Screened & supervised', 'Built into your training plan']}
      />

      {/* ── Positioning ───────────────────────────────────────────────── */}
      <section className="section-y-sm">
        <div className="container-x">
          <SectionHeader
            eyebrow="Not a machine rental"
            title="Recovery Is Part Of The Plan, Not A Vending Machine"
            lede="Anyone can sell you twelve minutes in a cold tub. The value is in knowing whether cold is the right choice this week at all, how long you should be in it, and where it sits relative to your heavy session on Thursday. That judgement is what you are actually booking."
          />
        </div>
      </section>

      {/* ── Modalities ────────────────────────────────────────────────── */}
      <section data-surface="mint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="The modalities"
            title="Ten Ways To Recover"
            lede="Expand any card to see what a session actually involves and the safety notes that apply to it."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recoveryServices.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ───────────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="The recovery experience"
            title="Assess → Select → Recover → Reassess"
            lede="Recovery is a loop. Every session feeds back into what the next one should be."
          />
          <div className="mt-16">
            <StepTimeline steps={recoveryJourney} />
          </div>
        </div>
      </section>

      {/* ── Safety ────────────────────────────────────────────────────── */}
      <section data-surface="mint" className="section-y-sm">
        <div className="container-x">
          <Reveal className="rounded-2xl border border-accent-line bg-accent-soft p-7 lg:p-10">
            <p className="flex items-center gap-2.5 label-xs text-accent-text">
              <Icon name="shieldCheck" size={17} />
              Screening &amp; safety
            </p>
            <h2 className="display-md mt-5 max-w-3xl">
              Some Of These Are Not Suitable For Everyone
            </h2>
            <div className="mt-6 grid gap-6 text-sm leading-relaxed text-muted md:grid-cols-2">
              <p>
                Cold water immersion, sauna, TECAR, pneumatic compression, dry needling and cupping
                all carry contraindications. Cardiovascular and circulatory conditions, blood
                pressure concerns, pregnancy, certain implanted electronic devices, blood-thinning
                medication, active infection and recent surgery can all change what is appropriate
                for you — or rule a modality out entirely.
              </p>
              <p>
                That is why a screening conversation happens before your first session, and why
                nothing here is available on a walk-in, unsupervised basis. Please tell us about
                your medical history honestly. If something is not appropriate for you, we will say
                so and use something that is.
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-subtle">
              Recovery modalities are offered as recovery and wellness services. They are not
              presented as treatments for any disease or injury, and we make no claims that they
              cure, heal or manage medical conditions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Questions" title="Recovery FAQs" />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={recoveryFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Book A Recovery Session"
        body="Tell us what you have been training and how your body is responding. We will work out which modalities make sense for you — and which ones do not."
        primaryLabel="Book 1-to-1 Assessment"
        secondaryLabel="Explore Training"
        secondaryHref="/personal-training"
        image="pillar-recovery"
      />

      <JsonLd data={faqSchema(recoveryFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Recovery Center', path: '/recovery-center' },
        ])}
      />
    </>
  );
}
