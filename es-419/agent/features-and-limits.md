---
title: "Funciones y limitaciones del Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Funciones y limitaciones del Agent

<SeoMeta
  title="Funciones y limitaciones del Agent - Centro de ayuda de Kimi"
  description="Conoce las capacidades de Kimi Agent, consejos de uso, limitaciones y mejores prácticas para obtener resultados óptimos."
/>

<Callout type="info">
**Kimi Agent** es un asistente impulsado por IA que ejecuta de forma autónoma tareas complejas mediante razonamiento de múltiples pasos e integración de herramientas. Esta guía abarca las mejores prácticas, las limitaciones y las preguntas frecuentes para ayudarte a aprovechar al máximo el modo Agent.
</Callout>

## Consejos de uso

**(1) Antes de enviar una tarea**

Indica con claridad la información de contexto y las restricciones —el contexto del proyecto, el caso de uso y los requisitos especiales— para ayudar a Kimi a comprender tu intención con mayor precisión.

**(2) Durante la ejecución**

Kimi Agent se ejecuta de forma asíncrona en segundo plano. Si la página web parece congelada o detenida, **no hagas clic en «Detener»**, ya que eso interrumpirá la ejecución de la tarea. Puedes salir de la página; la tarea seguirá ejecutándose en segundo plano y recibirás una notificación cuando termine. Para tareas que se espera que tomen mucho tiempo (por ejemplo, K2.6 Agent Swarm [Beta]), ten paciencia.

**(3) Escenarios de sitios web**

Agent puede generar contenido full-stack, incluidas interfaces de frontend, servicios de backend y lógica de almacenamiento persistente. Si un proyecto no se ejecuta como se espera, el problema suele estar relacionado con el inicio del sandbox, la inicialización de la base de datos, la configuración de autenticación o acciones de publicación faltantes. El Agent estándar se ejecuta en la nube y no puede acceder directamente a archivos locales ni a sistemas de la intranet empresarial. Para acceder a archivos locales o a la intranet, usa Kimi Claw.

<Callout type="tip">
**¿Necesitas acceder a archivos locales?** Usa Kimi Claw para acceder de forma segura a archivos locales y a sistemas de la intranet empresarial. Más información en la [documentación de Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Conversaciones de varios turnos y ajustes de tareas**
A lo largo de varias rondas de diálogo y revisiones, el Agent puede «olvidar» algunos detalles iniciales. Lo mejor es establecer primero el marco de la tarea y los puntos clave, y luego hacer ajustes incrementales.

**(5) Descomposición de tareas grandes**
Para tareas grandes y complejas, divídelas en 2 o 3 fases y envíalas a Kimi por lotes, o usa K2.6 Agent Swarm [Beta].

**(6) Limitaciones de salida de archivos**
En el modo Agent estándar, normalmente solo se puede generar un archivo por tarea (por ejemplo, un documento o una hoja de cálculo). Para varios archivos (por ejemplo, un documento de Word y un PPT a la vez), usa K2.6 Agent Swarm [Beta].

**(7) Límites de contexto y equilibrio de salida**
Debido al límite de contexto de 256K caracteres de los grandes modelos de lenguaje (aproximadamente 40,000 a 50,000 caracteres chinos / ~100,000 palabras en inglés), procesar grandes volúmenes de archivos requiere equilibrar el volumen de entrada y de salida.

<Callout type="warning">
**Nota sobre el límite de contexto**: Agent utiliza una ventana de contexto de 256K caracteres. Para obtener resultados óptimos, proporciona un contexto conciso y evita sobrecargar con archivos innecesarios.
</Callout>

## Notas importantes

<Callout type="warning">
**Uso de créditos**: Las tareas de Agent consumen créditos del grupo compartido (otras funciones de membresía). Kimi Code usa un grupo de créditos independiente. Cada tarea de Agent suele consumir 1 unidad de créditos. Para obtener información detallada sobre los créditos según el nivel de membresía, consulta [Créditos y facturación](/agent/quota-and-billing).
Nivel gratuito: 6 tareas de Agent al mes
Niveles de pago: de 60 a 720 tareas de Agent al mes según tu plan
</Callout>

- **Tiempo de ejecución**: En el modo Agent, una sola tarea suele tomar de 5 a 20 minutos. Las tareas de K2.6 Agent Swarm [Beta] pueden tardar más. Puedes salir de la página, solo no hagas clic en Detener para no interrumpir la tarea.
- **Uso de créditos**: Las tareas de Agent consumen créditos del grupo compartido. Kimi Code usa un grupo de créditos independiente. 
- **Tareas simples**: Para preguntas y respuestas sencillas, se recomienda el modo de chat estándar para obtener respuestas más rápidas.

<Callout type="warning">
**Cumplimiento de contenido**: Las funciones de Agent están sujetas al [Acuerdo de Usuario de Kimi](https://www.kimi.com/user/agreement/modelUse?version=v2). No se admite la generación de contenido prohibido; el envío de contenido prohibido puede dar lugar a la suspensión del servicio.
</Callout>

## Preguntas frecuentes

**P: ¿Qué puede hacer Agent?**

Agent cubre las siguientes necesidades mediante múltiples llamadas a herramientas:
- **Generación y edición de texto**: Genera artículos, informes, documentos, etc., con compatibilidad para diversos estilos y formatos de redacción.
- **Desarrollo web**: Crea interfaces y servicios de proyectos full-stack, con soporte para diseño de interfaces de aplicaciones, integración de backend, persistencia de datos y visualización de datos.
- **Generación de diapositivas**: Herramienta de PPT basada en la web dedicada a generar presentaciones completas.
- **Asistencia de programación**: Escritura y depuración de código en múltiples lenguajes de programación.

**P: ¿Por qué no funciona el sitio web creado con Agent?**

Un proyecto completo suele constar de tres partes: la interfaz de frontend, los servicios de backend y el almacenamiento de datos. Agent puede generar contenido de proyectos full-stack en las tres capas. Si tu proyecto no se ejecuta como se espera, el problema suele estar relacionado con el inicio del sandbox, la inicialización de la base de datos, la configuración de autenticación o acciones de publicación faltantes.

**P: ¿Cuáles son los entregables de Agent?**

- Archivos completos de ejecución de la tarea
- Vista previa del proyecto implementado y versiones publicadas
- Archivo Zip descargable (ubicado en `/mnt/okcomputer/output/`)

**P: ¿Cuál es la longitud de contexto de Agent?**

Agent utiliza una longitud de contexto de **256K caracteres** (aproximadamente 40,000 a 50,000 caracteres chinos / ~100,000 palabras en inglés).

**P: ¿Cómo se calculan los créditos de Agent?**

Agent, PPT y otras funciones de membresía comparten un mismo grupo de créditos. Kimi Code usa un grupo de créditos independiente. Cada tarea de Agent suele contar como una unidad de créditos. Consulta tus créditos y uso actuales en [Créditos de membresía](https://www.kimi.com/membership-credits).
