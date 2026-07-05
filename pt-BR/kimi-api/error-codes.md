---
title: "Códigos de erro da API"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Códigos de erro da API - Central de Ajuda Kimi"
  description="Códigos de erro comuns ao chamar a API do Kimi e como resolvê-los."
/>

# Códigos de erro da API

<Callout type="info">
Códigos de erro comuns ao chamar a API do Kimi e como resolvê-los.
</Callout>

## Referência de códigos de erro

| Código de erro | Significado | Solução |
| --- | --- | --- |
| 400 | Bad Request | Verifique o formato do corpo da requisição, os nomes e os tipos dos parâmetros. Causas comuns: JSON malformado, parâmetros obrigatórios ausentes, valores fora do intervalo. |
| 401 | Unauthorized | Confirme se a API Key está correta e não expirou ou foi desativada. Verifique o formato do cabeçalho: `Authorization: Bearer <your-api-key>`. |
| 403 | Forbidden (saldo insuficiente) | Saldo da conta esgotado — adicione créditos no console. A conta também pode estar restrita; entre em contato com o suporte, se necessário. |
| 404 | Not Found | Verifique o caminho da URL da requisição e o nome do modelo. Confirme se o endpoint é `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | rate limit excedido. Reduza a frequência, implemente backoff exponencial ou entre em contato com o suporte para obter limites maiores. |
| 500 | Internal Server Error | Problema temporário no servidor — tente novamente mais tarde. Se persistir, entre em contato com support@moonshot.ai informando o `request_id`. |

## Dicas gerais de solução de problemas

<Callout type="tip">
1. **Verifique a mensagem de erro completa**: O JSON de resposta inclui `error.message` com uma descrição detalhada.
2. **Anote o request_id**: Ajuda o suporte a localizar o problema rapidamente.
3. **Consulte a documentação oficial**: Garanta que as chamadas estejam de acordo com a documentação em [platform.kimi.ai](https://platform.kimi.ai).
4. **Implemente lógica de retentativa**: Para os erros 429 e 500, use backoff exponencial.
</Callout>
