---
title: "Códigos de erro da API"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Códigos de erro da API - Central de Ajuda Kimi"
  description="Códigos de erro comuns ao chamar a Kimi API e como resolvê-los."
/>

# Códigos de erro da API

<Callout type="info">
Códigos de erro comuns ao chamar a Kimi API e como resolvê-los.
</Callout>

## Referência de códigos de erro

| Código de erro | Significado | Solução |
| --- | --- | --- |
| 400 | Requisição inválida | Verifique o formato do corpo da requisição, os nomes e os tipos dos parâmetros. Causas comuns: JSON malformado, parâmetros obrigatórios ausentes, valores fora do intervalo permitido. |
| 401 | Não autorizado | Verifique se a API Key está correta, não expirou nem foi desativada. Confirme o formato do cabeçalho: `Authorization: Bearer <your-api-key>`. |
| 403 | Proibido (saldo insuficiente) | O saldo da conta acabou — recarregue no console. A conta também pode estar restrita; se necessário, entre em contato com o suporte. |
| 404 | Não encontrado | Verifique o caminho da URL da requisição e o nome do modelo. Confirme se o endpoint é `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | O rate limit foi excedido. Reduza a frequência, implemente recuo exponencial ou entre em contato com o suporte para limites maiores. |
| 500 | Internal Server Error | Problema temporário no servidor — tente novamente mais tarde. Se persistir, entre em contato com support@moonshot.ai e informe o `request_id`. |

## Dicas gerais de solução de problemas

<Callout type="tip">
1. **Confira a mensagem de erro completa**: A resposta em JSON inclui `error.message` com uma descrição detalhada.
2. **Anote o request_id**: Ele ajuda o suporte a localizar o problema rapidamente.
3. **Consulte a documentação oficial**: Confira se as chamadas seguem a documentação em [platform.kimi.ai](https://platform.kimi.ai).
4. **Implemente lógica de retentativa**: Para erros 429 e 500, use recuo exponencial.
</Callout>
