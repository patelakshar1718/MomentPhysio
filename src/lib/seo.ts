import type { Metadata } from 'next';
import { locations, site } from '@/config/site';

/** Builds per-page metadata with consistent titles, canonicals and OG tags. */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.legalName,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
    },
  };
}

/**
 * schema.org graph for the business.
 *
 * Modelled as HealthAndBeautyBusiness + ExerciseGym rather than
 * MedicalClinic — the centre is a hybrid, and over-claiming a medical
 * classification in structured data is exactly the kind of thing that gets a
 * Google Business listing flagged.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'ExerciseGym'],
    '@id': `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.tel,
    email: site.email,
    slogan: site.positioning,
    areaServed: { '@type': 'City', name: site.city },
    sameAs: Object.values(site.socials).filter(Boolean),
    address: locations.map((loc) => ({
      '@type': 'PostalAddress',
      streetAddress: loc.addressLines.join(', '),
      addressLocality: loc.locality,
      addressRegion: site.region,
      postalCode: loc.postalCode,
      addressCountry: site.country,
    })),
    openingHoursSpecification: site.openingHoursSpec.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    makesOffer: [
      'Manual Physiotherapy',
      'Sports Rehabilitation',
      'Sports Recovery',
      'Personal Training',
      'Strength & Conditioning',
      'Mobility Training',
      'Marathon Training',
      'HYROX Training',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  };
}

/** FAQPage schema — makes the FAQ eligible for rich results. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}

