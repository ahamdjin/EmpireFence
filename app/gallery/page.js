import Image from "next/image";

import { PageHero } from "@/components/page-hero";

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

export const metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Project imagery carried over from the current Empire Fence brand site."
        intro="This page turns the current photo set into a proper gallery section instead of a small visual block on the homepage."
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
