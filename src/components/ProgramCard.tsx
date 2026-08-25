import Link from 'next/link';
import type { Program } from '@/data/types';
import { Icon } from './Icon';

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="card card-hover flex h-full flex-col p-7 lg:p-8">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-text">
          <Icon name={program.icon} size={23} />
        </span>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-[-0.025em]">{program.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-subtle">{program.audience}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">{program.summary}</p>

      {/* Pathway */}
      <div className="mt-6">
        <p className="label-xs">The pathway</p>
        <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
          {program.stages.map((stage, i) => (
            <li key={stage} className="flex items-center gap-1.5">
              <span className="chip">{stage}</span>
              {i < program.stages.length - 1 && (
                <Icon name="arrowRight" size={13} className="text-subtle" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Outcomes */}
      <ul className="mt-6 flex-1 space-y-2 border-t border-line pt-5">
        {program.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-2.5 text-sm text-muted">
            <Icon name="check" size={14} className="mt-1 shrink-0 text-accent-text" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/contact?program=${program.slug}#book`}
        className="link-arrow mt-7"
        aria-label={`Book a 1-to-1 assessment for ${program.title}`}
      >
        Start with an assessment
        <Icon name="arrowRight" size={15} />
      </Link>
    </article>
  );
}
