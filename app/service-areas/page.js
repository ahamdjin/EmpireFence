import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/seo";
import { business, coverageNotes, serviceAreas } from "@/lib/site";

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
        variant="areas"
        eyebrow="Coverage"
        title={
          <>
            Jurupa Valley and nearby Inland Empire <em>cities</em>.
          </>
        }
        intro="Service across the local cities where Empire Fence handles privacy fencing, frontage work, gates, and supporting outdoor scope."
        image="/client/location-riverside.jpg"
        chips={serviceAreas.slice(0, 6).map((area) => area.title)}
      />

      <section className="section">
        <div className="container miniFeatureGrid">
          {coverageNotes.map((item) => (
            <article key={item.title} className="miniFeatureCard">
              <span className="eyebrow">Work profile</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--soft">
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
      </section>

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Map coverage</span>
            <h2>Jurupa Valley stays central, with nearby cities that fit the same estimate and install rhythm.</h2>
          </div>
          <div className="prose">
            <p>Coverage stays focused around the Inland Empire cities where Empire Fence is already doing privacy runs, frontage upgrades, gates, and supporting outdoor work.</p>
          </div>
        </div>
        <div className="mapCard mapCard--standalone">
          <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence coverage map" />
        </div>
      </section>
    </>
  );
}
