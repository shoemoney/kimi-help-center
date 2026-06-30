---
title: "Guthaben & Nutzung"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Guthaben \u0026 Nutzung - Kimi Hilfecenter"
  description="Die Kimi API bietet mehrere Möglichkeiten, dein Kontoguthaben und deine Nutzungsdetails einzusehen, damit du Verbrauch und Kosten im Blick behältst."
/>

# Guthaben & Nutzung

Die Kimi API bietet mehrere Möglichkeiten, dein Kontoguthaben und deine Nutzungsdetails einzusehen, damit du Verbrauch und Kosten im Blick behältst.

## Konsolen-Dashboard

Melde dich unter [platform.moonshot.ai](https://platform.moonshot.ai) an und rufe in der Konsole die Seite **fee-detail** (Abrechnungsdetails) auf, um Folgendes anzuzeigen:

- Aktuelles Kontoguthaben
- Tägliche Nutzungsaufschlüsselung
- Nutzung und Kosten pro Modell
- Historische Ausgabentrends

<Callout type="info">
Die tägliche Abrechnung wird **bis 7:00 Uhr am Folgetag** aktualisiert. Echtzeit-Nutzungsdaten können leicht verzögert sein.
</Callout>

> **Hinweis**: Die tägliche Abrechnung wird **bis 7:00 Uhr am Folgetag** aktualisiert. Echtzeit-Nutzungsdaten können leicht verzögert sein.

## Token-Schätzungs-API

Bevor du eine Anfrage sendest, kannst du die Token Estimation API verwenden, um abzuschätzen, wie viele Token der Aufruf verbrauchen wird – nützlich zur Kostenkontrolle.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Übergib dasselbe `messages`-Format wie bei einer Chat-Completion-Anfrage, und die API gibt die geschätzte Token-Anzahl zurück.

## Guthaben-Abfrage-API

Frage dein aktuelles Kontoguthaben direkt über die API ab:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Gib deinen API Key im Anfrage-Header an, um dein verfügbares Guthaben abzurufen.

## Tipps zur Nutzungsüberwachung

<Callout type="tip">
**Bewährte Vorgehensweisen**:
- Prüfe die Seite „fee-detail“ regelmäßig, um Ausgabentrends zu verfolgen
- Binde die Guthaben-Abfrage-API ein und richte Schwellenwerte für Guthaben-Benachrichtigungen ein
- Nutze vor kritischen Aufrufen die Token Estimation API, um die Kosten abzuschätzen
</Callout>
