---
title: "Saldo e uso"
slug: "api-balance-and-usage"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Saldo e uso - Central de Ajuda Kimi"
  description="A Kimi API oferece várias maneiras de consultar o saldo da sua conta e os detalhes de uso, ajudando você a acompanhar consumo e custos."
/>

# Saldo e uso

A Kimi API oferece várias maneiras de consultar o saldo da sua conta e os detalhes de uso, ajudando você a acompanhar consumo e custos.

## Painel do console

Faça login em [platform.kimi.ai](https://platform.kimi.ai) e acesse a página **fee-detail** (detalhes de cobrança) no console para ver:

- Saldo atual da conta
- Detalhamento do uso diário
- Uso e custos por modelo
- Tendências históricas de gastos

<Callout type="info">
O faturamento diário é atualizado até as **7h do dia seguinte**. Os dados de uso em tempo real podem ter um pequeno atraso.
</Callout>

> **Observação**: o faturamento diário é atualizado até as **7h do dia seguinte**. Os dados de uso em tempo real podem ter um pequeno atraso.

## API de Token Estimation

Antes de enviar uma solicitação, você pode usar a API de Token Estimation para estimar quantos tokens a chamada consumirá — útil para controlar custos.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Passe o mesmo formato de `messages` usado em uma solicitação de Chat Completion, e a API retornará a contagem estimada de tokens.

## API de consulta de saldo

Consulte o saldo atual da sua conta diretamente pela API:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Inclua sua chave de API no cabeçalho da solicitação para recuperar o saldo disponível.

## Dicas para monitorar o uso

<Callout type="tip">
**Boas práticas**:
- Consulte a página fee-detail regularmente para monitorar tendências de gastos
- Integre a API de consulta de saldo e configure limites de alerta de saldo
- Use a API de Token Estimation antes de chamadas críticas para estimar custos
</Callout>
