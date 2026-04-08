import Image from "next/image";
import Link from "next/link";

import { getImagePresentation } from "@/lib/image-presentation";
import { business } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  stats,
  variant = "default",
  secondaryImage,
  chips = [],
  cards = [],
}) {
  const heroChips = chips.slice(0, variant === "areas" ? 3 : 2);
  const showCaption = variant !== "areas";

  return (
    <section className={`pageHero pageHero--${variant}`}>
      <div className="pageHero__shell">
        <Reveal className="pageHero__frame" initiallyVisible variant="soft">
          <div className="pageHero__grid">
            <div className="pageHero__copy">
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
              <h1>{title}</h1>
              <p>{intro}</p>
              {heroChips.length ? (
                <div className="pageHero__copyMeta">
                  {heroChips.map((chip) => (
                    <span key={chip} className="pageHero__tag">
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="pageHero__actions">
                <Link href="/contact-us" className="button button--primary">
                  Start estimate
                </Link>
                <a href={business.phoneHref} className="button button--ghost">
                  {business.phoneDisplay}
                </a>
              </div>
              {stats?.length ? (
                <div className="metricRow metricRow--compact">
                  {stats.map((stat) => (
                    <article key={stat.label} className="metricCard metricCard--light">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="pageHero__visual">
              <div className="pageHero__media">
                <Image
                  src={image}
                  alt={typeof title === "string" ? title : business.shortName}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 48vw"
                  style={getImagePresentation(image, "pageHero")}
                />
                {showCaption ? (
                  <div className="pageHero__caption">
                    <span className="pageHero__captionLabel">Empire Fence</span>
                    <span className="pageHero__captionValue">{business.city}</span>
                  </div>
                ) : null}
              </div>

              {secondaryImage ? (
                <div className="pageHero__secondaryMedia">
                  <Image
                    src={secondaryImage}
                    alt={`${business.shortName} supporting view`}
                    fill
                    sizes="(max-width: 900px) 46vw, 20vw"
                    style={getImagePresentation(secondaryImage, "pageHeroSecondary")}
                  />
                </div>
              ) : null}

              {cards.length ? (
                <div className="pageHero__stack">
                  {cards.map((card) => {
                    const content = (
                      <>
                        {card.eyebrow ? <span className="eyebrow">{card.eyebrow}</span> : null}
                        {card.title ? <strong>{card.title}</strong> : null}
                        {card.copy ? <p>{card.copy}</p> : null}
                      </>
                    );

                    return card.href ? (
                      <Link key={`${card.title}-${card.href}`} href={card.href} className="pageHero__miniCard">
                        {content}
                      </Link>
                    ) : (
                      <article key={`${card.title}-${card.copy}`} className="pageHero__miniCard">
                        {content}
                      </article>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
