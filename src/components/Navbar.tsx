'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { NavItem } from '@/config/nav';
import { site } from '@/config/site';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';
import { Wordmark } from './Wordmark';

/**
 * A white pill floating inside the hero panel.
 *
 * It is absolutely positioned rather than fixed: the panel behind it is
 * rounded and inset, and a bar pinned to the viewport edge would cut across
 * that corner. Persistent access to booking on long pages comes from
 * <FloatingActions /> instead.
 *
 * `items` arrives as a prop rather than being imported here. The index menus
 * are generated from the service data, and importing that data into a client
 * component would ship every service summary and detail bullet — around 20KB
 * of prose the menu never renders — to the browser. As a prop it crosses as
 * labels and hrefs only.
 */
export function Navbar({ items }: { items: NavItem[] }) {
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
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]);

  /**
   * Jumping to a section of the page you are already on changes only the hash,
   * so `pathname` never changes and the route-change effect above never fires.
   * Every menu link closes the menu itself instead.
   */
  function closeMenus() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

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
        <div className="container-x-wide pt-7 lg:pt-10">
          <nav
            data-surface="light"
            aria-label="Main"
            className="flex h-16 items-center justify-between gap-3 rounded-full pr-2 pl-5 ring-1 ring-line shadow-[0_8px_24px_-14px_rgb(20_20_20/0.22)] lg:h-[4.5rem] lg:gap-5 lg:pl-6"
          >
            <Link href="/" className="shrink-0 py-2" aria-label={`${site.name} — home`}>
              <Wordmark showLockup={false} />
            </Link>

            {/* ── Desktop ──────────────────────────────────────────────── */}
            <ul className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
              {items.map((item) => (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    if (item.children) setOpenDropdown(item.label);
                  }}
                  onMouseLeave={() => item.children && scheduleClose()}
                  onFocus={() => {
                    cancelClose();
                    if (item.children) setOpenDropdown(item.label);
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    aria-expanded={item.children ? openDropdown === item.label : undefined}
                    className={`flex items-center gap-1 rounded-full px-2 py-2.5 text-[0.8125rem] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors 2xl:px-2.5 2xl:text-sm ${
                      isActive(item.href) ? 'text-accent-text' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <Icon
                        name="chevronDown"
                        size={13}
                        className={`shrink-0 transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div
                      /* Centred under its trigger: left-aligned, the menus
                         late in the bar ran off the right of the viewport.
                         Eleven rows can outgrow a short window, so the list
                         scrolls rather than the page. */
                      className="absolute top-full left-1/2 mt-3 flex max-h-[min(32rem,calc(100vh-9rem))] w-[min(23rem,calc(100vw-3rem))] -translate-x-1/2 flex-col overflow-y-auto rounded-2xl border border-line bg-elev p-2 shadow-card"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {item.menu === 'index' && (
                        <>
                          <Link
                            href={item.href}
                            onClick={closeMenus}
                            className="flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-elev-2"
                          >
                            All of {item.label}
                            <Icon name="arrowRight" size={14} className="text-subtle" />
                          </Link>
                          <div className="my-1 border-t border-line" />
                        </>
                      )}

                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenus}
                              className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-elev-2"
                            >
                              <span className="block text-sm font-semibold">{child.label}</span>
                              {child.blurb && (
                                <span className="mt-0.5 block text-xs leading-snug text-muted">
                                  {child.blurb}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/contact#book"
                className="btn btn-primary btn-sm hidden whitespace-nowrap lg:inline-flex"
              >
                {/* "Book Appointment" is what pushed the row past the pill's
                    right edge at xl. The short label carries the same action
                    until there is width for the full one. */}
                <span className="2xl:hidden">Book</span>
                <span className="hidden 2xl:inline">Book Appointment</span>
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
            {items.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  /* Up to eleven section links per parent; expanded inline they
                     would bury the rest of the nav, so each one collapses. The
                     parent page stays reachable as the first row inside. */
                  <details className="group/m border-b border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden">
                      <span
                        className={`text-2xl font-semibold tracking-[-0.03em] ${
                          isActive(item.href) ? 'text-accent-text' : 'text-fg'
                        }`}
                      >
                        {item.label}
                      </span>
                      <Icon
                        name="chevronDown"
                        size={20}
                        className="shrink-0 text-subtle transition-transform duration-300 group-open/m:rotate-180"
                      />
                    </summary>

                    <ul className="mb-3 space-y-1 pl-4">
                      <li>
                        <Link
                          href={item.href}
                          onClick={closeMenus}
                          className="block py-2 text-sm font-semibold text-fg"
                        >
                          All of {item.label}
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeMenus}
                            className="block py-2"
                          >
                            <span className="block text-sm font-medium text-fg">{child.label}</span>
                            {child.blurb && (
                              <span className="mt-0.5 block text-xs leading-snug text-muted">
                                {child.blurb}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className={`block border-b border-line py-4 text-2xl font-semibold tracking-[-0.03em] ${
                      isActive(item.href) ? 'text-accent-text' : 'text-fg'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3 pb-24">
            <Link href="/contact#book" onClick={closeMenus} className="btn btn-primary w-full">
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
