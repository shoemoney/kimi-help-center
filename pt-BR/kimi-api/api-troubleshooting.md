---
title: "Solução de problemas da API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Solução de problemas da API - Central de Ajuda Kimi"
  description="Problemas comuns e soluções para desenvolvedores que usam a Kimi API."
/>

# Solução de problemas da API

<Callout type="info">
Problemas comuns e soluções para desenvolvedores que usam a Kimi API.
</Callout>

## Como lidar com erro 429 de rate limit?

Um erro 429 significa que a frequência das suas requisições excedeu o rate limit atual da conta. Para resolver:

- Implemente uma estratégia de novas tentativas com backoff exponencial (aguarde 1s, 2s, 4s… antes de tentar novamente).
- Controle o número de requisições simultâneas usando um mecanismo de fila.
- Aumente o valor acumulado das suas recargas para subir o nível do seu rate limit.
- Entre em contato com a equipe comercial se precisar de uma quota maior.

## Como lidar com erro 401 de autenticação?

Um erro 401 significa que a autenticação da chave de API falhou. Verifique o seguinte:

- Confira se a chave de API foi copiada corretamente (atenção a espaços no início ou no fim).
- Verifique se o formato do cabeçalho da requisição é `Authorization: Bearer <your-api-key>`.
- Confirme se a chave de API não foi excluída nem desativada — verifique no console.
- Certifique-se de que você não está usando uma chave de outra plataforma (as chaves da Kimi API começam com `sk-`).

<Callout type="warning">
**Formato da chave de API**: as chaves da Kimi API começam com `sk-`. Confira se você está usando o formato correto.
</Callout>

## O upload de arquivos gera cobrança?

O upload de arquivos em si é gratuito. No entanto, quando você referencia um arquivo enviado em uma conversa, o conteúdo dele é analisado e convertido em tokens, sendo cobrado como tokens de entrada. Arquivos maiores geram mais tokens.

## Como lidar com erro 403 de saldo insuficiente?

Um erro 403 normalmente indica saldo insuficiente na conta. Faça uma recarga no console — os fundos ficam disponíveis imediatamente. Você também pode usar a API de consulta de saldo para verificar seu saldo atual.

## E se a resposta vier truncada?

Se a resposta da API estiver incompleta ou truncada:

- Verifique se o parâmetro `max_tokens` está baixo demais e aumente-o conforme necessário.
- Confira o campo `finish_reason` na resposta: `length` significa que a saída foi truncada devido ao limite de tokens; `stop` significa que ela foi concluída normalmente.
- Para gerar textos longos, considere dividir a requisição em partes.

<Callout type="tip">
**Verifique `finish_reason`**: `length` = truncada, `stop` = concluída normalmente.
</Callout>

## Posso enviar imagens pela API de arquivos?

Sim. A API de upload de arquivos aceita arquivos de imagem. Depois de enviadas, as imagens podem ser referenciadas em conversas. Com modelos de visão, você também pode passar imagens diretamente nas mensagens via URL ou codificação Base64.

## Quais são as fontes da Web Search?

O recurso de Web Search da Kimi API recupera, em tempo real, informações disponíveis publicamente na internet. Os resultados vêm de páginas da web indexadas pelos principais mecanismos de busca. Cada chamada de Web Search gera uma taxa adicional de $0.004.

## Há relação entre a assinatura Kimi e a concurrency da API?

<Callout type="warning">
**Os planos de assinatura Kimi** (como Allegretto) e a **API** são sistemas de cobrança separados. O paralelismo de agentes incluído nos planos de assinatura se aplica apenas aos produtos Kimi para consumidores e não tem relação com os rate limits da API. Os limites de concurrency da API são definidos pelo nível acumulado de recarga da sua conta.
</Callout>

## Diferença entre API e app web Kimi

| Aspecto | App web Kimi | Kimi API |
| --- | --- | --- |
| **Público** | Produto conversacional voltado a consumidores | Interface de integração voltada a desenvolvedores |
| **Acesso** | Pelo navegador | Chamadas programáticas à API |
| **Cobrança** | Sistema de assinatura/credit | Pagamento conforme o uso, por tokens |
| **Conta** | Login compartilhado | Login compartilhado |
| **Credits** | Não transferíveis entre os sistemas | Não transferíveis entre os sistemas |

## A geração de PPT e o Deep Research estão disponíveis via API?

<Callout type="warning">
**A geração de PPT** e o **Deep Research** **ainda não estão disponíveis via API**. No momento, esses recursos só podem ser acessados pelo produto Kimi para consumidores. Acompanhe os anúncios da plataforma para receber atualizações.
</Callout>

## Há suporte a implantação local?

Atualmente, a Kimi API oferece apenas serviços de API baseados em nuvem e **não oferece suporte a implantação privada local**. Para necessidades de implantação privada, entre em contato com a equipe comercial em [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales).

## Posso chamar a Kimi API de fora da China?

A Kimi API está disponível internacionalmente via `api.moonshot.ai`. Se você tiver problemas de conectividade, entre em contato com a equipe comercial para discutir a melhor solução para sua região.
