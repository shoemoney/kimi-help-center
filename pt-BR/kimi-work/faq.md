---
title: "Perguntas frequentes"
slug: "kimi-work-faq"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Perguntas frequentes do Kimi Work - Central de Ajuda Kimi"
  description="Perguntas frequentes do Kimi Work: em que ele difere da versão web, controle de permissões ao acessar arquivos locais, o que a automação de navegador WebBridge consegue fazer e como as tarefas agendadas são executadas."
/>

# Perguntas frequentes do Kimi Work

## Qual é a diferença entre o Kimi Work e a versão web?

Enquanto o app web do Kimi é ideal para conversas rápidas e consultas pontuais, o Kimi Work é um agente local criado para fluxos de trabalho mais profundos. Ele lê e processa suas pastas locais, navega autonomamente pela web via WebBridge, executa código Python em segundo plano e realiza tarefas agendadas. É um funcionário digital em nível de sistema.

## Como o Kimi Work protege minha privacidade ao acessar arquivos locais?

Você tem controle total sobre seus arquivos. O Kimi Work oferece controle de permissões, e você decide como autorizar:

- **Solicitar permissão**: pedir autorização antes de agir — o Kimi solicita sua autorização explícita antes de modificar, sobrescrever ou executar código nos seus arquivos locais;
- **Permitir tudo**: executar diretamente, sem pedir autorização.

Ao escolher "Solicitar permissão", nada acontece sem o seu consentimento.

## O que exatamente o WebBridge (automação de navegador) pode fazer por mim?

O WebBridge dá ao Kimi a capacidade de usar um navegador como uma pessoa. Você pode pedir que ele confira as notícias mais recentes em um site e faça um resumo, ou que extraia dados históricos de ações para o seu Excel local. Ele clica, rola a página e extrai dados de forma autônoma, poupando horas de trabalho manual.

## O que posso fazer com tarefas agendadas? Elas rodam se meu computador estiver em repouso?

O agendador Cron integrado aceita chamadas de agentes LLM, execuções em Python/Shell e muito mais. Você pode acionar tarefas diariamente, a cada hora ou de forma condicional. Para garantir que elas rodem sem interrupções durante a noite, basta ativar a opção "Manter computador ativo" nas configurações.
