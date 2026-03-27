import { MailIcon, PhoneIcon } from "./icons";
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
      <div className="sectionShell estimateSection__inner">
        <div className="estimateSection__copy">
          <SectionTitle eyebrow={estimate.eyebrow} title={estimate.title} tone="light" />

          <form className="quoteCard" data-reveal>
            <div className="quoteCard__header">
              <h3>{estimate.quoteTitle}</h3>
              <p>Email the job, or book directly.</p>
            </div>

            <div className="quoteCard__grid">
              <label>
                <span>Name</span>
                <input name="name" value={quoteForm.name} onChange={onInputChange} placeholder="Your name" />
              </label>
              <label>
                <span>Phone</span>
                <input name="phone" value={quoteForm.phone} onChange={onInputChange} placeholder={business.phoneDisplay} />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" value={quoteForm.email} onChange={onInputChange} placeholder={business.email} />
              </label>
              <label>
                <span>Service</span>
                <select name="service" value={quoteForm.service} onChange={onInputChange}>
                  <option value="">Select a service</option>
                  <option value="Wrought iron fencing">Wrought iron fencing</option>
                  <option value="Vinyl or wood fencing">Vinyl or wood fencing</option>
                  <option value="Chain link">Chain link</option>
                  <option value="Gates">Gates</option>
                  <option value="Exterior scope">Exterior scope</option>
                </select>
              </label>
              <label className="quoteCard__full">
                <span>Project details</span>
                <textarea
                  name="details"
                  value={quoteForm.details}
                  onChange={onInputChange}
                  rows="5"
                  placeholder="Address, fence type, gates, timing, and anything else useful."
                />
              </label>
            </div>

            <div className="quoteCard__actions">
              <ButtonLink href={quoteMailto}>
                <MailIcon />
                <span>Email request</span>
              </ButtonLink>
              <ButtonLink href={business.phoneHref} variant="secondary">
                <PhoneIcon />
                <span>Call now</span>
              </ButtonLink>
            </div>
          </form>
        </div>

        <div className="bookingPanel" id="booking" data-reveal>
          <div className="bookingPanel__intro">
            <span>Live calendar</span>
            <strong>{estimate.bookingTitle}</strong>
          </div>
          <div className="bookingPanel__frame">
            <iframe
              src={bookingWidget.iframeSrc}
              id={bookingWidget.iframeId}
              title="Empire Fence booking calendar"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
