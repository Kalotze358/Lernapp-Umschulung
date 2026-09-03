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
},
{
    id: "prog021",
    frage: "Eine Variable enthält den Wert 10. Anschließend wird der Ausdruck variable = variable + 5 ausgeführt. Welchen Wert besitzt die Variable danach?",

    antworten: [
        {
            text: "15",
            richtig: true
        },
        {
            text: "10",
            richtig: false
        },
        {
            text: "5",
            richtig: false
        },
        {
            text: "Die Variable verliert automatisch ihren Wert",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["variablen", "operatoren"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog022",
    frage: "Eine Funktion soll zwei übergebene Zahlen addieren und das Ergebnis zurückgeben. Welche Konzepte werden dabei benötigt?",

    antworten: [
        {
            text: "Parameter beziehungsweise Eingabewerte",
            richtig: true
        },
        {
            text: "Ein Additionsoperator",
            richtig: true
        },
        {
            text: "Eine Rückgabe des berechneten Ergebnisses",
            richtig: true
        },
        {
            text: "Zwingend eine Datenbankverbindung",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["operatoren", "funktionen"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "prog023",
    frage: "Eine Funktion erhält eine Liste von Temperaturen und soll den höchsten Wert ermitteln. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Die Werte der Liste nacheinander vergleichen und den bisher größten Wert speichern",
            richtig: true
        },
        {
            text: "Nur das erste Element betrachten und alle weiteren ignorieren",
            richtig: false
        },
        {
            text: "Die Liste vor jeder Prüfung vollständig löschen",
            richtig: false
        },
        {
            text: "Eine Funktion kann grundsätzlich keine Liste verarbeiten",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["funktionen", "listen-arrays"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "prog024",
    frage: "Ein Programm greift auf ein Element außerhalb des gültigen Bereichs eines Arrays zu und erzeugt einen Fehler. Welche Vorgehensweise hilft bei der Analyse?",

    antworten: [
        {
            text: "Den verwendeten Index und die Länge des Arrays überprüfen",
            richtig: true
        },
        {
            text: "Die Fehlermeldung beziehungsweise den betroffenen Programmabschnitt untersuchen",
            richtig: true
        },
        {
            text: "Den Programmablauf gegebenenfalls schrittweise nachvollziehen",
            richtig: true
        },
        {
            text: "Beliebige Codezeilen löschen, bis der Fehler nicht mehr sichtbar ist",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["listen-arrays", "debugging"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "prog025",
    frage: "Beim Einlesen einer CSV-Datei schlägt die Verarbeitung einzelner Datensätze fehl. Welche Schritte sind für die Fehlersuche sinnvoll?",

    antworten: [
        {
            text: "Prüfen, ob das erwartete Trennzeichen verwendet wird",
            richtig: true
        },
        {
            text: "Fehlerhafte beziehungsweise ungewöhnliche Datensätze untersuchen",
            richtig: true
        },
        {
            text: "Die Zeichencodierung und Datenstruktur kontrollieren",
            richtig: true
        },
        {
            text: "Alle Fehlermeldungen grundsätzlich ignorieren",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["debugging", "datenformate"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "prog026",
    frage: "Kundendaten aus einer CSV-Datei sollen in eine bestehende Datenbank übernommen werden. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Die eingelesenen Daten vor der Übernahme auf Struktur und gültige Werte prüfen",
            richtig: true
        },
        {
            text: "Für neue Datensätze eine geeignete INSERT-Anweisung verwenden",
            richtig: true
        },
        {
            text: "Bestehende Datensätze bei Bedarf gezielt mit UPDATE verändern",
            richtig: true
        },
        {
            text: "Vor jedem Import grundsätzlich alle Tabellen löschen",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["datenformate", "sql-aendern"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "prog027",
    frage: "In einer Kundentabelle werden Name und Adresse eines Kunden in vielen Datensätzen mehrfach gespeichert. Welche Folge kann diese Struktur haben?",

    antworten: [
        {
            text: "Bei Änderungen können widersprüchliche Daten entstehen, weshalb eine sinnvoll normalisierte Struktur vorteilhaft sein kann",
            richtig: true
        },
        {
            text: "Mehrfach gespeicherte Daten verhindern grundsätzlich jede Änderung",
            richtig: false
        },
        {
            text: "Normalisierung bedeutet, alle Informationen möglichst oft zu wiederholen",
            richtig: false
        },
        {
            text: "UPDATE kann ausschließlich bei vollständig normalisierten Datenbanken eingesetzt werden",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["sql-aendern", "normalisierung"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "prog028",
    frage: "Warum werden bei der Normalisierung zusammengehörige Informationen häufig auf mehrere Tabellen verteilt und über Schlüssel miteinander verbunden?",

    antworten: [
        {
            text: "Um unnötige Datenredundanz zu reduzieren",
            richtig: true
        },
        {
            text: "Um Beziehungen zwischen Datensätzen eindeutig herstellen zu können",
            richtig: true
        },
        {
            text: "Um Änderungsanomalien zu vermeiden beziehungsweise zu reduzieren",
            richtig: true
        },
        {
            text: "Damit jede Tabelle zwingend dieselben Daten enthält",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["normalisierung", "primaerschluessel"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "prog029",
    frage: "Eine Anwendung liest einen Datensatz aus einer Datenbank. Warum kann es sinnvoll sein, den Primärschlüssel des Datensatzes in einer Variablen zu speichern?",

    antworten: [
        {
            text: "Der Datensatz kann später eindeutig referenziert und gezielt weiterverarbeitet werden",
            richtig: true
        },
        {
            text: "Der Primärschlüssel macht dadurch automatisch sämtliche anderen Daten überflüssig",
            richtig: false
        },
        {
            text: "Eine Variable kann grundsätzlich keine ID enthalten",
            richtig: false
        },
        {
            text: "Primärschlüssel werden ausschließlich zur Verschlüsselung verwendet",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["primaerschluessel", "variablen"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog030",
    frage: "Ein Programm soll prüfen, ob ein eingegebenes Alter mindestens 18 beträgt. Welche Schritte gehören zu einem sinnvollen Algorithmus?",

    antworten: [
        {
            text: "Das Alter in einer geeigneten Variablen mit passendem Datentyp speichern",
            richtig: true
        },
        {
            text: "Den gespeicherten Wert mit 18 vergleichen",
            richtig: true
        },
        {
            text: "Abhängig vom Ergebnis des Vergleichs eine passende Aktion ausführen",
            richtig: true
        },
        {
            text: "Der Datentyp spielt bei der Verarbeitung von Werten grundsätzlich keine Rolle",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["algorithmen", "datentypen"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "prog031",
    frage: "Aus der Tabelle kunden sollen nur Kunden aus Berlin ausgegeben und alphabetisch nach dem Namen sortiert werden. Welche SQL-Abfrage beschreibt dies grundsätzlich korrekt?",

    antworten: [
        {
            text: "SELECT * FROM kunden WHERE ort = 'Berlin' ORDER BY name;",
            richtig: true
        },
        {
            text: "DELETE FROM kunden WHERE ort = 'Berlin';",
            richtig: false
        },
        {
            text: "UPDATE kunden SET ort = 'Berlin' ORDER BY name;",
            richtig: false
        },
        {
            text: "INSERT INTO kunden WHERE ort = 'Berlin';",
            richtig: false
        }
    ],

    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "prog032",
    frage: "Welche SQL-Funktion wird verwendet, um die Anzahl von Datensätzen zu ermitteln?",
    antworten: [
        { text: "COUNT()", richtig: true },
        { text: "SUM()", richtig: false },
        { text: "AVG()", richtig: false },
        { text: "MAX()", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog033",
    frage: "Welche SQL-Funktion berechnet den Durchschnitt numerischer Werte?",
    antworten: [
        { text: "AVG()", richtig: true },
        { text: "SUM()", richtig: false },
        { text: "COUNT()", richtig: false },
        { text: "ROUND()", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog034",
    frage: "Zu welcher Gruppe von SQL-Funktionen gehören COUNT() und AVG()?",
    antworten: [
        { text: "Aggregatfunktionen", richtig: true },
        { text: "Datendefinitionsbefehle", richtig: false },
        { text: "Verknüpfungsoperatoren", richtig: false },
        { text: "Sortierfunktionen", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog035",
    frage: "Wofür wird GROUP BY in einer SQL-Abfrage verwendet?",
    antworten: [
        { text: "Um Datensätze mit gleichen Werten zu Gruppen zusammenzufassen", richtig: true },
        { text: "Um das Ergebnis ausschließlich alphabetisch zu sortieren", richtig: false },
        { text: "Um zwei Tabellen über gemeinsame Spalten zu verbinden", richtig: false },
        { text: "Um einzelne Datensätze aus einer Tabelle zu löschen", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog036",
    frage: "Welche SQL-Klausel wird verwendet, um Datensätze nach einem Merkmal zu gruppieren?",
    antworten: [
        { text: "GROUP BY", richtig: true },
        { text: "ORDER BY", richtig: false },
        { text: "WHERE", richtig: false },
        { text: "HAVING", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog037",
    frage: "Du möchtest ermitteln, wie viele Kunden aus jeder Stadt kommen. Welche SQL-Abfrage ist dafür geeignet?",
    antworten: [
        {
            text: "SELECT stadt, COUNT(*) FROM kunden GROUP BY stadt;",
            richtig: true
        },
        {
            text: "SELECT stadt, COUNT(*) FROM kunden ORDER BY stadt;",
            richtig: false
        },
        {
            text: "SELECT COUNT(*) FROM kunden WHERE stadt;",
            richtig: false
        },
        {
            text: "SELECT stadt FROM kunden GROUP BY COUNT(*);",
            richtig: false
        }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog038",
    frage: "Welche Aufgabe erfüllt ein JOIN in SQL?",
    antworten: [
        { text: "Er kombiniert zusammengehörige Daten aus mehreren Tabellen", richtig: true },
        { text: "Er berechnet automatisch den Durchschnitt einer Spalte", richtig: false },
        { text: "Er verändert den Datentyp einer vorhandenen Spalte", richtig: false },
        { text: "Er gruppiert automatisch alle gleichen Datensätze", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog039",
    frage: "Welche Klausel wird häufig verwendet, um bei einem JOIN die Verknüpfungsbedingung anzugeben?",
    antworten: [
        { text: "ON", richtig: true },
        { text: "WHERE", richtig: false },
        { text: "ORDER BY", richtig: false },
        { text: "GROUP BY", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog040",
    frage: "Welche Aufgabe hat die ON-Klausel bei einem JOIN?",
    antworten: [
        { text: "Sie legt fest, anhand welcher Bedingung Datensätze der Tabellen miteinander verknüpft werden", richtig: true },
        { text: "Sie bestimmt die Sortierreihenfolge des Ergebnisses", richtig: false },
        { text: "Sie legt fest, welche Datensätze gruppiert werden", richtig: false },
        { text: "Sie erstellt automatisch einen Primärschlüssel", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog041",
    frage: "Die Tabellen kunden und bestellungen enthalten beide die Spalte kundennr. Welche Konstruktion eignet sich, um zusammengehörige Datensätze zu verbinden?",
    antworten: [
        {
            text: "JOIN bestellungen ON kunden.kundennr = bestellungen.kundennr",
            richtig: true
        },
        {
            text: "GROUP BY kunden.kundennr = bestellungen.kundennr",
            richtig: false
        },
        {
            text: "ORDER BY kunden.kundennr = bestellungen.kundennr",
            richtig: false
        },
        {
            text: "VALUES kunden.kundennr = bestellungen.kundennr",
            richtig: false
        }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog042",
    frage: "Was bewirkt die SQL-Anweisung CREATE TABLE?",
    antworten: [
        { text: "Sie erstellt eine neue Tabelle", richtig: true },
        { text: "Sie fügt einen Datensatz in eine vorhandene Tabelle ein", richtig: false },
        { text: "Sie erstellt eine Verbindung zwischen zwei vorhandenen Tabellen", richtig: false },
        { text: "Sie gruppiert die Datensätze einer Tabelle", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-aendern"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog043",
    frage: "Welcher SQL-Befehl wird verwendet, um eine neue Tabelle anzulegen?",
    antworten: [
        { text: "CREATE TABLE", richtig: true },
        { text: "ALTER TABLE", richtig: false },
        { text: "INSERT INTO", richtig: false },
        { text: "SELECT INTO", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-aendern"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog044",
    frage: "Welche SQL-Anweisung fügt neue Datensätze in eine bestehende Tabelle ein?",
    antworten: [
        { text: "INSERT INTO", richtig: true },
        { text: "CREATE TABLE", richtig: false },
        { text: "UPDATE TABLE", richtig: false },
        { text: "ALTER INTO", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-aendern"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog045",
    frage: "Welche SQL-Klausel enthält bei einem INSERT die einzufügenden Werte?",
    antworten: [
        { text: "VALUES", richtig: true },
        { text: "SET", richtig: false },
        { text: "ON", richtig: false },
        { text: "GROUP BY", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-aendern"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog046",
    frage: "Welche Kombination wird typischerweise verwendet, um einen neuen Datensatz in eine Tabelle einzufügen?",
    antworten: [
        { text: "INSERT INTO ... VALUES", richtig: true },
        { text: "CREATE TABLE ... VALUES", richtig: false },
        { text: "UPDATE ... GROUP BY", richtig: false },
        { text: "SELECT ... INSERT", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-aendern"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "prog047",
    frage: "Was bewirkt die SQL-Anweisung INSERT INTO kunden (name) VALUES ('Max');?",
    antworten: [
        { text: "Ein neuer Datensatz mit dem Namen Max wird in die Tabelle kunden eingefügt", richtig: true },
        { text: "Der vorhandene Datensatz Max wird aus der Tabelle kunden gelöscht", richtig: false },
        { text: "Alle Kundennamen werden auf Max geändert", richtig: false },
        { text: "Eine neue Tabelle mit dem Namen Max wird erstellt", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-aendern"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog048",
    frage: "Was liefert die Abfrage SELECT COUNT(*) FROM kunden;?",
    antworten: [
        { text: "Die Anzahl der Datensätze in der Tabelle kunden", richtig: true },
        { text: "Den Durchschnitt aller numerischen Kundendaten", richtig: false },
        { text: "Die Namen aller Kunden in alphabetischer Reihenfolge", richtig: false },
        { text: "Die Anzahl der Spalten der Tabelle kunden", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog049",
    frage: "Was liefert die Abfrage SELECT AVG(preis) FROM produkte;?",
    antworten: [
        { text: "Den durchschnittlichen Wert der Spalte preis", richtig: true },
        { text: "Die Anzahl aller Produktdatensätze", richtig: false },
        { text: "Den höchsten Wert der Spalte preis", richtig: false },
        { text: "Die Summe aller Werte der Spalte preis", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog050",
    frage: "Was bewirkt GROUP BY stadt in einer SQL-Abfrage?",
    antworten: [
        { text: "Datensätze mit demselben Wert in der Spalte stadt werden zu Gruppen zusammengefasst", richtig: true },
        { text: "Die Spalte stadt wird automatisch alphabetisch sortiert", richtig: false },
        { text: "Für jede Stadt wird automatisch eine neue Tabelle erstellt", richtig: false },
        { text: "Datensätze mit gleichem Stadtwert werden aus der Tabelle entfernt", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "prog051",
    frage: "Welche SQL-Konstruktion wird verwendet, um zusammengehörige Daten aus zwei Tabellen in einer Abfrage zu kombinieren?",
    antworten: [
        { text: "JOIN", richtig: true },
        { text: "GROUP BY", richtig: false },
        { text: "VALUES", richtig: false },
        { text: "AVG", richtig: false }
    ],
    lernfelder: ["lf05"],
    themen: ["sql-select"],
    schwierigkeit: "leicht",
    typ: "single-choice"
}
];