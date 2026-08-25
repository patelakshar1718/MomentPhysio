import type { NextConfig } from 'next';

/**
 * Static export: `next build` emits a fully pre-rendered `out/` directory.
 * Every route becomes a real HTML file with its own <title>/<meta>, which is
 * what makes the local-SEO pages work. Deploys as-is to Netlify, Cloudflare
 * Pages, or any plain static host — no adapter, no server runtime.
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Next's image optimiser needs a server; a static export cannot use it.
    unoptimized: true,
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
};

export default nextConfig;
