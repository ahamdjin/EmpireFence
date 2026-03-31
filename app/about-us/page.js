import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/seo";
import { industries, trustPoints } from "@/lib/site";

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
        eyebrow="About the company"
        title={
          <>
            Fence-first work with a cleaner <em>finish</em>.
          </>
        }
        intro="Empire Fence handles privacy fencing, gates, walls, and selected outdoor upgrades with one standard of fit and follow-through."
        image="/client/wrought-fence.jpg"
      />

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">What matters</span>
            <h2>Clear recommendations, strong materials, and better finish quality.</h2>
          </div>
          <div className="prose">
            <p>
              Empire Fence is strongest when the fence line, gate, wall transition, and surrounding
              outdoor work are treated as one coordinated project instead of disconnected trades.
            </p>
            <p>
              The result should feel cleaner from the estimate onward: better layout decisions,
              simpler communication, and a more resolved exterior once the work is done.
            </p>
          </div>
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
