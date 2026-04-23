import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { galleryGridImages, galleryHeroImage, galleryMosaicImages } from "@/lib/gallery-image-manifest";
import { galleryCollections } from "@/lib/site";
import { getImagePresentation } from "@/lib/image-presentation";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Fence Installation Gallery in Jurupa Valley, CA | Empire Fence Inc",
  description:
    "Browse completed fence installations by Empire Fence Inc including vinyl privacy fences, wrought iron gates, wood enclosures, chain link, patio covers, and related boundary work across Jurupa Valley and the Inland Empire.",
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
        primaryAction={{ href: "/contact-us", label: "Get a free estimate" }}
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
            <h2>Fence installs, gate details, and related exterior work.</h2>
            <p>The gallery shows privacy fencing, frontage work, gates, patio covers, repairs, and commercial perimeter projects.</p>
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
            <h2>Look at the line, the gate fit, and the finish.</h2>
          </div>
          <div className="prose">
            <p>Good project photos should show alignment, grade changes, gate placement, and how the finished work looks from the street or yard.</p>
            <p>That is the difference between a fence that was installed and a project that was planned properly.</p>
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
            Get a free estimate
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
