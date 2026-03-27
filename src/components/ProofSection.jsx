import { QuoteIcon } from "./icons";
import { SectionTitle } from "./ui";

export function ProofSection({ proof }) {
  return (
    <section className="proofSection">
      <div className="proofSection__grid">
        <div>
          <SectionTitle eyebrow={proof.eyebrow} title={proof.title} />
          <div className="proofCards">
            {proof.differentiators.map((item) => (
              <article key={item.title} className="proofCard" data-reveal>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="proofAside" data-reveal>
          <div className="proofAside__quote">
            <QuoteIcon />
            <blockquote>{proof.testimonial.quote}</blockquote>
            <span>{proof.testimonial.source}</span>
          </div>

          <div className="proofAside__process">
            {proof.process.map((step, index) => (
              <article key={step}>
                <strong>{`0${index + 1}`}</strong>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
