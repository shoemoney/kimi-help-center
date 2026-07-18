---
title: "Skills im Agent-Modus verwenden"
slug: "use-skills-in-agent"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Skills im Agent-Modus verwenden - Kimi Hilfecenter"
  description="Erfahren Sie, wie Sie Skills aufrufen, eigene Skills erstellen, empfohlene Skills entdecken und die Fähigkeiten von Kimi im Agent-Modus erweitern."
  ogType="article"
/>

# Skills im Agent-Modus verwenden

## Wie ruft man Skills auf?

Im Eingabefeld des Kimi Agent-Modus gibt es drei Möglichkeiten, Skills aufzurufen:

**Methode 1: Den Befehl `/` verwenden**

Geben Sie `/` im Eingabefeld ein, um die Skill-Liste aufzurufen. Klicken Sie auf einen Skill-Namen, um ihn einzufügen. Sie können auch Stichwörter nach dem `/` eingeben, um die Liste zu filtern.

**Methode 2: Das Menü „➕“ verwenden**

Klicken Sie auf die Schaltfläche **➕** neben dem Eingabefeld. Wählen Sie einen Skill aus dem Menü aus, und der Skill-Name wird als Text in das Eingabefeld eingefügt.

<Frames
  src="./images/skills/加号-en.png"
  alt="Skills über das Plus-Menü aufrufen"
/>

**Methode 3: Kimi entscheiden lassen**

Beschreiben Sie einfach Ihr Anliegen. Kimi erkennt anhand des Aufgabeninhalts automatisch den passendsten Skill und löst ihn aus.

### Beispiel: Mit Skills einen SEO-Analysebericht erstellen

Angenommen, Sie sind Content-Manager und möchten die SEO-Leistung Ihrer Website analysieren:

1. Geben Sie `/` im Eingabefeld ein, suchen und wählen Sie den Skill `seo-analyzer` aus.
2. Geben Sie weiter ein: `Bitte analysiere die SEO-Leistung von https://help.com/zh-cn/help und liste die wichtigsten Probleme sowie Optimierungsvorschläge auf.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="SEO-Analyse"
/>

3. Nach dem Absenden recherchiert, strukturiert und erstellt Kimi automatisch einen übersichtlichen Bericht gemäß dem SEO-Analyse-Workflow.

Sie müssen Kimi nicht erklären, wie die Analyse durchzuführen ist – der Workflow ist bereits im Skill definiert.

## Skills entdecken und verwalten

### Kimis Empfehlungen

Kimi bietet eine Reihe sofort einsatzbereiter empfohlener Skills, die sich mit einem Klick hinzufügen lassen:

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Empfohlene Skills"
/>

## Skills anpassen

Wenn die von Kimi empfohlenen Skills Ihren Anforderungen nicht genügen, können Sie eigene Skills erstellen, die genau auf Ihren Workflow zugeschnitten sind.

**Wann sollten Sie einen eigenen Skill erstellen?**

- Sie haben eine wiederkehrende Aufgabe, die immer wieder ausgeführt werden muss (z. B. wöchentliche Wettbewerbsberichte).
- Sie möchten, dass Kimi Inhalte im spezifischen Format Ihres Unternehmens ausgibt.
- Sie haben bestimmte Arbeitsmethoden, denen Kimi direkt folgen soll.

Ein guter Skill sollte eine Sache tun und diese gut. Versuchen Sie nicht, alle Anforderungen in einen einzigen Skill zu pressen.

### Variante 1: Dokument zu Skill

Wenn Sie bereits fertige Vorlagen, Standarddokumente oder Beispieldateien haben, können Sie diese direkt hochladen und Kimi daraus den entsprechenden Skill lernen und generieren lassen.

1. Wählen Sie im Bereich **Skills** die Option **Office-Dokument zu Skill** aus.
2. Klicken Sie auf den Upload-Bereich oder ziehen Sie Dateien hinein. Unterstützte Formate: `docx`, `xlsx`, `pdf`, `pptx` und Dokument-Screenshots. Maximal 3 Dateien pro Upload, jede höchstens 100 MB.

<Frames
  src="./images/skills/document.png"
  alt="Dokumente hochladen, um Skills zu generieren"
/>

3. Geben Sie die Skill-Beschreibung ein und teilen Sie Kimi mit, was dieser Skill leisten soll. Zum Beispiel: „Hilf mir, die wöchentlichen Verkaufsdaten im Stil und Format dieser Vorlage aufzubereiten.“
4. Klicken Sie auf **Skill erstellen**.

### Variante 2: Mit Kimi erstellen

Wenn Sie keine fertigen Dokumente haben, können Sie Ihre Anforderungen direkt im Dialog beschreiben, und Kimi führt Sie Schritt für Schritt durch die Erstellung des Skills.

Geben Sie `/skill-creator` im Eingabefeld ein und beschreiben Sie anschließend, welchen Skill Sie erstellen möchten. Kimi hilft Ihnen, die Anforderungen zu einem vollständigen Skill zusammenzufassen.

<Frames
  src="./images/skills/create-skill-en.png"
  alt="Skills im Dialog erstellen"
/>

### Vorhandene Skills verwalten

Wechseln Sie im Bereich **Skills** zur Registerkarte **Eigene Skills**, um die von Ihnen erstellten Skills zu bearbeiten, Dokumente zu aktualisieren oder Skills zu löschen.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Eigene Skills verwalten"
/>

<Callout type="info">
Skills werden im Agent-Modus und in Kimi Claw unterstützt. Skills mit dem Suffix `swarm` sind nur in Swarm-Szenarien (Agent-Cluster) verfügbar und werden in anderen Kontexten nicht angezeigt.
</Callout>

## Wirksame Skill-Beschreibungen verfassen

Kimi nutzt die Skill-Beschreibung, um zu bestimmen, „wann dieser Skill einzusetzen ist“. Je klarer Ihre Beschreibung, desto treffsicherer wird der Skill ausgelöst.

Eine vollständige Skill-Beschreibung sollte Folgendes enthalten:
- Die Kernfunktion des Skills.
- Für welche Szenarien er geeignet ist.
- Auslösewörter, auf die er reagiert.
- Das Erkennen indirekt formulierter Anforderungen.

<ComparisonBlock
  wrong={"Nutzern helfen, Skills zu suchen und zu entdecken."}
  correct={"Nutzern helfen, Skills zu suchen und zu entdecken. Wird verwendet, wenn Nutzer ausdrücklich einen bestimmten Typ von Skill finden möchten oder ein Problem beschreiben und auf Skill-Empfehlungen hoffen. Zu den Auslösewörtern zählen “Skills finden”, “Skills suchen”, “Gibt es einen Skill, der X kann?” usw."}
/>
