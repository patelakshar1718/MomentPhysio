import Link from 'next/link';
import type { ReactNode } from 'react';
import { HeroVideo } from './HeroVideo';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  /** Breadcrumb trail, excluding Home which is prepended automatically. */
  crumbs?: { label: string; href?: string }[];
  /** Accepted for API compatibility; page headers no longer render a photo. */
  image?: string;
  imageAlt?: string;
  /** Background video slot from src/lib/videos.ts. */
  video?: string;
  /** Short stat or claim chips shown under the lede. */
  chips?: string[];
};

/**
 * The panel every inner page opens with: footage behind, breadcrumb, rule,
 * title and lede over it. Nothing else — no photograph competing with the
 * clip, and no brand tint on top of it.
 *
 * `eyebrow` and `image` are accepted but no longer rendered: the breadcrumb
 * already says where you are, and the background is the video.
 */
export function PageHeader({
  title,
  lede,
  crumbs = [],
  video,
  chips,
}: PageHeaderProps) {
  return (
    <section data-surface="stone" className="relative isolate">
      <HeroVideo slot={video} />

      <div className="over-video container-x pt-36 pb-16 lg:pt-48 lg:pb-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-fg">
            <li>
              <Link href="/" className="text-muted transition-colors hover:text-fg">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-muted">
                  ›
                </span>
                {c.href ? (
                  <Link href={c.href} className="text-muted transition-colors hover:text-fg">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <hr className="mt-5 border-0 border-t border-line" />

        <Reveal>
          <h1 className="display-xl mt-8 max-w-4xl">{title}</h1>
          <p className="lede mt-5">{lede}</p>

          {chips && chips.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li key={chip} className="chip chip-accent">
                  {chip}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#book" className="btn btn-primary">
              Book Appointment
              <Icon name="arrowRight" size={16} />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
