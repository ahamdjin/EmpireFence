import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { getPageBySlug } from "@/lib/content";
import { getImagePresentation } from "@/lib/image-presentation";
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
  const page = await getPageBySlug("about-us");

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
            <span className="eyebrow">Company overview</span>
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
                <span className="eyebrow">{section.title}</span>
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
              <span className="eyebrow">Awards and credentials</span>
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
              <span className="eyebrow">Why people trust us</span>
              <h2>{trust.title}</h2>
              <div className="prose" dangerouslySetInnerHTML={{ __html: trust.html }} />
            </article>
          ) : null}
          {difference ? (
            <article className="panel">
              <span className="eyebrow">What makes us different</span>
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
              <span className="eyebrow">How we help</span>
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

      {(page.data.faqs || []).length ? (
        <section className="section">
          <div className="container locationFaq">
            <div className="locationStage serviceFaqStage">
              <span className="eyebrow">Company FAQ</span>
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
