import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingWidget } from "@/components/booking-widget";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { ServiceCard } from "@/components/service-card";
import { getAllServices, getServiceBySlug } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
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
    });
  }

  const area = findLocation(slug);
  if (area) {
    return buildPageMetadata({
      title: area.title,
      description: area.intro,
      path: `/${area.slug}`,
      image: area.image,
    });
  }

  return {};
}

function LocationPage({ area, services }) {
  return (
    <>
      <PageHero
        variant="areas"
        eyebrow="Service area"
        title={
          <>
            Fence and gate work in <em>{area.title}</em>
          </>
        }
        intro={`Privacy fencing, frontage work, entry gates, and supporting outdoor scope in ${area.title}.`}
        image={area.image}
        chips={["Free estimate", "Residential", "Commercial", area.title]}
      />

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Local projects</span>
            <h2>Fence lines, gates, and surrounding scope handled cleanly.</h2>
          </div>
          <div className="prose">
            <p>Projects in {area.title} can range from privacy runs and decorative frontage to wall work and gate scope.</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container serviceGrid">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.slug} service={service} variant="tile" />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container dualPanel">
          <div className="panel">
            <span className="eyebrow">Request a quote</span>
            <h2>Start the estimate for {area.title}.</h2>
            <QuoteForm compact />
          </div>
          <div className="panel panel--dark">
            <span className="eyebrow">Book the first call</span>
            <h2>Use the live calendar.</h2>
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}

function ServicePage({ service, services }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.data.eyebrow}
        title={service.data.title}
        intro={service.data.summary}
        image={service.data.heroImage}
      />

      <section className="section">
        <div className="container serviceBody">
          <div className="articleBody" dangerouslySetInnerHTML={{ __html: service.html }} />
          <aside className="stickyCard">
            <span className="eyebrow">Service highlights</span>
            <ul className="bulletList">
              {service.data.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/contact-us" className="button button--primary">
              Request estimate
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="sectionHeading">
            <span className="eyebrow">Service FAQ</span>
            <h2>Common questions for this scope.</h2>
          </div>
          <div className="faqList">
            {service.data.faqs.map((item) => (
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
            <span className="eyebrow">Related services</span>
            <h2>Related work around the property edge.</h2>
          </div>
          <div className="serviceGrid">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} variant="tile" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container dualPanel">
          <div className="panel panel--dark">
            <span className="eyebrow">Free estimate</span>
            <h2>Send the details for this project.</h2>
            <QuoteForm compact />
          </div>
          <div className="panel">
            <span className="eyebrow">Business info</span>
            <h2>Talk to the team directly.</h2>
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <p>{business.city}</p>
              <p>{business.hours}</p>
            </div>
          </div>
        </div>
      </section>
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
