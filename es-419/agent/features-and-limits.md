---
title: "Funciones y limitaciones de Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Funciones y limitaciones de Agent

<SeoMeta
  title="Funciones y limitaciones de Agent - Centro de ayuda de Kimi"
  description="Conoce las capacidades, consejos de uso, limitaciones y mejores prácticas de Kimi Agent para obtener mejores resultados."
/>

<Callout type="info">
**Kimi Agent** es un asistente con IA que ejecuta tareas complejas de forma autónoma mediante razonamiento de varios pasos e integración de herramientas. Esta guía reúne mejores prácticas, limitaciones y preguntas frecuentes para ayudarte a aprovechar al máximo el modo Agent.
</Callout>

## Consejos de uso

**(1) Antes de enviar una tarea**

Indica con claridad la información de contexto y las restricciones —contexto del proyecto, caso de uso y requisitos especiales— para que Kimi comprenda tu intención con mayor precisión.

**(2) Durante la ejecución**

Kimi Agent se ejecuta de forma asíncrona en segundo plano. Si la página web parece congelada o detenida, **no hagas clic en "Detener"**: eso interrumpirá la ejecución de la tarea. Puedes salir de la página; la tarea seguirá ejecutándose en segundo plano y recibirás una notificación cuando finalice. Para tareas que suelen tomar más tiempo (por ejemplo, Agent Swarm), ten paciencia.

**(3) Escenarios de sitios web**

Agent puede generar contenido full-stack, incluidas interfaces frontend, servicios backend y lógica de almacenamiento persistente. Si un proyecto no se ejecuta como esperas, el problema suele estar relacionado con el inicio del sandbox, la inicialización de la base de datos, la configuración de autenticación o acciones de publicación pendientes. Agent estándar se ejecuta en la nube y no puede acceder directamente a archivos locales ni a sistemas de intranet empresarial. Para acceder a archivos locales o a una intranet, usa Kimi Claw.

<Callout type="tip">
**¿Necesitas acceder a archivos locales?** Usa Kimi Claw para acceder de forma segura a archivos locales y sistemas de intranet empresarial. Obtén más información en la [documentación de Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Conversaciones de varios turnos y ajustes de tareas**
A lo largo de varias rondas de diálogo y revisiones, Agent puede "olvidar" algunos detalles iniciales. Lo mejor es definir primero el marco de la tarea y los puntos clave, y luego hacer ajustes graduales.

**(5) Descomposición de tareas grandes**
Para tareas grandes y complejas, divídelas en 2 o 3 fases y envíalas a Kimi por lotes, o usa Agent Swarm.

**(6) Limitaciones de salida de archivos**
En el modo Agent estándar, normalmente solo se puede generar un archivo por tarea (por ejemplo, un documento o una hoja de cálculo). Para varios archivos (por ejemplo, un documento de Word y una PPT), usa Agent Swarm.

**(7) Límites de contexto y equilibrio de salida**
Debido al límite de contexto de 256K caracteres de los modelos de lenguaje grandes (aproximadamente 40,000–50,000 caracteres chinos / ~100,000 palabras en inglés), procesar grandes volúmenes de archivos exige equilibrar el volumen de entrada y de salida.

<Callout type="warning">
**Nota sobre el límite de contexto**: Agent usa una ventana de contexto de 256K caracteres. Para obtener mejores resultados, proporciona contexto conciso y evita sobrecargar la tarea con archivos innecesarios.
</Callout>

## Notas importantes

<Callout type="warning">
**uso de credit**: Las tareas de Agent consumen credits del pool compartido. Kimi Code también usa este pool compartido, pero tiene su propio rate limit semanal / de 5 horas que solo aplica a Kimi Code. Cada tarea de Agent suele consumir 1 unidad de credit. Para ver información detallada sobre credits según el nivel de membresía, consulta [Credits y facturación](/agent/quota-and-billing).

- 60–720 tareas de Agent al mes, según tu plan
</Callout>

- **Tiempo de ejecución**: En el modo Agent, una tarea individual suele tardar entre 5 y 20 minutos. Las tareas de Agent Swarm pueden tardar más. Puedes salir de la página; solo evita hacer clic en Detener para no interrumpir la tarea.
- **uso de credit**: Las tareas de Agent consumen credits del pool compartido, del cual también usa Kimi Code (Kimi Code tiene su propio rate limit semanal / de 5 horas).
- **Tareas simples**: Para preguntas y respuestas simples, se recomienda usar el modo de chat estándar para obtener respuestas más rápidas.

<Callout type="warning">
**Cumplimiento de contenido**: Las funciones de Agent están sujetas al [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). No se admite la generación de contenido prohibido; enviar contenido prohibido puede derivar en la suspensión del servicio.
</Callout>

## Preguntas frecuentes

**P: ¿Qué puede hacer Agent?**

Agent cubre las siguientes necesidades mediante múltiples llamadas a herramientas:
- **Generación y edición de texto**: Genera artículos, informes, documentos, etc., con soporte para distintos estilos y formatos de escritura.
- **Desarrollo web**: Crea interfaces y servicios de proyectos full-stack, con soporte para diseño de interfaces de aplicaciones, integración backend, persistencia de datos y visualización de datos.
- **Generación de diapositivas**: Herramienta web dedicada para PPT que permite generar presentaciones completas.
- **Asistencia de programación**: Escritura de código y depuración en varios lenguajes de programación.

**P: ¿Por qué no funciona el sitio web creado por Agent?**

Un proyecto completo suele constar de tres partes: interfaz frontend, servicios backend y almacenamiento de datos. Agent puede generar contenido de proyecto full-stack en las tres capas. Si tu proyecto no se ejecuta como esperas, el problema suele estar relacionado con el inicio del sandbox, la inicialización de la base de datos, la configuración de autenticación o acciones de publicación pendientes.

**P: ¿Qué entregables produce Agent?**

- Archivos completos de ejecución de la tarea
- Vista previa del proyecto desplegado y versiones publicadas
- Archivo Zip descargable (ubicado en `/mnt/okcomputer/output/`)

**P: ¿Cuál es la longitud de contexto de Agent?**

Agent usa una longitud de contexto de **256K caracteres** (aproximadamente 40,000–50,000 caracteres chinos / ~100,000 palabras en inglés).

**P: ¿Cómo se calculan los credits de Agent?**

Todas las funciones de membresía, incluido Kimi Code, comparten un mismo pool de credit. Cada tarea de Agent suele contar como una unidad de credit.
