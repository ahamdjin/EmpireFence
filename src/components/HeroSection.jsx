import { CompassIcon, GateIcon, ShieldIcon } from "./icons";
import { ButtonLink, IconBadge } from "./ui";

const heroIcons = [ShieldIcon, GateIcon, CompassIcon];

export function HeroSection({ hero, heroOffset }) {
  return (
    <section className="heroSection">
      <div className="heroSection__glow heroSection__glow--left" />
      <div className="heroSection__glow heroSection__glow--right" />
      <div className="heroSection__grid">
        <div className="heroSection__copy" data-reveal>
          <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
          <h1>
            {hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="heroSection__lede">{hero.lede}</p>
          <div className="heroSection__actions">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="text">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <div className="heroSection__highlights">
            {hero.highlights.map((item, index) => (
              <IconBadge key={item} icon={heroIcons[index]} label="Included" value={item} />
            ))}
          </div>
        </div>

        <div className="heroStage" data-reveal style={{ "--hero-offset": `${heroOffset}px` }}>
          <div className="heroStage__frame heroStage__frame--primary">
            <img src={hero.primaryImage.src} alt={hero.primaryImage.alt} />
          </div>
          <div className="heroStage__frame heroStage__frame--secondary">
            <img src={hero.secondaryImage.src} alt={hero.secondaryImage.alt} />
          </div>
          {hero.visualNotes.map((note, index) => (
            <article key={note.label} className={`heroNote heroNote--${index === 0 ? "top" : "bottom"}`}>
              <span>{note.label}</span>
              <strong>{note.value}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="heroStats" data-reveal>
        {hero.facts.map((fact) => (
          <article key={fact.label} className="heroStats__card">
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
