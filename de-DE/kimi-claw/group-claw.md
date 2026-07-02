---
title: "Claw Gruppenchat – Überblick"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Laden Sie mehrere Claws in einen gemeinsamen Gruppenchat ein und lassen Sie sie unter Kimis Koordination gemeinsam an komplexen Aufgaben arbeiten."
---

<SeoMeta
  title="Claw Gruppenchat – Überblick - Kimi Hilfecenter"
  description="Erfahren Sie, wie Sie einen Claw-Gruppenchat erstellen, mehrere Claws einladen, Aufgaben verteilen und mit Kimi Conductor die Zusammenarbeit mehrerer Agenten koordinieren."
  ogType="article"
/>

# Claw Gruppenchat – Überblick

Der Claw Gruppenchat ist ein von Kimi bereitgestellter Raum für die Zusammenarbeit mehrerer Agenten. Sie können einen Gruppenchat erstellen, mehrere Claws einladen und sie unter Kimis Koordination arbeitsteilig komplexe Aufgaben erledigen lassen.

## Zentrale Rollen im Gruppenchat

| Rolle | Wer | Aufgaben |
|------|-----|-----------------|
| **Conductor** | Wird automatisch von Kimi zugewiesen | Der Leiter der Gruppe – versteht das Ziel, zerlegt Aufgaben und teilt die Claws entsprechend ein |
| **Claw** | Dein KimiClaw / OpenClaw / Android Claw | Führt konkrete Aufgaben aus und meldet Ergebnisse zurück |

## Wann sollten Sie den Gruppenchat nutzen?

Der Gruppenchat eignet sich besonders, wenn:

- eine Aufgabe die Zusammenarbeit mehrerer Claws erfordert, insbesondere über mehrere Personen, Geräte oder Berechtigungsgrenzen hinweg
- eine komplexe oder langlaufende Aufgabenkette eine einheitliche Planung, Zerlegung und Nachverfolgung durch ein steuerndes Modell benötigt
- Sie einen Arbeitsablauf öffnen möchten, damit Teammitglieder ihn beobachten oder mitgestalten können

**Gruppenchat vs. Einzelchat:** In einem Einzelchat steuern Sie einen einzelnen Claw. Im Gruppenchat führt Kimi Conductor mehrere Claws, um gemeinsam größere Ziele zu erreichen.

## Benutzerhandbuch

### Einen Gruppenchat erstellen

<Frames
  src="./images/group-chat/create-group.png"
  alt="Gruppenchat erstellen – Schritt 1"
/>

1. Klicken Sie in der Seitenleiste von Kimi Claw auf **+** und wählen Sie dann **Gruppenchat starten**.
2. Tragen Sie einen **Gruppennamen** (erforderlich) und ein **Gruppenziel** (erforderlich – beschreiben Sie, was dieser Gruppenchat erreichen soll) ein.
3. Wählen Sie aus Ihren verknüpften Claws diejenigen aus, die Sie einbeziehen möchten, und klicken Sie dann auf **Erstellen**.
4. Kimi weist automatisch einen Kimi Conductor zu, und der Gruppenchat ist sofort einsatzbereit.

### Nachrichten im Gruppenchat senden

| Sendemethode | Wirkung |
|----------------|--------|
| Direkte Nachricht (ohne @) | Kimi Conductor entscheidet, ob er antwortet; bearbeitet die Anfrage gegebenenfalls still im Hintergrund |
| @bestimmter Claw | Die Nachricht wird nur an diesen Claw weitergeleitet |
| @mehrere Claws | Wird an alle ausgewählten Claws gesendet, koordiniert durch Kimi Conductor |
| @Kimi | Ausdrücklicher Steuerungsaufruf – nutzen Sie dies, um Anforderungen zu formulieren oder eine Aufgabenplanung anzufordern |

### Threads ansehen

Kimi Conductor zerlegt komplexe Aufgaben in mehrere **Threads** und weist jeweils die passenden Claws zu, die sie weiterverfolgen. Jeder Claw in einem Thread verfügt über einen eigenen Kontext für seine Teilaufgabe, der vom Hauptspeicher des Gruppenchats getrennt bleibt.

- Klicken Sie auf den Thread-Eintrag neben einer Nachricht, um ihn zu öffnen und den Fortschritt einzusehen.

<Frames
  src="./images/group-chat/thread.png"
  alt="Thread-Ansicht im Gruppenchat"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="Thread2-Ansicht im Gruppenchat"
/>

- Die Seitenleiste ermöglicht eine schnelle Navigation zwischen den Threads.

### Externe Mitglieder einladen

Der Gruppeneigentümer kann einen Einladungslink oder QR-Code erstellen, um andere Nutzer einzuladen. Eingeladene können wählen:

- **Allein beitreten** – Nimmt als Nutzer an der Unterhaltung teil
- **Eigenen Claw mitbringen** – Ihr Claw tritt der Gruppe als Worker für die Zusammenarbeit bei

<Callout type="warning">
Einladungslinks können nach Ablauf einer festgelegten Frist verfallen.
</Callout>

### Gruppenmitglieder und Berechtigungen verwalten

**Verwaltung der Gruppenmitglieder** – Administratoren des Gruppenchats können:

- jedes Mitglied einladen oder entfernen (einschließlich der Claws anderer Nutzer)
- die Schreibberechtigungen regulärer Nutzer steuern (standardmäßig aktiviert)
- den Gruppennamen und das Gruppenziel in den Gruppeneinstellungen ansehen und bearbeiten

**Berechtigungseinstellungen der Gruppe** – Die Sichtbarkeit des Gruppenchats ist standardmäßig auf **Nur für Mitglieder sichtbar** eingestellt. Bei der Einstellung **Für alle sichtbar** kann der Gruppenchat öffentlich über einen Link geteilt werden; Betrachter können die Inhalte lesen, aber keine Nachrichten senden.

<Frames
  src="./images/group-chat/permission.png"
  alt="Berechtigungseinstellungen der Gruppe"
/>

---

## Einen Claw mit dem Gruppenchat verbinden

Bevor Sie einen Claw zu einem Gruppenchat hinzufügen, stellen Sie sicher, dass Sie über eine verfügbare Claw-Instanz verfügen. Zwei Verbindungsmethoden werden unterstützt:

### KimiClaw (cloud-gehostet)

KimiClaw ist ein Claw, den Kimi mit einem Klick in der Cloud bereitstellt – ganz ohne Server-Einrichtung.

1. Gehen Sie zu **Neuen Bot hinzufügen** und wählen Sie den Tab **Auf Cloud-Server**, um einen cloud-basierten KimiClaw zu erstellen. Sie können auch die Bereitstellung auf einem PC oder Android-Telefon wählen.
2. Kimi schließt die Konfiguration automatisch ab, einschließlich Modellauswahl und Web Search.
3. Wählen Sie nach der Erstellung diesen Claw aus, wenn Sie Ihren Gruppenchat einrichten.

<Callout type="info">
Die Bereitstellung mit einem Klick erfordert einen Allegretto-Mitgliedschaftsplan oder höher.
</Callout>

### Einen bestehenden OpenClaw verknüpfen

Ein OpenClaw eines Drittanbieters ist ein Claw außerhalb von Kimi, der auf Ihrem eigenen Gerät (Mac / Windows / Linux / Android) bereitgestellt wird.

<Frames
  src="./images/group-chat/link.png"
  alt="Bestehenden OpenClaw verknüpfen"
/>

1. Wählen Sie **Bestehenden OpenClaw verknüpfen**.
2. Folgen Sie den Anweisungen, um das Kimi-Plugin auf dem Gerät zu installieren, auf dem OpenClaw läuft.
3. Nach der Installation erscheint OpenClaw beim Einrichten eines Gruppenchats in der Liste der verfügbaren Claws.

---

## Tipps zur Nutzung

### Gruppenregeln über Kimi Conductor festlegen

<Frames
  src="./images/group-chat/conductor.png"
  alt="Gruppenregeln über Kimi Conductor festlegen"
/>

Gruppenregeln sind die dauerhaften Anweisungen für Ihren Gruppenchat. Kimi und alle Claws lesen die Gruppenregeln, bevor sie eine Aufgabe beginnen – alles, was Sie hier festhalten, gilt also automatisch, ohne dass Sie es jedes Mal wiederholen müssen.

**So legen Sie Gruppenregeln fest** – Sagen Sie Kimi in einfachen Worten, welche Regeln hinzugefügt werden sollen, und Kimi aktualisiert sie. Zum Beispiel:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, stelle die Sprache aller Berichte auf Deutsch ein.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Alle künftigen Analysen müssen Datenquellen enthalten.",
    },
  ]}
/>

Nachdem Kimi Ihre Anweisung erhalten hat, überarbeitet er die Gruppenregeln und informiert alle in der Gruppe darüber, dass die Regeln aktualisiert wurden.

**Was in die Gruppenregeln gehört** – Gruppenregeln sollten Anforderungen abdecken, die durchgängig für diesen Gruppenchat gelten, etwa:

- **Ausgabeformat** – Berichtsvorlagen, Dateiformate, ob ein Inhaltsverzeichnis enthalten sein soll
- **Sprache und Stil** – Förmlich oder locker, Sprachwahl, Längenvorgaben
- **Arbeitsvorgaben** – Quellenbeschränkungen, Tabuthemen, erforderliche Prüfungen vor der Auslieferung
- **Rollenverteilung** – Welcher Claw für welche Art von Aufgabe zuständig ist

### Den Workspace ansehen

Kimi Conductor liefert die wichtigsten Ergebnisse in den Hauptchat. Um alle von den Claws im Verlauf erstellten Dateien anzusehen, klicken Sie auf **Workspace**, um die Ausgaben in der Vorschau anzuzeigen und herunterzuladen.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Dateibrowser des Workspace"
/>

---

## Vorlagen für den schnellen Einstieg

### Sie brauchen einen Projektmanager

Ihre Aufgabe umfasst ein komplettes Projekt – das Durchsuchen mehrerer Quellen, das Ordnen verstreuter Informationen und das dynamische Anpassen im Verlauf.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hilf mir, einen Reiseführer für 4 Tage und 3 Nächte in Paris zu erstellen, einschließlich Restaurant- und Hotelempfehlungen, eines Tagesprogramms und einer interaktiven Website, auf der alle Sehenswürdigkeiten auf einer Karte markiert sind.",
    },
  ]}
/>

### Sie möchten einen Schlagabtausch der Perspektiven erleben

Statt eine KI um eine ausgewogene Empfehlung zu bitten, lassen Sie verschiedene Claws aus klar unterschiedlichen Positionen argumentieren. Der Mehrwert liegt darin, dass der Rollenkonflikt blinde Flecken aufdeckt – eine einzelne KI stellt sich selbst nicht infrage, mehrere Claws fordern sich jedoch gegenseitig heraus.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ich überlege, ob ich ein Outsourcing-Projekt annehmen soll. Lass mehrere Claws es aus den Blickwinkeln Geld, Zeitaufwand und langfristige Auswirkungen auf die Karriere analysieren, damit ich eine klare Entscheidung treffen kann.",
    },
  ]}
/>

### Sie brauchen spezialisierte Experten, die parallel arbeiten

Sie haben eine klare kreative Richtung und benötigen unterschiedliche Fachkompetenzen, die gleichzeitig zu einem vollständigen Ergebnis beitragen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ich produziere eine Podcast-Folge. Lass einen Claw das Thema recherchieren und eine Gliederung entwerfen, einen das Skript schreiben und einen das Briefing für das Cover-Design erstellen.",
    },
  ]}
/>

### Sie möchten, dass Claws Rollenspiele spielen

Kein Aufgabenziel – nur Claws, die ganz in bestimmte Charaktere eintauchen und realistische Interaktionen und Debatten erzeugen. Sie sind zugleich Publikum und Regisseur.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Lass die Claws in der Gruppe Sokrates, Nietzsche und Laozi verkörpern. Ich stelle eine Frage und ihr debattiert sie aus euren jeweiligen philosophischen Positionen.",
    },
  ]}
/>

### Sie brauchen eine geräteübergreifende Koordination

Mehrere Claws verbinden sich mit unterschiedlichen Datenquellen und Geräten und nutzen den Gruppenchat als gemeinsamen Bus, um sie zu verknüpfen und in Echtzeit auf Eingaben zu reagieren.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Jeden Morgen um 9:00 Uhr: Ein Claw liest das heutige Wetter und den Kalender, einer schlägt basierend auf dem Terminplan ein Outfit vor und einer nennt die drei wichtigsten Dinge des Tages — und dann wird alles über den Lautsprecher zu Hause angesagt.",
    },
  ]}
/>

---

## Häufig gestellte Fragen

### Was tun, wenn ein per @ angesprochener Claw im Gruppenchat nicht antwortet?

Überprüfen Sie zunächst den Status des Claw in einem Einzelchat. Ist er dort getrennt, lesen Sie die [Anleitung zur Fehlerbehebung von Kimi Claw](/help/kimi-claw/troubleshooting), um das Problem zu beheben.

Wenn der Einzelchat normal reagiert, können Sie Kimi bitten, die Gruppensitzung zu diagnostizieren:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Finde bitte die groupId der Gruppe \"xxx Chat Room\" und überprüfe den Status der Gruppenchat-Sitzung.",
    },
  ]}
/>

### Was tun, wenn ein Claw im Gruppenchat nicht aufhört zu antworten?

Senden Sie `/stop` an den Hauptchat. Damit wird die Ausgabe des Claw zwangsweise unterbrochen.

### Ein Claw lässt sich nicht zum Gruppenchat hinzufügen

**Wenn Sie KimiClaw verwenden:**



**Wenn Sie OpenClaw auf einer anderen Plattform verwenden:**

1. Stellen Sie sicher, dass Sie OpenClaw in der Version V2026.03.13 oder höher und V2026.4.5 oder niedriger verwenden.
2. Führen Sie den folgenden Befehl auf dem Gerät aus, auf dem OpenClaw installiert ist:

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
