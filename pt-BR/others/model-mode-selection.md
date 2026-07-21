---
title: "Como escolher: K2.6 / K3 / K3 Cluster, intensidade de raciocínio e Agent"
slug: "model-mode-selection"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Como escolher modelos e modos do Kimi: K2.6 / K3 / K3 Cluster, intensidade de raciocínio e Agent - Central de Ajuda do Kimi"
  description="Entenda as três opções de modelo do Kimi (K2.6 / K3 / K3 Cluster), os níveis de intensidade de raciocínio (Padrão / Avançado / Extremo) e a diferença entre Agent e Agent Cluster, para escolher o melhor modo em cada cenário."
/>

# Como escolher: K2.6 / K3 / K3 Cluster, intensidade de raciocínio e Agent

O Kimi decide sozinho se precisa usar a internet com base na sua pergunta, então você não precisa ativar isso manualmente. O que você precisa escolher são o **modelo** e a **intensidade de raciocínio**; em tarefas complexas, também pode usar **Agent** e **Agent Cluster**.

## Três opções de modelo

Use o seletor de modelo acima da caixa de entrada para escolher:

| Modelo | Intensidade de raciocínio | Melhor para | Credit |
|---|---|---|---|
| **K2.6** | Padrão / Avançado | Conversas e perguntas e respostas rápidas, com respostas mais ágeis | **Não consome credits da assinatura** |
| **K3** | Padrão / Avançado / Extremo | Conversas e tarefas de Agent, com a melhor capacidade geral | Consome credits |
| **K3 Cluster** | Padrão / Avançado / Extremo | Buscas em grande escala, processamento em lote e conclusão de tarefas de alto volume de uma só vez | Consome credits |

- **K3** consegue criar documentos editáveis de ponta a ponta, como `.pptx`, `.docx`, `.xlsx` e `.pdf`; **K2.6** é otimizado para perguntas e respostas rápidas e gera apenas texto, como esboços de PPT, corpo de texto para Word, código e muito mais.
- Para **geração de imagem / vídeo / áudio**, clique em “+” → Plugins, escolha o recurso relevante e use-o com **K3**.

## Intensidade de raciocínio: Padrão / Avançado / Extremo

Quanto maior a intensidade de raciocínio, mais completo é o raciocínio do modelo e, em geral, mais inteligente o resultado — mas isso também **usa mais tokens**.

- Se você quer **velocidade e menor uso de credits** → escolha **Padrão**;
- Se precisa de **raciocínio mais forte** para análises complexas ou problemas difíceis → escolha **Avançado** ou **Extremo** (Extremo é compatível com K3 / K3 Cluster).

## Agent e Agent Cluster

- **Agent de uso geral**: Planeja e conclui tarefas automaticamente, incluindo geração de sites, criação de PPT, Deep Research (pesquisa aprofundada) e processamento de documentos e planilhas.
- **Agent Cluster**: Compatível com mais de 4.000 chamadas de ferramentas em paralelo e capaz de coordenar de forma autônoma até 300 subagentes (Sub-agents) em paralelo. É ideal para tarefas de grande escala, como **buscas em grande escala, redação de textos longos e processamento em lote**.

## O que escolher em cada cenário

- **Perguntas e respostas rápidas e conversas do dia a dia** → K2.6 (não consome credits).
- **Conversas complexas, redação de documentos / criação de PPT e planilhas / tarefas com várias etapas** → K3.
- **Buscas em grande escala, processamento em lote e redação de textos muito longos** → K3 Cluster.
- **Para economizar credits** → use K2.6 ou defina a intensidade de raciocínio como “Padrão”.

## FAQ

### O “Thinking Mode” não está mais disponível?
O Kimi integrou “conversa” e “Agent” em uma única experiência, então eles não são mais modos separados. Agora, o “raciocínio” é controlado pela **escolha do modelo e da intensidade de raciocínio** — por exemplo, usar K3 com uma intensidade de raciocínio mais alta oferece um raciocínio mais aprofundado.

### Qual é a diferença entre K2.6 e K3?
K2.6 é otimizado para perguntas e respostas rápidas, responde mais rápido e não consome credits da assinatura. K3 tem a melhor capacidade geral, é excelente em conversas complexas e tarefas de Agent, consegue criar documentos editáveis de ponta a ponta e consome credits.

### Qual é a diferença entre K3 e K3 Cluster?
K3 é adequado para conversas comuns e tarefas de Agent. K3 Cluster usa paralelismo em grande escala — milhares de chamadas de ferramentas e centenas de subagentes — para lidar com tarefas de alto volume, como **buscas em grande escala, processamento em lote e redação de textos muito longos**.

### Quanto conteúdo pode ser processado em uma única rodada?
K2.6 suporta cerca de 128K tokens de contexto em uma única rodada (aproximadamente 50.000–60.000 caracteres chineses); K3 oferece uma janela de contexto de 1 milhão de tokens (requer o benefício do plano de assinatura mais alto). Veja [O que fazer se uma conversa ultrapassar 200.000 caracteres chineses?](/others/chat-issues) para saber mais.
