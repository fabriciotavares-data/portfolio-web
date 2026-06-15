# Diretrizes de Design e Layout - Simulador Streamlit (Fase 5)

Este documento estabelece as diretrizes de experiência do usuário (UX), interface de usuário (UI), comportamento de código e lógica de negócios para a interface Streamlit do **ChurnGuard**, a ser implementada pelo `fase5_creator`.

---

## 🎨 Identidade Visual e Estilização (Custom CSS)

Para manter a estética premium de dados e front-end com a paleta proposta, o Streamlit deve ser estilizado usando injeção de CSS customizado via `st.markdown(..., unsafe_allow_html=True)`.

### Paleta de Cores
*   **Space Cadet (Fundo)**: `#0B0F19`
*   **Slate Navy (Painéis/Cards)**: `#161B26`
*   **Cyber Blue (Destaque/Saúde)**: `#00F2FE`
*   **Cyber Crimson (Alerta de Risco)**: `#FF3366`
*   **Texto Principal**: `#FFFFFF`
*   **Texto Secundário**: `#8A99AD`

### Exemplo de CSS para Injetar no Streamlit
```css
/* Background geral e cor de texto */
.stApp {
    background-color: #0B0F19;
    color: #FFFFFF;
}

/* Customização dos painéis/cards (efeito Glassmorphism) */
.metric-card {
    background-color: rgba(22, 27, 38, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 20px;
    backdrop-filter: blur(12px);
    margin-bottom: 15px;
}

/* Borda neon saudável (Cyber Blue) */
.card-safe {
    border-left: 5px solid #00F2FE;
    box-shadow: 0 0 10px rgba(0, 242, 254, 0.1);
}

/* Borda neon de risco (Cyber Crimson) */
.card-danger {
    border-left: 5px solid #FF3366;
    box-shadow: 0 0 10px rgba(255, 51, 102, 0.2);
}
```

---

## 📂 Arquitetura de Código e Carregamento de Recursos

O Streamlit roda seu script do topo ao fim a cada interação do usuário. Para evitar que os arquivos do modelo e do scaler sejam lidos do disco repetidamente (causando lentidão), é **obrigatório** usar a decoração de cache do Streamlit.

### Lógica de Carregamento (`model.pkl` e `scaler.pkl`)
```python
import streamlit as st
import joblib
import pandas as pd
import numpy as np

@st.cache_resource
def load_ml_resources():
    # Carrega o modelo de classificação e o transformador de escala
    # Substitua pelo caminho correto gerado pelo pipeline
    model = joblib.load('churn_model.pkl')
    scaler = joblib.load('scaler.pkl')
    return model, scaler

model, scaler = load_ml_resources()
```

### Ordem de Transformação de Dados para Predição
1. Coletar os valores dos sliders e inputs.
2. Criar um DataFrame de linha única contendo as colunas de features exatamente na mesma ordem em que foram treinadas:
   `['tempo_assinatura_meses', 'frequencia_login_mensal', 'tickets_suporte_abertos', 'valor_mensal_pago', 'reclamacoes_registradas', 'uso_dados_gb']`
3. Aplicar o scaler: `X_scaled = scaler.transform(X_raw)`
4. Fazer a predição probabilística: `probabilidade = model.predict_proba(X_scaled)[0][1]` (probabilidade da classe 1 - Churn).

---

## 🎛️ Organização do Painel de Controle (Inputs)

Os controles interativos devem ser organizados na barra lateral (**Sidebar**) do Streamlit para manter o painel principal livre para visualizações de resultados e métricas.

| Feature | Tipo de Input | Configurações do Controle (Min, Max, Padrão) | Justificativa |
| :--- | :--- | :--- | :--- |
| `tempo_assinatura_meses` | `st.sidebar.slider` | Mín: `1`, Máx: `72`, Padrão: `12`, Passo: `1` | Avalia o ciclo de vida do cliente. |
| `frequencia_login_mensal`| `st.sidebar.slider` | Mín: `0`, Máx: `30`, Padrão: `15`, Passo: `1` | Mede o engajamento operacional. |
| `tickets_suporte_abertos`| `st.sidebar.slider` | Mín: `0`, Máx: `10`, Padrão: `1`, Passo: `1` | Indicador de atrito e insatisfação técnica. |
| `valor_mensal_pago` | `st.sidebar.number_input` | Mín: `29.90`, Máx: `500.00`, Padrão: `99.90`, Passo: `10.0` | Valor financeiro exposto ao risco. |
| `reclamacoes_registradas`| `st.sidebar.selectbox` | Opções: `["Não", "Sim"]`, Mapeado para `[0, 1]` | Gatilho direto de descontentamento. |
| `uso_dados_gb` | `st.sidebar.slider` | Mín: `0.0`, Máx: `500.0`, Padrão: `50.0`, Passo: `5.0` | Mede a adoção do produto/infraestrutura. |

---

## 📊 Estrutura do Painel Principal (Layout da Área Central)

A tela principal deve ser dividida de forma limpa usando abas (`st.tabs`) ou seções organizadas verticalmente:

### Seção 1: Diagnóstico de Risco em Tempo Real (Topo da Tela)
Deve mostrar um cartão grande de diagnóstico que mude com base no resultado da predição:

*   **Regra de Limiar (Threshold)**: 50% (`0.5`).
*   **Caso Risco < 50% (Saudável - Cyber Blue)**:
    *   Exibir uma barra de progresso ou indicador visual no tom Cyber Blue.
    *   Texto destacado: `Score de Risco: XX.X% | Status: Baixo Risco`
    *   Recomendações sugeridas:
        *   "Cliente saudável. Continue monitorando o engajamento."
        *   "Excelente oportunidade para propor upgrades de plano (Upsell) ou recursos premium adicionais."
*   **Caso Risco >= 50% (Crítico - Cyber Crimson)**:
    *   Exibir o indicador visual no tom Cyber Crimson.
    *   Texto destacado: `Score de Risco: XX.X% | ALERTA CRÍTICO: Alto Risco de Churn`
    *   Recomendações sugeridas (Ações de Retenção):
        *   **Ação Imediata**: Acionar equipe de Customer Success (CS) para contato direto em até 24 horas.
        *   **Ação Financeira**: Oferecer desconto promocional de 15% na renovação ou upgrade temporário sem custo.
        *   **Resolução Técnica**: Priorizar a resolução de qualquer ticket de suporte aberto pelo cliente.

### Seção 2: Métricas de Negócios e Impacto Financeiro (Simulação Corporativa)
Para demonstrar o valor do modelo treinado na Fase 4, crie um painel de impacto com os resultados reais do relatório:

*   **Métricas Técnicas de Validação do Modelo**:
    *   Acurácia: **81.00%**
    *   Precisão: **73.49%**
    *   Recall: **79.22%** (Destaque o alto recall, pois indica que capturamos ~79% dos clientes propensos ao cancelamento).
    *   ROC-AUC: **88.45%** (Excelente poder de discriminação).
*   **Simulação de Retorno sobre Investimento (ROI)**:
    *   Base de Clientes Simulada: **10.000 clientes**
    *   Economia Bruta de Churn Evitado: **$130.500,00**
    *   Custo das Ações de Retenção (Investimento): **$83.000,00**
    *   Economia Líquida: **$47.500,00**
    *   **ROI Obtido**: **157.23%** (Para cada $1 investido em retenção direcionada pelo modelo, a empresa recupera $1.57).

---

## 🛠️ Roteiro para o Implementador (`fase5_creator`)

1.  **Criação do Arquivo**: Criar o arquivo `C:\Users\Usuario\Desktop\projeto\churn-guard\app.py`.
2.  **Configuração de Estilos**: Escrever a função de estilo customizado injetando a paleta premium de dados (Space Cadet, Cyber Blue, Cyber Crimson).
3.  **Implementação do Cache**: Adicionar a função `@st.cache_resource` para ler o modelo e scaler do diretório `C:\Users\Usuario\Desktop\projeto\churn-guard\`.
4.  **Montagem da Sidebar**: Criar os inputs e sliders mapeando as variáveis.
5.  **Montagem da Área Central**:
    *   Adicionar cabeçalho dinâmico e logo fictício do ChurnGuard.
    *   Criar contêineres dinâmicos que alternem entre as classes CSS de saúde (Cyber Blue) e alerta (Cyber Crimson) baseados no valor do score.
    *   Adicionar guias/seções separadas para a "Simulação de Cliente Individual" e o "Relatório Geral de Métricas e ROI do Modelo".
