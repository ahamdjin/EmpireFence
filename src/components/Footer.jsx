export function Footer({ business, navigation }) {
  return (
    <footer className="siteFooter">
      <div className="sectionShell siteFooter__inner">
        <div className="siteFooter__brand" data-reveal>
          <img src="/images/logo.png" alt={`${business.name} logo`} />
          <div>
            <strong>{business.name}</strong>
            <p>Jurupa Valley and the Inland Empire.</p>
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
