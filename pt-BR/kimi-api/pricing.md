---
title: "Preços da API"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Preços da API - Central de Ajuda Kimi"
  description="A cobrança da API Kimi é baseada no consumo de tokens, com preços específicos por modelo e por recurso."
/>

# Preços da API

<Callout type="info">
A cobrança da API Kimi é baseada no consumo de tokens, com preços específicos por modelo e por recurso.
</Callout>

## Conceitos básicos de cobrança

- **Cobrança por token**: cada chamada da API é cobrada separadamente para tokens de entrada e tokens de saída
- **Unidade de token**: 1M = 1.000.000 de tokens
- **Preços específicos por modelo**: modelos com mais recursos têm um custo por token mais alto — escolha o modelo que melhor atende ao seu caso de uso

## Cobrança de recursos adicionais

| Recurso | Taxa adicional |
| --- | --- |
| **Web Search** | US$ 0,004 por chamada (independente do consumo de tokens) |

## Cache de contexto

<Callout type="tip">
O **Context Caching** permite armazenar em cache conteúdos de contexto usados com frequência (como prompts de sistema e documentos de referência). Os tokens que acertam o cache são cobrados com desconto, reduzindo de forma efetiva os custos de contextos repetitivos.
</Callout>

Consulte a documentação oficial para detalhes sobre os preços do Context Caching.

## Detalhes de preços

Para a tabela completa de preços dos modelos e as regras de cobrança:

Acesse [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Dicas de otimização de custos

<Callout type="tip">
- Defina o parâmetro `max_tokens` de forma adequada para evitar saídas desnecessariamente longas
- Use o Context Caching para prompts de sistema e contextos repetitivos
- Escolha o modelo certo para a complexidade da tarefa — use modelos leves para tarefas simples
- Refine o design dos seus prompts para minimizar tokens de entrada desnecessários
</Callout>
