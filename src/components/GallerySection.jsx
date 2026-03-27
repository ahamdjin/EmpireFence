import { SectionTitle } from "./ui";

export function GallerySection({ gallery }) {
  return (
    <section className="gallerySection" id="gallery">
      <SectionTitle
        eyebrow="Selected work"
        title="Luxury tone up front. Local-service clarity underneath."
        tone="light"
        body="The gallery keeps the site feeling elevated without turning the whole experience into a design exercise."
      />

      <div className="galleryMasonry">
        {gallery.map((item) => (
          <article key={item.title} className={`galleryCard galleryCard--${item.variant}`} data-reveal>
            <img src={item.image} alt={item.title} style={{ objectPosition: item.position }} />
            <div className="galleryCard__overlay">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
