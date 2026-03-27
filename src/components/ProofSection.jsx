import { QuoteIcon } from "./icons";
import { SectionTitle } from "./ui";

export function ProofSection({ proof }) {
  return (
    <section className="proofSection">
      <div className="sectionShell proofSection__inner">
        <div className="proofSection__top">
          <SectionTitle eyebrow={proof.eyebrow} title={proof.title} tone="light" />

          <article className="proofQuote" data-reveal>
            <QuoteIcon />
            <blockquote>{proof.testimonial.quote}</blockquote>
            <p>{proof.testimonial.source}</p>
          </article>
        </div>

        <div className="proofSection__grid">
          <div className="proofSteps" data-reveal>
            {proof.process.map((step, index) => (
              <article key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
