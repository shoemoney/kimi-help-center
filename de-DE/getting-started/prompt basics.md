---
title: "Grundlagen des Promptings"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Grundlagen des Promptings - Kimi Hilfecenter"
  description="Ein Prompt ist die textbasierte Anweisung, die Sie an Kimi senden – es kann eine Frage, eine Beschreibung, eine Reihe von Anforderungen oder sogar ein vollständiger Aufgabenauftrag sein. Kimi nutzt Ihren..."
/>

# Grundlagen des Promptings

<Callout type="info">
Ein Prompt ist die textbasierte Anweisung, die Sie an Kimi senden – es kann eine Frage, eine Beschreibung, eine Reihe von Anforderungen oder sogar ein vollständiger Aufgabenauftrag sein. Kimi nutzt Ihren Prompt, um Ihre Absicht zu verstehen, eine Antwort zu strukturieren und Aufgaben auszuführen.

Kurz gesagt: **Wie Sie fragen, bestimmt, wie Kimi antwortet.** Ein klarer, präziser Prompt führt fast immer zu einer treffenderen und wertvolleren Antwort.
</Callout>

## Vier Kernelemente eines guten Prompts

### 1. Rolle und Kontext festlegen

Wenn Sie Kimi mitteilen, wer Sie sind und in welcher Situation Sie sich befinden, kann es die passende Tiefe und den richtigen Ton wählen.

| Vager Prompt | Besserer Prompt |
|-------------|--------------|
| Schreibe einen Artikel über KI | Ich bin Redakteur bei einem Tech-Medium. Ich brauche einen 2.000 Wörter umfassenden, erklärenden KI-Artikel für ein breites Publikum, geschrieben in einem zugänglichen, fesselnden Stil |
| Hilf mir, Daten zu analysieren | Ich bin Marktanalyst. Bitte analysiere die Conversion-Raten nach Kanal in dieser Excel-Datei mit Fokus auf die Veränderungen zum Vormonat |

### 2. Die Aufgabe konkret beschreiben

Je genauer Ihre Beschreibung, desto weniger Überarbeitungsrunden brauchen Sie. Eine gute Aufgabenbeschreibung umfasst in der Regel:

- **Was zu tun ist**: eine klare Handlung (analysieren, zusammenfassen, übersetzen, generieren, vergleichen …)
- **Ausgabeformat**: Tabelle, Liste, Absatz, Code, Markdown …
- **Umfang und Vorgaben**: Wortzahl, Anzahl der Punkte, Zeitraum, geografischer Bereich …
- **Qualitätsanforderungen**: akademisch, locker, knapp, ausführlich …

<ComparisonBlock
  wrong={"Fasse diesen Artikel zusammen"}
  correct={"Fasse diesen Artikel in 3 Stichpunkten zusammen, jeweils höchstens 50 Wörter, auf Englisch"}
/>

### 3. Beispiele oder Referenzen bereitstellen

Wenn Sie konkrete Formatvorstellungen haben, ist es äußerst wirksam, Kimi ein Beispiel (Few-Shot) zu geben:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Please organize the meeting notes in this format:\n\nMeeting Topic: xxx\nAttendees: xxx\nKey Decisions:\nxxx\nxxxAction Items:\n[ ] xxx (Owner: xxx, Deadline: xxx)",
    },
  ]}
/>

### 4. Komplexe Aufgaben in Schritte zerlegen
Zerlegen Sie komplexe Aufgaben in kleinere Schritte und führen Sie Kimi nacheinander durch sie hindurch:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I need a competitive analysis report. Please follow these steps:\nList the top 3 domestic competitors and their core features\nCompare their pricing strategies\nAnalyze each product's strengths and weaknesses\nProvide differentiation recommendations for our product",
    },
  ]}
/>

## Praktische Tipps
### Nachfragen und iterieren
Mit der ersten Antwort nicht zufrieden? Fragen Sie einfach nach – Sie müssen nicht den gesamten Kontext wiederholen:
- „Bitte vertiefe Punkt 2“
- „Formuliere den Ton förmlicher“
- „Ergänze Datenquellen“
- „Analysiere noch einmal aus einem anderen Blickwinkel“
### Dateien und Links nutzen
Kimi unterstützt das Hochladen von PDFs, Word-Dokumenten, Excel-Dateien, Bildern und mehr. Sie können auch URLs direkt einfügen. Die Kombination von Dateien mit Ihrem Prompt steigert die Effizienz enorm:
| Aufgabe | Beispiel-Prompt |
|------|---------------|
| PDF zusammenfassen | „Fasse die wichtigsten Punkte dieses PDFs zusammen“ |
| Daten analysieren | „Analysiere die Verkaufstrends anhand dieser Excel-Daten“ |
| Aus URL extrahieren | „Lies den Artikel unter diesem Link und arbeite die wichtigsten Erkenntnisse heraus“ |

### Das Ausgabeformat vorgeben
Sagen Sie Kimi genau, welches Format Sie wünschen:
| Bedarf | Beispiel-Prompt |
|------|---------------|
| Vergleichstabelle | „Vergleiche die Vor- und Nachteile von A und B in einer Tabelle“ |
| Code-Ausgabe | „Setze das in Python mit Kommentaren um“ |
| Strukturierte Liste | „Ordne es als nummerierte Liste an, jeder Punkt unter 20 Wörtern“ |
| Markdown | „Gib es im Markdown-Format mit Überschriftenhierarchie aus“ |

### Memory für dauerhafte Vorlieben nutzen
Wenn Sie wiederkehrende Vorlieben und Anforderungen haben, nutzen Sie Kimis **Memory**-Funktion, um sie langfristig zu speichern:
- „Merke dir, dass ich Frontend-Entwickler bin und den React-Stack bevorzuge“
- „Antworte immer auf Englisch im Markdown-Format“
- „Füge Codebeispiele hinzu, wenn du technische Fragen beantwortest“

<Callout type="tip">
So müssen Sie sich nicht wiederholen – Kimi wendet diese Vorlieben in künftigen Gesprächen automatisch an.
</Callout>

## Häufige Fehler
| Fehler | Besserer Ansatz |
|---------|----------------|
| Mehrere unzusammenhängende Aufgaben in eine Nachricht packen | Starten Sie für jede eigenständige Aufgabe eine neue Sitzung, um den Kontext sauber zu halten |
| Zu vage Prompts (z. B. „schreib mir was“) | Geben Sie an, was geschrieben werden soll, für wen, in welchem Stil und wie lang |
| Beim ersten Versuch perfekte Ergebnisse erwarten | Erstellen Sie zunächst einen Entwurf und verfeinern Sie ihn dann durch Nachfragen |
| KI-Ausgaben nicht auf Fakten prüfen | Überprüfen Sie stets Daten, Zahlen und sachliche Aussagen |

## Vorlagen für den schnellen Einstieg
Hier finden Sie einige sofort einsetzbare Prompt-Vorlagen – kopieren, anpassen, loslegen:
**Schreiben**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Write a [article type] about [topic] for [target audience], approximately [xxx] words.\nRequirements: [style/format/focus areas]",
    },
  ]}
/>

**Analyse**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analyze [subject], focusing on [key dimensions].\nOutput format: [table/chart/report]\nInclude conclusions and recommendations.",
    },
  ]}
/>

**Übersetzung**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Translate the following into [target language], maintaining a [academic/conversational/business] tone.\nInclude the original term in parentheses for domain-specific terminology.",
    },
  ]}
/>

<Callout type="info">
Wenn Sie diese Kernkonzepte und Techniken beherrschen, arbeiten Sie weitaus effektiver mit Kimi zusammen – und machen aus KI ein echtes Werkzeug für mehr Produktivität.
</Callout>
