import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="main-header">
      <div className="header-container">
        <a href="#home" className="logo" aria-label="Voltar para a página inicial" onClick={closeMenu}>
          <span className="logo-accent">&lt;</span>Dev<span className="logo-divider">&amp;</span>Data<span className="logo-accent">/&gt;</span>
        </a>
        
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-controls="primary-navigation" 
          aria-expanded={isMenuOpen} 
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Overlay escuro do menu mobile */}
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={closeMenu}
          aria-hidden="true"
        />

        <nav id="primary-navigation" className={`nav-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Menu de Navegação Principal">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link" onClick={closeMenu}>Início</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>Sobre Mim</a></li>
            <li><a href="#experience" className="nav-link" onClick={closeMenu}>Trajetória</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projetos</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
