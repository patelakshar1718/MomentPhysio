import { BookingForm } from '@/components/BookingForm';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { locations, site } from '@/config/site';
import { faqs } from '@/data/faqs';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact & Booking',
  description: `Book a 1-to-1 assessment at Movement Team, ${site.city}. Two centres in Maninagar and Naranpura — call, WhatsApp or send an enquiry.`,
  path: '/contact',
  keywords: [
    'physiotherapy Maninagar',
    'physiotherapy Naranpura',
    'book physiotherapy Ahmedabad',
    'sports massage booking Ahmedabad',
  ],
});

const contactFaqs = faqs.filter((f) => f.category === 'General');

export default function ContactPage() {
  return (
    <>
      <PageHeader
        video="hero-contact"
        eyebrow="Contact"
        title="Book Your 1-to-1 Assessment"
        lede="Four steps, about a minute. Tell us what you are looking for and our team will contact you to confirm a time at whichever centre suits you."
        crumbs={[{ label: 'Contact' }]}
        chips={['Maninagar', 'Naranpura', 'WhatsApp friendly']}
      />

      {/* ── Booking ───────────────────────────────────────────────────── */}
      <section id="book" className="section-y scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

          {/* ── Direct contact ──────────────────────────────────────── */}
          <aside className="lg:col-span-5">
            <div className="card p-7 lg:p-8">
              <h2 className="text-xl font-semibold tracking-[-0.025em]">Prefer to talk?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Call or message us directly. If you are unsure whether we are the right fit, say so
                — we would rather tell you honestly than book you in.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href={`tel:${site.phone.tel}`}
                  className="flex items-center gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-accent"
                >
                  <Icon name="phone" size={19} className="shrink-0 text-accent-text" />
                  <span>
                    <span className="block label-xs">
                      Call
                    </span>
                    <span className="mt-0.5 block text-sm">{site.phone.display}</span>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-accent"
                >
                  <Icon name="whatsapp" size={20} className="shrink-0 text-accent-text" />
                  <span>
                    <span className="block label-xs">
                      WhatsApp
                    </span>
                    <span className="mt-0.5 block text-sm">Message us directly</span>
                  </span>
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-accent"
                >
                  <Icon name="mail" size={19} className="shrink-0 text-accent-text" />
                  <span className="min-w-0">
                    <span className="block label-xs">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm">{site.email}</span>
                  </span>
                </a>

                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-accent"
                >
                  <Icon name="instagram" size={19} className="shrink-0 text-accent-text" />
                  <span className="min-w-0">
                    <span className="block label-xs">
                      Instagram
                    </span>
                    <span className="mt-0.5 block truncate text-sm">
                      @movement.team.physio.fitness
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-7 border-t border-line pt-6">
                <h3 className="flex items-center gap-2 label-xs">
                  <Icon name="clock" size={14} />
                  Opening hours
                </h3>
                <dl className="mt-3 space-y-1.5">
                  {site.openingHours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4 text-sm">
                      <dt className="text-muted">{h.days}</dt>
                      <dd className="text-fg">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Locations ─────────────────────────────────────────────────── */}
      <section data-surface="tint" className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Find us"
            title="Two Centres In Ahmedabad"
            lede="Both centres run the same 1-to-1 model. Tell us which is more convenient and we will book you there."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {locations.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 90}>
                <article className="card h-full overflow-hidden">
                  <iframe
                    src={loc.mapEmbedUrl}
                    title={`Map showing the ${loc.name} centre`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0 grayscale-[0.4]"
                  />
                  <div className="p-7">
                    <h3 className="display-md">{loc.name}</h3>
                    <address className="mt-4 text-sm leading-relaxed text-muted not-italic">
                      {loc.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      <span className="block">
                        {loc.locality} {loc.postalCode}
                      </span>
                    </address>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={`tel:${loc.phoneTel}`} className="btn btn-secondary btn-sm">
                        <Icon name="phone" size={14} />
                        {loc.phoneDisplay}
                      </a>
                      <a
                        href={loc.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <Icon name="mapPin" size={14} />
                        Get directions
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Before you come in"
              title="Good To Know"
              lede="What to expect from a first visit."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={contactFaqs} />
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
    </>
  );
}
