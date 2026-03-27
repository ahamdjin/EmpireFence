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

const NAVIGATION = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#gallery" },
  { label: "Coverage", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Quote", href: "#estimate" },
];

const HERO_FACTS = [
  { value: "40+", label: "Years of field work" },
  { value: "Free", label: "Estimate and site walk" },
  { value: "Inland", label: "Empire coverage" },
];

const STORY_POINTS = [
  {
    title: "Fence work first. Exterior scope if needed.",
    body:
      "Vinyl, wood, chain link, wrought iron, gates, and the surrounding upgrades that keep the final result coherent.",
  },
  {
    title: "Clear line work and cleaner project flow.",
    body:
      "The real value is not just materials. It is straight runs, aligned gates, faster answers, and a cleaner finish when the work wraps.",
  },
];

const SERVICES = [
  {
    title: "Wrought iron",
    description: "Decorative security with stronger frontage presence and custom gate pairing.",
    note: "Best for curb appeal, entry sequence, and visible perimeter work.",
    image: "/images/hero-fence.jpg",
    variant: "feature",
    tag: "Signature",
  },
  {
    title: "Vinyl fencing",
    description: "Low-maintenance privacy with a sharper finished edge for homes and side-yard resets.",
    note: "Clean look. Fast upkeep. Strong residential demand.",
    image: "",
    variant: "tall",
    tag: "Residential",
  },
  {
    title: "Chain link",
    description: "Functional perimeter coverage for lots, utility zones, commercial edges, and access control.",
    note: "Fast, practical, and built for clear coverage.",
    image: "/images/detail-fence.jpg",
    variant: "wide",
    tag: "Commercial",
  },
  {
    title: "Wood fencing",
    description: "Classic enclosure with custom height, board style, and a warmer material character.",
    note: "A strong fit for privacy and backyard enclosure.",
    image: "",
    variant: "plain",
    tag: "Privacy",
  },
  {
    title: "Gates and access",
    description: "Manual and automatic gate work, repairs, alignment, and better entry sequencing.",
    note: "Built around access, security, and cleaner daily use.",
    image: "",
    variant: "plain",
    tag: "Access",
  },
  {
    title: "Walls, turf, patios",
    description: "Supporting exterior work that keeps the property upgrade under one coordinated scope.",
    note: "Useful when the fence is only part of the bigger perimeter refresh.",
    image: "/images/detail-fence.jpg",
    variant: "accent",
    tag: "Extended scope",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Direct communication",
    copy: "Faster answers, cleaner scope decisions, and less project drift once work begins.",
  },
  {
    number: "02",
    title: "Field-tested judgment",
    copy: "Material and layout decisions improve when the crew has already seen the tricky version of the job before.",
  },
  {
    number: "03",
    title: "Detail that still reads well later",
    copy: "Lines, corners, gate swing, transitions, and finish work are treated as the point of the install, not the leftover.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Walk the property",
    body: "Start with the line, the gate need, the frontage, and what the fence actually has to do.",
  },
  {
    title: "Set scope and material",
    body: "Define the material, layout, and extras before the project starts moving.",
  },
  {
    title: "Build and finish cleanly",
    body: "Carry the install through with tighter alignment, cleaner edges, and a result that feels deliberate.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I spoke to George, got an estimate the same day, and the work was scheduled and completed within days.",
    source: "Yelp review",
  },
  {
    quote: "George was quick to answer questions, very professional, and the crew did a great job.",
    source: "Google review",
  },
  {
    quote: "Works well with all situations. Fence came out gorgeous.",
    source: "Google review",
  },
];

const GALLERY = [
  {
    src: "/images/hero-fence.jpg",
    alt: "Decorative black wrought iron fence",
    title: "Street-facing iron work",
    copy: "Strong frontage definition with a premium visual read.",
    variant: "portrait",
    position: "55% center",
  },
  {
    src: "/images/detail-fence.jpg",
    alt: "Fence detail close-up",
    title: "Closer finish quality",
    copy: "Detail matters more on the jobs people see every day.",
    variant: "landscape",
    position: "center center",
  },
  {
    src: "/images/hero-fence.jpg",
    alt: "Fence perimeter installation",
    title: "Residential perimeter",
    copy: "Privacy and cleaner line control around the property edge.",
    variant: "square",
    position: "34% center",
  },
  {
    src: "/images/detail-fence.jpg",
    alt: "Fence project finish detail",
    title: "Gate and trim work",
    copy: "The tighter details are what make the install feel complete.",
    variant: "square",
    position: "74% center",
  },
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
      "Empire Fence handles vinyl, chain link, wood, wrought iron, gate work, and select exterior upgrades tied to the perimeter project.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. The site and review content both position Empire Fence around free estimates and direct quote requests.",
  },
  {
    question: "Can you handle residential and commercial work?",
    answer:
      "Yes. The business presents itself for residential, commercial, education, and industrial property work across the Inland Empire.",
  },
  {
    question: "Do you only build fences?",
    answer:
      "No. When the project needs it, surrounding work like walls, turf, patios, and driveways can be scoped alongside the fence or gate install.",
  },
  {
    question: "Is there warranty coverage?",
    answer:
      "The current business messaging references a one-year warranty. Final warranty detail should be confirmed during the estimate for the exact scope.",
  },
];

function buildMailto(subject, values) {
  const body = [
    ["Name", values.name],
    ["Phone", values.phone],
    ["Email", values.email],
    ["Service", values.service],
    ["Project details", values.details],
  ]
    .map(([label, value]) => `${label}: ${value || ""}`)
    .join("\n");

  return `${BUSINESS.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function SectionLead({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`sectionLead sectionLead--${align} reveal`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <article className={`serviceCard serviceCard--${service.variant} reveal`}>
      {service.image ? (
        <div className="serviceCard__media">
          <img src={service.image} alt={service.title} />
        </div>
      ) : null}
      <div className="serviceCard__body">
        <span className="serviceCard__tag">{service.tag}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <small>{service.note}</small>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroDepth, setHeroDepth] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });

  const quoteMailto = useMemo(
    () => buildMailto(`Estimate request - ${BUSINESS.name}`, quoteForm),
    [quoteForm],
  );

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);
      setHeroDepth(Math.min(scrollY * 0.18, 56));
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
      { threshold: 0.16, rootMargin: "0px 0px -8%" },
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
    <div className={`siteShell ${isScrolled ? "siteShell--scrolled" : ""}`}>
      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#top" aria-label={BUSINESS.name}>
            <img src="/images/logo.png" alt={`${BUSINESS.name} logo`} />
            <div>
              <strong>{BUSINESS.name}</strong>
              <span>{BUSINESS.location}</span>
            </div>
          </a>

          <button
            type="button"
            className={`menuToggle ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav className={`topbar__nav ${menuOpen ? "is-open" : ""}`}>
            {NAVIGATION.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="chipButton chipButton--ghost" href={BUSINESS.phoneHref}>
              Call
            </a>
            <a className="chipButton" href="#booking">
              Book
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__ambient hero__ambient--left" />
          <div className="hero__ambient hero__ambient--right" />
          <div className="hero__inner">
            <div className="hero__copy reveal is-visible">
              <p className="eyebrow">Fence and gate contractor</p>
              <h1>
                Cleaner frontage.
                <br />
                Sharper installs.
                <br />
                Less hassle.
              </h1>
              <p className="hero__lede">
                Premium fence and gate work across Jurupa Valley and the Inland Empire,
                built around clean layout, direct communication, and stronger final
                presentation.
              </p>

              <div className="hero__actions">
                <a className="primaryButton" href="#estimate">
                  Start the estimate
                </a>
                <a className="secondaryButton" href="#gallery">
                  View recent work
                </a>
              </div>

              <div className="hero__facts">
                {HERO_FACTS.map((fact) => (
                  <div key={fact.label} className="heroFact">
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__visual reveal is-visible" style={{ transform: `translateY(${heroDepth}px)` }}>
              <div className="heroFrame">
                <div className="heroFrame__image heroFrame__image--main">
                  <img src="/images/hero-fence.jpg" alt="Empire Fence wrought iron installation" />
                </div>
                <div className="heroFrame__badge">
                  <span>Available now</span>
                  <strong>Free estimate</strong>
                </div>
                <div className="heroFrame__card heroFrame__card--right">
                  <p>Primary scope</p>
                  <strong>Fence installs and gate work</strong>
                </div>
                <div className="heroFrame__card heroFrame__card--bottom">
                  <p>Open hours</p>
                  <strong>{BUSINESS.hours}</strong>
                </div>
              </div>
            </div>
          </div>
          <a className="hero__scroll" href="#about">
            Scroll for more
          </a>
        </section>

        <section className="storySection" id="about">
          <div className="storySection__inner">
            <SectionLead
              eyebrow="Why Empire Fence"
              title="Built for properties that need the work to feel finished."
              copy="The site content is simple: fences, gates, and the surrounding exterior work that keeps the result cohesive. The design does the same thing."
            />

            <div className="storySection__grid">
              <div className="storySection__stack">
                {STORY_POINTS.map((point) => (
                  <article key={point.title} className="storyCard reveal">
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </article>
                ))}
              </div>

              <aside className="storyPanel reveal">
                <p className="storyPanel__eyebrow">What the work covers</p>
                <ul className="storyPanel__list">
                  <li>Vinyl fence installation</li>
                  <li>Wood fence replacement</li>
                  <li>Chain link perimeter work</li>
                  <li>Wrought iron frontage</li>
                  <li>Custom gates and access points</li>
                  <li>Turf, walls, patios, driveways</li>
                </ul>
                <div className="storyPanel__footer">
                  <span>Coverage</span>
                  <strong>Jurupa Valley + Inland Empire</strong>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="servicesSection" id="services">
          <div className="servicesSection__inner">
            <SectionLead
              eyebrow="Services"
              title="A service mix designed like a project board, not a list."
              copy="The highest-value scopes lead. Secondary services support. The layout behaves more like a curated Framer section than a contractor template."
              align="center"
            />

            <div className="servicesMosaic">
              {SERVICES.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="proofSection">
          <div className="proofSection__inner">
            <div className="proofSection__lead reveal">
              <p className="eyebrow eyebrow--light">Why the work reads better</p>
              <h2>More intentional rhythm. Better contractor trust signals.</h2>
              <p>
                The page needs a premium experience, but the business still wins on clarity,
                field experience, and cleaner follow-through. That is what this section holds.
              </p>
            </div>

            <div className="proofSection__grid">
              <div className="proofCards">
                {DIFFERENTIATORS.map((item) => (
                  <article key={item.title} className="proofCard reveal">
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>

              <div className="proofAside">
                <div className="testimonialCard reveal">
                  <p className="testimonialCard__label">Recent feedback</p>
                  <blockquote>
                    “{TESTIMONIALS[0].quote}”
                  </blockquote>
                  <span>{TESTIMONIALS[0].source}</span>
                </div>

                <div className="processRail reveal">
                  {PROCESS_STEPS.map((step, index) => (
                    <article key={step.title}>
                      <strong>{`0${index + 1}`}</strong>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gallerySection" id="gallery">
          <div className="gallerySection__inner">
            <SectionLead
              eyebrow="Selected work"
              title="Project imagery with more presence and less template feel."
              copy="The goal here is a stronger luxury-contractor read: larger frames, fewer cards, more breathing room, and tighter hover behavior."
            />

            <div className="galleryGrid">
              {GALLERY.map((item) => (
                <article key={item.title} className={`galleryCard galleryCard--${item.variant} reveal`}>
                  <div className="galleryCard__media">
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{ objectPosition: item.position }}
                    />
                  </div>
                  <div className="galleryCard__body">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="areasSection" id="areas">
          <div className="areasSection__inner">
            <div className="areasSection__copy">
              <SectionLead
                eyebrow="Coverage"
                title="Jurupa Valley base. Inland Empire reach."
                copy="If the property is in or around the Inland Empire, the work can usually be reviewed quickly and scoped from there."
              />

              <div className="areasList reveal">
                {AREAS.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>

              <div className="areasLinks reveal">
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

            <div className="mapCard reveal">
              <iframe
                title="Empire Fence service area map"
                src={BUSINESS.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="contactSection" id="estimate">
          <div className="contactSection__inner">
            <div className="contactSection__lead">
              <SectionLead
                eyebrow="Estimate"
                title="Send the scope. Book the walkthrough."
                copy="The two action paths stay side by side: quick quote request on the left, live booking on the right. Both are framed to feel intentional."
              />

              <div className="contactMeta reveal">
                <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
                <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
                <span>{BUSINESS.location}</span>
              </div>
            </div>

            <div className="contactSection__grid">
              <article className="quoteCard reveal">
                <div className="quoteCard__header">
                  <p>Quick quote request</p>
                  <strong>Enough detail to get the conversation moving.</strong>
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
                        <option value="Vinyl fence">Vinyl fence</option>
                        <option value="Chain link">Chain link</option>
                        <option value="Wood fence">Wood fence</option>
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
                  <button type="submit" className="primaryButton primaryButton--full">
                    Send request
                  </button>
                </form>
              </article>

              <article className="bookingCard reveal" id="booking">
                <div className="bookingCard__header">
                  <p>Book directly</p>
                  <strong>Use the live calendar if the schedule already makes sense.</strong>
                </div>
                <div className="bookingCard__frame">
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
          </div>
        </section>

        <section className="faqSection" id="faq">
          <div className="faqSection__inner">
            <SectionLead
              eyebrow="FAQ"
              title="Short answers to the questions people ask before they call."
              copy="The content stays close to the real business. The presentation is what gets upgraded."
              align="center"
            />

            <div className="faqList">
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
