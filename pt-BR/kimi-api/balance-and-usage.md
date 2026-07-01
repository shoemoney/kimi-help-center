---
title: "Saldo e consumo"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Saldo e consumo - Central de Ajuda Kimi"
  description="A Kimi API oferece várias formas de consultar o saldo da sua conta e os detalhes de consumo, ajudando você a acompanhar o uso e os custos."
/>

# Saldo e consumo

A Kimi API oferece várias formas de consultar o saldo da sua conta e os detalhes de consumo, ajudando você a acompanhar o uso e os custos.

## Painel do console

Faça login em [platform.moonshot.ai](https://platform.moonshot.ai) e acesse a página **fee-detail** (detalhes de cobrança) no console para visualizar:

- Saldo atual da conta
- Detalhamento de consumo diário
- Consumo e custos por modelo
- Histórico de tendências de gastos

<Callout type="info">
A cobrança diária é atualizada até as **7h00 do dia seguinte**. Os dados de consumo em tempo real podem ter um pequeno atraso.
</Callout>

> **Observação**: a cobrança diária é atualizada até as **7h00 do dia seguinte**. Os dados de consumo em tempo real podem ter um pequeno atraso.

## API de estimativa de tokens

Antes de enviar uma requisição, você pode usar a API de Token Estimation para estimar quantos tokens a chamada vai consumir — útil para o controle de custos.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Passe o mesmo formato de `messages` de uma requisição de Chat Completion, e a API retornará a estimativa da quantidade de tokens.

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

Inclua sua API Key no cabeçalho da requisição para obter o saldo disponível.

## Dicas para monitorar o consumo

<Callout type="tip">
**Boas práticas**:
- Verifique a página fee-detail regularmente para acompanhar as tendências de gastos
- Integre a API de consulta de saldo e configure limites de alerta de saldo
- Use a API de Token Estimation antes de chamadas importantes para estimar os custos
</Callout>
