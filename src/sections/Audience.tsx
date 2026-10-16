import { AudienceCard } from '../components/AudienceCard';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { audience } from '../data/content';

export function Audience() {
  return (
    <section className="section audience">
      <Container>
        <SectionHeader eyebrow="Para quem é" title="A Essência do Sono pode ajudar sua família se..." />
        <div className="audience__grid">
          {audience.map((text) => (
            <AudienceCard key={text} text={text} />
          ))}
        </div>
      </Container>
    </section>
  );
}
