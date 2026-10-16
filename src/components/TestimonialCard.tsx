import type { Testimonial } from '../data/content';
import { PinIcon, StarIcon } from './Icons';

export function TestimonialCard({ location, text, name, role }: Testimonial) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__top">
        <div className="testimonial-card__stars" role="img" aria-label="5 de 5 estrelas">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <span className="testimonial-card__location">
          <PinIcon className="testimonial-card__pin" />
          {location}
        </span>
      </div>
      <span className="testimonial-card__quote" aria-hidden="true">
        “
      </span>
      <blockquote className="testimonial-card__text">{text}</blockquote>
      <footer className="testimonial-card__author">
        <strong>{name}</strong>
        <span>{role}</span>
      </footer>
    </article>
  );
}
