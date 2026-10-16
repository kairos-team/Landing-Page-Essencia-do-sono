import { WHATSAPP_URL, type Plan } from '../data/content';
import { Button } from './Button';
import { MultilineText } from './MultilineText';

export function PlanCard({ title, description, price, featured = false }: Plan) {
  return (
    <article className={`plan-card ${featured ? 'plan-card--featured' : ''}`.trim()}>
      {featured && <span className="plan-card__dot" aria-hidden="true" />}
      <h3 className="plan-card__title">
        <MultilineText text={title} />
      </h3>
      <p className="plan-card__description">{description}</p>
      <hr className="plan-card__divider" />
      <p className="plan-card__price">
        <span className="plan-card__currency">R$</span>
        {price}
      </p>
      <Button href={WHATSAPP_URL} variant="blush" size="sm" block className="plan-card__button">
        Quero falar com a Stephanie
      </Button>
    </article>
  );
}
