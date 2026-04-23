import Link from "next/link";

import { LeadConnectorForm } from "@/components/leadconnector-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import {
  buildAreaServiceSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
} from "@/lib/seo";
import { areaPath, areasIndexPath, servicesIndexPath } from "@/lib/paths";
import { business, serviceAreas } from "@/lib/site";

export function findAreaBySlug(slug) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function buildServiceSlugMetadata(service) {
  return buildPageMetadata({
    title: service.data.seoTitle || `${service.data.title} in Jurupa Valley, CA`,
    description: service.data.metaDescription || service.data.summary,
    path: `/services/${service.slug}`,
    image: service.data.heroImage,
    keywords: [
      `${service.data.title} Jurupa Valley`,
      `${service.data.title} Inland Empire`,
      `${service.data.title.toLowerCase()} estimate`,
    ],
  });
}

export function buildAreaSlugMetadata(area) {
  return buildPageMetadata({
    title: area.seoTitle || `Fence and Gate Services in ${area.title}`,
    description: area.metaDescription || area.summary || area.intro,
    path: `/areas/${area.slug}`,
    image: area.heroImage || area.image,
    keywords: [
      `fence company ${area.title}`,
      `fence contractor ${area.title}`,
      `gate contractor ${area.title}`,
      `vinyl fence ${area.title}`,
    ],
  });
}

function findSection(sections = [], matcher) {
  return sections.find((section) => matcher(section.title));
}

function titleMatches(needle) {
  return (title = "") => title.toLowerCase().includes(needle.toLowerCase());
}

function firstParagraphHtml(section) {
  if (!section?.html) {
    return "";
  }

  const match = section.html.match(/<p>[\s\S]*?<\/p>/i);
  return match ? match[0] : section.html;
}

export function LocationPage({ area, services }) {
  const areaHeroTitle = area.h1 || `Fence and gate work in ${area.title}`;
  const areaHeroCopy = Array.isArray(area.heroCopy) ? area.heroCopy.join(" ") : area.summary || area.intro;
  const areaFaqs = area.localFaqs?.length ? area.localFaqs : area.faqs ?? [];
  const areaSections = area.sections ?? [];
  const introSection = areaSections[0];
  const servicesSection =
    findSection(areaSections, titleMatches("Our Fencing and Outdoor Services")) || areaSections[1];
  const fenceTypesSection = findSection(areaSections, titleMatches("Fence Types"));
  const whyChooseSection =
    findSection(areaSections, titleMatches("Why")) || findSection(areaSections, titleMatches("Choose"));
  const processSection =
    findSection(areaSections, titleMatches("Process")) ||
    findSection(areaSections, titleMatches("Installation and Repair Process"));
  const coverageSection =
    findSection(areaSections, titleMatches("Serving")) || findSection(areaSections, titleMatches("Nearby Communities"));
  const faqSection = findSection(areaSections, titleMatches("Frequently Asked Questions")) || findSection(areaSections, titleMatches("FAQs"));
  const quoteSection =
    findSection(areaSections, titleMatches("Get a Free")) ||
    findSection(areaSections, titleMatches("Free Fence Estimate")) ||
    areaSections.at(-1);
  const serviceCards = servicesSection?.subsections?.length ? servicesSection.subsections : area.fullServiceSections ?? [];
  const fenceTypeCards = fenceTypesSection?.subsections?.length ? fenceTypesSection.subsections : area.fenceTypeSections ?? [];
  const trustItems = area.trustBullets ?? [];
  const nearbyAreas = serviceAreas.filter((item) => item.slug !== area.slug).slice(0, 4);
  const localServices = (area.featuredServiceSlugs?.length
    ? area.featuredServiceSlugs
        .map((slug) => services.find((item) => item.slug === slug))
        .filter(Boolean)
    : services
  ).slice(0, 4);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Areas", href: areasIndexPath },
    { name: area.title },
  ]);
  const pageSchema = buildAreaServiceSchema(area, localServices);
  const faqSchema = areaFaqs.length ? buildFaqSchema(areaFaqs) : null;

  return (
    <>
      <PageHero
        variant="areas"
        eyebrow="Service area"
        title={areaHeroTitle}
        intro={areaHeroCopy}
        image={area.heroImage || area.image}
        chips={["Residential frontage", "Commercial perimeter"]}
        primaryAction={{ href: "/contact-us", label: area.primaryActionLabel || "Get a free estimate" }}
        secondaryAction={{ href: business.phoneHref, label: area.secondaryActionLabel || business.phoneDisplay }}
      />

      <section className="section">
        <div className="container coverageAtlas__grid locationCoverage">
          <Reveal className="coverageAtlas__copy locationCoverage__copy" initiallyVisible variant="left">
            <span className="eyebrow">Local coverage</span>
            <h2>{introSection?.title || areaHeroTitle}</h2>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html:
                  introSection?.html ||
                  `<p>${area.summary || area.intro || areaHeroCopy}</p>`,
              }}
            />
            <div className="chipWrap">
              <span className="chip chip--static">{area.title}</span>
              {nearbyAreas.map((item) => (
                <Link key={item.slug} href={areaPath(item.slug)} className="chip">
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                {area.primaryActionLabel || "Get a free estimate"}
              </Link>
              <a href={business.phoneHref} className="textLink">
                {area.secondaryActionLabel || business.phoneDisplay}
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
            title={whyChooseSection?.title || `Why ${area.title} property owners choose Empire Fence.`}
            copy={null}
          />
          <div className="miniFeatureGrid">
            {(trustItems.length
              ? trustItems.map((item) => ({ title: item, copy: item }))
              : area.propertyFocus ?? []
            ).map((item, index) => (
              <Reveal key={item.title} className="miniFeatureCard" delay={index * 70} variant="up">
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {servicesSection || whyChooseSection || area.serviceNarrative?.length || trustItems.length ? (
        <section className="section">
          <div className="container contactUtility">
            <Reveal className="locationQuotePanel" initiallyVisible variant="left">
              <span className="eyebrow">Local service context</span>
              <h2>{servicesSection?.title || `How fence, gate, and outdoor projects usually take shape in ${area.title}.`}</h2>
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html:
                    servicesSection?.html ||
                    area.serviceNarrative?.map((paragraph) => `<p>${paragraph}</p>`).join("") ||
                    `<p>${area.summary || areaHeroCopy}</p>`,
                }}
              />
            </Reveal>

            <Reveal className="panel locationBookingPanel" delay={90} variant="soft">
              <span className="eyebrow">Why owners call Empire Fence</span>
              <h2>{whyChooseSection?.title || `What usually needs to be right before the work starts in ${area.title}.`}</h2>
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html:
                    whyChooseSection?.html ||
                    area.whyChooseNarrative?.map((paragraph) => `<p>${paragraph}</p>`).join("") ||
                    "<p>These are the details that usually separate a clean estimate and finished install from a vague quote that misses how the property actually works.</p>",
                }}
              />
              {trustItems.length ? (
                <ul className="bulletList">
                  {trustItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Estimate strategy</span>
            <h2>{processSection?.title || `What helps a ${area.title} estimate come back more accurately.`}</h2>
          </div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html:
                processSection?.html ||
                `<p>${area.estimateLead}</p><p>This matters because local coverage should narrow the conversation. It should help the owner understand the property conditions, common material fit, and the kinds of photos or notes that make the estimate more useful from the first review.</p>`,
            }}
          />
        </div>
      </section>

      {serviceCards?.length ? (
        <section className="section section--soft">
          <div className="container">
            <SectionHeading
              eyebrow="Service breakdown"
              title={servicesSection?.title || `What Empire Fence usually ends up solving in ${area.title}.`}
              copy={null}
            />
            <div className="serviceGrid">
              {serviceCards.map((item, index) => (
                <Reveal key={item.title} className="infoCard" delay={index * 70} variant="up">
                  <span className="eyebrow">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: item.html || `<p>${item.copy}</p>` }}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {fenceTypeCards?.length ? (
        <section className="section section--soft">
          <div className="container">
            <SectionHeading
              eyebrow="Fence types"
              title={fenceTypesSection?.title || `Fence types Empire Fence installs in ${area.title}.`}
              copy={null}
            />
            <div className="serviceGrid">
              {fenceTypeCards.map((item, index) => (
                <Reveal key={item.title} className="infoCard" delay={index * 60} variant="up">
                  <span className="eyebrow">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: item.html || `<p>${item.copy}</p>` }}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {coverageSection || area.recentProjectNote ? (
        <section className="section">
          <div className="container splitIntro">
            <div>
              <span className="eyebrow">Recent local work</span>
              <h2>{coverageSection?.title || `Recent fence and gate work around ${area.title}.`}</h2>
            </div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html:
                  coverageSection?.html ||
                  `<p>${area.recentProjectNote}</p><p>That local context matters because the right estimate usually comes from the kinds of jobs that are already common in the area, not from forcing every property into the same fence recommendation.</p>`,
              }}
            />
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container locationServiceDeck">
          <Reveal className="locationServiceDeck__lead" initiallyVisible variant="left">
            <SectionHeading
              eyebrow="Service links"
              title={`The service mix Empire Fence most often handles in ${area.title}.`}
              copy={`Move from ${area.title} into the closest fence, gate, repair, or outdoor scope.`}
            />
            <Link href={servicesIndexPath} className="textLink">
              Browse fence installation and gate services
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
            <span className="eyebrow">Free estimate</span>
            <h2>{quoteSection?.title || `Get a free fence estimate in ${area.title}`}</h2>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: firstParagraphHtml(quoteSection) || `<p>Share the property address, photos, and scope details so the estimate starts with the real site conditions.</p>`,
              }}
            />
            {area.quoteChecklist?.length ? (
              <ul className="bulletList">
                {area.quoteChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <LeadConnectorForm compact instance={`area-${area.slug}`} />
          </Reveal>

          <Reveal className="contactUtility__booking locationBookingPanel" delay={90} variant="soft">
            <span className="eyebrow">Direct estimate path</span>
            <h2>Call or send the request for {area.title}.</h2>
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <p>{business.hours}</p>
            </div>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                {area.primaryActionLabel || "Get a free estimate"}
              </Link>
              <a href={business.phoneHref} className="button button--ghost">
                {area.secondaryActionLabel || `Call Empire Fence for ${area.title} work`}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      {areaFaqs?.length ? (
        <section className="section">
          <div className="container locationFaq">
            <Reveal className="locationStage serviceFaqStage" initiallyVisible variant="left">
              <span className="eyebrow">Local FAQ</span>
              <h2>{faqSection?.title || `Fence contractor FAQs for ${area.title}, CA`}</h2>
              <p>{`These questions stay visible so the estimate direction stays tied to ${area.title} property conditions, material fit, and scope details.`}</p>
            </Reveal>

            <div className="faqCluster">
              <div className="faqList faqList--stacked">
                {areaFaqs.map((item) => (
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

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="ctaShell serviceCtaShell" variant="soft">
            <div className="ctaShell__copy">
              <span className="eyebrow">Free estimate</span>
              <h2>{quoteSection?.title || `Get a free fence estimate in ${area.title}`}</h2>
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html:
                    firstParagraphHtml(quoteSection) ||
                    `<p>Share the property address, photos, and the part of the project that still feels unclear so the estimate starts from the real site conditions in ${area.title}.</p>`,
                }}
              />
              <div className="chipWrap">
                {localServices.slice(0, 3).map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="chip">
                    {service.data.title}
                  </Link>
                ))}
                {nearbyAreas.slice(0, 3).map((item) => (
                  <Link key={item.slug} href={areaPath(item.slug)} className="chip">
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="buttonRow">
                <Link href="/contact-us" className="button button--primary">
                  {area.primaryActionLabel || "Get a free estimate"}
                </Link>
                <a href={business.phoneHref} className="button button--ghost">
                  {area.secondaryActionLabel || business.phoneDisplay}
                </a>
              </div>
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

export function ServicePage({ service, services }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const highlights = service.data.highlights ?? [];
  const faqs = service.data.faqs ?? [];
  const serviceTitle = service.data.h1 || service.data.title;
  const serviceHeroCopy = Array.isArray(service.data.heroCopy)
    ? service.data.heroCopy.join(" ")
    : service.data.summary;
  const serviceSections = service.sections ?? [];
  const primaryActionLabel = service.data.primaryActionLabel || "Get a free estimate";
  const secondaryActionLabel = service.data.secondaryActionLabel || business.phoneDisplay;
  const introSection = serviceSections[0];
  const whyChooseSection = findSection(serviceSections, titleMatches("Why "));
  const processSection =
    findSection(serviceSections, titleMatches("Our Process")) ||
    findSection(serviceSections, titleMatches("How Empire Fence")) ||
    findSection(serviceSections, titleMatches("What to Expect"));
  const estimateSection = findSection(serviceSections, titleMatches("What affects the estimate"));
  const relatedSection =
    findSection(serviceSections, titleMatches("Related Services")) ||
    findSection(serviceSections, titleMatches("Service Areas")) ||
    findSection(serviceSections, titleMatches("Project Gallery"));
  const faqSection =
    findSection(serviceSections, titleMatches("Frequently Asked Questions")) ||
    findSection(serviceSections, titleMatches("When to choose")) ||
    findSection(serviceSections, titleMatches("FAQs"));
  const quoteSection =
    findSection(serviceSections, titleMatches("Get a Free Quote")) ||
    findSection(serviceSections, titleMatches("Get a Free")) ||
    estimateSection ||
    processSection;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: servicesIndexPath },
    { name: service.data.title },
  ]);
  const pageSchema = buildServiceSchema(service);
  const faqSchema = faqs.length ? buildFaqSchema(faqs) : null;

  return (
    <>
      <PageHero
        variant="service"
        eyebrow={service.data.eyebrow}
        title={serviceTitle}
        intro={serviceHeroCopy}
        image={service.data.heroImage}
        chips={highlights.slice(0, 2)}
        primaryAction={{ href: "/contact-us", label: primaryActionLabel }}
        secondaryAction={{ href: business.phoneHref, label: secondaryActionLabel }}
      />

      <section className="section section--soft">
        <div className="container serviceProofBand">
          <Reveal className="serviceProofBand__intro" initiallyVisible variant="left">
            <span className="eyebrow">{service.data.eyebrow}</span>
            <h2>{introSection?.title || `${serviceTitle} should be priced around the real property edge, not dropped in like a stock install.`}</h2>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: introSection?.html || `<p>${serviceHeroCopy}</p>` }}
            />
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                {primaryActionLabel}
              </Link>
              <a href={business.phoneHref} className="textLink">
                {secondaryActionLabel}
              </a>
            </div>
          </Reveal>

          <div className="serviceProofBand__grid">
            {highlights.map((item, index) => (
              <Reveal key={item} className="processCard serviceProofCard" delay={index * 60} variant="up">
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item}</h3>
              </Reveal>
            ))}

            <Reveal className="serviceProofSpotlight" delay={200} variant="soft">
              <span className="eyebrow">Estimate fit</span>
              <h3>{quoteSection?.title || `Plan ${serviceTitle.toLowerCase()}, gates, transitions, and finish details in one scope.`}</h3>
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html:
                    quoteSection?.html ||
                    "<p>That keeps the estimate tied to the actual fence line, gate conditions, frontage details, and site constraints before the work gets priced the wrong way.</p>",
                }}
              />
              <Link href="/contact-us" className="textLink">
                {primaryActionLabel}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container serviceStory">
          <Reveal className="serviceStory__article" initiallyVisible variant="soft">
            <span className="eyebrow">{service.data.eyebrow}</span>
            <div className="articleBody" dangerouslySetInnerHTML={{ __html: service.html }} />
          </Reveal>

          <Reveal className="serviceStory__aside" delay={90} variant="up">
            <span className="eyebrow">Project planning</span>
            <h2>{processSection?.title || quoteSection?.title || `Bring the footage, site photos, and any gate or wall coordination into the ${serviceTitle.toLowerCase()} estimate early.`}</h2>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html:
                  processSection?.html ||
                  whyChooseSection?.html ||
                  `<p>${serviceHeroCopy}</p>`,
              }}
            />
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <p>{business.hours}</p>
            </div>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                {primaryActionLabel}
              </Link>
              <Link href="/gallery" className="textLink">
                Browse fence installation project gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container locationFaq">
          <Reveal className="locationStage serviceFaqStage" initiallyVisible variant="left">
            <span className="eyebrow">Service FAQ</span>
            <h2>{faqSection?.title || `Questions clients ask before pricing ${serviceTitle.toLowerCase()}.`}</h2>
            <p>{estimateSection?.text || "Start with the material direction, site conditions, frontage details, and whether gates or adjacent wall work need to be priced in the same scope."}</p>
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
              title={relatedSection?.title || "Adjacent scope around the same property edge."}
              copy={relatedSection?.text || `If this ${serviceTitle.toLowerCase()} project also needs another material, a gate reset, or a cleaner transition, compare the closest related services next.`}
            />
            <Link href={servicesIndexPath} className="textLink">
              Browse all fence and gate services
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
              <h2>{quoteSection?.title || `Start this ${service.data.title.toLowerCase()} project with the real site details.`}</h2>
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html:
                    firstParagraphHtml(quoteSection) ||
                    "<p>Share photos, approximate footage, and any gate or wall coordination so the estimate starts from the actual scope.</p>",
                }}
              />
              <div className="contactStack">
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
                <a href={business.emailHref}>{business.email}</a>
                <p>{business.city}</p>
              </div>
              <div className="buttonRow">
                <Link href="/contact-us" className="button button--primary">
                  Get a free estimate
                </Link>
                <a href={business.phoneHref} className="button button--ghost">
                  Call Empire Fence about {service.data.title.toLowerCase()}
                </a>
              </div>
            </div>

            <div className="ctaShell__form">
              <span className="eyebrow">Quick request</span>
              <LeadConnectorForm compact instance={`service-${service.slug}`} />
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
