export const Hero = () => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-bg-glow" aria-hidden="true"></div>
      <div className="container hero-container">
        <h1 id="hero-title" className="hero-headline">
          Data Science &amp; Front-End: <br className="hero-br" />
          <span className="gradient-text">Transformando Dados em Decisões de Negócio.</span>
        </h1>
        <p className="hero-subheading">
          Desenvolvedor &amp; Analista de Dados em formação (conclusão em 2027). Especialista em construir dashboards inteligentes, modelos preditivos de Machine Learning e interfaces web de alto impacto visual. Buscando posições de Estágio ou Trainee para gerar valor prático desde o primeiro dia.
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
