import { useEffect, useMemo, useState } from "react";

const COMPANY = {
  name: "Empire Fence Inc",
  phoneDisplay: "(951) 398-2016",
  phoneHref: "tel:9513982016",
  email: "solution.gf@gmail.com",
  emailHref: "mailto:solution.gf@gmail.com",
  location: "Jurupa Valley, CA",
  mapHref: "https://maps.app.goo.gl/xRa6wkZfcRGdspvU6",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Reliable%20Fence%20Inc.%20Fontana%2C%20CA%2C%20USA&t=m&z=9&output=embed&iwloc=near",
  hours: "Mon-Sat · 7 AM-7 PM",
  heroTitle: "Best Fence Service in Jurupa Valley CA",
  heroBody:
    "From initial consultation to final installation, we work closely with our clients every step of the way, offering expert guidance and superior craftsmanship. Whether your goals are to improve curb appeal, increase property security, or create a secure outdoor area for your family, you can rely on Empire Fence Inc. to provide outstanding results that go above and beyond your expectations.",
  topBlurb:
    "Empire Fence Inc. is a leading provider of premium fencing and outdoor solutions in Jurupa Valley and beyond.",
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

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#estimate" },
];

const topContacts = [
  { label: COMPANY.phoneDisplay, href: COMPANY.phoneHref },
  { label: COMPANY.email, href: COMPANY.emailHref },
  { label: COMPANY.location, href: COMPANY.mapHref },
];

const socialLinks = [
  { label: "Facebook", href: COMPANY.facebook },
  { label: "Yelp", href: COMPANY.yelp },
  { label: "Google", href: COMPANY.google },
];

const introParagraphs = [
  "Empire Fence Inc. offers a comprehensive range of top-quality fencing and outdoor installation solutions in Jurupa Valley CA to meet the diverse needs of our clients. We provide solutions to fit every style and budget, ranging from sturdy vinyl fences to traditional wood fences, adaptable chain link fences to exquisite wrought iron fences. Our skilled team is adept in tailoring solutions to each project's particular requirements, guaranteeing a flawless fit and smooth integration with your home.",
  "In addition to our wide selection of fencing options, we also provide expert installation services for turf, cinder block walls, driveways, and patios, helping you transform your outdoor space into a functional and inviting retreat. Empire Fence Inc.'s rigorous attention to detail, unshakable devotion to quality, and unwavering dedication to customer satisfaction make us your dependable partner for all your fence and outdoor installation needs. Let us help you bring your vision to life and create the outdoor oasis you've always dreamed of.",
];

const serviceHighlights = [
  {
    title: "Vinyl Fence",
    image: "/images/hero-fence.jpg",
    copy: "Low-maintenance privacy lines with a cleaner finish and stronger long-term durability.",
  },
  {
    title: "Chain Link Fence",
    image: "/images/detail-fence.jpg",
    copy: "Reliable perimeter control for homes, commercial lots, and utility spaces.",
  },
];

const services = [
  {
    title: "Vinyl Fence",
    description: "Privacy, perimeter definition, and low-maintenance exterior upgrades.",
    image: "/images/empire-gallery-1.webp",
  },
  {
    title: "Chain Link Fence",
    description: "Straightforward security fencing for residential and commercial properties.",
    image: "/images/empire-gallery-2.webp",
  },
  {
    title: "Wrought Iron Fence",
    description: "Decorative frontage with strength, visibility, and durable framing.",
    image: "/images/hero-fence.jpg",
  },
  {
    title: "Wood Fence",
    description: "Classic backyard enclosure with custom height and style options.",
    image: "/images/empire-gallery-3.webp",
  },
  {
    title: "Custom Fence",
    description: "Project-specific layouts built around the property and use case.",
    image: "/images/empire-gallery-4.webp",
  },
  {
    title: "Turf Installation",
    description: "Low-upkeep outdoor surfaces that clean up the full yard presentation.",
    image: "/images/empire-gallery-3.webp",
  },
  {
    title: "Cinder Block Walls",
    description: "Solid boundary work with privacy, structure, and long-term durability.",
    image: "/images/empire-gallery-4.webp",
  },
  {
    title: "Driveway and Patio",
    description: "Concrete and hardscape work that ties the front and back exterior together.",
    image: "/images/detail-fence.jpg",
  },
];

const reasons = [
  {
    title: "Expertise and Experience",
    body: "Bringing a plethora of experience to every project, Empire Fence Inc. has years of experience in the fence sector. Our team consists of skilled professionals who have a deep understanding of various fencing materials, installation techniques, and design trends. Whether you're looking for a simple chain link fence or a custom wrought iron masterpiece, our experience ensures that your project is completed to the highest standards of quality and craftsmanship.",
  },
  {
    title: "Personalized Service",
    body: "At Empire Fence Inc., we believe in providing personalized service tailored to each client's specific needs and preferences. From the initial consultation to the final installation, our team takes the time to understand your vision, budget, and timeline, ensuring that every aspect of your project is executed exactly as you envision. Our objective is to build long-lasting relationships with our clients by being transparent, trustworthy, and providing excellent service.",
  },
  {
    title: "Quality Materials and Workmanship",
    body: "Whether it's premium vinyl fencing, sturdy chain link fencing, or elegant wrought iron designs, we source materials from trusted suppliers and utilize advanced techniques to deliver superior results. Our attention to detail and commitment to excellence guarantee that your fence will not only enhance the aesthetics of your property but also provide reliable security and protection for years to come.",
  },
  {
    title: "Customer Satisfaction Guaranteed",
    body: "We strive to go above and beyond our client's expectations with each job and stand behind the work we do. From the time you get in touch with us until your installation is finished, we're committed to making the process easy and stress-free for you. We intend to fulfill your expectations and then some, so that you are happy with the finished product.",
  },
];

const industries = [
  { title: "Residential", note: "Frontage, side yards, privacy, and family-safe outdoor spaces." },
  { title: "Commercial", note: "Perimeter control, access points, and durable exterior boundary work." },
  { title: "Education", note: "Property separation, controlled entry, and clean grounds presentation." },
  { title: "Industry", note: "Functional fencing and durable site work for operational environments." },
];

const valuePoints = [
  { title: "Experience", body: "Over 40 years of experience" },
  { title: "Warranty", body: "1 Year Warranty" },
  { title: "Quality", body: "Best in craftsmanship" },
];

const galleryImages = [
  "/images/empire-gallery-1.webp",
  "/images/empire-gallery-2.webp",
  "/images/empire-gallery-3.webp",
  "/images/empire-gallery-4.webp",
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

const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#estimate" },
];

const footerServiceLinks = [
  { label: "Vinyl Fence", href: "#services" },
  { label: "Chain Link Fence", href: "#services" },
  { label: "Wrought Iron Fence", href: "#services" },
  { label: "Wood Fence", href: "#services" },
  { label: "Custom Fence", href: "#services" },
];

function buildMailto(subject, fields) {
  const body = fields.map(([label, value]) => `${label}: ${value || ""}`).join("\n");
  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [topForm, setTopForm] = useState({
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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const topFormHref = useMemo(
    () =>
      buildMailto("Empire Fence Quick Estimate Request", [
        ["First name", topForm.firstName],
        ["Last name", topForm.lastName],
        ["Email", topForm.email],
        ["Phone", topForm.phone],
        ["Address", topForm.address],
        ["City", topForm.city],
        ["State", topForm.state],
        ["Zip", topForm.zip],
        ["Message", topForm.message],
      ]),
    [topForm],
  );

  const estimateFormHref = useMemo(
    () =>
      buildMailto("Free Estimate Request - Empire Fence Inc", [
        ["First name", estimateForm.firstName],
        ["Last name", estimateForm.lastName],
        ["Email", estimateForm.email],
        ["Phone", estimateForm.phone],
        ["Message", estimateForm.message],
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

  const handleTopFormChange = (event) => {
    const { name, value } = event.target;
    setTopForm((current) => ({ ...current, [name]: value }));
  };

  const handleEstimateFormChange = (event) => {
    const { name, value } = event.target;
    setEstimateForm((current) => ({ ...current, [name]: value }));
  };

  const handleTopFormSubmit = (event) => {
    event.preventDefault();
    window.location.href = topFormHref;
  };

  const handleEstimateSubmit = (event) => {
    event.preventDefault();
    window.location.href = estimateFormHref;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="siteShell">
      <header className={`siteHeader ${isScrolled ? "isScrolled" : ""}`}>
        <div className="topBar">
          <div className="container topBarInner">
            <div className="topList" aria-label="Contact details">
              {topContacts.map((item) => (
                <a key={item.label} href={item.href} className="topChip">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="topList" aria-label="Social profiles">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="topChip">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="navShell">
            <a className="brand" href="#home" aria-label="Empire Fence home">
              <img src="/images/logo.png" alt="Empire Fence logo" />
              <div>
                <strong>{COMPANY.name}</strong>
                <span>{COMPANY.location}</span>
              </div>
            </a>

            <div className="headerDesktop">
              <nav className="navLinks" aria-label="Main navigation">
                {navLinks.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="navActions">
                <a className="button buttonGhost" href={COMPANY.phoneHref}>
                  Call Now
                </a>
                <a className="button buttonPrimary" href="#book">
                  Book
                </a>
              </div>
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
                <nav className="navLinksMobile" aria-label="Mobile navigation">
                  {navLinks.map((item) => (
                    <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="headerActionsMobile">
                  <a className="button buttonGhost" href={COMPANY.phoneHref} onClick={closeMobileMenu}>
                    Call Now
                  </a>
                  <a className="button buttonPrimary" href="#book" onClick={closeMobileMenu}>
                    Book Estimate
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main id="content">
        <section className="hero" id="home">
          <div className="heroBackdrop" />
          <div className="container heroInner">
            <div className="heroPanel">
              <p className="eyebrow">Fence and outdoor specialists</p>
              <h1>{COMPANY.heroTitle}</h1>
              <p className="heroBody">{COMPANY.heroBody}</p>
              <div className="heroActions">
                <a className="button buttonPrimary" href="#estimate">
                  Contact Us
                </a>
                <a className="button buttonGhost buttonGhostOnDark" href={COMPANY.phoneHref}>
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section introSection" id="about">
          <div className="container introGrid">
            <div className="sectionIntro introCopy">
              <p className="eyebrow">Reliable fencing and outdoor installation</p>
              <h2>Reliable Fencing and Outdoor Installation Solutions in Jurupa Valley CA</h2>
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a className="inlineLink" href="#services">
                Learn More
              </a>
            </div>

            <form className="quickEstimateCard" onSubmit={handleTopFormSubmit}>
              <div className="cardHeading">
                <p className="eyebrow">Start your free estimate</p>
                <h3>Send the scope.</h3>
              </div>

              <div className="formGrid">
                <label>
                  <input
                    name="firstName"
                    value={topForm.firstName}
                    onChange={handleTopFormChange}
                    placeholder="First Name"
                    required
                  />
                </label>
                <label>
                  <input
                    name="lastName"
                    value={topForm.lastName}
                    onChange={handleTopFormChange}
                    placeholder="Last Name"
                    required
                  />
                </label>
                <label>
                  <input name="email" type="email" value={topForm.email} onChange={handleTopFormChange} placeholder="Email" required />
                </label>
                <label>
                  <input name="phone" value={topForm.phone} onChange={handleTopFormChange} placeholder="Phone" required />
                </label>
                <label>
                  <input name="address" value={topForm.address} onChange={handleTopFormChange} placeholder="Address" />
                </label>
                <label>
                  <input name="city" value={topForm.city} onChange={handleTopFormChange} placeholder="City" />
                </label>
                <label>
                  <input name="state" value={topForm.state} onChange={handleTopFormChange} placeholder="State" />
                </label>
                <label>
                  <input name="zip" value={topForm.zip} onChange={handleTopFormChange} placeholder="Zip" />
                </label>
                <label className="fullWidth">
                  <textarea
                    name="message"
                    value={topForm.message}
                    onChange={handleTopFormChange}
                    placeholder="Message"
                    rows="4"
                  />
                </label>
                <button className="button buttonPrimary fullWidth" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="section reviewSection">
          <div className="container">
            <div className="sectionIntro centeredIntro">
              <p className="eyebrow">Our customer reviews</p>
              <h2>Trust layered through real local proof.</h2>
            </div>

            <div className="highlightGrid">
              {serviceHighlights.map((item) => (
                <article key={item.title} className="highlightCard">
                  <img src={item.image} alt={item.title} />
                  <div className="highlightOverlay">
                    <span>{item.title}</span>
                    <p>{item.copy}</p>
                    <a className="inlineLink inlineLinkLight" href="#estimate">
                      Contact Us
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="reviewRail">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="reviewPill">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section servicesSection" id="services">
          <div className="container">
            <div className="sectionIntro centeredIntro">
              <p className="eyebrow">Our services</p>
              <h2>Built for frontage, privacy, and clean exterior work.</h2>
            </div>

            <div className="serviceGalleryGrid">
              {services.map((service) => (
                <article key={service.title} className="serviceVisualCard">
                  <img src={service.image} alt={service.title} />
                  <div className="serviceVisualOverlay">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reasonsSection">
          <div className="container">
            <div className="sectionIntro centeredIntro narrowIntro">
              <p className="eyebrow">Why choose Empire Fence Inc?</p>
              <h2>Clear decisions. Better execution on site.</h2>
            </div>

            <div className="reasonStack">
              {reasons.map((item) => (
                <article key={item.title} className="reasonRow">
                  <div className="reasonMarker" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section industriesSection">
          <div className="container">
            <div className="sectionIntro centeredIntro narrowIntro">
              <p className="eyebrow">Industries</p>
              <h2>Some industries we work with</h2>
            </div>

            <div className="industryGrid">
              {industries.map((item) => (
                <article key={item.title} className="industryCard">
                  <span className="industryLine" />
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section statementSection">
          <div className="container statementCard">
            <div className="statementCopy">
              <p className="eyebrow">#1 Fencing Service Providers</p>
              <h2>Premier Fence and Outdoor Solutions Provider in Jurupa Valley CA</h2>
              <p>
                Empire Fence Inc. stands as the premier fence and outdoor solutions provider in Jurupa Valley CA,
                committed to enhancing the functionality, security, and aesthetics of residential and commercial
                properties. From stylish vinyl fences to robust wrought iron designs, our expert team delivers
                top-quality installations backed by years of industry experience and a dedication to customer
                satisfaction.
              </p>
            </div>
            <a className="button buttonPrimary" href="#estimate">
              Contact Us
            </a>
          </div>
        </section>

        <section className="section valueSection">
          <div className="container">
            <div className="sectionIntro centeredIntro narrowIntro">
              <p className="eyebrow">Why should you work with us?</p>
              <h2>Simple service promises backed by real execution.</h2>
            </div>

            <div className="valueGrid">
              {valuePoints.map((item) => (
                <article key={item.title} className="valueCard">
                  <span className="valueNumber">{item.title}</span>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section calloutSection">
          <div className="container calloutCard">
            <div>
              <p className="eyebrow">#1 Fencing Service Providers</p>
              <h2>Trusted Fencing Solutions in Jurupa Valley CA - Contact Us!</h2>
              <p>
                Our expertise lies in creating and erecting fences that not only improve your property's safety and
                privacy but also increase its overall worth. We have the knowledge and resources to satisfy your needs,
                whether you're looking for a sophisticated wrought iron fence for your house or a strong chain link
                fence for a business.
              </p>
            </div>
            <a className="button buttonLight" href="#estimate">
              Contact Us
            </a>
          </div>
        </section>

        <section className="section gallerySection" id="gallery">
          <div className="container">
            <div className="sectionIntro centeredIntro narrowIntro">
              <p className="eyebrow">Craftsmanship, quality, and service you can trust!</p>
              <h2>Selected project work from the field.</h2>
              <p>
                When you choose Empire Fence Inc., you can trust that you're receiving the utmost in quality,
                reliability, and customer satisfaction.
              </p>
            </div>

            <div className="galleryGrid">
              {galleryImages.map((image, index) => (
                <article key={image} className={`galleryCard galleryCard${index + 1}`}>
                  <img src={image} alt={`Empire Fence project ${index + 1}`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faqSection" id="faq">
          <div className="container faqLayout">
            <div className="sectionIntro faqIntroCopy">
              <p className="eyebrow">Frequently asked questions</p>
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

        <section className="section areasSection" id="areas">
          <div className="container areasGrid">
            <div className="areasCopy">
              <div className="sectionIntro">
                <p className="eyebrow">Areas we serve</p>
                <h2>Coverage across the Inland Empire.</h2>
              </div>

              <div className="areaGrid">
                {areas.map((area) => (
                  <article key={area} className="areaCard">
                    <h3>{area}</h3>
                  </article>
                ))}
              </div>
            </div>

            <div className="mapStack">
              <div className="mapCard">
                <iframe
                  src={COMPANY.mapEmbedSrc}
                  title="Empire Fence service area map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <article className="contactCard">
                <p className="eyebrow">Have any questions? Contact us:</p>
                <p>
                  Whether you're unsure about which fencing option is best for your property or need clarification on
                  our installation process, our knowledgeable team is ready to assist you. We value open communication
                  and transparency, which is why we are committed to providing you with the information and support you
                  need to make informed decisions about your outside initiatives.
                </p>
                <a className="button buttonPrimary" href="#estimate">
                  Contact Us
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section estimateSection" id="estimate">
          <div className="container estimateSuite">
            <div className="estimateCard">
              <div className="sectionIntro">
                <p className="eyebrow">Free estimate</p>
                <h2>Free Estimate</h2>
                <p>{COMPANY.topBlurb}</p>
              </div>

              <form className="estimateForm" onSubmit={handleEstimateSubmit}>
                <label>
                  <input
                    name="firstName"
                    value={estimateForm.firstName}
                    onChange={handleEstimateFormChange}
                    placeholder="First Name"
                    required
                  />
                </label>
                <label>
                  <input
                    name="lastName"
                    value={estimateForm.lastName}
                    onChange={handleEstimateFormChange}
                    placeholder="Last Name"
                    required
                  />
                </label>
                <label>
                  <input
                    name="email"
                    type="email"
                    value={estimateForm.email}
                    onChange={handleEstimateFormChange}
                    placeholder="Email"
                    required
                  />
                </label>
                <label>
                  <input name="phone" value={estimateForm.phone} onChange={handleEstimateFormChange} placeholder="Phone" required />
                </label>
                <label className="fullWidth">
                  <textarea
                    name="message"
                    value={estimateForm.message}
                    onChange={handleEstimateFormChange}
                    placeholder="Message"
                    rows="6"
                    required
                  />
                </label>
                <button className="button buttonPrimary fullWidth" type="submit">
                  Submit
                </button>
              </form>
            </div>

            <div className="bookingSectionCard" id="book">
              <div className="cardHeading">
                <p className="eyebrow">Book a visit</p>
                <h3>Live calendar for the fastest next step.</h3>
                <p>Use the calendar below to hold a time. The chat widget stays active if you want to ask questions first.</p>
              </div>
              <div className="bookingFrameShell">
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
        <div className="container footerGrid">
          <div className="footerAbout">
            <img src="/images/logo.png" alt="Empire Fence logo" />
            <p>{COMPANY.topBlurb}</p>
          </div>

          <div>
            <strong>Quick Links</strong>
            {footerQuickLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div>
            <strong>Services</strong>
            {footerServiceLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div>
            <strong>Contacts</strong>
            <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
            <a href={COMPANY.emailHref}>{COMPANY.email}</a>
            <a href={COMPANY.mapHref} target="_blank" rel="noreferrer">
              {COMPANY.location}
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
