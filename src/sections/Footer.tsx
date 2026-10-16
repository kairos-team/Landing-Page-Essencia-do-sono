import { Container } from '../components/Container';
import { WhatsAppIcon } from '../components/Icons';
import { WHATSAPP_URL } from '../data/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>© 2026 Essência do Sono. Todos os direitos reservados.</p>
        <nav className="site-footer__links" aria-label="Links do rodapé">
          <a href="#">Política de Privacidade (LGPD)</a>
          <span aria-hidden="true">·</span>
          <a href="#">Termos de Uso</a>
          <span aria-hidden="true">·</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="site-footer__whatsapp">
            <WhatsAppIcon />
            Contato WhatsApp
          </a>
        </nav>
        <p>Desenvolvido por Assessoria Cosbor</p>
      </Container>
    </footer>
  );
}
