import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { getAllServices } from "@/lib/content";
import { buildPageMetadata, buildServiceListSchema, buildWebPageSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore vinyl, wood, wrought iron, chain link, metal fencing, repairs, gazebo, supply, railing, and patio enclosure services from Empire Fence.",
  path: "/services",
  image: "/client/vinyl-fence.jpg",
});

export default async function ServicesPage() {
  const services = await getAllServices();
  const pageSchema = buildWebPageSchema({
    title: "Services",
    description:
      "Compare Empire Fence service pages for vinyl, wood, wrought iron, chain link, metal fencing, repairs, railings, patio enclosures, gazebo structures, and fence supply support.",
    path: "/services",
    image: "/client/vinyl-fence.jpg",
    type: "CollectionPage",
  });
  const servicesSchema = buildServiceListSchema(services);

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Fencing Services"
        intro="Ten focused service lines covering vinyl, wood, wrought iron, chain link, metal fencing, repairs, railings, patio enclosures, gazebo builds, and fence supply support."
        image="/client/vinyl-fence.jpg"
        primaryAction={{ href: "/contact-us", label: "Get free quote" }}
        secondaryAction={{ href: "/gallery", label: "See projects" }}
      />

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">How to use this page</span>
            <h2>Start with the material or project type that feels closest, then narrow the scope during the estimate.</h2>
          </div>
          <div className="prose">
            <p>Some clients arrive knowing they want vinyl privacy. Others only know the fence is failing, the gate is awkward, or the frontage needs to look better. This service directory is meant to help either type of buyer move into the right conversation without guessing.</p>
            <p>If the project touches more than one element, such as fencing plus gates, railings, patio enclosure work, or a visible front entry, the estimate can stage those pieces together and keep the final result cleaner.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container serviceIndex">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={{
                ...service,
                data: {
                  ...service.data,
                  highlights: service.data.highlights.slice(0, 2),
                },
              }}
              variant={index < 6 ? "feature" : "tile"}
            />
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container miniFeatureGrid">
          <article className="miniFeatureCard">
            <span className="eyebrow">01</span>
            <h3>Privacy and low maintenance</h3>
            <p>Vinyl and wood are usually the first comparison for homeowners who want privacy, but the right answer depends on upkeep tolerance, style, and how visible the fence is.</p>
          </article>
          <article className="miniFeatureCard">
            <span className="eyebrow">02</span>
            <h3>Security and visibility</h3>
            <p>Chain link, metal, and wrought iron belong in the conversation when access control, visibility, or a more secure perimeter matter just as much as appearance.</p>
          </article>
          <article className="miniFeatureCard">
            <span className="eyebrow">03</span>
            <h3>Bundled exterior scope</h3>
            <p>Railing, patio, gazebo, and repair paths matter because real properties rarely break into perfect single-service projects. The site should reflect that reality.</p>
          </article>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
