import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getAllServices } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore vinyl, wood, wrought iron, chain link, custom fencing, block walls, patios, driveways, and turf services from Empire Fence.",
  path: "/services",
  image: "/client/gallery-2.webp",
});

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <>
      <PageHero
        eyebrow="All services"
        title="Every core offer from the current Empire Fence site, separated into individual pages."
        intro="Fence materials, gates, block walls, patios, turf, and broader exterior scope now live in a structured service system instead of one dense homepage."
        image="/client/gallery-2.webp"
      />

      <section className="section">
        <div className="container serviceIndex">
          {services.map((service) => (
            <article key={service.slug} className="serviceIndexCard">
              <div className="serviceIndexCard__image">
                <Image src={service.data.heroImage} alt={service.data.title} fill sizes="(max-width: 900px) 100vw, 32vw" />
              </div>
              <div className="serviceIndexCard__body">
                <span className="eyebrow">{service.data.eyebrow}</span>
                <h2>{service.data.title}</h2>
                <p>{service.data.summary}</p>
                <ul className="bulletList">
                  {service.data.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={`/${service.slug}`} className="button button--primary">
                  View service page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
