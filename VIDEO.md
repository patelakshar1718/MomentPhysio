# Hero videos

Every hero on the site — the home page, all eleven inner page headers and the
404 — plays a muted, looping background clip. The footage keeps its own colour:
there is no brand tint over it, only a neutral shade heavy enough on the left to
hold the white copy, plus a soft text-shadow on the copy itself. Heroes carry no
photography either — video and words only.

## How it works

| Piece | Where |
| --- | --- |
| Manifest of usable slots | `src/lib/videos.ts` |
| The player (poster + `<video>` + scrim) | `src/components/HeroVideo.tsx` |
| Shade + copy shadow | `.hero-scrim` / `.over-video` in `src/app/globals.css` |
| Files | `public/video/<slot>.mp4`, `.webm`, `.jpg` |

A hero asks for a slot by name. If the slot is not listed in
`AVAILABLE_VIDEOS`, `HeroVideo` renders nothing and the panel falls back to
flat teal — a missing file makes the hero quieter, never broken.

The `<video>` is `autoplay muted loop playsinline` with no JavaScript, so it
starts without hydration and without a click. It is `aria-hidden`, has no
audio track and takes no tab stop: it is texture, not content. Under
`prefers-reduced-motion: reduce` the video is hidden by CSS and the poster
image underneath stands in.

## Slots

| Slot | Used by |
| --- | --- |
| `hero-home` | Home hero, 404 |
| `hero-about` | About, and the three legal pages |
| `hero-physiotherapy` | Physiotherapy |
| `hero-recovery` | Recovery Center |
| `hero-training` | Personal Training |
| `hero-performance` | Sports Performance |
| `hero-mobility` | Mobility Training |
| `hero-marathon` | Marathon Training |
| `hero-hyrox` | HYROX Training |
| `hero-programs` | Programs |
| `hero-contact` | Contact |

## What the clips have to show

A clinician working with a patient — assessment, manual therapy, mobilisation,
assisted rehab. **No spa footage and no gym footage.** The hero is the first
claim the site makes, and it has to be about treatment, not atmosphere. The same
rule governs the photography (see [IMAGES.md](IMAGES.md)).

## Replacing the footage

The current clips are **temporary Mixkit stock** — see
`public/video/CREDITS.md`. Replace them with footage of the actual centres.

For each slot, produce three files in `public/video/`:

- `<slot>.mp4` — H.264, no audio, ~6 seconds, **under 1.5 MB**
- `<slot>.webm` — VP9 twin, offered first
- `<slot>.jpg` — a poster frame from the clip

`scripts/fetch-videos.mjs` already does the trimming and compression for its
own sources; the same ffmpeg settings work for your own footage:

```bash
npx ffmpeg -y -ss 0 -t 6 -i source.mp4 -an -vf "scale=1280:-2:flags=lanczos,fps=24" -c:v libx264 -preset slower -crf 30 -pix_fmt yuv420p -movflags +faststart public/video/hero-home.mp4
```

Shoot or pick clips with **slow, wide movement, a darker left third and no
faces in the centre of frame** — the copy sits over the left half, and busy footage there fights the
headline. Keep the size ceiling: this autoplays on mobile data.

## Re-running the fetch

```bash
npm run videos
```

Existing files are skipped; pass `--force` to re-encode everything.
