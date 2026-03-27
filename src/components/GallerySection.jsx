import { ArrowIcon } from "./icons";
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
            body="From street-facing iron work to privacy fencing and gate details, the goal is a perimeter that looks stronger and works better."
          />

          <div className="gallerySection__headerNote" data-reveal>
            <ArrowIcon />
            <p>Curb appeal, privacy, practical access, and a cleaner finished look.</p>
          </div>
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
            {rest.map((item) => (
              <article key={item.title} className={`galleryTile galleryTile--${item.variant}`} data-reveal>
                <img src={item.image} alt={item.title} style={{ objectPosition: item.position }} />
                <div>
                  <span>{item.title}</span>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
