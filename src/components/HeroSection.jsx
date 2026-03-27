import { ButtonLink } from "./ui";

export function HeroSection({ hero, heroOffset }) {
  return (
    <section className="heroSection">
      <div className="heroBackdrop" style={{ "--hero-shift": `${heroOffset}px` }}>
        <img src={hero.primaryImage.src} alt={hero.primaryImage.alt} />
      </div>

      <div className="heroSection__overlay" />
      <div className="heroSection__glow heroSection__glow--one" />
      <div className="heroSection__glow heroSection__glow--two" />

      <div className="heroSection__inner">
        <div className="heroSection__content">
          <p className="eyebrow eyebrow--light heroSection__eyebrow">{hero.eyebrow}</p>

          <div className="heroSection__headline">
            <p className="heroSection__kicker">Premium fence and gate installation</p>
            <h1>
              {hero.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
          </div>

          <p className="heroSection__lede">{hero.lede}</p>

          <div className="heroSection__actions">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="heroMeta" data-reveal>
            {hero.visualNotes.map((note) => (
              <article key={note.label}>
                <span>{note.label}</span>
                <strong>{note.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <aside className="heroPanel" data-reveal>
          <div className="heroPanel__media" style={{ "--hero-shift": `${heroOffset}px` }}>
            <img src={hero.secondaryImage.src} alt={hero.secondaryImage.alt} />
            <div className="heroPanel__badge">
              <span>Scope</span>
              <strong>Fence installs, gates, exterior upgrades</strong>
            </div>
          </div>

          <div className="heroPanel__stats">
            {hero.facts.map((fact) => (
              <article key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
