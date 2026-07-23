---
title: "Rate limits"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate limits - Central de Ajuda Kimi"
  description="A Kimi API aplica rate limits à frequência de requisições e à concurrency para garantir a estabilidade da plataforma e o uso justo. Os níveis de rate limit se baseiam no..."
/>

# Rate limits

A Kimi API aplica rate limits à frequência de requisições e à concurrency para garantir a estabilidade da plataforma e o uso justo. Os níveis de rate limit se baseiam no valor cumulativo de recargas da sua conta.

## Níveis de rate limit

Os rate limits da API são organizados por níveis com base no **valor cumulativo de recargas** da sua conta — quanto mais você recarrega, maiores são os rate limits disponíveis. Para ver os limites específicos de cada nível e os respectivos limites de RPM (requisições por minuto) e TPM (tokens por minuto), consulte o console em [platform.kimi.ai](https://platform.kimi.ai).

## Como verificar os limites atuais?

- Faça login no console da API para ver seu nível atual de rate limit.
- Os cabeçalhos de resposta da API também incluem informações de rate limit:
  - `X-RateLimit-Limit`: Limite máximo atual de rate limit
  - `X-RateLimit-Remaining`: Requisições restantes disponíveis
  - `X-RateLimit-Reset`: Horário em que o limite é redefinido

## Como lidar com erros 429

Quando a frequência das suas requisições excede o limite, a API retorna o código de status 429. Ações recomendadas:

1. **Implemente backoff exponencial**: aguarde 1 segundo inicialmente e, a cada nova tentativa, dobre o tempo de espera (2s, 4s, 8s…).
2. **Controle a concurrency**: use filas de requisições ou semáforos para limitar o número de requisições simultâneas.
3. **Agrupe requisições**: combine várias requisições pequenas em um número menor de requisições maiores.

## Solicitar rate limits maiores

Se as necessidades do seu negócio excederem os rate limits atuais:

- **Recarregue para fazer upgrade**: aumente o valor cumulativo de recargas, e o sistema fará automaticamente o upgrade do seu nível de rate limit.
- **Fale com vendas**: para requisitos especiais, entre em contato com a equipe de vendas da plataforma por [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) para solicitar uma quota personalizada de rate limit.
