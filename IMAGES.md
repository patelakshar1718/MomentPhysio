# Images — what to replace and where

Every photo currently on this site is a **placeholder**, not a photograph of your
centres. They exist so the layout can be reviewed with real content in it.
Replace them before launch — real facility photography converts far better than
stock.

Every placeholder shows the same thing on purpose: **a clinician working with a
patient** — assessment, manual therapy, mobilisation, assisted rehab. No spa
imagery, no gym-floor imagery. Keep that rule when you shoot your own; it is
what tells a visitor in one glance what this place actually does. The frames
come from physiotherapy clips on [Mixkit](https://mixkit.co) (free for
commercial use, no attribution required) — see
[`public/images/CREDITS.md`](public/images/CREDITS.md) and
[`scripts/fetch-images.mjs`](scripts/fetch-images.mjs).

## How the system works

Components never reference a file path. They reference a **slot name**:

```tsx
<Media slot="pillar-physiotherapy" alt="Hands-on physiotherapy treatment" />
```

A slot resolves to `/public/images/<slot>.jpg` (plus a `.webp` twin) **only if
the slot is listed** in [`src/lib/images.ts`](src/lib/images.ts). If it is not
listed, the component renders a designed placeholder block instead of a broken
image.

### To replace a photo

1. Save your photo as `public/images/<slot>.jpg` — overwrite the existing file.
2. Run `npm run images:optimise` to compress it and regenerate the `.webp`.
3. Done. No code change needed.

### To fill an empty slot

1. Save the photo as `public/images/<slot>.jpg`.
2. Add the slot name to `AVAILABLE_IMAGES` in `src/lib/images.ts`.
3. Run `npm run images:optimise`.

## Priority order

If you only shoot a handful, shoot these first — they carry the most weight:

| Priority | Slots | Why |
| --- | --- | --- |
| 1 | `pillar-physiotherapy`, `pillar-recovery`, `pillar-training` | The three homepage pillar cards |
| 2 | `team-1` … `team-4` | Trust. Currently placeholder blocks |
| 3 | `recovery-icebath`, `recovery-sauna`, `recovery-tecar` | Your most distinctive equipment, currently missing |
| 4 | `facility-*` | Proof the centres actually look like this |
| 5 | `about-story`, `about-approach`, `cta-band` | Carry the About page and every CTA band |

Heroes are **video**, not photography — see [VIDEO.md](VIDEO.md) for those.

## Currently filled (placeholder stock — replace)

| Slot | Used on | Should show |
| --- | --- | --- |
| `pillar-physiotherapy` | Homepage, physio page | Treatment room, therapist working |
| `pillar-recovery` | Homepage, recovery page | Recovery zone wide shot |
| `pillar-training` | Homepage, PT page | Performance floor in use |
| `recovery-massage` | Recovery page | Sports massage in progress |
| `training-pt` | PT page | Therapist and client, 1-to-1 |
| `training-strength` | PT page | Loaded rehab under supervision |
| `training-stretch` | PT page | Assisted stretching |
| `training-mobility` | PT page | Mobility work through range |
| `training-glutes` | PT page | Hip and knee work |
| `training-hiit` | PT page, HYROX page | Conditioning under a clinician's eye |
| `performance-agility` | Performance page | Athlete treatment session |
| `performance-mobility` | Mobility page | Mobility assessment |
| `performance-strength` | Performance page | Strength rehab session |
| `performance-hyrox` | HYROX page | Athlete therapy session |
| `performance-marathon` | Marathon page | Foot, calf and ankle work |
| `facility-physio-1/2` | About page, homepage | Physiotherapy area |
| `facility-recovery-1/2/3` | About page | Recovery zone |
| `facility-performance-1/2` | About page | Performance zone |
| `facility-pt-1` | About page | Dedicated 1-to-1 training space |
| `about-story` | About page | Wide shot inside the centre |
| `about-approach` | About page, physio page | Coaching a client |
| `cta-band` | CTA bands | Atmospheric, works behind text |

## Empty slots — no royalty-free photography exists for these

These render as designed placeholder blocks. There is no honest placeholder for
specialist recovery equipment — a photo of a therapist working on a back
captioned "Ice Bath" would mislead a patient — so these need **your** photos:

`recovery-theragun` · `recovery-iastm` · `recovery-sauna` ·
`recovery-compression` · `recovery-redlight` · `recovery-cupping` ·
`recovery-needling` · `recovery-tecar` · `recovery-icebath` ·
`team-1` · `team-2` · `team-3` · `team-4`

Team photos are deliberately left empty: inventing faces for a named clinical
team is not a placeholder, it is a false claim about who treats people.

The recovery cards are icon-led by design, so they look intentional while empty —
but photographs of the actual TECAR unit, compression boots, red-light panel and
sauna would be a significant upgrade.

## Shooting guidance

- **Dimensions:** at least 1600px on the long edge. The optimiser caps at 1600px.
- **Format:** JPEG in, JPEG + WebP out. Do not commit PNGs — they will not be optimised.
- **Orientation:** cards are 16:10 or 16:11, the About and homepage feature
  images are 4:5, team cards are 4:5.
- **Subject:** a clinician with a patient, every time. Hands visible, faces calm,
  clinic environment. Not equipment on its own, not a workout.
- **Treatment:** photos sit inside rounded white cards on a light page, so a
  clean, uncluttered background and soft directional light work best.
- **Consent:** get written consent from anyone identifiable, especially clients
  mid-treatment. Do not publish a client photograph without it.
- **Team photos:** consistent background and crop across all four, shot at 4:5.

## Attribution

The Mixkit Free License requires no attribution, but the current placeholders are
credited in [`public/images/CREDITS.md`](public/images/CREDITS.md). Delete that
file once every stock image has been replaced.
