import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { WHATSAPP_URL } from '../data/content';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <svg className="hero__waves" viewBox="0 0 900 760" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-40 160C120 260 140 520 330 640s420 70 560 160" />
        <path d="M-60 260C80 380 90 600 280 690s400 30 520 120" />
        <path d="M0 80c120 140 170 380 380 470" />
      </svg>

      <div className="hero__media">
        <img src="/images/hero.jpg" alt="Mãe sorrindo enquanto abraça seu bebê recém-nascido dormindo" />
      </div>

      <Container className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Consultoria de sono infantil</p>
          <h1 className="hero__title">
            Noites mais tranquilas <br />
            começam com <br />
            uma rotina que <br />
            respeita o seu bebê.
          </h1>
          <p className="hero__text">
            Consultoria de sono infantil individualizada para ajudar sua família a compreender o sono do bebê, ajustar a
            rotina e construir noites mais tranquilas com acolhimento e acompanhamento próximo.
          </p>
          <Button href={WHATSAPP_URL} withArrow>
            Quero melhorar o sono do meu bebê
          </Button>
          <p className="hero__note">Atendimento online e acompanhamento individual.</p>
        </div>

        <p className="hero__handwritten" aria-hidden="true">
          Toda família
          <br />
          merece noites
          <br />
          mais tranquilas ♡
        </p>
      </Container>
    </section>
  );
}
