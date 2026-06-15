export const Hero = () => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-bg-glow" aria-hidden="true"></div>
      <div className="container hero-container">
        <h1 id="hero-title" className="hero-headline">
          Transformando Dados em Interfaces. <br />
          <span className="gradient-text">Construindo o Futuro da Web Visual.</span>
        </h1>
        <p className="hero-subheading">
          Olá, eu sou um Desenvolvedor Front-End &amp; Analista de Dados. Especialista em projetar aplicações web de alto desempenho, construir interfaces elegantes e traduzir grandes volumes de dados complexos em visualizações intuitivas e acionáveis.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary" id="btn-view-projects" aria-label="Navegar até a seção de projetos e portfólio">
            <span className="btn-glow"></span>
            Ver Projetos
          </a>
          <a href="#contact" className="btn btn-secondary" id="btn-contact-direct" aria-label="Navegar até a seção de contato para iniciar um projeto">
            Falar Comigo
          </a>
        </div>
      </div>
    </section>
  );
};
