import Image from "next/image";
import Link from "next/link";

import { BookingWidget } from "@/components/booking-widget";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getAllPosts, getAllServices } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { business, faqs, highlightStats, serviceAreas, trustPoints } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Fence and outdoor services in Jurupa Valley",
  description:
    "Fence installation, gates, block walls, patios, driveways, and turf services across Jurupa Valley and nearby Inland Empire cities.",
  path: "/",
});

export default async function HomePage() {
  const services = await getAllServices();
  const posts = await getAllPosts();
  const [featuredService, ...otherServices] = services;

  return (
    <>
      <section className="homeHero">
        <div className="container">
          <Reveal className="heroFrame">
            <div className="heroFrame__bar">
              <span>{business.shortName}</span>
              <span>{business.city}</span>
              <span>Fence / gates / walls / outdoor upgrades</span>
            </div>
            <div className="heroFrame__grid">
              <div className="heroFrame__copy">
                <span className="eyebrow">Jurupa Valley fence and outdoor services</span>
                <h1>Empire fence. Premium perimeter work with cleaner follow-through.</h1>
                <p>
                  Fence lines, gates, block walls, patios, driveways, and turf handled as one
                  coordinated exterior scope instead of a fragmented project.
                </p>
                <div className="buttonRow">
                  <Link href="/contact-us" className="button button--primary">
                    Start a free estimate
                  </Link>
                  <a href={business.phoneHref} className="button button--ghost">
                    {business.phoneDisplay}
                  </a>
                </div>
                <div className="metricRow metricRow--hero">
                  {highlightStats.map((stat) => (
                    <article key={stat.label} className="metricCard metricCard--hero">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </article>
                  ))}
                </div>
              </div>
              <div className="heroFrame__visual">
                <div className="heroFrame__image">
                  <Image
                    src="/client/hero-western.webp"
                    alt="Empire Fence project"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 46vw"
                  />
                </div>
                <div className="heroFrame__note">
                  <span className="eyebrow">Scope</span>
                  <p>
                    Wrought iron, wood, vinyl, chain link, gates, patios, driveways, turf, and
                    walls — framed as one premium contractor brand.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container editorialGrid">
          <Reveal className="editorialBlock">
            <span className="eyebrow">About Empire Fence</span>
            <h2>Reliable fencing and outdoor installation solutions in Jurupa Valley.</h2>
            <p>
              Empire Fence is stronger when it reads like a full exterior contractor. The business
              is not only selling fence materials. It is selling a cleaner property edge, better
              access, and a more complete finished exterior.
            </p>
          </Reveal>
          <Reveal className="editorialImage" delay={80}>
            <Image src="/client/wrought-fence.jpg" alt="Wrought iron project detail" fill sizes="(max-width: 900px) 100vw, 40vw" />
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <SectionHeading
            eyebrow="Featured services"
            title="Framed as distinct services, designed like one premium system."
            tone="contrast"
          />
          <div className="servicesShowcase">
            <Reveal>
              <ServiceCard service={featuredService} variant="feature" />
            </Reveal>
            <div className="servicesShowcase__grid">
              {otherServices.map((service, index) => (
                <Reveal key={service.slug} delay={index * 60}>
                  <ServiceCard service={service} variant="tile" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why clients call" title="The scope goes beyond one fence type." />
          <div className="trustGrid trustGrid--staggered">
            {trustPoints.map((point, index) => (
              <Reveal key={point.title} className="trustCard trustCard--editorial" delay={index * 70}>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Recent project imagery from the current brand site." />
          <div className="galleryMosaic galleryMosaic--editorial">
            {["/client/gallery-1.webp", "/client/gallery-2.webp", "/client/gallery-3.webp", "/client/gallery-4.webp"].map((image, index) => (
              <Reveal key={image} className={`galleryMosaic__item galleryMosaic__item--${index + 1}`} delay={index * 80}>
                <Image src={image} alt={`Empire Fence gallery image ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 25vw" />
              </Reveal>
            ))}
          </div>
          <div className="sectionAction">
            <Link href="/gallery" className="button button--ghost">
              Open full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container coverageGrid">
          <Reveal>
            <span className="eyebrow">Service areas</span>
            <h2>Jurupa Valley plus the nearby cities the business already targets.</h2>
            <p>
              The original site calls out Riverside, Ontario, Chino, Rancho Cucamonga, Fontana,
              and San Bernardino. Those pages now live inside a cleaner location system.
            </p>
            <div className="chipWrap">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="chip">
                  {area.title}
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal className="mapCard mapCard--framed" delay={100}>
            <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence map" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container dualPanel">
          <Reveal className="panel panel--dark">
            <span className="eyebrow">Book</span>
            <h2>Choose a time for the first conversation.</h2>
            <p>
              The booking embed stays live here so the team can keep using the current calendar
              flow while the new site architecture expands.
            </p>
            <BookingWidget />
          </Reveal>
          <Reveal className="panel panel--softCard" delay={90}>
            <span className="eyebrow">Quote</span>
            <h2>Send the scope now.</h2>
            <p>Name, phone, service, and a short summary are enough to start.</p>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="Key business questions answered fast." />
          <div className="faqList">
            {faqs.map((item, index) => (
              <Reveal key={item.question} className="faqItem" delay={index * 50}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Blog CMS"
            title="New editorial layer for SEO and local trust-building."
          />
          <div className="postGrid">
            {posts.map((post, index) => (
              <Reveal key={post.slug} className="postCard" delay={index * 60}>
                <div className="postCard__image">
                  <Image src={post.data.heroImage} alt={post.data.title} fill sizes="(max-width: 900px) 100vw, 32vw" />
                </div>
                <div className="postCard__body">
                  <span className="eyebrow">
                    {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.data.date))}
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
    </>
  );
}
