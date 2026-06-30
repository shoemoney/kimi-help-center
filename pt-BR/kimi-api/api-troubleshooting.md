---
title: "Solução de problemas da API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Solução de problemas da API - Central de Ajuda Kimi"
  description="Problemas comuns e soluções para desenvolvedores que utilizam a Kimi API."
/>

# Solução de problemas da API

<Callout type="info">
Problemas comuns e soluções para desenvolvedores que utilizam a Kimi API.
</Callout>

## Como lidar com o erro 429 de rate limit?

Um erro 429 significa que a frequência das suas requisições ultrapassou o rate limit atual da conta. Para resolver:

- Implemente uma estratégia de retry com backoff exponencial (aguarde 1s, 2s, 4s… antes de tentar novamente).
- Controle o número de requisições simultâneas usando um mecanismo de fila.
- Aumente o valor acumulado de recargas para subir de faixa no seu rate limit.
- Entre em contato com a equipe de vendas caso precise de uma cota maior.

## Como lidar com o erro 401 de autenticação?

Um erro 401 significa que a autenticação da API Key falhou. Verifique o seguinte:

- Confirme se a API Key foi copiada corretamente (atenção a espaços no início ou no fim).
- Verifique se o formato do cabeçalho da requisição é `Authorization: Bearer <your-api-key>`.
- Confirme se a API Key não foi excluída ou desativada — verifique no console.
- Certifique-se de não estar usando uma chave de outra plataforma (as API Keys da Kimi começam com `sk-`).

<Callout type="warning">
**Formato da API Key**: as API Keys da Kimi começam com `sk-`. Certifique-se de usar o formato de chave correto.
</Callout>

## O upload de arquivos é cobrado?

O upload de arquivos em si é gratuito. No entanto, quando você referencia um arquivo enviado em uma conversa, o conteúdo dele é convertido em tokens e cobrado como tokens de entrada. Arquivos maiores geram mais tokens.

## Como lidar com o erro 403 de saldo insuficiente?

Um erro 403 normalmente indica saldo insuficiente na conta. Faça uma recarga no console — os fundos ficam disponíveis imediatamente. Você também pode usar a API de consulta de saldo para verificar o saldo atual.

## E se a resposta vier truncada?

Se a resposta da API estiver incompleta ou truncada:

- Verifique se o parâmetro `max_tokens` está definido com um valor muito baixo e aumente-o conforme necessário.
- Analise o campo `finish_reason` na resposta: `length` indica que a saída foi truncada por causa do limite de tokens; `stop` indica que foi concluída normalmente.
- Para geração de textos longos, considere dividir a requisição em partes.

<Callout type="tip">
**Verifique o `finish_reason`**: `length` = truncado, `stop` = concluído normalmente.
</Callout>

## Posso fazer upload de imagens pela API de arquivos?

Sim. A API de upload de arquivos aceita arquivos de imagem. Após o envio, as imagens podem ser referenciadas em conversas. Com os modelos Vision, você também pode passar imagens diretamente nas mensagens por URL ou codificação Base64.

## Quais são as fontes da Web Search?

O recurso de Web Search da Kimi API recupera informações publicamente disponíveis na internet em tempo real. Os resultados vêm de páginas indexadas pelos principais mecanismos de busca. Cada chamada de Web Search gera uma taxa adicional de US$ 0,004.

## Existe alguma relação entre a assinatura Kimi e a concurrency da API?

<Callout type="warning">
Os **planos de assinatura Kimi** (como o Allegretto) e a **API** são sistemas de cobrança separados. O paralelismo de agentes incluído nos planos de assinatura aplica-se apenas aos produtos de consumo da Kimi e não tem relação com os rate limits da API. Os limites de concurrency da API são determinados pela faixa de recargas acumuladas da sua conta.
</Callout>

## Diferença entre a API e o app web da Kimi

| Aspecto | App Web Kimi | Kimi API |
| --- | --- | --- |
| **Público** | Produto conversacional voltado ao consumidor | Interface de integração voltada ao desenvolvedor |
| **Acesso** | Pelo navegador | Chamadas programáticas de API |
| **Cobrança** | Sistema de assinatura/créditos | Pagamento por uso, conforme os tokens |
| **Conta** | Login compartilhado | Login compartilhado |
| **Créditos** | Não transferíveis entre os sistemas | Não transferíveis entre os sistemas |

## A geração de PPT e a deep research estão disponíveis via API?

<Callout type="warning">
A **geração de PPT** e a **deep research** **ainda não estão disponíveis via API**. Esses recursos só podem ser acessados, no momento, pelo produto de consumo da Kimi. Acompanhe os anúncios da plataforma para novidades.
</Callout>

## A implantação local (on-premises) é suportada?

Atualmente, a Kimi API oferece apenas serviços de API na nuvem e **não suporta implantação privada on-premises**. Para necessidades de implantação privada, entre em contato com a equipe de vendas em [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales).

## Posso usar a Kimi API fora da China?

A Kimi API está disponível internacionalmente em `api.moonshot.ai`. Se você tiver problemas de conectividade, entre em contato com a equipe de vendas para discutir a melhor solução para a sua região.
