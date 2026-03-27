export function Footer({ business, navigation, services }) {
  return (
    <footer className="siteFooter">
      <div className="sectionShell siteFooter__inner">
        <div className="siteFooter__brand" data-reveal>
          <img src="/images/logo.png" alt={`${business.name} logo`} />
          <div>
            <strong>{business.name}</strong>
            <p>
              Wrought iron, wood, vinyl, chain link, gates, and exterior upgrades across Jurupa Valley and the Inland
              Empire.
            </p>
          </div>
        </div>

        <div className="siteFooter__grid">
          <div data-reveal>
            <span>Navigation</span>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div data-reveal>
            <span>Services</span>
            {services.map((service) => (
              <p key={service.id}>{service.title}</p>
            ))}
          </div>

          <div data-reveal>
            <span>Contact</span>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <a href={business.emailHref}>{business.email}</a>
            <a href={business.mapHref}>{business.location}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
