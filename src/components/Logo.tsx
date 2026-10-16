interface LogoProps {
  /** "light": para fundos claros (topo) · "dark": para fundos escuros (rodapé) */
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const src = variant === 'light' ? '/images/logo.png' : '/images/logo-footer.png';
  return <img className={`logo logo--${variant} ${className}`.trim()} src={src} alt="Essência do Sono" />;
}
