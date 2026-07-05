---
title: "Preguntas frecuentes sobre la creación de skills"
slug: "create-custom-skills-faq"
order: 9
extract_headings: true
preview: false
---

<SeoMeta
  title="Preguntas frecuentes sobre la creación de skills - Centro de ayuda de Kimi"
  description="Preguntas comunes sobre la creación de Kimi Skills, como la carga de documentos, el uso de tokens, los rate limits, el nombre de las skills y la gestión de errores en la creación."
/>

# Preguntas frecuentes (FAQ) sobre las skills

## ¿Por qué está deshabilitado el botón "Crear skill"?

Esto puede ocurrir por las siguientes razones:
1. El archivo cargado o la descripción de la skill están incompletos.
2. El formato o la cantidad de archivos no cumplen con los requisitos.
3. El sistema detectó que tus créditos se agotaron.

## ¿Cómo consume créditos la creación de skills?

Crear una skill consume tus **tokens**, que pueden provenir de las búsquedas de regalo o de tus créditos de membresía oficial.

**Orden de descuento**:
1. Se priorizan las búsquedas de regalo.
2. Si no hay búsquedas de regalo disponibles, se usan los créditos de membresía.

<Callout type="info">
Si el proceso de creación falla, no se descontarán tokens. Los tokens solo se consumen cuando la creación es exitosa.
</Callout>

## ¿Hay límites en la cantidad o frecuencia de creaciones?

Sí. Para garantizar la estabilidad del sistema y un uso justo, existen los siguientes límites:

1. **Límite de concurrencia**: pueden ejecutarse en paralelo un máximo de **3 tareas** (en creación + fallidas). Si alcanzas este límite, recibirás un aviso para reintentar más tarde.
2. **Límite diario**: cada usuario puede realizar un máximo de **10 conversiones de "documento de oficina a skill"** por día (incluidos los reintentos). Si superas este límite, aparecerá una notificación emergente.

## ¿Qué hago si falla la creación de una skill?

* Puedes elegir **Reintentar** o **Eliminar** la tarjeta de la skill fallida.
* Los intentos fallidos no consumen créditos.
* La descripción original de la skill se mostrará en la tarjeta fallida para ayudarte a distinguir entre las distintas tareas.

## ¿Qué requisitos de nombre aplican a las nuevas skills?

Los nombres de las nuevas skills deben cumplir con las siguientes reglas:
1. **No pueden duplicar skills existentes**: incluidas las skills oficiales y cualquier skill que ya hayas agregado.
   - Por ejemplo, si tienes las skills A, B y C, crear una nueva skill llamada A requiere cambiarle el nombre para evitar conflictos.
2. **Longitud de caracteres**: máximo 25 caracteres.
3. **Caracteres permitidos**: solo letras minúsculas del inglés, guiones `-` y guiones bajos `_`.

<Callout type="info">
Seguir estas reglas garantiza que tu skill se agregue correctamente y evita confusiones con las skills existentes.
</Callout>

## ¿Qué ocurre si un nombre de skill aparece como "ya está en uso"?

Al crear una nueva skill, el sistema verifica si el nombre ingresado entra en conflicto con skills existentes, incluidas las skills oficiales y las que ya hayas agregado.
Si se detecta un conflicto, aparecerá una ventana emergente que dirá:
> El nombre de la skill `/skill-name` ya está en uso. Cámbiale el nombre para evitar confusiones.

En ese momento, puedes ingresar un nuevo nombre para la skill y hacer clic en **Cambiar nombre y agregar**, o hacer clic en **Cancelar** para descartar la creación.

## ¿Qué pasa si no resuelvo un conflicto de nombres?

El sistema no permite agregar skills con nombres duplicados. Si no resuelves el conflicto de nombres, no podrás completar la creación de la skill.
