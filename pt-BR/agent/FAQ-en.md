---
title: "Perguntas frequentes sobre a criação de skills"
slug: "create-custom-skills-faq"
order: 9
extract_headings: true
preview: false
---

<SeoMeta
  title="Perguntas frequentes sobre a criação de skills - Central de Ajuda Kimi"
  description="Perguntas comuns sobre a criação de Kimi Skills, incluindo upload de documentos, uso de tokens, limites de frequência, nomeação de skills e tratamento de falhas na criação."
/>

# Perguntas frequentes (FAQ) sobre skills

## Por que o botão "Criar Skill" está desativado?

Isso pode acontecer pelos seguintes motivos:
1. O arquivo enviado ou a descrição da skill está incompleto.
2. O formato ou a quantidade de arquivos não atende aos requisitos.
3. O sistema detectou que os créditos da sua conta foram esgotados.

## Como a criação de Skills consome créditos?

Criar uma skill consome seus **tokens**, que podem vir das buscas que você ganhou ou dos créditos da sua assinatura oficial.

**Ordem de dedução**:
1. As buscas presenteadas têm prioridade.
2. Se não houver buscas presenteadas disponíveis, os créditos da assinatura são utilizados.

<Callout type="info">
Se o processo de criação falhar, nenhum token será descontado. Os tokens só são consumidos quando a criação é concluída com sucesso.
</Callout>

## Existem limites na quantidade ou frequência de criações?

Sim. Para garantir a estabilidade do sistema e o uso justo, há os seguintes limites:

1. **Limite de concurrency**: É possível executar no máximo **3 tarefas** (em criação + com falha) em paralelo. Ao atingir esse limite, você receberá um aviso para tentar novamente após algum tempo.
2. **Limite diário**: Cada usuário pode realizar no máximo **10 conversões de "Documento Office em Skill"** por dia (incluindo novas tentativas). Ao ultrapassar esse limite, uma notificação será exibida.

## O que fazer se a criação de uma skill falhar?

* Você pode escolher **Tentar novamente** ou **Excluir** o card da skill que falhou.
* As tentativas que falham não consomem créditos.
* A descrição original da skill será exibida no card com falha para ajudar você a distinguir entre as diferentes tarefas.

## Quais requisitos de nomeação se aplicam às novas skills?

Os nomes de novas skills devem seguir as seguintes regras:
1. **Não podem duplicar skills existentes**: Isso inclui skills oficiais e quaisquer skills que você já tenha adicionado.
   - Por exemplo, se você já possui as skills A, B e C, criar uma nova skill chamada A exige renomeá-la para evitar conflitos.
2. **Tamanho do nome**: No máximo 25 caracteres.
3. **Caracteres permitidos**: Apenas letras minúsculas do inglês, hifens `-` e sublinhados `_`.

<Callout type="info">
Seguir essas regras garante que sua skill seja adicionada com sucesso e evita confusão com skills existentes.
</Callout>

## O que acontece se o nome de uma skill for sinalizado como "já em uso"?

Ao criar uma nova skill, o sistema verifica se o nome informado entra em conflito com skills existentes, incluindo skills oficiais e aquelas que você já adicionou.
Se um conflito for detectado, aparecerá um pop-up com a mensagem:
> O nome de skill `/skill-name` já está em uso. Renomeie para evitar confusão.

Nesse momento, você pode digitar um novo nome de skill e clicar em **Renomear e Adicionar**, ou clicar em **Cancelar** para desistir da criação.

## E se eu não resolver um conflito de nomes?

O sistema não permite adicionar skills com nomes duplicados. Se você não resolver o conflito de nomes, não será possível concluir a criação da skill.
