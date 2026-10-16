import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { CloseIcon, MenuIcon } from '../components/Icons';
import { Logo } from '../components/Logo';
import { navLinks, WHATSAPP_URL } from '../data/content';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''} ${isMenuOpen ? 'site-header--open' : ''}`}>
      <Container className="site-header__inner">
        <a href="#inicio" className="site-header__brand" onClick={closeMenu}>
          <Logo />
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href={WHATSAPP_URL} size="sm" className="site-header__cta">
          Quero conversar
        </Button>

        <button
          type="button"
          className="site-header__toggle"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>
    </header>
  );
}
