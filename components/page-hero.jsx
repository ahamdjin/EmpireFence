import Image from "next/image";

export function PageHero({ eyebrow, title, intro, image, stats }) {
  return (
    <section className="pageHero">
      <div className="container pageHero__grid">
        <div className="pageHero__copy">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          <p>{intro}</p>
          {stats?.length ? (
            <div className="metricRow">
              {stats.map((stat) => (
                <article key={stat.label} className="metricCard">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          ) : null}
        </div>
        <div className="pageHero__media">
          <Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 46vw" />
        </div>
      </div>
    </section>
  );
}
