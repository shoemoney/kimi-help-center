---
title: "Kimi Websites FAQ"
slug: "websites-faq"
order: 3
extract_headings: true
preview: false
preview_content: "Häufig gestellte Fragen zur Nutzung von Kimi Websites."
---

<SeoMeta
  title="Kimi Websites FAQ – Kimi Help Center"
  description="Häufige Fehlerbehebung für Kimi Websites, etwa bei Vorschauproblemen, leeren Seiten, Datenverlust und fehlgeschlagenen Veröffentlichungen."
/>

# Kimi Websites FAQ

> Eine vollständige Anleitung zu den Schaltflächen im Vorschaubereich, Bearbeitungsmodi sowie zum Veröffentlichen und Zurückziehen von Veröffentlichungen findest du unter [Kimi Websites](/websites/websites-overview). Diese Seite behandelt nur häufige Fehlerfälle.

## Die Vorschau lädt nicht oder ich sehe nicht die neueste Version?

> Zum Beispiel: „Die Website wird nicht angezeigt“, „In der Vorschau ist noch die alte Version zu sehen“ oder „Ich sehe die zuletzt gespeicherte Version nicht.“

In den meisten Fällen wurde die Website erfolgreich erstellt und gespeichert. Wenn du sie „nicht sehen“ kannst, liegt das meist am Vorschaubereich oder an der Anzeige der Versionskarte. Die häufigste Ursache ist ein falsches Projektverzeichnis. Andere Fälle kannst du in dieser Reihenfolge prüfen:

<Callout type="warning">
**Projektverzeichnis prüfen**: Das Website-Projekt muss unter `/mnt/agents/output/app` liegen. Die Vorschau liest nur Versionen, die aus diesem Verzeichnis gespeichert wurden. Wenn Kimi das Projekt an anderer Stelle abgelegt hat (etwa in einem temporären `/tmp`-Verzeichnis), kann die Version zwar erfolgreich gespeichert werden, die Vorschau kann sie aber nicht lesen. Bitte Kimi, das Projekt in dieses Verzeichnis zu verschieben und erneut zu speichern.
</Callout>

1. **Aktualisiere die Seite oder öffne die Unterhaltung erneut** – Versionskarten brauchen manchmal ein paar Sekunden, bis sie erscheinen.
2. **Bitte Kimi, in der Unterhaltung eine neue Version zu speichern.**
3. **Wenn die Unterhaltung sehr lang ist, starte testweise eine neue** (siehe unten „Meine Unterhaltung ist sehr lang – sollte ich eine neue beginnen?“).
4. Wenn sie weiterhin nicht erscheint: Code und Version wurden in der Regel erfolgreich gespeichert (du kannst Kimi nach der Versionsnummer fragen). Häufig handelt es sich um eine vorübergehende Schwankung des Vorschau-Dienstes – bitte versuche es später erneut. Bleibt das Problem bestehen, klicke im Vorschaubereich auf **Nutzerfeedback** (Umschlag-Symbol), sende Feedback mit der Versionsnummer, und unser Team prüft den Fall.

## Die Website ist leer, zeigt einen weißen Bildschirm, ist abgestürzt oder reagiert nicht?

> Zum Beispiel: „Die Seite ist komplett leer“, „Die Website ist leer“, „Die Website ist abgestürzt“ oder „Es wird nichts angezeigt / Klicken bewirkt nichts.“

- Ein leerer oder abgestürzter Bildschirm wird meist durch einen **Front-End-Laufzeitfehler** verursacht (etwa fehlende Abhängigkeiten, direkter Zugriff auf eine Unterseite oder eine einzelne Ressource bzw. ein Bild, das nicht geladen werden kann). Beschreibe Kimi das Symptom in der Unterhaltung (ein Screenshot hilft), dann findet und behebt Kimi das Problem und speichert anschließend eine neue Version.
- Wenn du vermutest, dass der leere Bildschirm durch **fehlende Dateien** verursacht wird: Jede Website-Version speichert einen Snapshot. Bitte Kimi, eine historische Version wiederherzustellen (siehe unten „Projektdateien oder Verzeichnisse fehlen“).
- **Browser-Kompatibilität**: Einige auf Datenschutz ausgerichtete Browser (Brave, bestimmte Firefox-Add-ons) können das Laden von Front-End-Ressourcen blockieren und dadurch Darstellungsfehler verursachen. Füge die Kimi-Domain zur Whitelist hinzu, deaktiviere Schutz-/Datenschutzblocker vorübergehend oder wechsle zu Chrome / Edge / Safari.

## Was tun, wenn ein Klick auf „Veröffentlichen“ fehlschlägt?

Gehe genauso vor wie oben: Versuche es später erneut. Bleibt das Problem bestehen, sende über **Nutzerfeedback** die Versionsnummer. Die Version wurde bereits erfolgreich gespeichert und muss nicht von Grund auf neu erstellt werden.

## Wie lange ist der Website-Link gültig? Läuft er ab?

Wenn du auf **Veröffentlichen** klickst und die Website öffentlich bereitstellst, bleibt der erzeugte Link unbegrenzt gültig – es sei denn, du klickst manuell auf **Veröffentlichung zurückziehen**, um die Website privat zu machen, oder der Inhalt wird wegen unangemessener Inhalte markiert.

## Inhalte, Daten oder Einträge fehlen?

> Zum Beispiel: „Der Inhalt auf meiner Startseite ist verschwunden“, „Das Wissen, das ich in die Datenbank hochgeladen habe, ist weg“, „Die von mir hochgeladenen Informationen fehlen“ oder „AI sagt, die Daten seien dauerhaft verloren.“

In den meisten Fällen sind die Daten nicht wirklich verloren. Prüfe Folgendes in dieser Reihenfolge:

1. **Bestätige zuerst, ob die Website wirklich „Full-Stack“ ist**: Nur Full-Stack-Websites mit **Back-End- bzw. Datenbankfunktionen** speichern Daten in der Cloud-Datenbank der Plattform, sodass sie über Besuche und Geräte hinweg erhalten bleiben. In der Praxis bleiben viele Websites, die als „Full-Stack“ bezeichnet werden, **letztlich reine Front-End-Websites**; die Daten gelangen dann nie tatsächlich in die Datenbank. In diesem Fall verschwinden frühere Daten natürlich, sobald du die Seite aktualisierst oder das Gerät wechselst. Bitte Kimi zu bestätigen, ob das Projekt ein echtes Back-End und eine echte Datenbank enthält.
2. **Reine Front-End-Website**: Daten werden nur im lokalen Speicher deines aktuellen Browsers gespeichert (localStorage). Wenn du den Browser oder das Gerät wechselst oder Browserdaten löschst, gehen sie verloren. Wenn du eine langfristige Datenspeicherung über mehrere Geräte hinweg brauchst, bitte Kimi, auf eine Full-Stack-Lösung mit Datenbank umzustellen.
3. **Bestätigte Full-Stack-Website**: Daten werden in der von der Plattform verwalteten Cloud-Datenbank gespeichert. **Das Veröffentlichen einer neuen Version löscht vorhandene Daten nicht**. Wenn Daten trotz Full-Stack weiterhin nicht sichtbar sind, handelt es sich meist um ein vorübergehendes Problem – aktualisiere die Seite oder versuche es später erneut.
4. **Wenn du bestätigst, dass Daten tatsächlich verloren sind**: Klicke im Vorschaubereich auf **Nutzerfeedback** (Umschlag-Symbol), sende Feedback, und unser Team prüft den Fall. Führe an diesem Punkt keine wiederholten weiteren Aktionen aus, um ein Überschreiben zu vermeiden.

## Projektdateien oder Verzeichnisse fehlen, oder „Umgebung zurückgesetzt“ / „Wiederherstellung nicht möglich“?

> Zum Beispiel: „Mein Website-Projektverzeichnis ist weg und lässt sich nicht wiederherstellen“, „Dateien fehlen“ oder „Meldung: Umgebung zurückgesetzt.“

- Jede Website-Version **speichert einen Snapshot**, daher lässt sich der Quellcode in der Regel aus historischen Versionen wiederherstellen. Bitte Kimi, historische Versionen aufzulisten und zu einer bestimmten Version zurückzurollen bzw. sie wiederherzustellen.
- Wenn das in einer **sehr langen Unterhaltung** passiert (insbesondere, wenn du während der Unterhaltung das Modell gewechselt hast), empfehlen wir, eine neue Unterhaltung zu beginnen (siehe nächster Punkt).
- Wenn eine Wiederherstellung weiterhin nicht möglich ist, klicke auf **Nutzerfeedback**, sende Feedback, und unser Team prüft den Fall.

## Meine Unterhaltung ist sehr lang – sollte ich eine neue beginnen?

Wenn eine Unterhaltung schon lange läuft, viele Versionen umfasst oder du während der Unterhaltung das Modell gewechselt hast (etwa K2.6 → K3), entsprechen die aktuellen Fähigkeiten möglicherweise nicht mehr der neuesten Version. Das kann zu Kontextverlust oder Dateianomalien führen. **Wir empfehlen, eine neue Unterhaltung zu starten**, damit du die neuesten Erstellungs- und Bereitstellungsfunktionen nutzt. Veröffentlichte Websites und historische Versionen sind davon nicht betroffen und bleiben normal zugänglich.

## Kann ich die Website nach dem Export des Codes selbst bereitstellen?

Du kannst den vollständigen Projektcode herunterladen und auf deinem eigenen Server bereitstellen. Die folgenden zwei Elemente werden jedoch von der Kimi-Plattform bereitgestellt und **werden nicht mit dem Code migriert**:

- **Kimi-Kontoanmeldung**: Diese Anmeldefunktion wird von der Plattform bereitgestellt und kann nach dem Verlassen der Kimi-Plattform nicht direkt genutzt werden. Wenn du für eine eigene Bereitstellung eine Anmeldung brauchst, bitte Kimi, ein Benutzername-/Passwort-Anmeldesystem auf Basis deiner eigenen Datenbank zu implementieren.
- **Plattformverwaltete Datenbank**: Daten von Full-Stack-Websites werden in der Cloud-Datenbank gespeichert, die die Plattform dieser Website zuweist. Der exportierte Code enthält diese Daten nicht und verbindet sich auch nicht automatisch mit deiner eigenen Datenbank. Für eine eigene Bereitstellung musst du eine eigene Datenbank einrichten und Daten migrieren.

Wenn du nur möchtest, dass die Webseite öffentlich erreichbar ist, nutze einfach die Plattformfunktion **Teilen → Veröffentlichen**. Du musst keinen eigenen Server einrichten – Kimi-Kontoanmeldung und Cloud-Daten funktionieren weiterhin normal.

## Die erstellte Website entspricht nicht meinen Anforderungen?

- Benenne in der Unterhaltung konkret, was nicht passt: zum Beispiel Farbe, Layout, Text, Funktionsmodule, Datentabellen usw.
- Du kannst Referenzbilder, Beispiel-Webseiten oder ausführlichere Textbeschreibungen hochladen, damit der Agent die Website entsprechend der Vorlage anpasst.
- Wenn du nach mehreren Änderungen immer noch nicht zufrieden bist, starte eine neue Unterhaltung mit einer strukturierteren Beschreibung deiner Anforderungen.

## Kann ich Inhalte, Links oder Stile der Website nach der Erstellung noch ändern?

Ja. Teile dem Agent in der ursprünglichen Unterhaltung einfach weiterhin mit, was du ändern möchtest, zum Beispiel:

- „Ändere den Titel der Startseite in XXX“
- „Ändere den Link der Schaltfläche ‚Kontakt‘ zu https://xxx“
- „Stelle die Website insgesamt auf ein dunkles Theme um“

Nach der Änderung erstellt der Agent die Website neu und stellt einen neuen Link bereit.

## Wie füge ich der Website ein Back-End, eine Datenbank oder eine Anmeldefunktion hinzu?

- Betone in der Anweisung zum Website-Bau, dass du eine Full-Stack-Webseite mit Datenbank und Anmeldefunktion möchtest.
- Alternativ kannst du den Agent zuerst die Front-End-Seite erstellen lassen, anschließend den Quellcode exportieren und ihn für die Weiterentwicklung an einen Entwickler übergeben.

## Kann ich den Quellcode der Website herunterladen oder nach GitHub exportieren?

Die aktuelle Version unterstützt das lokale Herunterladen aller Dateien. Öffne in der Unterhaltung „Alle Dateien“ und klicke auf die Download-Schaltfläche.

## Wie viel credit verbraucht das Erstellen oder Ändern einer Website?

Das Erstellen einer Website ist eine komplexe Aufgabe und verbraucht in der Regel eine erhebliche Menge an tokens/credits. Der Verbrauch hängt ab von:

- Anzahl der Seiten und Komplexität
- Ob Bilder, Tabellen und Interaktionslogik enthalten sind
- Anzahl der iterativen Änderungen

Wir empfehlen, deine Anforderungen so klar wie möglich zu beschreiben, um Ausprobieren und Nachbessern zu reduzieren. Wenn du mit dem Ergebnis nicht zufrieden bist, kannst du die Situation im Feedback schildern.

## Die Website-Erstellung ist sehr langsam, bleibt in der Warteschlange hängen oder das Terminal schlägt fehl?

- Zu Stoßzeiten (tagsüber und abends an Werktagen) kann es zu Warteschlangen kommen. Wir empfehlen die Nutzung außerhalb der Hauptzeiten.
- Wenn die Aufgabe länger als 10 Minuten festhängt, aktualisiere zuerst die Webseite.
- Bei komplexen Websites empfehlen wir, sie in kleinere Aufgaben aufzuteilen: Beginne mit der Startseite und füge danach Schritt für Schritt Unterseiten und Funktionen hinzu.

## Wofür eignet sich Kimi Websites? Wofür nicht?

**Geeignet für:**

- Persönliche Homepages/Portfolios, Event-Landingpages, Produktpräsentationsseiten, einfache Tool-Seiten, kleine Spielprototypen
- Schnelles Validieren von Designideen und Erstellen interaktiver Demos
- Websites, die eine einfache Back-End-Datenbank und ein Benutzersystem benötigen

**Nicht geeignet für:**

- Komplexe Websites mit Zahlungssystemen
- Formale Produktionsumgebungen mit hoher concurrency und hoher Verfügbarkeit
- Unternehmensseiten, die langfristig stabiles Hosting mit eigener Domain benötigen

---

Wenn die oben genannten Methoden dein Problem nicht lösen, sende bitte Feedback über die Schaltfläche **Nutzerfeedback** unten rechts in der Kimi-Web/App oder [kontaktiere den Kundensupport](/others/contact-support). Wir empfehlen, Folgendes beizufügen:

- Den Website-Link, bei dem das Problem aufgetreten ist
- Den verwendeten Browser und das verwendete Betriebssystem
- Screenshots oder den Text der Fehlermeldung
- Den ungefähren Zeitpunkt der ursprünglichen Unterhaltung

Wir werden die Funktionen zur Website-Erstellung auf Grundlage deines Feedbacks weiter optimieren.
