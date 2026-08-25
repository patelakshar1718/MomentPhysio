import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { JsonLd } from '@/components/JsonLd';
import { Navbar } from '@/components/Navbar';
import { PlaceholderNotice } from '@/components/PlaceholderNotice';
import { ThemeScript } from '@/components/ThemeScript';
import { site } from '@/config/site';
import { localBusinessSchema } from '@/lib/seo';
import './globals.css';

/** Structure: geometric grotesque for every heading, label and paragraph. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

/** Emphasis: the italic half of a two-line heading, and every eyebrow. */
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  style: ['italic', 'normal'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Hybrid Physiotherapy, Recovery & Performance Centre in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  // Inner pages set their own via pageMetadata(); this covers the homepage.
  alternates: { canonical: '/' },
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  keywords: [
    'physiotherapy centre Ahmedabad',
    'sports physiotherapy',
    'sports recovery centre',
    '1-to-1 personal training',
    'sports massage Ahmedabad',
    'ice bath recovery',
    'sauna recovery',
    'mobility training',
    'strength and conditioning',
    'marathon training',
    'HYROX training',
    'sports rehabilitation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: site.legalName,
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#061c19' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        {/* Scroll-reveal starts at opacity 0. Without JS the IntersectionObserver
            never fires, so force everything visible rather than shipping a blank page. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="pb-14 md:pb-0">
        <a href="#main" className="sr-only-focusable btn btn-primary fixed top-4 left-4 z-[60]">
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <PlaceholderNotice />

        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
