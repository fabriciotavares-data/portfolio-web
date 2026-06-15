# Guia de Arquitetura e Implementação: Plataforma de Negociação Aether

Bem-vindo ao guia de engenharia da **Plataforma de Negociação de Criptoativos Aether**. Este documento serve como especificação técnica, conceitual e de design para o desenvolvimento do primeiro grande projeto do seu portfólio de alto nível, unindo **Desenvolvimento Front-End Premium** e **Análise de Dados de Alta Performance**.

---

## 1. Visão Geral do Projeto

### O Escopo
A **Plataforma Aether** é uma interface de negociação de criptomoedas em tempo real (focada inicialmente no par **BTC/USDT**). Ela simula a experiência de um terminal de trading profissional (estilo Bloomberg, Binance ou TradingView), onde os usuários podem visualizar preços em tempo real, interagir com gráficos de velas (*candlesticks*), analisar a profundidade do livro de ofertas (*order book*), acompanhar o fluxo de transações recentes (*trade history*) e executar ordens simuladas de compra/venda com saldo fictício.

### Objetivos de Negócio & Portfólio
Este projeto não é apenas uma aplicação React comum; ele foi concebido para demonstrar ao mercado habilidades avançadas que pouquíssimos desenvolvedores front-end possuem:
*   **Manipulação de Streams de Dados em Tempo Real:** Processamento eficiente de dados recebidos via WebSocket com frequências superiores a 10 atualizações por segundo.
*   **Performance Extrema no Front-End:** Uso de técnicas de otimização (memoização, controle de renders, atualizações granulares) para garantir que a UI se mantenha fluida (60 FPS) mesmo com grande volume de dados.
*   **Visualização Analítica de Dados:** Integração perfeita com ferramentas gráficas de nível financeiro, gerando valor a partir de dados complexos.
*   **UX/UI Premium:** Design futurista, limpo e imersivo, utilizando conceitos modernos de design de interfaces financeiras (*Fintech UI*).

---

## 2. Paleta de Cores e Estética Visual

A identidade visual do Aether deve respirar tecnologia, precisão e sofisticação. Adotaremos um estilo **Cyber-Financial Dark Mode** com toques de **Glassmorphism**.

### Paleta de Cores (Tailwind CSS Config)
*   **Background Principal:** Deep Navy Dark (`#080B11`) - Um fundo extremamente escuro, mas menos cansativo que o preto puro.
*   **Superfícies de Componentes:** Slate Dark (`#0F141C`) - Para os cards e painéis individuais, criando contraste de profundidade.
*   **Bordas e Linhas:** Muted Blue/Gray (`#1E293B` com opacidade de 40%) - Mantém a interface limpa e organizada.
*   **Cores Indicadoras de Mercado:**
    *   *Alta/Compra (Bullish):* Neon Emerald (`#10B981` ou `#00E676`)
    *   *Baixa/Venda (Bearish):* Electric Rose/Crimson (`#EF4444` ou `#FF1744`)
*   **Acentos de Destaque:** Cyan/Neon Blue (`#06B6D4` / `#3B82F6`) - Para botões de ação neutros, foco de inputs e status ativos.

### Efeitos de Glassmorphism
Para dar o aspecto premium, utilize:
*   Bordas semi-transparentes de `1px` (`border border-slate-800/50`).
*   Efeito de desfoque de fundo (`backdrop-blur-md bg-opacity-60`).
*   Sombra suave neon em hover (`shadow-[0_0_15px_rgba(6,182,212,0.15)]`).

---

## 3. Pilha Tecnológica Justificada

| Tecnologia | Função no Projeto | Justificativa Técnica |
| :--- | :--- | :--- |
| **React (com Vite)** | Core UI Library & Tooling | O Vite oferece um tempo de inicialização de servidor quase instantâneo e Hot Module Replacement (HMR) ultra-rápido, essencial para prototipagem rápida de interfaces dinâmicas. |
| **TypeScript** | Segurança de Tipagem | Interfaces de criptoativos dependem de payloads estritos de dados (preços, quantidades, timestamps). O TypeScript evita erros catastróficos de manipulação matemática ao tipar rigorosamente os retornos de API e WebSocket. |
| **Tailwind CSS** | Estilização Utilitária | Permite construir layouts de alta complexidade (grids dinâmicos, painéis responsivos) de forma rápida, mantendo o bundle CSS final extremamente reduzido. |
| **Zustand** | Gerenciamento de Estado | Leve, direto e baseado em hooks. O Zustand não possui o boilerplate do Redux e é muito mais performático que a Context API para estados que mudam várias vezes por segundo (como o ticker de preços e histórico de ordens). |
| **Lightweight Charts (TradingView)** | Motor do Gráfico | Criada pela própria TradingView, é a biblioteca mais rápida do mundo para renderização de gráficos financeiros interativos em Canvas 2D. Muito mais leve e fluida para candles em tempo real do que Chart.js ou ApexCharts. |
| **WebSocket API (Nativo)** | Comunicação em Tempo Real | Protocolo de comunicação bidirecional de baixa latência para transmissão contínua de dados de mercado (preços, ordens, trades). |

---

## 4. Arquitetura de Conexão com Dados (WebSocket)

Para garantir flexibilidade, a aplicação deve contar com uma arquitetura híbrida de dados: um canal para a API real e outro para dados simulados (mock).

### 4.1. Conexão com a API Pública da Binance
A Binance disponibiliza WebSockets públicos sem necessidade de autenticação (apenas leitura).

*   **Endpoint Principal (Velas de 1 minuto):**
    `wss://stream.binance.com:9443/ws/btcusdt@kline_1m`
    *   *Payload útil recebido:*
        ```json
        {
          "e": "kline",
          "k": {
            "t": 123456789, // Tempo de início do candle
            "o": "65100.00", // Abertura
            "h": "65250.00", // Máxima
            "l": "65050.00", // Mínima
            "c": "65200.00", // Fechamento
            "v": "100.45"    // Volume
          }
        }
        ```
*   **Endpoint do Livro de Ofertas parcial (Depth - 5 níveis a cada 100ms):**
    `wss://stream.binance.com:9443/ws/btcusdt@depth5@100ms`
    *   *Payload útil recebido:*
        ```json
        {
          "lastUpdateId": 160,
          "bids": [ ["65190.00", "0.450"], ["65185.00", "1.200"] ], // Compras (Preço, Quantidade)
          "asks": [ ["65200.00", "0.850"], ["65205.00", "2.100"] ]  // Vendas (Preço, Quantidade)
        }
        ```

### 4.2. Motor de Simulação Local (Fallback Offline Mock)
Caso o usuário esteja offline ou sem acesso de rede externa à API da Binance, a aplicação deve inicializar um gerador pseudo-aleatório baseado em **Movimento Browniano Geométrico** que despacha eventos na mesma estrutura e frequência do WebSocket real através de um Event Emitter ou mock local.

---

## 5. Design dos Componentes da UI (Grid Layout)

A interface deve ser estruturada em um Grid de 3 seções principais em tela cheia (`h-screen overflow-hidden`):

```
+-------------------------------------------------------------------------+
|                              HEADER (TICKER)                            |
+------------------------+-------------------------------+----------------+
|                        |                               |                |
|                        |       CANDLESTICK CHART       |  TRADING       |
|                        |                               |  PANEL         |
|   ORDER BOOK           |                               |  (Buy/Sell)    |
|   (Bids / Asks)        +-------------------------------+----------------+
|                        |                               |                |
|                        |       TRADE HISTORY           |  USER WALLET   |
|                        |                               |  (Balances)    |
+------------------------+-------------------------------+----------------+
```

### Detalhamento dos Componentes

1.  **Header (Status & Ticker Bar):**
    *   Exibe o par ativo (`BTC/USDT`), preço de fechamento atual com animação flash (verde se subiu, vermelho se desceu), variação percentual diária (+X.XX%) e um indicador de status de conexão do WebSocket (badge neon piscando verde para conectado, vermelho para desconectado).
2.  **Candlestick Chart (Painel Central):**
    *   Integração do contêiner HTML com o script do `lightweight-charts`.
    *   Barra de ferramentas superior com seletores de intervalo (1m, 5m, 15m, 1h).
    *   Atualizações dinâmicas do candle atual (tempo real) e adição de novos candles à série temporal à medida que o tempo expira.
3.  **Order Book (Livro de Ofertas - Lateral Esquerda):**
    *   Exibe duas tabelas espelhadas: Asks (vendas no topo, em vermelho) e Bids (compras embaixo, em verde).
    *   Atrás de cada linha, deve haver uma barra horizontal colorida correspondente ao volume acumulado (profundidade de mercado), facilitando a leitura rápida de "paredes de compra/venda".
4.  **Trading Panel (Painel de Execução - Lateral Direita):**
    *   Tabs para alternar entre ordens do tipo **Limit** (define o preço desejado) e **Market** (executa na hora pelo preço atual).
    *   Inputs dinâmicos de Preço (USDT) e Quantidade (BTC), calculando automaticamente o valor total.
    *   Controle de saldo do usuário integrado ao store do Zustand (inicializando, por exemplo, com $10.000 USDT fictícios).
5.  **Trade History & Wallet (Inferior Central/Direita):**
    *   Tabela com o fluxo dos últimos negócios executados no mercado (Preço, Quantidade, Hora, Direção).
    *   Painel do portfólio pessoal listando saldos em BTC, USDT, ordens em aberto e histórico de transações simuladas realizadas pelo usuário.

---

## 6. Roteiro de Desenvolvimento (5 Fases)

### Fase 1: Setup do Projeto & Estrutura Base
*   Criar o projeto utilizando Vite, React e TypeScript: `npm create vite@latest aether-exchange -- --template react-ts`.
*   Instalar dependências essenciais: `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`, `zustand`, `lightweight-charts`.
*   Configurar a paleta de cores no `tailwind.config.js` e criar o layout base dividindo a tela em áreas com Grid CSS.

### Fase 2: Store Global & Conexão WebSocket
*   Desenvolver o store Zustand (`useTradingStore.ts`) para gerenciar:
    *   Dados em tempo real do ticker, order book e histórico de trades.
    *   Saldo do usuário (USDT, BTC) e ordens ativas.
*   Criar um hook customizado `useWebSocket.ts` para abrir, manter e reconectar automaticamente a conexão com os endpoints da Binance.
*   Adicionar o motor de mock offline que gera atualizações aleatórias realistas quando a conexão de rede falha.

### Fase 3: Visualização do Gráfico e Order Book
*   Criar o componente `<TradingChart />` instanciando o TradingView `lightweight-charts`. Configurar o layout escuro, cores das linhas de grid e cores das velas para combinar com a paleta.
*   Criar o componente `<OrderBook />`, calculando o volume acumulado e aplicando a largura da barra de fundo dinamicamente.
*   *Otimização de Performance:* Utilizar `React.memo` para evitar re-renderizações desnecessárias de linhas do livro que não alteraram seu valor.

### Fase 4: Painel de Negociação e Simulação
*   Construir a interface do `<TradingPanel />` com validação de saldo máximo.
*   Implementar a lógica de match de ordem:
    *   Ordem a mercado: Deduz o saldo instantaneamente baseando-se no preço atual.
    *   Ordem limite: Salva a ordem em um array `openOrders`. Criar um listener no useEffect que monitora o preço da Binance e "executa" a ordem quando o preço atinge o alvo do usuário, atualizando as carteiras e emitindo uma notificação visual de sucesso.

### Fase 5: Estética Premium, Polimento e Testes
*   Aplicar os efeitos de Glassmorphism, transições suaves em hover, cores em gradiente nos botões e animações de ticker piscando.
*   Realizar testes de stress de renderização (usando o React DevTools Profiler) para certificar-se de que a taxa de atualização não está travando o navegador.
*   Adicionar suporte a múltiplos temas (opcional, embora o dark mode seja o foco principal) ou suporte a troca rápida de par de negociação (ex: ETH/USDT).

---

## Mensagem Inspiradora

> **Grande jornada à frente, Desenvolvedor!** 🚀
>
> A plataforma **Aether** foi desenhada para elevar o nível técnico do seu portfólio a patamares de engenharia profissional. Ao construir esta aplicação, você não estará apenas criando componentes e telas estáticas, mas sim dominando o tratamento de dados dinâmicos de alta frequência e orquestrando performance como um verdadeiro desenvolvedor sênior de front-end financeiro.
>
> Mantenha o código limpo, preocupe-se com cada renderização e crie uma interface que cause impacto visual imediato. O sucesso está nos detalhes! Estamos prontos para a implementação.

---
*Elaborado com dedicação pelo subagente **Cabeça Pensante (Ideator)**.*
