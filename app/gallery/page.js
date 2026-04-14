import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { galleryGridImages, galleryHeroImage, galleryMosaicImages } from "@/lib/gallery-image-manifest";
import { galleryCollections } from "@/lib/site";
import { getImagePresentation } from "@/lib/image-presentation";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Fence Project Gallery in Jurupa Valley, CA",
  description:
    "Browse completed fence installations by Empire Fence: vinyl privacy fences, wrought iron gates, wood enclosures, chain link, and patio covers across Jurupa Valley and the Inland Empire.",
  path: "/gallery",
  image: galleryHeroImage,
});

export default function GalleryPage() {
  const pageSchema = buildWebPageSchema({
    title: "Fence Installation Gallery in Jurupa Valley, CA",
    description:
      "Review Empire Fence project imagery across vinyl, wood, wrought iron, chain link, patio, gate, and related exterior boundary work throughout the Inland Empire.",
    path: "/gallery",
    image: galleryHeroImage,
    type: "CollectionPage",
  });

  return (
    <>
      <PageHero
        variant="gallery"
        eyebrow="Project gallery"
        title="Our Fence Installation Gallery"
        intro="Browse our portfolio of completed fence installations throughout Jurupa Valley and the Inland Empire."
        image={galleryHeroImage}
        primaryAction={{ href: "/contact-us", label: "Get free quote" }}
        secondaryAction={{ href: "/services", label: "Services" }}
      />

      <section className="galleryShowcase">

        <div className="container galleryShowcase__mosaic">
          {galleryMosaicImages.map((image, index) => (
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

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">What to look for</span>
            <h2>The useful project proof is usually in the line, the gate fit, and the transition detail.</h2>
          </div>
          <div className="prose">
            <p>A strong fence gallery should show more than a finished panel. It should show alignment, how the material sits against grade, whether the gates feel integrated, and whether the visible parts of the property edge look resolved from the street.</p>
            <p>That is why Empire Fence treats the gallery as proof of planning as much as proof of installation. The best projects are the ones where the edge reads cleanly from multiple angles.</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container galleryGrid">
          {galleryGridImages.map((image) => (
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
    </>
  );
}
