---
title: "¿Qué son las Skills?"
slug: "what-are-skills"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="¿Qué son las Skills? - Centro de ayuda de Kimi"
  description="Conoce los principios de funcionamiento, los tipos y el uso de Kimi Skills. Las Skills son paquetes de conocimiento reutilizables que amplían las capacidades del Agent en tareas específicas, e incluyen instrucciones, mejores prácticas, scripts y recursos."
  ogType="article"
/>

# ¿Qué son las Skills?

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

Las Skills son paquetes de conocimiento reutilizables diseñados para ampliar los límites de las capacidades de un agente de IA. Cada skill incluye:

- **Métodos de trabajo y guía operativa** — Metodologías adaptadas a tipos de tareas específicos.
- **Mejores prácticas y estándares** — Estándares de la industria y protocolos internos que se deben seguir.
- **Scripts, herramientas y recursos de referencia** — Herramientas y materiales opcionales que facilitan la ejecución.

## ¿Cómo se usan?

Al inicio de una conversación, el Agent ve una lista de las skills disponibles con sus nombres y descripciones breves. Si una skill es relevante para la tarea actual, el Agent carga las instrucciones completas y actúa en consecuencia.

## Recorrido del usuario

Desde descubrir skills hasta crear las tuyas propias, el recorrido completo es el siguiente:

1. **Descubre skills** — Explora las skills oficiales y recomendadas en el panel de Skills para encontrar una que se ajuste a tu escenario.
2. **Instala skills** — Haz clic en el botón "+" para agregar una skill al instante.
3. **Invoca skills** — Escribe `/` en el cuadro de chat para seleccionar una skill, o deja que Kimi active una automáticamente según tu consulta.
4. **Crea las tuyas** — Si las skills existentes no cubren tus necesidades, sube documentos o describe tus requisitos para generar una skill personalizada, o usa `/skill-creator` para crear una mediante diálogo.

## ¿Cómo funcionan las Skills?

Cuando envías una solicitud, Kimi Agent evalúa si la tarea actual involucra una skill específica. De ser así, carga automáticamente la skill correspondiente y sigue sus instrucciones para completar la tarea.

Las Skills solo se cargan cuando son relevantes para la tarea, lo que garantiza que no interfieran con el contexto de otras conversaciones.

## Skills frente a prompts directos: ¿cuál es la diferencia?

Tomemos como ejemplo la redacción de informes semanales:
- **Prompt directo**: Le pides a Kimi Agent directamente, y este redacta según su propia interpretación del formato.
- **Usar Skills**: Tras instalar una skill de informes semanales, cada resultado sigue la estructura, el tono y la extensión que predefiniste, sin necesidad de repetir instrucciones.

| | Prompt directo | Usar skills |
|---|---|---|
| **¿Hay que explicar los requisitos cada vez?** | Sí | No, se aplican automáticamente |
| **Estabilidad del formato de salida** | Variable | Consistente según lo definido |
| **Mejor caso de uso** | Tareas puntuales y temporales | Flujos de trabajo repetitivos y fijos |
| **¿Requiere configuración?** | No | Requiere crearla o instalarla |

## Tipos de Skills

### (1) Skills oficiales y skills recomendadas

**Skills oficiales**: Creadas y mantenidas por Moonshot AI, disponibles para todos los usuarios. Kimi las activa automáticamente en los escenarios relevantes.

Algunas skills oficiales comunes son:
- `docx` — Crea y edita documentos de Word, ideal para cualquier tarea .docx como creación de documentos, edición, comentarios, revisiones, notas al pie, índices y conversión de Markdown a Word.
- `deep-research` — Realiza investigaciones a fondo y construye informes extensos usando un conjunto de herramientas, con un mínimo de 10 ciclos de búsqueda iterativa, reflexión recursiva y visualización obligatoria con IPython.

**Skills recomendadas**: Skills curadas y orientadas a escenarios, disponibles para agregar con un solo clic, que cubren casos de uso comunes como investigación de inversiones y formato de documentos.

Algunas skills recomendadas comunes son:
- `sop-writer` — Convierte procesos de negocio en documentos completos de Procedimiento Operativo Estándar (SOP), que incluyen diagramas de flujo de procesos, matrices RACI, pasos operativos detallados y manejo de excepciones.
- `event-etf-study` — A partir de un concepto o evento, identifica las acciones relacionadas, construye un índice ETF ponderado por capitalización de mercado, analiza los cambios de valor de mercado durante la ventana del evento y genera dashboards interactivos en HTML. Se usa cuando los usuarios consultan sobre acciones de concepto, ETF de concepto, análisis basado en eventos o investigación de eventos.

**De documento de oficina a skill**: Sube documentos para generar skills y replica fácilmente temas de estilo.

### (2) Skills de código abierto

Descarga o instala las Skills adecuadas de comunidades de código abierto, combinándolas con Agents locales (como Kimi Code) o Agents en la nube (como Kimi Claw).

**Plataformas comunes de AI Skill Hub**

| Plataforma | URL | Descripción |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | Un marketplace de skills para agentes de IA que recopila paquetes SKILL.md desde GitHub, compatible con Claude Code y OpenAI Codex CLI |
| SkillsLLM | https://skillsllm.com | Un marketplace de código abierto de skills para agentes de IA con más de 1.600 skills verificadas en seguridad para Claude Code, Codex CLI y ChatGPT |
| LobeHub Skills | https://lobehub.com/skills | Explora y distribuye paquetes SKILL.md compatibles con Claude Code, Codex CLI y ChatGPT |

### (3) Skills personalizadas

Skills personalizadas que tú creas para flujos de trabajo propios y tareas de dominios específicos, como:
- Aplicar guías de estilo específicas a documentos o presentaciones.
- Generar correos electrónicos o contenido de comunicación a partir de plantillas fijas.
- Organizar minutas de reuniones en un formato específico.
- Ejecutar flujos de trabajo específicos de análisis de datos.
