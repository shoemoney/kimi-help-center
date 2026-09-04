---
title: "Usando Skills no Kimi Code"
slug: "use-skills-in-code"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Usando Skills no Kimi Code - Central de Ajuda Kimi"
  description="Aprenda a criar e invocar Skills no Kimi Code CLI para padronizar as convenções de codificação da equipe e automatizar fluxos de trabalho de desenvolvimento."
  ogType="article"
/>

# Usando Skills no Kimi Code

O Kimi Code é um assistente de programação com IA criado especialmente para desenvolvedores, que roda diretamente no terminal ou no editor para ajudar a escrever código, corrigir bugs e gerar documentação. O Kimi Code permite fornecer orientações baseadas em conhecimento por meio de arquivos `SKILL.md`. Depois de lê-los, a IA segue os padrões definidos neles. Ideal para definir estilos de código, fluxos de trabalho e boas práticas.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Invocar skills usando comando de barra"
/>

## Invocando Skills

O Kimi Code CLI permite invocar Skills usando comandos de barra:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Por exemplo, ao digitar `/skill:git-commits`, o Kimi Code lerá o conteúdo correspondente do `SKILL.md` e o enviará como instrução para o Agent.

Você também pode acrescentar descrições adicionais após o comando de barra, que serão incluídas ao final da instrução da Skill:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

Em conversas comuns, a invocação manual não é necessária — o Agent decide automaticamente, com base no contexto, se deve ler o conteúdo da Skill.

## Criando sua primeira Skill

Criar uma Skill exige apenas dois passos: criar um subdiretório no diretório de Skills e, em seguida, criar um arquivo `SKILL.md` dentro dele.

Local de armazenamento recomendado (funciona para todos os projetos):

<CodePreview
  files={[
    {
      name: "Estrutura de diretórios",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

O `SKILL.md` usa YAML Frontmatter para definir os metadados, seguido de Markdown para as especificações principais:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Tanto `name` quanto `description` no Frontmatter são campos opcionais. Se omitidos, o nome do diretório é usado como padrão.

### Exemplo

Sua equipe exige que as mensagens de commit sigam o formato Conventional Commits, mas ter que explicar isso repetidamente é cansativo. Ao escrever isso como uma Skill, basta um único comando para invocá-la no futuro.

**Passo 1: Criar o arquivo da Skill**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**Passo 2: Depois de concluir as alterações no código, invoque a Skill**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

O Kimi Code lerá seus padrões, combinará com a descrição da tarefa e gerará diretamente uma mensagem de commit corretamente formatada, sem que você precise repetir nenhuma exigência de formato.

## Flow Skills: definindo fluxos de trabalho com múltiplas etapas

Enquanto as Skills comuns fornecem padrões estáticos, as **Flow Skills** podem definir processos automatizados com múltiplas etapas.

Defina `type: flow` no Frontmatter e incorpore um fluxograma no formato Mermaid ou D2 para criar uma Flow Skill.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Execute usando o comando `/flow:<name>`. O Agent começará pelo nó `BEGIN` e concluirá automaticamente cada etapa em sequência até chegar ao `END`.

## Mecanismo de carregamento de Skills

O Kimi Code CLI busca e carrega Skills com base na seguinte prioridade (a primeira correspondência prevalece):

1. **Skills integradas**: instaladas junto com o pacote do software, fornecendo capacidades básicas.
2. **Skills no nível do usuário**: armazenadas no diretório home, aplicáveis a todos os projetos.
3. **Skills no nível do projeto**: armazenadas no diretório do projeto, aplicáveis apenas a esse projeto.

Você também pode especificar manualmente diretórios adicionais de Skills usando o parâmetro `--skills-dir`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
O Kimi Code CLI inclui duas Skills integradas úteis: `kimi-cli-help` (responde a dúvidas sobre o uso da CLI) e `skill-creator` (orienta você na criação de novas Skills). Digite `/skill:skill-creator` para começar.
</Callout>

Para as opções de configuração completas e explicações dos parâmetros, consulte a [Documentação de Skills do Kimi Code CLI](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).
