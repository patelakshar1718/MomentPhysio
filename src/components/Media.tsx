import { hasImage, imageSrc, imageSrcWebp } from '@/lib/images';

type MediaProps = {
  /** Slot name from the manifest in src/lib/images.ts. */
  slot?: string;
  /** Required. Describes the photo's content for screen readers. */
  alt: string;
  className?: string;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/5]". */
  aspect?: string;
  /** Darkens the photo so overlaid text keeps its contrast. */
  overlay?: 'none' | 'soft' | 'strong';
  /** Above-the-fold images skip lazy loading and get fetch priority. */
  priority?: boolean;
  sizes?: string;
  /** Shown inside the placeholder when the slot has no photo yet. */
  placeholderLabel?: string;
  /** Photos are rounded by design; opt out for full-bleed panel backgrounds. */
  rounded?: boolean;
};

/**
 * Renders a photo, or a designed placeholder when that slot has no file yet.
 *
 * A plain <img> rather than next/image: the static export disables Next's
 * optimiser entirely, so next/image would add wrapper markup and client
 * runtime for zero benefit. This stays a server component — no JS shipped.
 */
export function Media({
  slot,
  alt,
  className = '',
  aspect = 'aspect-[4/3]',
  overlay = 'none',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  placeholderLabel,
  rounded = true,
}: MediaProps) {
  const radiusClass = rounded ? 'media-round' : '';
  const overlayClass =
    overlay === 'strong'
      ? 'after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:via-black/35 after:to-black/10'
      : overlay === 'soft'
        ? 'after:absolute after:inset-0 after:bg-black/25'
        : '';

  if (!hasImage(slot)) {
    return (
      <div
        className={`relative isolate overflow-hidden bg-elev-2 ${radiusClass} ${aspect} ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Diagonal hatch — reads as an intentional graphic block, not a broken image. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 11px)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <span className="text-center label-xs">
            {placeholderLabel ?? slot ?? 'Image'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative isolate overflow-hidden ${radiusClass} ${aspect} ${className} ${overlayClass}`}
    >
      <picture>
        <source srcSet={imageSrcWebp(slot)} type="image/webp" sizes={sizes} />
        <img
          src={imageSrc(slot)}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}
