import Image from "next/image";
import Link from "next/link";

import { business } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function PageHero({ eyebrow, title, intro, image, stats }) {
  return (
    <section className="pageHero">
      <div className="container">
        <Reveal className="pageHero__frame" initiallyVisible variant="soft">
          <div className="pageHero__grid">
            <div className="pageHero__copy">
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
              <h1>{title}</h1>
              <p>{intro}</p>
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
            <div className="pageHero__media">
              <Image
                src={image}
                alt={typeof title === "string" ? title : business.shortName}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <div className="pageHero__caption">
                <span className="eyebrow">Empire Fence</span>
                <p>{business.city} and nearby Inland Empire cities</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
