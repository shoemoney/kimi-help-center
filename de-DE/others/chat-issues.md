---
title: "Häufige Probleme im Kimi-Chat"
slug: "chat-issues"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Häufige Probleme im Kimi-Chat - Kimi Help Center"
  description="Probleme mit Kimi-Chats? Dieser Artikel fasst Schritte zur Fehlerbehebung bei häufigen Chat-Problemen zusammen, darunter abgebrochene Antworten, ungewöhnliche Inhalte und Ladefehler, damit Sie sie schnell beheben können."
/>

# Häufige Probleme im Kimi-Chat

## Nachrichten lassen sich nicht senden / roter Kreis erscheint?

Das kann folgende Ursachen haben:

- **Rate limit ausgelöst**: Kimi begrenzt die Anzahl der Unterhaltungen innerhalb bestimmter Zeitfenster. Wenn Sie zu häufig Nachrichten senden, kann vorübergehend keine weitere Interaktion möglich sein. Warten Sie 2–3 Stunden, bevor Sie es erneut versuchen, und achten Sie auf eine angemessene Nachrichtenfrequenz.
- **Schlechte Netzwerkverbindung**: Ein schwaches Signal oder eine instabile Verbindung kann verhindern, dass Nachrichten gesendet werden. Wechseln Sie in ein anderes Netzwerk und versuchen Sie es erneut.

## Unterhaltung überschreitet 200.000 Wörter?

Der Kontext einer einzelnen Unterhaltung in K2.6 umfasst etwa 128K Token (~200.000 Wörter). Sobald diese Grenze erreicht ist, kann das Modell keine neuen Inhalte mehr erfassen. Was Sie tun können, hängt davon ab, warum die Grenze erreicht wurde:

- **Eine einzelne von Ihnen gesendete Datei ist zu groß und erreicht die Grenze bereits in der ersten Runde**: Teilen Sie die Datei in kleinere Abschnitte auf und senden Sie sie stapelweise.
- **Eine mehrstufige Unterhaltung wächst nach und nach bis zur Grenze an**: Fassen Sie zunächst die bisherigen wichtigsten Ergebnisse zusammen (Sie können Kimi auch bitten, „zusammenzufassen und ein Übergabedokument zu erstellen“), und fügen Sie diese Zusammenfassung dann als Anfangskontext in eine neue Unterhaltung ein.

<Callout type="info">
**Tipps**:
- Grundsätzlich helfen Ihnen [Memory](/features/memory-space) und [Projekte](/features/project), diese Grenze zu vermeiden — Memory speichert wichtige Informationen automatisch, und ein Projekt hält Referenzdateien, Anweisungen und Memory zusammen, sodass jede neue Unterhaltung den Kontext übernimmt.
- Das Löschen früherer Nachrichten in derselben Unterhaltung gibt das Kontextfenster nicht frei — starten Sie stattdessen einfach eine neue Unterhaltung.
- Thinking verbraucht Token; um credits zu sparen, stellen Sie **Thinking-Stärke** auf **Standard**.
- Für sehr lange Dokumente bietet K3 einen Kontext mit 1M Token (verfügbar mit der höchsten Mitgliedschaftsstufe); wählen Sie beim Verfassen **Unterhaltungslänge: Extra lang**.
</Callout>

## Wird „Lass uns über etwas anderes sprechen“ angezeigt?

Dieser Hinweis bedeutet, dass der aktuelle Inhalt eine Sicherheitsrichtlinie ausgelöst hat und das Thema nicht fortgesetzt werden kann. Geben Sie einfach ein neues Thema ein, um die Unterhaltung fortzusetzen — ohne Wartezeit.

<Callout type="info">
Wenn Sie der Meinung sind, dass der Inhalt nicht gegen die Richtlinien verstoßen hat, klicken Sie auf „👎“, um Feedback zu senden und uns bei der Verbesserung unserer Sicherheitsrichtlinien zu helfen.
</Callout>

## Wird „Kimi ist ein bisschen müde“ angezeigt?

Das bedeutet, dass zu viele Nutzer online sind und die Rechenressourcen stark ausgelastet sind — ein rate limit zu Spitzenzeiten. Warten Sie 1–2 Minuten und versuchen Sie es erneut.

<Callout type="tip">
Um Wartezeiten zu verkürzen, können Sie ein Mitgliedschaftspaket abonnieren und bevorzugten Zugriff auf dedizierte Rechenressourcen erhalten.
</Callout>

## PPT/Word/Excel lässt sich nicht herunterladen?

Das Kimi-Chatfenster selbst erstellt keine herunterladbaren Office-Dateien:

| Dateityp | Wo erstellen |
|-----------|-------------------|
| **Slides** | Gehen Sie zu [Kimi Slides](https://www.kimi.com/slides) — unterstützt Online-Erstellung und Download |
| **Word/Excel** | Verwenden Sie den **Agent**-Modus |


## Wie lösche ich eine einzelne Unterhaltung?

Suchen Sie in der Kimi App oder in der Webversion die entsprechende Unterhaltung und tippen bzw. klicken Sie auf „Löschen“. Nach dem Löschen wird die Unterhaltung auf Ihrem Gerät nicht mehr angezeigt; die zugehörigen Daten werden gemäß Abschnitt 5 der [Kimi-Datenschutzrichtlinie](https://www.kimi.com/user/agreement/userPrivacy?version=v2) verarbeitet.

## Ist der Freigabelink nach dem Löschen einer Unterhaltung noch zugänglich?

Nein. Die Zugriffsberechtigung eines Freigabelinks ist direkt an den Status der Unterhaltung gekoppelt: Sobald die Unterhaltung gelöscht wird, verliert der erzeugte externe Freigabelink gleichzeitig seine Gültigkeit. Andere können über diesen Link nicht mehr auf die Inhalte zugreifen, und die Plattform behält keine zugängliche Kopie des Links.

## Was soll ich tun, wenn ich versehentlich vertrauliche Informationen hochgeladen habe?

Wir empfehlen, die betreffende Unterhaltung sofort im Client zu löschen. Wenn vertrauliche Informationen wie Personalausweise, Bankkarten oder Rechtsdokumente betroffen sind, können Sie sich nach dem Löschen über [support@moonshot.ai](mailto:support@moonshot.ai) an den Support wenden und in der Betreffzeile der E-Mail die Art der vertraulichen Informationen angeben (z. B. „Personalausweis“, „Bankkarte“ oder „Rechtsdokument“), damit wir Ihr Anliegen vorrangig bearbeiten können.

## Werden nach dem Löschen noch Daten aufbewahrt?

Gemäß den Anforderungen von Gesetzen und Vorschriften wie dem Cybersicherheitsgesetz muss die Plattform bestimmte Netzwerkprotokolle (z. B. Zeitpunkt von Vorgängen, Konto-Kennungen) für einen bestimmten Zeitraum aufbewahren. Diese dienen ausschließlich der Sicherheits- und Compliance-Prüfung sowie behördlichen Kontrollen und werden ohne Ihre Einwilligung nicht für andere Zwecke verwendet.

Wenn Sie Ihr Konto löschen und alle Daten entfernen möchten, lesen Sie bitte [Konto löschen & Daten entfernen](/others/account-deletion).
