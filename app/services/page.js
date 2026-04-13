import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getAllServices } from "@/lib/content";
import { areasIndexPath } from "@/lib/paths";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceListSchema,
  buildWebPageSchema,
} from "@/lib/seo";

const servicesFaqs = [
  {
    question: "Which service page should I start with if I only know the problem, not the exact material?",
    answer:
      "Start with the closest scope. If the main issue is privacy, compare vinyl and wood first. If the frontage, gate, or visible entry matters most, move into wrought iron or metal. If the fence is failing, the repair page is usually the best first step.",
  },
  {
    question: "Can Empire Fence handle more than one service in the same estimate?",
    answer:
      "Yes. Real projects often combine fencing, gates, railings, repairs, patio enclosure work, or other exterior scope. The estimate can stage those pieces together so the final layout feels cleaner and more coordinated.",
  },
  {
    question: "Are these service pages only for Jurupa Valley?",
    answer:
      "No. Empire Fence is based in Jurupa Valley, but the same service pages support estimates across nearby Inland Empire cities. The service page narrows the scope first, and the city page narrows the location context second.",
  },
  {
    question: "What should I send before requesting a fence or gate estimate?",
    answer:
      "The best starting point is the property address, a few photos, rough footage if available, and notes on gates, repairs, walls, or any area where the project changes direction. That gives the estimate a stronger foundation from the start.",
  },
];

const serviceDecisionCards = [
  {
    eyebrow: "01",
    title: "Privacy-first projects",
    copy:
      "Vinyl and wood usually belong at the top of the shortlist when the owner cares most about privacy, separation, and a backyard boundary that feels resolved.",
  },
  {
    eyebrow: "02",
    title: "Front-yard and curb-appeal work",
    copy:
      "Wrought iron and metal are usually the right place to start when the fence is visible from the street and should improve the look of the property instead of closing it off.",
  },
  {
    eyebrow: "03",
    title: "Security and perimeter coverage",
    copy:
      "Chain link, metal, and certain gate combinations matter more when enclosure, access control, visibility, and practical site coverage matter as much as appearance.",
  },
  {
    eyebrow: "04",
    title: "Repairs and bundled exterior scope",
    copy:
      "Some properties need repairs, railings, patio work, or multiple service lines handled together. The service pages should help the buyer see that the estimate can cover more than one piece.",
  },
];

export const metadata = buildPageMetadata({
  title: "Fence and Gate Services in Jurupa Valley",
  description:
    "Compare fence installation, gate work, repairs, railings, patio enclosures, gazebo builds, and fence supply support from Empire Fence in Jurupa Valley and nearby Inland Empire cities.",
  path: "/services",
  image: "/client/gbp/vinyl-slope-boundary.jpg",
  keywords: [
    "fence services Jurupa Valley",
    "gate contractor Jurupa Valley",
    "fence repair Jurupa Valley",
    "vinyl wood wrought iron chain link fence services",
    "Inland Empire fence services",
  ],
});

export default async function ServicesPage() {
  const services = await getAllServices();
  const pageSchema = buildWebPageSchema({
    title: "Fence and Gate Services in Jurupa Valley",
    description:
      "Compare Empire Fence service pages for vinyl, wood, wrought iron, chain link, metal fencing, repairs, railings, patio enclosures, gazebo structures, and fence supply support.",
    path: "/services",
    image: "/client/gbp/vinyl-slope-boundary.jpg",
    type: "CollectionPage",
  });
  const servicesSchema = buildServiceListSchema(services);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services" },
  ]);
  const faqSchema = buildFaqSchema(servicesFaqs);

  return (
    <>
      <PageHero
        variant="services"
        eyebrow="Our services"
        title="Fence and Gate Services in Jurupa Valley"
        intro="Compare privacy fencing, frontage upgrades, gate work, repairs, and supporting exterior services from Empire Fence across Jurupa Valley and nearby Inland Empire cities."
        image="/client/gbp/vinyl-slope-boundary.jpg"
        chips={["Free estimates", "Residential and commercial"]}
        primaryAction={{ href: "/contact-us", label: "Get free quote" }}
        secondaryAction={{ href: "/gallery", label: "See projects" }}
      />

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">How to use this page</span>
            <h2>Start with the closest material or project type, then narrow the final scope during the estimate.</h2>
          </div>
          <div className="prose">
            <p>Some buyers arrive knowing they want vinyl privacy fencing. Others only know the fence is leaning, the gate is awkward, the frontage looks dated, or the property needs a stronger perimeter. This service directory is built to help either type of buyer move into the right conversation without guessing too early.</p>
            <p>The reason this matters is simple: most real projects are not perfect single-service jobs. One property may need a new fence line plus a gate reset. Another may need privacy fencing in the backyard and a more open-looking front entry. The service pages should make those combinations easier to understand before the estimate starts.</p>
            <p>If the job also touches railings, patio enclosure work, repairs, or a visible entry sequence, the estimate can stage those pieces together and keep the final result more consistent than treating each piece like a separate afterthought.</p>
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
        <div className="container">
          <SectionHeading
            eyebrow="How buyers usually narrow the scope"
            title="The fastest way to choose the right service page."
            copy="The goal is not to guess the exact product first. It is to move into the closest service path so the estimate starts with the right material, frontage condition, gate needs, and property priorities."
          />
          <div className="miniFeatureGrid">
            {serviceDecisionCards.map((item) => (
              <article key={item.title} className="miniFeatureCard">
                <span className="eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container locationFaq">
          <div className="locationStage serviceFaqStage">
            <span className="eyebrow">Service FAQ</span>
            <h2>Questions buyers usually ask before they choose the right service page.</h2>
            <p>Use the directory to narrow the closest service path first, then move into the exact service page, city page, gallery, or contact page with the real site details.</p>
            <div className="chipWrap">
              <Link href={areasIndexPath} className="chip">
                Service areas
              </Link>
              <Link href="/gallery" className="chip">
                Project gallery
              </Link>
              <Link href="/contact-us" className="chip">
                Contact page
              </Link>
            </div>
          </div>

          <div className="faqCluster">
            <div className="faqList faqList--stacked">
              {servicesFaqs.map((item) => (
                <article key={item.question} className="faqItem">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
