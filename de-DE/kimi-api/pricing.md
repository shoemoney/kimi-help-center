---
title: "API-Preise"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="API-Preise - Kimi Hilfecenter"
  description="Die Abrechnung der Kimi API erfolgt nach Token-Verbrauch, mit modell- und funktionsspezifischen Preisen."
/>

# API-Preise

<Callout type="info">
Die Abrechnung der Kimi API erfolgt nach Token-Verbrauch, mit modell- und funktionsspezifischen Preisen.
</Callout>

## Grundlagen der Abrechnung

- **Abrechnung pro Token**: Jeder API-Aufruf wird für Eingabe-Token und Ausgabe-Token getrennt abgerechnet
- **Token-Einheit**: 1 Mio. = 1.000.000 Token
- **Modellspezifische Preise**: Leistungsfähigere Modelle haben höhere Kosten pro Token – wählen Sie das Modell, das am besten zu Ihrem Anwendungsfall passt

## Abrechnung zusätzlicher Funktionen

| Funktion | Zusätzliche Gebühr |
| --- | --- |
| **Web Search** | 0,004 $ pro Aufruf (unabhängig vom Token-Verbrauch) |

## Context Caching

<Callout type="tip">
**Context Caching** ermöglicht es Ihnen, häufig verwendete Kontextinhalte (etwa System-Prompts und Referenzdokumente) zwischenzuspeichern. Token, die den Cache treffen, werden zu einem vergünstigten Tarif abgerechnet, wodurch die Kosten für wiederkehrenden Kontext spürbar sinken.
</Callout>

Detaillierte Preise zum Context Caching finden Sie in der offiziellen Dokumentation.

## Preisdetails

Die vollständige Preistabelle der Modelle sowie die Abrechnungsregeln finden Sie hier:

Sie können zu [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat) gehen

## Tipps zur Kostenoptimierung

<Callout type="tip">
- Legen Sie den Parameter `max_tokens` passend fest, um unnötig lange Ausgaben zu vermeiden
- Nutzen Sie Context Caching für wiederkehrende System-Prompts und Kontexte
- Wählen Sie das passende Modell für die jeweilige Aufgabenkomplexität – für einfache Aufgaben genügen leichtgewichtige Modelle
- Gestalten Sie Ihre Prompts schlank, um unnötige Eingabe-Token zu vermeiden
</Callout>
