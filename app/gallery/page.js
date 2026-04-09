import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { galleryCollections } from "@/lib/site";
import { getImagePresentation } from "@/lib/image-presentation";
import { buildPageMetadata } from "@/lib/seo";

const galleryImages = [
  { src: "/client/gallery-1.webp", alt: "Wrought iron fence with decorative gate in Jurupa Valley" },
  { src: "/client/gallery-2.webp", alt: "Vinyl privacy fence installation in Inland Empire" },
  { src: "/client/gallery-3.webp", alt: "Wood fence with clean finish for residential property" },
  { src: "/client/gallery-4.webp", alt: "Chain link fence with privacy slats for commercial property" },
  { src: "/client/wrought-fence.jpg", alt: "Wrought iron decorative fence with scrollwork detail" },
  { src: "/client/wood-fence.jpg", alt: "Natural wood privacy fence with horizontal boards" },
  { src: "/client/vinyl-fence.jpg", alt: "White vinyl fence with matching gate installation" },
  { src: "/client/location-fontana.jpg", alt: "Completed fence project in Fontana California" },
];

export const metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "View Empire Fence project imagery covering fence installation, exterior upgrades, and perimeter work across the Inland Empire.",
  path: "/gallery",
  image: "/client/gallery-4.webp",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        variant="gallery"
        eyebrow="Project gallery"
        title="Our Work"
        intro="Browse our portfolio of completed fence installations throughout Jurupa Valley and the Inland Empire."
        image={galleryImages[0].src}
        primaryAction={{ href: "/contact-us", label: "Get free quote" }}
        secondaryAction={{ href: "/services", label: "Services" }}
      />

      <section className="galleryShowcase">

        <div className="container galleryShowcase__mosaic">
          {galleryImages.slice(0, 5).map((image, index) => (
            <figure
              key={image.src}
              className={`galleryShowcase__tile galleryShowcase__tile--${index === 0 ? "hero" : index === 1 ? "tall" : "default"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={getImagePresentation(image.src, "galleryShowcase")}
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container galleryRail">
          <div className="galleryRail__lead">
            <span className="eyebrow">Project mix</span>
            <h2>Fence installs, gate details, and supporting exterior work that read better once the whole edge is finished.</h2>
            <p>The strongest jobs here are not just one material. They are the ones where the frontage, transitions, and entry moments are handled as one visual scope.</p>
          </div>
          <div className="galleryRail__list">
            {galleryCollections.map((item) => (
              <article key={item.title} className="miniFeatureCard">
                <span className="eyebrow">Collection</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container galleryGrid">
          {galleryImages.slice(5).map((image, index) => (
            <figure key={image.src} className="galleryGrid__item">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={getImagePresentation(image.src, "galleryGrid")}
              />
            </figure>
          ))}
        </div>
        <div className="container sectionCtaRow">
          <Link href="/contact-us" className="button button--primary">
            Start an estimate
          </Link>
        </div>
      </section>
    </>
  );
}
