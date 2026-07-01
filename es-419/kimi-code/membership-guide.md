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
