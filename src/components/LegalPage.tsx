import type { ReactNode } from 'react';
import { PageHeader } from './PageHeader';

/**
 * Shared shell for privacy / terms / disclaimer.
 * Constrains the measure to ~72 characters, which is what makes long-form
 * legal copy readable rather than a wall.
 */
export function LegalPage({
  eyebrow,
  title,
  lede,
  updated,
  video,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  /** Hero background clip; see src/lib/videos.ts. */
  video?: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        lede={lede}
        video={video}
        crumbs={[{ label: title }]}
      />

      <section className="section-y">
        <div className="container-x">
          <p className="label-xs">
            Last updated: {updated}
          </p>

          <div className="mt-10 max-w-[72ch] space-y-10">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-[-0.025em]">{heading}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted [&_a]:text-accent-text [&_a]:underline [&_a]:underline-offset-2 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
