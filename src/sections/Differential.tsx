import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export function Differential() {
  return (
    <section className="section differential">
      <Container className="differential__grid">
        <div>
          <SectionHeader
            eyebrow="O diferencial"
            title={
              <>
                Seu bebê não é igual ao bebê do <br />
                vídeo que você viu na internet.
              </>
            }
          />
          <p className="section-text">
            Rotinas prontas ignoram justamente o que mais importa: idade, dinâmica da casa, comportamento, necessidades
            da criança e realidade dos pais.
          </p>
          <p className="section-text">
            Por isso, a proposta da Essência do Sono é trabalhar a partir da análise individual do caso e acompanhar a
            implementação prática dos ajustes.
          </p>
        </div>

        <figure className="differential__figure">
          <img src="/images/bebe-nuvem.jpg" alt="Ilustração de um bebê dormindo sobre uma nuvem sob a lua e as estrelas" />
        </figure>
      </Container>
    </section>
  );
}
