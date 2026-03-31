import Image from "next/image";
import Link from "next/link";

import { buildPageMetadata } from "@/lib/seo";
import { aboutHighlights, industries, trustPoints } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About us",
  description:
    "Learn how Empire Fence approaches fencing, gates, block walls, patios, turf, and broader exterior work across Jurupa Valley.",
  path: "/about-us",
  image: "/client/wrought-fence.jpg",
});

export default function AboutPage() {
  return (
    <>
      <section className="aboutStage">
        <div className="container aboutStage__grid">
          <div className="aboutStage__copy">
            <span className="eyebrow">About the company</span>
            <h1>
              Fence-first work with a cleaner <em>finish</em>.
            </h1>
            <p>
              Empire Fence handles privacy fencing, gates, walls, and selected outdoor upgrades
              with one standard of follow-through from the first estimate through the field finish.
            </p>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                Start estimate
              </Link>
              <Link href="/gallery" className="button button--ghost">
                View gallery
              </Link>
            </div>
            <div className="aboutStage__points">
              {trustPoints.map((point) => (
                <article key={point.title} className="aboutPoint">
                  <span className="eyebrow">Standard</span>
                  <h3>{point.title}</h3>
                  <p>{point.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="aboutStage__visual">
            <div className="aboutStage__image aboutStage__image--primary">
              <Image src="/client/wrought-fence.jpg" alt="Empire Fence wrought iron installation" fill sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <div className="aboutStage__image aboutStage__image--secondary">
              <Image src="/client/wood-fence.jpg" alt="Empire Fence wood fencing" fill sizes="(max-width: 900px) 52vw, 24vw" />
            </div>
            <div className="aboutStage__badge">
              <span className="eyebrow">Scope</span>
              <p>Fences, gates, walls, patios, driveways, and turf under one tighter path.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">What matters</span>
            <h2>Clear recommendations, strong materials, and better finish quality.</h2>
          </div>
          <div className="prose">
            <p>Fence lines, gates, wall transitions, and outdoor work are treated as one coordinated project instead of disconnected trades.</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container visualFeatureGrid">
          {aboutHighlights.map((item) => (
            <article key={item.title} className="visualFeatureCard">
              <div className="visualFeatureCard__media">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className="visualFeatureCard__body">
                <span className="eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container splitCards">
          <article className="infoCard">
            <span className="eyebrow">Industries served</span>
            <h3>Residential through industrial.</h3>
            <div className="chipWrap">
              {industries.map((industry) => (
                <span key={industry} className="chip chip--static">
                  {industry}
                </span>
              ))}
            </div>
          </article>
          <article className="infoCard">
            <span className="eyebrow">Next step</span>
            <h3>Start with a free estimate.</h3>
            <p>
              Share the scope, get a practical recommendation, and move into the right service path.
            </p>
            <Link href="/contact-us" className="button button--primary">
              Contact the team
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
