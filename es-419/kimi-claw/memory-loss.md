---
title: "Pérdida de memoria y contexto"
slug: "memory-loss"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Pérdida de memoria y contexto - Centro de ayuda de Kimi"
  description="OpenClaw reinicia automáticamente la conversación todos los días a las 4:00 a. m. Esto evita que los contextos demasiado largos provoquen alucinaciones o una menor calidad en las respuestas."
/>

# Pérdida de memoria y contexto

## ¿Por qué desapareció la conversación de ayer?

OpenClaw reinicia automáticamente la conversación todos los días a las **4:00 a. m.** Esto evita que los contextos demasiado largos provoquen alucinaciones o una menor calidad en las respuestas.

Si necesitas ajustar el momento del reinicio, puedes modificar la programación en `config.yaml`.

**Buena práctica:** para todo lo que sea importante —preferencias, detalles de proyectos, instrucciones recurrentes— pídele explícitamente a Kimi Claw que lo guarde: _«Recuerda esto en Memory»_. La información almacenada en Memory se conserva entre los reinicios de conversación.

## ¿Kimi Claw perdió su memoria?

El reinicio diario de las 4 a. m. borra el contexto de la conversación activa. Si algo no se guardó en **Memory**, desaparece.

**Cómo solucionarlo:**
- Durante una conversación, di _«Recuerda X en Memory»_ y Kimi Claw lo guardará en el almacenamiento de largo plazo.
- Revisa los recuerdos almacenados en **Workspace → AGENTS.md → #MEMORY**.

<Frames
  src="./images/memory-loss/claw-memory.png"
  alt="Memoria de Claw"
/>

- Usa el comando `/memory` en cualquier momento para ver y administrar los recuerdos guardados.

## ¿Cuánto tiempo se conserva la memoria tras finalizar la suscripción?

Los archivos de memoria residen en tu Workspace, y puedes verlos o descargarlos en cualquier momento.

- Una vez que vence tu membresía, la instancia en la nube **se conserva durante 7 días**.
- Si renuevas dentro de esos 7 días, todos los datos —memoria, configuración, skills— se restauran por completo.
- Pasados los 7 días, la instancia puede ser recuperada y los datos eliminados de forma permanente.
- Estamos desarrollando una función de exportación/respaldo de memoria para facilitar la migración.
