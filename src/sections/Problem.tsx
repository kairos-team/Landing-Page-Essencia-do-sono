import { Container } from '../components/Container';
import { MoonIcon } from '../components/Icons';
import { NumberedCard } from '../components/NumberedCard';
import { SectionHeader } from '../components/SectionHeader';
import { problems } from '../data/content';

export function Problem() {
  return (
    <section className="section problem">
      <Container className="problem__grid">
        <div className="problem__intro">
          <SectionHeader
            eyebrow="Você não está sozinha"
            title={
              <>
                Quando o bebê não dorme <br />
                bem, a família inteira sente.
              </>
            }
          />
          <p className="section-text">
            Despertares frequentes, dificuldade para iniciar o sono, rotina desorganizada e dúvidas sobre o que fazer
            podem transformar as noites em uma sequência de tentativas. E cada bebê tem uma realidade diferente, por isso
            copiar uma rotina pronta da internet nem sempre resolve.
          </p>
        </div>

        <div className="problem__aside">
          <div className="problem__cards">
            {problems.map((item) => (
              <NumberedCard key={item.number} {...item} />
            ))}
          </div>
          <div className="problem__callout">
            <MoonIcon className="problem__moon" />
            <p>
              Você não precisa de mais uma receita pronta.
              <br />
              Precisa entender o que está acontecendo com o seu bebê.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
