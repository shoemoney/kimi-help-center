---
title: "Problemas comuns no chat do Kimi"
slug: "chat-issues"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Problemas comuns no chat do Kimi - Central de Ajuda Kimi"
  description="Está com problemas nas conversas do Kimi? Este artigo reúne as etapas para resolver as questões mais comuns do chat, como respostas interrompidas, conteúdo anormal e falhas de carregamento, para você resolver rápido."
/>

# Problemas comuns no chat do Kimi

## Não consegue enviar mensagens / aparece um círculo vermelho?

Isso pode ser causado por:

- **rate limit acionado**: o Kimi tem um limite de conversas dentro de determinadas janelas de tempo. Enviar mensagens com muita frequência pode impedir novas interações. Aguarde de 2 a 3 horas antes de tentar novamente e controle a frequência das suas conversas.
- **Condições de rede ruins**: sinal fraco ou conexão instável podem impedir o envio de mensagens. Troque de rede e tente de novo.

## A conversa ultrapassou 200.000 palavras?

O limite de contexto do K2.6 em uma única conversa é de aproximadamente 128K tokens (cerca de 200.000 palavras). Ao atingir esse limite, o modelo não consegue mais aceitar novas entradas.

<Callout type="tip">
**Ações recomendadas**:

1. **Inicie uma nova conversa**: copie as conclusões principais ou o resumo da conversa original para uma nova e continue a partir daí.
2. **Gere um documento de transição**: peça ao Kimi para "resumir e gerar um documento de transição" e cole o resultado em uma nova conversa como contexto inicial — isso economiza tokens e preserva as informações.

**Observação**: excluir mensagens dentro da mesma conversa **não** libera a janela de contexto. Em vez disso, inicie uma nova conversa.
</Callout>

<Callout type="info">
Modelos com Thinking mode consomem mais tokens para raciocinar, o que reduz o limite efetivo de contexto. Ao trabalhar com documentos longos, prefira o K2 ao K2-Thinking.
</Callout>

## Apareceu "vamos falar de outra coisa"?

Esse aviso indica que o conteúdo atual acionou uma política de segurança e o tema não pode continuar. Basta digitar um novo assunto para retomar a conversa — sem precisar esperar.

<Callout type="info">
Se você acredita que o conteúdo não violou nenhuma regra, clique em "👎" para enviar seu feedback e nos ajudar a aprimorar nossas políticas de segurança.
</Callout>

## Apareceu "o Kimi está um pouco cansado"?

Isso significa que há usuários demais online e os recursos de computação estão sobrecarregados — um rate limit de horário de pico. Aguarde de 1 a 2 minutos e tente novamente.

<Callout type="tip">
Para reduzir o tempo de espera, considere assinar um plano de assinatura e ter acesso prioritário a recursos de computação dedicados.
</Callout>

## Não consegue baixar PPT/Word/Excel?

A própria janela de chat do Kimi não gera arquivos do Office para download:

| Tipo de arquivo | Onde gerar |
|-----------|-------------------|
| **Slides** | Acesse o [Kimi Slides](https://www.kimi.com/slides) — permite gerar e baixar online |
| **Word/Excel** | Use o modo **Agent** |
