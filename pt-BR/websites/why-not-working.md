---
title: "Por que o site criado pelo agente não está funcionando?"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Por que o site criado pelo agente não está funcionando? - Central de Ajuda Kimi"
  description="Um projeto full-stack inclui interface frontend, serviços de backend e armazenamento persistente. O Kimi Agent pode gerar os três, mas a execução bem-sucedida depende da configuração do ambiente..."
/>

# Por que não está funcionando?

<Callout type="tip">
Um projeto full-stack inclui **interface frontend, serviços de backend e armazenamento persistente**. O Kimi Agent pode gerar os três, mas a execução bem-sucedida depende da configuração do ambiente, da configuração de autenticação e das ações de publicação.
</Callout>

Quando seu aplicativo não funciona como esperado, o problema geralmente não é a falta de capacidade no backend. Normalmente, trata-se de uma etapa incompleta de preview, autenticação, banco de dados ou publicação.

## Fluxo de trabalho full-stack 

1. **Gerar**: o Agent cria o frontend + backend + esquema do banco de dados e a lógica de dados.
2. **Preview**: execução no sandbox para testes full-stack locais (em alguns casos, pode ser necessário iniciar manualmente).
3. **Versionar**: o Agent pode usar ferramentas de versionamento e criar commits automaticamente.
4. **Reverter**: você pode voltar a qualquer versão de commit anterior.
5. **Publicar / Compartilhar**: o aplicativo só é implantado em uma URL pública depois que você publica manualmente.

## Causas comuns de falha 

| Sintoma | Causa provável | O que fazer |
|----------|-------------|------------|
| O frontend carrega, mas a API falha | Runtime do sandbox não iniciado | Inicie o sandbox e execute o preview novamente |
| Dados não salvos ou não visíveis | Banco de dados não inicializado ou migrado | Execute novamente a configuração ou a migração do banco de dados |
| O login falha | Fluxo de autenticação configurado incorretamente | Verifique a configuração do Kimi Login e as configurações de callback |
| Outras pessoas não conseguem acessar seu aplicativo | Aplicativo não publicado | Clique em **Publicar/Compartilhar** para implantar |
| Alterações recentes quebraram funcionalidades | Regressão na versão mais recente | Reverta para um commit estável |

## Suporte a autenticação

- **Fase 1**: oferece suporte ao **Kimi Login**.
- **Próxima fase**: novos provedores OAuth serão adicionados.
- **Também suportado**: o Agent pode gerar login de conta padrão por e-mail/senha baseado em banco de dados.

## Versão e reversão

- O Agent oferece suporte a novas ferramentas de versionamento e pode executar `git commit` de forma autônoma durante o desenvolvimento.
- Você pode visualizar o histórico de versões e reverter para um commit selecionado quando necessário.

## Preview vs. Publicação

- **Preview**: para desenvolvimento e testes no sandbox; em alguns cenários, pode exigir a inicialização manual do sandbox.
- **Publicar/Compartilhar**: ação manual do usuário que implanta seu aplicativo em um ambiente acessível publicamente.

## O Agent é ideal para

- Prototipagem rápida de produtos full-stack
- Fluxos CRUD com armazenamento persistente
- Operações básicas de dados administrativas ou de back-office
- Projetos de demonstração de ponta a ponta com login, dados e fluxo de implantação

## Limites atuais

- Operações avançadas de produção (por exemplo, SRE complexo e alta disponibilidade multirregião) ainda exigem trabalho manual de engenharia.
- Para cenários de produção de alto risco, faça uma revisão de segurança e o reforço da implantação antes do lançamento.
