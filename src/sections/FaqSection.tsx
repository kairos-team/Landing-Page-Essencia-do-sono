import { useState } from 'react';
import { Container } from '../components/Container';
import { FaqItem } from '../components/FaqItem';
import { SectionHeader } from '../components/SectionHeader';
import { faqs } from '../data/content';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Divide as perguntas em duas colunas, como no layout.
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section className="section faq" id="duvidas">
      <Container>
        <SectionHeader eyebrow="Dúvidas frequentes" title="Dúvidas antes de começar?" />
        <div className="faq__grid">
          {columns.map((column, columnIndex) => (
            <div className="faq__column" key={columnIndex}>
              {column.map((faq, i) => {
                const index = columnIndex * half + i;
                return (
                  <FaqItem
                    key={faq.question}
                    {...faq}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
