import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { WHATSAPP_URL } from '../data/content';

export function FinalCta() {
  return (
    <section className="final-cta">
      <Container className="final-cta__inner">
        <Logo variant="dark" className="final-cta__logo" />
        <div className="final-cta__text">
          <h2>
            Sua família não precisa <br />
            continuar tentando descobrir <br />
            sozinha o que fazer a cada noite.
          </h2>
          <p>Vamos entender a rotina do seu bebê e encontrar os ajustes que façam sentido para a realidade de vocês.</p>
        </div>
        <div className="final-cta__action">
          <Button href={WHATSAPP_URL} variant="blush" withArrow>
            Conversar com a Stephanie
          </Button>
          <p>Atendimento online · Essência do Sono</p>
        </div>
      </Container>
    </section>
  );
}
