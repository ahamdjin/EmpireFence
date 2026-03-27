import { ClockIcon, CompassIcon, GateIcon } from "./icons";
import { ButtonLink } from "./ui";

const featureIcons = [GateIcon, CompassIcon, ClockIcon];

export function HeroSection({ hero, heroOffset }) {
  return (
    <section className="heroSection">
      <div className="heroBackdrop" style={{ "--hero-shift": `${heroOffset}px` }}>
        <img src={hero.primaryImage.src} alt={hero.primaryImage.alt} />
      </div>

      <div className="heroSection__overlay" />

      <div className="heroSection__inner">
        <div className="heroSection__content" data-reveal>
          <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
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
        </div>

        <aside className="heroSection__panel" data-reveal>
          <div className="heroSection__panelTop">
            <p>Selected scope</p>
            <strong>{hero.visualNotes[1]?.value}</strong>
          </div>

          <div className="heroSection__features">
            {hero.highlights.map((item, index) => {
              const Icon = featureIcons[index] ?? GateIcon;

              return (
                <article key={item} className="heroFeature">
                  <div className="heroFeature__icon">
                    <Icon />
                  </div>
                  <p>{item}</p>
                </article>
              );
            })}
          </div>

          <div className="heroSection__panelBottom">
            {hero.facts.map((fact) => (
              <article key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div>
        </aside>
      </div>

      <div className="heroRail" data-reveal>
        {hero.visualNotes.map((note) => (
          <article key={note.label}>
            <span>{note.label}</span>
            <strong>{note.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
