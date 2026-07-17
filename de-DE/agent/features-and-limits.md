---
title: "Agent: Funktionen und Einschränkungen"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Agent: Funktionen und Einschränkungen

<SeoMeta
  title="Agent: Funktionen & Einschränkungen - Kimi Hilfecenter"
  description="Erfahren Sie mehr über die Fähigkeiten von Kimi Agent, nützliche Tipps, Einschränkungen und bewährte Methoden für optimale Ergebnisse."
/>

<Callout type="info">
**Kimi Agent** ist ein KI-gestützter Assistent, der komplexe Aufgaben eigenständig durch mehrstufiges Denken und die Einbindung von Werkzeugen erledigt. Dieser Leitfaden behandelt bewährte Methoden, Einschränkungen und häufige Fragen, damit Sie den Agent-Modus optimal nutzen können.
</Callout>

## Nützliche Tipps

**(1) Vor dem Absenden einer Aufgabe**

Nennen Sie Hintergrundinformationen und Rahmenbedingungen klar – etwa den Projektkontext, den Anwendungsfall und besondere Anforderungen –, damit Kimi Ihre Absicht genauer erfassen kann.

**(2) Während der Ausführung**

Kimi Agent läuft asynchron im Hintergrund. Wenn die Webseite eingefroren oder blockiert wirkt, **klicken Sie nicht auf „Stopp“** – dadurch wird die Aufgabenausführung abgebrochen. Sie können die Seite verlassen; die Aufgabe läuft im Hintergrund weiter, und Sie erhalten nach Abschluss eine Benachrichtigung. Bei Aufgaben, die voraussichtlich länger dauern (z. B. Agent Swarm), haben Sie bitte etwas Geduld.

**(3) Website-Szenarien**

Agent kann vollständige Full-Stack-Inhalte erzeugen, einschließlich Frontend-Oberflächen, Backend-Diensten und Logik zur dauerhaften Datenspeicherung. Läuft ein Projekt nicht wie erwartet, liegt das meist am Sandbox-Start, an der Datenbankinitialisierung, an der Authentifizierungskonfiguration oder an fehlenden Veröffentlichungsschritten. Der Standard-Agent läuft in der Cloud und kann nicht direkt auf lokale Dateien oder Intranetsysteme von Unternehmen zugreifen. Für den Zugriff auf lokale Dateien oder das Intranet verwenden Sie Kimi Claw.

<Callout type="tip">
**Müssen Sie auf lokale Dateien zugreifen?** Nutzen Sie Kimi Claw für den sicheren Zugriff auf lokale Dateien und Intranetsysteme von Unternehmen. Mehr dazu finden Sie in der [Dokumentation zu Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Dialoge über mehrere Runden und Aufgabenanpassungen**
Über mehrere Dialogrunden und Überarbeitungen hinweg kann der Agent manche frühen Details „vergessen“. Am besten legen Sie zunächst das Aufgabengerüst und die Kernpunkte fest und nehmen anschließend schrittweise Anpassungen vor.

**(5) Aufteilung großer Aufgaben**
Große, komplexe Aufgaben unterteilen Sie am besten in 2–3 Phasen und reichen sie Kimi nach und nach ein – oder Sie nutzen Agent Swarm.

**(6) Einschränkungen bei der Dateiausgabe**
Im Standard-Agent-Modus kann pro Aufgabe in der Regel nur eine Datei ausgegeben werden (z. B. ein Dokument oder eine Tabelle). Für mehrere Dateien (z. B. ein Word-Dokument und eine PPT) verwenden Sie Agent Swarm.

**(7) Kontextgrenzen und Ausgewogenheit der Ausgabe**
Aufgrund der Kontextgrenze großer Sprachmodelle von 256K Zeichen (etwa 40.000–50.000 chinesische Zeichen / ca. 100.000 englische Wörter) erfordert die Verarbeitung großer Dateimengen ein ausgewogenes Verhältnis zwischen Ein- und Ausgabevolumen.

<Callout type="warning">
**Hinweis zur Kontextgrenze**: Agent nutzt ein Kontextfenster von 256K Zeichen. Für optimale Ergebnisse geben Sie einen knappen Kontext an und überlasten Sie ihn nicht mit unnötigen Dateien.
</Callout>

## Wichtige Hinweise

<Callout type="warning">
**Credit-Nutzung**: Agent-Aufgaben verbrauchen Credits aus dem gemeinsamen Kontingent (weitere Mitgliedschaftsfunktionen). Kimi Code nutzt ein separates Credits-Kontingent. Jede Agent-Aufgabe verbraucht in der Regel 1 Credit-Einheit. Ausführliche Informationen zu den Credits nach Mitgliedschaftsstufe finden Sie unter [Credits & Abrechnung](/agent/quota-and-billing).

- Kostenlose Stufe: 6 Agent-Aufgaben/Monat
- Kostenpflichtige Stufen: 60–720 Agent-Aufgaben/Monat je nach Tarif
</Callout>

- **Ausführungsdauer**: Im Agent-Modus dauert eine einzelne Aufgabe in der Regel 5–20 Minuten. Aufgaben mit Agent Swarm können länger dauern. Sie können die Seite verlassen – klicken Sie nur nicht auf „Stopp“, um die Aufgabe nicht abzubrechen.
- **Credit-Nutzung**: Agent-Aufgaben verbrauchen Credits aus dem gemeinsamen Kontingent. Kimi Code nutzt ein separates Credits-Kontingent.
- **Einfache Aufgaben**: Für einfache Fragen und Antworten empfiehlt sich der Standard-Chat-Modus, da er schneller antwortet.

<Callout type="warning">
**Inhaltliche Konformität**: Die Agent-Funktionen unterliegen dem [Kimi Nutzungsvereinbarung](https://www.kimi.com/user/agreement/modelUse?version=v2). Das Erzeugen unzulässiger Inhalte wird nicht unterstützt; das Einreichen unzulässiger Inhalte kann zur Sperrung des Dienstes führen.
</Callout>

## Häufige Fragen

**F: Was kann Agent?**

Agent erfüllt die folgenden Anforderungen durch mehrere Werkzeugaufrufe:
- **Texterstellung und -bearbeitung**: Erstellen von Artikeln, Berichten, Dokumenten usw. mit Unterstützung verschiedener Schreibstile und Formate.
- **Webentwicklung**: Aufbau von Full-Stack-Projektoberflächen und -diensten, einschließlich App-Oberflächendesign, Backend-Integration, dauerhafter Datenspeicherung und Datenvisualisierung.
- **Folienerstellung**: Spezielles webbasiertes PPT-Werkzeug zum Erstellen vollständiger Präsentationen.
- **Programmierhilfe**: Schreiben und Debuggen von Code in mehreren Programmiersprachen.

**F: Warum funktioniert die von Agent erstellte Website nicht?**

Ein vollständiges Projekt besteht in der Regel aus drei Teilen: Frontend-Oberfläche, Backend-Dienste und Datenspeicherung. Agent kann Full-Stack-Inhalte über alle drei Ebenen hinweg erzeugen. Läuft Ihr Projekt nicht wie erwartet, liegt das meist am Sandbox-Start, an der Datenbankinitialisierung, an der Authentifizierungskonfiguration oder an fehlenden Veröffentlichungsschritten.

**F: Was sind die Ergebnisse von Agent?**

- Vollständige Dateien der Aufgabenausführung
- Bereitgestellte Projektvorschau und veröffentlichte Versionen
- Herunterladbares Zip-Archiv (zu finden unter `/mnt/okcomputer/output/`)

**F: Wie groß ist die Kontextlänge von Agent?**

Agent nutzt eine Kontextlänge von **256K Zeichen** (etwa 40.000–50.000 chinesische Zeichen / ca. 100.000 englische Wörter).

**F: Wie wird das Credits von Agent berechnet?**

Agent, PPT und weitere Mitgliedschaftsfunktionen teilen sich ein Credits-Kontingent. Kimi Code nutzt ein separates Credits-Kontingent. Jede Agent-Aufgabe zählt in der Regel als eine Credit-Einheit.
