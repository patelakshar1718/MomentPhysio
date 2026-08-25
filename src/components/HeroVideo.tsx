import { hasVideo, videoMp4, videoPoster, videoWebm } from '@/lib/videos';

/**
 * Muted, looping background footage for a hero panel.
 *
 * Decorative by definition, so the whole block is aria-hidden and carries no
 * captions or controls. Three details matter:
 *
 *  - The poster <img> sits underneath the <video>, not just in the poster
 *    attribute, so the panel is never a flat colour while the clip downloads —
 *    and so reduced-motion visitors still get an image once CSS hides the video.
 *  - A teal scrim sits on top. The brand panel has to stay teal and the white
 *    copy has to keep its contrast; the video is texture, not the subject.
 *  - No JavaScript. autoplay+muted+playsInline is enough on every current
 *    browser, and a hero should not wait on a client component to hydrate.
 */
export function HeroVideo({ slot }: { slot?: string }) {
  if (!hasVideo(slot)) return null;

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <img
        src={videoPoster(slot)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={videoPoster(slot)}
        tabIndex={-1}
      >
        <source src={videoWebm(slot)} type="video/webm" />
        <source src={videoMp4(slot)} type="video/mp4" />
      </video>
      <div className="hero-scrim absolute inset-0" />
    </div>
  );
}
