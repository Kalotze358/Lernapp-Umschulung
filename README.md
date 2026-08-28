# IT-Lernapp

Eine kleine Lernplattform für unsere Umschulung zum Fachinformatiker.

Das Projekt soll uns dabei helfen, Unterrichtsinhalte zu wiederholen und gleichzeitig praktische Erfahrung mit HTML, CSS, JavaScript, Git und GitHub zu sammeln.

## Aktueller Stand

Die Lernapp befindet sich noch in einer frühen Entwicklungsphase. Stand 28.08.2026

- Alle 12 FISI-Lernfelder angelegt
- 195 Themen mit Erklärungen und Merksätzen
- Jedes Thema besitzt mindestens 3 Quizfragen
- Single-Choice und Multiple-Choice werden unterstützt
- Schwierigkeitsgrade: leicht, mittel und schwer
- Automatischer Fragenkatalog-Prüfer vorhanden
- Responsive Darstellung für Desktop und Smartphone
- Dark Mode vorhanden

### Qualitätsprüfung

Der Fragenkatalog kann über die Browser-Konsole mit

pruefeFragenkatalog()

automatisch geprüft werden.

Geprüft werden unter anderem:

- doppelte Fragen-IDs
- ungültige Lernfelder und Themen
- Antwortstruktur
- Single-/Multiple-Choice-Logik
- doppelte Fragetexte
- Themenabdeckung
- Schwierigkeitsverteilung
- Ausbau-Prioritäten

## Geplante Funktionen

Als Nächstes beziehungsweise später sollen unter anderem folgende Funktionen hinzukommen:

- Schwierigkeitsfilter für Quizfragen
- gezieltes Quiz nach Lernfeld, Thema und Schwierigkeitsgrad
- prüfungsnahe Aufgaben zur Vorbereitung auf AP1 und AP2
- Prüfungssimulation
- weitere Lerninhalte unter „Wissenswertes“
- Sammlung nützlicher Links
- bessere und ausführlichere Ergebnisanzeige
- Lernfortschritt und Statistiken
- lokale Benutzerprofile beziehungsweise Speicherung des Lernfortschritts
- eventuell Lernkarten
- später eventuell Benutzerkonten und serverseitige Speicherung

## Projektstruktur

```text
Lernapp-Umschulung/
│
├── daten/
│   └── lernfelder.js
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
├── index.html
├── style.css
├── script.js
├── pruefung.js
└── README.md
