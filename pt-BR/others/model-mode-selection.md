---
title: "Como escolher: K2.6 / K3 / K3 Cluster, intensidade de raciocínio e Agent"
slug: "model-mode-selection"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Como escolher modelos e modos do Kimi: K2.6 / K3 / K3 Cluster, intensidade de raciocínio e Agent - Central de Ajuda do Kimi"
  description="Entenda as três opções de modelo do Kimi (K2.6 / K3 / K3 Cluster), os níveis de intensidade de raciocínio (Padrão / Avançado / Extremo) e a diferença entre Agent e Agent Cluster, para escolher o melhor modo em cada cenário."
/>

# Como escolher: K2.6 / K3 / K3 Cluster, intensidade de raciocínio e Agent

O Kimi decide por conta própria se precisa usar a internet com base na sua pergunta, então você não precisa alternar isso manualmente. O que você precisa escolher são o **modelo** e a **intensidade de raciocínio**; em tarefas complexas, você também pode usar **Agent** e **Agent Cluster**.

## Três opções de modelo

Use o seletor de modelo acima da caixa de entrada para escolher:

| Modelo | Intensidade de raciocínio | Ideal para | Créditos |
|---|---|---|---|
| **K2.6** | Padrão / Avançado | Conversas rápidas e perguntas e respostas, com respostas mais ágeis | Cobrado em créditos |
| **K3** | Padrão / Avançado / Extremo | Conversas e tarefas com Agent, com a maior capacidade geral | Cobrado em créditos |
| **K3 Cluster** | Padrão / Avançado / Extremo | Busca em larga escala, processamento em lote e conclusão de grandes volumes de tarefas de uma só vez | Cobrado em créditos |

- **K3** consegue produzir documentos editáveis de ponta a ponta, como `.pptx`, `.docx`, `.xlsx` e `.pdf`; **K2.6** é otimizado para perguntas e respostas rápidas e gera apenas texto, como esboços de PPT, corpo de texto para Word, código e muito mais.
- Para **geração de imagem / vídeo / áudio**, clique em “+” → Plugins, escolha o recurso correspondente e use-o com **K3**.

<Callout type="info">
O K2.6 consome créditos da assinatura tanto no Chat (o seletor de modelo acima da caixa de entrada) quanto quando usado como um K2.6 Agent dentro do Kimi Work.
</Callout>

## Intensidade de raciocínio: Padrão / Avançado / Extremo

Quanto maior a intensidade de raciocínio, mais completo é o raciocínio do modelo e, em geral, mais inteligente é o resultado — mas isso também **usa mais tokens**.

- Se você quer **velocidade e menor uso de créditos** → escolha **Padrão**;
- Se precisa de **raciocínio mais robusto** para análises complexas ou problemas difíceis → escolha **Avançado** ou **Extremo** (Extremo é compatível com K3 / K3 Cluster).

## Agent e Agent Cluster

- **Agent de uso geral**: planeja e conclui tarefas automaticamente, incluindo geração de sites, criação de PPT, Deep Research (pesquisa aprofundada) e processamento de documentos e planilhas.
- **Agent Cluster**: oferece suporte a mais de 4.000 chamadas de ferramentas em paralelo e consegue coordenar autonomamente até 300 sub-agents (Sub-agents) em paralelo. É ideal para tarefas em larga escala, como **busca em larga escala, redação de textos longos e processamento em lote**.

## O que escolher em cada cenário

- **Perguntas e respostas rápidas e conversas do dia a dia** → K2.6.
- **Conversas complexas, redação de documentos / criação de PPT e planilhas / tarefas em várias etapas** → K3.
- **Busca em larga escala, processamento em lote e redação de textos muito longos** → K3 Cluster.
- **Para economizar créditos** → defina a intensidade de raciocínio como “Padrão”.

## FAQ

### “Thinking Mode” não está mais disponível?
O Kimi integrou “conversa” e “Agent” em uma única experiência, então eles não são mais modos separados. Agora, o “raciocínio” é controlado pela **escolha do modelo e da intensidade de raciocínio** — por exemplo, usar K3 com uma intensidade de raciocínio mais alta oferece um raciocínio mais aprofundado.

### Qual é a diferença entre K2.6 e K3?
K2.6 é otimizado para perguntas e respostas rápidas e responde com mais agilidade. K3 tem a maior capacidade geral, destaca-se em conversas complexas e tarefas com Agent e consegue produzir documentos editáveis de ponta a ponta. Ambos são cobrados em créditos.

### Qual é a diferença entre K3 e K3 Cluster?
K3 é adequado para conversas comuns e tarefas com Agent. K3 Cluster usa paralelismo em larga escala — milhares de chamadas de ferramentas e centenas de sub-agents — para lidar com tarefas de grande volume, como **busca em larga escala, processamento em lote e redação de textos muito longos**.

### Quanto conteúdo pode ser processado em uma única rodada?
K2.6 oferece suporte a cerca de 128K tokens de contexto em uma única rodada (aproximadamente 50.000–60.000 caracteres chineses); K3 oferece uma janela de contexto de 1 milhão de tokens (requer o benefício do nível mais alto de assinatura). Veja [O que devo fazer se uma conversa ultrapassar 200.000 caracteres chineses?](/others/chat-issues) para detalhes.
