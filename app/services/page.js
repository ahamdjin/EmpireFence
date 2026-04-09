import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { getAllServices } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore vinyl, wood, wrought iron, chain link, custom fencing, gates, and block wall services from Empire Fence.",
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
        intro="Vinyl, wood, wrought iron, chain link, gates, and block walls. Professional installation for homes and businesses."
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
              variant={index < 2 ? "feature" : "tile"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
