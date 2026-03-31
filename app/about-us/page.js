import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
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
      <PageHero
        variant="about"
        eyebrow="About the company"
        title={
          <>
            Fence-first work with a cleaner <em>finish</em>.
          </>
        }
        intro="Empire Fence handles privacy fencing, gates, walls, and selected outdoor upgrades with one standard of follow-through."
        image="/client/wrought-fence.jpg"
        secondaryImage="/client/wood-fence.jpg"
        cards={[
          {
            eyebrow: "Approach",
            title: "Residential to industrial",
            copy: "One coordinated standard of field finish.",
          },
          {
            eyebrow: "Estimate path",
            title: "Clear recommendations first",
            copy: "Scope, material, and transitions get settled early.",
          },
        ]}
      />

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

      <section className="section section--contrast">
        <div className="container trustGrid">
          {trustPoints.map((point) => (
            <article key={point.title} className="trustCard">
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
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
