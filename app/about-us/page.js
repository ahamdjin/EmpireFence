import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getImagePresentation } from "@/lib/image-presentation";
import { buildPageMetadata } from "@/lib/seo";
import { aboutHighlights, industries } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About us",
  description:
    "Learn how Empire Fence approaches fencing, gates, and block wall work across Jurupa Valley.",
  path: "/about-us",
  image: "/client/wrought-fence.jpg",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="about"
        eyebrow="About us"
        title="About Empire Fence"
        intro="40+ years of combined experience installing quality fences throughout Jurupa Valley and the Inland Empire."
        image="/client/wrought-fence.jpg"
        primaryAction={{ href: "/contact-us", label: "Get free estimate" }}
        secondaryAction={{ href: "/gallery", label: "View gallery" }}
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
        <div className="container aboutEditorial">
          {aboutHighlights.map((item, index) => (
            <article key={item.title} className={`aboutEditorial__row${index % 2 ? " is-reversed" : ""}`}>
              <div className="aboutEditorial__media">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  style={getImagePresentation(item.image, "aboutEditorial")}
                />
              </div>
              <div className="aboutEditorial__body">
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
