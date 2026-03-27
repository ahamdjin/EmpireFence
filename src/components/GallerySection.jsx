import { SectionTitle } from "./ui";

export function GallerySection({ gallery }) {
  const [lead, ...rest] = gallery;

  return (
    <section className="gallerySection" id="gallery">
      <div className="sectionShell gallerySection__inner">
        <div className="gallerySection__header">
          <SectionTitle
            eyebrow="Selected Work"
            title="Selected installs that show clean lines, fit, and finish."
            body="Street-facing iron work, privacy fencing, and cleaner gate details."
          />
        </div>

        <div className="galleryShowcase">
          <article className="galleryShowcase__lead" data-reveal>
            <img src={lead.image} alt={lead.title} style={{ objectPosition: lead.position }} />
            <div className="galleryShowcase__copy">
              <span>{lead.title}</span>
              <p>{lead.copy}</p>
            </div>
          </article>

          <div className="galleryShowcase__stack">
            {rest.map((item, index) => (
              <article key={item.title} className={`galleryTile galleryTile--${item.variant}`} data-reveal>
                <img src={item.image} alt={item.title} style={{ objectPosition: item.position }} />
                <div>
                  <span>{item.title}</span>
                  {index === 0 ? <p>{item.copy}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
