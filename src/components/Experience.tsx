interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Gestão de Dinâmica Social & Resolução de Crise',
      company: 'Monitoria de Eventos & Recreação (Freelancer)',
      period: 'Atuação Atual',
      description: 'Atuação em ambiente dinâmico de alta energia, liderando turmas e exercitando tomada de decisão rápida sob alta pressão.',
      highlights: [
        'Resolução ágil de conflitos e gestão de incidentes em tempo real com foco na segurança e experiência das pessoas.',
        'Comunicação interpessoal direta e adaptativa para negociação e mediação de expectativas com diferentes perfis.',
        'Capacidade de coordenação operacional com alto nível de energia e resiliência psicológica.'
      ],
      skills: ['Comunicação Interpessoal', 'Gestão de Crise sob Pressão', 'Inteligência Emocional', 'Tomada de Decisão Ágil']
    },
    {
      role: 'Análise de Funil & Qualificação Comercial de Leads',
      company: 'Atendimento Comercial Imobiliário',
      period: 'Experiência Anterior',
      description: 'Primeiro ponto de contato estratégico com potenciais clientes para empreendimentos residenciais de médio e alto padrão.',
      highlights: [
        'Qualificação criteriosa de leads baseada no diagnóstico de perfil socioeconômico, prioridades de consumo e capacidade financeira.',
        'Aplicação de técnicas de escuta ativa e comunicação assertiva orientada para valor e conversão.',
        'Alinhamento estratégico entre clientes e corretores especialistas para otimizar o tempo de atendimento e aumentar taxas de fechamento.'
      ],
      skills: ['Análise de Funil', 'Qualificação de Leads', 'Negociação Comercial', 'Comunicação Estratégica']
    },
    {
      role: 'Suporte Operacional & Automação Administrativa',
      company: 'Jovem Aprendiz Administrativo',
      period: 'Experiência Anterior',
      description: 'Suporte às rotinas corporativas com foco em organização de dados internos, relatórios operacionais e controle de caixa.',
      highlights: [
        'Desenvolvimento de planilhas dinâmicas e automação de relatórios gerenciais no Microsoft Excel.',
        'Tratamento e higienização de bases de dados operacionais para controle de ponto e fechamento de folha.',
        'Acompanhamento mensal de fluxo de caixa e relatórios financeiros com foco na precisão dos números.'
      ],
      skills: ['Excel Avançado', 'Tratamento de Dados', 'Relatórios Gerenciais', 'Automação Operacional']
    }
  ];

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">Minha Trajetória</h2>
        <p className="section-subtitle">Como minhas experiências anteriores moldaram meu perfil operacional e analítico.</p>
        
        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot-outer" aria-hidden="true">
                <div className="timeline-dot-inner"></div>
              </div>
              
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <span className="experience-period">{exp.period}</span>
                  <h3 className="experience-role">{exp.role}</h3>
                  <h4 className="experience-company text-teal">{exp.company}</h4>
                </div>
                
                <div className="timeline-body">
                  <p className="experience-desc">{exp.description}</p>
                  
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="timeline-footer">
                  <div className="experience-skills">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
