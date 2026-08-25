import Link from 'next/link';
import { Icon } from './Icon';
import { Media } from './Media';
import { Reveal } from './Reveal';

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Background image slot; omitted by default — the band reads as flat teal. */
  image?: string;
};

export function CTASection({
  eyebrow = 'Start here',
  title,
  body,
  primaryLabel = 'Book 1-to-1 Assessment',
  primaryHref = '/contact#book',
  secondaryLabel = 'Explore Our Services',
  secondaryHref = '/programs',
  image,
}: CTASectionProps) {
  return (
    <section data-surface="teal" className="relative isolate">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Media
            slot={image}
            alt=""
            aspect="h-full"
            className="h-full opacity-20"
            sizes="100vw"
            rounded={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b6657] via-[#0e7b69]/90 to-[#0e7b69]/60" />
        </div>
      )}

      <div className="container-x section-y">
        <Reveal className="max-w-3xl">
          <p>
            <span className="eyebrow mb-5">{eyebrow}</span>
          </p>
          <h2 className="display-lg">{title}</h2>
          {body && <p className="lede mt-6">{body}</p>}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={primaryHref} className="btn btn-primary">
              {primaryLabel}
              <Icon name="arrowRight" size={16} />
            </Link>
            <Link href={secondaryHref} className="btn btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
