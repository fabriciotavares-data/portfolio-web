export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="logo-accent">&lt;</span>Dev<span className="logo-divider">&amp;</span>Data<span className="logo-accent">/&gt;</span>
          <p className="footer-meta">Exibindo telemetria profissional ativa em tempo real.</p>
        </div>
        
        <div className="footer-nav">
          <nav aria-label="Links Rápidos do Rodapé">
            <ul className="footer-links">
              <li><a href="#home">Voltar ao Topo</a></li>
              <li><a href="#about">Trajetória</a></li>
              <li><a href="#projects">Portfólio</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026. Desenvolvido com foco em performance e dados.</p>
        </div>
      </div>
    </footer>
  );
};
