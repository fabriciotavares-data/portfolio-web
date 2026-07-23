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
      role: 'Monitor de Eventos & Recreação Infantil',
      company: 'Recreação & Eventos',
      period: 'Atuação atual (Freelancer)',
      description: 'Responsável pela gestão de grupos, entretenimento e mediação social em eventos de ritmo acelerado.',
      highlights: [
        'Coordenação operacional de atividades recreativas de forma ágil e segura.',
        'Desenvolvimento de alta inteligência interpessoal, mediação de conflitos e comunicação com pais e responsáveis.',
        'Capacidade de adaptação a públicos dinâmicos e trabalho de alta energia sob pressão.'
      ],
      skills: ['Comunicação Ativa', 'Inteligência Emocional', 'Oratória', 'Gestão de Crise']
    },
    {
      role: 'Atendimento Comercial & Qualificação de Leads',
      company: 'Setor Imobiliário',
      period: 'Experiência anterior',
      description: 'Atuação estratégica no funil de vendas, sendo o primeiro ponto de contato com potenciais clientes (leads) para empreendimentos residenciais de médio e alto padrão.',
      highlights: [
        'Qualificação de leads: análise de perfil socioeconômico, necessidades habitacionais e potencial de compra.',
        'Desenvolvimento de técnicas refinadas de comunicação, escuta ativa e negociação comercial.',
        'Encaminhamento estratégico e alinhamento de expectativas entre clientes e corretores especialistas para aumentar a taxa de conversão.'
      ],
      skills: ['Comunicação', 'Negociação', 'Gestão de Leads', 'Estratégia de Conversão']
    },
    {
      role: 'Jovem Aprendiz Administrativo',
      company: 'Suporte Operacional & Administrativo',
      period: 'Experiência anterior',
      description: 'Suporte direto às rotinas administrativas da empresa, com foco na organização de dados internos, controle de fluxos operacionais e suporte financeiro.',
      highlights: [
        'Controle de ponto de funcionários e auxílio no fechamento de folhas de pagamento.',
        'Elaboração de relatórios gerenciais e acompanhamentos operacionais mensais.',
        'Desenvolvimento e manutenção de planilhas financeiras de controle de despesas e fluxo de caixa.',
        'Uso avançado do Microsoft Excel para automação de tarefas manuais e geração de gráficos de acompanhamento.'
      ],
      skills: ['Excel Avançado', 'Organização de Dados', 'Relatórios Mensais', 'Controle Financeiro']
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
