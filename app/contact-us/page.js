import { PageHero } from "@/components/page-hero";
import { LeadConnectorForm } from "@/components/leadconnector-form";
import { buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";
import { business, contactPrompts, serviceAreas, socialLinks } from "@/lib/site";

const contactFaqs = [
  {
    question: "What should I send with my estimate request?",
    answer:
      "The strongest requests include the property address, photos, rough footage if available, and notes on whether the project includes gates, repairs, or any adjacent wall or patio scope.",
  },
  {
    question: "Can I call instead of using the form?",
    answer:
      "Yes. The form is useful, but calling or emailing with site photos is completely fine if that gets the project moving faster.",
  },
  {
    question: "Does Empire Fence give guidance if I am still deciding on the material?",
    answer:
      "Yes. A good estimate should narrow the material choice, not force you to show up with every answer already settled.",
  },
];

export const metadata = buildPageMetadata({
  title: "Get a Free Fence Estimate | Empire Fence Inc",
  description:
    "Request a free fence estimate from Empire Fence Inc for fence installation, gate work, repairs, railings, and outdoor boundary projects in Jurupa Valley and nearby Inland Empire cities.",
  path: "/contact-us",
  image: "/client/gbp/crew-on-site.jpg",
});

export default function ContactPage() {
  const pageSchema = buildWebPageSchema({
    title: "Get a Free Fence Estimate",
    description:
      "Request a free fence estimate, call Empire Fence Inc directly, or send project photos for fence, gate, railing, and boundary work in Jurupa Valley and nearby Inland Empire cities.",
    path: "/contact-us",
    image: "/client/gbp/crew-on-site.jpg",
    type: "ContactPage",
  });
  const faqSchema = buildFaqSchema(contactFaqs);

  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Contact us"
        title="Get a Free Estimate"
        intro="Call us now or fill out the form for a free fence installation quote. We serve Jurupa Valley and the entire Inland Empire."
        image="/client/gbp/crew-on-site.jpg"
        primaryAction={{ href: business.phoneHref, label: `Call ${business.phoneDisplay}` }}
        secondaryAction={{ href: "#form", label: "Send message" }}
      />

      <section className="contactHub" id="form">
        <div className="container contactHub__grid">
          <article className="contactHub__intro">
            <span className="eyebrow">Quick Request</span>
            <h2>Send us your project details</h2>
            <p>
              Fill out the form with the property address, photos, and the basic scope. Empire Fence will review the request and follow up with the next step.
            </p>
            <div className="contactHub__socials">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="textLink">
                  {link.label}
                </a>
              ))}
            </div>
          </article>

          <article className="contactHub__form">
            <LeadConnectorForm instance="contact-page" />
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contactChecklist">
          <article className="contactChecklist__card">
            <span className="eyebrow">Helpful details</span>
            <h3>What to send before the first call.</h3>
            <ul className="bulletList">
              {contactPrompts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="contactChecklist__card">
            <span className="eyebrow">Service footprint</span>
            <h3>Jurupa Valley and nearby Inland Empire cities.</h3>
            <div className="chipWrap">
              {serviceAreas.map((area) => (
                <span key={area.slug} className="chip chip--static">
                  {area.title}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container miniFeatureGrid">
          <article className="miniFeatureCard">
            <span className="eyebrow">01</span>
            <h3>Send the real site context</h3>
            <p>Photos, frontage views, side-yard shots, and gate locations help the estimate start from the actual site conditions.</p>
          </article>
          <article className="miniFeatureCard">
            <span className="eyebrow">02</span>
            <h3>Get the right scope first</h3>
            <p>The estimate should confirm the material, gate approach, and whether repair or replacement makes more sense.</p>
          </article>
          <article className="miniFeatureCard">
            <span className="eyebrow">03</span>
            <h3>Move into install cleanly</h3>
            <p>Once the site conditions and priorities are clear, Empire Fence can move from estimate into install with fewer surprises.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container contactUtilityPanel">
          <div className="contactUtilityPanel__map">
            <span className="eyebrow">Map</span>
            <h2>Find the service footprint.</h2>
            <div className="mapCard mapCard--embedded">
              <iframe src={business.mapEmbedSrc} loading="lazy" allowFullScreen title="Empire Fence map" />
            </div>
          </div>
          <div className="contactUtilityPanel__booking">
            <span className="eyebrow">Direct contact</span>
            <h2>Call, email, or send the estimate request.</h2>
            <p>Use the contact form, call the team directly, or send the project photos and address by email.</p>
            <div className="contactStack">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
              <p>{business.hours}</p>
            </div>
            <div className="buttonRow">
              <a href={business.phoneHref} className="button button--primary">
                Call now
              </a>
              <a href={business.emailHref} className="button button--ghost">
                Send email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container locationFaq">
          <div className="locationStage serviceFaqStage">
            <span className="eyebrow">Estimate FAQ</span>
            <h2>Questions that come up before the first quote.</h2>
            <p>Most projects move faster when the client shares what is already known before the estimate.</p>
          </div>

          <div className="faqCluster">
            <div className="faqList faqList--stacked">
              {contactFaqs.map((item) => (
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
