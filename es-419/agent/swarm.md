---
title: "Agent Swarm"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Agent Swarm - Centro de ayuda de Kimi"
  description="Agent Swarm es una arquitectura de &quot;escalado horizontal&quot; que coordina hasta 300 subagentes trabajando en paralelo — sin roles predefinidos ni..."
/>

# Agent Swarm

<Callout type="info">
**Agent Swarm** es una arquitectura de "escalado horizontal" que coordina hasta 300 subagentes trabajando en paralelo, sin necesidad de roles predefinidos ni flujos de trabajo hechos a mano. Completa tareas aproximadamente **4.5 veces más rápido** que la ejecución con un solo agente.
</Callout>

El 27 de enero de 2026, Moonshot AI lanzó Kimi K2.5 e introdujo Agent Swarm. El 20 de abril de 2026, Moonshot AI lanzó y liberó como código abierto Kimi K2.6, con grandes mejoras en la arquitectura de Agent Swarm:
- Hasta **300 subagentes** trabajando de forma simultánea
- Más de **4,000 llamadas a herramientas** por tarea
- **4.5 veces más rápido** que la ejecución secuencial con un solo agente

Agent Swarm ahora funciona con Kimi K3 (K3 Swarm), lo que mejora aún más la búsqueda en paralelo a gran escala y el procesamiento por lotes.

## La historia detrás de esto

En 2025, el relato dominante de la industria de la IA giraba en torno al escalado vertical: modelos más grandes, más parámetros. Pero esto choca con un techo estructural: el cuello de botella de la ejecución secuencial única.

Agent Swarm nació de una situación real: cuando una integrante del equipo quiso automatizar la recopilación diaria de información bursátil y llegó a 100 líneas de código if-else, se dio cuenta de algo: "Estoy escribiendo a mano un sistema multiagente". Si los modelos pueden usar herramientas, ¿por qué no podrían diseñar su propia arquitectura?

Agent Swarm es una estructura organizativa autodiseñada: creada por la IA, no por humanos. El Agent principal (orquestador) dirige de forma autónoma hasta 300 subagentes, ejecutando hasta 4,000 pasos de flujo de trabajo en paralelo.

<Frames
  src="./images/swarm/swarm.png"
  alt="swarm"
/>

Agent Swarm utiliza el método de entrenamiento PARL (Parallel-Agent Reinforcement Learning). En comparación con los enfoques de un solo agente, reduce los pasos críticos entre 3 y 4.5 veces en escenarios de búsqueda a gran escala.

## ¿Cómo se usa?

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="screenshot 8"
/>

**Puntos de acceso:**
- **Web**: [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Móvil**: abre la app de Kimi y selecciona el modelo K3 Swarm en el botón de cambio de modelo

<Callout type="info">
Acerca de la etiqueta [Beta]: [Beta] indica un marcador de prueba para un producto que al inicio solo está disponible para un número reducido de usuarios, con el fin de validarlo y refinarlo a pequeña escala; a medida que la función madura, la etiqueta se retira gradualmente y el producto se pone a disposición de todos.
</Callout>

Agent Swarm está disponible para los miembros Moderato, Allegretto, Allegro y Vivace. Las tareas consumen muchos más créditos que las tareas estándar de Agent.

**Pasos:**
1. Describe tu tarea y envíala (por ejemplo, "Recopila más de 200 artículos de Paul Graham")
2. Observa el progreso en tiempo real: creación de la lista de tareas, generación de subagentes y ejecución en paralelo
3. Recibe los resultados: proyectos de código, carpetas de archivos, análisis de datos y documentos de Office
4. Previsualiza, descarga o comparte los resultados
5. En los turnos siguientes, Kimi programa automáticamente entre el chat y el Agent según la tarea, sin necesidad de cambiar de forma manual

## Casos de uso

### Descubrimiento a gran escala

**Caso 1: Los 3 mejores creadores en 100 nichos de YouTube**

Agent Swarm creó 300 subagentes para una búsqueda en paralelo y generó tablas estructuradas con nombres de canales, cantidad de suscriptores y descripciones.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="Ver resultado" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**Caso 2: Recopilación de más de 200 artículos de Paul Graham**

Agent Swarm desplegó subagentes para buscar, descargar, categorizar y resumir más de 200 artículos en carpetas temáticas.

<Chat title="Ver resultado" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### Producción a gran escala

**Caso: Revisión de literatura de 100 páginas a partir de 40 PDF**

Agent Swarm desplegó varios subagentes enfocados en la redacción, cada uno a cargo de un capítulo. Resultado final: un documento académico de 100 páginas con citas, gráficos metodológicos y análisis de la red de citas.

<Frames
  src="./images/swarm/literature-review.png"
  alt="literature review"
/>

### Perspectivas a gran escala

**Caso: Revisión experta de una estrategia de lanzamiento de producto**
Agent Swarm desplegó subagentes expertos con distintas perspectivas (gerente de producto, inversionista, éxito del cliente) para revisar una estrategia de lanzamiento.

<Frames
  src="./images/swarm/expert-review.png"
  alt="expert review"
/>

<Chat title="Ver resultado" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**Caso: *El problema de los tres cuerpos* reescrito en 20 estilos literarios**
20 subagentes "escritores" compusieron de forma independiente en estilos distintos, desde Virginia Woolf hasta Borges y Kafka.

<Chat title="Ver resultado" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## Análisis técnico a fondo

**Arquitectura central: comandante + especialistas**

- **Orquestador** = entrenador/comandante: ve el panorama completo y define la estrategia
- **Subagentes** = jugadores: cada uno enfocado en un rol específico

**Diseño clave: congelar a los jugadores y entrenar solo al entrenador**

Todos los subagentes conservan sus capacidades existentes; solo el orquestador mejora mediante aprendizaje por refuerzo. Esto brinda una responsabilidad clara y estabilidad en el entrenamiento.

**Cómo evitar la "pereza":**
- **Colapso en serie**: el orquestador le entrega todo a un solo subagente
- **Paralelismo falso**: subtareas sin sentido para manipular las métricas

**Solución: mecanismo de recompensa tridimensional**
1. Calidad del resultado final
2. Paralelismo real logrado
3. Tasa de finalización de subtareas

**Métrica de pasos críticos**

Agent Swarm calcula el tiempo del subagente más lento en cada etapa. Esto obliga a una verdadera optimización del proceso, en lugar de una división ciega de las tareas.

**Context Sharding**

Cada subagente se concentra en su propio "cuaderno", registrando los detalles relevantes de forma independiente. Solo las conclusiones clave se reportan al orquestador, lo que preserva el razonamiento sin saturar la memoria.

**Resultados en el mundo real**

En el benchmark BrowseComp:
- Precisión: 15.9% (un solo agente) → 33.3%
- Pasos críticos reducidos en ~40%

## Escenarios de aplicación

Agent Swarm es especialmente adecuado para:
1. **Recuperación de información a gran escala**: recopilación masiva de datos de internet
2. **Descargas por lotes**: recopilación de archivos y recursos a gran escala
3. **Lectura de amplio alcance**: procesamiento de más de 100 documentos
4. **Escritura de formato largo**: contenido de más de 100,000 palabras
5. **Programación compleja**: desarrollo frontend, revisión de código y refactorización
6. **Automatización de oficina**: documentos profesionales, hojas de cálculo y presentaciones

**Lecturas adicionales:**
- [Kimi Agent Swarm: 100 subagentes a gran escala](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5: inteligencia agéntica visual​](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6: avanzando en la programación de código abierto](https://www.kimi.com/blog/kimi-k2-6)
- [Kimi K3](https://www.kimi.com/blog/kimi-k3)
