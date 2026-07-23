---
title: "API-Preise"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="API-Preise – Kimi Hilfecenter"
  description="Die Abrechnung der Kimi API erfolgt nach Token-Verbrauch, mit Preisen je nach Modell und Funktion."
/>

# API-Preise

<Callout type="info">
Die Abrechnung der Kimi API erfolgt nach Token-Verbrauch, mit Preisen je nach Modell und Funktion.
</Callout>

## Grundlagen der Abrechnung

- **Abrechnung pro Token**: Bei jedem API-Aufruf werden Eingabe-Token und Ausgabe-Token separat berechnet
- **Token-Einheit**: 1M = 1.000.000 Token
- **Modellabhängige Preise**: Leistungsfähigere Modelle verursachen höhere Kosten pro Token — wählen Sie das Modell, das am besten zu Ihrem Anwendungsfall passt

## Abrechnung zusätzlicher Funktionen

| Funktion | Zusatzgebühr |
| --- | --- |
| **Web Search** | $0.004 pro Aufruf (unabhängig vom Token-Verbrauch) |

## Kontext-Caching

<Callout type="tip">
**Kontext-Caching** ermöglicht es Ihnen, häufig genutzte Kontextinhalte (z. B. System-Prompts und Referenzdokumente) zwischenzuspeichern. Token, die aus dem Cache bedient werden, werden zu einem reduzierten Satz berechnet und senken so die Kosten für wiederkehrenden Kontext.
</Callout>

Ausführliche Preise für Kontext-Caching finden Sie in der offiziellen Dokumentation.

## Preisdetails

Die vollständige Modellpreistabelle und die Abrechnungsregeln finden Sie hier:

Sie können [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat) aufrufen

## Tipps zur Kostenoptimierung

<Callout type="tip">
- Setzen Sie den Parameter `max_tokens` passend, um unnötig lange Ausgaben zu vermeiden
- Nutzen Sie Kontext-Caching für wiederkehrende System-Prompts und Kontexte
- Wählen Sie das passende Modell für die Komplexität der Aufgabe — verwenden Sie schlanke Modelle für einfache Aufgaben
- Straffen Sie Ihr Prompt-Design, um unnötige Eingabe-Token zu minimieren
</Callout>
