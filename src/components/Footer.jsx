import { ButtonLink } from "./ui";

export function Footer({ business, navigation, services }) {
  return (
    <footer className="siteFooter">
      <div className="siteFooter__shell">
        <div className="siteFooter__lead" data-reveal>
          <a className="brandMark brandMark--footer" href="#top" aria-label={business.name}>
            <img src="/images/logo.png" alt={`${business.name} logo`} />
            <div>
              <strong>{business.name}</strong>
              <span>{business.location}</span>
            </div>
          </a>
          <h2>Premium first impression. Straightforward path to a quote.</h2>
          <p>
            Empire Fence handles fence installs, gates, and related perimeter upgrades across the Inland Empire.
          </p>
          <div className="siteFooter__actions">
            <ButtonLink href="#estimate">Request a quote</ButtonLink>
            <ButtonLink href={business.phoneHref} variant="ghost">
              Call {business.phoneDisplay}
            </ButtonLink>
          </div>
        </div>

        <div className="siteFooter__grid">
          <div data-reveal>
            <p>Navigation</p>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <p>Services</p>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <p>Contact</p>
            <ul>
              <li>
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
              </li>
              <li>
                <a href={business.emailHref}>{business.email}</a>
              </li>
              <li>
                <a href={business.mapHref} target="_blank" rel="noreferrer">
                  {business.location}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
