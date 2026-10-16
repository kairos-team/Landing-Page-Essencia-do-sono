import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}

export function SectionHeader({ eyebrow, title, tone = 'light', className = '' }: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${tone} ${className}`.trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </header>
  );
}
