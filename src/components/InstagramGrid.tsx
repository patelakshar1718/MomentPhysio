import { site } from '@/config/site';
import { instagramGrid } from '@/data/facility';
import { Icon } from './Icon';
import { Media } from './Media';

/**
 * Static grid rather than an embedded feed: no third-party script, no layout
 * shift, and full control over which six images represent the brand.
 */
export function InstagramGrid() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {instagramGrid.map((slot, i) => (
          <a
            key={`${slot}-${i}`}
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden"
            aria-label={`View ${site.name} on Instagram`}
          >
            <Media
              slot={slot}
              alt=""
              aspect="aspect-square"
              placeholderLabel="Instagram"
              sizes="(max-width: 640px) 50vw, 16vw"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-accent/0 text-accent-on opacity-0 transition-all duration-300 group-hover:bg-accent/85 group-hover:opacity-100">
              <Icon name="instagram" size={22} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
