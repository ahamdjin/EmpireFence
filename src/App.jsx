import { useMemo, useState } from "react";

const COMPANY = {
  name: "Empire Fence Inc",
  phoneDisplay: "(951) 398-2016",
  phoneHref: "tel:9513982016",
  email: "solution.gf@gmail.com",
  emailHref: "mailto:solution.gf@gmail.com",
  location: "Jurupa Valley, CA",
  mapHref: "https://maps.app.goo.gl/4amXspRgyV3gUAib8",
  yelp: "https://www.yelp.com/biz/empire-fence-jurupa-valley-2?osq=Empirefence&override_cta=Get+a+quote",
  hoursLabel: "Mon–Sat · 7:00 AM – 7:00 PM · Sunday closed",
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Quote", href: "#quote" },
];

const proofStats = [
  { value: "40+", label: "Years highlighted on current business materials" },
  { value: "3.9 / 5", label: "Yelp rating with 12 reviews as of March 2026" },
  { value: "1 year", label: "Warranty referenced on the current site" },
];

const trustSignals = [
  "Family-owned & operated",
  "Free estimates",
  "Spanish-speaking support",
  "Fence and gate repair",
  "Automatic and manual gate work",
  "Serving the Inland Empire",
];

const servicePillars = [
  {
    title: "Vinyl privacy fencing",
    body: "Low-maintenance perimeter work for backyard privacy, cleaner curb appeal, and durable gate alignment.",
  },
  {
    title: "Chain link and security coverage",
    body: "Straightforward boundary protection for homes, businesses, and utility or warehouse access points.",
  },
  {
    title: "Wood fence replacement",
    body: "Classic residential fencing with tear-out, rebuild, repair, and finish planning around the property layout.",
  },
  {
    title: "Wrought iron and custom metal",
    body: "Decorative yet secure frontage, side-yard, and gate solutions built for function and finish.",
  },
  {
    title: "Gate installs and gate repair",
    body: "Manual gates, automatic gate setups, hinge alignment, hardware swaps, and access-focused upgrades.",
  },
  {
    title: "Hardscape add-ons",
    body: "Cinder block walls, patio work, driveways, and turf projects handled under the same outdoor improvement scope.",
  },
];

const materialCards = [
  {
    eyebrow: "Residential",
    title: "Privacy-first installs",
    body: "Vinyl, wood, and side-yard gate work designed to tighten security and clean up the full property line.",
  },
  {
    eyebrow: "Commercial",
    title: "Durable perimeter systems",
    body: "Chain link, access gates, and practical fence layouts for business lots, storage, and high-use entries.",
  },
  {
    eyebrow: "Custom work",
    title: "Made to fit the frontage",
    body: "Wrought iron and custom fence solutions where look, access, and street-facing detail all matter.",
  },
];

const whyChoose = [
  {
    title: "Estimate-first process",
    body: "The business positioning is strongest when the scope is clear up front. The site should keep that front and center.",
  },
  {
    title: "Practical local service",
    body: "Jurupa Valley is the anchor market, but the service footprint reaches across nearby Inland Empire cities.",
  },
  {
    title: "Broad project coverage",
    body: "Fence installs, repairs, gates, and outdoor add-ons can be discussed in one call instead of splitting the job across vendors.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Talk through the site and scope",
    body: "Start with the fence type, gate requirements, city, and the main problem to solve.",
  },
  {
    number: "02",
    title: "Lock in materials and layout",
    body: "Confirm whether the project is best suited for vinyl, wood, chain link, wrought iron, or a mixed approach.",
  },
  {
    number: "03",
    title: "Install with a clean handoff",
    body: "The finished result should improve security, function smoothly, and look intentional from the street.",
  },
];

const areas = [
  "Jurupa Valley",
  "Riverside",
  "Ontario",
  "Chino",
  "Rancho Cucamonga",
  "Fontana",
  "San Bernardino",
];

const faqs = [
  {
    question: "What fence types does Empire Fence handle?",
    answer:
      "The current business footprint points to vinyl, chain link, wood, wrought iron, and custom fence work, plus gates and outdoor add-on services.",
  },
  {
    question: "Do they provide free estimates?",
    answer:
      "Yes. Free estimates are highlighted in Yelp business highlights and reinforced throughout the current website.",
  },
  {
    question: "Can they handle repairs as well as new installs?",
    answer:
      "Yes. Yelp lists both installation and repair, including gate work and automatic or manual gate-related service.",
  },
  {
    question: "Which areas do they serve?",
    answer:
      "Jurupa Valley is the core market, with nearby Inland Empire coverage including Riverside, Ontario, Chino, Rancho Cucamonga, Fontana, and San Bernardino.",
  },
];

function App() {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <div className="siteShell">
      <header className="topbar">
        <div className="container topbarInner">
          <p>{COMPANY.location} · {COMPANY.hoursLabel}</p>
          <div className="topbarLinks">
            <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
            <a href={COMPANY.yelp} target="_blank" rel="noreferrer">
              Yelp profile
            </a>
          </div>
        </div>
      </header>

      <header className="siteHeader">
        <div className="container navShell">
          <a className="brand" href="#home" aria-label="Empire Fence home">
            <img src="/images/logo.png" alt="Empire Fence logo" />
            <div>
              <strong>{COMPANY.name}</strong>
              <span>Fence, gate, and outdoor installation contractor</span>
            </div>
          </a>

          <nav className="navLinks" aria-label="Main navigation">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navActions">
            <a className="button buttonGhost" href={COMPANY.phoneHref}>
              Call now
            </a>
            <a className="button buttonPrimary" href="#quote">
              Free estimate
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">Jurupa Valley fence contractor</p>
              <h1>Fence, gate, and outdoor work built for privacy, security, and clean street presence.</h1>
              <p className="heroBody">
                Empire Fence Inc serves Jurupa Valley and the surrounding Inland Empire with vinyl, wood, chain link,
                wrought iron, custom fence work, gate installation, gate repair, and select hardscape upgrades.
              </p>

              <div className="heroActions">
                <a className="button buttonPrimary" href="#quote">
                  Request a free estimate
                </a>
                <a className="button buttonGhost" href={COMPANY.phoneHref}>
                  {COMPANY.phoneDisplay}
                </a>
              </div>

              <div className="proofGrid" aria-label="Business proof points">
                {proofStats.map((item) => (
                  <article key={item.label} className="proofCard">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="heroPanel">
              <div className="heroPanelTop">
                <span className="panelEyebrow">What stands out</span>
                <h2>Minimal presentation, local-service clarity, fast quote path.</h2>
              </div>

              <ul className="signalList">
                {trustSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="materialRail" aria-label="Fence materials">
                <article>
                  <span>Vinyl</span>
                  <strong>Privacy and low maintenance</strong>
                </article>
                <article>
                  <span>Wood</span>
                  <strong>Classic residential coverage</strong>
                </article>
                <article>
                  <span>Chain link</span>
                  <strong>Budget and security value</strong>
                </article>
                <article>
                  <span>Wrought iron</span>
                  <strong>Decorative and durable frontage</strong>
                </article>
              </div>
            </aside>
          </div>
        </section>

        <section className="signalBand">
          <div className="container signalBandInner">
            <p>Based on the current Empire Fence website, Yelp business profile, and published service footprint.</p>
            <a href={COMPANY.mapHref} target="_blank" rel="noreferrer">
              View Jurupa Valley location
            </a>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="sectionIntro">
              <p className="eyebrow">Core services</p>
              <h2>Built for homeowners, frontage upgrades, gate work, and local business perimeter needs.</h2>
              <p>
                The service stack should read clearly in under a minute. This version organizes the offer around what
                local customers actually need to solve.
              </p>
            </div>

            <div className="serviceGrid">
              {servicePillars.map((service) => (
                <article key={service.title} className="serviceCard">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectionAlt" id="why-us">
          <div className="container splitGrid">
            <div>
              <p className="eyebrow">Why choose Empire Fence</p>
              <h2>Simple decisions, durable materials, and a cleaner job path from quote to install.</h2>
              <p className="sectionBody">
                The strongest positioning in the current footprint is not flashy. It is direct: practical guidance,
                flexible service coverage, and work aimed at lasting function.
              </p>

              <div className="materialCards">
                {materialCards.map((item) => (
                  <article key={item.title} className="materialCard">
                    <span>{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="stackCards">
              {whyChoose.map((item) => (
                <article key={item.title} className="stackCard">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container processGrid">
            <div className="sectionIntro compact">
              <p className="eyebrow">Process</p>
              <h2>Three steps to move from inquiry to installed fence line.</h2>
            </div>

            <div className="processCards">
              {processSteps.map((step) => (
                <article key={step.number} className="processCard">
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectionAccent" id="areas">
          <div className="container splitGrid">
            <div>
              <p className="eyebrow">Service area</p>
              <h2>Jurupa Valley first, with regular project coverage across nearby Inland Empire cities.</h2>
              <p className="sectionBody">
                This keeps the local-service message strong while still supporting surrounding city demand that already
                shows up in the current business site.
              </p>

              <div className="areaGrid" aria-label="Service areas">
                {areas.map((area) => (
                  <span key={area} className="areaChip">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <article className="infoCard">
              <h3>Business details</h3>
              <dl>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={COMPANY.emailHref}>{COMPANY.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{COMPANY.hoursLabel}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>
                    <a href={COMPANY.mapHref} target="_blank" rel="noreferrer">
                      {COMPANY.location}
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="sectionIntro compact">
              <p className="eyebrow">FAQ</p>
              <h2>Short answers for the questions that usually block the first call.</h2>
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

        <section className="section quoteSection" id="quote">
          <div className="container quoteGrid">
            <div className="quoteCopy">
              <p className="eyebrow">Free estimate</p>
              <h2>Send the scope now and keep the first handoff simple.</h2>
              <p className="sectionBody">
                This routes into email today, which is the fastest reliable setup for a fresh repo. A CRM form or
                booking workflow can be connected later without redesigning the site.
              </p>
              <div className="quoteLinks">
                <a className="linkLine" href={COMPANY.phoneHref}>
                  Call {COMPANY.phoneDisplay}
                </a>
                <a className="linkLine" href={COMPANY.yelp} target="_blank" rel="noreferrer">
                  Review the Yelp profile
                </a>
              </div>
            </div>

            <form className="quoteForm" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
              </label>
              <label>
                Phone
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Best number to reach you" required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address" required />
              </label>
              <label>
                Service
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option>Vinyl fence</option>
                  <option>Chain link fence</option>
                  <option>Wood fence</option>
                  <option>Wrought iron fence</option>
                  <option>Gate install or repair</option>
                  <option>Hardscape add-ons</option>
                </select>
              </label>
              <label className="fullWidth">
                Project details
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share the project type, city, timeline, and anything important about access or layout."
                  rows="6"
                  required
                />
              </label>
              <button className="button buttonPrimary fullWidth" type="submit">
                Send estimate request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div>
            <strong>{COMPANY.name}</strong>
            <p>
              Fence, gate, and outdoor installation support for Jurupa Valley properties and surrounding Inland Empire
              service areas.
            </p>
          </div>
          <div>
            <strong>Contact</strong>
            <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
            <a href={COMPANY.emailHref}>{COMPANY.email}</a>
            <a href={COMPANY.mapHref} target="_blank" rel="noreferrer">
              {COMPANY.location}
            </a>
          </div>
          <div>
            <strong>Explore</strong>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <div className="mobileBar">
        <a className="button buttonGhost" href={COMPANY.phoneHref}>
          Call now
        </a>
        <a className="button buttonPrimary" href="#quote">
          Free estimate
        </a>
      </div>
    </div>
  );
}

export default App;
