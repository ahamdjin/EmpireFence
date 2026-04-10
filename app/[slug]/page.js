import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getAllServices, getServiceBySlug } from "@/lib/content";
import {
  buildAreaServiceSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
} from "@/lib/seo";
import { business, serviceAreas } from "@/lib/site";

function findLocation(slug) {
  return serviceAreas.find((area) => area.slug === slug);
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...serviceAreas.map((area) => ({ slug: area.slug })),
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (service) {
    return buildPageMetadata({
      title: service.data.title,
      description: service.data.summary,
      path: `/${service.slug}`,
      image: service.data.heroImage,
      keywords: [
        `${service.data.title} Jurupa Valley`,
        `${service.data.title} Inland Empire`,
        `${service.data.title.toLowerCase()} estimate`,
      ],
    });
  }

  const area = findLocation(slug);
  if (area) {
    return buildPageMetadata({
      title: area.title,
      description: area.summary || area.intro,
      path: `/${area.slug}`,
      image: area.image,
      keywords: [
        `fence company ${area.title}`,
        `fence contractor ${area.title}`,
        `gate contractor ${area.title}`,
        `vinyl fence ${area.title}`,
      ],
    });
  }

  return {};
}

function LocationPage({ area, services }) {
  const nearbyAreas = serviceAreas.filter((item) => item.slug !== area.slug).slice(0, 4);
  const localServices = (area.featuredServiceSlugs?.length
    ? area.featuredServiceSlugs
        .map((slug) => services.find((item) => item.slug === slug))
        .filter(Boolean)
    : services
  ).slice(0, 4);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/service-areas" },
    { name: area.title },
  ]);
  const pageSchema = buildAreaServiceSchema(area, localServices);
  const faqSchema = area.localFaqs?.length ? buildFaqSchema(area.localFaqs) : null;

  return (
    <>
      <PageHero
        variant="service"
        eyebrow="Service area"
        title={
          <>
            Fence and gate work in <em>{area.title}</em>
          </>
        }
        intro={area.summary || `Privacy fencing, frontage work, entry gates, and supporting outdoor scope in ${area.title}.`}
        image={area.image}
        chips={["Residential frontage", "Commercial perimeter"]}
        primaryAction={{ href: "/contact-us", label: "Start estimate" }}
        secondaryAction={{ href: business.phoneHref, label: business.phoneDisplay }}
      />

      <section className="section">
        <div className="container coverageAtlas__grid locationCoverage">
          <Reveal className="coverageAtlas__copy locationCoverage__copy" initiallyVisible variant="left">
            <span className="eyebrow">Local coverage</span>
            <h2>{area.title} stays inside the same estimate and install rhythm Empire Fence uses across nearby Inland Empire cities.</h2>
            <p>{area.summary || area.intro}</p>
            <p>{area.estimateLead}</p>
            <div className="chipWrap">
              <span className="chip chip--static">{area.title}</span>
              {nearbyAreas.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`} className="chip">
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                Start estimate
              </Link>
              <a href={business.phoneHref} className="textLink">
                {business.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal className="locationCoverage__map" delay={90} variant="soft">
            <div className="mapCard mapCard--standalone">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title={`Empire Fence coverage map near ${area.title}`} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Work profile"
            title={`What typically comes up in ${area.title}.`}
            copy="The best city pages explain the actual property mix, the common fence problems, and the service choices that tend to make sense locally."
          />
          <div className="miniFeatureGrid">
            {area.propertyFocus.map((item, index) => (
              <Reveal key={item.title} className="miniFeatureCard" delay={index * 70} variant="up">
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Estimate strategy</span>
            <h2>What helps a {area.title} estimate move faster and come back more accurately.</h2>
          </div>
          <div className="prose">
            <p>{area.estimateLead}</p>
            <p>This matters because city pages should narrow the conversation. They should help the owner understand the property conditions, common material fit, and the kinds of photos or notes that make the estimate more useful from the first review.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container locationServiceDeck">
          <Reveal className="locationServiceDeck__lead" initiallyVisible variant="left">
            <SectionHeading
              eyebrow="Popular scope"
              title={`The service mix Empire Fence most often handles in ${area.title}.`}
              copy="Use the city page to start local, then move into the exact service page if the material direction is already clear."
            />
            <Link href="/services" className="textLink">
              Browse all services
            </Link>
          </Reveal>

          <div className="locationServiceDeck__list">
            <Reveal variant="soft">
              <ServiceCard service={localServices[0]} variant="feature" />
            </Reveal>

            <div className="serviceGrid">
              {localServices.slice(1).map((service, index) => (
                <Reveal key={service.slug} delay={(index + 1) * 70} variant="soft">
                  <ServiceCard service={service} variant="tile" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container contactUtility locationUtility">
          <Reveal className="locationQuotePanel" variant="soft">
            <span className="eyebrow">Request a quote</span>
            <h2>Start the estimate for {area.title}.</h2>
            <p>Share the property address, photos, and whether this is privacy fencing, frontage work, gate scope, or a broader exterior upgrade.</p>
            <QuoteForm compact />
          </Reveal>

          <Reveal className="contactUtility__booking locationBookingPanel" delay={90} variant="soft">
            <span className="eyebrow">Direct estimate path</span>
            <h2>Call or send the request for {area.title}.</h2>
            <p>Use the contact page, call the team, or email the address, photos, and rough footage instead of going through a booking widget.</p>
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <p>{business.hours}</p>
            </div>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                Open contact page
              </Link>
              <a href={business.phoneHref} className="button button--ghost">
                Call the team
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      {area.localFaqs?.length ? (
        <section className="section">
          <div className="container locationFaq">
            <Reveal className="locationStage serviceFaqStage" initiallyVisible variant="left">
              <span className="eyebrow">Local FAQ</span>
              <h2>Questions that usually come up in {area.title} before the project gets priced.</h2>
              <p>These are the issues that tend to shape the estimate early: material direction, gate layout, and whether the site needs repair, replacement, or a more complete upgrade.</p>
            </Reveal>

            <div className="faqCluster">
              <div className="faqList faqList--stacked">
                {area.localFaqs.map((item) => (
                  <article key={item.question} className="faqItem">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  );
}

function ServicePage({ service, services }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const highlights = service.data.highlights ?? [];
  const faqs = service.data.faqs ?? [];
  const proofNotes = [
    "Used to set direction before material, transitions, and field details get locked in.",
    "Keeps the finished work feeling cleaner from the street and more resolved on the property.",
    "Useful when this install needs stronger fit, better coordination, or a more durable outcome.",
  ];
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.data.title },
  ]);
  const pageSchema = buildServiceSchema(service);
  const faqSchema = faqs.length ? buildFaqSchema(faqs) : null;

  return (
    <>
      <PageHero
        variant="service"
        eyebrow={service.data.eyebrow}
        title={service.data.title}
        intro={service.data.summary}
        image={service.data.heroImage}
        chips={highlights.slice(0, 2)}
      />

      <section className="section section--soft">
        <div className="container serviceProofBand">
          <Reveal className="serviceProofBand__intro" initiallyVisible variant="left">
            <span className="eyebrow">Service overview</span>
            <h2>This scope gets planned around the property edge, not dropped in as a stock install.</h2>
            <p>{service.data.summary}</p>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                Request estimate
              </Link>
              <a href={business.phoneHref} className="textLink">
                {business.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <div className="serviceProofBand__grid">
            {highlights.map((item, index) => (
              <Reveal key={item} className="processCard serviceProofCard" delay={index * 60} variant="up">
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item}</h3>
                <p>{proofNotes[index] ?? proofNotes[proofNotes.length - 1]}</p>
              </Reveal>
            ))}

            <Reveal className="serviceProofSpotlight" delay={200} variant="soft">
              <span className="eyebrow">Project fit</span>
              <h3>Plan the fence line, gates, transitions, and finish details in the same conversation.</h3>
              <p>
                This is where Empire Fence can keep the install practical, cleaner to look at, and easier to scope
                before work starts.
              </p>
              <Link href="/contact-us" className="textLink">
                Open the contact page
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container serviceStory">
          <Reveal className="serviceStory__article" initiallyVisible variant="soft">
            <span className="eyebrow">Scope notes</span>
            <div className="articleBody" dangerouslySetInnerHTML={{ __html: service.html }} />
          </Reveal>

          <Reveal className="serviceStory__aside" delay={90} variant="up">
            <span className="eyebrow">Planning cues</span>
            <h2>Bring the footage, site photos, and any gate or wall coordination into the estimate early.</h2>
            <ul className="bulletList">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <p>{business.hours}</p>
            </div>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                Start estimate
              </Link>
              <Link href="/gallery" className="textLink">
                Browse project gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container locationFaq">
          <Reveal className="locationStage serviceFaqStage" initiallyVisible variant="left">
            <span className="eyebrow">Service FAQ</span>
            <h2>Questions that usually come up before this scope gets priced.</h2>
            <p>Start with the material direction, frontage conditions, and whether gates or adjacent wall work are part of the plan.</p>
            <div className="chipWrap">
              {highlights.map((item) => (
                <span key={item} className="chip chip--static">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="faqCluster">
            <div className="faqList faqList--stacked">
              {faqs.map((item) => (
                <article key={item.question} className="faqItem">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section serviceRelatedSection">
        <div className="container servicesRail">
          <Reveal className="servicesRail__intro" initiallyVisible variant="left">
            <SectionHeading
              eyebrow="Related services"
              title="Adjacent scope around the same property edge."
              copy="If this project needs more than one material or a cleaner transition, compare the nearby service pages next."
            />
            <Link href="/services" className="textLink">
              Browse all services
            </Link>
          </Reveal>

          <div className="servicesRail__list">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80} variant="soft">
                <ServiceCard service={item} variant="editorial" index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="ctaShell serviceCtaShell" variant="soft">
            <div className="ctaShell__copy">
              <span className="eyebrow">Free estimate</span>
              <h2>Start this {service.data.title.toLowerCase()} project with the real site details.</h2>
              <p>Share photos, approximate footage, and any gate or wall coordination so the estimate starts from the actual scope.</p>
              <div className="contactStack">
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
                <a href={business.emailHref}>{business.email}</a>
                <p>{business.city}</p>
              </div>
              <div className="buttonRow">
                <Link href="/contact-us" className="button button--primary">
                  Open contact page
                </Link>
                <a href={business.phoneHref} className="button button--ghost">
                  Call the team
                </a>
              </div>
            </div>

            <div className="ctaShell__form">
              <span className="eyebrow">Quick request</span>
              <QuoteForm compact />
            </div>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  );
}

export default async function DynamicMarketingPage({ params }) {
  const { slug } = await params;
  const services = await getAllServices();
  const service = await getServiceBySlug(slug);

  if (service) {
    return <ServicePage service={service} services={services} />;
  }

  const area = findLocation(slug);
  if (area) {
    return <LocationPage area={area} services={services} />;
  }

  notFound();
}
