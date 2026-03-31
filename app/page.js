import Image from "next/image";
import Link from "next/link";

import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getAllPosts, getAllServices } from "@/lib/content";
import { buildFaqSchema, buildPageMetadata, buildServiceListSchema } from "@/lib/seo";
import { business, faqs, highlightStats, serviceAreas, trustPoints } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Fence company in Jurupa Valley, CA",
  description:
    "Empire Fence installs vinyl, wood, wrought iron, chain link, gates, block walls, patios, driveways, and turf across Jurupa Valley and nearby Inland Empire cities.",
  path: "/",
  keywords: [
    "vinyl fence Jurupa Valley",
    "wood fence Jurupa Valley",
    "wrought iron fence Jurupa Valley",
    "chain link fence Jurupa Valley",
    "gate contractor Inland Empire",
  ],
});

export default async function HomePage() {
  const services = await getAllServices();
  const posts = (await getAllPosts()).slice(0, 2);
  const faqSchema = buildFaqSchema(faqs);
  const servicesSchema = buildServiceListSchema(services);

  return (
    <>
      <section className="homeHero">
        <div className="container">
          <Reveal className="heroStage" initiallyVisible>
            <div className="heroStage__status">
              <span>Jurupa Valley, CA</span>
              <span>Fence / gates / walls / outdoor upgrades</span>
              <span>{business.hours}</span>
            </div>

            <div className="heroStage__grid">
              <div className="heroStage__copy">
                <span className="eyebrow">Premium perimeter contractor</span>
                <h1>Exterior work that feels resolved before the install starts.</h1>
                <p>
                  Empire Fence handles fences, gates, walls, patios, driveways, and turf as one
                  cleaner exterior scope. The outcome is simpler coordination, better frontage,
                  and fewer rough edges.
                </p>

                <div className="buttonRow">
                  <Link href="/contact-us" className="button button--primary">
                    Start a free estimate
                  </Link>
                  <Link href="/services" className="button button--ghost">
                    Browse services
                  </Link>
                </div>

                <div className="heroStage__review">
                  <strong>Built for homeowners and property managers who need cleaner follow-through.</strong>
                  <p>
                    The current service mix covers privacy fencing, decorative frontage, gates,
                    walls, patios, driveways, and turf under one contractor brand.
                  </p>
                </div>
              </div>

              <div className="heroStage__visual">
                <div className="heroStage__imageWrap">
                  <Image
                    src="/client/hero-western.webp"
                    alt="Empire Fence premium wrought iron project"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 44vw"
                  />
                </div>

                <div className="heroStage__floating heroStage__floating--top">
                  <span className="eyebrow">Core services</span>
                  <p>Vinyl, wood, wrought iron, chain link, gates, walls, patios, driveways, turf.</p>
                </div>

                <div className="heroStage__floating heroStage__floating--bottom">
                  <span className="eyebrow">Coverage</span>
                  <p>Jurupa Valley plus Riverside, Ontario, Chino, Rancho Cucamonga, Fontana, and San Bernardino.</p>
                </div>
              </div>
            </div>

            <div className="heroStage__metrics">
              {highlightStats.map((stat) => (
                <article key={stat.label} className="heroMetric">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container storyCluster">
          <Reveal className="storyCluster__lead" initiallyVisible>
            <SectionHeading
              eyebrow="How the site should read"
              title="Not as a generic fence installer. As a coordinated exterior contractor."
              copy="The strongest positioning is not material-first. It is outcome-first: cleaner boundary work, sharper access, and fewer contractor handoffs across the property."
            />
            <div className="storyCluster__summary">
              <p>
                Fence installs stay at the center, but gates, block walls, patios, driveways,
                and turf make the brand feel more complete and more premium when the layout is
                clear.
              </p>
              <Link href="/about-us" className="textLink">
                Read the business positioning
              </Link>
            </div>
          </Reveal>

          <div className="storyCluster__stack">
            <Reveal className="storyPanel">
              <span className="eyebrow">What matters most</span>
              <h3>Planning the line, the transitions, and the finish together.</h3>
              <p>
                Good perimeter work is not only material selection. It is gate clearance, grade,
                wall transitions, driveway touchpoints, and how the whole front edge reads once the
                project is complete.
              </p>
            </Reveal>

            <Reveal className="storyPanel storyPanel--image" delay={90}>
              <Image
                src="/client/wrought-fence.jpg"
                alt="Wrought iron fence detail"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </Reveal>

            <Reveal className="storyPanel storyPanel--tone" delay={160}>
              <span className="eyebrow">Project rhythm</span>
              <h3>Fast estimate, clear scope, strong materials, cleaner install.</h3>
              <p>
                The site should communicate confidence without overselling. Short decisions,
                strong imagery, and crisp service pages do more than dense sales copy.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container servicesRail">
          <Reveal className="servicesRail__intro" initiallyVisible>
            <SectionHeading
              eyebrow="Service system"
              title="Eight clear scopes, one consistent visual language."
              copy="The home page should not look like a grid of repeated cards. It should read like an editorial service system with hierarchy, motion, and enough silence around each offer."
              tone="contrast"
            />

            <div className="servicesRail__sticky">
              <div className="servicesRail__stickyImage">
                <Image
                  src="/client/vinyl-fence.jpg"
                  alt="Vinyl fence project"
                  fill
                  sizes="(max-width: 900px) 100vw, 32vw"
                />
              </div>
              <div className="servicesRail__stickyCopy">
                <span className="eyebrow">Materials + outdoor scope</span>
                <p>
                  This structure keeps every service distinct without making the site feel like a
                  commodity catalog.
                </p>
                <Link href="/services" className="button button--primary">
                  View all services
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="servicesRail__list">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index * 55, 220)}>
                <ServiceCard service={service} variant="editorial" index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container proofBand">
          <Reveal className="proofBand__lead" initiallyVisible>
            <SectionHeading
              eyebrow="Execution"
              title="The premium feeling comes from restraint, sequence, and finish quality."
              copy="The visual system should move between dark shells and calm stone sections. The content should stay local, practical, and specific."
            />
            <Link href="/gallery" className="button button--ghost">
              Browse project gallery
            </Link>
          </Reveal>

          <div className="proofBand__grid">
            {trustPoints.map((point, index) => (
              <Reveal key={point.title} className="processCard" delay={index * 70}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </Reveal>
            ))}

            <Reveal className="projectSpotlight" delay={210}>
              <div className="projectSpotlight__image">
                <Image
                  src="/client/cinder-block-wall.jpg"
                  alt="Empire Fence wall and frontage project"
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
              </div>
              <div className="projectSpotlight__body">
                <span className="eyebrow">Project mix</span>
                <h3>Fence frontage, walls, gates, and adjacent hardscape can all sit under one cleaner brand story.</h3>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container locationFaq">
          <Reveal className="locationStage" initiallyVisible>
            <span className="eyebrow">Service area and access</span>
            <h2>Local pages matter because the search intent is local first.</h2>
            <p>
              The site now supports city pages, service pages, and blog content. The home page
              keeps the area message simple and lets the supporting pages carry the SEO depth.
            </p>
            <div className="chipWrap">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="chip">
                  {area.title}
                </Link>
              ))}
            </div>
            <div className="mapCard mapCard--framed">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence service map" />
            </div>
          </Reveal>

          <div className="faqCluster">
            <SectionHeading
              eyebrow="FAQ"
              title="High-intent questions answered without burying the page in text."
            />
            <div className="faqList faqList--stacked">
              {faqs.map((item, index) => (
                <Reveal key={item.question} className="faqItem" delay={index * 50}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Blog and SEO"
            title="Support the main service pages with local, useful supporting content."
            copy="The blog should help the service pages rank, answer early-stage buying questions, and reinforce the quality of the business without turning into filler."
          />
          <div className="postGrid postGrid--feature">
            {posts.map((post, index) => (
              <Reveal key={post.slug} className="postCard" delay={index * 70}>
                <div className="postCard__image">
                  <Image src={post.data.heroImage} alt={post.data.title} fill sizes="(max-width: 900px) 100vw, 46vw" />
                </div>
                <div className="postCard__body">
                  <span className="eyebrow">
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(post.data.date))}
                  </span>
                  <h3>{post.data.title}</h3>
                  <p>{post.data.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="textLink">
                    Read article
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contrast finalCta">
        <div className="container">
          <Reveal className="ctaShell">
            <div className="ctaShell__copy">
              <span className="eyebrow">Start the scope</span>
              <h2>Use the form for the estimate. Use the contact page when you want the booking calendar.</h2>
              <p>
                The visual system does not need to bend around the embed. The cleaner approach is
                to let the home page sell the brand and move scheduling to the contact experience.
              </p>

              <div className="contactStack">
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
                <a href={business.emailHref}>{business.email}</a>
                <p>{business.hours}</p>
              </div>

              <div className="buttonRow">
                <Link href="/contact-us" className="button button--primary">
                  Open contact page
                </Link>
                <Link href="/contact-us#booking" className="button button--ghost">
                  Open booking calendar
                </Link>
              </div>
            </div>

            <div className="ctaShell__form">
              <span className="eyebrow">Quick estimate request</span>
              <QuoteForm compact />
            </div>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
