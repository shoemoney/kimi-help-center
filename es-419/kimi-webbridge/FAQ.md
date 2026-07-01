---
title: "Preguntas frecuentes"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Preguntas frecuentes de Kimi WebBridge - Centro de ayuda de Kimi"
  description="Preguntas frecuentes sobre la instalación, conexión y uso de Kimi WebBridge con varios navegadores y Local Agents."
  ogType="article"
/>

# Preguntas frecuentes

## Instalación y configuración

### ¿Aparece el mensaje "No se pueden agregar aplicaciones desde este sitio web" al instalar la extensión?

Asegúrate de instalarla desde la tienda web oficial (Chrome Web Store o Edge Add-ons). Si no puedes acceder a la tienda web, usa el método de instalación manual que se indica en el sitio web oficial.

### ¿No pasa nada después de ejecutar el comando de conexión?

Revisa tu conexión a internet. Si el problema persiste, intenta reiniciar Kimi Claw Desktop y ejecuta el comando de nuevo.

### ¿Puedo usarlo en varias computadoras?

Sí, pero cada computadora debe instalarse y configurarse por separado.

### ¿No encuentro Kimi Claw Desktop?

Kimi Claw Desktop es un Kimi Claw implementado en tu computadora local. Abre Kimi Desktop, busca Kimi Claw en la barra lateral izquierda, crea un nuevo Claw y selecciona "Implementar en mi computadora".

## Conexión y uso

### ¿El estado de la extensión muestra "Desconectado"?

Confirma que la extensión del navegador Kimi WebBridge se haya instalado correctamente y luego sigue los pasos según tu método de configuración:

- **Kimi Desktop**: reinicia Kimi Desktop e inténtalo de nuevo

- **Otros Local Agents**: vuelve a enviar el siguiente comando en tu Agent y, una vez que se ejecute, reinicia el Agent:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### En Windows, al instalar WebBridge aparece el error: Error de instalación

Kimi WebBridge es compatible con el sistema operativo Windows, y el comando de instalación se puede ejecutar en un entorno Linux:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### WebBridge muestra una advertencia de compatibilidad con Chrome después de la instalación. ¿Qué significa?

Si WebBridge puede abrir páginas con normalidad, pero acciones como `snapshot`, `evaluate`, `screenshot` o `click` siguen fallando, la causa más común es **un conflicto con otras extensiones del navegador**.

Esto ocurre con especial frecuencia con herramientas de scraping, extensiones de asistencia para sitios web, extensiones de grabación de pantalla y extensiones de asistente de IA.

Te recomendamos seguir estos pasos para diagnosticar el problema:

1. Abre la página de administración de extensiones de tu navegador
2. Desactiva temporalmente las demás extensiones
3. Deja activada únicamente Kimi WebBridge
4. Reinicia el navegador e inténtalo de nuevo
5. Si WebBridge funciona con normalidad, vuelve a activar las demás extensiones una por una para identificar cuál genera el conflicto


### ¿WebBridge filtrará mi información de inicio de sesión?

No. Toda la ejecución ocurre de forma local en tu dispositivo: los estados de inicio de sesión y el contenido de las páginas web nunca salen de tu máquina. El Agent solo puede acceder a los resultados de las operaciones que autorices.

### ¿Por qué fallan las operaciones?

Las estructuras de página complejas o la carga dinámica pueden hacer que las operaciones fallen. Intenta simplificar tus instrucciones o pídele al Agent que tome primero una captura de pantalla para confirmar el estado de la página antes de ejecutar.

### ¿Qué navegadores son compatibles?

Actualmente es compatible con Chrome y Edge. Te recomendamos usar la versión más reciente para obtener la mejor experiencia.

## Uso con otros agentes

### ¿Con qué otros Agents es compatible?

WebBridge es compatible con todos los Local Agents, incluidos Claude Code, Codex, Cursor, Kimi Code, Hermes Claw y más.

### ¿La configuración es la misma para los distintos Agents?

El comando de configuración es el mismo para todos: basta con ejecutar un único comando de curl para instalarlo. Consulta la configuración de Skills de cada Agent para conocer los detalles.
