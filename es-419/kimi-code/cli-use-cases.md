---
title: "Casos de uso comunes"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso comunes - Centro de ayuda de Kimi"
  description="Aquí tienes algunos escenarios típicos para usar Kimi Code CLI en el desarrollo diario, cada uno con prompts de ejemplo como referencia."
/>

# Casos de uso comunes

Aquí tienes algunos escenarios típicos para usar Kimi Code CLI en el desarrollo diario, cada uno con prompts de ejemplo como referencia.

## Implementar nuevas funciones

Describe lo que necesitas en lenguaje natural: la IA leerá automáticamente el código relevante, escribirá código nuevo y verificará los resultados.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Agrega una función de ordenar por fecha de registro a la página de la lista de usuarios; se necesitan cambios tanto en el frontend como en el backend",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Implementa un middleware limitador de solicitudes usando el algoritmo de token bucket, limitando cada IP a 60 solicitudes por minuto",
    },
  ]}
/>

## Corregir errores

Pega el mensaje de error directamente en la IA: localizará automáticamente la causa raíz y propondrá una solución.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Después de ejecutar npm test obtuve este error, por favor corrígelo:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "El pipeline de CI falló en la etapa de lint. Aquí está el log: ... Por favor corrígelo",
    },
  ]}
/>

## Comprender un proyecto

Cuando te integras a un nuevo proyecto o necesitas entender una parte específica del código, solo pregunta.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "¿Cuál es la arquitectura general de este proyecto? ¿Cuáles son los módulos principales?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "¿Qué hace src/auth/middleware.ts? ¿Cómo funciona el flujo de autenticación?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Explica cómo se gestionan las migraciones de base de datos en este proyecto",
    },
  ]}
/>

## Automatizar tareas pequeñas

Ideal para modificaciones de código por lotes, agregar documentación, generar pruebas y otros trabajos repetitivos.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Agrega comentarios JSDoc a todas las funciones exportadas en el directorio src/utils/",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Genera pruebas unitarias para todos los métodos públicos de la clase UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Reemplaza todas las declaraciones var del proyecto por const o let",
    },
  ]}
/>

## Tareas generales

Kimi Code CLI no se limita a programar: también puede encargarse de investigación, análisis de datos, operaciones masivas con archivos y mucho más.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Investiga las bibliotecas ORM de Node.js predominantes actualmente y compara sus ventajas y desventajas",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analiza los logs de acceso de los últimos 7 días en el directorio logs/ y lista las 10 rutas de solicitud más frecuentes",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Combina todos los archivos CSV del directorio data/ en uno solo y elimina las filas duplicadas",
    },
  ]}
/>
