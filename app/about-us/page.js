import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { getAllAreas, getAllServices, getPageBySlug } from "@/lib/content";
import { getImagePresentation } from "@/lib/image-presentation";
import { areaPath, servicePath } from "@/lib/paths";
import { buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";
import { business } from "@/lib/site";

const sectionImages = {
  "Why We Started": "/client/about/company-work-site.jpg",
  "Meet the Team": "/client/about/empire-fence-team.jpg",
};

export async function generateMetadata() {
  const page = await getPageBySlug("about-us");

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.data.seoTitle || page.data.title,
    description: page.data.metaDescription || page.data.summary,
    path: "/about-us",
    image: page.data.heroImage,
  });
}

export default async function AboutPage() {
  const [page, services, areas] = await Promise.all([
    getPageBySlug("about-us"),
    getAllServices(),
    getAllAreas(),
  ]);

  if (!page) {
    notFound();
  }

  const [whoWeAre, whyWeStarted, meetTheTeam, awards, trust, difference, help] = page.sections;
  const pageSchema = buildWebPageSchema({
    title: page.data.h1 || page.data.title,
    description: page.data.metaDescription || page.data.summary,
    path: "/about-us",
    image: page.data.heroImage,
    type: "AboutPage",
  });
  const faqSchema = buildFaqSchema(page.data.faqs || []);

  return (
    <>
      <PageHero
        variant="about"
        eyebrow={page.data.title}
        title={page.data.h1}
        intro={page.data.summary}
        image={page.data.heroImage}
        primaryAction={{ href: "/contact-us", label: page.data.primaryActionLabel || "Get a free estimate" }}
        secondaryAction={{ href: "/gallery", label: page.data.secondaryActionLabel || "View gallery" }}
      />

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">{page.data.title}</span>
            <h2>{whoWeAre?.title || "Who We Are"}</h2>
          </div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: whoWeAre?.html || `<p>${page.data.summary}</p>` }}
          />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container aboutEditorial">
          {[whyWeStarted, meetTheTeam].filter(Boolean).map((section, index) => (
            <article key={section.title} className={`aboutEditorial__row${index % 2 ? " is-reversed" : ""}`}>
              <div className="aboutEditorial__media">
                <Image
                  src={sectionImages[section.title] || page.data.heroImage}
                  alt={section.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  style={getImagePresentation(sectionImages[section.title] || page.data.heroImage, "aboutEditorial")}
                />
              </div>
              <div className="aboutEditorial__body">
                <span className="eyebrow">{page.data.title}</span>
                <h3>{section.title}</h3>
                <div className="prose" dangerouslySetInnerHTML={{ __html: section.html }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {awards ? (
        <section className="section">
          <div className="container splitIntro">
            <div>
              <span className="eyebrow">{page.data.title}</span>
              <h2>{awards.title}</h2>
            </div>
            <div className="prose" dangerouslySetInnerHTML={{ __html: awards.html }} />
          </div>
        </section>
      ) : null}

      <section className="section section--soft">
        <div className="container contactUtility">
          {trust ? (
            <article className="panel">
              <span className="eyebrow">{page.data.title}</span>
              <h2>{trust.title}</h2>
              <div className="prose" dangerouslySetInnerHTML={{ __html: trust.html }} />
            </article>
          ) : null}
          {difference ? (
            <article className="panel">
              <span className="eyebrow">{page.data.title}</span>
              <h2>{difference.title}</h2>
              <div className="prose" dangerouslySetInnerHTML={{ __html: difference.html }} />
            </article>
          ) : null}
        </div>
      </section>

      {help ? (
        <section className="section section--contrast">
          <div className="container splitIntro">
            <div>
              <span className="eyebrow">{page.data.title}</span>
              <h2>{help.title}</h2>
            </div>
            <div className="prose">
              <div dangerouslySetInnerHTML={{ __html: help.html }} />
              <div className="buttonRow">
                <Link href="/contact-us" className="button button--primary">
                  {page.data.primaryActionLabel || "Get a free estimate"}
                </Link>
                <a href={business.phoneHref} className="button button--ghost">
                  {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <div className="splitIntro">
            <div>
              <span className="eyebrow">Service links</span>
              <h2>Fence, gate, and city paths connected across the site.</h2>
            </div>
            <div className="prose">
              <p>
                If you already know the material or project type, move into the closest service. If the property
                location matters first, move into the nearest city page and keep the estimate tied to the real site.
              </p>
            </div>
          </div>

          <div className="contactUtility">
            <article className="panel">
              <span className="eyebrow">Services</span>
              <h2>Popular fence and gate services.</h2>
              <div className="chipWrap">
                {services.slice(0, 8).map((service) => (
                  <Link key={service.slug} href={servicePath(service.slug)} className="chip">
                    {service.data.title}
                  </Link>
                ))}
              </div>
            </article>

            <article className="panel">
              <span className="eyebrow">Cities</span>
              <h2>Coverage across the Inland Empire.</h2>
              <div className="chipWrap">
                {areas.slice(0, 8).map((area) => (
                  <Link key={area.slug} href={areaPath(area.slug)} className="chip">
                    {area.data.title}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {(page.data.faqs || []).length ? (
        <section className="section">
          <div className="container locationFaq">
            <div className="locationStage serviceFaqStage">
              <span className="eyebrow">{page.data.title}</span>
              <h2>What people usually want to know before they reach out.</h2>
              <p>The fastest way to get a useful estimate is to share the property address, photos, and the part of the project that still feels unclear.</p>
            </div>

            <div className="faqCluster">
              <div className="faqList faqList--stacked">
                {page.data.faqs.map((item) => (
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
          <div className="ctaShell serviceCtaShell">
            <div className="ctaShell__copy">
              <span className="eyebrow">Free estimate</span>
              <h2>{page.data.primaryActionLabel === "Get a free estimate" ? "Start with a free estimate from Empire Fence." : page.data.primaryActionLabel}</h2>
              <p>
                Share the property address, photos, and the part of the project that still feels unclear so the team
                can point you toward the right service and city path from the start.
              </p>
              <div className="contactStack">
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
                <a href={business.emailHref}>{business.email}</a>
                <p>{business.city}</p>
              </div>
              <div className="buttonRow">
                <Link href="/contact-us" className="button button--primary">
                  {page.data.primaryActionLabel || "Get a free estimate"}
                </Link>
                <Link href="/services" className="button button--ghost">
                  Browse fence and gate services
                </Link>
              </div>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
