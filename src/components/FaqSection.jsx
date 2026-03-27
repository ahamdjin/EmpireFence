import { SectionTitle } from "./ui";

export function FaqSection({ faqs }) {
  return (
    <section className="faqSection sectionShell" id="faq">
      <div className="faqSection__intro">
        <SectionTitle
          eyebrow="Questions"
          title="What customers usually ask before booking."
          body="Clear answers first, then a faster estimate once the property scope makes sense."
        />
      </div>

      <div className="faqSection__list">
        {faqs.map((item) => (
          <details key={item.question} className="faqItem" data-reveal>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
