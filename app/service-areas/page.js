import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getImagePresentation } from "@/lib/image-presentation";
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
        eyebrow="Service areas"
        title="Serving the Inland Empire"
        intro="Professional fence installation throughout Jurupa Valley, Riverside, Ontario, Chino, and surrounding areas."
        image="/client/location-riverside.jpg"
        chips={["Jurupa Valley", "Riverside", "Ontario"]}
        primaryAction={{ href: "/contact-us", label: "Get free quote" }}
        secondaryAction={{ href: "#locations", label: "View locations" }}
      />

      <section className="coverageAtlas" id="map">
        <div className="container coverageAtlas__grid">
          <div className="coverageAtlas__map">
            <div className="mapCard mapCard--standalone">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence coverage map" />
            </div>
          </div>

          <div className="coverageAtlas__copy">
            <span className="eyebrow">Our Coverage</span>
            <h2>Local Service You Can Trust</h2>
            <p>
              Based at {business.address}, we provide fast, reliable fencing services
              across the entire Inland Empire region.
            </p>
            <div className="chipWrap">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="chip chip--static">
                  {area.title}
                </Link>
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

      <section className="section section--soft" id="locations">
        <div className="container locationGrid">
          {serviceAreas.map((area) => (
            <article key={area.slug} className="locationCard">
              <div className="locationCard__image">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 32vw"
                  style={getImagePresentation(area.image, "locationCard")}
                />
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
