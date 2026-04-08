import Image from "next/image";
import Link from "next/link";

import { galleryCollections } from "@/lib/site";
import { getImagePresentation } from "@/lib/image-presentation";
import { buildPageMetadata } from "@/lib/seo";

const images = [
  "/client/gallery-1.webp",
  "/client/gallery-2.webp",
  "/client/gallery-3.webp",
  "/client/gallery-4.webp",
  "/client/wrought-fence.jpg",
  "/client/wood-fence.jpg",
  "/client/vinyl-fence.jpg",
  "/client/location-fontana.jpg",
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
      <section className="galleryShowcase">
        <div className="container galleryShowcase__intro">
          <div>
            <span className="eyebrow">Gallery</span>
            <h1>
              Selected fence, gate, and frontage <em>work</em>.
            </h1>
          </div>
          <p>
            A tighter look at privacy runs, decorative iron, gates, and the outdoor upgrades that
            finish the property edge.
          </p>
        </div>

        <div className="container galleryShowcase__mosaic">
          {images.slice(0, 5).map((image, index) => (
            <figure
              key={image}
              className={`galleryShowcase__tile galleryShowcase__tile--${index === 0 ? "hero" : index === 1 ? "tall" : "default"}`}
            >
              <Image
                src={image}
                alt={`Empire Fence gallery image ${index + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={getImagePresentation(image, "galleryShowcase")}
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
          {images.slice(5).map((image, index) => (
            <figure key={image} className="galleryGrid__item">
              <Image
                src={image}
                alt={`Empire Fence gallery image ${index + 6}`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={getImagePresentation(image, "galleryGrid")}
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
