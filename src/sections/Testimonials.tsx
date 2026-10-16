import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonials } from '../data/content';

export function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos">
      <Container>
        <SectionHeader eyebrow="Depoimentos" title="Famílias que voltaram a viver noites mais tranquilas." />
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
