# Movement Team — Physio · Sports · Fitness

Website for a hybrid physiotherapy, recovery and human-performance centre in
Ahmedabad. Next.js 16 (App Router) + TypeScript + Tailwind 4, exported as a
fully static site.

```bash
npm install
npm run dev          # http://localhost:3000
```

---

## Before you go live

Work through this list. Nothing below is optional.

### 1. Replace the placeholder contact details

Everything a non-developer needs is in **[`src/config/site.ts`](src/config/site.ts)**.
Search for `TODO` and replace:

| Value | Status | Notes |
| --- | --- | --- |
| `site.url` | ❌ placeholder | `https://www.movementteam.in` — replace with your real domain |
| `site.email` | ❌ placeholder | `hello@movementteam.in` does not exist yet |
| `site.googlePlaceId` | ❌ empty | See "Google reviews" below |
| `site.socials.facebook` / `.youtube` | ❌ empty | Empty links are hidden automatically, so this is safe to leave |
| `site.phone` | ⚠️ assumption | Set to the **Naranpura** line (+91 70966 33936). Swap to +91 97379 33336 if Maninagar should be the site-wide number |
| `locations[].mapEmbedUrl` | ⚠️ address search | Pins from the postal address. For an exact pin: Google Business → Share → Embed a map → copy `src` |
| `site.phone` per location | ✅ real | Naranpura +91 70966 33936, Maninagar +91 97379 33336 |
| `locations[].addressLines` | ✅ real | Both centres, from the Google listings |
| `site.openingHours` | ✅ real | Mon–Sat 9am–10pm, Sunday closed |

While any `TODO` remains, a dev-only banner appears in the corner during
`npm run dev`. It never renders in production.

### 2. Replace the photography

Every image is a CC0 placeholder. See **[IMAGES.md](IMAGES.md)** for the slot
list, priority order and shooting guidance.

Every hero also plays a looping background clip behind its teal scrim. Those
are temporary Mixkit stock — see **[VIDEO.md](VIDEO.md)** for the slot list,
the size ceiling and how to swap in footage of the real centres. Run
`npm run videos` to (re)fetch them; a slot with no file simply renders a flat
teal hero instead.

### 3. Replace the team details

**[`src/data/team.ts`](src/data/team.ts)** contains four placeholder members. No
name, qualification, experience figure or certification in it is real. Replace
them and set `placeholder: false` — until you do, each card shows a visible
"Details to be confirmed" badge so nothing invented can go live unnoticed.

### 4. Connect Google reviews

Reviews are fetched **at build time** and baked into static JSON, so the API key
never reaches the browser.

1. Google Cloud console → enable **Places API (New)** → create an API key.
2. Restrict the key to the Places API. Billing must be on; a weekly rebuild sits
   far inside the free tier.
3. Find your Place ID: <https://developers.google.com/maps/documentation/places/web-service/place-id>
4. Paste it into `site.googlePlaceId`.
5. Create `.env.local` (copy `.env.example`) and set `GOOGLE_PLACES_API_KEY`.
6. Set the same variable in your host's environment variables.

```bash
npm run reviews      # fetch now, without a full build
```

Google returns **a maximum of 5 reviews** — that is their limit, not a bug.
Until this is configured the site shows clearly-labelled placeholders that state
they are placeholders. It never invents testimonials.

### 5. Get the legal pages reviewed

`/privacy-policy` and `/terms` are **templates that no lawyer has read**. They
carry visible notices saying so. Have them checked against India's Digital
Personal Data Protection Act, 2023 — health data carries obligations a generic
website policy does not cover. Fill in your real cancellation, payment and
refund terms in `/terms`.

`/medical-disclaimer` is written conservatively and is closer to ready, but is
still worth a professional read.

---

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Fetches reviews, then builds the static site into `out/` |
| `npm run start` | Serves the built `out/` directory locally |
| `npm run typecheck` | TypeScript, no emit |
| `npm run reviews` | Refresh Google reviews only |
| `npm run images` | Re-download placeholder stock, then optimise |
| `npm run images:optimise` | Compress `public/images` and regenerate WebP |

---

## Deploying

`next build` writes a plain static site to `out/`. No server, no adapter.

**Netlify** — [`netlify.toml`](netlify.toml) is committed and configured.
Connect the repo; build command and publish directory are picked up
automatically. Add `GOOGLE_PLACES_API_KEY` under Site settings → Environment
variables.

**Cloudflare Pages** — framework preset "Next.js (Static HTML Export)", build
command `npm run build`, output directory `out`.

**Anywhere else** — upload the contents of `out/` to any web host via FTP.

### Keeping reviews fresh

Reviews only update when the site rebuilds. Set a scheduled deploy — Netlify
build hooks + a weekly cron, or Cloudflare's scheduled deployments.

---

## Architecture

```
src/
  app/                    One folder per route; each exports its own metadata
    layout.tsx            Fonts, nav, footer, floating actions, LocalBusiness JSON-LD
    globals.css           Design tokens + component classes (the whole design system)
    sitemap.ts            Generated at build; edit when adding routes
  components/             Reusable UI. Server components unless marked 'use client'
  config/
    site.ts               ← business details live here
    nav.ts                Navigation structure
  data/                   All page content, typed. Copy edits happen here, not in JSX
    generated/            Build-time output (Google reviews) — committed
  lib/
    images.ts             Image slot manifest
    seo.ts                Metadata helpers + schema.org builders
    whatsapp.ts           Booking message formatting
scripts/
  fetch-reviews.mjs       Build-time Google Places fetch
  fetch-images.mjs        CC0 placeholder downloader
  optimise-images.mjs     Compression + WebP generation
```

### Notable decisions

- **Static export.** No server runtime, so hosting is free and the site is fast.
  The trade-off is no Next image optimiser — `scripts/optimise-images.mjs`
  handles compression at build time instead.
- **Content lives in `src/data/`, not in components.** Copy changes do not
  require touching JSX.
- **Disclosure widgets use native `<details>`.** FAQs, service cards and the
  recovery modality cards ship zero JavaScript and are keyboard-accessible and
  findable by in-page search for free.
- **Theme flash is prevented by a blocking inline script** in `<head>`
  (`ThemeScript`). A React effect would run far too late. Light is the brand
  default and the OS preference does not override it — dark is opt-in through
  the toggle in the footer.
- **Two surface systems.** `data-theme` carries the visitor's light/dark choice;
  `data-surface` pins a section to a palette regardless — `teal` (the brand
  panel used by the hero, page headers, testimonials, CTA band and footer),
  `mint` (the tinted panel that alternates with white sections) and `light`.
  `dark` is kept as an alias of `teal` so older sections keep working. Pinned
  panels round themselves off the white page; that inset rounded panel is the
  signature of the layout.
- **Fonts.** Plus Jakarta Sans for everything structural, Playfair Display
  italic for eyebrows and the emphasised half of a heading (write it as `<em>`
  inside the title). `@theme inline` does not emit CSS variables, so the font
  and easing tokens are also declared on `:root` in `globals.css` — hand-written
  CSS reads them from there.
- **The booking form has no backend.** It formats answers into a WhatsApp
  message the visitor sends themselves. Nothing leaves the device until they
  tap send. To switch to a form service later, replace the `submit` handler in
  `src/components/BookingForm.tsx`.

### Compliance guardrails

The copy deliberately avoids outcome guarantees. Services are described with
"designed to", "may help", "where clinically appropriate" and "individualised
according to assessment". Contraindications are stated for every recovery
modality that has them. Please keep that discipline when editing `src/data/`.
