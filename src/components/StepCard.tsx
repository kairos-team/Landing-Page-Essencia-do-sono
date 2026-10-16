import type { NumberedItem } from '../data/content';
import { MultilineText } from './MultilineText';

export function StepCard({ number, title, text }: NumberedItem) {
  return (
    <article className="step-card">
      <span className="step-card__number">{number}</span>
      <h3 className="step-card__title">
        <MultilineText text={title} />
      </h3>
      <p className="step-card__text">{text}</p>
    </article>
  );
}
