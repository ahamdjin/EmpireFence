import { PhoneIcon } from "./icons";
import { ButtonLink } from "./ui";

export function Header({ business, navigation, menuOpen, setMenuOpen, isScrolled }) {
  return (
    <header className={`siteHeader ${isScrolled ? "siteHeader--scrolled" : ""}`}>
      <div className="siteHeader__shell">
        <a className="brandMark" href="#top" aria-label={business.name} onClick={() => setMenuOpen(false)}>
          <img src="/images/logo.png" alt={`${business.name} logo`} />
          <div>
            <strong>{business.name}</strong>
            <span>{business.location}</span>
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

        <nav className={`siteNav ${menuOpen ? "is-open" : ""}`}>
          <div className="siteNav__links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="siteHeader__contact" href={business.phoneHref} onClick={() => setMenuOpen(false)}>
            <PhoneIcon />
            <span>{business.phoneDisplay}</span>
          </a>

          <ButtonLink href="#estimate" className="siteHeader__cta" onClick={() => setMenuOpen(false)}>
            Get estimate
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
