---
title: "Uso de habilidades en el modo Agent"
slug: "use-skills-in-agent"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Uso de habilidades en el modo Agent - Centro de ayuda de Kimi"
  description="Aprende a invocar habilidades, crear habilidades personalizadas, descubrir habilidades recomendadas y ampliar las capacidades de Kimi en el modo Agent."
  ogType="article"
/>

# Uso de habilidades en el modo Agent

## ¿Cómo invocar habilidades?

En el cuadro de entrada del modo Agent de Kimi, hay tres formas de invocar habilidades:

**Método 1: usar el comando `/`**

Escribe `/` en el cuadro de entrada para mostrar la lista de habilidades. Haz clic en el nombre de una habilidad para insertarla. También puedes escribir palabras clave después del `/` para filtrar la lista.

**Método 2: usar el menú «➕»**

Haz clic en el botón **➕** junto al cuadro de entrada. Selecciona una habilidad del menú y su nombre se insertará como texto en el cuadro de entrada.

<Frames
  src="./images/skills/加号-en.png"
  alt="Invoke skills using plus menu"
/>

**Método 3: deja que Kimi decida**

Solo describe lo que necesitas. Kimi identificará y activará automáticamente la habilidad más adecuada según el contenido de tu tarea.

### Ejemplo: usar habilidades para generar un informe de análisis SEO

Supongamos que eres un gestor de contenido que quiere analizar el rendimiento SEO de su sitio web:

1. Escribe `/` en el cuadro de entrada, busca y selecciona la habilidad `seo-analyzer`.
2. Continúa escribiendo: `Por favor, analiza el rendimiento SEO de https://help.com/zh-cn/help, enumera los principales problemas y sugerencias de optimización.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="SEO analysis"
/>

3. Tras enviarlo, Kimi buscará, organizará y generará automáticamente un informe estructurado siguiendo el flujo de trabajo de análisis SEO.

No necesitas explicarle a Kimi cómo hacer el análisis: el flujo de trabajo ya está definido en la habilidad.

## Descubrir y administrar habilidades

### Recomendaciones de Kimi

Kimi ofrece un conjunto de habilidades recomendadas listas para usar que puedes agregar con un solo clic:

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Recommended skills"
/>

## Personalizar habilidades

Si las habilidades recomendadas por Kimi no se ajustan a lo que necesitas, puedes crear habilidades personalizadas adaptadas a tu flujo de trabajo específico.

**¿Cuándo conviene crear una habilidad personalizada?**

- Tienes una tarea recurrente que debe ejecutarse de forma repetida (por ejemplo, informes semanales de la competencia).
- Quieres que Kimi genere contenido con el formato específico de tu empresa.
- Tienes una serie de métodos de trabajo que quieres que Kimi siga directamente.

Una buena habilidad debe hacer una sola cosa y hacerla bien. No intentes meter todos los requisitos en una sola habilidad.

### Opción 1: de documento a habilidad

Si ya tienes plantillas listas, documentos estándar o archivos de ejemplo, puedes subirlos directamente y dejar que Kimi los aprenda y genere la habilidad correspondiente.

1. Selecciona **De documento de Office a habilidad** en el panel de **Habilidades**.
2. Haz clic o arrastra archivos al área de carga. Formatos admitidos: `docx`, `xlsx`, `pdf`, `pptx` y capturas de pantalla de documentos. Máximo 3 archivos por carga, cada uno de no más de 100 MB.

<Frames
  src="./images/skills/document.png"
  alt="Upload documents to generate skills"
/>

3. Completa la descripción de la habilidad e indícale a Kimi qué debe hacer. Por ejemplo: «Ayúdame a organizar los datos de ventas semanales siguiendo el estilo y el formato de esta plantilla».
4. Haz clic en **Crear habilidad**.

### Opción 2: crear con Kimi

Si no tienes documentos listos, puedes describir lo que necesitas directamente a través del diálogo y Kimi te guiará paso a paso para completar la creación de la habilidad.

Escribe `/skill-creator` en el cuadro de entrada y luego describe qué habilidad quieres crear. Kimi te ayudará a organizar los requisitos en una habilidad completa.

<Frames
  src="./images/skills/create-skill-en.png"
  alt="Create Skills through dialogue"
/>

### Administrar habilidades existentes

En el panel de **Habilidades**, cambia a la pestaña **Habilidades personalizadas** para editar, actualizar documentos o eliminar las habilidades que hayas creado.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Manage custom Skills"
/>

<Callout type="info">
Las habilidades son compatibles con el modo Agent y con Kimi Claw. Las habilidades con el sufijo `swarm` solo están disponibles en escenarios de Swarm (clúster de Agent) y no se muestran en otros contextos.
</Callout>

## Cómo redactar descripciones de habilidades efectivas

Kimi se basa en las descripciones de las habilidades para determinar «cuándo usar esta habilidad». Cuanto más clara sea tu descripción, con mayor precisión se activará la habilidad.

Una descripción completa de una habilidad debe incluir:
- La función principal de la habilidad.
- Los escenarios para los que resulta adecuada.
- Las palabras desencadenantes a las que responde.
- El reconocimiento de menciones indirectas de la necesidad.

<ComparisonBlock
  wrong={"Ayuda a los usuarios a buscar y descubrir habilidades."}
  correct={"Ayuda a los usuarios a buscar y descubrir habilidades. Se usa cuando los usuarios quieren explícitamente encontrar un cierto tipo de habilidad o describen un problema y esperan recibir recomendaciones de habilidades. Las palabras desencadenantes incluyen “Buscar habilidades”, “Encontrar habilidades”, “¿Hay alguna habilidad que pueda hacer X?”, etc."}
/>
