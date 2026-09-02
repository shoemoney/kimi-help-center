---
title: "Preguntas frecuentes"
slug: "kimi-work-faq"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Preguntas frecuentes de Kimi Work - Centro de ayuda de Kimi"
  description="Preguntas frecuentes de Kimi Work: en qué se diferencia de la versión web, cómo controla los permisos al acceder a archivos locales, qué puede hacer la automatización del navegador con WebBridge y cómo se ejecutan las tareas programadas."
/>

# Preguntas frecuentes sobre Kimi Work

## ¿Cuál es la diferencia entre Kimi Work y la versión web?

La app web de Kimi es perfecta para chats y consultas rápidas; Kimi Work, en cambio, es un agente local diseñado para flujos de trabajo más profundos. Puede leer y gestionar tus carpetas locales, navegar la web de forma autónoma mediante WebBridge, ejecutar código Python en segundo plano y llevar a cabo tareas programadas. Es un empleado digital integrado al nivel del sistema.

## ¿Cómo protege Kimi Work mi privacidad al acceder a archivos locales?

Tú tienes control absoluto sobre tus archivos. Kimi Work ofrece control de permisos de tres niveles y tú eliges cómo autorizar:

- **Predeterminado**: las operaciones rutinarias se ejecutan automáticamente — Kimi te pedirá autorización explícita antes de operaciones sensibles como modificar, sobrescribir o ejecutar código dentro de tus archivos locales;
- **Permitir manualmente**: pedir autorización antes de actuar;
- **Permitir todo**: ejecutar directamente sin pedir autorización.

Cuando eliges "Permitir manualmente", no ocurre nada sin tu consentimiento.

<Callout type="exclamation">
Con el permiso "Permitir todo" (totalmente automático) activado, la IA leerá y escribirá archivos directamente, ejecutará código y modificará la configuración del sistema, y procesará automáticamente los pasos que de otro modo requerirían tu decisión. Esto puede provocar:

- Archivos sobrescritos, eliminados por error o dañados;
- Cambios en la configuración del sistema que causen fallos en el software;
- Cambios en el cifrado de disco, las particiones o el firmware que dejen el dispositivo restringido o incapaz de arrancar.

Algunas operaciones son irreversibles y los datos pueden perderse permanentemente sin posibilidad de recuperación. Conoce los riesgos de este modo, úsalo con precaución y haz copias de seguridad de tus datos.

Al activar el permiso "Permitir todo" (totalmente automático), se considera que conoces y aceptas los riesgos anteriores y que autorizas a la IA a ejecutar las operaciones relacionadas de forma autónoma; los resultados de las operaciones realizadas en base a tu autorización correrán a tu cargo.
</Callout>

## ¿Qué puede hacer exactamente WebBridge (automatización del navegador) por mí?

WebBridge le permite a Kimi usar un navegador como lo haría una persona. Puedes pedirle que revise las noticias más recientes de un sitio web y las resuma, o que extraiga datos bursátiles históricos y los guarde en tu Excel local. Hace clic, se desplaza por la página y extrae datos de forma autónoma, ahorrándote horas de trabajo manual.

## ¿Qué puedo hacer con las tareas programadas? ¿Se ejecutan si mi computadora está en suspensión?

Las tareas programadas permiten que Kimi ejecute automáticamente una tarea específica en un horario definido —diario, semanal, mensual o de una sola vez (sin repetir)—, ideal para resúmenes diarios, monitoreos semanales y limpiezas periódicas.

En la versión de escritorio de Kimi Work, las tareas programadas se ejecutan **localmente** y solo se llevan a cabo mientras la **app está abierta**. Las ejecuciones que se pierdan porque tu computadora esté en suspensión o apagada, o porque la app esté cerrada, **no se ejecutarán retroactivamente** la próxima vez que se abra. Por eso, si necesitas que una tarea se ejecute durante la noche, mantén encendidas tu computadora y la app Kimi Work. (En cambio, las tareas creadas en Kimi se ejecutan en la nube y no requieren que el cliente permanezca abierto.)

Consulta [Tareas programadas](/features/scheduled-tasks) para más detalles.
