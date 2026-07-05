---
title: "Recursos e limitações do Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Recursos e limitações do Agent

<SeoMeta
  title="Recursos e limitações do Agent - Central de Ajuda Kimi"
  description="Conheça os recursos do Kimi Agent, dicas de uso, limitações e práticas recomendadas para obter os melhores resultados."
/>

<Callout type="info">
O **Kimi Agent** é um assistente com IA que executa tarefas complexas de forma autônoma, por meio de raciocínio em várias etapas e integração com ferramentas. Este guia reúne boas práticas, limitações e perguntas frequentes para você aproveitar ao máximo o modo Agent.
</Callout>

## Dicas de uso

**(1) Antes de enviar uma tarefa**

Descreva claramente as informações de contexto e as restrições — contexto do projeto, caso de uso e requisitos especiais — para ajudar o Kimi a entender sua intenção com mais precisão.

**(2) Durante a execução**

O Kimi Agent é executado de forma assíncrona em segundo plano. Se a página parecer travada ou parada, **não clique em "Parar"** — isso interromperia a execução da tarefa. Você pode sair da página; a tarefa continuará rodando em segundo plano e você receberá uma notificação quando ela for concluída. Para tarefas que devem demorar mais (por exemplo, K2.6 Agent Swarm [Beta]), tenha paciência.

**(3) Cenários de sites**

O Agent pode gerar conteúdo full-stack, incluindo interfaces de frontend, serviços de backend e lógica de armazenamento persistente. Se um projeto não funcionar como esperado, o problema costuma estar relacionado à inicialização do sandbox, à inicialização do banco de dados, à configuração de autenticação ou à falta de ações de publicação. O Agent padrão roda na nuvem e não consegue acessar diretamente arquivos locais nem sistemas de intranet corporativa. Para acessar arquivos locais ou intranet, use o Kimi Claw.

<Callout type="tip">
**Precisa acessar arquivos locais?** Use o Kimi Claw para acessar com segurança arquivos locais e sistemas de intranet corporativa. Saiba mais na [documentação do Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Conversas com várias rodadas e ajustes de tarefas**
Ao longo de várias rodadas de diálogo e revisões, o Agent pode "esquecer" alguns detalhes iniciais. O ideal é definir primeiro a estrutura e os pontos principais da tarefa e, depois, fazer ajustes incrementais.

**(5) Decomposição de tarefas grandes**
Para tarefas grandes e complexas, divida-as em 2 a 3 fases e envie-as ao Kimi em lotes, ou use o K2.6 Agent Swarm [Beta].

**(6) Limitações na geração de arquivos**
No modo Agent padrão, normalmente só é possível gerar um arquivo por tarefa (por exemplo, um documento ou uma planilha). Para vários arquivos (por exemplo, um documento Word e um PPT ao mesmo tempo), use o K2.6 Agent Swarm [Beta].

**(7) Limites de contexto e equilíbrio na geração**
Devido ao limite de contexto de 256K caracteres dos large language models (cerca de 40.000 a 50.000 caracteres chineses / ~100.000 palavras em inglês), o processamento de grandes volumes de arquivos exige equilibrar o volume de entrada e de saída.

<Callout type="warning">
**Observação sobre o limite de contexto**: o Agent usa uma janela de contexto de 256K caracteres. Para melhores resultados, forneça um contexto conciso e evite sobrecarregá-lo com arquivos desnecessários.
</Callout>

## Observações importantes

<Callout type="warning">
**Uso de créditos**: as tarefas do Agent consomem créditos do pool compartilhado (outros recursos de assinatura). O Kimi Code usa um pool de créditos separado. Cada tarefa do Agent normalmente consome 1 unidade de créditos. Para informações detalhadas de créditos por nível de assinatura, consulte [Créditos e cobrança](/agent/quota-and-billing).
Nível gratuito: 6 tarefas do Agent/mês
Níveis pagos: de 60 a 720 tarefas do Agent/mês, dependendo do seu plano
</Callout>

- **Tempo de execução**: no modo Agent, uma única tarefa normalmente leva de 5 a 20 minutos. As tarefas do K2.6 Agent Swarm [Beta] podem demorar mais. Você pode sair da página — basta não clicar em Parar para interromper a tarefa.
- **Uso de créditos**: as tarefas do Agent consomem créditos do pool compartilhado. O Kimi Code usa um pool de créditos separado.
- **Tarefas simples**: para perguntas e respostas simples, recomenda-se o modo de chat padrão, que oferece respostas mais rápidas.

<Callout type="warning">
**Conformidade de conteúdo**: os recursos do Agent estão sujeitos ao [Acordo de Usuário do Kimi](https://www.kimi.com/user/agreement/modelUse?version=v2). Não é permitida a geração de conteúdo proibido; o envio de conteúdo proibido pode resultar na suspensão do serviço.
</Callout>

## Perguntas frequentes

**P: O que o Agent pode fazer?**

O Agent atende às seguintes necessidades por meio de múltiplas chamadas de ferramentas:
- **Geração e edição de texto**: gera artigos, relatórios, documentos etc., com suporte a diversos estilos e formatos de escrita.
- **Desenvolvimento web**: cria interfaces e serviços de projetos full-stack, com suporte a design de interface de aplicativos, integração de backend, persistência de dados e visualização de dados.
- **Geração de slides**: ferramenta de PPT dedicada baseada na web para gerar apresentações completas.
- **Assistência em programação**: escrita e depuração de código em várias linguagens de programação.

**P: Por que o site criado pelo Agent não está funcionando?**

Um projeto completo normalmente é formado por três partes: interface de frontend, serviços de backend e armazenamento de dados. O Agent pode gerar conteúdo de projetos full-stack nas três camadas. Se o seu projeto não funcionar como esperado, o problema costuma estar relacionado à inicialização do sandbox, à inicialização do banco de dados, à configuração de autenticação ou à falta de ações de publicação.

**P: Quais são as entregas do Agent?**

- Arquivos completos de execução da tarefa
- Pré-visualização do projeto implantado e versões publicadas
- Arquivo Zip para download (localizado em `/mnt/okcomputer/output/`)

**P: Qual é o tamanho do contexto do Agent?**

O Agent usa um tamanho de contexto de **256K caracteres** (cerca de 40.000 a 50.000 caracteres chineses / ~100.000 palavras em inglês).

**P: Como os créditos do Agent são calculados?**

O Agent, o PPT e outros recursos de assinatura compartilham um único pool de créditos. O Kimi Code usa um pool de créditos separado. Cada tarefa do Agent normalmente conta como uma unidade de créditos. Veja seus créditos e uso atuais em [Créditos de assinatura](https://www.kimi.com/membership-credits).
