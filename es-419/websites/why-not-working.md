---
title: "¿Por qué no funciona el sitio web creado por el agente?"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="¿Por qué no funciona el sitio web creado por el agente? - Kimi Help Center"
  description="Un proyecto full-stack incluye la interfaz de usuario del frontend, los servicios del backend y el almacenamiento persistente. Kimi Agent puede generar los tres, pero la ejecución exitosa depende del entorno..."
/>

# ¿Por qué no funciona?

<Callout type="tip">
Un proyecto full-stack incluye **la interfaz de usuario del frontend, los servicios del backend y el almacenamiento persistente**. Kimi Agent puede generar los tres, pero la ejecución exitosa depende de la configuración del entorno, la configuración de la autenticación y las acciones de publicación.
</Callout>

Si tu aplicación no funciona como esperabas, el problema casi nunca es la falta de capacidad del backend. Por lo general, se trata de una vista previa, una autenticación, una base de datos o un paso de publicación incompletos.

## Flujo de trabajo full-stack 

1. **Generar**: el agente crea el frontend, el backend, el esquema de la base de datos y la lógica de datos.
2. **Vista previa**: ejecuta en el sandbox para hacer pruebas locales de toda la pila (en algunos casos puede ser necesario iniciarlo manualmente).
3. **Versión**: el agente puede usar herramientas de versiones y crear commits automáticamente.
4. **Reversión**: puedes volver a cualquier versión de commit anterior.
5. **Publicar / Compartir**: la aplicación se despliega a una URL pública solo después de que la publicas manualmente.

## Causas comunes de fallas 

| Síntoma | Causa probable | Qué hacer |
|----------|-------------|------------|
| El frontend carga, pero la API falla | El entorno del sandbox no está iniciado | Inicia el sandbox y vuelve a ejecutar la vista previa |
| Los datos no se guardan o no se ven | La base de datos no está inicializada ni migrada | Vuelve a ejecutar la configuración o la migración de la base de datos |
| El inicio de sesión falla | El flujo de autenticación no está configurado correctamente | Verifica la configuración de Kimi Login y los ajustes de callback |
| Otras personas no pueden acceder a tu aplicación | La aplicación no está publicada | Haz clic en **Publicar/Compartir** para desplegarla |
| Cambios recientes dañaron una funcionalidad | Regresión en la última versión | Revierte a un commit estable |

## Soporte de autenticación

- **Fase 1**: admite **Kimi Login**.
- **Próxima fase**: se agregarán más proveedores de OAuth.
- **También admitido**: el agente puede generar un inicio de sesión estándar basado en base de datos con correo electrónico y contraseña.

## Versiones y reversión

- El agente admite las nuevas herramientas de versiones y puede ejecutar `git commit` de forma autónoma durante el desarrollo.
- Puedes ver el historial de versiones y revertir a un commit determinado cuando lo necesites.

## Vista previa frente a publicación

- **Vista previa**: para desarrollo y pruebas en el sandbox; en algunos escenarios puede requerir iniciar el sandbox manualmente.
- **Publicar/Compartir**: acción manual del usuario que despliega tu aplicación en un entorno de acceso público.

## El agente es ideal para

- Crear prototipos rápidos de productos full-stack
- Flujos CRUD con almacenamiento persistente
- Operaciones básicas de datos de administración o back-office
- Proyectos de demostración de extremo a extremo con inicio de sesión, datos y flujo de despliegue

## Límites actuales

- Las operaciones avanzadas de producción (por ejemplo, SRE complejo y alta disponibilidad multirregión) todavía requieren trabajo de ingeniería manual.
- Para escenarios de producción de alto riesgo, realiza una revisión de seguridad y refuerza el despliegue antes de la publicación.
