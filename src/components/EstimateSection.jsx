import { ButtonLink, SectionTitle } from "./ui";

export function EstimateSection({
  business,
  bookingWidget,
  estimate,
  quoteForm,
  quoteMailto,
  onInputChange,
}) {
  return (
    <section className="estimateSection" id="estimate">
      <SectionTitle eyebrow={estimate.eyebrow} title={estimate.title} tone="light" />

      <div className="estimateSection__grid">
        <article className="estimatePanel estimatePanel--form" data-reveal>
          <div className="panelIntro">
            <p>Quote request</p>
            <strong>{estimate.quoteTitle}</strong>
          </div>

          <form className="estimateForm" action={quoteMailto} method="post">
            <div className="estimateForm__grid">
              <label>
                <span>Name</span>
                <input name="name" type="text" value={quoteForm.name} onChange={onInputChange} placeholder="Your name" />
              </label>
              <label>
                <span>Phone</span>
                <input name="phone" type="tel" value={quoteForm.phone} onChange={onInputChange} placeholder="Phone" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" value={quoteForm.email} onChange={onInputChange} placeholder="Email" />
              </label>
              <label>
                <span>Service</span>
                <select name="service" value={quoteForm.service} onChange={onInputChange}>
                  <option value="">Select</option>
                  <option value="Wrought iron">Wrought iron</option>
                  <option value="Vinyl / Wood">Vinyl / Wood</option>
                  <option value="Chain link">Chain link</option>
                  <option value="Gate work">Gate work</option>
                  <option value="Exterior add-ons">Exterior add-ons</option>
                </select>
              </label>
            </div>

            <label>
              <span>Project details</span>
              <textarea
                name="details"
                rows="5"
                value={quoteForm.details}
                onChange={onInputChange}
                placeholder="Property, rough scope, and anything that matters."
              />
            </label>

            <button type="submit" className="buttonLink buttonLink--primary buttonLink--button">
              <span>Send request</span>
            </button>
          </form>

          <div className="contactRail">
            {estimate.contactPoints.map((point) => (
              <a key={point.label} href={point.href} target={point.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span>{point.label}</span>
                <strong>{point.value}</strong>
              </a>
            ))}
          </div>
        </article>

        <article className="estimatePanel estimatePanel--booking" data-reveal id="booking">
          <div className="panelIntro panelIntro--light">
            <p>Book directly</p>
            <strong>{estimate.bookingTitle}</strong>
          </div>
          <div className="bookingFrame">
            <iframe
              src={bookingWidget.iframeSrc}
              title="Book an Empire Fence appointment"
              id={bookingWidget.iframeId}
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
            />
          </div>
          <ButtonLink href={business.phoneHref} variant="ghost" className="bookingCallout">
            Prefer to talk first? Call {business.phoneDisplay}
          </ButtonLink>
        </article>
      </div>
    </section>
  );
}
