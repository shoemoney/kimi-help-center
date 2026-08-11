---
title: "Widgets"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Work Widgets - Kimi Hilfecenter"
  description="Erfahren Sie mehr über Kimi Work Widgets: interaktive Seiten, die das Modell direkt in einem Chat generiert. Binden Sie eine Widget Task, um ein Live Widget zu erstellen, das sich laufend aktualisiert, und speichern Sie Widgets in Ihrem Dashboard."
/>

# Widgets

Ein Widget ist eine interaktive Seite, die vom Modell generiert und sofort in einem Chat dargestellt wird. Sie müssen keine expliziten Anweisungen zu Ergebnisformaten geben — das Modell erstellt ein Widget, wenn es zum Szenario passt (zum Beispiel eine Karte anzeigen, eine E-Mail entwerfen, ein Rezept zusammenstellen oder Daten visualisieren), und hilft Ihnen so, die Antwort schneller und intuitiver zu verstehen.

Widgets können sich mit lokalen Daten oder externen Plugins verbinden, um kontinuierlich aktualisiert zu werden, und lassen sich zur langfristigen Anzeige und Verwaltung in Ihrem [Dashboard](/kimi-work/dashboard) speichern.

## Ein Widget generieren

1. Beschreiben Sie in einem Chat in natürlicher Sprache, was Sie benötigen, zum Beispiel:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Erstelle mir ein Widget mit einer täglichen Zusammenfassung der US-Tech-Nachrichten, aktualisiert jeden Tag um 9 Uhr",
    },
  ]}
/>

2. Während der Generierung können Sie zusehen, wie die Widget-Seite Schritt für Schritt entsteht;
3. Sobald es generiert ist, kann das Widget direkt im Chat verwendet werden.

## Widget Tasks und Live Widgets

- **Widget Task**: Eine Aufgabe, die automatisch ausgeführt wird, wenn bestimmte Bedingungen erfüllt sind — sie kann zeitgesteuert oder durch ein Ereignis ausgelöst werden.
- **Live Widget**: Ein Widget, das an eine Widget Task gebunden ist und dessen Inhalt sich mit jeder Ausführung der Aufgabe automatisch aktualisiert. Sobald beispielsweise das Widget „Tägliche US-Tech-Nachrichten“ an eine Aufgabe gebunden ist, die jeden Morgen läuft, wird sein Inhalt jeden Tag automatisch aktualisiert.

<Callout type="info">
Es gibt ein Limit dafür, wie viele Widget Tasks gleichzeitig laufen können; dieses variiert je nach Tarif. Wenn Sie das Limit erreichen, pausieren Sie einige Aufgaben auf der Dashboard-Seite, bevor Sie neue erstellen.
</Callout>

## Im Dashboard speichern

Nachdem ein Widget generiert wurde, fahren Sie mit dem Mauszeiger darüber und wählen „Save to Dashboard“, um es in einem Dashboard zu speichern. Ein Widget kann gleichzeitig in mehreren Dashboards vorhanden sein.

Im Dashboard können Sie außerdem die an ein Live Widget gebundene Aufgabe ansehen, sie ein- oder ausschalten und die 10 letzten Ausführungen überprüfen. Siehe [Dashboard](/kimi-work/dashboard).
