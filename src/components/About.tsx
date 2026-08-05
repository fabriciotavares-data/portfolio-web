export const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">Sobre Mim</h2>
        <div className="about-grid">
          
          {/* Coluna Texto */}
          <div className="about-text-column">
            <p className="about-lead">
              Conecto a inteligência analítica de dados à precisão do desenvolvimento Front-End. Em minha formação tecnológica em andamento (previsão de conclusão em 2027), desenvolvo soluções orientadas a negócios: da modelagem preditiva ao dashboard interativo em React.
            </p>
            <p className="about-body">
              Minha trajetória combina competências relacionais sólidas e facilidade de comunicação — refinadas no atendimento comercial imobiliário e na mediação social em eventos — com rigor operacional e tratamento de dados no setor administrativo.
            </p>
            <p className="about-body">
              Unindo essa versatilidade relacional ao conhecimento em Python, SQL, Machine Learning e desenvolvimento web moderno, busco oportunidades de Estágio ou Trainee para transformar volumes de dados em dashboards acessíveis e valor estratégico imediato.
            </p>
          </div>
          
          {/* Coluna Habilidades (Badges) */}
          <div className="about-skills-column" aria-label="Habilidades e Competências Profissionais">
            <div className="skills-panel glass-card">
              <h3 className="skills-panel-title">Ficha Técnica &amp; Competências</h3>
              
              <div className="skills-category">
                <h4>Core Front-End</h4>
                <div className="skills-badges">
                  <span className="badge badge-frontend">React.js</span>
                  <span className="badge badge-frontend">Next.js</span>
                  <span className="badge badge-frontend">TypeScript</span>
                  <span className="badge badge-frontend">Tailwind CSS</span>
                  <span className="badge badge-frontend">JavaScript (ES6+)</span>
                  <span className="badge badge-frontend">HTML5/CSS3</span>
                </div>
              </div>
              
              <div className="skills-category">
                <h4>Data Science &amp; Analytics</h4>
                <div className="skills-badges">
                  <span className="badge badge-datascience">Python</span>
                  <span className="badge badge-datascience">SQL (PostgreSQL)</span>
                  <span className="badge badge-datascience">Pandas</span>
                  <span className="badge badge-datascience">NumPy</span>
                  <span className="badge badge-datascience">Scikit-Learn</span>
                </div>
              </div>
              
              <div className="skills-category">
                <h4>Visualização de Dados</h4>
                <div className="skills-badges">
                  <span className="badge badge-dataviz">Chart.js</span>
                  <span className="badge badge-dataviz">ApexCharts</span>
                  <span className="badge badge-dataviz">D3.js</span>
                  <span className="badge badge-dataviz">Tailwind Charts</span>
                </div>
              </div>
              
              <div className="skills-category">
                <h4>Ferramentas &amp; DevOps</h4>
                <div className="skills-badges">
                  <span className="badge badge-tools">Git</span>
                  <span className="badge badge-tools">Docker</span>
                  <span className="badge badge-tools">Vercel</span>
                  <span className="badge badge-tools">Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
