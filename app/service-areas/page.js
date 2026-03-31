import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { business, serviceAreas } from "@/lib/site";

export const metadata = {
  title: "Service areas",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Jurupa Valley plus the Inland Empire cities already on the current site."
        intro="Each service-area page now has a dedicated route so the business can grow local SEO content cleanly instead of stacking location text into one screen."
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
