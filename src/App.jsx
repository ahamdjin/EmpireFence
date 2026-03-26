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
  hours: "Mon–Sat · 7 AM–7 PM",
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Quote", href: "#quote" },
];

const stats = [
  { value: "40+", label: "Years" },
  { value: "Free", label: "Estimates" },
  { value: "3.9★", label: "Yelp" },
];

const services = [
  {
    title: "Vinyl",
    body: "Privacy, clean lines, low maintenance.",
  },
  {
    title: "Wood",
    body: "Classic backyard fencing and rebuilds.",
  },
  {
    title: "Chain link",
    body: "Simple security and perimeter coverage.",
  },
  {
    title: "Gates",
    body: "Manual, automatic, repair, alignment.",
  },
];

const reasons = [
  "Family-owned",
  "Spanish support",
  "Repairs + installs",
];

const areas = ["Jurupa Valley", "Riverside", "Ontario", "Chino", "Rancho Cucamonga", "Fontana", "San Bernardino"];

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
      <header className="siteHeader">
        <div className="container navShell">
          <a className="brand" href="#home" aria-label="Empire Fence home">
            <img src="/images/logo.png" alt="Empire Fence logo" />
            <div>
              <strong>{COMPANY.name}</strong>
              <span>Jurupa Valley</span>
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
              Call
            </a>
            <a className="button buttonPrimary" href="#quote">
              Quote
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">Fence and gate contractor</p>
              <h1>Built for privacy, security, and a cleaner frontage.</h1>
              <p className="heroBody">
                Vinyl, wood, chain link, wrought iron, gates, and outdoor upgrades across Jurupa Valley and nearby
                Inland Empire cities.
              </p>

              <div className="heroActions">
                <a className="button buttonPrimary" href="#quote">
                  Free estimate
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

            <aside className="heroPanel">
              <span className="panelLabel">What matters</span>
              <ul className="reasonList">
                {reasons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="contactMini">
                <div>
                  <span>Phone</span>
                  <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
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
          <div className="container">
            <div className="sectionIntro">
              <p className="eyebrow">Services</p>
              <h2>Simple scope. Clean install.</h2>
            </div>

            <div className="serviceGrid">
              {services.map((service) => (
                <article key={service.title} className="serviceCard">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectionSoft" id="why">
          <div className="container whyGrid">
            <div className="whyCopy">
              <p className="eyebrow">Why Empire Fence</p>
              <h2>Less friction. Better finish.</h2>
              <p>
                Free estimates, local service, and one contractor for fence work, gates, repairs, and selected outdoor
                add-ons.
              </p>
            </div>

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
        </section>

        <section className="section quoteSection" id="quote">
          <div className="container quoteGrid">
            <div className="quoteCopy">
              <p className="eyebrow">Quote</p>
              <h2>Send the scope.</h2>
              <p>Name, city, service, and the basics are enough to start.</p>
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

      <div className="mobileBar">
        <a className="button buttonGhost" href={COMPANY.phoneHref}>
          Call
        </a>
        <a className="button buttonPrimary" href="#quote">
          Quote
        </a>
      </div>
    </div>
  );
}

export default App;
