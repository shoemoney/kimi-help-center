---
title: "Modellfähigkeiten"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="Modellfähigkeiten - Kimi Hilfecenter"
  description="Nachfolgend finden Sie häufig gestellte Fragen zu den Modellfähigkeiten der Kimi API."
/>

# Modellfähigkeiten

Nachfolgend finden Sie häufig gestellte Fragen zu den Modellfähigkeiten der Kimi API.

## Wird der JSON-Modus unterstützt?

Ja. Die Kimi API bietet einen JSON Mode, der die Modellausgabe auf gültiges JSON beschränkt. So gehen Sie vor:

- Setzen Sie in Ihrer Anfrage den Parameter `response_format` auf `{"type": "json_object"}`.
- Weisen Sie das Modell außerdem in Ihrem Prompt ausdrücklich an, JSON zurückzugeben, und beschreiben Sie die erwartete Struktur.
- Im JSON Mode gibt das Modell garantiert eine parsebare JSON-Zeichenkette aus.

## Wird das Feintuning von Modellen unterstützt?

Die Kimi API **unterstützt derzeit kein** vom Nutzer initiiertes Feintuning von Modellen. Bei Bedarf an individuellen Modellen wenden Sie sich über [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) an das Vertriebsteam, um sich über Anpassungsmöglichkeiten für Unternehmen zu informieren.

## Wird OCR unterstützt?

Die Vision-Modelle der Kimi API verfügen über Fähigkeiten zum Bildverständnis und können Text in Bildern erkennen, wodurch OCR-ähnliche Ergebnisse erzielt werden:

- Unterstützt die Erkennung von Text in Englisch, Chinesisch und zahlreichen weiteren Sprachen.
- Kann gedruckten Text sowie teilweise handschriftlichen Text erkennen.
- Jedes Bild wird pauschal mit 1.024 Token abgerechnet.
- Über die reine Texterkennung hinaus können die Modelle auch Tabellen, Diagramme und andere strukturierte Inhalte in Bildern interpretieren.

## Werden TTS (Text-to-Speech) und ASR (Spracherkennung) unterstützt?

Die Kimi API **unterstützt derzeit weder** TTS noch ASR. Für sprachbezogene Funktionen können Sie einen Drittanbieter-Sprachdienst mit der Kimi API kombinieren. Verfolgen Sie die Ankündigungen der Plattform, um über künftige Funktionsupdates informiert zu bleiben.
