---
title: "Procesamiento y seguridad de datos"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="Procesamiento y seguridad de datos - Centro de ayuda de Kimi"
  description="Preguntas frecuentes sobre la seguridad de los datos del usuario y la protección de la privacidad en la API de Kimi."
/>

# Procesamiento y seguridad de datos

<Callout type="info">
Preguntas frecuentes sobre la seguridad de los datos del usuario y la protección de la privacidad en la API de Kimi.
</Callout>

La API de Kimi se toma muy en serio la seguridad de los datos del usuario y la protección de la privacidad.
## ¿Se utilizan los datos del usuario para entrenar el modelo?

<Callout type="warning">
**No.** Los datos del usuario enviados a través de la API (incluido el contenido de entrada y la salida del modelo) **no se utilizan para entrenar ni mejorar los modelos de Kimi**. Tus datos se usan únicamente para atender la solicitud actual de la API y no se almacenan de forma persistente con fines de entrenamiento.
</Callout>

## ¿Cómo se garantiza la seguridad de los datos privados?
La API de Kimi aplica múltiples medidas para proteger tus datos privados:
| Medida | Descripción |
| --- | --- |
| **Cifrado en tránsito** | Toda la comunicación de la API usa HTTPS/TLS |
| **Aislamiento de datos** | Los datos de los distintos usuarios se mantienen estrictamente aislados |
| **No se usan para entrenamiento** | Los datos de la API no se utilizan para entrenar el modelo |
| **Control de acceso** | Autenticación con API Key para permitir solo el acceso autorizado |
| **Certificaciones de cumplimiento** | La plataforma cuenta con las certificaciones de seguridad pertinentes |

<Callout type="tip">
Si necesitas mayores requisitos de seguridad, comunícate con el equipo de ventas para conocer las soluciones de seguridad de nivel empresarial.
</Callout>

## Revisión de seguridad del contenido
La API de Kimi incluye un mecanismo integrado de revisión de seguridad del contenido:
- El sistema detecta y filtra automáticamente el contenido prohibido (actividad ilegal, violencia, material explícito, etc.)
- Cuando se activa, la API devuelve la respuesta de error correspondiente
- La revisión de contenido no almacena ni expone tus datos originales
- Si crees que la revisión se activó por error, comunícate con soporte e incluye el `request_id`
## ¿Cómo eliminar los archivos cargados?
Los archivos cargados mediante la API de archivos se pueden eliminar en cualquier momento:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

Incluye tu API Key en el encabezado de la solicitud y proporciona el ID del archivo para eliminarlo. Una vez eliminado, el archivo ya no se puede referenciar y sus datos se borrarán del servidor.

<Callout type="info">
También puedes ver y eliminar los archivos cargados en la página de gestión de archivos de la consola.
</Callout>
