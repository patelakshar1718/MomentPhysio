import { CTASection } from '@/components/CTASection';
import { FacilityGallery } from '@/components/FacilityGallery';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Media } from '@/components/Media';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { StepTimeline } from '@/components/StepTimeline';
import { TeamCard } from '@/components/TeamCard';
import { site } from '@/config/site';
import { philosophy, whyUs } from '@/data/process';
import { team, teamIsPlaceholder } from '@/data/team';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About',
  description:
    'Movement Team is a hybrid physiotherapy, recovery and human-performance centre in Ahmedabad. One team, one roof, and every session delivered 1-to-1.',
  path: '/about',
  keywords: ['about Movement Team', 'physiotherapy centre Ahmedabad', 'sports performance centre'],
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        video="hero-about"
        eyebrow="About"
        title="One Centre. One Team. One-to-One."
        lede="Movement Team is not a clinic that added a gym, or a gym that hired a physiotherapist. It was built from the start as one place where treatment, recovery and training are planned together."
        crumbs={[{ label: 'About' }]}
        image="about-story"
        imageAlt="Inside the Movement Team centre"
        chips={[`${site.city}, ${site.region}`, 'Two centres', '1-to-1 only']}
      />

      {/* ── The problem ───────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Why this exists"
              title="The Gap Between The Clinic And The Gym"
              lede="The familiar version goes like this. You get injured. A physiotherapist treats you until the pain settles. You are discharged. You go back to a gym where nobody has read a word of that assessment, you train the way you always did, and a few months later you are back where you started."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                The problem is not the physiotherapy or the training. It is the handover between
                them — the point where the plan stops being anyone's responsibility.
              </p>
              <p>
                So we removed the handover. Physiotherapy, recovery and performance training happen
                in the same building, run by one team working from the same assessment. When your
                physiotherapist decides you are ready to load, the coach who loads you already knows
                why. When recovery is needed, it is scheduled — not suggested.
              </p>
              <p>
                And because everything is 1-to-1, nobody is ever guessing what you did last week.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Media
              slot="about-approach"
              alt="Coaching a client through rehabilitation exercise"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────────────────────── */}
      <section data-surface="mint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="The method"
            title="Assess. Personalize. Progress."
            lede="Three stages that apply whether you arrive with a shoulder problem or a race entry."
          />
          <div className="mt-16">
            <StepTimeline steps={philosophy} />
          </div>
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="What makes it different" title="Six Things We Will Not Compromise On" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 60} className="card p-8">
                <Icon name={item.icon} size={26} className="text-accent-text" />
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────────────── */}
      <section id="team" className="section-y scroll-mt-24" data-surface="mint">
        <div className="container-x">
          <SectionHeader
            eyebrow="The team"
            title="Who You Will Actually Be Working With"
            lede="Every session is delivered by an appropriately trained professional — and you will know which one before you arrive."
          />

          {teamIsPlaceholder && (
            <Reveal className="mt-10 rounded-2xl border border-accent-line bg-accent-soft p-5">
              <p className="text-xs leading-relaxed text-muted">
                <strong className="text-accent-text">Awaiting real details.</strong> The cards below
                are structural placeholders. No name, qualification, experience figure or
                certification shown here is real — they are marked as unconfirmed so nothing
                invented can go live by accident. Replace them in{' '}
                <code>src/data/team.ts</code> and add photos to{' '}
                <code>public/images/</code>.
              </p>
            </Reveal>
          )}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={`${member.role}-${i}`} delay={(i % 4) * 60}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facility ──────────────────────────────────────────────────── */}
      <section id="facility" className="section-y scroll-mt-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="The facility"
            title="Four Zones, One Building"
            lede="Treatment, recovery, performance and 1-to-1 training each have dedicated space — which is the only way the three disciplines can genuinely run together."
          />
          <div className="mt-16">
            <FacilityGallery />
          </div>

          <Reveal className="mt-12 rounded-2xl border border-line bg-elev p-6">
            <p className="text-xs leading-relaxed text-subtle">
              <strong className="text-muted">Note on photography:</strong> the images currently on
              this site are royalty-free placeholders, not photographs of these centres. Replace
              them with real facility photography before launch — see <code>IMAGES.md</code>.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Start here"
        title="Come And See How You Actually Move"
        body="The 1-to-1 assessment is the front door to all of it — physiotherapy, recovery and training alike."
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        image="about-story"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
    </>
  );
}
