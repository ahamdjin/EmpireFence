import { SectionTitle } from "./ui";

export function ServicesSection({ services }) {
  return (
    <section className="servicesSection sectionShell" id="services">
      <div className="servicesSection__intro">
        <SectionTitle
          eyebrow="Services"
          title="Services people actually ask for."
          body="Fence, gates, privacy, and curb appeal."
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
              <h3>{service.title}</h3>
              <p>{service.detail}</p>

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
