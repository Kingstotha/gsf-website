import { siteContent } from '../../data/siteContent';

// The seal PNG has a dark grey square behind it, so it is always cropped to a circle and
// scaled up a touch so the grey never shows at the edge. gsf-seal-256.png is a resized copy
// of the original public/gsf-logo.svg.png, which is 1024px and 1.5 MB.
function Seal({ size = 40, decorative = false, className = '' }) {
  return (
    <span
      className={`inline-block shrink-0 overflow-hidden rounded-full bg-paper ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/gsf-seal-256.png"
        alt={decorative ? '' : siteContent.seal.alt}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className="h-full w-full scale-[1.08] object-cover"
      />
    </span>
  );
}

export default Seal;
