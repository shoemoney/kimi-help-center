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
  description="Conheça as capacidades do Kimi Agent, dicas de uso, limitações e boas práticas para obter os melhores resultados."
/>

<Callout type="info">
**Kimi Agent** é um assistente com IA que executa tarefas complexas de forma autônoma por meio de raciocínio em várias etapas e integração com ferramentas. Este guia reúne boas práticas, limitações e perguntas frequentes para ajudar você a aproveitar ao máximo o modo Agent.
</Callout>

## Dicas de uso

**(1) Antes de enviar uma tarefa**

Descreva com clareza as informações de contexto e as restrições — contexto do projeto, caso de uso e requisitos especiais — para ajudar o Kimi a entender sua intenção com mais precisão.

**(2) Durante a execução**

O Kimi Agent é executado de forma assíncrona em segundo plano. Se a página da web parecer travada ou parada, **não clique em "Parar"** — isso interromperá a execução da tarefa. Você pode sair da página; a tarefa continuará em execução em segundo plano, e você receberá uma notificação quando ela for concluída. Para tarefas que devem levar mais tempo (por exemplo, Agent Swarm), tenha paciência.

**(3) Cenários de sites**

O Agent pode gerar conteúdo full-stack, incluindo interfaces de frontend, serviços de backend e lógica de armazenamento persistente. Se um projeto não funcionar como esperado, o problema geralmente está relacionado à inicialização do sandbox, à inicialização do banco de dados, à configuração de autenticação ou à falta de ações de publicação. O Agent padrão é executado na nuvem e não consegue acessar diretamente arquivos locais nem sistemas de intranet corporativa. Para acessar arquivos locais ou a intranet, use o Kimi Claw.

<Callout type="tip">
**Precisa acessar arquivos locais?** Use o Kimi Claw para ter acesso seguro a arquivos locais e sistemas de intranet corporativa. Saiba mais na [documentação do Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Conversas em várias rodadas e ajustes de tarefas**
Ao longo de várias rodadas de diálogo e revisões, o Agent pode "esquecer" alguns detalhes iniciais. O ideal é estabelecer primeiro a estrutura da tarefa e os pontos-chave, e depois fazer ajustes incrementais.

**(5) Decomposição de tarefas grandes**
Para tarefas grandes e complexas, divida-as em 2–3 etapas e envie-as ao Kimi em lotes, ou use o Agent Swarm.

**(6) Limitações de saída de arquivos**
No modo Agent padrão, normalmente apenas um arquivo pode ser gerado por tarefa (por exemplo, um documento ou uma planilha). Para vários arquivos (por exemplo, um documento Word e um PPT), use o Agent Swarm.

**(7) Limites de contexto e equilíbrio da saída**
Devido ao limite de contexto de 256K caracteres dos grandes modelos de linguagem (aproximadamente 40.000–50.000 caracteres chineses / ~100.000 palavras em inglês), processar grandes volumes de arquivos exige equilibrar o volume de entrada e de saída.

<Callout type="warning">
**Observação sobre o limite de contexto**: o Agent usa uma janela de contexto de 256K caracteres. Para obter os melhores resultados, forneça um contexto conciso e evite sobrecarregar a tarefa com arquivos desnecessários.
</Callout>

## Observações importantes

<Callout type="warning">
**Uso de credit**: as tarefas do Agent consomem credits do pool compartilhado. O Kimi Code também usa esse pool compartilhado, mas tem seu próprio rate limit de 5 horas / semanal, aplicado apenas ao Kimi Code. Cada tarefa do Agent normalmente consome 1 unidade de credit. Para informações detalhadas sobre credit por nível de assinatura, consulte [Credits e cobrança](/agent/quota-and-billing).

- 60–720 tarefas do Agent/mês, dependendo do seu plano
</Callout>

- **Tempo de execução**: no modo Agent, uma única tarefa geralmente leva de 5 a 20 minutos. Tarefas do Agent Swarm podem levar mais tempo. Você pode sair da página — só não clique em Parar para interromper a tarefa.
- **Uso de credit**: as tarefas do Agent consomem credits do pool compartilhado, que o Kimi Code também usa (o Kimi Code tem seu próprio rate limit de 5 horas / semanal).
- **Tarefas simples**: para perguntas e respostas simples, recomenda-se o modo de chat padrão, que oferece respostas mais rápidas.

<Callout type="warning">
**Conformidade de conteúdo**: os recursos do Agent estão sujeitos ao [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). A geração de conteúdo proibido não é compatível; enviar conteúdo proibido pode resultar na suspensão do serviço.
</Callout>

## Perguntas frequentes

**P: O que o Agent pode fazer?**

O Agent atende às seguintes necessidades por meio de várias chamadas de ferramentas:
- **Geração e edição de texto**: gera artigos, relatórios, documentos etc., com suporte a diferentes estilos e formatos de escrita.
- **Desenvolvimento web**: cria interfaces e serviços de projetos full-stack, com suporte a design de interface de app, integração de backend, persistência de dados e visualização de dados.
- **Geração de slides**: ferramenta web dedicada para PPT, usada para gerar apresentações completas.
- **Assistência em programação**: escrita e depuração de código em várias linguagens de programação.

**P: Por que o site criado pelo Agent não está funcionando?**

Um projeto completo normalmente é composto por três partes: interface de frontend, serviços de backend e armazenamento de dados. O Agent pode gerar conteúdo de projeto full-stack em todas essas três camadas. Se o seu projeto não funcionar como esperado, o problema geralmente está relacionado à inicialização do sandbox, à inicialização do banco de dados, à configuração de autenticação ou à falta de ações de publicação.

**P: Quais são as entregas do Agent?**

- Arquivos completos de execução da tarefa
- Prévia do projeto implantado e versões publicadas
- Arquivo Zip para download (localizado em `/mnt/okcomputer/output/`)

**P: Qual é o tamanho do contexto do Agent?**

O Agent usa um tamanho de contexto de **256K caracteres** (aproximadamente 40.000–50.000 caracteres chineses / ~100.000 palavras em inglês).

**P: Como os credits do Agent são calculados?**

Todos os recursos da assinatura, incluindo o Kimi Code, compartilham um único pool de credit. Cada tarefa do Agent normalmente conta como uma unidade de credit.
