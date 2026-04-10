import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getImagePresentation } from "@/lib/image-presentation";
import { buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";
import { aboutHighlights, industries } from "@/lib/site";

const aboutFaqs = [
  {
    question: "What kind of projects does Empire Fence usually take on?",
    answer:
      "Most work starts with fence installation, gates, repairs, and perimeter upgrades, then grows into a cleaner full edge when railings, patio enclosures, or other exterior scope belong in the same plan.",
  },
  {
    question: "Does Empire Fence only work in Jurupa Valley?",
    answer:
      "Jurupa Valley is the home base, but Empire Fence also serves nearby Inland Empire cities where the same estimate path and installation workflow make sense.",
  },
  {
    question: "What makes the company different from a basic fence installer?",
    answer:
      "The main difference is scope coordination. Fence lines, gates, transitions, and adjacent exterior details are planned together instead of being treated as disconnected trades.",
  },
];

export const metadata = buildPageMetadata({
  title: "About us",
  description:
    "Learn how Empire Fence approaches fencing, gates, and block wall work across Jurupa Valley.",
  path: "/about-us",
  image: "/client/wrought-fence.jpg",
});

export default function AboutPage() {
  const pageSchema = buildWebPageSchema({
    title: "About us",
    description:
      "Learn how Empire Fence approaches fence installation, gate planning, and coordinated exterior boundary work across Jurupa Valley and the Inland Empire.",
    path: "/about-us",
    image: "/client/wrought-fence.jpg",
    type: "AboutPage",
  });
  const faqSchema = buildFaqSchema(aboutFaqs);

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

      <section className="section section--soft">
        <div className="container miniFeatureGrid">
          <article className="miniFeatureCard">
            <span className="eyebrow">01</span>
            <h3>Site conditions first</h3>
            <p>Grade, access, gate swing, existing posts, and the way the property actually gets used all shape the recommendation before material gets locked in.</p>
          </article>
          <article className="miniFeatureCard">
            <span className="eyebrow">02</span>
            <h3>Better transitions</h3>
            <p>The cleanest projects are the ones where fence panels, gates, walls, railings, and visible transitions are treated as one composition instead of separate leftovers.</p>
          </article>
          <article className="miniFeatureCard">
            <span className="eyebrow">03</span>
            <h3>Honest scope guidance</h3>
            <p>Empire Fence is most useful when the owner needs the straight answer on material fit, repair versus replacement, and what belongs in the first phase.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container locationFaq">
          <div className="locationStage serviceFaqStage">
            <span className="eyebrow">Company FAQ</span>
            <h2>What people usually want to know before they reach out.</h2>
            <p>The fastest way to get a useful estimate is to share the property address, photos, and the part of the project that still feels unclear.</p>
          </div>

          <div className="faqCluster">
            <div className="faqList faqList--stacked">
              {aboutFaqs.map((item) => (
                <article key={item.question} className="faqItem">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
