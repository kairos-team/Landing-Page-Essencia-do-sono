import { SparkleIcon } from './Icons';

export function AudienceCard({ text }: { text: string }) {
  return (
    <article className="audience-card">
      <SparkleIcon className="audience-card__icon" />
      <p className="audience-card__text">{text}</p>
    </article>
  );
}
