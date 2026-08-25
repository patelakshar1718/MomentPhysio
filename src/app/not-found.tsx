import Link from 'next/link';
import { HeroVideo } from '@/components/HeroVideo';
import { Icon } from '@/components/Icon';
import { footerNav } from '@/config/nav';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section data-surface="teal" className="relative isolate pt-24">
      <HeroVideo slot="hero-home" />

      <div className="over-video container-x flex min-h-[70vh] flex-col justify-center py-20">
        <p className="index-num text-accent-text" style={{ fontSize: 'clamp(4rem, 16vw, 11rem)', lineHeight: 0.8 }}>
          404
        </p>

        <h1 className="display-lg mt-6 max-w-2xl">This Page Has Moved Out Of Range</h1>
        <p className="lede mt-5">
          The page you were looking for is not here. The links below cover everything the centre
          does — or head straight to booking an assessment.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact#book" className="btn btn-primary">
            Book 1-to-1 Assessment
            <Icon name="arrowRight" size={16} />
          </Link>
          <Link href="/" className="btn btn-secondary">
            Back to home
          </Link>
        </div>

        <nav aria-label="Site sections" className="mt-14 border-t border-line pt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {[...footerNav.services, ...footerNav.company].map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
