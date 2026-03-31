import Image from "next/image";
import Link from "next/link";

import { BookingWidget } from "@/components/booking-widget";
import { QuoteForm } from "@/components/quote-form";
import { getAllPosts, getAllServices } from "@/lib/content";
import { business, faqs, highlightStats, serviceAreas, trustPoints } from "@/lib/site";

export default async function HomePage() {
  const services = await getAllServices();
  const posts = await getAllPosts();

  return (
    <>
      <section className="homeHero">
        <div className="container homeHero__shell">
          <div className="homeHero__copy">
            <span className="eyebrow">Jurupa Valley fence and outdoor services</span>
            <h1>Built around the perimeter. Finished like the whole property matters.</h1>
            <p>
              Empire Fence brings fencing, gates, block walls, patios, and turf into one cleaner
              project flow across Jurupa Valley and nearby Inland Empire cities.
            </p>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                Start a free estimate
              </Link>
              <a href={business.phoneHref} className="button button--ghost">
                {business.phoneDisplay}
              </a>
            </div>
            <div className="metricRow">
              {highlightStats.map((stat) => (
                <article key={stat.label} className="metricCard">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="homeHero__media">
            <div className="homeHero__image">
              <Image
                src="/client/hero-western.webp"
                alt="Empire Fence project"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
            <div className="floatingPanel">
              <span className="eyebrow">What the site offers</span>
              <ul>
                <li>Vinyl, wood, wrought iron, and chain link fencing</li>
                <li>Custom gates, cinder block walls, patios, and driveways</li>
                <li>Turf installation and broader exterior upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">About Empire Fence</span>
            <h2>Reliable fencing and outdoor installation solutions in Jurupa Valley.</h2>
          </div>
          <div className="prose">
            <p>
              Empire Fence positions itself as a full exterior contractor, not just a fence crew.
              The work spans privacy fencing, decorative frontage, chain link perimeter control,
              gates, block walls, patios, driveways, and turf.
            </p>
            <p>
              The value proposition is simple: cleaner results, stronger material judgment, and
              one team that can keep the perimeter and adjacent outdoor scope coherent.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <div className="sectionHeading">
            <span className="eyebrow">Featured services</span>
            <h2>Separate services. One consistent standard.</h2>
          </div>
          <div className="serviceGrid">
            {services.map((service) => (
              <article key={service.slug} className="serviceCard">
                <div className="serviceCard__image">
                  <Image src={service.data.heroImage} alt={service.data.title} fill sizes="(max-width: 900px) 100vw, 30vw" />
                </div>
                <div className="serviceCard__body">
                  <span className="eyebrow">{service.data.eyebrow}</span>
                  <h3>{service.data.title}</h3>
                  <p>{service.data.summary}</p>
                  <Link href={`/${service.slug}`} className="textLink">
                    View service
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <span className="eyebrow">Why clients call</span>
            <h2>The scope goes beyond one fence type.</h2>
          </div>
          <div className="trustGrid">
            {trustPoints.map((point) => (
              <article key={point.title} className="trustCard">
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <span className="eyebrow">Gallery</span>
            <h2>Recent project imagery from the current brand site.</h2>
          </div>
          <div className="galleryMosaic">
            {["/client/gallery-1.webp", "/client/gallery-2.webp", "/client/gallery-3.webp", "/client/gallery-4.webp"].map((image, index) => (
              <div key={image} className={`galleryMosaic__item galleryMosaic__item--${index + 1}`}>
                <Image src={image} alt={`Empire Fence gallery image ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 25vw" />
              </div>
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
          <div>
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
          </div>
          <div className="mapCard">
            <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence map" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container dualPanel">
          <div className="panel panel--dark">
            <span className="eyebrow">Book</span>
            <h2>Choose a time for the first conversation.</h2>
            <p>
              The booking embed stays live here so the team can keep using the current calendar
              flow while the new site architecture expands.
            </p>
            <BookingWidget />
          </div>
          <div className="panel">
            <span className="eyebrow">Quote</span>
            <h2>Send the scope now.</h2>
            <p>Name, phone, service, and a short summary are enough to start.</p>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="sectionHeading">
            <span className="eyebrow">FAQ</span>
            <h2>Key business questions answered fast.</h2>
          </div>
          <div className="faqList">
            {faqs.map((item) => (
              <article key={item.question} className="faqItem">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <span className="eyebrow">Blog CMS</span>
            <h2>New editorial layer for SEO and local trust-building.</h2>
          </div>
          <div className="postGrid">
            {posts.map((post) => (
              <article key={post.slug} className="postCard">
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
