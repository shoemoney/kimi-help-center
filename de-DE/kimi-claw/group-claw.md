---
title: "Claw Gruppenchat – Überblick"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Lade mehrere Claws in einen gemeinsamen Gruppenchat ein und lass sie unter Kimis Koordination gemeinsam an komplexen Aufgaben arbeiten."
---

<SeoMeta
  title="Claw Gruppenchat – Überblick - Kimi Help Center"
  description="Erfahre, wie du einen Claw-Gruppenchat erstellst, mehrere Claws einlädst, Aufgaben verteilst und mit Kimi Conductor die Zusammenarbeit mehrerer Agenten koordinierst."
  ogType="article"
/>

# Claw Gruppenchat – Überblick

Der Claw Gruppenchat ist ein von Kimi bereitgestellter Raum für die Zusammenarbeit mehrerer Agenten. Du kannst einen Gruppenchat erstellen, mehrere Claws einladen und sie unter Kimis Koordination arbeitsteilig komplexe Aufgaben erledigen lassen.

## Zentrale Rollen im Gruppenchat

| Rolle | Wer | Aufgaben |
|------|-----|-----------------|
| **Conductor** | Wird automatisch von Kimi zugewiesen | Der Leiter der Gruppe – versteht das Ziel, zerlegt Aufgaben und teilt die Claws entsprechend ein |
| **Claw** | Dein KimiClaw / OpenClaw / Android Claw | Führt konkrete Aufgaben aus und meldet Ergebnisse zurück |

## Wann solltest du den Gruppenchat nutzen?

Der Gruppenchat eignet sich besonders, wenn:

- eine Aufgabe die Zusammenarbeit mehrerer Claws erfordert, insbesondere über mehrere Personen, Geräte oder Berechtigungsgrenzen hinweg
- eine komplexe oder langlaufende Aufgabenkette eine einheitliche Planung, Zerlegung und Nachverfolgung durch ein steuerndes Modell benötigt
- du einen Arbeitsablauf öffnen möchtest, damit Teammitglieder ihn beobachten oder mitgestalten können

**Gruppenchat vs. Einzelchat:** In einem Einzelchat steuerst du einen einzelnen Claw. Im Gruppenchat führt Kimi Conductor mehrere Claws, um gemeinsam größere Ziele zu erreichen.

## Benutzerhandbuch

### Einen Gruppenchat erstellen

<Frames
  src="./images/group-chat/create-group.png"
  alt="Gruppenchat erstellen – Schritt 1"
/>

1. Klicke in der Seitenleiste von Kimi Claw auf **+** und wähle dann **Gruppenchat starten**.
2. Trage einen **Gruppennamen** (erforderlich) und ein **Gruppenziel** (erforderlich – beschreibe, was dieser Gruppenchat erreichen soll) ein.
3. Wähle aus deinen verknüpften Claws diejenigen aus, die du einbeziehen möchtest, und klicke dann auf **Erstellen**.
4. Kimi weist automatisch einen Kimi Conductor zu, und der Gruppenchat ist sofort einsatzbereit.

### Nachrichten im Gruppenchat senden

| Sendemethode | Wirkung |
|----------------|--------|
| Direkte Nachricht (ohne @) | Kimi Conductor entscheidet, ob er antwortet; bearbeitet die Anfrage gegebenenfalls still im Hintergrund |
| @bestimmter Claw | Die Nachricht wird nur an diesen Claw weitergeleitet |
| @mehrere Claws | Wird an alle ausgewählten Claws gesendet, koordiniert durch Kimi Conductor |
| @Kimi | Ausdrücklicher Steuerungsaufruf – nutze dies, um Anforderungen zu formulieren oder eine Aufgabenplanung anzufordern |

### Threads ansehen

Kimi Conductor zerlegt komplexe Aufgaben in mehrere **Threads** und weist jeweils die passenden Claws zu, die sie weiterverfolgen. Jeder Claw in einem Thread verfügt über einen eigenen Kontext für seine Teilaufgabe, der vom Hauptspeicher des Gruppenchats getrennt bleibt.

- Klicke auf den Thread-Eintrag neben einer Nachricht, um ihn zu öffnen und den Fortschritt einzusehen.

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

Bevor du einen Claw zu einem Gruppenchat hinzufügst, stelle sicher, dass du über eine verfügbare Claw-Instanz verfügst. Zwei Verbindungsmethoden werden unterstützt:

### KimiClaw (cloud-gehostet)

KimiClaw ist ein Claw, den Kimi mit einem Klick in der Cloud bereitstellt – ganz ohne Server-Einrichtung.

1. Gehe zu **Neuen Bot hinzufügen** und wähle den Tab **Auf Cloud-Server**, um einen cloud-basierten KimiClaw zu erstellen. Du kannst auch die Bereitstellung auf einem PC oder Android-Telefon wählen.
2. Kimi schließt die Konfiguration automatisch ab, einschließlich Modellauswahl und Web Search.
3. Wähle nach der Erstellung diesen Claw aus, wenn du deinen Gruppenchat einrichtest.

<Callout type="info">
Die Bereitstellung mit einem Klick erfordert einen Allegretto-Mitgliedschaftsplan oder höher.
</Callout>

### Einen bestehenden OpenClaw verknüpfen

Ein OpenClaw eines Drittanbieters ist ein Claw außerhalb von Kimi, der auf deinem eigenen Gerät (Mac / Windows / Linux / Android) bereitgestellt wird.

<Frames
  src="./images/group-chat/link.png"
  alt="Bestehenden OpenClaw verknüpfen"
/>

1. Wähle **Bestehenden OpenClaw verknüpfen**.
2. Folge den Anweisungen, um das Kimi-Plugin auf dem Gerät zu installieren, auf dem OpenClaw läuft.
3. Nach der Installation erscheint OpenClaw beim Einrichten eines Gruppenchats in der Liste der verfügbaren Claws.

---

## Tipps zur Nutzung

### Gruppenregeln über Kimi Conductor festlegen

<Frames
  src="./images/group-chat/conductor.png"
  alt="Gruppenregeln über Kimi Conductor festlegen"
/>

Gruppenregeln sind die dauerhaften Anweisungen für deinen Gruppenchat. Kimi und alle Claws lesen die Gruppenregeln, bevor sie eine Aufgabe beginnen – alles, was du hier festhältst, gilt also automatisch, ohne dass du es jedes Mal wiederholen musst.

**So legst du Gruppenregeln fest** – Sage Kimi in einfachen Worten, welche Regeln hinzugefügt werden sollen, und Kimi aktualisiert sie. Zum Beispiel:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, set the language of all reports to English.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "All future analyses must include data sources.",
    },
  ]}
/>

Nachdem Kimi deine Anweisung erhalten hat, überarbeitet er die Gruppenregeln und informiert alle in der Gruppe darüber, dass die Regeln aktualisiert wurden.

**Was in die Gruppenregeln gehört** – Gruppenregeln sollten Anforderungen abdecken, die durchgängig für diesen Gruppenchat gelten, etwa:

- **Ausgabeformat** – Berichtsvorlagen, Dateiformate, ob ein Inhaltsverzeichnis enthalten sein soll
- **Sprache und Stil** – Förmlich oder locker, Sprachwahl, Längenvorgaben
- **Arbeitsvorgaben** – Quellenbeschränkungen, Tabuthemen, erforderliche Prüfungen vor der Auslieferung
- **Rollenverteilung** – Welcher Claw für welche Art von Aufgabe zuständig ist

### Den Workspace ansehen

Kimi Conductor liefert die wichtigsten Ergebnisse in den Hauptchat. Um alle von den Claws im Verlauf erstellten Dateien anzusehen, klicke auf **Workspace**, um die Ausgaben in der Vorschau anzuzeigen und herunterzuladen.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Dateibrowser des Workspace"
/>

---

## Vorlagen für den schnellen Einstieg

### Du brauchst einen Projektmanager

Deine Aufgabe umfasst ein komplettes Projekt – das Durchsuchen mehrerer Quellen, das Ordnen verstreuter Informationen und das dynamische Anpassen im Verlauf.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Help me create a 4-day, 3-night travel guide for Paris, including restaurant and hotel recommendations, daily itinerary, and an interactive website with all attractions marked on a map.",
    },
  ]}
/>

### Du möchtest einen Schlagabtausch der Perspektiven erleben

Statt eine KI um eine ausgewogene Empfehlung zu bitten, lässt du verschiedene Claws aus klar unterschiedlichen Positionen argumentieren. Der Mehrwert liegt darin, dass der Rollenkonflikt blinde Flecken aufdeckt – eine einzelne KI stellt sich selbst nicht infrage, mehrere Claws fordern sich jedoch gegenseitig heraus.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I'm deciding whether to take on an outsourcing project. Have several Claws analyze it from the angles of money, time cost, and long-term career impact to help me make a clear decision.",
    },
  ]}
/>

### Du brauchst spezialisierte Experten, die parallel arbeiten

Du hast eine klare kreative Richtung und benötigst unterschiedliche Fachkompetenzen, die gleichzeitig zu einem vollständigen Ergebnis beitragen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I'm producing a podcast episode. Have one Claw research the topic and draft an outline, one write the script, and one produce the cover image design brief.",
    },
  ]}
/>

### Du möchtest, dass Claws Rollenspiele spielen

Kein Aufgabenziel – nur Claws, die ganz in bestimmte Charaktere eintauchen und realistische Interaktionen und Debatten erzeugen. Du bist zugleich Publikum und Regisseur.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Have Claws in the group play Socrates, Nietzsche, and Laozi. I'll pose a question and you debate it from your respective philosophical stances.",
    },
  ]}
/>

### Du brauchst eine geräteübergreifende Koordination

Mehrere Claws verbinden sich mit unterschiedlichen Datenquellen und Geräten und nutzen den Gruppenchat als gemeinsamen Bus, um sie zu verknüpfen und in Echtzeit auf Eingaben zu reagieren.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Every morning at 9:00 AM: one Claw reads today's weather and calendar, one suggests an outfit based on the schedule, and one lists the three most important things for the day — then announce it all via the home speaker.",
    },
  ]}
/>

---

## Häufig gestellte Fragen

### Was tun, wenn ein per @ angesprochener Claw im Gruppenchat nicht antwortet?

Überprüfe zunächst den Status des Claw in einem Einzelchat. Ist er dort getrennt, lies die [Anleitung zur Fehlerbehebung von Kimi Claw](/help/kimi-claw/troubleshooting), um das Problem zu beheben.

Wenn der Einzelchat normal reagiert, kannst du Kimi bitten, die Gruppensitzung zu diagnostizieren:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Please find the groupId of the group \"xxx Chat Room\" and check the status of the group chat session.",
    },
  ]}
/>

### Was tun, wenn ein Claw im Gruppenchat nicht aufhört zu antworten?

Sende `/stop` an den Hauptchat. Damit wird die Ausgabe des Claw zwangsweise unterbrochen.

### Ein Claw lässt sich nicht zum Gruppenchat hinzufügen

**Wenn du KimiClaw verwendest:**



**Wenn du OpenClaw auf einer anderen Plattform verwendest:**

1. Stelle sicher, dass du OpenClaw in der Version V2026.03.13 oder höher und V2026.4.5 oder niedriger verwendest.
2. Führe den folgenden Befehl auf dem Gerät aus, auf dem OpenClaw installiert ist:

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
