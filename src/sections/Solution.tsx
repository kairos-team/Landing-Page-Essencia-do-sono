import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { NumberedCard } from '../components/NumberedCard';
import { SectionHeader } from '../components/SectionHeader';
import { solutionItems, WHATSAPP_URL } from '../data/content';

export function Solution() {
  return (
    <section className="section solution">
      <svg className="solution__rings" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="560" cy="300" r="420" />
        <circle cx="560" cy="300" r="330" />
        <circle cx="560" cy="300" r="240" />
      </svg>

      <Container className="solution__grid">
        <div className="solution__intro">
          <SectionHeader
            tone="dark"
            eyebrow="A solução"
            title={
              <>
                Uma orientação construída <br />
                para a realidade da sua família.
              </>
            }
          />
          <p className="section-text section-text--dark">
            Na Essência do Sono, o <strong>acompanhamento</strong> começa entendendo a dinâmica familiar, a rotina e as
            necessidades da criança. A partir dessa análise, Stephanie orienta os ajustes necessários e acompanha a
            família durante o período contratado para que as dúvidas não precisem ser resolvidas sozinhas.
          </p>
          <Button href={WHATSAPP_URL} variant="blush" withArrow>
            Quero conversar sobre meu bebê
          </Button>
        </div>

        <div className="solution__cards">
          {solutionItems.map((item) => (
            <NumberedCard key={item.number} variant="glass" {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
