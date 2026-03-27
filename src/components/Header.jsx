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
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <ButtonLink href={business.phoneHref} variant="ghost">
            Call
          </ButtonLink>
          <ButtonLink href="#booking">Book</ButtonLink>
        </nav>
      </div>
    </header>
  );
}
