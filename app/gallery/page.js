import Image from "next/image";

import { PageHero } from "@/components/page-hero";
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
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Selected fence, gate, and frontage <em>work</em>.
          </>
        }
        intro="A tighter look at privacy runs, decorative iron, gates, and the outdoor upgrades that finish the property edge."
        image="/client/gallery-4.webp"
      />

      <section className="section">
        <div className="container galleryGrid">
          {images.map((image, index) => (
            <figure key={image} className="galleryGrid__item">
              <Image src={image} alt={`Empire Fence gallery image ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 33vw" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
