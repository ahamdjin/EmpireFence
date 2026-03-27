import { SectionTitle } from "./ui";

export function FaqSection({ faqs }) {
  return (
    <section className="faqSection" id="faq">
      <SectionTitle
        eyebrow="FAQ"
        title="Local questions answered without turning the site into a wall of text."
        body="Keep the buying path easy to trust. Keep the answers short enough to scan."
      />

      <div className="faqList">
        {faqs.map((faq, index) => (
          <details key={faq.question} className="faqItem" data-reveal open={index === 0}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
