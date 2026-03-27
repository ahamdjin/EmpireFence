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

const topContacts = [
  { label: BUSINESS.phoneDisplay, href: BUSINESS.phoneHref },
  { label: BUSINESS.email, href: BUSINESS.emailHref },
  { label: BUSINESS.location, href: BUSINESS.mapHref },
];

const socialLinks = [
  { label: "Facebook", href: BUSINESS.facebook },
  { label: "Yelp", href: BUSINESS.yelp },
  { label: "Google", href: BUSINESS.google },
];

const heroStats = [
  { value: "40+", label: "Years in craft" },
  { value: "Free", label: "Estimates" },
  { value: "3.9", label: "Yelp rating" },
];

const introParagraphs = [
  "Empire Fence Inc. offers a comprehensive range of top-quality fencing and outdoor installation solutions in Jurupa Valley CA to meet the diverse needs of our clients. We provide solutions to fit every style and budget, ranging from sturdy vinyl fences to traditional wood fences, adaptable chain link fences to exquisite wrought iron fences. Our skilled team is adept in tailoring solutions to each project's particular requirements, guaranteeing a flawless fit and smooth integration with your home.",
  "In addition to our wide selection of fencing options, we also provide expert installation services for turf, cinder block walls, driveways, and patios, helping you transform your outdoor space into a functional and inviting retreat. Empire Fence Inc.'s rigorous attention to detail, unshakable devotion to quality, and unwavering dedication to customer satisfaction make us your dependable partner for all your fence and outdoor installation needs. Let us help you bring your vision to life and create the outdoor oasis you've always dreamed of.",
];

const featureStrips = [
  {
    title: "Residential frontage",
    copy: "Privacy, clean boundary lines, and curb appeal upgrades built to last.",
    image: "/images/hero-fence.jpg",
  },
  {
    title: "Commercial perimeter",
    copy: "Durable installs for secure lots, gated access, and operational sites.",
    image: "/images/detail-fence.jpg",
  },
];

const services = [
  {
    title: "Vinyl Fence",
    description: "Low-maintenance privacy and clean lines for long-term curb appeal.",
    image: "/images/hero-fence.jpg",
  },
  {
    title: "Chain Link Fence",
    description: "Straightforward security coverage for homes, yards, and job sites.",
    image: "/images/detail-fence.jpg",
  },
  {
    title: "Wrought Iron Fence",
    description: "Decorative strength for front elevation, gates, and side yard lines.",
    image: "/images/hero-fence.jpg",
  },
  {
    title: "Wood Fence",
    description: "Traditional backyard enclosure with flexibility on height and finish.",
    image: "/images/detail-fence.jpg",
  },
  {
    title: "Custom Fence",
    description: "Project-specific layouts shaped around the property and use case.",
    image: "/images/hero-fence.jpg",
  },
  {
    title: "Turf Installation",
    description: "Clean, low-upkeep surfaces that finish the whole outdoor picture.",
    image: "/images/detail-fence.jpg",
  },
  {
    title: "Cinder Block Walls",
    description: "Hard boundary work for privacy, structure, and a cleaner edge.",
    image: "/images/detail-fence.jpg",
  },
  {
    title: "Driveways and Patios",
    description: "Concrete and hardscape work that ties the full exterior together.",
    image: "/images/hero-fence.jpg",
  },
];

const reasons = [
  {
    title: "Expertise and experience",
    body: "Bringing a plethora of experience to every project, Empire Fence Inc. has years of experience in the fence sector. Our team consists of skilled professionals who have a deep understanding of various fencing materials, installation techniques, and design trends. Whether you're looking for a simple chain link fence or a custom wrought iron masterpiece, our experience ensures that your project is completed to the highest standards of quality and craftsmanship.",
  },
  {
    title: "Personalized service",
    body: "At Empire Fence Inc., we believe in providing personalized service tailored to each client's specific needs and preferences. From the initial consultation to the final installation, our team takes the time to understand your vision, budget, and timeline, ensuring that every aspect of your project is executed exactly as you envision. Our objective is to build long-lasting relationships with our clients by being transparent, trustworthy, and providing excellent service.",
  },
  {
    title: "Quality materials and workmanship",
    body: "Whether it's premium vinyl fencing, sturdy chain link fencing, or elegant wrought iron designs, we source materials from trusted suppliers and utilize advanced techniques to deliver superior results. Our attention to detail and commitment to excellence guarantee that your fence will not only enhance the aesthetics of your property but also provide reliable security and protection for years to come.",
  },
  {
    title: "Customer satisfaction guaranteed",
    body: "We strive to go above and beyond our client's expectations with each job and stand behind the work we do. From the time you get in touch with us until your installation is finished, we're committed to making the process easy and stress-free for you. We intend to fulfill your expectations and then some, so that you are happy with the finished product.",
  },
];

const industries = [
  {
    title: "Residential",
    body: "Front yards, side yards, backyards, privacy zones, and family-safe spaces.",
  },
  {
    title: "Commercial",
    body: "Perimeter coverage, site definition, and access control for business properties.",
  },
  {
    title: "Education",
    body: "Boundary work and controlled site edges with a cleaner grounds presentation.",
  },
  {
    title: "Industry",
    body: "Durable fencing and exterior work for functional, high-traffic environments.",
  },
];

const valuePoints = [
  { value: "40+", label: "Years of experience" },
  { value: "1 Year", label: "Warranty coverage" },
  { value: "Best", label: "Craftsmanship standard" },
];

const galleryImages = [
  "/images/hero-fence.jpg",
  "/images/detail-fence.jpg",
  "/images/hero-fence.jpg",
  "/images/detail-fence.jpg",
  "/images/hero-fence.jpg",
  "/images/detail-fence.jpg",
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

const areas = [
  "Riverside, CA",
  "Ontario, CA",
  "Chino, CA",
  "Rancho Cucamonga, CA",
  "Fontana, CA",
  "San Bernardino, CA",
];

const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#estimate" },
];

const footerServiceLinks = ["Vinyl Fence", "Chain Link Fence", "Wrought Iron Fence", "Wood Fence", "Custom Fence"];

function buildMailto(subject, fields) {
  const body = fields.map(([label, value]) => `${label}: ${value || ""}`).join("\n");
  return `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickForm, setQuickForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    message: "",
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
        ["Project notes", quickForm.message],
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
        ["Project details", estimateForm.details],
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

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const close = () => setMobileMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [mobileMenuOpen]);

  const handleQuickFormChange = (event) => {
    const { name, value } = event.target;
    setQuickForm((current) => ({ ...current, [name]: value }));
  };

  const handleEstimateFormChange = (event) => {
    const { name, value } = event.target;
    setEstimateForm((current) => ({ ...current, [name]: value }));
  };

  const handleQuickFormSubmit = (event) => {
    event.preventDefault();
    window.location.href = quickFormHref;
  };

  const handleEstimateFormSubmit = (event) => {
    event.preventDefault();
    window.location.href = estimateFormHref;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="empirePage">
      <header className={`siteHeader ${isScrolled ? "siteHeader--scrolled" : ""}`}>
        <div className="utilityBar">
          <div className="shell utilityBar__inner">
            <div className="utilityBar__group">
              {topContacts.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="utilityBar__group utilityBar__socials">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="shell">
          <div className="mainNav">
            <a className="brand" href="#home" aria-label="Empire Fence home">
              <img src="/images/logo.png" alt="Empire Fence logo" />
              <div className="brand__copy">
                <strong>{BUSINESS.name}</strong>
                <span>{BUSINESS.location}</span>
              </div>
            </a>

            <nav className="mainNav__links" aria-label="Primary">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mainNav__actions">
              <a className="button button--ghost" href={BUSINESS.phoneHref}>
                Call
              </a>
              <a className="button button--primary" href="#book">
                Book
              </a>
            </div>

            <button
              type="button"
              className={`mobileToggle ${mobileMenuOpen ? "mobileToggle--open" : ""}`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {mobileMenuOpen ? (
            <div className="mobilePanel">
              <nav className="mobilePanel__links" aria-label="Mobile">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mobilePanel__actions">
                <a className="button button--ghost" href={BUSINESS.phoneHref} onClick={closeMobileMenu}>
                  Call Now
                </a>
                <a className="button button--primary" href="#estimate" onClick={closeMobileMenu}>
                  Get Quote
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main>
        <section className="heroSection" id="home">
          <div className="shell heroSection__inner">
            <div className="heroCopy">
              <p className="eyebrow">Fence and outdoor installation</p>
              <h1>Best fence service in Jurupa Valley, CA.</h1>
              <p className="heroCopy__body">
                From initial consultation to final installation, we work closely with our clients every step of the
                way, offering expert guidance and superior craftsmanship. Whether your goals are to improve curb
                appeal, increase property security, or create a secure outdoor area for your family, you can rely on
                Empire Fence Inc. to provide outstanding results that go above and beyond your expectations.
              </p>
              <div className="heroCopy__actions">
                <a className="button button--primary" href="#estimate">
                  Request a quote
                </a>
                <a className="button button--secondary" href="#book">
                  Book a visit
                </a>
              </div>
              <div className="heroStats">
                {heroStats.map((item) => (
                  <article key={item.label} className="heroStat">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="heroStage">
              <div className="heroStage__imageWrap">
                <img src="/images/hero-fence.jpg" alt="Empire Fence wrought iron project" />
              </div>
              <div className="heroStage__meta">
                <article>
                  <span>Service</span>
                  <strong>Fence installs and gate work</strong>
                </article>
                <article>
                  <span>Hours</span>
                  <strong>{BUSINESS.hours}</strong>
                </article>
                <article>
                  <span>Reviews</span>
                  <strong>Yelp profile</strong>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="contentSection aboutSection" id="about">
          <div className="shell splitSection">
            <div className="sectionLead">
              <p className="eyebrow">About Empire Fence</p>
              <h2>Reliable fencing and outdoor installation solutions in Jurupa Valley.</h2>
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <form className="formPanel formPanel--rich" onSubmit={handleQuickFormSubmit}>
              <div className="formPanel__header">
                <p className="eyebrow">Quick estimate</p>
                <h3>Start with the basics.</h3>
                <p>Name, address, and scope is enough to get the conversation moving.</p>
              </div>

              <div className="fieldGrid">
                <label>
                  <span>First name</span>
                  <input name="firstName" value={quickForm.firstName} onChange={handleQuickFormChange} required />
                </label>
                <label>
                  <span>Last name</span>
                  <input name="lastName" value={quickForm.lastName} onChange={handleQuickFormChange} required />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" value={quickForm.email} onChange={handleQuickFormChange} required />
                </label>
                <label>
                  <span>Phone</span>
                  <input name="phone" value={quickForm.phone} onChange={handleQuickFormChange} required />
                </label>
                <label>
                  <span>Address</span>
                  <input name="address" value={quickForm.address} onChange={handleQuickFormChange} />
                </label>
                <label>
                  <span>City</span>
                  <input name="city" value={quickForm.city} onChange={handleQuickFormChange} />
                </label>
                <label>
                  <span>State</span>
                  <input name="state" value={quickForm.state} onChange={handleQuickFormChange} />
                </label>
                <label>
                  <span>Zip</span>
                  <input name="zip" value={quickForm.zip} onChange={handleQuickFormChange} />
                </label>
                <label className="fieldGrid__full">
                  <span>Project notes</span>
                  <textarea name="message" rows="4" value={quickForm.message} onChange={handleQuickFormChange} />
                </label>
              </div>

              <button className="button button--primary button--full" type="submit">
                Send estimate request
              </button>
            </form>
          </div>
        </section>

        <section className="contentSection proofSection">
          <div className="shell">
            <div className="sectionHeading sectionHeading--center">
              <p className="eyebrow">Customer reviews</p>
              <h2>Local proof, cleaner execution, stronger trust.</h2>
            </div>
            <div className="featureStripGrid">
              {featureStrips.map((item) => (
                <article key={item.title} className="featureStrip">
                  <img src={item.image} alt={item.title} />
                  <div className="featureStrip__overlay">
                    <span>{item.title}</span>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="proofPills">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contentSection servicesSection" id="services">
          <div className="shell">
            <div className="sectionHeading">
              <p className="eyebrow">Services</p>
              <h2>Fence and outdoor work built around the installs people ask for first.</h2>
            </div>

            <div className="serviceGrid">
              {services.map((service) => (
                <article key={service.title} className="serviceCard">
                  <img src={service.image} alt={service.title} />
                  <div className="serviceCard__body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contentSection reasonSection">
          <div className="shell splitSection splitSection--top">
            <div className="sectionLead">
              <p className="eyebrow">Why choose Empire Fence Inc.</p>
              <h2>Experience, service, and cleaner project control.</h2>
            </div>

            <div className="reasonStack">
              {reasons.map((item, index) => (
                <article key={item.title} className="reasonItem">
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

        <section className="contentSection industriesSection">
          <div className="shell">
            <div className="sectionHeading sectionHeading--center">
              <p className="eyebrow">Industries</p>
              <h2>Some industries we work with.</h2>
            </div>

            <div className="industryGrid">
              {industries.map((item) => (
                <article key={item.title} className="industryCard">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contentSection statementSection">
          <div className="shell statementPanel">
            <div>
              <p className="eyebrow">Premier provider</p>
              <h2>Premier fence and outdoor solutions provider in Jurupa Valley, CA.</h2>
              <p>
                Empire Fence Inc. stands as the premier fence and outdoor solutions provider in Jurupa Valley CA,
                committed to enhancing the functionality, security, and aesthetics of residential and commercial
                properties.
              </p>
            </div>
            <a className="button button--primary" href="#estimate">
              Contact us
            </a>
          </div>
        </section>

        <section className="contentSection valuesSection">
          <div className="shell">
            <div className="sectionHeading sectionHeading--center">
              <p className="eyebrow">Why work with us</p>
              <h2>Clear proof points without the sales noise.</h2>
            </div>

            <div className="valueGrid">
              {valuePoints.map((item) => (
                <article key={item.label} className="valueCard">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contentSection calloutSection">
          <div className="shell calloutPanel">
            <div>
              <p className="eyebrow">Trusted fencing solutions</p>
              <h2>Need a cleaner estimate, stronger curb appeal, or better perimeter security?</h2>
            </div>
            <a className="button button--light" href="#estimate">
              Start your project
            </a>
          </div>
        </section>
        <section className="contentSection gallerySection" id="gallery">
          <div className="shell">
            <div className="sectionHeading sectionHeading--center">
              <p className="eyebrow">Gallery</p>
              <h2>Selected project work from the field.</h2>
            </div>

            <div className="galleryGrid">
              {galleryImages.map((image, index) => (
                <figure key={`${image}-${index}`} className={`galleryCard galleryCard--${(index % 6) + 1}`}>
                  <img src={image} alt={`Empire Fence project ${index + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contentSection faqSection" id="faq">
          <div className="shell splitSection splitSection--faq">
            <div className="sectionLead">
              <p className="eyebrow">FAQ</p>
              <h2>Clear answers before you commit to the project.</h2>
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
        </section>

        <section className="contentSection areaSection" id="areas">
          <div className="shell splitSection splitSection--areas">
            <div className="areaPanel">
              <div className="sectionHeading">
                <p className="eyebrow">Areas we serve</p>
                <h2>Coverage across the Inland Empire.</h2>
              </div>
              <div className="areaGrid">
                {areas.map((area) => (
                  <article key={area} className="areaCard">
                    <strong>{area}</strong>
                  </article>
                ))}
              </div>
            </div>

            <div className="mapColumn">
              <div className="mapFrame">
                <iframe
                  src={BUSINESS.mapEmbedSrc}
                  title="Empire Fence service area map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <article className="contactPanel">
                <p className="eyebrow">Contact</p>
                <h3>Need clarity before you book?</h3>
                <p>
                  Whether you're unsure about the right fence type, timeline, or installation approach, our team can
                  walk you through the options before the project starts.
                </p>
                <div className="contactPanel__stack">
                  <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
                  <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
                  <a href={BUSINESS.mapHref} target="_blank" rel="noreferrer">
                    {BUSINESS.location}
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contentSection closingSection" id="estimate">
          <div className="shell closingGrid">
            <div className="closingGrid__quote">
              <div className="sectionHeading">
                <p className="eyebrow">Free estimate</p>
                <h2>Send the scope.</h2>
                <p>Share the basics and the team can review the job, answer questions, and map out the next step.</p>
              </div>

              <form className="formPanel" onSubmit={handleEstimateFormSubmit}>
                <div className="fieldGrid fieldGrid--compact">
                  <label>
                    <span>Name</span>
                    <input name="name" value={estimateForm.name} onChange={handleEstimateFormChange} required />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input name="phone" value={estimateForm.phone} onChange={handleEstimateFormChange} required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input name="email" type="email" value={estimateForm.email} onChange={handleEstimateFormChange} required />
                  </label>
                  <label>
                    <span>Service</span>
                    <select name="service" value={estimateForm.service} onChange={handleEstimateFormChange} required>
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="fieldGrid__full">
                    <span>Project details</span>
                    <textarea name="details" rows="6" value={estimateForm.details} onChange={handleEstimateFormChange} />
                  </label>
                </div>

                <button className="button button--primary button--full" type="submit">
                  Send request
                </button>
              </form>
            </div>

            <div className="closingGrid__booking" id="book">
              <div className="sectionHeading">
                <p className="eyebrow">Book a visit</p>
                <h2>Use the live calendar.</h2>
                <p>The fastest path is to hold a time and let the team confirm the visit details from there.</p>
              </div>

              <div className="bookingPanel">
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

      <footer className="siteFooter">
        <div className="shell footerGrid">
          <div className="footerBrand">
            <img src="/images/logo.png" alt="Empire Fence logo" />
            <p>
              Empire Fence Inc. is a leading provider of premium fencing and outdoor solutions in Jurupa Valley and
              beyond.
            </p>
          </div>

          <div className="footerColumn">
            <strong>Quick links</strong>
            {footerQuickLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footerColumn">
            <strong>Services</strong>
            {footerServiceLinks.map((item) => (
              <a key={item} href="#services">
                {item}
              </a>
            ))}
          </div>

          <div className="footerColumn">
            <strong>Contact</strong>
            <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
            <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            <a href={BUSINESS.mapHref} target="_blank" rel="noreferrer">
              {BUSINESS.location}
            </a>
            <div className="footerSocials">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

