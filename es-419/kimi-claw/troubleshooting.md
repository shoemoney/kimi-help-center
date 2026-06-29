---
title: "Solución de problemas generales"
slug: "troubleshooting"
order: 12
extract_headings: false
preview: false
---

<SeoMeta
  title="Solución de problemas generales - Centro de ayuda de Kimi"
  description="Esta página explica los códigos de error comunes y las opciones de autorreparación de Kimi Claw."
/>

# Solución de problemas generales

Esta página explica los códigos de error comunes y las opciones de autorreparación de Kimi Claw.

## Códigos de error comunes

| Código | Significado | Qué hacer |
|------|---------|------------|
| **400** | Bad Request: entrada con formato incorrecto o parámetros no válidos | Revisa tu mensaje en busca de contenido no admitido y vuelve a intentarlo. |
| **401** | Unauthorized: falló la autenticación | Cierra sesión en Kimi y vuelve a iniciarla. Si el problema continúa, verifica tus credenciales de API en la configuración de Kimi Claw. |
| **403** | Forbidden: permisos insuficientes | Comprueba que tu nivel de membresía sea compatible con la función que estás usando. Asegúrate de que tu cuenta no tenga restricciones. |
| **429** | Too Many Requests: se superó el rate limit | Espera unos minutos y vuelve a intentarlo. Consulta [Límites de conversación](/kimi-claw/conversation-limits) para saber cómo revisar tu quota. |
| **500** | Internal Server Error: algo salió mal en el servidor | Vuelve a intentarlo después de una breve espera. Si se repite, usa las opciones de autorreparación que aparecen abajo o comunícate con soporte. |

## Opciones de autorreparación

Kimi Claw incluye herramientas de reparación integradas a las que puedes acceder desde **Configuración** en la web:

| Opción | Qué hace |
|--------|--------------|
| **Reiniciar Kimi Claw** | Reinicia la conexión del gateway. Soluciona la mayoría de los problemas pasajeros (desconexiones del puente, bloqueos temporales). |
| **Reparar Kimi Claw** | Ejecuta un diagnóstico automatizado que detecta y corrige problemas de configuración. Pruébalo cuando un reinicio simple no sea suficiente. |
| **Restaurar la configuración inicial** | Restablece Kimi Claw a su estado predeterminado. Los archivos del espacio de trabajo y la Memory se conservan, pero las conexiones con plataformas de chat (Telegram, etc.) deben configurarse de nuevo. Úsalo como último recurso. |

## Ruta de escalamiento

Si las opciones de autorreparación no resuelven el problema:

1. Ejecuta `/logs` en la Terminal para capturar la salida de errores reciente.
2. Ejecuta `/debug` para habilitar diagnósticos detallados.
3. Comunícate con **support@moonshot.ai** e incluye los detalles del error y los logs relevantes.
