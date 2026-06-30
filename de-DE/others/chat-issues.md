---
title: "Häufige Probleme im Kimi-Chat"
slug: "chat-issues"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Häufige Probleme im Kimi-Chat - Kimi Hilfecenter"
  description="Mögliche Ursachen:"
/>

# Häufige Probleme im Kimi-Chat

## Nachrichten lassen sich nicht senden / ein roter Kreis erscheint?

Mögliche Ursachen:

- **Rate limit ausgelöst**: Kimi hat eine Begrenzung der Konversationen innerhalb bestimmter Zeitfenster. Wenn Sie zu häufig Nachrichten senden, kann eine weitere Interaktion blockiert werden. Warten Sie 2–3 Stunden, bevor Sie es erneut versuchen, und achten Sie auf Ihre Sendehäufigkeit.
- **Schlechte Netzwerkbedingungen**: Ein schwaches Signal oder eine instabile Verbindung kann das Senden von Nachrichten verhindern. Wechseln Sie zu einem anderen Netzwerk und versuchen Sie es erneut.

## Konversation überschreitet 200.000 Wörter?

Das Kontextlimit einer einzelnen Konversation liegt bei etwa 128K token (~200.000 Wörter). Sobald dieses Limit erreicht ist, kann das Modell keine neuen Eingaben mehr annehmen.

<Callout type="tip">
**Empfohlene Maßnahmen**:

1. **Eine neue Konversation starten**: Kopieren Sie die wichtigsten Schlussfolgerungen oder die Gliederung aus der ursprünglichen Konversation in eine neue, um fortzufahren.
2. **Ein Übergabedokument erstellen**: Bitten Sie Kimi, „zusammenzufassen und ein Übergabedokument zu erstellen“, und fügen Sie es dann als Ausgangskontext in eine neue Konversation ein – so sparen Sie token und bewahren gleichzeitig die Informationen.

**Hinweis**: Das Löschen von Nachrichten innerhalb derselben Konversation gibt das Kontextfenster **nicht** frei. Starten Sie stattdessen eine neue Konversation.
</Callout>

<Callout type="info">
Thinking-Modelle verbrauchen für das Schlussfolgern mehr token, wodurch das effektive Kontextlimit kleiner ausfällt. Wenn Sie mit langen Dokumenten arbeiten, sollten Sie K2 dem K2-Thinking vorziehen.
</Callout>

## „Lass uns über etwas anderes reden“ wird angezeigt?

Diese Meldung weist darauf hin, dass der aktuelle Inhalt eine Sicherheitsrichtlinie ausgelöst hat und das Thema nicht fortgesetzt werden kann. Geben Sie einfach ein neues Thema ein, um die Konversation fortzusetzen – ohne Wartezeit.

<Callout type="info">
Wenn Sie der Meinung sind, dass der Inhalt keinen Verstoß darstellt, klicken Sie auf „👎“, um Feedback zu geben und uns dabei zu helfen, unsere Sicherheitsrichtlinien zu verbessern.
</Callout>

## „Kimi ist etwas erschöpft“ wird angezeigt?

Das bedeutet, dass zu viele Nutzer gleichzeitig online sind und die Rechenressourcen stark ausgelastet sind – ein rate limit zu Stoßzeiten. Warten Sie 1–2 Minuten und versuchen Sie es erneut.

<Callout type="tip">
Um Wartezeiten zu verkürzen, können Sie ein Mitgliedschaftsabo abschließen und erhalten so bevorzugten Zugang zu dedizierten Rechenressourcen.
</Callout>

## PPT/Word/Excel lässt sich nicht herunterladen?

Das Kimi-Chatfenster selbst erzeugt keine herunterladbaren Office-Dateien:

| Dateityp | Wo erstellen |
|-----------|-------------------|
| **Folien** | Gehen Sie zu [Kimi Slides](https://www.kimi.com/slides) – unterstützt Online-Erstellung und Download |
| **Word/Excel** | Verwenden Sie den **Agent**-Modus |
