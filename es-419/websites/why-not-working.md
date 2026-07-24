---
title: "Capacidades full-stack de Kimi Websites"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
preview_content: "Capacidades full-stack de Kimi Websites y sus limitaciones actuales."
---

<SeoMeta
  title="¿Por qué no funciona el sitio web generado por Kimi? - Centro de ayuda de Kimi"
  description="Conoce los límites y las capacidades actuales de Kimi Websites. Entre los escenarios no compatibles se incluyen pagos de terceros, OAuth e integraciones complejas con API."
/>

# Capacidades full-stack de Kimi Websites

## Actualización para crear sitios web full-stack

Un sitio web completo suele componerse de tres partes: **interfaz front-end, servicios back-end y almacenamiento de datos**. Kimi Websites se actualizó con capacidades de creación de sitios web full-stack, lo que permite generar y desplegar sitios de extremo a extremo, desde las páginas front-end hasta las bases de datos back-end.

| Capacidad         | Descripción                                                           |
|--------------|----------------------------------------------------------------|
| Generación front-end     | Estructura de páginas HTML/CSS/JavaScript, estilos y lógica de interacción                    |
| Base de datos back-end   | Crea automáticamente una base de datos back-end, con soporte para lectura/escritura persistente de datos y administración visual               |
| Inicio de sesión de usuarios     | Admite inicio de sesión con cuenta de Kimi y también puede crear un sistema de inicio de sesión con cuenta y contraseña mediante la base de datos           |
| Gestión de versiones     | La IA guarda versiones automáticamente y permite volver a cualquier versión histórica                      |
| Vista previa full-stack     | Admite vista previa completa de front-end y back-end; en algunos escenarios es necesario iniciar manualmente el entorno sandbox                   |
| Publicación y despliegue   | Haz clic manualmente en "Publicar" para desplegar el sitio en Internet pública. Antes de publicarlo, el sitio solo está disponible en vista previa. Se admite el despliegue de contenido full-stack  |

## Entregables del agente

- Archivos completos de ejecución de la tarea, incluido el código front-end y back-end
- Un sitio web full-stack que se puede previsualizar en línea y publicar
- Un paquete Zip descargable ubicado en el directorio `/mnt/agents/output/app/`

## Casos de uso

| Escenario             | Prompt de ejemplo                                                       |
|------------------|------------------------------------------------------------------|
| Crear una landing page desde cero   | Crea una landing page de marketing para un producto SaaS con un estilo inspirado en la tecnología, que incluya una sección hero, presentación de funcionalidades, precios y llamada a la acción |
| Recrear a partir de una captura de pantalla         | [Sube una captura de pantalla del diseño] Convierte este diseño en código de página web ejecutable               |
| Portafolio personal       | Crea un sitio web de portafolio personal para un fotógrafo, con un estilo minimalista en blanco y negro y soporte para un diseño de imágenes tipo masonry        |
| Página de visualización de datos     | Crea una página web de visualización de datos que muestre información de financiamiento de empresas de IA en 2025, con gráficos y filtros |
| Sitio web de marca         | Crea el sitio web oficial de una marca de café, usando una paleta de colores Morandi, con página de inicio, páginas de productos y páginas de tiendas      |
| App protegida con inicio de sesión     | Crea un sitio web interno de base de conocimientos para un equipo, donde el contenido solo pueda verse después de iniciar sesión                   |
| Administración de gestión de datos     | Crea un sistema de registro para eventos donde los usuarios puedan enviar información que se guarda en una base de datos, y los administradores puedan ver la lista de registros |
| Herramienta/calculadora    | Crea una página web de calculadora de IMC con una interfaz limpia, cambio de unidades y consejos por categoría de salud     |

## Limitaciones actuales

Los siguientes escenarios aún no son compatibles y se habilitarán gradualmente en versiones futuras:

- Integración de pagos de terceros, como Stripe y PayPal
- Inicio de sesión con OAuth de terceros, como Google y GitHub. Actualmente, solo se admite el inicio de sesión con cuenta de Kimi o con nombre de usuario y contraseña basados en base de datos
- Integraciones complejas de API del lado del servidor, como conectarse a servicios SaaS externos
