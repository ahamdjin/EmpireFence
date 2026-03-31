import { BookingWidget } from "@/components/booking-widget";
import { QuoteForm } from "@/components/quote-form";
import { buildPageMetadata } from "@/lib/seo";
import { business, contactPrompts, serviceAreas, socialLinks } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact us",
  description:
    "Request a free estimate, book through the live calendar, or contact Empire Fence directly for fence and outdoor work in Jurupa Valley.",
  path: "/contact-us",
  image: "/client/location-fontana.jpg",
});

export default function ContactPage() {
  return (
    <>
      <section className="contactStage">
        <div className="container contactStage__grid">
          <article className="contactStage__intro">
            <span className="eyebrow">Contact</span>
            <h1>
              Start the estimate or book the first <em>call</em>.
            </h1>
            <p>
              Use the form for project details, call directly when you want to move faster, or book
              through the live calendar below.
            </p>
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <a href={business.mapHref} target="_blank" rel="noreferrer">
                {business.city}
              </a>
              <p>{business.hours}</p>
            </div>
            <div className="contactStage__socials">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="button button--ghost">
                  {link.label}
                </a>
              ))}
            </div>
          </article>

          <article className="contactStage__form">
            <span className="eyebrow">Estimate request</span>
            <h2>Send the scope.</h2>
            <QuoteForm />
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container splitCards">
          <article className="infoCard">
            <span className="eyebrow">Helpful details</span>
            <h3>What to send before the first call.</h3>
            <ul className="bulletList">
              {contactPrompts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="infoCard">
            <span className="eyebrow">Service footprint</span>
            <h3>Jurupa Valley first, with nearby Inland Empire coverage.</h3>
            <div className="chipWrap">
              {serviceAreas.map((area) => (
                <span key={area.slug} className="chip chip--static">
                  {area.title}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="booking">
        <div className="container contactUtility">
          <div className="contactUtility__map">
            <span className="eyebrow">Map</span>
            <h2>Find the service footprint.</h2>
            <div className="mapCard mapCard--embedded">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence map" />
            </div>
          </div>
          <div className="contactUtility__booking">
            <span className="eyebrow">Booking calendar</span>
            <h2>Book the first call.</h2>
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}
