---
title: "Capacidades del modelo"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="Capacidades del modelo - Centro de ayuda de Kimi"
  description="A continuación encontrarás las preguntas frecuentes sobre las capacidades de los modelos de la API de Kimi."
/>

# Capacidades del modelo

A continuación encontrarás las preguntas frecuentes sobre las capacidades de los modelos de la API de Kimi.

## ¿Es compatible con el modo JSON?

Sí. La API de Kimi ofrece el modo JSON, que restringe la salida del modelo a JSON válido. Cómo usarlo:

- Configura el parámetro `response_format` con el valor `{"type": "json_object"}` en tu solicitud.
- Además, indícale explícitamente al modelo en tu prompt que devuelva JSON y describe la estructura esperada.
- En el modo JSON, se garantiza que el modelo genere una cadena JSON analizable.

## ¿Es compatible con el ajuste fino de modelos?

La API de Kimi **actualmente no admite** el ajuste fino de modelos iniciado por el usuario. Si necesitas modelos personalizados, comunícate con el equipo de ventas a través de [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) para conocer las opciones de personalización empresarial.

## ¿Es compatible con OCR?

Los modelos de visión de la API de Kimi cuentan con capacidades de comprensión de imágenes y pueden reconocer texto dentro de ellas, logrando resultados similares al OCR:

- Admite el reconocimiento de texto en inglés, chino y muchos otros idiomas.
- Puede reconocer texto impreso y parte del texto manuscrito.
- Cada imagen se factura a una tarifa fija de 1024 tokens.
- Más allá del reconocimiento de texto simple, los modelos también pueden interpretar tablas, gráficos y otro contenido estructurado dentro de las imágenes.

## ¿Es compatible con TTS (texto a voz) y ASR (reconocimiento de voz)?

La API de Kimi **actualmente no admite** TTS ni ASR. Para capacidades relacionadas con la voz, considera combinar un servicio de voz de terceros con la API de Kimi. Mantente al tanto de los anuncios de la plataforma para conocer las futuras actualizaciones de funciones.
