---
title: "Personalización y referencia"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Personalización & referencia - Centro de ayuda de Kimi"
  description="Kimi Code CLI ofrece amplias opciones de personalización que te permiten adaptar el comportamiento y el flujo de trabajo de la IA a tus necesidades."
/>

# Personalización y referencia

Kimi Code CLI ofrece amplias opciones de personalización que te permiten adaptar el comportamiento y el flujo de trabajo de la IA a tus necesidades.

## Archivo de configuración

Kimi Code CLI utiliza `~/.kimi/config.toml` como su archivo de configuración global, compatible con los formatos TOML y JSON. Puedes configurar:

- **Proveedores de API y modelos**: configura distintos proveedores de modelos, endpoints de API y claves.
- **Modelo predeterminado**: especifica el modelo que se usará de forma predeterminada.
- **Parámetros de ejecución**: ajusta el tiempo de espera, la concurrency, el formato de salida y otras opciones de ejecución.

> Usa el comando `/config` para abrir rápidamente el archivo de configuración y editarlo.

## Configuración del proyecto con AGENTS.md

Coloca un archivo `AGENTS.md` en la raíz de tu proyecto para darle a la IA contexto a nivel de proyecto:

- **Contexto del proyecto**: describe la funcionalidad, la arquitectura y la pila tecnológica del proyecto.
- **Pasos de compilación**: cómo instalar dependencias, compilar el proyecto y ejecutar pruebas.
- **Convenciones de código**: convenciones de nomenclatura, reglas de estructura de directorios y preferencias de estilo de código.
- **Notas especiales**: restricciones de seguridad, requisitos de rendimiento y otras consideraciones importantes.

Usa el comando `/init` para que la IA analice tu proyecto automáticamente y genere un `AGENTS.md` inicial. También puedes editar el archivo manualmente para agregar información específica del proyecto. Los archivos `AGENTS.md` pueden colocarse en cualquier subdirectorio: la IA cargará automáticamente las configuraciones relevantes.

## System prompt personalizado

Puedes personalizar el system prompt de la IA de varias maneras:

- **System prompt global**: escríbelo en `~/.kimi/AGENTS.md`; se aplica a todos los proyectos.
- **System prompt a nivel de proyecto**: escríbelo en el `AGENTS.md` de la raíz del proyecto; se aplica solo al proyecto actual.
- **Parámetro de inicio**: usa el flag `--system-prompt` para especificarlo al arrancar.

La configuración a nivel de proyecto tiene prioridad sobre la global, y el parámetro de inicio tiene la prioridad más alta.

## Integración con MCP

Kimi Code CLI es compatible con el Model Context Protocol (MCP), que permite conectarse a herramientas y fuentes de datos externas para ampliar las capacidades de la IA:

- **Configuración de servidores MCP**: agrega las direcciones de los servidores MCP en el archivo de configuración para que la IA pueda invocar herramientas externas.
- **Compatibilidad integrada con MCP**: algunas herramientas MCP de uso común vienen integradas y no requieren configuración adicional.
- **Servidores MCP personalizados**: puedes desarrollar tus propios servidores MCP para ofrecer capacidades específicas de tu dominio.

La configuración de MCP puede colocarse en `~/.kimi/config.toml` o en archivos de configuración a nivel de proyecto.

## Variables de entorno

Kimi Code CLI admite configuración mediante variables de entorno, lo que resulta útil para pipelines de CI/CD y scripts:

| Variable de entorno | Descripción |
| --- | --- |
| `KIMI_API_KEY` | Clave de API |
| `KIMI_BASE_URL` | Endpoint de API personalizado |
| `KIMI_MODEL` | Nombre del modelo predeterminado |
| `KIMI_MAX_TOKENS` | Cantidad máxima de tokens de salida |

Las variables de entorno tienen prioridad sobre la configuración del archivo de configuración.

## Más referencias

- **Referencia de comandos slash**: usa `/help` para ver todos los comandos disponibles.
- **Referencia de parámetros del CLI**: ejecuta `kimi --help` para ver todos los parámetros de inicio.
- **Documentación oficial**: visita [Kimi Code Docs](https://www.kimi.com/code/docs/en/) para acceder a la documentación completa más reciente.
