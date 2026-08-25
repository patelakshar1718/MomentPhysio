import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: 'left' | 'center';
  /** Rendered to the right of the title on wide screens (usually a CTA). */
  aside?: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
};

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = 'left',
  aside,
  className = '',
  as: Heading = 'h2',
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <Reveal
      className={`${centered ? 'mx-auto max-w-3xl text-center' : ''} ${
        aside ? 'flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between' : ''
      } ${className}`}
    >
      <div className={centered ? '' : 'max-w-3xl'}>
        {eyebrow && (
          <p className={centered ? 'flex justify-center' : ''}>
            <span className="eyebrow mb-4">{eyebrow}</span>
          </p>
        )}
        <Heading className="display-lg">{title}</Heading>
        {lede && <div className={`lede mt-5 ${centered ? 'mx-auto' : ''}`}>{lede}</div>}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </Reveal>
  );
}
