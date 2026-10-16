import { Container } from '../components/Container';
import { PlanCard } from '../components/PlanCard';
import { SectionHeader } from '../components/SectionHeader';
import { plans } from '../data/content';

export function Plans() {
  return (
    <section className="section plans" id="planos">
      <Container>
        <SectionHeader eyebrow="Planos" title="Escolha o nível de acompanhamento que sua família precisa." />
        <div className="plans__grid">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
