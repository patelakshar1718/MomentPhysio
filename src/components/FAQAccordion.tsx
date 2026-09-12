import type { Faq } from '@/data/types';
import { Icon } from './Icon';

/**
 * Native <details> accordion. See ServiceCard for why: keyboard and
 * screen-reader behaviour comes free, and no JavaScript ships for it.
 * Each item stays independently open — deliberately not an exclusive
 * accordion, since visitors often want to compare two answers.
 *
 * One bordered list rather than a stack of separate cards: a hairline
 * between rows reads as compact and uniform, where a gap-and-shadow per
 * question multiplies the same 8 rows into a lot of scroll.
 */
export function FAQAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl bg-elev-2">
      {items.map((faq) => (
        <details key={faq.question} className="group px-5 first:rounded-t-2xl last:rounded-b-2xl sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
            <span className="text-sm font-semibold tracking-[-0.01em] sm:text-base">
              {faq.question}
            </span>
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-fg">
              <Icon
                name="plus"
                size={16}
                className="transition-transform duration-300 group-open:rotate-45"
              />
            </span>
          </summary>
          <div className="pb-4">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
