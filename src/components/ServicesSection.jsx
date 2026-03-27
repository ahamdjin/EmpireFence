import { SectionTitle } from "./ui";

export function ServicesSection({ services }) {
  return (
    <section className="servicesSection sectionShell" id="services">
      <div className="servicesSection__intro">
        <SectionTitle
          eyebrow="Services"
          title="Fence and gate work for privacy, access, and curb appeal."
          body="Clear service categories, cleaner communication, and installs that match the way the property actually needs to function."
        />
      </div>

      <div className="servicesSection__list">
        {services.map((service, index) => (
          <article key={service.id} className={`serviceCard serviceCard--${service.tone}`} data-reveal>
            <div className="serviceCard__meta">
              <span>{service.number}</span>
              <img
                src={service.image}
                alt={service.title}
                style={{ objectPosition: index % 2 === 0 ? "center center" : "45% center" }}
              />
            </div>

            <div className="serviceCard__body">
              <p className="serviceCard__label">Service</p>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <p className="serviceCard__detail">{service.detail}</p>

              <div className="serviceCard__chips">
                {service.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
