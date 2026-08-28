const lf08Fragen = [
    {
        id: "lf08q001",
        frage: "Was ist beim systemübergreifenden Datenaustausch besonders wichtig?",

        antworten: [
            {
                text: "Datenformat und Schnittstelle müssen zwischen den beteiligten Systemen kompatibel sein",
                richtig: true
            },
            {
                text: "Beide Systeme müssen vom gleichen Hersteller stammen",
                richtig: false
            },
            {
                text: "Beide Systeme müssen dasselbe Betriebssystem verwenden",
                richtig: false
            },
            {
                text: "Die Daten dürfen ausschließlich manuell übertragen werden",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["datenaustausch"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q002",
        frage: "Welche Aufgaben kann eine Schnittstelle zwischen zwei Systemen übernehmen?",

        antworten: [
            {
                text: "Festlegen, welche Daten ausgetauscht werden",
                richtig: true
            },
            {
                text: "Festlegen, in welcher Form Daten übertragen werden",
                richtig: true
            },
            {
                text: "Eine definierte Kommunikation zwischen Systemen ermöglichen",
                richtig: true
            },
            {
                text: "Grundsätzlich sämtliche Sicherheitsmechanismen ersetzen",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["schnittstellen", "datenaustausch"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf08q003",
        frage: "Wofür steht die Abkürzung API?",

        antworten: [
            {
                text: "Application Programming Interface",
                richtig: true
            },
            {
                text: "Automatic Program Installation",
                richtig: false
            },
            {
                text: "Application Private Internet",
                richtig: false
            },
            {
                text: "Advanced Processor Interface",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["api"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q004",
        frage: "Welchen Zweck erfüllt eine API?",

        antworten: [
            {
                text: "Sie ermöglicht Programmen, definierte Funktionen oder Daten anderer Systeme zu nutzen",
                richtig: true
            },
            {
                text: "Sie ersetzt grundsätzlich jedes Netzwerk",
                richtig: false
            },
            {
                text: "Sie dient ausschließlich zum Speichern von Passwörtern",
                richtig: false
            },
            {
                text: "Sie kann nur innerhalb eines einzelnen Programms verwendet werden",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["api", "schnittstellen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q005",
        frage: "Welche HTTP-Methode wird bei einer REST-API typischerweise zum Abrufen einer Ressource verwendet?",

        antworten: [
            {
                text: "GET",
                richtig: true
            },
            {
                text: "POST",
                richtig: false
            },
            {
                text: "DELETE",
                richtig: false
            },
            {
                text: "PUT",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["rest-api", "http-methoden"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q006",
        frage: "Welche Zuordnungen von HTTP-Methode und typischer Aufgabe sind korrekt?",

        antworten: [
            {
                text: "GET – Daten abrufen",
                richtig: true
            },
            {
                text: "POST – neue Ressource erstellen",
                richtig: true
            },
            {
                text: "DELETE – Ressource entfernen",
                richtig: true
            },
            {
                text: "GET – Ressource grundsätzlich löschen",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["http-methoden", "rest-api"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf08q007",
        frage: "Welche Aussage über JSON ist korrekt?",

        antworten: [
            {
                text: "JSON ist ein textbasiertes Format zur strukturierten Darstellung von Daten",
                richtig: true
            },
            {
                text: "JSON ist ausschließlich ein Bildformat",
                richtig: false
            },
            {
                text: "JSON kann nur Binärdaten enthalten",
                richtig: false
            },
            {
                text: "JSON ist ein Netzwerkstecker",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["json"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q008",
        frage: "Welches Beispiel entspricht grundsätzlich der typischen Struktur eines JSON-Objekts?",

        antworten: [
            {
                text: '{ "name": "Anna", "alter": 25 }',
                richtig: true
            },
            {
                text: "<name>Anna</name>",
                richtig: false
            },
            {
                text: "name;alter;Anna;25",
                richtig: false
            },
            {
                text: "SELECT * FROM Anna",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["json"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf08q009",
        frage: "Wie werden Daten in XML typischerweise strukturiert?",

        antworten: [
            {
                text: "Mit Elementen und Tags",
                richtig: true
            },
            {
                text: "Ausschließlich mit IP-Adressen",
                richtig: false
            },
            {
                text: "Nur mit SQL-Befehlen",
                richtig: false
            },
            {
                text: "Ausschließlich durch Binärzahlen ohne Struktur",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["xml"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q010",
        frage: "Für welchen Anwendungsfall eignet sich CSV besonders gut?",

        antworten: [
            {
                text: "Für einfache tabellarische Daten",
                richtig: true
            },
            {
                text: "Für die Installation eines Betriebssystems",
                richtig: false
            },
            {
                text: "Für die Vergabe von IP-Adressen",
                richtig: false
            },
            {
                text: "Für die Verschlüsselung einer Festplatte",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["csv"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q011",
        frage: "Welche Aussagen über JSON, XML und CSV sind korrekt?",

        antworten: [
            {
                text: "CSV eignet sich besonders für einfache Tabellen",
                richtig: true
            },
            {
                text: "JSON kann verschachtelte Datenstrukturen darstellen",
                richtig: true
            },
            {
                text: "XML verwendet Elemente und Tags",
                richtig: true
            },
            {
                text: "Alle drei Formate können ausschließlich Bilddaten speichern",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["datenformate-vergleich", "json", "xml", "csv"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf08q012",
        frage: "Was ist der Unterschied zwischen Datenimport und Datenexport?",

        antworten: [
            {
                text: "Beim Import werden Daten eingelesen, beim Export werden Daten ausgegeben",
                richtig: true
            },
            {
                text: "Import und Export bedeuten vollständig dasselbe",
                richtig: false
            },
            {
                text: "Beim Export werden Daten ausschließlich gelöscht",
                richtig: false
            },
            {
                text: "Beim Import werden grundsätzlich neue Benutzerkonten erstellt",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["import-export"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q013",
        frage: "Welche Punkte sollten bei einem Datenimport berücksichtigt werden?",

        antworten: [
            {
                text: "Struktur der Daten",
                richtig: true
            },
            {
                text: "Datentypen",
                richtig: true
            },
            {
                text: "Zeichencodierung",
                richtig: true
            },
            {
                text: "Ausschließlich die Farbe der Benutzeroberfläche",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["import-export", "zeichencodierung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf08q014",
        frage: "Warum kann eine falsche Zeichencodierung beim Datenaustausch Probleme verursachen?",

        antworten: [
            {
                text: "Zeichen können falsch oder unlesbar dargestellt werden",
                richtig: true
            },
            {
                text: "Die CPU verliert dadurch dauerhaft Prozessorkerne",
                richtig: false
            },
            {
                text: "Der Netzwerkanschluss wird dadurch deaktiviert",
                richtig: false
            },
            {
                text: "Die Bildschirmauflösung wird automatisch geändert",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["zeichencodierung"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf08q015",
        frage: "Welche Aussage über UTF-8 ist korrekt?",

        antworten: [
            {
                text: "UTF-8 ist eine weit verbreitete Zeichencodierung, die sehr viele unterschiedliche Zeichen darstellen kann",
                richtig: true
            },
            {
                text: "UTF-8 ist ausschließlich ein Netzwerkprotokoll",
                richtig: false
            },
            {
                text: "UTF-8 ist ein Datenbankserver",
                richtig: false
            },
            {
                text: "UTF-8 kann ausschließlich die Ziffern 0 bis 9 darstellen",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["zeichencodierung"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q016",
        frage: "Was sollte beim Zugriff einer Anwendung auf eine Datenbank beachtet werden?",

        antworten: [
            {
                text: "Nur die tatsächlich benötigten Berechtigungen vergeben",
                richtig: true
            },
            {
                text: "Jeder Anwendung grundsätzlich Administratorrechte geben",
                richtig: false
            },
            {
                text: "Zugangsdaten öffentlich im Internet veröffentlichen",
                richtig: false
            },
            {
                text: "Sämtliche Zugriffskontrollen deaktivieren",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["datenbankzugriff", "sicherheit-datenaustausch"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf08q017",
        frage: "Was bedeutet Datenvalidierung?",

        antworten: [
            {
                text: "Prüfen, ob Daten festgelegten Regeln und Erwartungen entsprechen",
                richtig: true
            },
            {
                text: "Daten grundsätzlich ungeprüft übernehmen",
                richtig: false
            },
            {
                text: "Alle Daten automatisch löschen",
                richtig: false
            },
            {
                text: "Daten ausschließlich verschlüsseln",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["datenvalidierung"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf08q018",
        frage: "Welche Prüfungen können Bestandteil einer Datenvalidierung sein?",

        antworten: [
            {
                text: "Prüfen von Pflichtfeldern",
                richtig: true
            },
            {
                text: "Prüfen erlaubter Wertebereiche",
                richtig: true
            },
            {
                text: "Prüfen eines erwarteten Datenformats",
                richtig: true
            },
            {
                text: "Ungeprüfte Übernahme sämtlicher Eingaben",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["datenvalidierung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf08q019",
        frage: "Wie sollte mit einem Fehler beim automatisierten Datenaustausch sinnvoll umgegangen werden?",

        antworten: [
            {
                text: "Fehler erkennen, protokollieren und kontrolliert behandeln",
                richtig: true
            },
            {
                text: "Fehler grundsätzlich ignorieren",
                richtig: false
            },
            {
                text: "Alle Daten sofort ohne Prüfung löschen",
                richtig: false
            },
            {
                text: "Sämtliche Sicherheitsmaßnahmen dauerhaft deaktivieren",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["fehlerbehandlung-daten"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf08q020",
        frage: "Welche Maßnahmen können einen sicheren Datenaustausch unterstützen?",

        antworten: [
            {
                text: "Verschlüsselte Übertragung",
                richtig: true
            },
            {
                text: "Authentifizierung der beteiligten Systeme oder Benutzer",
                richtig: true
            },
            {
                text: "Geeignete Zugriffskontrollen",
                richtig: true
            },
            {
                text: "Öffentliche Weitergabe aller Zugangsdaten",
                richtig: false
            }
        ],

        lernfelder: ["lf08"],
        themen: ["sicherheit-datenaustausch"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
    id: "lf08q021",
    frage: "Ein System exportiert einfache tabellarische Kundendaten für den Import in eine Datenbank. Welche Überlegungen sind bei der Wahl des Datenformats und beim anschließenden Datenbankzugriff sinnvoll?",

    antworten: [
        {
            text: "CSV kann für einfache tabellarische Daten geeignet sein",
            richtig: true
        },
        {
            text: "Die Anwendung sollte für den Datenbankzugriff nur die tatsächlich benötigten Berechtigungen besitzen",
            richtig: true
        },
        {
            text: "Vor dem Import sollten Struktur und Datentypen berücksichtigt werden",
            richtig: true
        },
        {
            text: "Das verwendete Datenformat bestimmt automatisch, dass uneingeschränkte Administratorrechte benötigt werden",
            richtig: false
        }
    ],

    lernfelder: ["lf08"],
    themen: ["datenformate-vergleich", "datenbankzugriff"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf08q022",
    frage: "Eine Anwendung kann eine Datenbank während eines automatischen Imports plötzlich nicht mehr erreichen. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Den Fehler erkennen und protokollieren, den Import kontrolliert abbrechen beziehungsweise behandeln und die Datenbankverbindung prüfen",
            richtig: true
        },
        {
            text: "Alle vorhandenen Daten vorsorglich löschen",
            richtig: false
        },
        {
            text: "Den Fehler ignorieren und unabhängig vom Ergebnis einen erfolgreichen Import melden",
            richtig: false
        },
        {
            text: "Der Anwendung dauerhaft uneingeschränkte Administratorrechte geben, ohne die Ursache zu untersuchen",
            richtig: false
        }
    ],

    lernfelder: ["lf08"],
    themen: ["datenbankzugriff", "fehlerbehandlung-daten"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf08q023",
    frage: "Ein Fremdsystem liefert verschachtelte Daten als JSON. Einzelne Datensätze enthalten jedoch unerwartete oder fehlende Felder. Welche Maßnahmen sind sinnvoll?",

    antworten: [
        {
            text: "Prüfen, ob JSON für die benötigte komplexere Datenstruktur geeignet ist",
            richtig: true
        },
        {
            text: "Eingehende Daten vor der Weiterverarbeitung validieren",
            richtig: true
        },
        {
            text: "Fehlerhafte Datensätze kontrolliert behandeln und den Fehler nachvollziehbar protokollieren",
            richtig: true
        },
        {
            text: "Alle Daten ungeprüft weiterverarbeiten, weil JSON grundsätzlich fehlerfrei ist",
            richtig: false
        }
    ],

    lernfelder: ["lf08"],
    themen: ["fehlerbehandlung-daten", "datenformate-vergleich"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf08q024",
    frage: "Zwei unterschiedliche Anwendungen sollen automatisch Daten miteinander austauschen. Welche Punkte müssen dabei berücksichtigt werden?",

    antworten: [
        {
            text: "Es muss eine geeignete Schnittstelle zwischen den Systemen vorhanden sein",
            richtig: true
        },
        {
            text: "Beide Systeme müssen sich über Struktur und Format der übertragenen Daten verständigen können",
            richtig: true
        },
        {
            text: "Der Übertragungsweg und mögliche Fehler sollten berücksichtigt werden",
            richtig: true
        },
        {
            text: "Beide Anwendungen müssen zwingend vom selben Hersteller stammen",
            richtig: false
        }
    ],

    lernfelder: ["lf08"],
    themen: ["datenaustausch", "schnittstellen"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf08q025",
    frage: "Eine Anwendung soll Kundendaten über eine REST-API eines anderen Systems abrufen. Welche Aussagen sind korrekt?",

    antworten: [
        {
            text: "Die API stellt eine definierte Schnittstelle für den Zugriff auf Funktionen oder Daten bereit",
            richtig: true
        },
        {
            text: "Bei einer REST-API kann eine Ressource beispielsweise über eine URL angesprochen werden",
            richtig: true
        },
        {
            text: "Für das reine Abrufen einer Ressource wird typischerweise GET verwendet",
            richtig: true
        },
        {
            text: "Eine API erlaubt grundsätzlich uneingeschränkten Zugriff auf alle Daten des Zielsystems",
            richtig: false
        }
    ],

    lernfelder: ["lf08"],
    themen: ["api", "rest-api"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf08q026",
    frage: "Eine REST-API soll einen vorhandenen Datensatz abrufen, einen neuen Datensatz anlegen und einen anderen löschen. Welche HTTP-Methoden passen typischerweise dazu?",

    antworten: [
        {
            text: "GET zum Abrufen",
            richtig: true
        },
        {
            text: "POST zum Erstellen",
            richtig: true
        },
        {
            text: "DELETE zum Löschen",
            richtig: true
        },
        {
            text: "GET wird typischerweise zum Löschen einer Ressource verwendet",
            richtig: false
        }
    ],

    lernfelder: ["lf08"],
    themen: ["http-methoden", "rest-api"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf08q027",
    frage: "Ein System exportiert einfache Tabellendaten als CSV, ein anderes liefert hierarchisch strukturierte Daten als XML. Welche Aussagen sind sinnvoll?",

    antworten: [
        {
            text: "CSV eignet sich besonders für einfache tabellarische Strukturen",
            richtig: true
        },
        {
            text: "XML kann Daten mithilfe verschachtelter Elemente und Tags strukturieren",
            richtig: true
        },
        {
            text: "Beim späteren Import müssen Struktur und erwartete Felder berücksichtigt werden",
            richtig: true
        },
        {
            text: "CSV und XML besitzen grundsätzlich exakt dieselbe Datenstruktur",
            richtig: false
        }
    ],

    lernfelder: ["lf08"],
    themen: ["xml", "csv", "import-export"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf08q028",
    frage: "Eine Anwendung importiert Datensätze aus einem externen System. Welche Maßnahmen helfen dabei, fehlerhafte oder unzulässige Daten sicher zu behandeln?",

    antworten: [
        {
            text: "Eingehende Daten vor der Verarbeitung validieren",
            richtig: true
        },
        {
            text: "Nur erwartete Datenstrukturen und zulässige Werte akzeptieren",
            richtig: true
        },
        {
            text: "Beim Datenaustausch geeignete Authentifizierungs- und Zugriffsschutzmaßnahmen einsetzen",
            richtig: true
        },
        {
            text: "Externe Daten grundsätzlich ungeprüft mit maximalen Berechtigungen verarbeiten",
            richtig: false
        }
    ],

    lernfelder: ["lf08"],
    themen: ["datenvalidierung", "sicherheit-datenaustausch", "import-export"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
}
];