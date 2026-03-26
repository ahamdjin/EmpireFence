import { useEffect, useMemo, useState } from "react";

const COMPANY = {
  name: "Empire Fence Inc",
  phoneDisplay: "(951) 398-2016",
  phoneHref: "tel:9513982016",
  email: "solution.gf@gmail.com",
  emailHref: "mailto:solution.gf@gmail.com",
  location: "Jurupa Valley, CA",
  mapHref: "https://maps.app.goo.gl/4amXspRgyV3gUAib8",
  yelp: "https://www.yelp.com/biz/empire-fence-jurupa-valley-2?osq=Empirefence&override_cta=Get+a+quote",
  hours: "Mon-Sat · 7 AM-7 PM",
};

const CHAT_WIDGET = {
  widgetId: "69c01d67633c74d10c369675",
  locationId: "VUXXwCAxSkjuGBKAjon6",
  loaderSrc: "https://widgets.leadconnectorhq.com/loader.js",
  resourcesUrl: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
};

const BOOKING_WIDGET = {
  iframeSrc: "https://api.leadconnectorhq.com/widget/booking/U8dcaomRA4oKx7KP7z2Q",
  iframeId: "U8dcaomRA4oKx7KP7z2Q_1774568093366",
  scriptSrc: "https://link.msgsndr.com/js/form_embed.js",
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Book", href: "#booking" },
  { label: "Quote", href: "#quote" },
];

const stats = [
  { value: "40+", label: "Years" },
  { value: "Free", label: "Estimates" },
  { value: "3.9★", label: "Yelp" },
];

const services = [
  {
    kicker: "Privacy",
    title: "Vinyl fence",
    body: "Privacy, clean lines, low maintenance.",
    note: "Fast curb-appeal upgrade",
  },
  {
    kicker: "Repair",
    title: "Wood fence",
    body: "Backyard rebuilds and repairs.",
    note: "Classic look, refreshed cleanly",
  },
  {
    kicker: "Security",
    title: "Chain link",
    body: "Perimeter and security coverage.",
    note: "Simple, durable site control",
  },
  {
    kicker: "Frontage",
    title: "Wrought iron",
    body: "Decorative frontage and strength.",
    note: "Stronger first impression",
  },
  {
    kicker: "Access",
    title: "Gate work",
    body: "Manual, automatic, repair, alignment.",
    note: "Entry points that work right",
  },
  {
    kicker: "Upgrade",
    title: "Outdoor add-ons",
    body: "Walls, patios, driveways, turf.",
    note: "Extra exterior work when needed",
  },
];

const trustItems = ["Family-owned", "Spanish support", "Free estimates", "Repairs and installs"];

const areas = ["Jurupa Valley", "Riverside", "Ontario", "Chino", "Rancho Cucamonga", "Fontana", "San Bernardino"];

const faqs = [
  {
    question: "What fence types do you handle?",
    answer: "Vinyl, wood, chain link, wrought iron, custom fence work, and gates.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes. Free estimates are part of the current business positioning.",
  },
  {
    question: "Do you do repairs too?",
    answer: "Yes. Fence and gate repair are both part of the current service footprint.",
  },
  {
    question: "What areas do you serve?",
    answer: "Jurupa Valley plus nearby Inland Empire cities including Riverside, Ontario, Chino, Rancho Cucamonga, Fontana, and San Bernardino.",
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = `Estimate Request - ${form.service || "Empire Fence Project"}`;
    const body = [
      `Name: ${form.name || ""}`,
      `Phone: ${form.phone || ""}`,
      `Email: ${form.email || ""}`,
      `Service: ${form.service || ""}`,
      "",
      "Project details:",
      form.message || "",
    ].join("\n");

    return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  useEffect(() => {
    const existingHost = document.querySelector(`[data-chat-widget][data-widget-id="${CHAT_WIDGET.widgetId}"]`);
    const existingScript = document.querySelector(`script[data-widget-id="${CHAT_WIDGET.widgetId}"]`);
    if (existingHost || existingScript) return undefined;

    const widgetHost = document.createElement("div");
    widgetHost.setAttribute("data-chat-widget", "");
    widgetHost.setAttribute("data-widget-id", CHAT_WIDGET.widgetId);
    widgetHost.setAttribute("data-location-id", CHAT_WIDGET.locationId);
    document.body.appendChild(widgetHost);

    const script = document.createElement("script");
    script.src = CHAT_WIDGET.loaderSrc;
    script.dataset.resourcesUrl = CHAT_WIDGET.resourcesUrl;
    script.dataset.widgetId = CHAT_WIDGET.widgetId;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${BOOKING_WIDGET.scriptSrc}"]`);
    if (existingScript) return undefined;

    const script = document.createElement("script");
    script.src = BOOKING_WIDGET.scriptSrc;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const renderNavLinks = (className) => (
    <nav className={className} aria-label="Main navigation">
      {navLinks.map((item) => (
        <a key={item.href} href={item.href} onClick={closeMobileMenu}>
          {item.label}
        </a>
      ))}
    </nav>
  );

  const renderHeaderActions = (className) => (
    <div className={className}>
      <a className="button buttonGhost" href={COMPANY.phoneHref} onClick={closeMobileMenu}>
        Call
      </a>
      <a className="button buttonPrimary" href="#booking" onClick={closeMobileMenu}>
        Book
      </a>
    </div>
  );

  return (
    <div className="siteShell">
      <header className="siteHeader">
        <div className="container navShell">
          <a className="brand" href="#home" aria-label="Empire Fence home">
            <img src="/images/logo.png" alt="Empire Fence logo" />
            <div>
              <strong>{COMPANY.name}</strong>
              <span>{COMPANY.location}</span>
            </div>
          </a>

          <div className="headerDesktop">
            {renderNavLinks("navLinks")}
            {renderHeaderActions("navActions")}
          </div>

          <button
            type="button"
            className={`menuToggle ${mobileMenuOpen ? "isOpen" : ""}`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          {mobileMenuOpen ? (
            <div className="headerMobilePanel">
              <div className="headerMobileInner">
                {renderNavLinks("navLinksMobile")}
                {renderHeaderActions("headerActionsMobile")}
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">Fence and gate contractor</p>
              <h1>Clean installs. Better frontage. Less hassle.</h1>
              <p className="heroBody">
                Vinyl, wood, chain link, wrought iron, gates, and outdoor upgrades across Jurupa Valley and nearby
                Inland Empire cities.
              </p>

              <div className="heroActions">
                <a className="button buttonPrimary" href="#booking">
                  Book a visit
                </a>
                <a className="button buttonGhost" href={COMPANY.phoneHref}>
                  {COMPANY.phoneDisplay}
                </a>
              </div>

              <div className="statsRow" aria-label="Business highlights">
                {stats.map((item) => (
                  <article key={item.label} className="statCard">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="heroVisualCard">
              <div className="heroImageWrap">
                <img src="/images/hero-fence.jpg" alt="Fence installation example" />
              </div>

              <div className="heroMeta">
                <div>
                  <span>Service</span>
                  <p>Fence installs and gate work</p>
                </div>
                <div>
                  <span>Hours</span>
                  <p>{COMPANY.hours}</p>
                </div>
                <div>
                  <span>Reviews</span>
                  <a href={COMPANY.yelp} target="_blank" rel="noreferrer">
                    Yelp profile
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container servicesSection">
            <div className="servicesTopRow">
              <div className="sectionIntro servicesIntro">
                <p className="eyebrow">Services</p>
                <h2>Clear scope. Clean finish.</h2>
                <p>Fence, gate, and exterior work laid out clearly on every device.</p>
              </div>

              <article className="servicesFeatureCard">
                <div className="servicesFeatureImage">
                  <img src="/images/detail-fence.jpg" alt="Empire Fence workmanship detail" />
                </div>
                <div className="servicesFeatureBody">
                  <span className="serviceKicker">Install · Repair · Upgrade</span>
                  <h3>Residential fence work without the clutter.</h3>
                  <p>Six core service lines. Direct quotes. No bloated menu.</p>
                </div>
              </article>
            </div>

            <div className="serviceGrid">
              {services.map((service, index) => (
                <article key={service.title} className="serviceCard">
                  <span className="serviceKicker">
                    {String(index + 1).padStart(2, "0")} · {service.kicker}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <span className="serviceNote">{service.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectionSoft" id="faq">
          <div className="container infoGrid">
            <div className="infoCopy">
              <p className="eyebrow">Why Empire Fence</p>
              <h2>Local. Direct. Built to last.</h2>
              <p>Enough detail to trust the work. Not enough clutter to slow the page down.</p>

              <ul className="trustList">
                {trustItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="areaPanel">
                <span className="panelLabel">Service area</span>
                <div className="areaWrap" aria-label="Service areas">
                  {areas.map((area) => (
                    <span key={area} className="areaChip">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="faqColumn">
              <article className="imagePanel">
                <img src="/images/detail-fence.jpg" alt="Fence detail example" />
              </article>

              <div className="faqIntro">
                <span className="panelLabel">FAQ</span>
                <h3>What people ask first.</h3>
              </div>

              <div className="faqList">
                {faqs.map((item) => (
                  <details key={item.question} className="faqItem">
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bookingSection" id="booking">
          <div className="container bookingLayout">
            <div className="sectionIntro bookingIntro">
              <p className="eyebrow">Book a time</p>
              <h2>Pick a slot that works.</h2>
              <p>Use the live calendar if you want a faster estimate or a quick project conversation.</p>

              <div className="bookingHighlights" aria-label="Booking highlights">
                <article className="bookingPoint">
                  <span>Fast estimate</span>
                  <p>Pick a time without waiting for a callback.</p>
                </article>
                <article className="bookingPoint">
                  <span>Project review</span>
                  <p>Fence, gate, repair, or full exterior scope.</p>
                </article>
                <article className="bookingPoint">
                  <span>Still prefer a call?</span>
                  <p>
                    <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
                  </p>
                </article>
              </div>
            </div>

            <div className="bookingCard">
              <div className="bookingFrameShell">
                <iframe
                  src={BOOKING_WIDGET.iframeSrc}
                  style={{ width: "100%", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id={BOOKING_WIDGET.iframeId}
                  title="Empire Fence booking calendar"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section quoteSection" id="quote">
          <div className="container quoteGrid">
            <div className="quoteCopy">
              <p className="eyebrow">Quote</p>
              <h2>Send the scope.</h2>
              <p>Name, city, service, and the basics are enough to start.</p>

              <div className="quoteContact">
                <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
                <a href={COMPANY.emailHref}>{COMPANY.email}</a>
                <a href={COMPANY.mapHref} target="_blank" rel="noreferrer">
                  {COMPANY.location}
                </a>
              </div>
            </div>

            <form className="quoteForm" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                Phone
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
              </label>
              <label>
                Service
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option>Vinyl fence</option>
                  <option>Wood fence</option>
                  <option>Chain link fence</option>
                  <option>Wrought iron fence</option>
                  <option>Gate work</option>
                  <option>Outdoor add-ons</option>
                </select>
              </label>
              <label className="fullWidth">
                Project details
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="City, rough scope, timeline."
                  rows="5"
                  required
                />
              </label>
              <button className="button buttonPrimary fullWidth" type="submit">
                Send request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div>
            <strong>{COMPANY.name}</strong>
            <p>{COMPANY.location}</p>
          </div>
          <div>
            <strong>Contact</strong>
            <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
            <a href={COMPANY.emailHref}>{COMPANY.email}</a>
          </div>
          <div>
            <strong>Links</strong>
            <a href={COMPANY.yelp} target="_blank" rel="noreferrer">
              Yelp
            </a>
            <a href={COMPANY.mapHref} target="_blank" rel="noreferrer">
              Map
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
