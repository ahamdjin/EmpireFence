import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how Empire Fence collects, uses, and protects contact details, project information, and website interactions.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const pageSchema = buildWebPageSchema({
    title: "Privacy Policy",
    description:
      "Read how Empire Fence collects, uses, and protects contact details, project information, and website interactions.",
    path: "/privacy-policy",
    type: "WebPage",
  });

  return (
    <>
      <section className="section section--contrast legalIntro">
        <div className="container splitIntro">
          <div>
            <span className="eyebrow">Legal</span>
            <h1>Privacy Policy</h1>
          </div>
          <div className="prose">
            <p>This policy explains what information Empire Fence collects, how it is used, and how clients can contact the business with questions about their data.</p>
            <p>By using this website or sending project details through a contact form, phone call, email, or chat tool, you agree to the practices described below.</p>
          </div>
        </div>
      </section>

      <article className="section section--soft">
        <div className="container articleBody">
          <h2>Information collected</h2>
          <p>Empire Fence may collect contact details such as name, phone number, email address, property address, city, service interest, project notes, and any photos or files voluntarily submitted for estimate or planning purposes.</p>

          <h2>How information is used</h2>
          <p>Project information is used to review estimate requests, respond to phone or email inquiries, schedule follow-up, improve communication about the requested work, and maintain internal business records connected to active or past client conversations.</p>

          <h2>Forms, widgets, and third-party tools</h2>
          <p>This website uses third-party tools for forms, chat, analytics, maps, and related communication features. When a visitor uses those tools, certain data may be processed by the relevant provider in order to deliver the service. Empire Fence does not control the privacy practices of every outside platform used through the site.</p>

          <h2>Cookies and analytics</h2>
          <p>The website may use cookies, basic analytics, or technical scripts to understand site activity, improve page performance, and maintain form or chat functionality. These tools may collect browser, device, and interaction data.</p>

          <h2>How information is shared</h2>
          <p>Empire Fence does not sell personal information. Information may be shared with service providers, software platforms, or contractors only when reasonably necessary to operate the website, communicate with a lead, schedule work, or support the requested project.</p>

          <h2>Data security</h2>
          <p>Reasonable measures are used to protect information submitted through the site, but no online system can guarantee absolute security. Visitors should avoid sending sensitive financial or highly confidential information through general web forms or email unless specifically requested through a secure method.</p>

          <h2>Retention</h2>
          <p>Inquiry and project-related information may be retained for business records, follow-up, quality review, legal compliance, or future service history unless deletion is required by law.</p>

          <h2>Your choices</h2>
          <p>You may request updates to inaccurate contact details or ask questions about information previously submitted through the site. If you would like Empire Fence to review or remove submitted data where reasonably possible, contact the business directly.</p>

          <h2>Contact</h2>
          <p>Privacy questions can be sent to <a href="mailto:empirefenceinc@gmail.com">empirefenceinc@gmail.com</a> or raised by phone at <a href="tel:9513982016">(951) 398-2016</a>.</p>

          <h2>Policy updates</h2>
          <p>This policy may be updated from time to time as the website, software stack, or business operations change. The latest version published on this page controls.</p>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
    </>
  );
}
