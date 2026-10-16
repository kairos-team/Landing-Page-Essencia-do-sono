import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { StepCard } from '../components/StepCard';
import { steps } from '../data/content';

export function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <svg className="how__rings" viewBox="0 0 200 300" fill="none" aria-hidden="true">
        <circle cx="0" cy="150" r="118" />
        <circle cx="0" cy="150" r="88" />
      </svg>

      <Container>
        <div className="how__head">
          <SectionHeader
            eyebrow="Como funciona"
            title={
              <>
                Um acompanhamento pensado <br />
                do diagnóstico à execução.
              </>
            }
          />
          <p className="section-text how__lead">
            Um processo simples e individualizado para que você tenha clareza do que fazer em cada etapa, sem fórmulas
            prontas.
          </p>
        </div>

        <div className="how__steps">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
