---
title: "Cómo funciona Kimi WebBridge"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Cómo funciona Kimi WebBridge - Centro de Ayuda de Kimi"
  description="Descubre cómo Kimi WebBridge conecta tu navegador con los Agentes de IA de forma local, permitiendo una navegación web segura, clics, capturas de pantalla y mucho más."
  ogType="article"
/>

# Cómo funciona Kimi WebBridge

## Flujo de trabajo

Kimi WebBridge funciona de la siguiente manera:

1. **Servicio de puente local**: un servicio local se ejecuta en tu computadora para recibir instrucciones del Agent
2. **Extensión del navegador**: ejecuta acciones específicas en el navegador con base en el Chrome DevTools Protocol
3. **Aislamiento de seguridad**: todo se ejecuta localmente; los estados de inicio de sesión y el contenido de las páginas web nunca salen de tu dispositivo

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Interfaz de la extensión

Haz clic en el ícono de WebBridge en la barra de herramientas del navegador para revisar el estado actual de la conexión:

**Conectado**: WebBridge funciona correctamente y puede colaborar con el Agent.

**Desconectado**: revisa tu configuración o vuelve a ejecutar el comando de conexión.

<Frames
  src="./images/connection.png"
  alt="WebBridge Connection"
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

Para conocer más casos de uso, consulta el [sitio oficial de Kimi WebBridge](https://www.kimi.com/features/webbridge).
