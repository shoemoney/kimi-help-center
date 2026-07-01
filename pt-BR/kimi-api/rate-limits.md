---
title: "Limites de taxa"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Limites de taxa - Central de Ajuda da Kimi"
  description="A Kimi API aplica limites de taxa sobre a frequência de requisições e a concurrency para garantir a estabilidade da plataforma e o uso justo. Os níveis de rate limit são definidos com base no..."
/>

# Limites de taxa

A Kimi API aplica limites de taxa sobre a frequência de requisições e a concurrency para garantir a estabilidade da plataforma e o uso justo. Os níveis de rate limit são definidos com base no valor acumulado de recargas da sua conta.

## Níveis de rate limit

Os limites de taxa da API são organizados em níveis com base no **valor acumulado de recargas da sua conta** — quanto mais você recarrega, maiores são os rate limits disponíveis. Para conhecer os limiares específicos de cada nível e os respectivos limites de RPM (requisições por minuto) e TPM (tokens por minuto), consulte o console em [platform.moonshot.ai](https://www.platform.moonshot.ai).

## Como verificar os limites atuais?

- Faça login no console da API para ver o nível de rate limit atual.
- Os cabeçalhos de resposta da API também incluem informações sobre os limites de taxa:
  - `X-RateLimit-Limit`: Limite máximo de taxa atual
  - `X-RateLimit-Remaining`: Requisições disponíveis restantes
  - `X-RateLimit-Reset`: Momento em que o limite será reiniciado

## Como lidar com erros 429

Quando a frequência de requisições ultrapassa o limite, a API retorna um código de status 429. Ações recomendadas:

1. **Implemente recuo exponencial**: Aguarde 1 segundo inicialmente e dobre o tempo de espera a cada nova tentativa (2s, 4s, 8s…).
2. **Controle a concurrency**: Use filas de requisições ou semáforos para limitar o número de requisições simultâneas.
3. **Agrupe requisições**: Combine várias requisições pequenas em poucas requisições maiores.

## Como solicitar limites de taxa maiores

Se as necessidades do seu negócio ultrapassarem os limites de taxa atuais:

- **Recarregue para fazer upgrade**: Aumente o valor acumulado de recargas e o sistema fará automaticamente o upgrade do seu nível de rate limit.
- **Fale com a equipe de vendas**: Para requisitos especiais, entre em contato com a equipe de vendas da plataforma em [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) e solicite uma cota de taxa personalizada.
