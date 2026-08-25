'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/config/site';
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '@/lib/whatsapp';
import { Icon } from './Icon';

/**
 * Persistent quick-actions: WhatsApp, call, book, back-to-top.
 *
 * Two distinct layouts rather than one responsive blob — a floating stack on
 * desktop, a fixed bottom bar on mobile where thumb reach matters. The mobile
 * bar is why <body> carries bottom padding on small screens: without it the bar
 * would cover the last few lines of every page.
 */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const wa = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <>
      {/* ── Desktop stack ──────────────────────────────────────────────── */}
      <div className="fixed right-5 bottom-5 z-40 hidden flex-col gap-2.5 md:flex">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-elev text-fg shadow-card transition-all duration-300 hover:border-accent hover:text-accent-text ${
            showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          <Icon name="arrowUp" size={18} />
        </button>

        <a
          href={`tel:${site.phone.tel}`}
          aria-label={`Call ${site.name}`}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-elev text-fg shadow-card transition-colors hover:border-accent hover:text-accent-text"
        >
          <Icon name="phone" size={18} />
        </a>

        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-on shadow-card transition-colors hover:bg-accent-hover"
        >
          <Icon name="whatsapp" size={20} />
        </a>
      </div>

      {/* ── Mobile bar ─────────────────────────────────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 backdrop-blur-lg md:hidden">
        <div className="grid grid-cols-3">
          <a
            href={`tel:${site.phone.tel}`}
            className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-line text-[0.6875rem] font-semibold text-muted"
          >
            <Icon name="phone" size={17} />
            Call
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-line text-[0.6875rem] font-semibold text-muted"
          >
            <Icon name="whatsapp" size={18} />
            WhatsApp
          </a>
          <Link
            href="/contact#book"
            className="flex min-h-14 flex-col items-center justify-center gap-1 bg-accent text-[0.6875rem] font-bold text-accent-on"
          >
            <Icon name="clipboard" size={17} />
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
