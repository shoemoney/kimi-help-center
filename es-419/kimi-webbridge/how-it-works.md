---
title: "Cómo funciona la Extensión de navegador Kimi"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Cómo funciona la Extensión de navegador Kimi - Centro de ayuda de Kimi"
  description="Descubre cómo la Extensión de navegador Kimi conecta tu navegador con los Agentes de IA de forma local, permitiendo una navegación web segura, clics, capturas de pantalla y mucho más."
  ogType="article"
/>

# Cómo funciona la Extensión de navegador Kimi

## Flujo de trabajo

La Extensión de navegador Kimi admite dos formas de uso — **chat en la barra lateral** y **control remoto por un Agent local** — y funciona de la siguiente manera:

1. **Barra lateral del navegador**: haz clic en el ícono de Kimi en la barra de herramientas para abrir la barra lateral, luego inicia sesión con una cuenta de membresía de Kimi para chatear directamente
2. **Servicio de puente local**: un servicio local se ejecuta en tu computadora para recibir instrucciones del Agent
3. **Extensión del navegador**: ejecuta acciones específicas en el navegador con base en el Chrome DevTools Protocol
4. **Aislamiento de seguridad**: todo se ejecuta localmente; los estados de inicio de sesión y el contenido de las páginas web nunca salen de tu dispositivo

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Interfaz de la extensión

Haz clic en el ícono de la Extensión de navegador Kimi en la barra de herramientas del navegador para expandir la barra lateral y enviar una tarea.

<Frames
  src="./images/sidebar.png"
  alt="Kimi Browser Extension sidebar"
/>

## Funciones

| Función | Descripción |
|---------|-------------|
| Navegación web | Abre automáticamente las URL indicadas |
| Clic en elementos | Simula clics en botones, enlaces y otros elementos de la página |
| Llenado de formularios | Ingresa texto y selecciona opciones automáticamente |
| Capturas de pantalla | Captura la página actual o un área específica |
| Extracción de contenido | Lee texto, tablas y otros datos estructurados de la página |
| Persistencia de sesión | Usa los estados de inicio de sesión ya guardados en el navegador |

Casos de uso:

- Comparación de precios en comercio electrónico: busca productos automáticamente y compara precios en varias plataformas
- Investigación de información: navega a fondo por las páginas web y extrae información estructurada
- Llenado de formularios: completa automáticamente diversos formularios en línea
- Captura de datos: organiza e ingresa automáticamente datos de la web en un formato específico

Para conocer más casos de uso, consulta el [sitio oficial de la Extensión de navegador Kimi](https://www.kimi.com/features/webbridge).
