import { site } from '@/config/site';
import { instagramSpotlight } from '@/data/facility';
import { imageSrc, imageSrcWebp } from '@/lib/images';
import { Icon } from './Icon';

/**
 * A dense, edge-to-edge photo grid — no gaps, no rounded corners — with the
 * handle called out in its own dark panel dead centre. At `sm` and up that
 * panel is explicitly placed in the middle column, spanning both rows; the
 * eight photos are left unplaced, so the grid's own auto-placement fills
 * every other cell around it in order. Below `sm` the panel just falls to
 * its own full-width row instead of splitting the grid.
 */
export function InstagramSpotlight() {
  return (
    <div className="grid grid-cols-3 auto-rows-[minmax(7rem,auto)] sm:grid-cols-5 sm:auto-rows-[minmax(9rem,auto)] lg:auto-rows-[minmax(11rem,auto)]">
      {instagramSpotlight.map((slot) => (
        <a
          key={slot}
          href={site.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden"
          aria-label={`View ${site.name} on Instagram`}
        >
          <picture>
            <source srcSet={imageSrcWebp(slot)} type="image/webp" />
            <img
              src={imageSrc(slot)}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </picture>
          <span className="absolute inset-0 flex items-center justify-center bg-accent/0 text-accent-on opacity-0 transition-all duration-300 group-hover:bg-accent/85 group-hover:opacity-100">
            <Icon name="instagram" size={20} />
          </span>
        </a>
      ))}

      <div className="col-span-3 flex flex-col items-center justify-center gap-2 overflow-hidden bg-fg px-4 py-10 text-center sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:row-span-2 sm:px-3">
        <Icon name="instagram" size={22} className="text-bg" />
        <p className="mt-2 max-w-full text-lg font-semibold tracking-[-0.02em] text-bg">
          Check us out on Instagram
        </p>
        <p className="max-w-full text-sm font-medium break-words text-bg/70">
          @movement.team.physio.fitness
        </p>
      </div>
    </div>
  );
}
