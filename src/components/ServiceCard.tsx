import { site } from '@/config/site';
import type { Service } from '@/data/types';
import { Icon } from './Icon';
import { Media } from './Media';

type ServiceCardProps = {
  service: Service;
  /** "detailed" adds the photo and an expandable panel; "compact" is a plain tile. */
  variant?: 'detailed' | 'compact';
};

/**
 * Uses a native <details>/<summary> disclosure rather than React state.
 *
 * That buys keyboard support, screen-reader semantics and in-page find
 * ("find in page" expands a closed <details> in modern browsers) for zero
 * JavaScript — which matters on a page rendering ten of these at once.
 */
export function ServiceCard({ service, variant = 'detailed' }: ServiceCardProps) {
  const hasPanel = Boolean(service.detail?.length || service.note);

  if (variant === 'compact') {
    return (
      <div className="card card-hover group flex h-full flex-col p-6">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-text">
          <Icon name={service.icon} size={24} />
        </span>
        <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{service.title}</h3>
        {service.fullName && (
          <p className="mt-1 text-xs text-subtle">{service.fullName}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
        {service.note && (
          <p className="mt-4 rounded-xl bg-elev-2 p-3 text-xs leading-relaxed text-subtle">
            {service.note}
          </p>
        )}
      </div>
    );
  }

  return (
    <article className="card card-hover group flex h-full flex-col p-3">
      <Media
        slot={service.image}
        alt={`${service.title} at ${site.name}`}
        aspect="aspect-[16/11]"
        placeholderLabel={service.title}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-[-0.025em]">{service.title}</h3>
          <span className="arrow-disc" aria-hidden="true">
            <Icon name="arrowRight" size={18} className="-rotate-45" />
          </span>
        </div>

        {service.fullName && (
          <p className="mt-1.5 text-xs font-medium text-accent-text">{service.fullName}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>

        {hasPanel && (
          <details className="group/d mt-5 border-t border-line pt-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-accent-text [&::-webkit-details-marker]:hidden">
              What this involves
              <Icon
                name="plus"
                size={16}
                className="shrink-0 transition-transform duration-300 group-open/d:rotate-45"
              />
            </summary>

            <div className="pt-4">
              {service.detail && (
                <ul className="space-y-2">
                  {service.detail.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted">
                      <Icon name="check" size={14} className="mt-1 shrink-0 text-accent-text" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {service.note && (
                <p className="mt-4 rounded-xl bg-elev-2 p-3 text-xs leading-relaxed text-subtle">
                  <span className="mb-1 flex items-center gap-1.5 font-semibold text-muted">
                    <Icon name="shieldCheck" size={13} />
                    Safety &amp; scope
                  </span>
                  {service.note}
                </p>
              )}
            </div>
          </details>
        )}
      </div>
    </article>
  );
}
