import { Chip } from '../components/Chip';
import { SectionHeader } from '../components/SectionHeader';
import { credentials } from '../data/content';

export function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__media">
        <img src="/images/stephanie.jpg" alt="Stephanie, consultora de sono infantil da Essência do Sono" />
        <p className="about__quote">
          Do meu filho para a sua família, com todo o<br />
          meu conhecimento e acolhimento ♡
        </p>
      </div>

      <div className="about__content">
        <SectionHeader
          className="about__header"
          eyebrow="Por trás da essência"
          title={
            <>
              Antes de orientar outras famílias, <br />
              eu também precisei entender <br />o sono do meu próprio filho.
            </>
          }
        />
        <div className="about__text">
          <p className="section-text">
            Sou Stephanie, mãe do Benício, formada em Direito, servidora pública e especialista em sono infantil pelo
            Instituto do Sono Infantil e pela escola canadense CAPPE.
          </p>
          <p className="section-text">
            Meu interesse pelo sono começou ainda durante a gestação, em plena pandemia. Quando Benício nasceu, mergulhei
            no assunto e consegui ajudá-lo a desenvolver autonomia de sono. Comecei então a compartilhar o que aprendia
            com outras mães.
          </p>
          <p className="section-text">
            O que antes era ajuda foi crescendo e virou profissão. Vieram as especializações, os atendimentos e, depois,
            a Essência do Sono, com o propósito de proporcionar direcionamento, conhecimento e acolhimento para que cada
            família encontre uma rotina possível para a sua realidade.
          </p>
        </div>
        <div className="about__chips">
          {credentials.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </div>
    </section>
  );
}
