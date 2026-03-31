import { BookingWidget } from "@/components/booking-widget";
import { PageHero } from "@/components/page-hero";
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
      <PageHero
        variant="contact"
        eyebrow="Contact"
        title={
          <>
            Start the estimate or book the first <em>call</em>.
          </>
        }
        intro="Use the form for project details, or book directly when you want to talk through scope."
        image="/client/location-fontana.jpg"
        cards={[
          { eyebrow: "Phone", title: business.phoneDisplay, href: business.phoneHref },
          { eyebrow: "Email", title: business.email, href: business.emailHref },
          { eyebrow: "Hours", title: business.hours },
        ]}
      />

      <section className="section">
        <div className="container contactGrid">
          <article className="panel panel--dark">
            <span className="eyebrow">Get in touch</span>
            <h2>Talk to the team directly.</h2>
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <a href={business.mapHref} target="_blank" rel="noreferrer">
                {business.city}
              </a>
              <p>{business.hours}</p>
            </div>
            <div className="chipWrap">
              {serviceAreas.map((area) => (
                <span key={area.slug} className="chip chip--static chip--dark">
                  {area.title}
                </span>
              ))}
            </div>
          </article>
          <article className="panel">
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
            <span className="eyebrow">Social profiles</span>
            <h3>See the business on the platforms clients already use.</h3>
            <div className="footerLinks footerLinks--light">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section--soft" id="booking">
        <div className="container dualPanel">
          <div className="panel">
            <span className="eyebrow">Map</span>
            <h2>Find the service footprint.</h2>
            <div className="mapCard mapCard--embedded">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence map" />
            </div>
          </div>
          <div className="panel panel--dark">
            <span className="eyebrow">Booking calendar</span>
            <h2>Book the first call.</h2>
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}
