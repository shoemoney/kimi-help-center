---
title: "Preguntas frecuentes sobre Kimi Code"
slug: "faq"
order: 4
extract_headings: false
preview: true
preview_content: "Preguntas frecuentes sobre Kimi Code."
---

<SeoMeta
  title="Preguntas frecuentes sobre Kimi Code - Centro de ayuda de Kimi"
  description="Preguntas frecuentes sobre la instalación, autenticación, migración, interacción y más del CLI de Kimi Code."
/>

# Preguntas frecuentes

## Migración desde la versión anterior

<Callout type="info">
El CLI de Kimi Code recibió una actualización de versión importante: pasó de Python/uv a Node.js, lo que ofrece una instalación más sencilla, un inicio más rápido y una interfaz de terminal rediseñada. La versión anterior se irá retirando de forma gradual, por lo que te recomendamos actualizar lo antes posible.
</Callout>

Si vienes de la versión anterior, sigue los pasos a continuación: un solo comando migra tu configuración, los servidores MCP y el historial de sesiones a la nueva versión.

### Novedades

- **Adiós a Python / uv**: reconstruido sobre Node.js, sin necesidad de un entorno de Python y con una instalación más sencilla
- **Binario nativo, listo para usar**: inicio más rápido y menor consumo de recursos
- **Interfaz de terminal rediseñada**: una experiencia más fluida y ágil
- **Migración completa de datos**: la configuración, los servidores MCP y el historial de sesiones se transfieren sin problemas

### Cómo migrar

Hay dos formas de migrar.

La **primera vez que ejecutes `kimi`** después de instalar kimi-code, este comprueba automáticamente si existen datos de kimi-cli en `~/.kimi/`. Si encuentra alguno, aparece un aviso de migración y puedes elegir migrar ahora, hacerlo más tarde o no volver a recibir el aviso.

También puedes **ejecutarlo manualmente en cualquier momento**:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

Puedes decidir si migras también las sesiones de chat. Si por ahora no necesitas el historial, elige **Solo configuración**; de lo contrario, elige **Configuración + N sesiones** para traerlo todo de una vez. Al final se muestra un resumen.

### Qué ocurre durante la migración

**Lo que se migra**: la configuración (`config.toml`), la configuración de los servidores MCP, el historial de entradas y las sesiones de chat que hayas decidido migrar.

**Lo que no se migra**: las credenciales de inicio de sesión OAuth y las autorizaciones de servicios MCP no se copian, así que tendrás que ejecutar `/login` de nuevo y volver a autorizar los servidores MCP después de migrar. Los complementos de kimi-cli tampoco se incluyen.

<Callout type="tip">
La migración **nunca modifica ni elimina** ninguno de los datos antiguos en `~/.kimi/`. kimi-cli sigue funcionando como siempre y ambos no interfieren entre sí. La migración también se puede ejecutar varias veces: las sesiones que ya se migraron no se importan de nuevo.
</Callout>

Después de la migración, las sesiones importadas de kimi-cli aparecen marcadas con `[imported]` en el selector de sesiones para que puedas distinguirlas de las nuevas.

## Instalación y autenticación

### No hay modelos disponibles al ejecutar `/login`

Si ves «No models available for the selected platform» al ejecutar `/login`, puede deberse a:

- **API key inválida o vencida**: verifica que la API key que ingresaste sea correcta y siga vigente.
- **Problema de conexión de red**: confirma que puedes acceder a la dirección del servicio de la API (como `api.kimi.com` o `api.moonshot.cn`).

**Ten en cuenta la diferencia entre plataformas**

Los beneficios de la membresía de Kimi Code y la [Plataforma abierta de Kimi](https://platform.kimi.com) tienen distintas Base URL. Asegúrate de que la Base URL coincida con la API Key al configurar.

| Plataforma | Base URL | Facturación | Creación de la key |
|------|---------|---------|-------------|
| **Kimi Code** | Compatible con Anthropic: `https://api.kimi.com/coding/` | Suscripción de membresía de Kimi (incluye quota) | [Consola de Kimi Code](https://www.kimi.com/code/console) |
| **Plataforma abierta de Kimi** | `https://api.moonshot.cn/v1` | Pago por uso | [Plataforma abierta de Kimi](https://platform.kimi.com) |

### La API key es inválida

Posibles motivos por los que una API key es inválida:

- **La key se ingresó mal**: revisa que no haya espacios de más ni caracteres faltantes.
- **La key venció o fue revocada**: confirma el estado de la key en la consola de la plataforma.

### Membresía vencida o quota agotada

Si usas la plataforma de Kimi Code, puedes consultar tu quota actual y el estado de tu membresía con el comando `/usage`. Si tu quota se agotó o tu membresía venció, debes renovar o mejorar tu plan en [Kimi Code](https://kimi.com/code).

## Suscripción

### ¿Cómo solicito una factura o mejoro mi membresía?

Visita la [página de membresía de Kimi](https://www.kimi.com/membership/pricing?from=kfc_docs_faq#pricing-faq) y sigue las instrucciones para solicitar una factura o mejorar tu plan.

## Problemas de interacción

### Falla al pegar una imagen

Al pegar una imagen con `Ctrl-V`, si ves «Current model does not support image input», significa que el modelo actual no admite la entrada de imágenes.

Soluciones:

- **Cambia a un modelo que admita imágenes**: usa un modelo con la capacidad `image_in`.
- **Revisa el contenido del portapapeles**: asegúrate de que el portapapeles realmente contenga datos de imagen y no la ruta a un archivo de imagen.

## Actualizaciones y mejoras

### El primer inicio en macOS es lento

Gatekeeper de macOS realiza una verificación de seguridad la primera vez que se ejecuta un programa nuevo, lo que hace que el inicio sea más lento. Soluciones:

- **Espera a que termine la verificación**: ten paciencia en el primer inicio; los siguientes arranques volverán a la velocidad normal.
- **Agregar a Herramientas de desarrollador**: agrega tu aplicación de terminal en **Configuración del sistema → Privacidad y seguridad → Herramientas de desarrollador**.

### Cómo actualizar el CLI de Kimi Code

Ejecuta `kimi upgrade` para buscar la última versión y ver las opciones de actualización. Elige `Install update now` para actualizar. También puedes actualizar directamente desde el gestor de paquetes:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## Preguntas frecuentes sobre la extensión de VS Code

A continuación encontrarás preguntas frecuentes sobre la extensión de Kimi Code para VS Code.

### VS Code indica que no hay ningún espacio de trabajo abierto

Abre una carpeta en VS Code. La extensión de Kimi Code para VS Code necesita un espacio de trabajo para funcionar correctamente.

### VS Code indica que no se encuentra el CLI

Instala el CLI de Kimi Code manualmente y configura `kimi.executablePath` en los ajustes de VS Code, o asegúrate de que el CLI integrado esté presente.

### Falla el inicio de sesión en VS Code

Intenta omitir el inicio de sesión y usar el modo de API key en su lugar, revisa tu conexión de red o vuelve a intentarlo más tarde desde el menú de acciones de la extensión de Kimi Code.

### VS Code envía mensajes pero no hay respuesta

Confirma que el CLI de Kimi Code esté disponible, que el modelo esté configurado y que haya una carpeta de espacio de trabajo abierta en VS Code. Revisa los registros de errores con «Kimi Code: Show Logs».

### Se agota el tiempo de conexión en VS Code

Si no hay respuesta en 30 segundos, se agotará el tiempo de espera. Revisa tu red y vuelve a intentarlo.

### Error en VS Code antes de enviar un mensaje

Ciertos errores impiden enviar mensajes en VS Code, como que no se encuentre el CLI de Kimi Code, que la versión sea demasiado antigua, que no hayas iniciado sesión o que la sesión esté ocupada. El error se mostrará como una notificación emergente y tu texto se conservará para que puedas reintentarlo.

## Comentarios y contacto

### La documentación no resolvió mi problema

Si lo anterior no resolvió tu problema, no dudes en escribirnos por correo: [code@moonshot.ai](mailto:code@moonshot.ai). En el correo, describe el problema que tuviste, los pasos que seguiste y cualquier información de registro relevante, y te responderemos lo antes posible.

Si tienes algún problema o sugerencia, también puedes dejarnos tus comentarios en [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).
