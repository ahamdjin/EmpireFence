import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { industries, trustPoints } from "@/lib/site";

export const metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="Fence-first planning with a broader outdoor scope."
        intro="Empire Fence presents itself as a Jurupa Valley contractor that can move from privacy fencing to gates, turf, driveways, patios, and block walls without breaking the project apart."
        image="/client/wrought-fence.jpg"
      />

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">What matters</span>
            <h2>Premium materials, stronger execution, and a cleaner finished exterior.</h2>
          </div>
          <div className="prose">
            <p>
              The original site repeats a few themes consistently: craftsmanship, project guidance,
              reliable communication, and the ability to handle multiple outdoor scopes under one
              business.
            </p>
            <p>
              This rebuild keeps those themes but gives them a clearer structure so the company
              reads like an established contractor instead of a crowded WordPress site.
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
              The site keeps free estimates as the entry point. The goal is to make that path
              obvious from every page.
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
