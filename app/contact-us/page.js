import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { buildPageMetadata } from "@/lib/seo";
import { business, contactPrompts, serviceAreas, socialLinks } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact us",
  description:
    "Request a free estimate or contact Empire Fence directly for fence, gate, and wall work in Jurupa Valley.",
  path: "/contact-us",
  image: "/client/location-fontana.jpg",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Contact us"
        title="Get a Free Estimate"
        intro="Call us now or fill out the form for a free fence installation quote. We serve Jurupa Valley and the entire Inland Empire."
        image="/client/location-fontana.jpg"
        primaryAction={{ href: business.phoneHref, label: `Call ${business.phoneDisplay}` }}
        secondaryAction={{ href: "#form", label: "Send message" }}
      />

      <section className="contactHub" id="form">
        <div className="container contactHub__grid">
          <article className="contactHub__intro">
            <span className="eyebrow">Quick Request</span>
            <h2>Send us your project details</h2>
            <p>
              Fill out the form below and we'll get back to you within 24 hours
              with a free estimate for your fencing project.
            </p>
            <div className="contactHub__socials">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="textLink">
                  {link.label}
                </a>
              ))}
            </div>
          </article>

          <article className="contactHub__form">
            <QuoteForm />
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contactChecklist">
          <article className="contactChecklist__card">
            <span className="eyebrow">Helpful details</span>
            <h3>What to send before the first call.</h3>
            <ul className="bulletList">
              {contactPrompts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="contactChecklist__card">
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

      <section className="section">
        <div className="container contactUtilityPanel">
          <div className="contactUtilityPanel__map">
            <span className="eyebrow">Map</span>
            <h2>Find the service footprint.</h2>
            <div className="mapCard mapCard--embedded">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence map" />
            </div>
          </div>
          <div className="contactUtilityPanel__booking">
            <span className="eyebrow">Direct contact</span>
            <h2>Call, email, or send the estimate request.</h2>
            <p>Skip the calendar. Use the contact form, call the team directly, or send the project photos and address by email.</p>
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <p>{business.hours}</p>
            </div>
            <div className="buttonRow">
              <a href={business.phoneHref} className="button button--primary">
                Call now
              </a>
              <a href={business.emailHref} className="button button--ghost">
                Send email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
