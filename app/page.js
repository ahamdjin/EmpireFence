import Image from "next/image";
import Link from "next/link";

import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getAllPosts, getAllServices } from "@/lib/content";
import { buildFaqSchema, buildPageMetadata, buildServiceListSchema } from "@/lib/seo";
import {
  business,
  faqs,
  featuredProjects,
  highlightStats,
  serviceAreas,
  trustPoints,
} from "@/lib/site";

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
          <Reveal className="heroStage" initiallyVisible variant="soft">
            <div className="heroStage__grid">
              <div className="heroStage__copy">
                <span className="eyebrow">Jurupa Valley fence contractor</span>
                <h1>
                  Fence lines that look settled from the <em>street</em>.
                </h1>
                <p>Vinyl, wood, wrought iron, chain link, gates, and walls across Jurupa Valley and the Inland Empire.</p>

                <div className="buttonRow">
                  <Link href="/contact-us" className="button button--primary">
                    Start a free estimate
                  </Link>
                  <Link href="/gallery" className="button button--ghost">
                    View project gallery
                  </Link>
                </div>

                <div className="heroStage__review">
                  <strong>Free estimates. Cleaner installs.</strong>
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

                <div className="heroStage__note">
                  <span className="eyebrow">Selected scope</span>
                  <p>Fences, gates, walls, patios, driveways, and turf.</p>
                </div>

                <div className="heroStage__secondary">
                  <Image
                    src="/client/wrought-fence.jpg"
                    alt="Empire Fence wrought iron detail"
                    fill
                    sizes="(max-width: 900px) 48vw, 18vw"
                  />
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
          <Reveal className="storyCluster__lead" initiallyVisible variant="left">
            <SectionHeading
              eyebrow="Why Empire Fence"
              title="Built for a cleaner property edge."
              copy="One contractor can carry the fence line, the gate, and the wall transition."
            />
            <div className="storyCluster__summary">
              <Link href="/about-us" className="textLink">
                Learn about the company
              </Link>
            </div>
          </Reveal>

          <div className="storyCluster__stack">
            <Reveal className="storyPanel" variant="up">
              <span className="eyebrow">Planning</span>
              <h3>Layout comes before material.</h3>
              <p>Gate clearance, grade, and transitions are handled before the install starts.</p>
            </Reveal>

            <Reveal className="storyPanel storyPanel--image" delay={90} variant="soft">
              <Image
                src="/client/wrought-fence.jpg"
                alt="Wrought iron fence detail"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </Reveal>

            <Reveal className="storyPanel storyPanel--tone" delay={160} variant="right">
              <span className="eyebrow">Approach</span>
              <h3>Straight estimate path. Cleaner finish.</h3>
              <p>Clear recommendations and detail-focused field work.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container servicesRail">
          <Reveal className="servicesRail__intro" initiallyVisible variant="left">
            <SectionHeading
              eyebrow="Services"
              title="Fence, gate, wall, and outdoor scope."
              copy="Each service keeps its own page while the brand stays visual and consistent."
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
                <span className="eyebrow">Materials + scope</span>
                <p>Privacy runs, frontage work, walls, and supporting outdoor upgrades.</p>
                <Link href="/services" className="button button--primary">
                  View all services
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="servicesRail__list">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={Math.min(index * 55, 220)}
                variant={index % 2 === 0 ? "right" : "left"}
              >
                <ServiceCard service={service} variant="editorial" index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container galleryFeature">
          <Reveal className="galleryFeature__lead" initiallyVisible variant="left">
            <SectionHeading
              eyebrow="Selected work"
              title="Selected projects."
              copy="Privacy runs, decorative iron, gate detail, and hardscape that support the property edge."
            />
            <Link href="/gallery" className="button button--ghost">
              Open the gallery
            </Link>
          </Reveal>

          <div className="galleryFeature__grid">
            {featuredProjects.map((item, index) => (
              <Reveal
                key={item.title}
                className={`galleryTile galleryTile--${index === 0 ? "tall" : index === 3 ? "wide" : "standard"}`}
                delay={index * 70}
                variant="soft"
              >
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                <div className="galleryTile__overlay">
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container proofBand">
          <Reveal className="proofBand__lead" initiallyVisible variant="left">
            <SectionHeading
              eyebrow="Process"
              title="What clients actually need."
              copy="A quick estimate path and crews that finish cleanly."
            />
            <Link href="/gallery" className="button button--ghost">
              Browse project gallery
            </Link>
          </Reveal>

          <div className="proofBand__grid">
            {trustPoints.map((point, index) => (
              <Reveal key={point.title} className="processCard" delay={index * 70} variant="up">
                <span className="eyebrow">0{index + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </Reveal>
            ))}

            <Reveal className="projectSpotlight" delay={210} variant="soft">
              <div className="projectSpotlight__image">
                <Image
                  src="/client/cinder-block-wall.jpg"
                  alt="Empire Fence wall and frontage project"
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
              </div>
              <div className="projectSpotlight__body">
                <span className="eyebrow">Complete frontage</span>
                <h3>Fence frontage, gates, walls, and hardscape can stay under one cleaner scope.</h3>
                <p>That is the difference between a one-material installer and a stronger exterior contractor.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container locationFaq">
          <Reveal className="locationStage" initiallyVisible variant="left">
            <span className="eyebrow">Service area</span>
            <h2>Jurupa Valley first, with nearby Inland Empire coverage.</h2>
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
            <SectionHeading eyebrow="FAQ" title="Before the estimate." />
            <div className="faqList faqList--stacked">
              {faqs.map((item, index) => (
                <Reveal key={item.question} className="faqItem" delay={index * 50} variant="up">
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
            eyebrow="Planning articles"
            title="Planning notes."
            copy="Material choices and estimate prep."
          />
          <div className="postGrid postGrid--feature">
            {posts.map((post, index) => (
              <Reveal key={post.slug} className="postCard" delay={index * 70} variant="soft">
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
          <Reveal className="ctaShell" variant="soft">
            <div className="ctaShell__copy">
              <span className="eyebrow">Start the estimate</span>
              <h2>
                Start with the <em>scope</em>.
              </h2>
              <p>Use the form for project details, or open the contact page for the calendar and phone.</p>

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
