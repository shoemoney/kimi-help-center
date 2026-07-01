---
title: "Interacción y entrada"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Interacción & entrada - Centro de ayuda de Kimi"
  description="Kimi Code CLI ofrece múltiples métodos de interacción para ayudarte a colaborar con la IA de forma eficiente."
/>

# Interacción y entrada

Kimi Code CLI ofrece múltiples métodos de interacción para ayudarte a colaborar con la IA de forma eficiente.

## Thinking mode

Thinking Mode permite que la IA razone con mayor profundidad antes de responder, ideal para problemas complejos.

- Usa el comando `/model` para cambiar de modelo y activar o desactivar Thinking Mode.
- También puedes activar Thinking Mode al iniciar con la opción `--thinking`.

## Entrada de varias líneas

Presiona **Ctrl-J** para insertar un salto de línea y escribir en varias líneas. Esto resulta útil para indicaciones más largas o para pegar fragmentos de código de varias líneas.

## Pegar desde el portapapeles

Presiona **Ctrl-V** para pegar contenido desde el portapapeles; admite tanto texto como imágenes. Al pegar imágenes, la IA puede interpretar directamente su contenido (por ejemplo, capturas de pantalla, maquetas de diseño o capturas de errores).

## Comandos de barra

Los comandos que empiezan con `/` se usan para controlar sesiones, configuración y depuración. Algunos comandos comunes son:

| Comando | Descripción |
| --- | --- |
| `/help` | Muestra información de ayuda |
| `/login` | Inicia sesión y autoriza |
| `/model` | Cambia de modelo y activa Thinking Mode |
| `/sessions` | Lista y cambia entre sesiones |
| `/clear` | Borra el contexto actual |
| `/compact` | Comprime el contexto |
| `/init` | Genera AGENTS.md |
| `/exit` | Sale de la CLI |

Al escribir `/` en el campo de entrada se mostrará automáticamente una lista de comandos disponibles.

## Autocompletado de rutas con @

Usa el símbolo `@` en tu entrada para referenciar rutas de archivos o directorios; el sistema completará automáticamente:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Check @src/utils/auth.ts for any security vulnerabilities",
    },
  ]}
/>

La IA leerá automáticamente el contenido del archivo referenciado como contexto.

## Preguntas y respuestas estructuradas

En ciertos escenarios, la IA presentará opciones estructuradas para tu entrada. Usa las **teclas de flecha** para seleccionar una opción y presiona **Enter** para confirmar.

## Confirmación de aprobación

Cuando la IA necesite modificar archivos, ejecutar comandos de shell u otras operaciones, te pedirá confirmación. Puedes elegir:

| Opción | Descripción |
| --- | --- |
| **Allow** | Permite esta operación |
| **Allow for Session** | Permite operaciones similares durante el resto de la sesión actual sin más avisos |
| **Deny** | Rechaza esta operación |

### Modo YOLO

Si confías en las operaciones de la IA, puedes usar el modo YOLO para omitir todas las confirmaciones:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> En el modo YOLO, la IA ejecutará automáticamente todas las operaciones; úsalo con precaución. Se recomienda solo en entornos de desarrollo controlados.
