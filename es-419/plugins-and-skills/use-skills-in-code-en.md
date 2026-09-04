---
title: "Uso de Skills en Kimi Code"
slug: "use-skills-in-code"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Uso de Skills en Kimi Code - Centro de ayuda de Kimi"
  description="Aprende a crear e invocar Skills en el CLI de Kimi Code para estandarizar las convenciones de programación de tu equipo y automatizar los flujos de trabajo de desarrollo."
  ogType="article"
/>

# Uso de Skills en Kimi Code

Kimi Code es un asistente de programación con IA diseñado especialmente para desarrolladores, que se ejecuta directamente en la terminal o el editor para ayudarte a escribir código, corregir errores y generar documentación. Kimi Code permite ofrecer orientación basada en conocimiento mediante archivos `SKILL.md`. Tras leerlos, la IA sigue los estándares definidos en ellos. Es ideal para definir estilos de código, flujos de trabajo y mejores prácticas.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Invocar skills con un comando de barra"
/>

## Invocar Skills

El CLI de Kimi Code te permite invocar Skills usando comandos de barra:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Por ejemplo, al escribir `/skill:git-commits`, Kimi Code leerá el contenido del `SKILL.md` correspondiente y lo enviará como instrucción al Agent.

También puedes agregar descripciones adicionales después del comando de barra, que se añadirán al final de la instrucción del Skill:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

En las conversaciones normales no es necesario invocarlos manualmente: el Agent determinará automáticamente, según el contexto, si debe leer el contenido del Skill.

## Crea tu primer Skill

Crear un Skill requiere solo dos pasos: crea un subdirectorio dentro del directorio de Skills y luego crea un archivo `SKILL.md` en su interior.

Ubicación de almacenamiento recomendada (funciona para todos los proyectos):

<CodePreview
  files={[
    {
      name: "Estructura de directorios",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` usa YAML Frontmatter para definir los metadatos, seguido de Markdown para las especificaciones principales:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Tanto `name` como `description` en el Frontmatter son campos opcionales. Si se omiten, se usa el nombre del directorio como valor predeterminado.

### Ejemplo

Tu equipo exige que los mensajes de commit sigan el formato Conventional Commits, pero explicarlo una y otra vez resulta tedioso. Al escribirlo como un Skill, en el futuro solo necesitarás un comando para invocarlo.

**Paso 1: Crear el archivo del Skill**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**Paso 2: Tras completar los cambios en el código, invoca el Skill**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code leerá tus estándares, los combinará con la descripción de la tarea y generará directamente un mensaje de commit con el formato correcto, sin que tengas que repetir ningún requisito de formato.

## Flow Skills: definir flujos de trabajo de varios pasos

Mientras que los Skills normales proporcionan estándares estáticos, los **Flow Skills** pueden definir procesos automatizados de varios pasos.

Establece `type: flow` en el Frontmatter e incrusta un diagrama de flujo en formato Mermaid o D2 para crear un Flow Skill.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Ejecútalo con el comando `/flow:<name>`. El Agent comenzará desde el nodo `BEGIN` y completará automáticamente cada paso en secuencia hasta llegar a `END`.

## Mecanismo de carga de Skills

El CLI de Kimi Code busca y carga los Skills según la siguiente prioridad (gana el primero que coincida):

1. **Skills integrados**: instalados junto con el paquete de software, proporcionan capacidades básicas.
2. **Skills de nivel de usuario**: almacenados en el directorio personal, aplicables a todos los proyectos.
3. **Skills de nivel de proyecto**: almacenados en el directorio del proyecto, aplicables únicamente a ese proyecto.

También puedes especificar manualmente directorios de Skills adicionales con el parámetro `--skills-dir`:

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
El CLI de Kimi Code incluye dos Skills integrados muy útiles: `kimi-cli-help` (responde preguntas sobre el uso del CLI) y `skill-creator` (te guía en la creación de nuevos Skills). Escribe `/skill:skill-creator` para comenzar.
</Callout>

Para conocer todas las opciones de configuración y las explicaciones de los parámetros, consulta la [documentación de Skills del CLI de Kimi Code](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).
