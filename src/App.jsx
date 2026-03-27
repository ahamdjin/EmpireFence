import { useEffect, useMemo, useState } from "react";

const BUSINESS = {
  name: "Empire Fence Inc",
  phoneDisplay: "(951) 398-2016",
  phoneHref: "tel:9513982016",
  email: "solution.gf@gmail.com",
  emailHref: "mailto:solution.gf@gmail.com",
  location: "Jurupa Valley, CA",
  hours: "Mon-Sat / 7 AM-7 PM",
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

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#gallery" },
  { label: "Coverage", href: "#areas" },
  { label: "Quote", href: "#estimate" },
  { label: "FAQ", href: "#faq" },
];

const HERO_FACTS = [
  { value: "40+", label: "years in the field" },
  { value: "Free", label: "estimates" },
  { value: "Inland Empire", label: "service reach" },
];

const STORY_POINTS = [
  {
    title: "Fence first. Exterior scope if needed.",
    body:
      "Vinyl, wood, chain link, wrought iron, gates, and the supporting exterior upgrades that keep the final perimeter result coherent.",
  },
  {
    title: "Cleaner line work and less project drag.",
    body:
      "The value is not just material. It is straighter runs, stronger gate alignment, quicker answers, and a finish that still reads clean later.",
  },
];

const SERVICE_ROWS = [
  {
    number: "01",
    title: "Wrought iron fencing",
    copy:
      "Decorative frontage, stronger security presence, and gate pairings that make the property read more intentional from the street.",
    detail: "Best for curb appeal, visible perimeter work, and entry sequences that need to feel finished.",
    image: "/images/hero-fence.jpg",
    chips: ["Frontage", "Decorative security", "Custom gates"],
    tone: "dark",
  },
  {
    number: "02",
    title: "Vinyl and wood fencing",
    copy:
      "Residential privacy installs built around clean lines, durable material choices, and a calmer finished look in the yard or side run.",
    detail: "The right fit when enclosure, maintenance, and the overall appearance matter equally.",
    image: "/images/detail-fence.jpg",
    chips: ["Privacy", "Residential", "Low maintenance"],
    tone: "light",
  },
  {
    number: "03",
    title: "Chain link and perimeter control",
    copy:
      "Practical lot coverage, side-yard runs, utility edges, and commercial boundary work where function and access matter first.",
    detail: "Built for cleaner coverage, faster installation, and straightforward perimeter control.",
    image: "/images/hero-fence.jpg",
    chips: ["Commercial", "Utility zones", "Fast coverage"],
    tone: "light",
  },
  {
    number: "04",
    title: "Gates and exterior scope",
    copy:
      "Manual and automatic gates, repair and alignment work, plus turf, walls, patios, and related exterior upgrades when the fence is only part of the project.",
    detail: "Useful when the perimeter needs to be solved as one coordinated scope, not a set of separate jobs.",
    image: "/images/detail-fence.jpg",
    chips: ["Access", "Walls + patios", "Full perimeter scope"],
    tone: "accent",
  },
];

const PROJECTS = [
  {
    title: "Street-facing iron work",
    copy: "Higher-visibility frontage with decorative linework and tighter finish detail.",
    image: "/images/hero-fence.jpg",
    variant: "tall",
    position: "56% center",
  },
  {
    title: "Closer finish quality",
    copy: "The detail decisions that keep the install reading clean later.",
    image: "/images/detail-fence.jpg",
    variant: "wide",
    position: "center center",
  },
  {
    title: "Residential perimeter",
    copy: "Privacy, access, and stronger edge definition around the property.",
    image: "/images/hero-fence.jpg",
    variant: "square",
    position: "36% center",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Faster communication",
    copy: "Quick answers, clearer scope, and less drift once the job starts moving.",
  },
  {
    title: "Field-tested judgment",
    copy: "Material and layout decisions improve when the crew already knows the tricky version of the work.",
  },
  {
    title: "Finish that still reads clean later",
    copy: "Gate alignment, corners, transitions, and edge control are treated as part of the work, not leftovers.",
  },
];

const PROCESS = [
  "Walk the property and set the line.",
  "Lock the material, access, and details.",
  "Install with cleaner alignment and finish.",
];

const AREAS = [
  "Jurupa Valley",
  "Riverside",
  "Ontario",
  "Chino",
  "Rancho Cucamonga",
  "Fontana",
  "San Bernardino",
];

const FAQS = [
  {
    question: "What fence types do you install?",
    answer:
      "Empire Fence handles wrought iron, vinyl, wood, chain link, gate work, and select exterior upgrades tied to the perimeter project.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. The current business positioning is built around direct quote requests and free estimates.",
  },
  {
    question: "Can you handle residential and commercial work?",
    answer:
      "Yes. The business presents itself for residential, commercial, education, and industrial property work across the Inland Empire.",
  },
  {
    question: "Do you only build fences?",
    answer:
      "No. Gates, walls, patios, turf, and surrounding exterior work can stay inside the same overall scope when needed.",
  },
  {
    question: "Is there warranty coverage?",
    answer:
      "The current business messaging references a one-year warranty. Exact warranty detail should be confirmed during the estimate for the specific project.",
  },
];

function buildMailto(values) {
  const body = [
    ["Name", values.name],
    ["Phone", values.phone],
    ["Email", values.email],
    ["Service", values.service],
    ["Project details", values.details],
  ]
    .map(([label, value]) => `${label}: ${value || ""}`)
    .join("\n");

  return `${BUSINESS.emailHref}?subject=${encodeURIComponent(`Estimate request - ${BUSINESS.name}`)}&body=${encodeURIComponent(body)}`;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroShift, setHeroShift] = useState(0);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });

  const quoteMailto = useMemo(() => buildMailto(quoteForm), [quoteForm]);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setIsScrolled(top > 18);
      setHeroShift(Math.min(top * 0.12, 44));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10%" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const chatScriptId = "empire-chat-widget";
    if (!document.getElementById(chatScriptId)) {
      const script = document.createElement("script");
      script.id = chatScriptId;
      script.src = CHAT_WIDGET.loaderSrc;
      script.async = true;
      script.dataset.resourcesUrl = CHAT_WIDGET.resourcesUrl;
      script.dataset.widgetId = CHAT_WIDGET.widgetId;
      document.body.appendChild(script);
    }

    const bookingScriptId = "empire-booking-widget";
    if (!document.getElementById(bookingScriptId)) {
      const script = document.createElement("script");
      script.id = bookingScriptId;
      script.src = BOOKING_WIDGET.scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuoteForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className={`page ${isScrolled ? "page--scrolled" : ""}`}>
      <header className="header">
        <div className="header__inner">
          <a className="brand" href="#top" aria-label={BUSINESS.name}>
            <img src="/images/logo.png" alt={`${BUSINESS.name} logo`} />
            <div>
              <strong>{BUSINESS.name}</strong>
              <span>{BUSINESS.location}</span>
            </div>
          </a>

          <button
            type="button"
            className={`menuButton ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="headerCta headerCta--ghost" href={BUSINESS.phoneHref}>
              Call
            </a>
            <a className="headerCta" href="#booking">
              Book
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__noise" />
          <div className="hero__inner">
            <div className="hero__copy reveal is-visible">
              <p className="kicker kicker--light">Fence and gate contractor / Inland Empire</p>
              <h1>
                Fence work
                <br />
                that reads
                <br />
                premium.
              </h1>
              <p className="hero__lede">
                Empire Fence installs wrought iron, vinyl, wood, chain link, and gate
                systems with a cleaner project rhythm, stronger frontage, and less hassle
                once the work starts.
              </p>

              <div className="hero__actions">
                <a className="primaryAction" href="#estimate">
                  Start the estimate
                </a>
                <a className="textAction" href="#gallery">
                  View selected work
                </a>
              </div>
            </div>

            <div className="hero__visual reveal is-visible" style={{ transform: `translateY(${heroShift}px)` }}>
              <div className="heroVisual heroVisual--main">
                <img src="/images/hero-fence.jpg" alt="Empire Fence wrought iron install" />
              </div>
              <div className="heroVisual heroVisual--detail">
                <img src="/images/detail-fence.jpg" alt="Fence detail close-up" />
              </div>
              <div className="heroNote heroNote--top">
                <span>Open hours</span>
                <strong>{BUSINESS.hours}</strong>
              </div>
              <div className="heroNote heroNote--bottom">
                <span>Primary scope</span>
                <strong>Fence installs, gates, and perimeter upgrades</strong>
              </div>
            </div>
          </div>

          <div className="hero__rail reveal">
            {HERO_FACTS.map((fact) => (
              <article key={fact.label} className="railCard">
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto" id="about">
          <div className="manifesto__inner">
            <div className="manifesto__intro reveal">
              <p className="kicker">Why Empire Fence</p>
              <p>
                The business content is simple. The experience should not be. This section
                shifts the site into a calmer, more architectural rhythm.
              </p>
              <a href="#services">See the core scopes</a>
            </div>

            <div className="manifesto__statement reveal">
              <h2>
                Built for properties that need the line work, gate swing, and finish detail to
                feel resolved.
              </h2>
              <div className="manifesto__details">
                {STORY_POINTS.map((point) => (
                  <article key={point.title}>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="sectionHead reveal">
            <p className="kicker">Services</p>
            <h2>Fewer modules. Bigger service moments. Stronger hierarchy.</h2>
          </div>

          <div className="services__rows">
            {SERVICE_ROWS.map((service, index) => (
              <article
                key={service.title}
                className={`serviceRow serviceRow--${service.tone} ${index % 2 === 1 ? "serviceRow--reverse" : ""} reveal`}
              >
                <div className="serviceRow__visual">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="serviceRow__body">
                  <span className="serviceRow__number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <small>{service.detail}</small>
                  <div className="serviceRow__chips">
                    {service.chips.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects" id="gallery">
          <div className="projects__inner">
            <div className="sectionHead reveal">
              <p className="kicker kicker--light">Selected work</p>
              <h2>Premium framing, cleaner crop choices, and less template noise.</h2>
            </div>

            <div className="projects__grid">
              {PROJECTS.map((project) => (
                <article key={project.title} className={`projectCard projectCard--${project.variant} reveal`}>
                  <div className="projectCard__media">
                    <img src={project.image} alt={project.title} style={{ objectPosition: project.position }} />
                  </div>
                  <div className="projectCard__copy">
                    <h3>{project.title}</h3>
                    <p>{project.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof">
          <div className="proof__inner">
            <div className="proof__lead reveal">
              <p className="kicker">Why the work closes</p>
              <h2>Cleaner process. Better trust. Less friction for the customer.</h2>
            </div>

            <div className="proof__grid">
              <div className="proof__cards">
                {DIFFERENTIATORS.map((item) => (
                  <article key={item.title} className="proofCard reveal">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>

              <aside className="proofAside reveal">
                <blockquote>
                  “I spoke to George, got an estimate the same day, and the work was scheduled
                  and completed within days.”
                </blockquote>
                <span>Yelp review</span>

                <div className="processList">
                  {PROCESS.map((step, index) => (
                    <article key={step}>
                      <strong>{`0${index + 1}`}</strong>
                      <p>{step}</p>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="coverage" id="areas">
          <div className="coverage__inner">
            <div className="coverage__copy reveal">
              <p className="kicker">Coverage</p>
              <h2>Jurupa Valley base. Inland Empire reach.</h2>
              <p>
                The geography is straightforward. If the property sits in or around the Inland
                Empire, the scope can usually be reviewed quickly and moved forward from there.
              </p>
              <div className="coverage__chips">
                {AREAS.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
              <div className="coverage__links">
                <a href={BUSINESS.google} target="_blank" rel="noreferrer">
                  Google reviews
                </a>
                <a href={BUSINESS.yelp} target="_blank" rel="noreferrer">
                  Yelp profile
                </a>
                <a href={BUSINESS.mapHref} target="_blank" rel="noreferrer">
                  Open map
                </a>
              </div>
            </div>

            <div className="coverage__map reveal">
              <iframe
                title="Empire Fence service area map"
                src={BUSINESS.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="ctaBand" id="estimate">
          <div className="ctaBand__head reveal">
            <p className="kicker kicker--light">Estimate / booking</p>
            <h2>Start with the scope. Book if the schedule already makes sense.</h2>
          </div>

          <div className="ctaBand__grid">
            <article className="quotePanel reveal">
              <div className="panelHead">
                <p>Quote request</p>
                <strong>Enough detail to move the conversation forward quickly.</strong>
              </div>

              <form className="quoteForm" action={quoteMailto} method="post">
                <div className="quoteForm__grid">
                  <label>
                    <span>Name</span>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={quoteForm.name}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      value={quoteForm.phone}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={quoteForm.email}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <span>Service</span>
                    <select name="service" value={quoteForm.service} onChange={handleInputChange}>
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
                    placeholder="Property, rough scope, and anything that matters."
                    rows="5"
                    value={quoteForm.details}
                    onChange={handleInputChange}
                  />
                </label>
                <button type="submit" className="primaryAction primaryAction--full">
                  Send request
                </button>
              </form>
            </article>

            <article className="bookingPanel reveal" id="booking">
              <div className="panelHead panelHead--light">
                <p>Book directly</p>
                <strong>Keep the live calendar visible and framed like part of the design.</strong>
              </div>
              <div className="bookingPanel__frame">
                <iframe
                  src={BOOKING_WIDGET.iframeSrc}
                  title="Book an Empire Fence appointment"
                  style={{ width: "100%", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id={BOOKING_WIDGET.iframeId}
                />
              </div>
            </article>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="faq__inner">
            <div className="sectionHead reveal">
              <p className="kicker">FAQ</p>
              <h2>Short answers before the customer calls.</h2>
            </div>

            <div className="faq__list">
              {FAQS.map((faq, index) => (
                <details className="faqItem reveal" key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <strong>+</strong>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src="/images/logo.png" alt={`${BUSINESS.name} logo`} />
            <div>
              <strong>{BUSINESS.name}</strong>
              <span>{BUSINESS.location}</span>
            </div>
          </div>

          <div className="footer__links">
            <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
            <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            <a href={BUSINESS.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={BUSINESS.yelp} target="_blank" rel="noreferrer">
              Yelp
            </a>
          </div>
        </div>
      </footer>

      <div
        data-chat-widget
        data-widget-id={CHAT_WIDGET.widgetId}
        data-location-id={CHAT_WIDGET.locationId}
      />
    </div>
  );
}
