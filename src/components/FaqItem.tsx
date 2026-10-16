import { useId } from 'react';
import type { Faq } from '../data/content';
import { ChevronDownIcon } from './Icons';

interface FaqItemProps extends Faq {
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  const answerId = useId();
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`.trim()}>
      <button className="faq-item__question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={onToggle}>
        <span>{question}</span>
        <ChevronDownIcon className="faq-item__chevron" />
      </button>
      <div className="faq-item__answer" id={answerId} role="region">
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
