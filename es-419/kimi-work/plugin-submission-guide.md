---
title: "Crear y enviar plugins"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "Convierte tu producto o servicio en un plugin de Kimi, pruébalo y solicita su inclusión en el mercado oficial."
---

<SeoMeta
  title="Crear y enviar plugins - Centro de ayuda de Kimi"
  description="Aprende cómo crear y probar un plugin en Kimi Work y solicitar su inclusión en el mercado oficial de plugins de Kimi."
/>

# Crear y enviar plugins

Si deseas conectar tu producto o servicio a Kimi para que los usuarios puedan acceder a sus capacidades en las conversaciones, sigue esta guía para crear, probar y enviar un plugin al mercado oficial de plugins de Kimi.

## ¿Qué es un plugin de Kimi?

Un plugin de Kimi conecta tu producto a Kimi. Ayuda a Kimi a entender cuándo tu producto es útil y le proporciona los flujos de trabajo o herramientas necesarios para ayudar a los usuarios. Un plugin puede contener:

- **Solo habilidades**: flujos de trabajo reutilizables adaptados a tu producto o caso de uso.
- **Solo MCP**: herramientas y servicios expuestos a Kimi a través de un servidor MCP.
- **Habilidades y MCP**: herramientas del producto combinadas con flujos de trabajo que ayudan a Kimi a usarlas eficazmente.

## Antes de comenzar

Primero, <a class="leading-7 text-(--Colors-KMBlue) decoration-(--hc-pill-border) decoration-2 transition-colors hover:text-(--Colors-KMBlue-hover)" href="https://www.kimi.com/products/kimi-work">descarga e instala Kimi Work</a>. Prepara lo siguiente:

- Un nombre, descripción y logo para el plugin
- Las tareas principales que los usuarios deberían poder completar en lenguaje natural
- Una URL del servidor MCP, si es aplicable

<Callout type="warning">
Si el logo del plugin incluye un producto, marca o registro de terceros, contacta al titular de los derechos correspondiente y obtén la autorización escrita necesaria antes de enviarlo.
</Callout>

## Paso 1: Crea y prueba el plugin

1. Abre Kimi Work, escribe "/" en una conversación y selecciona **Plugin Builder**.
2. Describe el plugin y proporciona la información que preparaste. Si ya tienes un plugin de Codex, Claude u otra plataforma, proporciona sus archivos o URL del proyecto y sigue las instrucciones para convertirlo.

3. Ve a **Plugins** → **Personal**, encuentra el plugin e instálalo.

4. Prueba las capacidades principales en una nueva conversación, incluyendo casos normales y extremos. Guarda al menos tres prompts de prueba representativos.
5. Sigue las instrucciones de Plugin Builder para obtener el archivo ZIP completo del plugin.

Para un plugin respaldado por MCP, también prueba su flujo de autenticación:

- **Sin autenticación**: los usuarios pueden usar el plugin inmediatamente después de la instalación.
- **OAuth**: la página de autorización de terceros debería abrirse durante la primera instalación.
- **Autenticación CLI**: la instalación no inicia la autorización. La primera vez que los usuarios invoquen el plugin, completarán la autorización en la conversación. Después de una autorización exitosa, generalmente no necesitarán autorizar nuevamente en otras conversaciones.

## Paso 2: Envía tu solicitud

Después de crear y probar el plugin, completa el [formulario de envío de plugins de Kimi](https://moonshot.feishu.cn/share/base/form/shrcnZcnxlNJlbw845KoVgjEhkh) y sube el archivo ZIP del plugin.

El formulario solicita:

| Ítem | Requisito |
| --- | --- |
| Nombre, descripción y archivo ZIP del plugin | Obligatorio |
| Tipo de plugin | Solo habilidades, solo MCP o híbrido |
| Autenticación MCP | Obligatorio para plugins solo MCP e híbridos |
| Regiones previstas | China continental, extranjero o ambos |
| Puntos destacados y prompts de prueba recomendados | Al menos tres prompts de prueba |
| Interés en co-marketing y materiales | Los materiales son opcionales y solo se necesitan si deseas discutir co-marketing |
| Estado de autorización y cumplimiento | Revela elementos que requieran más discusión |
| Correo electrónico de contacto | Se usa para actualizaciones de revisión y solicitudes de información adicional |
| Empresa o equipo, sitio web relacionado y notas | Opcional |

<Callout type="warning">
No incluyas contraseñas, tokens, claves API, claves privadas u otros secretos en el formulario o archivo ZIP del plugin. Si los usuarios necesitan su propia clave, explica solo cómo obtenerla y configurarla.
</Callout>

## ¿Qué sucede después?

El equipo de Kimi revisará la solicitud y el archivo ZIP del plugin. Si el plugin pasa la revisión, o si necesitamos más información o cambios, nos pondremos en contacto contigo en la dirección de correo electrónico proporcionada y compartiremos los siguientes pasos.

## Preguntas frecuentes

### ¿Puedo enviar un plugin sin un servidor MCP?

Sí. Se admiten plugins solo con habilidades. Selecciona **Solo habilidades** como el tipo de plugin.

### ¿Puedo enviar un plugin de Codex, Claude u otra plataforma?

Sí. En el Paso 1, proporciona los archivos del plugin existente o la URL del proyecto a Plugin Builder y sigue las instrucciones para convertirlo. Instala y prueba el plugin convertido en Kimi Work antes de enviar el archivo ZIP generado.

### ¿Qué métodos de autenticación MCP están soportados?

Actualmente se admiten los siguientes tres métodos:

- **Sin autenticación**: Los usuarios pueden usar el plugin inmediatamente después de la instalación sin iniciar sesión o completar ninguna otra verificación de identidad.
- **OAuth**: Los usuarios son redirigidos automáticamente a la página de autorización del producto de terceros cuando instalan el plugin por primera vez. Pueden usar el plugin después de la autorización.
- **Autenticación CLI**: La instalación no inicia un flujo de autorización. La primera vez que los usuarios invoquen el plugin en una conversación, completarán la autorización usando las instrucciones mostradas en la conversación. Después de una autorización exitosa, generalmente no necesitarán autorizar nuevamente en otras conversaciones.

Prueba el flujo que coincida con el método de autenticación real de tu plugin. Si un plugin OAuth no redirige durante la primera instalación, o un plugin con autenticación CLI solicita repetidamente a los usuarios que autoricen, revisa la configuración de autenticación del servidor MCP antes de enviar tu solicitud y describe el problema en **Notas adicionales**.

### ¿Cómo es el flujo de autorización OAuth?

Para un servidor MCP habilitado para OAuth, Plugin Builder identifica la información de autorización relevante desde la URL del servidor MCP. Después de crear el plugin, los usuarios son llevados a la página de autorización del producto de terceros la primera vez que lo instalan.

### ¿Qué pasa si quiero explorar una asociación más amplia con Kimi?

Primero completa el proceso de creación, prueba y envío del plugin en esta guía. Si deseas explorar otras formas de colaboración más allá de listar el plugin, describe brevemente tu propuesta en **Notas adicionales**. El equipo de Kimi podría contactarte según las circunstancias.

### ¿El envío de una solicitud garantiza la inclusión?

No. El equipo de Kimi evalúa la funcionalidad del plugin, la experiencia del usuario, la seguridad, la confiabilidad del servicio y el estado de autorización relevante.
