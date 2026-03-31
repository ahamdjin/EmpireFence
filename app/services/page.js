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
  image: "/client/vinyl-fence.jpg",
});

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <>
      <PageHero
        eyebrow="All services"
        title={
          <>
            Fence, gate, wall, and outdoor <em>services</em>.
          </>
        }
        intro="Browse the main project types Empire Fence handles across Jurupa Valley and nearby Inland Empire cities."
        image="/client/vinyl-fence.jpg"
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
