---
title: "Preços da API"
slug: "api-pricing"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Preços da API - Central de Ajuda Kimi"
  description="A cobrança da Kimi API é baseada no consumo de tokens, com preços específicos por modelo e por recurso."
/>

# Preços da API

<Callout type="info">
A cobrança da Kimi API é baseada no consumo de tokens, com preços específicos por modelo e por recurso.
</Callout>

## Noções básicas de cobrança

- **Cobrança por token**: cada chamada de API é cobrada separadamente pelos tokens de entrada e pelos tokens de saída
- **Unidade de token**: 1M = 1.000.000 tokens
- **Preço por modelo**: modelos com mais recursos têm custo maior por token — escolha o modelo mais adequado ao seu caso de uso

## Cobrança por recursos adicionais

| Recurso | Taxa adicional |
| --- | --- |
| **Web Search** | US$ 0,004 por invocação (independente do consumo de tokens) |

## Cache de contexto

<Callout type="tip">
O **Cache de contexto** permite armazenar em cache conteúdos de contexto usados com frequência, como prompts de sistema e documentos de referência. Tokens encontrados no cache são cobrados com desconto, reduzindo efetivamente os custos de contextos repetitivos.
</Callout>

Consulte a documentação oficial para ver os preços detalhados do Cache de contexto.

## Detalhes de preços

Para consultar a tabela completa de preços por modelo e as regras de cobrança:

Acesse [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Dicas para otimizar custos

<Callout type="tip">
- Defina o parâmetro `max_tokens` adequadamente para evitar saídas longas sem necessidade
- Use o Cache de contexto para prompts de sistema e contextos repetitivos
- Escolha o modelo certo para a complexidade da tarefa — use modelos leves para tarefas simples
- Otimize o design do prompt para reduzir tokens de entrada desnecessários
</Callout>
