const programmierungFragen = [
    {
        id: "prog001",
        frage: "Was ist eine Variable?",
        antworten: [
            {
                text: "Ein Speicherplatz für einen Wert",
                richtig: true
            },
            {
                text: "Eine Programmiersprache",
                richtig: false
            },
            {
                text: "Ein Betriebssystem",
                richtig: false
            },
            {
                text: "Eine Datenbank",
                richtig: false
            }
        ],
        lernfelder: ["lf05"],
        themen: ["variablen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "prog002",
        frage: "Welche Anweisung wird für eine Bedingung verwendet?",
        antworten: [
            {
                text: "for",
                richtig: false
            },
            {
                text: "if",
                richtig: true
            },
            {
                text: "function",
                richtig: false
            },
            {
                text: "const",
                richtig: false
            }
        ],
        lernfelder: ["lf05"],
        themen: ["bedingungen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "prog003",
        frage: "Was bedeutet 'else'?",
        antworten: [
            {
                text: "Wiederhole den Code",
                richtig: false
            },
            {
                text: "Beende das Programm",
                richtig: false
            },
            {
                text: "Führe den alternativen Fall aus",
                richtig: true
            },
            {
                text: "Erstelle eine Variable",
                richtig: false
            }
        ],
        lernfelder: ["lf05"],
        themen: ["bedingungen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
    id: "prog004",
    frage: "Was beschreibt ein Algorithmus?",

    antworten: [
        {
            text: "Eine eindeutige Folge von Schritten zur Lösung eines Problems",
            richtig: true
        },
        {
            text: "Ausschließlich eine bestimmte Programmiersprache",
            richtig: false
        },
        {
            text: "Eine Hardwarekomponente eines Computers",
            richtig: false
        },
        {
            text: "Eine Datenbanktabelle",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["algorithmen"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog005",
    frage: "Welche Aussagen über Pseudocode sind korrekt?",

    antworten: [
        {
            text: "Er kann einen Algorithmus unabhängig von einer konkreten Programmiersprache beschreiben",
            richtig: true
        },
        {
            text: "Er hilft dabei, einen Lösungsablauf zu planen",
            richtig: true
        },
        {
            text: "Er muss nicht exakt der Syntax einer Programmiersprache entsprechen",
            richtig: true
        },
        {
            text: "Er kann nur von einem bestimmten Prozessor ausgeführt werden",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["algorithmen"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "prog006",
    frage: "Welcher Datentyp eignet sich grundsätzlich für einen Wahrheitswert wie wahr oder falsch?",

    antworten: [
        {
            text: "Boolean",
            richtig: true
        },
        {
            text: "String",
            richtig: false
        },
        {
            text: "Integer",
            richtig: false
        },
        {
            text: "Array",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["datentypen"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog007",
    frage: "Welche Zuordnungen von Datentyp und Inhalt sind sinnvoll?",

    antworten: [
        {
            text: "Integer – ganze Zahl",
            richtig: true
        },
        {
            text: "String – Zeichenkette",
            richtig: true
        },
        {
            text: "Boolean – wahr oder falsch",
            richtig: true
        },
        {
            text: "String – ausschließlich eine einzelne Ganzzahl",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["datentypen"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},
{
    id: "prog008",
    frage: "Wozu werden Vergleichsoperatoren wie ==, < oder > verwendet?",

    antworten: [
        {
            text: "Um Werte miteinander zu vergleichen",
            richtig: true
        },
        {
            text: "Um ausschließlich Text auszugeben",
            richtig: false
        },
        {
            text: "Um eine Datenbank zu löschen",
            richtig: false
        },
        {
            text: "Um Hardwarekomponenten zu installieren",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["operatoren", "bedingungen"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog009",
    frage: "Welche Anweisungen oder Konzepte können zur Steuerung des Programmablaufs verwendet werden?",

    antworten: [
        {
            text: "if",
            richtig: true
        },
        {
            text: "else",
            richtig: true
        },
        {
            text: "for",
            richtig: true
        },
        {
            text: "JPEG",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["bedingungen", "schleifen"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "prog010",
    frage: "Wozu wird eine Schleife verwendet?",

    antworten: [
        {
            text: "Um einen Programmabschnitt wiederholt auszuführen",
            richtig: true
        },
        {
            text: "Um ausschließlich eine Variable anzulegen",
            richtig: false
        },
        {
            text: "Um einen Computer auszuschalten",
            richtig: false
        },
        {
            text: "Um eine Festplatte zu formatieren",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["schleifen"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog011",
    frage: "Welche Schleifentypen sind in vielen Programmiersprachen üblich?",

    antworten: [
        {
            text: "for",
            richtig: true
        },
        {
            text: "while",
            richtig: true
        },
        {
            text: "if",
            richtig: false
        },
        {
            text: "else",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["schleifen"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},
{
    id: "prog012",
    frage: "Welchen Vorteil haben Funktionen in einem Programm?",

    antworten: [
        {
            text: "Wiederverwendbarer Programmcode kann in einer eigenen Einheit zusammengefasst werden",
            richtig: true
        },
        {
            text: "Sie verhindern grundsätzlich jede Art von Programmfehler",
            richtig: false
        },
        {
            text: "Sie ersetzen den Arbeitsspeicher des Computers",
            richtig: false
        },
        {
            text: "Sie können ausschließlich Datenbanken verarbeiten",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["funktionen"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog013",
    frage: "Wozu eignen sich Arrays oder Listen?",

    antworten: [
        {
            text: "Um mehrere zusammengehörige Werte gemeinsam zu speichern",
            richtig: true
        },
        {
            text: "Um ausschließlich einen einzelnen Wahrheitswert zu speichern",
            richtig: false
        },
        {
            text: "Um einen Netzwerkrouter zu ersetzen",
            richtig: false
        },
        {
            text: "Um ein Betriebssystem zu installieren",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["listen-arrays"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog014",
    frage: "Welche Methoden können bei der Fehlersuche in einem Programm helfen?",

    antworten: [
        {
            text: "Fehlermeldungen auswerten",
            richtig: true
        },
        {
            text: "Testausgaben verwenden",
            richtig: true
        },
        {
            text: "Programm schrittweise ausführen",
            richtig: true
        },
        {
            text: "Beliebige Codezeilen ohne Analyse löschen",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["debugging"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "prog015",
    frage: "Wie werden Daten in einer relationalen Datenbank hauptsächlich organisiert?",

    antworten: [
        {
            text: "In Tabellen",
            richtig: true
        },
        {
            text: "Ausschließlich in einzelnen Textdateien",
            richtig: false
        },
        {
            text: "Nur in Bildern",
            richtig: false
        },
        {
            text: "Ausschließlich im Arbeitsspeicher",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["datenbanken"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog016",
    frage: "Welche Aussage über Primär- und Fremdschlüssel ist korrekt?",

    antworten: [
        {
            text: "Ein Primärschlüssel identifiziert einen Datensatz eindeutig, ein Fremdschlüssel kann auf einen Datensatz einer anderen Tabelle verweisen",
            richtig: true
        },
        {
            text: "Primär- und Fremdschlüssel dienen ausschließlich zur Verschlüsselung von Daten",
            richtig: false
        },
        {
            text: "Ein Fremdschlüssel ersetzt grundsätzlich jede Tabelle",
            richtig: false
        },
        {
            text: "Ein Primärschlüssel darf einen Datensatz nicht eindeutig identifizieren",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["primaerschluessel", "datenbanken"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog017",
    frage: "Welche SQL-Anweisung wird verwendet, um Daten aus einer Tabelle abzufragen?",

    antworten: [
        {
            text: "SELECT",
            richtig: true
        },
        {
            text: "DELETE",
            richtig: false
        },
        {
            text: "UPDATE",
            richtig: false
        },
        {
            text: "INSERT",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog018",
    frage: "Welche Zuordnungen von SQL-Anweisung und Aufgabe sind korrekt?",

    antworten: [
        {
            text: "INSERT – neuen Datensatz hinzufügen",
            richtig: true
        },
        {
            text: "UPDATE – bestehenden Datensatz verändern",
            richtig: true
        },
        {
            text: "DELETE – Datensatz entfernen",
            richtig: true
        },
        {
            text: "SELECT – grundsätzlich die gesamte Datenbank löschen",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["sql-aendern", "sql-select"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "prog019",
    frage: "Welches Ziel verfolgt die Normalisierung einer relationalen Datenbank?",

    antworten: [
        {
            text: "Redundanzen und mögliche Änderungsprobleme reduzieren",
            richtig: true
        },
        {
            text: "Möglichst viele identische Daten mehrfach speichern",
            richtig: false
        },
        {
            text: "Alle Tabellen grundsätzlich zu einer einzigen Tabelle zusammenführen",
            richtig: false
        },
        {
            text: "Die Netzwerkgeschwindigkeit des Datenbankservers erhöhen",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["normalisierung", "datenbanken"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog020",
    frage: "Welche Formate können für den strukturierten Austausch oder die Speicherung von Daten verwendet werden?",

    antworten: [
        {
            text: "JSON",
            richtig: true
        },
        {
            text: "CSV",
            richtig: true
        },
        {
            text: "Beide Formate können strukturierte Daten enthalten",
            richtig: true
        },
        {
            text: "Keines der genannten Formate kann Daten speichern",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["datenformate"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
}
];