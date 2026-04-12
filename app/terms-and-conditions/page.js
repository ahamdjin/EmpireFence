import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Review the website use terms, estimate limitations, and communication conditions for Empire Fence.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  const pageSchema = buildWebPageSchema({
    title: "Terms & Conditions",
    description:
      "Review the website use terms, estimate limitations, and communication conditions for Empire Fence.",
    path: "/terms-and-conditions",
    type: "WebPage",
  });

  return (
    <>
      <section className="section section--contrast legalIntro">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Legal</span>
            <h1>Terms &amp; Conditions</h1>
          </div>
          <div className="prose">
            <p>These terms govern use of the Empire Fence website and the submission of estimate requests, contact details, and project information through the site.</p>
            <p>Using the website means you accept these terms. If you do not agree, do not use the site or submit information through it.</p>
          </div>
        </div>
      </section>

      <article className="section section--soft">
        <div className="container articleBody">
          <h2>Website use</h2>
          <p>This website is provided for general information, estimate requests, and business communication. Content is intended to describe Empire Fence services and service areas, but the site does not create a binding contract by itself.</p>

          <h2>Estimate requests</h2>
          <p>Submitting a form, calling, emailing, or using the chat feature does not guarantee project acceptance, scheduling, or a fixed quote. Any estimate remains subject to site review, scope confirmation, material availability, and final approval.</p>

          <h2>Project information</h2>
          <p>Visitors are responsible for providing accurate information about the property, requested service, and visible site conditions. Incomplete or inaccurate details may affect the quality, timing, or applicability of any estimate or recommendation.</p>

          <h2>No professional guarantee from website content</h2>
          <p>Articles, service descriptions, FAQs, and city pages are intended for general guidance. Final recommendations depend on the actual property, field conditions, measurements, grade, access, transitions, and job scope reviewed during the estimate process.</p>

          <h2>Third-party tools</h2>
          <p>The site may include maps, chat, embedded forms, and other third-party services. Empire Fence is not responsible for downtime, errors, or policy changes originating from those outside platforms.</p>

          <h2>Intellectual property</h2>
          <p>Website copy, branding, layout, and visual assets created for Empire Fence may not be copied, republished, or reused without permission, except where a third-party provider owns the underlying tool or platform component.</p>

          <h2>Limitation of liability</h2>
          <p>Empire Fence is not liable for damages arising from website access issues, temporary outages, content inaccuracies, or reliance on general website information before a real project review and estimate conversation have taken place.</p>

          <h2>Changes</h2>
          <p>Empire Fence may update these terms, service descriptions, service areas, or contact workflows at any time. Continued use of the site after updates means the revised terms apply.</p>

          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href="mailto:empirefenceinc@gmail.com">empirefenceinc@gmail.com</a> or raised by phone at <a href="tel:9513982016">(951) 398-2016</a>.</p>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
    </>
  );
}
