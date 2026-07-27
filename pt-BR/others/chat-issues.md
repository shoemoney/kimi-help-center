---
title: "Problemas comuns no chat do Kimi"
slug: "chat-issues"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Problemas comuns no chat do Kimi - Central de Ajuda do Kimi"
  description="Está com problemas nos chats do Kimi? Este artigo reúne etapas de solução para problemas comuns, como respostas interrompidas, conteúdo anormal e falhas de carregamento, para ajudar você a resolvê-los rapidamente."
/>

# Problemas comuns no chat do Kimi

## Não consegue enviar mensagens / aparece um círculo vermelho?

Isso pode acontecer por estes motivos:

- **Rate limit acionado**: o Kimi tem um limite de conversas em determinadas janelas de tempo. Enviar mensagens com muita frequência pode impedir novas interações. Aguarde de 2 a 3 horas antes de tentar novamente e controle a frequência das conversas.
- **Condições de rede ruins**: sinal fraco ou conexão instável podem impedir o envio de mensagens. Troque de rede e tente de novo.

## A conversa ultrapassa 200.000 palavras?

O contexto de uma única conversa do K2.6 é de aproximadamente 128K tokens (~200.000 palavras). Quando esse limite é atingido, o modelo não consegue mais ler novos conteúdos. O que fazer depende do motivo pelo qual você chegou ao limite:

- **Um único arquivo enviado é grande demais e já atinge o limite na primeira rodada**: divida o arquivo em partes menores e envie-as em lotes.
- **Uma conversa com várias rodadas vai se aproximando do limite aos poucos**: primeiro, resuma as principais conclusões até aqui (você também pode pedir ao Kimi para "resumir e gerar um documento de passagem"), depois cole esse resumo em uma nova conversa como contexto inicial para continuar.

<Callout type="info">
**Dicas**:
- De forma mais estrutural, usar [Memória](/features/memory-space) e [Projetos](/features/project) ajuda a evitar que você atinja o limite — a Memória retém automaticamente as informações importantes, e um Projeto mantém seus arquivos de referência, instruções e memória juntos para que cada nova conversa já leve o contexto.
- Excluir mensagens anteriores na mesma conversa não libera espaço na janela de contexto — o melhor é iniciar uma nova conversa.
- Thinking consome tokens; para economizar credits, defina **Intensidade do Thinking** como **Padrão**.
- Para documentos muito longos, o K3 oferece um contexto de 1M token (disponível na assinatura de nível mais alto); ao escrever, selecione **Duração da conversa: Extra longa**.
</Callout>

## Está vendo "vamos falar sobre outra coisa"?

Esse aviso indica que o conteúdo atual acionou uma política de segurança e que o assunto não pode continuar. Basta digitar um novo tema para retomar a conversa — não é preciso esperar.

<Callout type="info">
Se você acredita que o conteúdo não violava as regras, clique em "👎" para enviar feedback e nos ajudar a melhorar nossas políticas de segurança.
</Callout>

## Está vendo "Kimi está um pouco cansado"?

Isso significa que há usuários demais online e os recursos computacionais estão sob alta demanda — um rate limit de horário de pico. Aguarde de 1 a 2 minutos e tente novamente.

<Callout type="tip">
Para reduzir o tempo de espera, considere assinar um plano de associação e ter acesso prioritário a recursos computacionais dedicados.
</Callout>

## Não consegue baixar PPT/Word/Excel?

A própria janela de chat do Kimi não gera arquivos Office para download:

| Tipo de arquivo | Onde gerar |
|-----------|-------------------|
| **Slides** | Acesse [Kimi Slides](https://www.kimi.com/slides) — permite gerar online e baixar |
| **Word/Excel** | Use o modo **Agent** |

## Como excluir uma conversa individual?

No aplicativo Kimi ou na versão web, encontre a conversa correspondente e toque em excluir. Após a exclusão, a conversa não será mais exibida no seu dispositivo; os dados relacionados entrarão no fluxo de tratamento conforme o disposto na seção 5 da [Política de Privacidade da Kimi](https://www.kimi.com/user/agreement/userPrivacy?version=v2).

## Depois de excluir uma conversa, o link de compartilhamento ainda fica acessível?

Não. A permissão de acesso do link de compartilhamento está diretamente vinculada ao status da conversa: quando a conversa é excluída, o link externo de compartilhamento gerado a partir dela é invalidado ao mesmo tempo, e outras pessoas não conseguem mais acessar o conteúdo por meio dele. A plataforma não mantém nenhuma cópia acessível desse link.

## O que fazer se eu enviar informações confidenciais por engano?

Recomendamos excluir imediatamente a conversa correspondente no aplicativo. Se estiverem envolvidas informações confidenciais, como documento de identidade, cartão bancário ou documentos jurídicos, entre em contato com o suporte pelo e-mail [support@moonshot.ai](mailto:support@moonshot.ai) após a exclusão e indique no assunto do e-mail o tipo de informação confidencial (por exemplo, “documento de identidade”, “cartão bancário” ou “documento jurídico”), para que possamos priorizar o atendimento.

## Algum dado ainda é mantido após a exclusão?

De acordo com os requisitos de leis e regulamentos como a “Lei de Segurança Cibernética”, a plataforma precisa reter parte dos registros de rede (como horário das operações e identificadores da conta) por um determinado período, apenas para fins de conformidade de segurança e verificações regulatórias, sem usá-los para outros fins sem o seu consentimento.

Para excluir a conta e remover todos os dados, consulte [Exclusão de conta e remoção de dados](/others/account-deletion).
