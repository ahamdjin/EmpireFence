import Image from "next/image";
import Link from "next/link";

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
      <section className="coverageAtlas">
        <div className="container coverageAtlas__grid">
          <div className="coverageAtlas__map">
            <div className="mapCard mapCard--standalone">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence coverage map" />
            </div>
          </div>

          <div className="coverageAtlas__copy">
            <span className="eyebrow">Coverage</span>
            <h1>
              Jurupa Valley and nearby Inland Empire <em>cities</em>.
            </h1>
            <p>
              Service across the local cities where Empire Fence handles privacy fencing, frontage
              work, gates, and supporting outdoor scope.
            </p>
            <div className="chipWrap">
              {serviceAreas.slice(0, 6).map((area) => (
                <span key={area.slug} className="chip chip--static">
                  {area.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <span className="eyebrow">Coverage note</span>
            <h2>Jurupa Valley stays central, with nearby cities that fit the same estimate and install rhythm.</h2>
          </div>
          <div className="prose">
            <p>Coverage stays focused around the Inland Empire cities where Empire Fence is already doing privacy runs, frontage upgrades, gates, and supporting outdoor work.</p>
          </div>
        </div>
      </section>
    </>
  );
}
