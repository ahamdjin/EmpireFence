import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getImagePresentation } from "@/lib/image-presentation";
import { buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";
import { business, industries } from "@/lib/site";

const aboutStorySections = [
  {
    eyebrow: "Who we are",
    title: "A fence contractor built around privacy, security, curb appeal, and dependable field execution.",
    copy:
      "Empire Fence works with homeowners, businesses, and property managers who need fencing that does more than mark a property line. The work has to improve security, create privacy where it matters, hold up under daily use, and still look like it belongs on the property once the install is done.",
    image: "/client/about/company-work-site.jpg",
  },
  {
    eyebrow: "Why we started",
    title: "The company was built to fix the part customers hate most: poor communication and rushed work.",
    copy:
      "Too many property owners end up with weak materials, vague scope, and crews that move too fast to care about the finish. Empire Fence was built around the opposite approach: clear communication, practical recommendations, dependable workmanship, and a finished result that still looks right after the job is complete.",
    image: "/client/about/empire-fence-team.jpg",
  },
];

const teamRoles = [
  {
    title: "Estimating and scope planning",
    copy:
      "The first job is making the scope clearer. That means understanding the property, the material direction, the gate layout, and whether the site really needs repair, replacement, or a broader upgrade.",
  },
  {
    title: "Project coordination",
    copy:
      "Strong projects do not come from guesswork. Scheduling, site-readiness, material expectations, and handoff between estimate and field all need to stay clean if the install is going to feel professional.",
  },
  {
    title: "Field installation",
    copy:
      "Install quality still comes down to the people on site. Layout, transitions, finish quality, gate fit, and how the property is treated during the work all matter as much as the material itself.",
  },
];

const credibilityPoints = [
  {
    title: "40 years of combined experience",
    copy:
      "That experience shows up in material fit, repair-versus-replacement judgment, gate planning, and the small layout decisions that make the finished fence feel cleaner.",
  },
  {
    title: "Residential and commercial service",
    copy:
      "Empire Fence works across homes, business properties, mixed-use sites, and practical perimeter jobs that need durability, security, and more organized scope.",
  },
  {
    title: "Licensed, insured, and warranty-backed",
    copy:
      "The work is expected to meet professional standards, local requirements, and real customer expectations. Projects are backed by a 1-year workmanship warranty.",
  },
];

const trustReasons = [
  {
    title: "People trust the company because the process is direct.",
    copy:
      "Customers want a contractor who shows up, communicates clearly, and gives honest guidance on what the property actually needs. That trust is built before the first post goes in the ground.",
  },
  {
    title: "What makes Empire Fence different is the refusal to use one-size-fits-all answers.",
    copy:
      "Privacy, security, curb appeal, safety, long-term durability, and budget all matter differently from one property to the next. The right solution should reflect the site, not a template.",
  },
  {
    title: "The goal is to help customers make confident decisions.",
    copy:
      "From the estimate and material discussion through scheduling and installation, the work is meant to reduce guesswork and give the owner a fence solution that is practical, durable, and visually right for the property.",
  },
];

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
    "Learn who Empire Fence is, why the company was built, how the team works, and what customers can expect from fence, gate, and exterior boundary projects across Jurupa Valley.",
  path: "/about-us",
  image: "/client/about/empire-fence-team.jpg",
});

export default function AboutPage() {
  const pageSchema = buildWebPageSchema({
    title: "About us",
    description:
      "Learn how Empire Fence approaches fence installation, repairs, gates, and coordinated exterior improvements across Jurupa Valley and the Inland Empire.",
    path: "/about-us",
    image: "/client/about/empire-fence-team.jpg",
    type: "AboutPage",
  });
  const faqSchema = buildFaqSchema(aboutFaqs);

  return (
    <>
      <PageHero
        variant="about"
        eyebrow="About us"
        title="About Empire Fence"
        intro="Empire Fence serves homeowners, businesses, and property managers with fencing, gates, repairs, and coordinated outdoor improvements built around quality workmanship, honest guidance, and cleaner finished results."
        image="/client/about/empire-fence-team.jpg"
        primaryAction={{ href: "/contact-us", label: "Get free estimate" }}
        secondaryAction={{ href: "/gallery", label: "View gallery" }}
      />

      <section className="section">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Company overview</span>
            <h2>Built to give customers a better experience when they hire a fence contractor.</h2>
          </div>
          <div className="prose">
            <p>Empire Fence is not built around fast generic installs. The company exists to give property owners stronger communication, better scope guidance, dependable workmanship, and finished projects that actually hold up over time.</p>
            <p>Fence lines, gates, transitions, and supporting outdoor details are treated as one coordinated job instead of getting split into disconnected decisions that leave the property feeling unfinished.</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container aboutEditorial">
          {aboutStorySections.map((item, index) => (
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
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Meet the team</span>
            <h2>The work is only as good as the people planning it, coordinating it, and building it.</h2>
          </div>
          <div className="prose">
            <p>Behind every project is a team that handles estimating, coordination, layout, installation, and the final quality standard. A good fence is not just about panels and posts. It is about the people responsible for getting the details right from the first conversation to the last walkthrough.</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container miniFeatureGrid">
          {teamRoles.map((item, index) => (
            <article key={item.title} className="miniFeatureCard">
              <span className="eyebrow">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container splitCards">
          {credibilityPoints.map((item) => (
            <article key={item.title} className="infoCard">
              <span className="eyebrow">Awards and credentials</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contactUtility">
          <article className="panel">
            <span className="eyebrow">Industries served</span>
            <h2>Residential through industrial.</h2>
            <div className="chipWrap">
              {industries.map((industry) => (
                <span key={industry} className="chip chip--static">
                  {industry}
                </span>
              ))}
            </div>
          </article>
          <article className="panel">
            <span className="eyebrow">Why people trust us</span>
            <h2>Clear communication, dependable craftsmanship, and honest recommendations.</h2>
            <p>
              Customers trust Empire Fence because the process stays direct, the site gets treated with care, and the team stands behind the quality of the work.
            </p>
            <p>
              The job is not finished when the fence is standing. It is finished when the scope feels right, the details hold together, and the customer feels confident in the value they received.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container splitCards">
          {trustReasons.map((item) => (
            <article key={item.title} className="infoCard">
              <span className="eyebrow">What makes us different</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">How we help</span>
            <h2>Helping customers move from uncertainty to the right fence decision.</h2>
          </div>
          <div className="prose">
            <p>Empire Fence helps customers through the whole process: consultation, estimate, material selection, design recommendations, scheduling, and installation. The goal is to make the project easier to understand, not harder.</p>
            <p>Whether the need is wood privacy fencing, vinyl, chain link, wrought iron, gates, repairs, or a custom installation path, the work should end in a durable result that fits the property and makes sense for the budget.</p>
            <div className="buttonRow">
              <Link href="/contact-us" className="button button--primary">
                Get a free quote
              </Link>
              <a href={business.phoneHref} className="button button--ghost">
                {business.phoneDisplay}
              </a>
            </div>
          </div>
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
