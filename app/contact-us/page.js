import { BookingWidget } from "@/components/booking-widget";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { business, serviceAreas } from "@/lib/site";

export const metadata = {
  title: "Contact us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Free estimate, direct contact details, and the live booking flow in one place."
        intro="The original site uses contact and estimate forms throughout. This page centralizes that into a cleaner conversion page with map, contact details, and the current calendar."
        image="/client/location-fontana.jpg"
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
            <h2>Keep the current GHL scheduling flow live.</h2>
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}
