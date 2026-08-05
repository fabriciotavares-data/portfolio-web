
interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  impact: string;
  githubUrl?: string;
}

export const Projects = () => {
  const projectsList: Project[] = [
    {
      title: 'Plataforma de Negociação de Criptoativos Aether',
      category: 'Front-End / Data Visualization',
      description: 'Interface moderna e de ultra-alta performance para corretoras de criptomoedas. Inclui gráficos de velas (candlestick) atualizados via WebSocket, livros de ofertas em tempo real e painel dinâmico para acompanhamento de carteira.',
      technologies: ['React.js', 'Tailwind CSS', 'ApexCharts', 'WebSocket API', 'TypeScript'],
      impact: 'Redução de 42% no tempo de renderização de dados de mercado.',
      githubUrl: 'https://github.com/fabriciotavares-data/aether-finance'
    },
    {
      title: 'Modelo de Previsão de Cancelamento de SaaS (Churn)',
      category: 'Data Science / Analytics',
      description: 'Análise exploratória e modelo de aprendizado de máquina para identificar clientes corporativos sob risco de cancelamento. Acompanha uma aplicação web interativa onde o time de sucesso do cliente pode simular cenários alterando variáveis operacionais.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit', 'Jupyter Notebook'],
      impact: 'Acurácia de 89% (F1-score) mitigando a perda de receita recorrente em 15%..',
      githubUrl: 'https://github.com/fabriciotavares-data/churn-guard'
    },
    {
      title: 'Synthetix OS',
      category: 'Front-End / Creative UI',
      description: 'Um ambiente virtual que simula um sistema operacional completo direto no navegador. Conta com gerenciamento de janelas arrastáveis, reprodutor de mídia persistente, terminal interativo integrado e editor de textos em Markdown.',
      technologies: ['Next.js', 'Framer Motion', 'Styled Components', 'Zustand'],
      impact: 'Score 100/100 na avaliação de performance do Google Lighthouse.',
      githubUrl: 'https://github.com/fabriciotavares-data/synthetix-os'
    },
    {
      title: 'Monitoramento de Qualidade do Ar e Emissões',
      category: 'Data Science / Visualização Geospacial',
      description: 'Dashboard que consome APIs e processa dados abertos de sensores de poluição das principais metrópoles globais. Gera mapas de calor interativos e modelos autoregressivos para prever picos de poluição atmosférica nos próximos 7 dias.',
      technologies: ['Python (Flask)', 'Leaflet.js', 'Chart.js', 'PostgreSQL', 'Docker'],
      impact: 'Processamento de mais de 50 mil registros via clusterização dinâmica.',
      githubUrl: 'https://github.com/fabriciotavares-data/air-quality'
    }
  ];

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">Projetos em Destaque</h2>
        <p className="section-subtitle">Casos práticos de interfaces eficientes e análises aprofundadas.</p>
        
        <div className="projects-grid">
          {projectsList.map((project, idx) => (
            <article key={idx} className="project-card glass-card" aria-labelledby={`project${idx}-title`}>
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <h3 id={`project${idx}-title`} className="project-title">{project.title}</h3>
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="project-tech-list" aria-label={`Tecnologias utilizadas no projeto ${project.title}`}>
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="metric-container" aria-label="Métrica de impacto do projeto">
                  <span className="metric-label">Métrica de Impacto:</span>
                  <span className="metric-value text-teal">{project.impact}</span>
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-github-btn"
                  >
                    Ver no GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
