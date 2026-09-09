import { photos } from '../../data/photos';

// Renders nothing until src/data/photos.js has entries. Then: one scrolling row of prints at
// their own proportions on an ink strip, with a caption under each. No crop, no frame.
function PhotoStrip() {
  const usable = photos.filter((photo) => photo && photo.src && photo.alt);
  if (usable.length === 0) return null;

  return (
    <section aria-label="Photos" className="border-t border-hairline">
      <div className="wrap py-10 sm:py-14">
        <ul
          className="flex snap-x snap-mandatory gap-px overflow-x-auto bg-ink"
          style={{ scrollbarWidth: 'thin' }}
          tabIndex={0}
          aria-label="Photos, scroll sideways"
        >
          {usable.map((photo) => (
            <li key={photo.src} className="shrink-0 snap-start bg-paper">
              <figure className="m-0">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-48 w-auto sm:h-64"
                />
                {photo.caption ? (
                  <figcaption className="px-2 py-2 text-small text-pencil">{photo.caption}</figcaption>
                ) : null}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PhotoStrip;
