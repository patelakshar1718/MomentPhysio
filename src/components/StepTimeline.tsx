import type { Step } from '@/data/types';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

/**
 * The customer journey: a vertical rail on mobile, a horizontal one from `lg`.
 * Not a shrunken desktop layout — the connector line, number placement and
 * text flow are all different between the two.
 */
export function StepTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative lg:grid lg:auto-cols-fr lg:grid-flow-col lg:gap-4">
      {/* Connector rail */}
      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-[1.4375rem] w-px bg-line lg:top-[1.4375rem] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
      />

      {steps.map((step, i) => (
        <Reveal as="li" key={step.index} delay={i * 70} className="relative pb-10 pl-16 lg:pb-0 lg:pl-0">
          <span className="absolute top-0 left-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-on lg:relative lg:mb-6">
            <span className="index-num text-sm">{step.index}</span>
          </span>

          <h3 className="text-lg font-semibold tracking-[-0.025em] lg:text-xl">
            {step.title}
          </h3>
          <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted lg:pr-6">
            {step.summary}
          </p>

          {step.detail && (
            <ul className="mt-4 space-y-1.5">
              {step.detail.map((d) => (
                <li key={d} className="flex gap-2 text-xs text-subtle">
                  <Icon name="check" size={12} className="mt-0.5 shrink-0 text-accent-text" />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
