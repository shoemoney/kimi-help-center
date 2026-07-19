---
title: "Geplante Aufgaben"
slug: "scheduled-tasks"
order: 5
extract_headings: true
preview: true
preview_content: "Mit geplanten Aufgaben kann Kimi eine festgelegte Aufgabe automatisch zu einem von dir bestimmten Zeitpunkt ausführen — ideal für tägliche Briefings, wöchentliche Beobachtungen und regelmäßige Aufräumarbeiten. Verfügbar in Kimi und in der Kimi Work-Desktop-App."
---

<SeoMeta
  title="Geplante Aufgaben in Kimi verwenden – Kimi Help Center"
  description="Erfahre mehr über geplante Aufgaben in Kimi: Lass Kimi eine Aufgabe automatisch zu einem festgelegten Zeitpunkt ausführen — täglich, wöchentlich, monatlich oder einmalig, optional mit Ablaufdatum und kombinierbar mit Skills für anspruchsvollere Arbeiten. Ideal für tägliche Briefings, wöchentliche Branchenbeobachtung und regelmäßige Datenbereinigungen. Verfügbar in Kimi und in der Kimi Work-Desktop-App."
/>

# Geplante Aufgaben

Mit geplanten Aufgaben kann Kimi eine festgelegte Aufgabe automatisch zu dem von dir bestimmten Zeitpunkt ausführen, sodass du sie nicht jedes Mal manuell starten musst. Sie eignen sich besonders für regelmäßige, wiederkehrende Arbeiten — etwa tägliche Briefings, wöchentliche Branchenbeobachtung, wiederkehrende Datenbereinigungen und Ähnliches.

Geplante Aufgaben sind eine allgemeine Funktion und in **Kimi** sowie in der **Kimi Work-Desktop-App** verfügbar.

## Geplante Aufgabe erstellen

Es gibt zwei Wege:

- **Über den Einstiegspunkt**: Klicke in der Seitenleiste auf "Geplante Aufgabe erstellen" und fülle die Aufgabe im Dialog aus;
- **Aus einer Unterhaltung heraus**: Beschreibe in natürlicher Sprache, was geplant werden soll. Kimi erstellt dann eine geplante Aufgabe für dich und formuliert automatisch Titel, Zeitplan und Aufgabeninhalt.

Eine geplante Aufgabe enthält:

- **Titel**: fasst die Aufgabe zusammen, damit du sie in der Aufgabenliste leicht findest;
- **Zeitplan**: täglich, wöchentlich, monatlich oder ohne Wiederholung (einmalig);
- **Ablaufdatum**: du kannst festlegen, wann die Aufgabe abläuft (beim Erstellen standardmäßig ausgewählt);
- **Aufgabeninhalt**: ein Prompt, der beschreibt, was die Aufgabe tun soll. Zum geplanten Zeitpunkt führt Kimi diesen festen Prompt aus.

## Einen guten Aufgaben-Prompt schreiben

Ein guter Aufgaben-Prompt beantwortet drei Fragen auf einmal:

- **Wann**: wann er ausgeführt werden soll (ein bestimmtes Datum / eine tägliche Uhrzeit / ein Wochentag);
- **Ausgabeformat**: wie das Ergebnis aussehen soll (Kernpunkte, Tabelle, Vorlage, Wortzahl, Sprache);
- **Vorgaben**: was er nicht tun darf oder erfüllen muss (z. B. maximal 200 Wörter, nur Chinesisch, Risikohinweis einfügen, nur 3 Punkte ausgeben).

**Universelle Vorlage**: Um [Uhrzeit], erledige [Aufgabe], gib das Ergebnis als [Format] aus und beachte [Vorgaben].

Hier sind einige Beispiele, die du kopieren und anpassen kannst:

<CodePreview
  files={[
    {
      name: "market-news.txt",
      language: "text",
      content: "Fasse jeden Tag um 9:00 Uhr die neuesten Marktnachrichten in 3 Kernpunkten plus 1 Risikohinweis zusammen, auf Chinesisch und mit maximal 200 Wörtern.",
    },
    {
      name: "daily-report-reminder.txt",
      language: "text",
      content: "Erinnere mich in 1 Stunde daran, meinen heutigen Arbeitsbericht fertigzustellen, und füge die Berichtsvorlage an (vierteilige Struktur).",
    },
    {
      name: "bedtime-reminder.txt",
      language: "text",
      content: "Erinnere mich heute Abend um 22:30 Uhr daran: Computer ausschalten, mich waschen und mich bettfertig machen. Der Ton soll sanft sein.",
    },
  ]}
/>

## Geplante Aufgaben verwalten

Die **Aufgabenliste** zeigt alle deine geplanten Aufgaben (nach Zeit sortiert). Auf jeder Aufgabenkarte kannst du:

- die Aufgabe ein- oder ausschalten;
- weitere Aktionen ausführen: die Aufgabe finden, sie jetzt einmal ausführen, bearbeiten und löschen.

In einer Unterhaltung erscheint eine geplante Aufgabe als **Aufgabenkarte** mit Titel, Häufigkeit, nächstem Ausführungszeitpunkt und Inhalt — auch dort kannst du sie sofort ausführen, pausieren, bearbeiten oder löschen.

## Ausführung und Benachrichtigungen

- Zum geplanten Zeitpunkt führt Kimi den in der Aufgabe festgelegten Prompt aus;
- Jede Ausführung erzeugt eine Benachrichtigung, die als ungelesen markiert ist; du kannst das Ergebnis jeder Ausführung ansehen und zur zugehörigen Unterhaltung springen;
- Der Lesestatus wird zwischen Web und Mobile synchronisiert;
- Nach der Ausführung einer Aufgabe kannst du in der Ergebnisunterhaltung **ein Modell auswählen, um weitere Nachfragen zu stellen**, und "/" eingeben, um **Plugins und Skills aufzurufen**.

## Mit Skills kombinieren

Geplante Aufgaben lassen sich mit **Skills** kombinieren, um komplexere Arbeiten zu erledigen — insbesondere mit Kimis **Finanz-Skills** (Marktdaten, Ergebnisanalysen und mehr).

Bevor du einen Skill verwendest, solltest du ihn **zuerst installieren und testen**, um sicherzustellen, dass er wie erwartet funktioniert. Danach kannst du ihn in einer geplanten Aufgabe einsetzen.

## Ablauf

Beim Erstellen einer Aufgabe ist standardmäßig ein Ablaufdatum ausgewählt, damit veraltete Aufgaben nicht unnötig bestehen bleiben. Die Standardabläufe sind:

- Täglich: +7 Tage;
- Wöchentlich: +1 Monat;
- Monatlich: +3 Monate.

<Callout type="info">
Geplante Aufgaben, die lokal in der Kimi Work-Desktop-App ausgeführt werden, unterliegen nicht den oben genannten Ablaufregeln; lokale Aufgaben laufen nach ihrem Zyklus, solange die App geöffnet ist. Ausführungen, die verpasst werden, während die App geschlossen ist, werden später nicht nachgeholt.
</Callout>

## Quotas und Tarife

Bei geplanten Aufgaben ist die Anzahl der **gleichzeitig aktiven Aufgaben** begrenzt (nicht aber die Anzahl der Aufgaben, die du erstellen kannst). Die Zahl aktiver Aufgaben richtet sich nach deinem Mitgliedschaftstarif:

| Tarif | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Geplante Aufgaben | 2 | 6 | 15 | 20 | 25 |

- Wenn du das Aktivlimit erreicht hast und eine weitere Aufgabe erstellst, wird die neue Aufgabe **als inaktiv gespeichert**; du erhältst den Hinweis, ein Upgrade durchzuführen oder einige Aufgaben auszuschalten;
- Sinkt dein Aktivlimit (durch Tarif-Downgrade oder abgelaufene Vorteile), werden Aufgaben oberhalb des Limits automatisch pausiert.

Die aktuellen Quotas findest du auf der [Seite mit den Mitgliedschaftstarifen](/membership/membership-pricing).

<Callout type="tip">
**Tipp**: Bevor du eine Aufgabe planst, teste ihren Inhalt einmal in einer normalen Unterhaltung oder verwende "Jetzt einmal ausführen", um sie zu prüfen — stelle sicher, dass die Formulierung klar ist und das Ergebnis deinen Erwartungen entspricht, bevor du dich auf den Zeitplan verlässt. Wenn die Aufgabe von einem Skill abhängt, installiere und teste diesen Skill zuerst.
</Callout>

## FAQ

### Gibt es eine Begrenzung dafür, wie viele geplante Aufgaben ich erstellen kann?
Du kannst beliebig viele Aufgaben erstellen, aber die Anzahl der Aufgaben, die **gleichzeitig aktiv** sein können, richtet sich nach deinem Tarif. Wenn du das Aktivlimit überschreitest, wird eine neue Aufgabe als inaktiv gespeichert; du kannst ein Upgrade durchführen oder einige Aufgaben ausschalten, um sie zu aktivieren.

### Muss mein Computer oder die App geöffnet bleiben, damit Aufgaben ausgeführt werden?
In Kimi erstellte geplante Aufgaben laufen in der Cloud — du musst keinen Client geöffnet lassen. Aufgaben, die lokal in der Kimi Work-Desktop-App laufen, erfordern eine geöffnete App; Ausführungen, die verpasst werden, während sie geschlossen ist, werden später nicht nachgeholt.

### Kann ich ein Modell auswählen, wenn eine geplante Aufgabe ausgeführt wird?
Beim Erstellen einer Aufgabe kannst du kein Modell auswählen. Nach der Ausführung kannst du in der Ergebnisunterhaltung ein Modell auswählen, um weitere Nachfragen zu stellen, und "/" eingeben, um Plugins und Skills aufzurufen.

### Was passiert, wenn ich das Aktivlimit für Aufgaben erreiche?
Schalte Aufgaben aus, die du nicht mehr brauchst, oder führe ein Upgrade deines Tarifs durch, um ein höheres Aktivlimit zu erhalten. Details findest du auf der [Seite mit den Mitgliedschaftstarifen](/membership/membership-pricing).
