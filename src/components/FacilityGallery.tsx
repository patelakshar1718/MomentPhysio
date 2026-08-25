import { facilityZones } from '@/data/facility';
import { Media } from './Media';
import { Reveal } from './Reveal';

/**
 * Facility gallery grouped by zone.
 *
 * Each zone gets a lead image plus supporting tiles. The layout intentionally
 * varies by zone index so four consecutive blocks do not read as four
 * identical rows.
 */
export function FacilityGallery() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {facilityZones.map((zone, index) => {
        const reversed = index % 2 === 1;
        const [lead, ...rest] = zone.images;

        return (
          <Reveal key={zone.id} className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className={`lg:col-span-4 ${reversed ? 'lg:order-2' : ''}`}>
              <p className="index-num text-sm text-accent-text">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="display-md mt-3">{zone.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{zone.summary}</p>
            </div>

            <div className={`lg:col-span-8 ${reversed ? 'lg:order-1' : ''}`}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Media
                  slot={lead}
                  alt={`${zone.title} — ${zone.summary}`}
                  aspect="aspect-[4/3]"
                  className={rest.length === 0 ? 'sm:col-span-2' : ''}
                  placeholderLabel={zone.title}
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
                {rest.map((img, i) => (
                  <Media
                    key={img}
                    slot={img}
                    alt={`${zone.title}, view ${i + 2}`}
                    aspect="aspect-[4/3]"
                    placeholderLabel={zone.title}
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
