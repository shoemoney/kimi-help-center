---
title: "Proyectos"
slug: "project"
order: 4
extract_headings: true
preview: true
preview_content: "Un proyecto es un espacio de trabajo persistente que reúne los archivos de referencia, los chats y las instrucciones de una tarea de largo plazo, para que no tengas que volver a explicar el contexto en cada chat nuevo."
---

<SeoMeta
  title="¿Qué es un proyecto de Kimi? Cómo crearlo y usarlo - Centro de ayuda de Kimi"
  description="Conoce los proyectos de Kimi: un espacio de trabajo persistente que agrupa archivos de referencia, chats e instrucciones del proyecto, ideal para escribir una serie de documentos, realizar investigaciones continuas o mantener una base de código. Incluye cómo crear y administrar proyectos, instrucciones del proyecto, archivos del proyecto y quotas del plan."
/>

# Proyectos

Un proyecto es un espacio de trabajo persistente. Puedes reunir en un solo proyecto los archivos de referencia, los chats y las instrucciones de una tarea de largo plazo; cada chat que inicies dentro de ese proyecto incluye automáticamente este contexto, así que no tendrás que volver a cargar los mismos archivos ni explicar otra vez los antecedentes del proyecto.

**Cuándo usar un proyecto**: crea un proyecto cuando el trabajo vaya a continuar en el tiempo, genere más de un resultado o dependa del mismo conjunto de archivos; por ejemplo, para escribir una serie de documentos, realizar una investigación continua o mantener una base de código. Si la tarea es independiente y no necesita contexto compartido, usa un chat normal.

<Callout type="info">
La app de escritorio Kimi Work también tiene "Proyectos", pero son distintos de los proyectos de Kimi (Chat) descritos aquí: no están conectados ni comparten datos.
</Callout>

## Crear y administrar proyectos

**Puntos de entrada**:
- el botón "+" a la derecha de la sección "Proyectos" en la barra lateral;
- la opción "+ Nuevo proyecto" en la parte superior del selector de proyectos de la página de inicio.

**Crear**: ingresa un nombre de proyecto (obligatorio, de 1 a 50 caracteres) y, opcionalmente, instrucciones del proyecto; haz clic en "Crear" para abrir la página de inicio del proyecto.

**Editar / Eliminar**:
- pasa el cursor sobre el nombre de un proyecto en la barra lateral, o haz clic derecho sobre él, para "Editar título" o "Fijar";
- para eliminar un proyecto, se requiere confirmación. **Una vez eliminado, los chats, archivos e instrucciones del proyecto se borran de forma permanente y no se pueden recuperar**. Continúa con cuidado.

**Barra lateral**: la sección "Proyectos" aparece debajo de la entrada de Kimi Claw y encima del historial de chats; muestra tus proyectos ordenados por fecha de creación, del más reciente al más antiguo. Expande un proyecto para ver sus chats.

## Página de inicio del proyecto

La página de inicio del proyecto usa un diseño de tres columnas:
- **Izquierda**: la barra lateral estándar;
- **Centro**: un área para iniciar chats y la lista de chats del proyecto. El cuadro de entrada dice "Inicia un chat en 'project name'…"; al enviar un mensaje aquí, se crea un chat que pertenece automáticamente al proyecto actual;
- **Panel derecho**: dos bloques: Instrucciones y Archivos (plegables).

## Qué puedes hacer en un chat de proyecto

Los chats de un proyecto tienen las mismas capacidades que los chats normales de Kimi, con el contexto del proyecto incluido automáticamente. Puedes:
- usar **archivos del proyecto** (leídos por el modelo según se necesiten) e **instrucciones del proyecto**;
- usar **plugins, Skills y Objetivo**;
- **elegir el modelo**.

Inicia un chat separado para cada resultado distinto, así sus mensajes y resultados se mantienen enfocados; el proyecto conserva estos chats relacionados en un solo lugar.

## Instrucciones del proyecto

- Las instrucciones del proyecto son instrucciones personalizadas específicas del proyecto (texto sin formato) que Kimi sigue en todos los chats dentro de él;
- Por ejemplo: "Eres un gerente de producto senior. Responde en chino y entrega el resultado en Markdown.";
- Entran en vigor a partir de tu siguiente mensaje o de un chat nuevo después de guardarlas.

## Archivos del proyecto

- Sube archivos de referencia a un proyecto para que todos sus chats puedan usarlos;
- Los formatos compatibles coinciden con las cargas de Kimi Agent: PDF, DOCX, XLSX, CSV, TXT, MD, archivos de código comunes y formatos de imagen comunes;
- **Cada archivo debe pesar 100 MB como máximo, y puedes cargar hasta 50 archivos**;
- Los archivos del proyecto se **leen por el modelo según se necesiten**: en lugar de precargar el texto completo de todos los archivos en cada turno, el modelo decide qué archivos necesita según tu pregunta;
- El bloque Archivos muestra una barra de capacidad en la parte inferior; cuando esté cerca del límite o lo alcance, se te pedirá eliminar archivos o mejorar tu plan.

## Cómo funciona el contexto en un proyecto

Cuando inicias un chat en un proyecto, el contexto inyectado en el modelo incluye: **prompt del sistema + memoria principal global + instrucciones del proyecto + archivos del proyecto leídos según se necesiten**.

Los chats normales (fuera de un proyecto) no inyectan instrucciones ni archivos del proyecto; las instrucciones y los archivos de un proyecto solo tienen efecto dentro de ese proyecto y no afectan a otros proyectos ni a los chats normales.

## Quotas y planes

La cantidad de proyectos y el almacenamiento de proyectos aumentan según tu plan de membresía:

| Plan | Gratis | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Proyectos | 2 | 20 | 20 | 100 | 100 |
| Almacenamiento del proyecto | 500MB | 20GB | 20GB | 50GB | 50GB |

Otros límites (como los chats por proyecto y el límite de caracteres para las instrucciones del proyecto) también varían según tu plan; para ver las cifras más recientes, consulta la [página de planes de membresía](/membership/membership-pricing).

## FAQ

### ¿Los archivos del proyecto se leen por completo en cada turno de un chat?
No. Los archivos del proyecto se leen según se necesiten: el modelo decide qué archivos necesita según tu pregunta y lee solo esos, en lugar de precargar todos los archivos en cada turno.

### ¿Cuántos archivos puede contener un proyecto?
Cada archivo debe pesar 100 MB como máximo, y puedes cargar hasta 50 archivos. El almacenamiento total del proyecto varía según tu plan; consulta la [página de planes de membresía](/membership/membership-pricing).

### ¿Qué sucede cuando elimino un proyecto?
Eliminar un proyecto **borra de forma permanente** sus chats, archivos e instrucciones, y esta acción no se puede deshacer. Confirma antes de eliminarlo.

### ¿Qué hago si alcanzo el límite de cantidad de proyectos o de almacenamiento?
Elimina proyectos o archivos que ya no necesites para liberar espacio, o mejora tu plan para obtener una quota más alta. Consulta la [página de planes de membresía](/membership/membership-pricing) para obtener más detalles.
