import { SectionTitle } from "./ui";

export function FaqSection({ faqs }) {
  return (
    <section className="faqSection sectionShell" id="faq">
      <div className="faqSection__intro">
        <SectionTitle
          eyebrow="Questions"
          title="A few common questions."
        />
      </div>

      <div className="faqSection__list">
        {faqs.slice(0, 3).map((item) => (
          <details key={item.question} className="faqItem" data-reveal>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
