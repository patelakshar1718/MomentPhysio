import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

export const dynamic = 'force-static';

/** Priorities reflect commercial intent: booking and service pages rank above legal. */
const ROUTES: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/physiotherapy', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/recovery-center', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/personal-training', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sports-performance', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/programs', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/marathon-training', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hyrox-training', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/mobility-training', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/medical-disclaimer', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
