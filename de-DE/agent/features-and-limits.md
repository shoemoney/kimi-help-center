---
title: "Agent-Funktionen und -Einschränkungen"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Agent-Funktionen und -Einschränkungen

<SeoMeta
  title="Agent-Funktionen und -Einschränkungen – Kimi Help Center"
  description="Erfahren Sie mehr über die Fähigkeiten von Kimi Agent, Tipps zur Nutzung, Einschränkungen und Best Practices für optimale Ergebnisse."
/>

<Callout type="info">
**Kimi Agent** ist ein KI-gestützter Assistent, der komplexe Aufgaben mithilfe mehrstufiger Schlussfolgerungen und integrierter Tools eigenständig ausführt. Dieser Leitfaden erklärt Best Practices, Einschränkungen und häufige Fragen, damit Sie den Agent-Modus optimal nutzen können.
</Callout>

## Tipps zur Nutzung

**(1) Vor dem Einreichen einer Aufgabe**

Formulieren Sie Hintergrundinformationen und Rahmenbedingungen klar — etwa Projektkontext, Anwendungsfall und besondere Anforderungen — damit Kimi Ihre Absicht genauer versteht.

**(2) Während der Ausführung**

Kimi Agent arbeitet asynchron im Hintergrund. Wenn die Webseite eingefroren oder blockiert wirkt, **klicken Sie nicht auf „Stopp“** — dadurch wird die Ausführung der Aufgabe unterbrochen. Sie können die Seite verlassen; die Aufgabe läuft im Hintergrund weiter, und Sie erhalten eine Benachrichtigung, sobald sie abgeschlossen ist. Bei Aufgaben, die voraussichtlich länger dauern (z. B. Agent Swarm), haben Sie bitte etwas Geduld.

**(3) Website-Szenarien**

Agent kann Full-Stack-Inhalte erzeugen, einschließlich Frontend-Oberflächen, Backend-Services und Logik für persistente Speicherung. Wenn ein Projekt nicht wie erwartet läuft, liegt die Ursache meist beim Start der Sandbox, der Datenbankinitialisierung, der Auth-Konfiguration oder fehlenden Veröffentlichungsaktionen. Der Standard-Agent läuft in der Cloud und kann nicht direkt auf lokale Dateien oder Enterprise-Intranetsysteme zugreifen. Für den Zugriff auf lokale Dateien oder Intranets verwenden Sie Kimi Claw.

<Callout type="tip">
**Müssen Sie auf lokale Dateien zugreifen?** Verwenden Sie Kimi Claw für sicheren Zugriff auf lokale Dateien und Enterprise-Intranetsysteme. Weitere Informationen finden Sie in der [Kimi Claw-Dokumentation](/kimi-claw/overview).
</Callout>

**(4) Mehrstufige Gespräche und Aufgabenanpassungen**
Bei mehreren Dialog- und Überarbeitungsrunden kann der Agent einige frühere Details „vergessen“. Am besten legen Sie zuerst den Aufgabenrahmen und die wichtigsten Punkte fest und nehmen danach schrittweise Anpassungen vor.

**(5) Große Aufgaben aufteilen**
Teilen Sie große, komplexe Aufgaben in 2–3 Phasen auf und reichen Sie diese stapelweise bei Kimi ein, oder verwenden Sie Agent Swarm.

**(6) Einschränkungen bei Dateiausgaben**
Im Standard-Agent-Modus kann pro Aufgabe in der Regel nur eine Datei ausgegeben werden (z. B. ein Dokument oder eine Tabelle). Für mehrere Dateien (z. B. sowohl ein Word-Dokument als auch eine PPT) verwenden Sie Agent Swarm.

**(7) Kontextgrenzen und ausgewogene Ausgabe**
Wegen der Kontextgrenze großer Sprachmodelle von 256K Zeichen (ungefähr 40.000–50.000 chinesische Zeichen / ca. 100.000 englische Wörter) müssen beim Verarbeiten großer Dateimengen Eingabe- und Ausgabeumfang sorgfältig austariert werden.

<Callout type="warning">
**Hinweis zur Kontextgrenze**: Agent verwendet ein Kontextfenster von 256K Zeichen. Für optimale Ergebnisse sollten Sie den Kontext knapp halten und unnötige Dateien vermeiden.
</Callout>

## Wichtige Hinweise

<Callout type="warning">
**credit-Nutzung**: Agent-Aufgaben verbrauchen credits aus dem gemeinsamen Pool. Auch Kimi Code greift auf diesen gemeinsamen Pool zu, hat jedoch ein eigenes 5-Stunden-/wöchentliches rate limit, das nur für Kimi Code gilt. Jede Agent-Aufgabe verbraucht in der Regel 1 credit-Einheit. Ausführliche Informationen zu credits je Mitgliedschaftsstufe finden Sie unter [Credits & Abrechnung](/agent/quota-and-billing).

- 60–720 Agent-Aufgaben/Monat, abhängig von Ihrem Tarif
</Callout>

- **Ausführungszeit**: Im Agent-Modus dauert eine einzelne Aufgabe normalerweise 5–20 Minuten. Agent Swarm-Aufgaben können länger dauern. Sie können die Seite verlassen — klicken Sie nur nicht auf Stopp, da Sie sonst die Aufgabe unterbrechen.
- **credit-Nutzung**: Agent-Aufgaben verbrauchen credits aus dem gemeinsamen Pool, auf den auch Kimi Code zugreift (Kimi Code hat ein eigenes 5-Stunden-/wöchentliches rate limit).
- **Einfache Aufgaben**: Für einfache Fragen und Antworten empfiehlt sich der normale Chatmodus, da er schneller reagiert.

<Callout type="warning">
**Inhaltskonformität**: Agent-Funktionen unterliegen dem [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). Das Erzeugen verbotener Inhalte wird nicht unterstützt; das Einreichen verbotener Inhalte kann zur Sperrung des Dienstes führen.
</Callout>

## FAQ

**F: Was kann Agent?**

Agent deckt die folgenden Anforderungen durch mehrere Tool-Aufrufe ab:
- **Texterstellung und -bearbeitung**: Erstellen von Artikeln, Berichten, Dokumenten usw. mit Unterstützung verschiedener Schreibstile und Formate.
- **Webentwicklung**: Aufbau von Full-Stack-Projektoberflächen und -Services, einschließlich App-Oberflächendesign, Backend-Integration, Datenpersistenz und Datenvisualisierung.
- **Folienerstellung**: Spezielles webbasiertes PPT-Tool zum Erstellen vollständiger Präsentationen.
- **Programmierunterstützung**: Code schreiben und debuggen in mehreren Programmiersprachen.

**F: Warum funktioniert die mit Agent erstellte Website nicht?**

Ein vollständiges Projekt besteht typischerweise aus drei Teilen: Frontend-Oberfläche, Backend-Services und Datenspeicherung. Agent kann Full-Stack-Projektinhalte über alle drei Ebenen hinweg erzeugen. Wenn Ihr Projekt nicht wie erwartet läuft, liegt die Ursache meist beim Start der Sandbox, der Datenbankinitialisierung, der Auth-Konfiguration oder fehlenden Veröffentlichungsaktionen.

**F: Was liefert Agent als Ergebnis?**

- Vollständige Dateien zur Aufgabenausführung
- Bereitgestellte Projektvorschau und veröffentlichte Versionen
- Herunterladbares ZIP-Archiv (unter `/mnt/okcomputer/output/`)

**F: Wie lang ist der Kontext von Agent?**

Agent verwendet eine Kontextlänge von **256K Zeichen** (ungefähr 40.000–50.000 chinesische Zeichen / ca. 100.000 englische Wörter).

**F: Wie werden Agent-credits berechnet?**

Alle Mitgliedschaftsfunktionen, einschließlich Kimi Code, nutzen einen gemeinsamen credit-Pool. Jede Agent-Aufgabe zählt in der Regel als eine credit-Einheit.
