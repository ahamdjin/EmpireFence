import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { getAllServices } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore vinyl, wood, wrought iron, chain link, metal fencing, fence repairs, gazebo building, fence supply, railing, and patio enclosure services from Empire Fence.",
  path: "/services",
  image: "/client/vinyl-fence.jpg",
});

export default async function ServicesPage() {
  const services = await getAllServices();

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
    </>
  );
}
