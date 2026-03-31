import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/seo";
import { business, serviceAreas } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Service areas",
  description:
    "Empire Fence serves Jurupa Valley, Riverside, Ontario, Chino, Rancho Cucamonga, Fontana, and San Bernardino.",
  path: "/service-areas",
  image: "/client/location-riverside.jpg",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title={
          <>
            Jurupa Valley and nearby Inland Empire <em>cities</em>.
          </>
        }
        intro="Service across the local cities where Empire Fence handles privacy fencing, frontage work, gates, and supporting outdoor scope."
        image="/client/location-riverside.jpg"
      />

      <section className="section">
        <div className="container locationGrid">
          {serviceAreas.map((area) => (
            <article key={area.slug} className="locationCard">
              <div className="locationCard__image">
                <Image src={area.image} alt={area.title} fill sizes="(max-width: 900px) 100vw, 32vw" />
              </div>
              <div className="locationCard__body">
                <h2>{area.title}</h2>
                <p>{area.intro}</p>
                <Link href={`/${area.slug}`} className="textLink">
                  Open area page
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mapCard mapCard--standalone">
          <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence coverage map" />
        </div>
      </section>
    </>
  );
}
