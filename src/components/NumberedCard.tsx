import type { NumberedItem } from '../data/content';
import { MultilineText } from './MultilineText';

interface NumberedCardProps extends NumberedItem {
  /** "outline": cards claros da seção de dores · "glass": cards translúcidos da seção escura */
  variant?: 'outline' | 'glass';
}

export function NumberedCard({ number, title, text, variant = 'outline' }: NumberedCardProps) {
  return (
    <article className={`numbered-card numbered-card--${variant}`}>
      <span className="numbered-card__number">{number}</span>
      <h3 className="numbered-card__title">
        <MultilineText text={title} />
      </h3>
      <p className="numbered-card__text">{text}</p>
    </article>
  );
}
