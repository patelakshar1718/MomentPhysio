import Link from 'next/link';
import { footerNav } from '@/config/nav';
import { locations, site } from '@/config/site';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';
import { Wordmark } from './Wordmark';

const socialLinks = [
  { href: site.socials.instagram, label: 'Instagram', icon: 'instagram' as const },
  { href: site.socials.facebook, label: 'Facebook', icon: 'facebook' as const },
  { href: site.socials.youtube, label: 'YouTube', icon: 'youtube' as const },
].filter((s) => s.href);

/** The closing teal panel: brand, four link columns, and the disclaimer. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-surface="stone">
      <div className="container-x py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Wordmark showLockup={false} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{site.description}</p>

            {/* The theme toggle lives here rather than in the header: the nav
                pill has no room left for it at the xl breakpoint. */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-accent hover:bg-accent hover:text-accent-on"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
              <ThemeToggle className="h-11 w-11" />
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            <FooterColumn title="Services" links={footerNav.services} />
            <FooterColumn title="Company" links={footerNav.company} />
            <FooterColumn title="Legal" links={footerNav.legal} />
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">Stay Connected</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="flex items-center gap-2.5 py-1.5 text-muted transition-colors hover:text-fg"
                >
                  <Icon name="phone" size={15} className="shrink-0" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 py-1.5 text-muted transition-colors hover:text-fg"
                >
                  <Icon name="mail" size={15} className="shrink-0" />
                  {site.email}
                </a>
              </li>
              {locations.map((loc) => (
                <li key={loc.id} className="flex items-start gap-2.5 text-muted">
                  <Icon name="mapPin" size={15} className="mt-0.5 shrink-0" />
                  <span>
                    {loc.name}, {loc.locality}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-muted">
                <Icon name="clock" size={15} className="mt-0.5 shrink-0" />
                <span>
                  {site.openingHours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <Link href="/contact#book" className="btn btn-primary btn-sm mt-6">
              Book Appointment
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>

        {/* Medical disclaimer — required on every page, so it lives in the footer. */}
        <div className="mt-14 border-t border-line pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-subtle">
            <strong className="text-muted">Medical disclaimer:</strong> Information on this website
            is provided for general informational purposes and does not constitute medical advice,
            diagnosis or treatment. Individual treatments and recovery modalities are provided only
            where appropriate following professional assessment and applicable safety protocols.
            Always seek the advice of a qualified health professional regarding a medical condition.{' '}
            <Link
              href="/medical-disclaimer"
              className="text-fg underline underline-offset-2"
            >
              Read the full disclaimer
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-col gap-4 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p>
              {site.city}, {site.region} · India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
      {/* py-1.5 lifts each link to ~31px tall — over the 24px WCAG 2.5.8 minimum
          without the column becoming a ladder of whitespace. */}
      <ul className="mt-4 space-y-1">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="inline-block py-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
