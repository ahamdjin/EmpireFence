import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getImagePresentation } from "@/lib/image-presentation";
import { areaPath } from "@/lib/paths";
import { buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";
import { business, coverageNotes, serviceAreas } from "@/lib/site";

const areaTitles = serviceAreas.map((area) => area.title);
const listedAreas = `${areaTitles.slice(0, -1).join(", ")}, and ${areaTitles.at(-1)}`;
const serviceAreaFaqs = [
  {
    question: "Which Inland Empire cities does Empire Fence serve?",
    answer: `Empire Fence currently highlights ${listedAreas} on the areas directory, with Jurupa Valley as the main base.`,
  },
  {
    question: "Can I request a fence estimate even if I already know the city and service type?",
    answer:
      "Yes. Use the area page to start local, then move into the exact service page or contact page with photos, rough footage, and any gate or wall notes.",
  },
  {
    question: "Does Empire Fence handle both residential and commercial work in these cities?",
    answer:
      "Yes. The area coverage includes residential frontage, privacy fencing, gate work, and commercial perimeter upgrades across the listed Inland Empire cities.",
  },
];

export const metadata = buildPageMetadata({
  title: "Service areas across the Inland Empire",
  description: `Empire Fence serves ${areaTitles.join(", ")} with fence installation, gate work, repairs, and exterior boundary upgrades.`,
  path: "/areas",
  image: "/client/locations/riverside/riverside-ca-fence-project.jpg",
  keywords: areaTitles.flatMap((title) => [
    `fence company ${title}`,
    `fence contractor ${title}`,
  ]),
});

export default function AreasPage() {
  const faqSchema = buildFaqSchema(serviceAreaFaqs);
  const pageSchema = buildWebPageSchema({
    title: "Service areas across the Inland Empire",
    description: `Empire Fence serves ${areaTitles.join(", ")} with fence installation, gate work, repairs, and exterior boundary upgrades.`,
    path: "/areas",
    image: "/client/locations/riverside/riverside-ca-fence-project.jpg",
    type: "CollectionPage",
  });

  return (
    <>
      <PageHero
        variant="areas"
        eyebrow="Service areas"
        title="Serving the Inland Empire"
        intro="Professional fence installation throughout Jurupa Valley, Riverside, Ontario, Chino, and surrounding areas."
        image="/client/locations/riverside/riverside-ca-fence-project.jpg"
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
            <h2>Local service you can trust</h2>
            <p>
              Based at {business.address}, Empire Fence provides fence installation, gate work, repairs,
              and exterior boundary upgrades across the Inland Empire cities listed below.
            </p>
            <div className="chipWrap">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={areaPath(area.slug)} className="chip">
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
                <p>{area.summary || area.intro}</p>
                <Link href={areaPath(area.slug)} className="textLink">
                  Open area page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container locationFaq">
          <div className="locationStage serviceFaqStage">
            <span className="eyebrow">Area FAQ</span>
            <h2>Questions people usually ask before they choose an area page.</h2>
            <p>Start with the city, then move into the exact service page if you already know the material or project type.</p>
            <div className="chipWrap">
              {serviceAreas.slice(0, 4).map((area) => (
                <Link key={area.slug} href={areaPath(area.slug)} className="chip">
                  {area.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="faqCluster">
            <div className="faqList faqList--stacked">
              {serviceAreaFaqs.map((item) => (
                <article key={item.question} className="faqItem">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Coverage note</span>
            <h2>Jurupa Valley stays central, with nearby cities that fit the same estimate and install rhythm.</h2>
          </div>
          <div className="prose">
            <p>Coverage stays focused around Inland Empire cities where Empire Fence can actually support the estimate, field planning, and install timeline without stretching into weak service territory.</p>
            <p>That matters because a strong city page should explain the type of properties and project decisions that tend to show up there, not just repeat the same copy under a different city name.</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container miniFeatureGrid">
          {serviceAreas.slice(0, 3).map((area, index) => (
            <article key={area.slug} className="miniFeatureCard">
              <span className="eyebrow">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.estimateLead}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
    </>
  );
}
