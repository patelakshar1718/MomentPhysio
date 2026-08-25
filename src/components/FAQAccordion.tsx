import type { Faq } from '@/data/types';
import { Icon } from './Icon';

/**
 * Native <details> accordion. See ServiceCard for why: keyboard and
 * screen-reader behaviour comes free, and no JavaScript ships for it.
 * Each item stays independently open — deliberately not an exclusive
 * accordion, since visitors often want to compare two answers.
 */
export function FAQAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl bg-elev-2 px-5 py-1 transition-colors sm:px-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="flex-1">
              <span className="text-base font-semibold tracking-[-0.02em] sm:text-lg">
                {faq.question}
              </span>
              <span className="mt-1.5 block text-[0.6875rem] font-medium tracking-[0.14em] text-subtle uppercase">
                {faq.category}
              </span>
            </span>
            <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center text-fg">
              <Icon
                name="plus"
                size={18}
                className="transition-transform duration-300 group-open:rotate-45"
              />
            </span>
          </summary>
          <div className="pb-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
