---
title: "Guía de membresía de Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Guía de membresía de Kimi Code - Centro de ayuda de Kimi"
  description="Kimi Code es un beneficio orientado a desarrolladores dentro del plan de membresía de Kimi, que ofrece capacidades de codificación con IA de alto rendimiento. Puedes usar este beneficio a través de..."
/>

# Guía de membresía de Kimi Code

<Callout type="info">
Kimi Code es un beneficio orientado a desarrolladores dentro del plan de membresía de Kimi, que ofrece capacidades de codificación con IA de alto rendimiento. Puedes usar este beneficio a través de Kimi Code CLI, Claude Code, Roo Code y otras herramientas compatibles.
</Callout>

## Ventajas clave

| Ventaja | Descripción |
|-----------|-------------|
| **Amplia compatibilidad** | Funciona con Kimi Code CLI, Claude Code, Roo Code y otros agentes de codificación populares |
| **Niveles Standard / HighSpeed** | El mismo modelo a dos velocidades: HighSpeed ofrece una velocidad de salida de aproximadamente 5–6× la de Standard y se cambia cuando lo necesites |
| **Respuestas ultrarrápidas** | Velocidades de generación de hasta 100 tokens/s, lo que aumenta considerablemente la eficiencia al programar |
| **Concurrencia de alta frecuencia** | Aproximadamente entre 300 y 1200 solicitudes por ventana de 5 horas (según tu plan), con hasta 30 transmisiones simultáneas |

## Inicio rápido

Elige el camino que mejor se ajuste a tu situación:

- **Usuarios nuevos**: Ve a [kimi.com/code](https://kimi.com/code), inicia sesión y suscríbete a un Coding Plan.
- **Suscriptores actuales**: Accede a la consola para administrar tus API Keys y comenzar a usar Kimi Code.

## Obtención de una API key

1. Inicia sesión en la [Consola de Kimi](https://kimi.com/code).
2. Ve a la página de **API Keys**.
3. Haz clic en **Crear nueva API Key**.
4. Copia y guarda de forma segura tu API Key (solo se muestra una vez al crearla).

<Callout type="warning">
No compartas tu API Key con otras personas ni la subas a repositorios de código públicos.
</Callout>

## Inicio de sesión con un clic

En Kimi Code CLI, puedes usar el comando `/login` para autorizar rápidamente sin copiar manualmente una API Key:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

El sistema completará automáticamente la autorización del dispositivo y la vinculación de la cuenta; todo el proceso toma apenas unos segundos.

## Administración de dispositivos

- Cada cuenta se puede usar en varios dispositivos.
- Las autorizaciones de dispositivos que hayan estado **inactivas durante 30 días** caducarán automáticamente; deberás ejecutar `/login` de nuevo para volver a autorizar.
- Puedes ver y administrar los dispositivos autorizados en la consola.

## Cómo cambiar de modelo

**El modelo HighSpeed ya está disponible.** Kimi Code ofrece dos niveles, **Standard** y **HighSpeed**, basados en el mismo modelo con idéntica capacidad de codificación y que comparten la misma Base URL, API Key y beneficios de membresía. HighSpeed ofrece una velocidad de salida de aproximadamente **5–6× la de Standard**, así que cuando busques respuestas instantáneas e iteración rápida, un cambio con un clic te da una experiencia de codificación más fluida. Diferencias principales:

| Elemento | Standard | HighSpeed |
| --- | --- | --- |
| ID del modelo | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| Velocidad de salida | Base | ~5–6× más rápida que Standard |
| Consumo de créditos | Base | ~3× el de Standard |
| Capacidad de codificación | Completa | Igual que Standard |
| Ideal para | Tareas de codificación cotidianas | Respuestas instantáneas, iteración rápida |
| Membresía | Disponible para todos los miembros de Kimi Code | Requiere un plan [Allegretto](https://www.kimi.com/membership/pricing) o superior |

Formas de cambiar al modelo deseado:

- **CLI oficial de Kimi Code**: escribe `/model` en una sesión para cambiar directamente entre Standard y HighSpeed, sin cambios de configuración.
- **Kimi Code para VS Code**: elige el modelo deseado en el menú desplegable de la barra de entrada; si HighSpeed aún no aparece, reinicia VS Code o reinstala la extensión.
- **Herramientas de terceros**: configura el Model ID de la herramienta con el modelo deseado; el resto de la configuración no cambia. Para saber dónde encontrarlo en cada herramienta, consulta [Uso en agentes de codificación de terceros](/kimi-code/third-party-agents).

<Callout type="info">
- **ID de modelo estables**: ambos ID son identificadores estables; el backend actualiza el modelo asociado a medida que mejora, sin cambios de configuración en el cliente.
- **Escríbelo con exactitud**: el ID de HighSpeed debe ser `kimi-for-coding-highspeed`. Si lo escribes mal o pones otro valor, la solicitud recurre en silencio al `kimi-for-coding` estándar: sin error, pero tampoco con aceleración.
- **401 sin acceso**: si tu plan no incluye acceso a HighSpeed, la llamada devuelve un `401`; mejora a Allegretto o superior.
</Callout>

<Callout type="tip">
**¿Por qué la tarea completa no se siente 5–6× más rápida?** «5–6×» se refiere a la **velocidad de salida del modelo** (la rapidez con que se genera el texto/código). El tiempo total de una tarea de codificación se compone de «salida del modelo + llamadas a herramientas (leer/escribir archivos, ejecutar comandos, búsquedas web, etc.) + ejecución de scripts»: cuánto tardan las llamadas a herramientas y la ejecución de scripts depende de tu proyecto y tus comandos, y HighSpeed no cambia esa parte. Así que si el conjunto no se siente 5–6× más rápido, suele ser porque las llamadas a herramientas/ejecución de scripts ocuparon la mayor parte de ese turno, y no porque la generación del modelo se ralentizara.
</Callout>
