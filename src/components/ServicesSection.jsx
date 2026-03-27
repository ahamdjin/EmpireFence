import { ArrowIcon } from "./icons";
import { SectionTitle } from "./ui";

export function ServicesSection({ services }) {
  return (
    <section className="servicesSection" id="services">
      <SectionTitle
        eyebrow="Services"
        title="Simple to understand. Premium in the way the work is framed."
        body="The structure stays local-service practical. The presentation feels more considered, deliberate, and trustworthy."
      />

      <div className="servicesGrid">
        {services.map((service) => (
          <article key={service.id} className={`serviceCard serviceCard--${service.tone}`} data-reveal>
            <div className="serviceCard__media">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="serviceCard__body">
              <div className="serviceCard__meta">
                <span>{service.number}</span>
                <ArrowIcon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <small>{service.detail}</small>
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
