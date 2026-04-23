import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getAllAreas, getAllServices } from "@/lib/content";
import { getImagePresentation } from "@/lib/image-presentation";
import { areaPath, areasIndexPath, servicePath, servicesIndexPath } from "@/lib/paths";
import { buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";
import { business, coverageNotes, serviceAreas } from "@/lib/site";

function inferAreaServiceSlugs(area) {
  const haystack = `${area.data.summary} ${area.content}`.toLowerCase();
  const inferred = [];

  const serviceMatchers = [
    ["vinyl", "vinyl-fence"],
    ["wood", "wood-fence"],
    ["wrought iron", "wrought-iron-fence"],
    ["chain link", "chain-link-fence"],
    ["metal", "metal-fence"],
    ["repair", "fence-repairs"],
    ["patio", "patio-enclosures"],
    ["gazebo", "gazebo-builder"],
    ["railing", "railing-contractor"],
  ];

  serviceMatchers.forEach(([keyword, slug]) => {
    if (haystack.includes(keyword) && !inferred.includes(slug)) {
      inferred.push(slug);
    }
  });

  ["vinyl-fence", "wood-fence", "fence-repairs"].forEach((slug) => {
    if (!inferred.includes(slug)) {
      inferred.push(slug);
    }
  });

  return inferred.slice(0, 3);
}

export async function generateMetadata() {
  const areas = await getAllAreas();
  const areaTitles = areas.map((area) => area.data.title);

  return buildPageMetadata({
    title: "Fence service areas across the Inland Empire",
    description: `Empire Fence serves ${areaTitles.join(", ")} with fence installation, repairs, gate work, and outdoor boundary upgrades.`,
    path: areasIndexPath,
    image: "/client/gbp/vinyl-slope-boundary.jpg",
    keywords: areaTitles.flatMap((title) => [`fence company ${title}`, `fence contractor ${title}`]),
  });
}

export default async function AreasPage() {
  const [areas, services] = await Promise.all([getAllAreas(), getAllServices()]);
  const areaTitles = areas.map((area) => area.data.title);
  const listedAreas = `${areaTitles.slice(0, -1).join(", ")}, and ${areaTitles.at(-1)}`;
  const serviceAreaFaqs = [
    {
      question: "Which Inland Empire cities does Empire Fence serve?",
      answer: `Empire Fence currently highlights ${listedAreas} on the areas directory, with Jurupa Valley as the main base.`,
    },
    {
      question: "Can I request a fence estimate even if I already know the city and service type?",
      answer:
        "Yes. Start with the city that matches the property, then move into the exact service or estimate request with photos, rough footage, and any gate or wall notes.",
    },
    {
      question: "Does Empire Fence handle both residential and commercial work in these cities?",
      answer:
        "Yes. The area coverage includes residential frontage, privacy fencing, gate work, and commercial perimeter upgrades across the listed Inland Empire cities.",
    },
  ];

  const pageSchema = buildWebPageSchema({
    title: "Fence service areas across the Inland Empire",
    description: `Empire Fence serves ${areaTitles.join(", ")} with fence installation, repairs, gate work, and outdoor boundary upgrades.`,
    path: areasIndexPath,
    image: "/client/gbp/vinyl-slope-boundary.jpg",
    type: "CollectionPage",
  });
  const faqSchema = buildFaqSchema(serviceAreaFaqs);

  const areasWithLinks = areas.map((area) => {
    const matchedArea = serviceAreas.find((item) => item.slug === area.slug);
    const featuredSlugs = matchedArea?.featuredServiceSlugs?.length
      ? matchedArea.featuredServiceSlugs.slice(0, 3)
      : inferAreaServiceSlugs(area);

    return {
      ...area,
      featuredServices: featuredSlugs
        .map((slug) => services.find((service) => service.slug === slug))
        .filter(Boolean),
    };
  });

  return (
    <>
      <PageHero
        variant="areas"
        eyebrow="Service areas"
        title="Serving the Inland Empire"
        intro={`Compare city-specific fence installation, repairs, gates, and outdoor improvement coverage across ${areas.length} Inland Empire service areas, then move into the exact city once the property details are clear.`}
        image="/client/gbp/vinyl-slope-boundary.jpg"
        chips={[`${areas.length} active cities`, `${services.length} service paths`, "Residential and commercial"]}
        primaryAction={{ href: "/contact-us", label: "Get a free estimate" }}
        secondaryAction={{ href: "#locations", label: "Browse all service areas" }}
      />

      <section className="coverageAtlas" id="map">
        <div className="container coverageAtlas__grid">
          <div className="coverageAtlas__map">
            <div className="mapCard mapCard--standalone">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence coverage map" />
            </div>
          </div>

          <div className="coverageAtlas__copy">
            <span className="eyebrow">Coverage directory</span>
            <h2>Every city now links directly into the matching fence and gate scope.</h2>
            <p>
              Based at {business.address}, Empire Fence provides fence installation, gate work, repairs,
              and exterior boundary upgrades across the Inland Empire cities listed below.
            </p>
            <div className="chipWrap">
              {areasWithLinks.map((area) => (
                <Link key={area.slug} href={areaPath(area.slug)} className="chip">
                  {area.data.title}
                </Link>
              ))}
            </div>
            <div className="buttonRow">
              <Link href={servicesIndexPath} className="button button--primary">
                Browse fence and gate services
              </Link>
              <Link href="/contact-us" className="textLink">
                Get a free estimate
              </Link>
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
        <div className="container">
          <div className="splitIntro">
            <div>
              <span className="eyebrow">Area directory</span>
              <h2>Choose the city first, then move into the closest service path.</h2>
            </div>
          <div className="prose">
            <p>
              Each city page is built to help the buyer move from local property context into the right fence,
              gate, repair, or outdoor-improvement scope without losing sight of how the site is actually used.
            </p>
          </div>
          </div>

          <div className="locationGrid">
            {areasWithLinks.map((area) => (
              <article key={area.slug} className="locationCard">
                <div className="locationCard__image">
                  <Image
                    src={area.data.heroImage}
                    alt={area.data.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 32vw"
                    style={getImagePresentation(area.data.heroImage, "locationCard")}
                  />
                </div>
                <div className="locationCard__body">
                  <h2>{area.data.title}</h2>
                  <p>{area.data.summary}</p>
                  <div className="chipWrap">
                    {area.featuredServices.map((service) => (
                      <Link key={service.slug} href={servicePath(service.slug)} className="chip">
                        {service.data.title}
                      </Link>
                    ))}
                  </div>
                  <div className="buttonRow">
                    <Link href={areaPath(area.slug)} className="textLink">
                      Explore fence work in {area.data.title}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container locationFaq">
          <div className="locationStage serviceFaqStage">
            <span className="eyebrow">Area FAQ</span>
            <h2>Questions people ask before choosing a city page.</h2>
            <p>Start with the city, then move into the exact fence installation, repair, or gate service once the property and material direction are clear.</p>
            <div className="chipWrap">
              {areasWithLinks.slice(0, 6).map((area) => (
                <Link key={area.slug} href={areaPath(area.slug)} className="chip">
                  {area.data.title}
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

      <section className="section section--soft">
        <div className="container">
          <div className="splitIntro">
            <div>
              <span className="eyebrow">Popular service paths</span>
              <h2>Common service routes across the same coverage map.</h2>
            </div>
          <div className="prose">
            <p>
                If you already know the material or repair direction, use these service paths directly. If not, start
                with the city and move into the closest service once the local property conditions are clear.
              </p>
            </div>
          </div>

          <div className="miniFeatureGrid">
            {services.slice(0, 6).map((service, index) => (
              <article key={service.slug} className="miniFeatureCard">
                <span className="eyebrow">0{index + 1}</span>
                <h3>{service.data.title}</h3>
                <p>{service.data.summary}</p>
                <div className="chipWrap">
                  {areasWithLinks
                    .filter((area) => area.featuredServices.some((item) => item.slug === service.slug))
                    .slice(0, 3)
                    .map((area) => (
                      <Link key={`${service.slug}-${area.slug}`} href={areaPath(area.slug)} className="chip">
                        {area.data.title}
                      </Link>
                    ))}
                </div>
                <Link href={servicePath(service.slug)} className="textLink">
                  Explore {service.data.title.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
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
