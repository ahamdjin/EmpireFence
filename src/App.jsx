import { useEffect, useMemo, useState } from "react";

const BUSINESS = {
  name: "Empire Fence Inc",
  phoneDisplay: "(951) 398-2016",
  phoneHref: "tel:9513982016",
  email: "solution.gf@gmail.com",
  emailHref: "mailto:solution.gf@gmail.com",
  location: "Jurupa Valley, CA",
  hours: "Mon-Sat - 7 AM-7 PM",
  mapHref: "https://maps.app.goo.gl/xRa6wkZfcRGdspvU6",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Reliable%20Fence%20Inc.%20Fontana%2C%20CA%2C%20USA&t=m&z=9&output=embed&iwloc=near",
  facebook: "https://www.facebook.com/ReliableFenceCA/",
  yelp: "https://www.yelp.com/biz/reliable-fence-jurupa-valley-2",
  google: "https://maps.app.goo.gl/xRa6wkZfcRGdspvU6",
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

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Areas", href: "#areas" },
  { label: "Quote", href: "#estimate" },
];

const heroStats = [
  { value: "40+", label: "Years of field work" },
  { value: "Free", label: "Estimates" },
  { value: "3.9", label: "Yelp rating" },
];

const introParagraphs = [
  "Empire Fence Inc. handles the work people call for most: privacy fences, frontage upgrades, chain link runs, gates, and cleaner perimeter control for residential and commercial properties.",
  "The scope can extend beyond fencing too. Turf, cinder block walls, driveways, and patios let the project finish as one coordinated exterior upgrade instead of a patchwork of separate contractors.",
];

const proofCards = [
  {
    title: "Frontage and curb appeal",
    copy: "Sharper property lines, cleaner installs, and a stronger first impression.",
    image: "/images/hero-fence.jpg",
  },
  {
    title: "Perimeter and security",
    copy: "Reliable fence and gate work for homes, lots, and commercial frontage.",
    image: "/images/detail-fence.jpg",
  },
];

const testimonials = [
  {
    quote: "I spoke to George, got an estimate the same day, and the work was scheduled and completed within days.",
    source: "Yelp review",
  },
  {
    quote: "Works well with all situations. Fence came out gorgeous.",
    source: "Google review",
  },
  {
    quote: "George was quick to answer questions, very professional, and the crew did a great job.",
    source: "Google review",
  },
];

const services = [
  { title: "Vinyl Fence", description: "Privacy-driven installs with a clean, low-maintenance finish." },
  { title: "Chain Link Fence", description: "Practical perimeter coverage for homes, lots, and commercial edges." },
  { title: "Wrought Iron Fence", description: "Decorative security for frontage, gates, and higher-visibility elevations." },
  { title: "Wood Fence", description: "Classic backyard enclosure with room for custom height and finish." },
  { title: "Custom Fence", description: "Layouts shaped around slope, access, frontage, and property-specific constraints." },
  { title: "Turf Installation", description: "Cleaner outdoor surfaces that reduce maintenance and improve presentation." },
  { title: "Cinder Block Walls", description: "Stronger privacy and structural edge control where fencing alone is not enough." },
  { title: "Driveways and Patios", description: "Hardscape work that completes the full outdoor scope in one pass." },
];

const reasons = [
  {
    title: "Expertise and experience",
    body: "Years in the field means better material decisions, cleaner layouts, and fewer surprises once the install starts.",
  },
  {
    title: "Personalized service",
    body: "The team works around your property, budget, and priorities instead of pushing a one-size-fits-all package.",
  },
  {
    title: "Quality materials and workmanship",
    body: "Material quality, straight lines, gate alignment, and finish detail matter because the install has to hold up and still look right later.",
  },
  {
    title: "Customer satisfaction guaranteed",
    body: "Clear communication and dependable follow-through matter just as much as the install itself.",
  },
];

const industries = [
  { title: "Residential", body: "Front yards, side yards, privacy zones, and family-safe spaces." },
  { title: "Commercial", body: "Perimeter coverage, site definition, and access control." },
  { title: "Education", body: "Boundary work and cleaner grounds presentation." },
  { title: "Industry", body: "Durable fencing for functional, high-traffic environments." },
];

const stats = [
  { value: "40+", label: "Years of experience" },
  { value: "1 Year", label: "Warranty coverage" },
  { value: "Best", label: "Craftsmanship standard" },
];

const galleryImages = [
  { src: "/images/hero-fence.jpg", alt: "Empire Fence ornamental iron frontage", frame: "frameTall" },
  { src: "/images/detail-fence.jpg", alt: "Empire Fence custom metal gate", frame: "frameWide" },
  { src: "/images/detail-fence.jpg", alt: "Empire Fence perimeter detail", frame: "frameSquare" },
  { src: "/images/hero-fence.jpg", alt: "Empire Fence install detail", frame: "frameSquare" },
];
const faqs = [
  {
    question: "What types of fencing materials do you offer?",
    answer:
      "We at Empire Fence Inc. provide a large selection of fencing materials to meet different requirements and tastes. We have fences made of vinyl, chain link, wood, and wrought iron, each with its advantages in terms of strength, style, and upkeep.",
  },
  {
    question: "How long does the installation process take?",
    answer:
      "The size and complexity of the project, along with any special needs or customization, will all affect how long the installation procedure takes. Our crew often works quickly and effectively to finish installations while maintaining the highest standards of quality.",
  },
  {
    question: "Do you provide a warranty for your fencing installations?",
    answer:
      "Yes, we guarantee the caliber of our materials and workmanship. To provide our customers with even more peace of mind, we provide guarantees on the fencing installations we do. Depending on the kind of fencing and particulars of the project, our warranties could change, so we advise you to talk about this with our staff during the consultation phase.",
  },
  {
    question: "Can you accommodate custom fencing designs?",
    answer:
      "Absolutely. Since every property is different, we are dedicated to designing bespoke fencing solutions that satisfy your particular needs and aesthetic preferences. Our skilled craftsmen are adept at bringing your vision to life, whether it involves intricate wrought iron designs or personalized wood fencing.",
  },
];

const areas = ["Riverside, CA", "Ontario, CA", "Chino, CA", "Rancho Cucamonga, CA", "Fontana, CA", "San Bernardino, CA"];

function SectionLead({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={`sectionLead ${centered ? "sectionLead--centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function buildMailto(subject, fields) {
  const body = fields.map(([label, value]) => `${label}: ${value || ""}`).join("\n");
  return `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quickForm, setQuickForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  });
  const [estimateForm, setEstimateForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });

  const quickFormHref = useMemo(
    () =>
      buildMailto("Empire Fence Quick Estimate Request", [
        ["First name", quickForm.firstName],
        ["Last name", quickForm.lastName],
        ["Email", quickForm.email],
        ["Phone", quickForm.phone],
        ["Address", quickForm.address],
        ["City", quickForm.city],
        ["State", quickForm.state],
        ["Zip", quickForm.zip],
        ["Notes", quickForm.notes],
      ]),
    [quickForm],
  );

  const estimateFormHref = useMemo(
    () =>
      buildMailto("Empire Fence Quote Request", [
        ["Name", estimateForm.name],
        ["Phone", estimateForm.phone],
        ["Email", estimateForm.email],
        ["Service", estimateForm.service],
        ["Details", estimateForm.details],
      ]),
    [estimateForm],
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    return undefined;
  }, []);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${BOOKING_WIDGET.scriptSrc}"]`);
    if (existingScript) return undefined;

    const script = document.createElement("script");
    script.src = BOOKING_WIDGET.scriptSrc;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return undefined;
  }, []);

  const handleQuickChange = ({ target: { name, value } }) => {
    setQuickForm((current) => ({ ...current, [name]: value }));
  };

  const handleEstimateChange = ({ target: { name, value } }) => {
    setEstimateForm((current) => ({ ...current, [name]: value }));
  };

  const submitQuick = (event) => {
    event.preventDefault();
    window.location.href = quickFormHref;
  };

  const submitEstimate = (event) => {
    event.preventDefault();
    window.location.href = estimateFormHref;
  };

  return (
    <div className="atelierPage">
      <header className={`headerBar ${isScrolled ? "headerBar--scrolled" : ""}`}>
        <div className="wrap headerBar__inner">
          <a className="brandLockup" href="#home" aria-label="Empire Fence home">
            <img src="/images/logo.png" alt="Empire Fence logo" />
            <div>
              <strong>{BUSINESS.name}</strong>
              <span>{BUSINESS.location}</span>
            </div>
          </a>

          <nav className="siteNav" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="headerBar__actions">
            <a className="linkChip" href={BUSINESS.phoneHref}>
              {BUSINESS.phoneDisplay}
            </a>
            <a className="primaryButton" href="#book">
              Book visit
            </a>
          </div>

          <button
            type="button"
            className={`menuButton ${menuOpen ? "menuButton--open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen ? (
          <div className="mobileMenu wrap">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="linkChip" href={BUSINESS.phoneHref} onClick={() => setMenuOpen(false)}>
              Call now
            </a>
            <a className="primaryButton" href="#estimate" onClick={() => setMenuOpen(false)}>
              Get quote
            </a>
          </div>
        ) : null}
      </header>

      <main>
        <section className="heroStudio" id="home">
          <div className="wrap heroStudio__grid">
            <div className="heroStudio__copy">
              <p className="eyebrow">Jurupa Valley fence contractor</p>
              <h1>Fence and gate work with a cleaner finish.</h1>
              <p>
                Privacy, security, frontage upgrades, and outdoor installation work across Jurupa Valley and nearby Inland Empire cities.
              </p>
              <div className="heroStudio__actions">
                <a className="primaryButton" href="#estimate">
                  Request a quote
                </a>
                <a className="secondaryButton" href="#services">
                  View services
                </a>
              </div>
              <div className="metricRow">
                {heroStats.map((item) => (
                  <article key={item.label} className="metricPill">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="heroStudio__visual">
              <img src="/images/hero-fence.jpg" alt="Empire Fence wrought iron installation" />
              <div className="heroStudio__card">
                <span>Available</span>
                <strong>{BUSINESS.hours}</strong>
                <p>Fence installs, gate work, driveways, patios, turf, and block walls.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="storyBand" id="about">
          <div className="wrap storyBand__grid">
            <div className="storyBand__copy">
              <SectionLead eyebrow="About Empire Fence" title="Built for properties that need cleaner lines, stronger coverage, and less back-and-forth." />
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <form className="quotePanel quotePanel--light" onSubmit={submitQuick}>
              <SectionLead eyebrow="Quick estimate" title="Get pricing started." copy="A few project basics are enough for the team to review the scope and follow up." />
              <div className="fieldMatrix">
                <label><span>First name</span><input name="firstName" value={quickForm.firstName} onChange={handleQuickChange} required /></label>
                <label><span>Last name</span><input name="lastName" value={quickForm.lastName} onChange={handleQuickChange} required /></label>
                <label><span>Email</span><input name="email" type="email" value={quickForm.email} onChange={handleQuickChange} required /></label>
                <label><span>Phone</span><input name="phone" value={quickForm.phone} onChange={handleQuickChange} required /></label>
                <label><span>Address</span><input name="address" value={quickForm.address} onChange={handleQuickChange} /></label>
                <label><span>City</span><input name="city" value={quickForm.city} onChange={handleQuickChange} /></label>
                <label><span>State</span><input name="state" value={quickForm.state} onChange={handleQuickChange} /></label>
                <label><span>Zip</span><input name="zip" value={quickForm.zip} onChange={handleQuickChange} /></label>
                <label className="fieldMatrix__full"><span>Project notes</span><textarea name="notes" rows="4" value={quickForm.notes} onChange={handleQuickChange} /></label>
              </div>
              <button className="primaryButton primaryButton--wide" type="submit">Send estimate request</button>
            </form>
          </div>
        </section>

        <section className="proofStudio">
          <div className="wrap">
            <SectionLead eyebrow="Customer reviews" title="The kind of feedback that makes the next call easier." centered />
            <div className="proofStudio__grid">
              {proofCards.map((item) => (
                <article key={item.title} className="proofTile">
                  <img src={item.image} alt={item.title} />
                  <div className="proofTile__overlay">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="proofLinks">
              <a href={BUSINESS.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a href={BUSINESS.yelp} target="_blank" rel="noreferrer">Yelp</a>
              <a href={BUSINESS.google} target="_blank" rel="noreferrer">Google</a>
            </div>
            <div className="testimonialRail">
              {testimonials.map((item) => (
                <article key={item.quote} className="testimonialCard">
                  <p>{item.quote}</p>
                  <span>{item.source}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="serviceStudio" id="services">
          <div className="wrap serviceStudio__grid">
            <div className="serviceStudio__lead">
              <SectionLead eyebrow="Services" title="Core work, clearly scoped." copy="The offering stays simple: privacy, security, frontage upgrades, gates, and exterior improvements that can be handled under one contractor." />
            </div>
            <div className="serviceStudio__cards">
              {services.map((service, index) => (
                <article key={service.title} className="serviceTile">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reasonStudio">
          <div className="wrap reasonStudio__grid">
            <SectionLead eyebrow="Why choose Empire Fence Inc." title="What clients are really buying is less friction." />
            <div className="reasonStudio__stack">
              {reasons.map((item, index) => (
                <article key={item.title} className="reasonTile">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industryStudio">
          <div className="wrap">
            <SectionLead eyebrow="Project types" title="Work that fits residential, commercial, education, and industrial sites." centered />
            <div className="industryStudio__grid">
              {industries.map((item) => (
                <article key={item.title} className="industryTile">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="statementStudio">
          <div className="wrap statementStudio__panel">
            <div>
              <p className="eyebrow">Premier provider</p>
              <h2>Built to make the property feel more complete, more secure, and easier to manage.</h2>
              <p>That is the value underneath the install: cleaner boundaries, stronger frontage, and fewer loose ends once the project is done.</p>
            </div>
            <a className="primaryButton" href="#estimate">Contact us</a>
          </div>
        </section>

        <section className="statStudio">
          <div className="wrap statStudio__grid">
            {stats.map((item) => (
              <article key={item.label} className="statTile">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="ctaStudio">
          <div className="wrap ctaStudio__panel">
            <div>
              <p className="eyebrow">Trusted fencing solutions</p>
              <h2>Need a cleaner estimate, stronger curb appeal, or better perimeter security?</h2>
            </div>
            <a className="secondaryButton secondaryButton--light" href="#estimate">Start your project</a>
          </div>
        </section>
        <section className="galleryStudio" id="gallery">
          <div className="wrap">
            <SectionLead eyebrow="Gallery" title="Selected project work from the field." centered />
            <div className="galleryStudio__grid">
              {galleryImages.map((image, index) => (
                <figure key={`${image.alt}-${index}`} className={`galleryTile ${image.frame}`}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="faqStudio" id="faq">
          <div className="wrap faqStudio__grid">
            <SectionLead eyebrow="FAQ" title="Clear answers before the project moves forward." />
            <div className="faqStudio__list">
              {faqs.map((item) => (
                <details key={item.question} className="faqCard">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="areaStudio" id="areas">
          <div className="wrap areaStudio__grid">
            <div className="areaStudio__copy">
              <SectionLead eyebrow="Areas we serve" title="Coverage across the Inland Empire." />
              <div className="areaStudio__chips">
                {areas.map((area) => (
                  <article key={area} className="areaChip">
                    <strong>{area}</strong>
                  </article>
                ))}
              </div>
            </div>
            <div className="areaStudio__mapStack">
              <div className="mapPanel">
                <iframe
                  src={BUSINESS.mapEmbedSrc}
                  title="Empire Fence service area map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <article className="contactStudio">
                <p className="eyebrow">Contact</p>
                <h3>Need clarity before you book?</h3>
                <p>If you are still comparing scope, timing, or material options, start here and the team can walk the job with you.</p>
                <div className="contactStudio__stack">
                  <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
                  <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
                  <a href={BUSINESS.mapHref} target="_blank" rel="noreferrer">{BUSINESS.location}</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="closingStudio" id="estimate">
          <div className="wrap closingStudio__grid">
            <div className="closingStudio__quote">
              <SectionLead eyebrow="Free estimate" title="Send the scope." copy="Share the basics and the team can review the job, answer questions, and map out the next step." />
              <form className="quotePanel quotePanel--dark" onSubmit={submitEstimate}>
                <div className="fieldMatrix fieldMatrix--compact">
                  <label><span>Name</span><input name="name" value={estimateForm.name} onChange={handleEstimateChange} required /></label>
                  <label><span>Phone</span><input name="phone" value={estimateForm.phone} onChange={handleEstimateChange} required /></label>
                  <label><span>Email</span><input name="email" type="email" value={estimateForm.email} onChange={handleEstimateChange} required /></label>
                  <label>
                    <span>Service</span>
                    <select name="service" value={estimateForm.service} onChange={handleEstimateChange} required>
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="fieldMatrix__full"><span>Project details</span><textarea name="details" rows="6" value={estimateForm.details} onChange={handleEstimateChange} /></label>
                </div>
                <button className="primaryButton primaryButton--wide" type="submit">Send request</button>
              </form>
            </div>

            <div className="closingStudio__booking" id="book">
              <SectionLead eyebrow="Book a visit" title="Use the live calendar." copy="If you already know you want a walkthrough, hold a time and let the team confirm the visit details from there." />
              <div className="bookingStudio">
                <iframe
                  src={BOOKING_WIDGET.iframeSrc}
                  id={BOOKING_WIDGET.iframeId}
                  title="Empire Fence booking calendar"
                  scrolling="no"
                  style={{ width: "100%", border: "none", overflow: "hidden" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footerStudio">
        <div className="wrap footerStudio__grid">
          <div className="footerStudio__brand">
            <img src="/images/logo.png" alt="Empire Fence logo" />
            <p>Empire Fence Inc. is a leading provider of premium fencing and outdoor solutions in Jurupa Valley and beyond.</p>
          </div>
          <div className="footerStudio__column">
            <strong>Quick links</strong>
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div className="footerStudio__column">
            <strong>Contact</strong>
            <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
            <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            <a href={BUSINESS.mapHref} target="_blank" rel="noreferrer">{BUSINESS.location}</a>
          </div>
          <div className="footerStudio__column">
            <strong>Profiles</strong>
            <a href={BUSINESS.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={BUSINESS.yelp} target="_blank" rel="noreferrer">Yelp</a>
            <a href={BUSINESS.google} target="_blank" rel="noreferrer">Google</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
