# IT-Lernapp

Eine interaktive Lernplattform für unsere Umschulung zum **Fachinformatiker für Systemintegration (FISI)**.

Das Projekt soll dabei helfen, Unterrichtsinhalte zu wiederholen, wichtige Themen gezielt zu vertiefen und sich langfristig auf **AP1 und AP2** vorzubereiten.

Gleichzeitig dient die Lernapp als praktisches Projekt, um Erfahrungen mit **HTML, CSS, JavaScript, Git und GitHub** zu sammeln und das Gelernte direkt anzuwenden.


## Aktueller Stand

**Stand: 09.09.2026**

Die Lernapp befindet sich in aktiver Entwicklung und besitzt inzwischen eine umfangreiche Grundlage.

Aktuell vorhanden:

- alle 12 FISI-Lernfelder
- 195 Themen mit Erklärungen und Merksätzen
- jedes Thema besitzt mindestens 3 Quizfragen
- über 400 Quizfragen
- Single-Choice und Multiple-Choice
- Schwierigkeitsgrade:
  - leicht
  - mittel
  - schwer
- zufällige Reihenfolge von Fragen und Antworten
- automatischer Fragenkatalog-Prüfer
- responsive Darstellung für Desktop und Smartphone
- Dark Mode
- globale Suche über Lernfelder, Themen und Vertiefungen
- ausführliche Lernvertiefungen
- AP1-Prüfungsvorbereitung
- lokale Speicherung verschiedener Ergebnisse und Einstellungen


## Quiz-System

Die App bietet verschiedene Möglichkeiten, Quizfragen zu bearbeiten.


### Schnellquiz

Das Schnellquiz startet sofort mit:

- 10 zufälligen Fragen
- Fragen aus allen vorhandenen Lernfeldern
- gemischten Schwierigkeitsgraden
- Single-Choice und Multiple-Choice

Nach Abschluss kann:

- derselbe Quiz erneut durchgeführt werden
- ein neuer Satz aus 10 zufälligen Fragen gestartet werden


### Individueller Quiz

Beim individuellen Quiz kann der Fragenpool selbst zusammengestellt werden.

Filtermöglichkeiten:

- Lernfelder
- einzelne Themen
- Schwierigkeitsgrad
- Single-Choice
- Multiple-Choice
- Anzahl der Fragen

Mögliche Quizgrößen:

- 5 Fragen
- 10 Fragen
- 15 Fragen
- 20 Fragen

Die App zeigt bereits während der Auswahl an, wie viele passende Fragen vorhanden sind.

Nach Abschluss kann der Quiz wiederholt oder ein neuer individueller Quiz zusammengestellt werden.


### Themen- und Lernfeldquiz

Zusätzlich können Quizfragen direkt zu:

- einzelnen Themen
- kompletten Lernfeldern

gestartet werden.


## Lernfelder

Die Inhalte orientieren sich an den 12 Lernfeldern der Ausbildung beziehungsweise Umschulung zum Fachinformatiker für Systemintegration.

Aktuell sind **195 einzelne Themen** hinterlegt.

Ein Thema kann enthalten:

- Erklärung
- Merksatz
- Quizfragen
- ausführliche Vertiefung
- interaktive Übungen


## Vertiefungen

Für besonders wichtige oder umfangreiche Themen gibt es eigene Lernmodule.

Die einzelnen Kapitel sind einklappbar, damit auch größere Vertiefungen übersichtlich bleiben.


### Subnetting

Die Subnetting-Vertiefung enthält unter anderem:

- IPv4-Grundlagen
- Netzklassen
- Netzwerk- und Hostanteil
- CIDR
- Subnetzmasken
- Netzadresse
- Broadcastadresse
- Hostbereiche
- Berechnung nutzbarer Hosts
- Aufteilung von Netzwerken
- Übungsaufgaben
- zufällig generierte Subnetting-Aufgaben
- interaktiven Subnetting-Rechner


### OSI-Modell

Die OSI-Vertiefung behandelt:

- Grundlagen des OSI-Modells
- Layer 7 – Anwendung
- Layer 6 – Darstellung
- Layer 5 – Sitzung
- Layer 4 – Transport
- Layer 3 – Vermittlung
- Layer 2 – Sicherung
- Layer 1 – Bitübertragung
- Aufgaben der einzelnen Schichten
- typische Protokolle und Geräte
- Kapselung und Entkapselung


### Interaktiver OSI-Lückentest

Zur OSI-Vertiefung gehört ein interaktiver Test mit mehreren Stufen.

**Stufe 1**

Die sieben OSI-Schichten müssen in der richtigen Reihenfolge eingetragen werden.

**Stufe 2**

Begriffe und Aufgaben müssen der passenden OSI-Schicht zugeordnet werden.

Beispiele:

- TCP / UDP / Ports
- IP-Adressen und Routing
- MAC-Adressen und Frames
- Kabel und Signale

**Stufe 3**

Praktische Situationen müssen analysiert und der richtigen OSI-Schicht zugeordnet werden.

Die Antworten können direkt geprüft werden:

- richtige Antworten werden markiert
- falsche Antworten werden markiert
- Antworten können korrigiert und erneut geprüft werden
- Lösungen können bei Bedarf angezeigt werden


## Globale Suche

Über die Suchfunktion können Lerninhalte direkt gefunden werden.

Durchsucht werden unter anderem:

- Lernfelder
- Themen
- Vertiefungen
- einzelne Kapitel einer Vertiefung

Wird ein Kapitel einer Vertiefung über die Suche geöffnet, wird das entsprechende Kapitel automatisch aufgeklappt.


## Prüfungsvorbereitung

Die Anwendung besitzt bereits einen eigenen Bereich für die Prüfungsvorbereitung.


### AP1

Für AP1 können offene und szenariobasierte Aufgaben bearbeitet werden.

Bereits vorhanden sind unter anderem Aufgaben aus Bereichen wie:

- Hardware
- Komponentenwahl
- Schnittstellen
- IT-Grundlagen

Die Aufgaben können enthalten:

- Ausgangssituation
- mehrere Teilaufgaben
- Musterlösung
- Selbstbewertung


### Lernfortschritt

Die Selbstbewertungen der AP1-Aufgaben werden lokal im Browser gespeichert.

Dadurch kann ein einfacher Lernfortschritt angezeigt werden.

Eine umfangreichere Auswertung soll später folgen.


### AP2 und WiSo

Bereiche für:

- AP2
- Wirtschafts- und Sozialkunde

sind für den weiteren Ausbau vorgesehen.


## Qualitätsprüfung

Der komplette Fragenkatalog kann über die Browser-Konsole automatisch geprüft werden.

Aufruf:

```javascript
pruefeFragenkatalog();
```

Geprüft werden unter anderem:

- doppelte Fragen-IDs
- ungültige Lernfelder
- ungültige Themen
- Antwortstruktur
- Single-Choice-Logik
- Multiple-Choice-Logik
- doppelte Fragetexte
- Themenabdeckung
- Anzahl der Fragen pro Thema
- Schwierigkeitsverteilung
- vorhandene schwere Fragen
- Ausbau-Prioritäten

Dadurch können Fehler im Fragenkatalog früh erkannt werden.


## Projektstruktur

```text
Lernapp-Umschulung/
│
├── daten/
│   ├── lernfelder.js
│   └── vertiefungen.js
│
├── fragen/
│   ├── lf01.js
│   ├── lf02.js
│   ├── lf04.js
│   ├── lf06.js
│   ├── lf07.js
│   ├── lf08.js
│   ├── lf09.js
│   ├── lf10b.js
│   ├── lf11b.js
│   ├── lf12b.js
│   ├── netzwerke.js
│   └── programmierung.js
│
├── pruefungen/
│   ├── ap1.js
│   └── ap1-ui.js
│
├── index.html
├── style.css
├── script.js
├── pruefung.js
└── README.md
```


## Techniken

Für das Projekt werden aktuell hauptsächlich verwendet:

- HTML
- CSS
- JavaScript
- LocalStorage
- Git
- GitHub
- GitHub Pages

Die Anwendung benötigt aktuell kein Framework und läuft vollständig im Browser.


## Geplante Weiterentwicklung

Die Lernapp soll schrittweise weiterentwickelt werden.

Geplant beziehungsweise als mögliche Erweiterungen vorgesehen sind:


### Lernsystem

- Verbesserung vorhandener Quizfragen
- realistischere Antwortmöglichkeiten
- mehr szenariobasierte Fragen
- mehr Transfer- und Prüfungsaufgaben
- gezieltes Training persönlicher Schwächen
- ausführlichere Ergebnisanalyse


### Weitere Vertiefungen

Mögliche zukünftige Lernmodule:

- TCP/IP-Modell
- VLAN und Switching
- Routing
- Gateway
- NAT und PAT
- Windows Server
- Linux
- RAID und Storage
- IT-Sicherheit
- Datenbanken


### Lernfortschritt

Geplant sind:

- lokale Benutzerprofile
- frei wählbarer Benutzername
- Lernfortschritt pro Lernfeld
- Lernfortschritt pro Thema
- Speicherung begonnener Quiz
- Wiederaufnahme eines Quiz
- Erkennung persönlicher Schwachstellen
- gezieltes Wiederholen schwieriger Themen
- Export und Import des Lernfortschritts


### Prüfungsvorbereitung

Weiter ausgebaut werden sollen:

- AP1-Aufgaben
- AP2-Aufgaben
- WiSo-Fragen
- prüfungsnahe Szenarien
- Prüfungssimulationen
- Fortschrittsauswertung


### Langfristige Ideen

Mögliche spätere Erweiterungen:

- Benutzerkonten
- Datenbankanbindung
- geräteübergreifende Synchronisation
- serverseitige Speicherung
- Ranglisten mit frei gewählten Namen
- Lernkarten
- weitere interaktive Lernübungen


## Ziel des Projekts

Das Projekt ist nicht nur als Sammlung von Quizfragen gedacht.

Langfristig soll daraus eine Lernplattform entstehen, die:

- Wissen vermittelt
- Lerninhalte erklärt
- gezieltes Üben ermöglicht
- Schwächen erkennt
- Lernfortschritt sichtbar macht
- auf die IHK-Prüfungen vorbereitet

und gleichzeitig als praktisches Entwicklungsprojekt während der FISI-Umschulung dient.