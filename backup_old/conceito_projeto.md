# Conceito de Projeto: Portfólio Premium - Front-End & Análise de Dados (Versão React)

Este documento serve como a especificação de design, conteúdo e estrutura para o desenvolvimento do portfólio profissional de **Desenvolvimento Front-End & Análise de Dados**. O projeto foi reformulado para utilizar uma arquitetura baseada em um **Framework Moderno (React + Vite/Next.js)**, alinhando-se com as melhores práticas de mercado e facilitando a manipulação do estado e da reatividade do dashboard de dados.

---

## 1. Conceito Visual e Direção de Design (Design Concept)

A direção visual busca unir a precisão matemática e minimalista da **Ciência de Dados** com a modernidade fluida do **Desenvolvimento Front-End**. A estética será construída sobre os seguintes pilares:

*   **Tema Dark Cyber-Analytics:** Um modo escuro profundo, que reduz a fadiga visual e destaca elementos coloridos de dados.
*   **Glassmorphism Moderado:** Utilização de painéis e cards semi-transparentes com efeito de desfoque de fundo (`backdrop-filter: blur()`), simulando camadas de informação sobrepostas.
*   **Sutileza em Neon Glows:** Elementos interativos essenciais (como botões de ação e gráficos ativos) possuirão um brilho neon suave para direcionar o olhar do usuário.
*   **Tipografia Híbrida (Modern & Tech):**
    *   **Títulos e Textos Principais:** *Plus Jakarta Sans* ou *Inter* (Neo-grotescas modernas e de alta legibilidade).
    *   **Métricas, Números e Códigos:** *JetBrains Mono* ou *Fira Code* (Fontes monoespaçadas que remetem a código limpo e dados brutos).
*   **Micro-interações de Alta Fidelidade (React Native-like Animations):** Transições suaves de estado (hovers), animações de entrada de elementos e gráficos interativos que reagem imediatamente aos filtros de estado do React.

---

## 2. Paleta de Cores (Premium Analytics Palette)

A paleta de cores foi projetada especificamente para conferir um aspecto premium, tecnológico e focado em visualização de dados de alta precisão.

| Cor | Nome Técnico | Código HEX | Aplicação no Layout |
| :--- | :--- | :--- | :--- |
| **Deep Void** | `#0B0F19` | Fundo principal da página (Backdrop). |
| **Glass Slate** | `rgba(22, 31, 48, 0.7)` | Fundo de cards, painéis do dashboard e seções secundárias. |
| **Border Steel** | `#24354F` | Borda sutil de elementos glassmorphism (1px solid). |
| **Cyber Teal** | `#00F2FE` | Cor primária, botões de ação principal (CTA), links e destaque positivo em gráficos. |
| **Electric Violet** | `#7F00FF` | Cor secundária, gradientes, badges de tecnologia avançada e efeitos de hover. |
| **Cyber Crimson** | `#FF2A54` | Cor de destaque para métricas de alerta ou linhas secundárias em gráficos comparativos. |
| **Pure Snow** | `#F8FAFC` | Texto principal, títulos e métricas de alto contraste. |
| **Muted Silver** | `#94A3B8` | Parágrafos explicativos, legendas de gráficos e rótulos secundários. |

---

## 3. Estrutura de Seções e Conteúdo Detalhado

### Seção 1: Home (Hero Section)

*   **Objetivo:** Capturar a atenção imediatamente, deixando claro o duplo foco profissional (Front-End e Dados).
*   **Composição Visual:** Um gradiente radial sutil de fundo conectando `#7F00FF` e `#00F2FE` com opacidade muito baixa (10%) no centro da tela.
*   **Título Principal:**
    > "Transformando Dados em Interfaces. Construindo o Futuro da Web Visual."
*   **Subtítulo:**
    > "Olá, eu sou um Desenvolvedor Front-End & Analista de Dados. Especialista em projetar aplicações web de alto desempenho e traduzir grandes volumes de dados complexos em dashboards interativos intuitivos e acionáveis."
*   **Chamadas para Ação (CTAs):**
    *   *Botão Principal (Preenchido com glow Cyber Teal):* "Explorar Dashboard" (Scroll suave para a Seção 4).
    *   *Botão Secundário (Borda outline Border Steel):* "Ver Projetos" (Scroll suave para a Seção 3).

---

### Seção 2: Sobre Mim (About Me)

*   **Objetivo:** Detalhar a trajetória profissional e destacar a sinergia entre o desenvolvimento de software e a análise analítica.
*   **Layout:** Duas colunas responsivas.
    *   *Coluna da Esquerda:* Texto de apresentação pessoal/profissional.
    *   *Coluna da Direita:* Um painel interativo de "Radar de Competências" ou "Barras de Proficiência" com animações suaves de carregamento.
*   **Texto Principal:**
    > "Minha jornada profissional vive na exata interseção entre a engenharia de software e a ciência de dados. Acredito firmemente que um dado só é verdadeiramente poderoso quando é compreensível e acionável. Por isso, me especializei em unir a precisão matemática e estatística da análise de dados à sofisticação e fluidez do desenvolvimento front-end moderno.
    >
    > Com sólida experiência na construção de interfaces reativas utilizando frameworks modernos e na manipulação avançada de pipelines de dados, crio soluções completas de ponta a ponta. Minha missão diária é extrair insights valiosos de fontes complexas e traduzi-los em experiências digitais limpas, rápidas e acessíveis, ajudando empresas a tomarem decisões de negócio inteligentes e baseadas em evidências."
*   **Badges de Tecnologias (Categorizados):**
    *   **Core Front-End:** `React.js`, `Vite`, `Next.js`, `TypeScript`, `Tailwind CSS`, `JavaScript (ES6+)`, `HTML5/CSS3`
    *   **Data Science & Analytics:** `Python`, `SQL (PostgreSQL)`, `Pandas`, `NumPy`, `Scikit-Learn`
    *   **Visualização de Dados:** `Recharts`, `Chart.js`, `ApexCharts`, `D3.js`
    *   **Ferramentas & DevOps:** `Git`, `Docker`, `Vercel`, `Supabase`

---

### Seção 3: Projetos (Portfolio Showcase)

Esta seção exibe quatro projetos autorais selecionados, demonstrando competências práticas tanto em engenharia de interface quanto em modelagem de dados. Cada projeto terá um card com efeito glassmorphism e link direto para o repositório/demonstração.

#### Projeto 1: Aether Finance (Front-End & Visualização)
*   **Categoria:** Front-End / Data Visualization
*   **Título:** "Plataforma de Negociação de Criptoativos Aether"
*   **Descrição:** Interface moderna e de ultra-alta performance para corretoras de criptomoedas. Inclui gráficos de velas (*candlestick*) atualizados via WebSocket, livros de ofertas em tempo real e painel dinâmico para acompanhamento de carteira.
*   **Tecnologias:** `React.js`, `Tailwind CSS`, `ApexCharts`, `WebSocket API`, `TypeScript`
*   **Métrica de Impacto:** Redução no tempo de renderização de dados de mercado em 42% por meio de otimizações de hooks do React.

#### Projeto 2: ChurnGuard Predictive (Data Analytics)
*   **Categoria:** Data Science / Analytics
*   **Título:** "Modelo de Previsão de Cancelamento de SaaS (Churn)"
*   **Descrição:** Análise exploratória e modelo de aprendizado de máquina para identificar clientes corporativos sob risco de cancelamento. Acompanha uma aplicação web interativa onde o time de sucesso do cliente pode simular cenários alterando variáveis operacionais.
*   **Tecnologias:** `Python`, `Scikit-Learn`, `Pandas`, `Streamlit`, `Jupyter Notebook`
*   **Métrica de Impacto:** O modelo atingiu 89% de acurácia (F1-score), auxiliando o time de retenção a mitigar a perda de receita recursiva em 15%.

#### Projeto 3: Synthetix OS (Front-End Premium)
*   **Categoria:** Front-End / Creative UI
*   **Título:** "Web Desktop & Central de Produtividade"
*   **Descrição:** Um ambiente virtual que simula um sistema operacional completo direto no navegador. Conta com gerenciamento de janelas arrastáveis, reprodutor de mídia persistente, terminal interativo integrado e editor de textos em Markdown.
*   **Tecnologias:** `Next.js`, `Framer Motion`, `Styled Components`, `Zustand`
*   **Métrica de Impacto:** Arquitetura de renderização otimizada resultando em pontuação 100/100 na avaliação de performance do Google Lighthouse.

#### Projeto 4: EcoPulse Tracker (Data Science & Visualização)
*   **Categoria:** Data Science / Visualização Geospacial
*   **Título:** "Monitoramento de Qualidade do Ar e Emissões Georreferenciadas"
*   **Descrição:** Dashboard que consome APIs e processa dados abertos de sensores de poluição das principais metrópoles globais. Gera mapas de calor interativos e modelos autoregressivos para prever picos de poluição atmosférica nos próximos 7 dias.
*   **Tecnologias:** `Python (Flask)`, `Leaflet.js`, `Chart.js`, `PostgreSQL`, `Docker`
*   **Métrica de Impacto:** Processamento e renderização fluida de mais de 50.000 registros geográficos no lado do cliente através de clusterização dinâmica.

---

### Seção 4: Dashboard Interativo Integrado (The Portfolio Pulse)

*Esta é a peça central da experiência do portfólio. Um painel interativo integrado diretamente na página, simulando a telemetria do próprio portfólio e das atividades do desenvolvedor, demonstrando habilidades reais de front-end reativo com biblioteca de gráficos.*

#### Layout e Componentes do Dashboard:
O painel será estruturado de forma componentizada usando React, facilitando a atualização de estado.

```
+---------------------------------------------------------------------------------+
|                                 Filtros de Tempo                                |
|  [ Últimos 30 Dias ]   [ Últimos 6 Meses ]   [ Todo o Período ]                 |
|  (Gerencia o estado activePeriod: '30days' | '6months' | 'all')                  |
+------------------------------------+--------------------------------------------+
|  KPI 1: Commits Anuais             |  KPI 2: Uptime de Projetos                 |
|  1,842 (+12.4% vs 2025)            |  99.98% (Últimos 12 meses)                 |
+------------------------------------+--------------------------------------------+
|  KPI 3: Stack Dominante            |  KPI 4: Café Consumido                     |
|  TypeScript (54.2%)                |  742 xícaras (est.)                        |
+------------------------------------+--------------------------------------------+
|                                    |                                            |
|  Gráfico A (Área):                  |  Gráfico B (Rosca/Donut):                  |
|  Frequência e Volume de Commits    |  Distribuição de Horas por Categoria       |
|  (Recharts - ResponsiveContainer)   |  (Recharts - PieChart com legendas custom) |
|                                    |                                            |
+------------------------------------+--------------------------------------------+
```

#### Detalhamento Técnico dos Componentes (Arquitetura React):

1.  **Componente `<Dashboard />` (Container Principal):**
    *   Gerencia o estado central `timeRange` (ex: `'30d'`, `'180d'`, `'all'`).
    *   Contém a lógica de carregamento dos dados fictícios correspondentes a cada período.
2.  **Componente `<TimeFilters />`:**
    *   Renderiza os botões de seleção de período.
    *   Recebe o estado atual e a função de atualização (`setTimeRange`) como props, mantendo o fluxo unidirecional de dados.
3.  **Componente `<KpiGrid />` e `<KpiCard />`:**
    *   Quatro cards reativos que exibem métricas essenciais.
    *   Os valores numéricos são animados suavemente de zero ao valor final sempre que o período muda (efeito counter-up).
4.  **Componente `<CommitChart />` (Gráfico de Área):**
    *   Usa **Recharts** (`AreaChart`, `XAxis`, `YAxis`, `Tooltip`, `Area`).
    *   Utiliza um gradiente linear para o preenchimento da área (`Cyber Teal` para transparente), conferindo o visual neon premium.
    *   Exibe tooltips customizados estilizados com Tailwind CSS.
5.  **Componente `<CategoryDistribution />` (Gráfico Donut):**
    *   Usa **Recharts** (`PieChart`, `Pie`, `Cell`, `Legend`).
    *   Distribui as fatias utilizando as cores da paleta premium (`Cyber Teal`, `Electric Violet`, `Cyber Crimson` e `Border Steel`).

---

### Seção 5: Formulário de Contato (Contact Interface)

*   **Objetivo:** Facilitar o contato direto, mantendo o usuário na mesma experiência imersiva e moderna.
*   **Composição Visual:**
    *   *Lado Esquerdo:* Informações diretas de contato e disponibilidade em formato de terminal (ex: `dev_status = "Aberto para propostas freelas e CLT"`).
    *   *Lado Direito:* Formulário interativo controlado via React (`useState` para cada campo ou objeto de formulário) cujas bordas se iluminam suavemente em `Cyber Teal` ao receberem foco.
*   **Campos do Formulário:**
    1.  **Nome:** Input de texto simples.
    2.  **E-mail:** Input de validação de e-mail.
    3.  **Objetivo do Contato:** Menu suspenso (Dropdown) contendo:
        *   "Desenvolvimento de Projeto Web"
        *   "Análise de Dados / Inteligência de Negócios"
        *   "Oportunidade Profissional (CLT / PJ)"
        *   "Outro Assunto"
    5.  **Mensagem:** Caixa de texto expansível (Textarea) com contador de caracteres reativo (limite de 500 caracteres).
*   **Ação de Envio (CTA):**
    *   Botão "Enviar Mensagem" que gerencia estados de `idle`, `sending`, `success` ou `error`. Mostra spinner de carregamento e mensagem de feedback correspondente ao estado.

---

## 4. Arquitetura e Instruções Técnicas para a Migração

Para reestruturar o projeto e adotar a nova arquitetura focada no framework React, a equipe deve seguir estes passos:

1.  **Inicialização do Projeto (Vite + React + TS):**
    *   Executar o scaffold do projeto usando Vite para uma build ultrarápida e suporte moderno a ES modules:
        ```bash
        npm create vite@latest portfolio-analytics -- --template react-ts
        ```
    *   Instalar o Tailwind CSS e suas dependências correspondentes para estilização baseada em classes utilitárias.
2.  **Instalação de Bibliotecas do Ecossistema React:**
    *   **Visualização de Dados:** Instalar `recharts` ou wrappers oficiais como `react-apexcharts` e `chart.js` / `react-chartjs-2`.
        *   *Recomendação:* **Recharts** é altamente recomendada por ser construída especificamente para React, usando componentes declarativos SVG que facilitam a aplicação do estilo e das cores do Tailwind.
    *   **Animações:** Instalar `framer-motion` para transições de rotas, animações de scroll e micro-interações do dashboard.
    *   **Ícones:** Instalar `lucide-react` para os ícones vetoriais leves e modernos.
3.  **Reestruturação e Migração do Código Antigo:**
    *   Migrar os estilos definidos em `index.css` para o arquivo de configuração do Tailwind CSS (`tailwind.config.js`) e arquivo de CSS global.
    *   Quebrar a estrutura estática do `index.html` em componentes React reutilizáveis dentro da pasta `src/components` (ex: `Header`, `Hero`, `About`, `Projects`, `Dashboard`, `Contact`, `Footer`).
    *   Substituir a manipulação direta do DOM em `index.js` por variáveis de estado (`useState`, `useEffect`) e fluxos de dados do React.
4.  **Acessibilidade (a11y) e Otimização:**
    *   Garantir contraste adequado entre os textos (`Pure Snow` / `Muted Silver`) e os fundos escuros (`Deep Void` / `Glass Slate`).
    *   Implementar navegação acessível por teclado nos componentes interativos e formulários.
    *   Utilizar `useMemo` para evitar reprocessamentos caros dos dados do dashboard a cada renderização.
