export const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">Sobre Mim</h2>
        <div className="about-grid">
          
          {/* Coluna Texto */}
          <div className="about-text-column">
            <p className="about-lead">
              Minha jornada profissional conecta a comunicação estratégica ao poder dos dados e da tecnologia. Com formação em tecnologia em andamento (previsão de conclusão em 2027), foco meus estudos e projetos práticos na criação de soluções de análise de dados, automação de processos e desenvolvimento de aplicações web modernas.
            </p>
            <p className="about-body">
              Atualmente atuo como Monitor de Eventos Infantis (Freelancer), exercitando diariamente inteligência emocional, oratória e gestão de crise. Minhas experiências anteriores proporcionaram forte disciplina operacional e uso avançado de Excel (no setor administrativo) e alta habilidade de negociação e foco no cliente (no setor imobiliário). Unindo essa facilidade relacional e dinamismo a conhecimentos em Python, SQL e desenvolvimento web, busco posições de estágio ou trainee para gerar valor prático.
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
