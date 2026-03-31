import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
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
