---
title: "Projetos"
slug: "project"
order: 4
extract_headings: true
preview: true
preview_content: "Um projeto é um espaço de trabalho persistente que reúne os arquivos de referência, as conversas e as instruções de uma tarefa de longa duração, para que você não precise explicar o contexto novamente a cada nova conversa."
---

<SeoMeta
  title="O que é um projeto Kimi? Como criar e usar - Central de Ajuda Kimi"
  description="Conheça os projetos Kimi: um espaço de trabalho persistente que reúne arquivos de referência, conversas e instruções do projeto — ideal para escrever uma série de documentos, conduzir pesquisas contínuas ou manter uma base de código. Abrange criação e gerenciamento de projetos, instruções do projeto, arquivos do projeto e quotas dos planos."
/>

# Projetos

Um projeto é um espaço de trabalho persistente. Você pode manter juntos, em um único projeto, os arquivos de referência, as conversas e as instruções de uma tarefa de longa duração; assim, toda conversa iniciada dentro do projeto já carrega esse contexto automaticamente — sem que você precise reenviar os mesmos arquivos ou explicar o histórico do projeto a cada vez.

**Quando usar um projeto**: crie um projeto quando o trabalho for continuar ao longo do tempo, gerar mais de uma entrega ou depender do mesmo conjunto de arquivos — por exemplo, para escrever uma série de documentos, conduzir pesquisas contínuas ou manter uma base de código. Se a tarefa for pontual e não precisar de contexto compartilhado, use uma conversa comum.

<Callout type="info">
O aplicativo desktop Kimi Work também tem "Projetos", que são separados dos projetos do Kimi (Chat) descritos aqui — os dois não são conectados e não compartilham dados.
</Callout>

## Criar e gerenciar projetos

**Pontos de entrada**:
- o botão "+" à direita da seção "Projetos" na barra lateral;
- o item "+ Novo projeto" no topo do seletor de projetos da página inicial.

**Criar**: informe um nome para o projeto (obrigatório, de 1 a 50 caracteres) e, opcionalmente, instruções do projeto; clique em "Criar" para abrir a página inicial do projeto.

**Editar / Excluir**:
- passe o mouse sobre o nome de um projeto na barra lateral ou clique nele com o botão direito para "Editar título" ou "Fixar";
- excluir um projeto exige confirmação. **Depois de excluídos, as conversas, os arquivos e as instruções do projeto são removidos permanentemente e não podem ser recuperados** — prossiga com cuidado.

**Barra lateral**: a seção "Projetos" fica abaixo da entrada Kimi Claw e acima do histórico de conversas, listando seus projetos do mais recente para o mais antigo; expanda um projeto para ver suas conversas.

## Página inicial do projeto

A página inicial do projeto usa um layout de três colunas:
- **Esquerda**: a barra lateral padrão;
- **Centro**: uma área para iniciar conversas e a lista de conversas do projeto. A caixa de entrada mostra "Iniciar uma conversa em '{project name}'…", e enviar uma mensagem por ali cria uma conversa que pertence automaticamente ao projeto atual;
- **Painel direito**: dois blocos — Instruções e Arquivos (recolhíveis).

## O que você pode fazer em uma conversa de projeto

As conversas em um projeto têm os mesmos recursos das conversas comuns do Kimi, mas carregam automaticamente o contexto do projeto. Você pode:
- usar **arquivos do projeto** (lidos sob demanda pelo modelo) e **instruções do projeto**;
- usar **plugins, Skills e Objetivo**;
- **escolher o modelo**.

Inicie uma conversa separada para cada entrega distinta, para manter mensagens e resultados bem focados; o projeto mantém essas conversas relacionadas reunidas.

## Instruções do projeto

- As instruções do projeto são instruções personalizadas específicas do projeto (em texto simples) que o Kimi segue em todas as conversas dentro dele;
- Por exemplo: "Você é um gerente de produto sênior. Responda em chinês e produza a saída em Markdown.";
- Elas passam a valer a partir da sua próxima mensagem ou de uma nova conversa depois de salvas.

## Arquivos do projeto

- Envie arquivos de referência para um projeto para que todas as conversas dele possam usá-los;
- Os formatos compatíveis são os mesmos dos uploads do Kimi Agent: PDF, DOCX, XLSX, CSV, TXT, MD, arquivos de código comuns e formatos de imagem comuns;
- **Cada arquivo deve ter no máximo 100 MB, e você pode enviar até 50 arquivos**;
- Os arquivos do projeto são **lidos sob demanda pelo modelo** — em vez de pré-carregar o texto completo de todos os arquivos a cada turno, o modelo decide quais arquivos precisa consultar com base na sua pergunta;
- O bloco Arquivos mostra uma barra de capacidade na parte inferior; quando ela estiver próxima do limite ou no limite, você verá uma solicitação para excluir arquivos ou fazer upgrade do plano.

## Como o contexto funciona em um projeto

Quando você inicia uma conversa em um projeto, o contexto injetado no modelo inclui: **prompt do sistema + memória principal global + instruções do projeto + arquivos do projeto lidos sob demanda**.

Conversas comuns (fora de projetos) não injetam instruções nem arquivos de projeto; as instruções e os arquivos de um projeto só valem dentro daquele projeto e não afetam outros projetos nem conversas comuns.

## Quotas e planos

O número de projetos e o armazenamento de projetos aumentam conforme o seu plano de assinatura:

| Plano | Gratuito | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Projetos | 2 | 20 | 20 | 100 | 100 |
| Armazenamento do projeto | 500MB | 20GB | 20GB | 50GB | 50GB |

Outros limites (como conversas por projeto e o limite de caracteres das instruções do projeto) também variam de acordo com o seu plano; para ver os valores mais recentes, consulte a [página de planos de assinatura](/membership/membership-pricing).

## Perguntas frequentes

### Os arquivos do projeto são lidos integralmente em cada turno de uma conversa?
Não. Os arquivos do projeto são lidos sob demanda — o modelo decide quais arquivos precisa consultar com base na sua pergunta e lê apenas esses, em vez de pré-carregar todos os arquivos a cada turno.

### Quantos arquivos um projeto pode conter?
Cada arquivo deve ter no máximo 100 MB, e você pode enviar até 50 arquivos. O armazenamento total do projeto varia conforme o seu plano; consulte a [página de planos de assinatura](/membership/membership-pricing).

### O que acontece quando excluo um projeto?
Excluir um projeto **remove permanentemente** suas conversas, arquivos e instruções, e essa ação não pode ser desfeita. Confirme antes de excluir.

### E se eu atingir o limite de número de projetos ou de armazenamento?
Exclua projetos ou arquivos de que você não precisa mais para liberar espaço, ou faça upgrade do plano para obter uma quota maior. Consulte a [página de planos de assinatura](/membership/membership-pricing) para ver os detalhes.
