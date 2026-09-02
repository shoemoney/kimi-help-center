---
title: "Perguntas frequentes"
slug: "kimi-work-faq"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Perguntas frequentes do Kimi Work - Central de Ajuda Kimi"
  description="Perguntas frequentes sobre o Kimi Work: diferenças em relação à versão web, controle de permissões ao acessar arquivos locais, o que a automação de navegador com WebBridge pode fazer e como as tarefas agendadas são executadas."
/>

# Perguntas frequentes sobre o Kimi Work

## Qual é a diferença entre o Kimi Work e a versão web?

Enquanto o app web do Kimi é perfeito para conversas e consultas rápidas, o Kimi Work é um agente local criado para fluxos de trabalho mais aprofundados. Ele lê e manipula suas pastas locais, navega autonomamente pela web via WebBridge, executa código Python em segundo plano e realiza tarefas agendadas. É um funcionário digital em nível de sistema.

## Como o Kimi Work protege minha privacidade ao acessar arquivos locais?

Você tem controle absoluto sobre seus arquivos. O Kimi Work oferece controle de permissões em três níveis, e você escolhe como autorizar:

- **Padrão**: as operações de rotina são executadas automaticamente — o Kimi solicita sua autorização explícita antes de operações sensíveis como modificar, sobrescrever ou executar código nos seus arquivos locais;
- **Permitir manualmente**: pedir autorização antes de agir;
- **Permitir tudo**: executar diretamente, sem pedir autorização.

Ao escolher "Permitir manualmente", nada acontece sem o seu consentimento.

<Callout type="exclamation">
Com a permissão "Permitir tudo" (totalmente automática) ativada, a IA lerá e escreverá arquivos diretamente, executará código e modificará configurações do sistema, e tratará automaticamente de etapas que normalmente exigiriam a sua decisão. Isso pode resultar em:

- arquivos sobrescritos, excluídos por engano ou corrompidos;
- alterações nas configurações do sistema, causando mau funcionamento do software;
- alterações na criptografia de disco, nas partições ou no firmware, deixando o dispositivo restrito ou incapaz de inicializar.

Algumas operações são irreversíveis e os dados podem ser perdidos permanentemente, sem possibilidade de recuperação. Esteja ciente dos riscos deste modo, use-o com cautela e faça backup dos seus dados.

Ao ativar a permissão "Permitir tudo" (totalmente automática), considera-se que você está ciente e aceita os riscos acima, e autoriza a IA a executar as operações relacionadas de forma autônoma; os resultados das operações realizadas com base na sua autorização são de sua responsabilidade.
</Callout>

## O que exatamente o WebBridge (automação de navegador) pode fazer por mim?

O WebBridge permite que o Kimi use um navegador como uma pessoa. Você pode pedir para ele verificar as notícias mais recentes em um site e resumir tudo, ou extrair dados históricos de ações e salvá-los no seu Excel local. Ele clica, rola a página e extrai dados de forma autônoma, economizando horas de trabalho manual.

## O que posso fazer com tarefas agendadas? Elas são executadas se meu computador estiver em repouso?

As tarefas agendadas permitem que o Kimi execute automaticamente uma tarefa fixa em um horário definido — em uma programação diária, semanal, mensal ou única (sem repetição) — ideal para briefings diários, monitoramento semanal e limpezas periódicas.

No desktop do Kimi Work, as tarefas agendadas são executadas **localmente** e só rodam enquanto o **app está aberto**. Execuções perdidas enquanto o computador estiver em repouso ou desligado, ou enquanto o app estiver fechado, **não são executadas retroativamente** na próxima vez que ele for aberto. Portanto, se você precisa que uma tarefa rode durante a noite, mantenha o computador e o app Kimi Work em execução. (Em contrapartida, tarefas criadas no Kimi rodam na nuvem e não exigem que o cliente permaneça aberto.)

Consulte [Tarefas agendadas](/features/scheduled-tasks) para saber mais.
