import type { ReactNode } from 'react';
import { ArrowRightIcon } from './Icons';

type ButtonVariant = 'primary' | 'blush';
type ButtonSize = 'sm' | 'lg';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  block?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  withArrow = false,
  block = false,
  className = '',
}: ButtonProps) {
  const isExternal = href.startsWith('http');
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, block && 'btn--block', className].filter(Boolean).join(' ');

  return (
    <a className={classes} href={href} {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}>
      <span>{children}</span>
      {withArrow && <ArrowRightIcon className="btn__arrow" />}
    </a>
  );
}
