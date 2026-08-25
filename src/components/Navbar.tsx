'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { mainNav } from '@/config/nav';
import { site } from '@/config/site';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';
import { Wordmark } from './Wordmark';

/**
 * A white pill floating inside the teal hero panel.
 *
 * It is absolutely positioned rather than fixed: the panel behind it is
 * rounded and inset, and a bar pinned to the viewport edge would cut across
 * that corner. Persistent access to booking on long pages comes from
 * <FloatingActions /> instead.
 */
export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Route change closes whatever was open.
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMenuOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  /** Small delay on close so the pointer can cross the gap into the panel. */
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="container-x pt-7 lg:pt-10">
          <nav
            data-surface="light"
            aria-label="Main"
            className="flex h-16 items-center justify-between gap-4 rounded-full pr-2.5 pl-5 shadow-[0_10px_30px_-18px_rgb(0_0_0/0.45)] lg:h-[4.5rem] lg:pl-7"
          >
            <Link href="/" className="shrink-0 py-2" aria-label={`${site.name} — home`}>
              <Wordmark showLockup={false} />
            </Link>

            {/* ── Desktop ──────────────────────────────────────────────── */}
            <ul className="hidden items-center gap-0.5 xl:flex">
              {mainNav.map((item) => (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    if (item.children) setOpenDropdown(item.label);
                  }}
                  onMouseLeave={() => item.children && scheduleClose()}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    aria-expanded={item.children ? openDropdown === item.label : undefined}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-2.5 text-sm font-medium tracking-[-0.01em] whitespace-nowrap transition-colors ${
                      isActive(item.href) ? 'text-accent-text' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <Icon
                        name="chevronDown"
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-3 w-80 rounded-2xl border border-line bg-elev p-2 shadow-card"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-elev-2"
                        >
                          <span className="block text-sm font-semibold">{child.label}</span>
                          <span className="mt-0.5 block text-xs text-muted">{child.blurb}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Link href="/contact#book" className="btn btn-primary btn-sm hidden whitespace-nowrap lg:inline-flex">
                Book Appointment
                <Icon name="arrowRight" size={16} />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg xl:hidden"
              >
                <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Mobile sheet ───────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        data-surface="light"
        className="fixed inset-0 z-[60] overflow-y-auto xl:hidden"
      >
        <div className="container-x flex min-h-full flex-col py-6">
          <div className="flex items-center justify-between">
            <Wordmark showLockup={false} />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <ul className="mt-8 flex-1 space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block border-b border-line py-4 text-2xl font-semibold tracking-[-0.03em] ${
                    isActive(item.href) ? 'text-accent-text' : 'text-fg'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-1 mb-2 space-y-1 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block py-2 text-sm text-muted">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3 pb-24">
            <Link href="/contact#book" className="btn btn-primary w-full">
              Book Appointment
              <Icon name="arrowRight" size={16} />
            </Link>
            <div className="flex items-center justify-between gap-3">
              <a href={`tel:${site.phone.tel}`} className="btn btn-secondary flex-1">
                <Icon name="phone" size={16} />
                Call
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
