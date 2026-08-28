const lf06Fragen = [
    {
        id: "lf06q001",
        frage: "Was beschreibt eine Störung im IT-Support?",

        antworten: [
            {
                text: "Ein IT-Service funktioniert nicht oder nur eingeschränkt wie vorgesehen",
                richtig: true
            },
            {
                text: "Ein Benutzer bestellt neue Hardware",
                richtig: false
            },
            {
                text: "Ein Mitarbeiter beantragt Urlaub",
                richtig: false
            },
            {
                text: "Ein Administrator dokumentiert einen funktionierenden Server",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["serviceanfragen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf06q002",
        frage: "Welche Informationen sollten bei der Aufnahme eines Support-Tickets möglichst erfasst werden?",

        antworten: [
            {
                text: "Betroffener Benutzer oder Arbeitsplatz",
                richtig: true
            },
            {
                text: "Fehlerbeschreibung und Fehlermeldung",
                richtig: true
            },
            {
                text: "Zeitpunkt und Auswirkungen der Störung",
                richtig: true
            },
            {
                text: "Die private Freizeitplanung des Benutzers",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["ticketaufnahme", "ticketsystem"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf06q003",
        frage: "Welchen Zweck erfüllt ein Ticketsystem hauptsächlich?",

        antworten: [
            {
                text: "Supportfälle strukturiert erfassen und nachvollziehbar bearbeiten",
                richtig: true
            },
            {
                text: "Ausschließlich Passwörter speichern",
                richtig: false
            },
            {
                text: "Netzwerkkabel automatisch konfigurieren",
                richtig: false
            },
            {
                text: "Betriebssysteme ersetzen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["ticketsystem"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf06q004",
        frage: "Ein zentraler Dateiserver fällt aus und 80 Mitarbeiter können nicht arbeiten. Wie sollte dieses Ticket normalerweise bewertet werden?",

        antworten: [
            {
                text: "Mit hoher Priorität, da viele Benutzer und ein wichtiger Service betroffen sind",
                richtig: true
            },
            {
                text: "Mit niedriger Priorität, weil nur ein Server betroffen ist",
                richtig: false
            },
            {
                text: "Ohne Priorität, da Serverausfälle nicht in Tickets gehören",
                richtig: false
            },
            {
                text: "Erst nach allen Einzelplatzproblemen bearbeiten",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["priorisierung"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf06q005",
        frage: "Welche Faktoren beeinflussen typischerweise die Priorität eines Supportfalls?",

        antworten: [
            {
                text: "Auswirkung der Störung",
                richtig: true
            },
            {
                text: "Dringlichkeit",
                richtig: true
            },
            {
                text: "Anzahl oder Bedeutung der betroffenen Benutzer und Prozesse",
                richtig: true
            },
            {
                text: "Die Lieblingsfarbe des Anwenders",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["priorisierung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf06q006",
        frage: "Was kann in einem Service Level Agreement festgelegt sein?",

        antworten: [
            {
                text: "Reaktionszeiten",
                richtig: true
            },
            {
                text: "Lösungszeiten",
                richtig: true
            },
            {
                text: "Vereinbarte Verfügbarkeit eines Services",
                richtig: true
            },
            {
                text: "Private Passwörter aller Kunden",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["sla"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf06q007",
        frage: "Welche Aufgabe übernimmt der First-Level-Support typischerweise?",

        antworten: [
            {
                text: "Supportfälle aufnehmen, erste Analysen durchführen und bekannte Probleme lösen",
                richtig: true
            },
            {
                text: "Ausschließlich neue Software entwickeln",
                richtig: false
            },
            {
                text: "Grundsätzlich jedes Ticket sofort an den Hersteller weiterleiten",
                richtig: false
            },
            {
                text: "Nur Hardware einkaufen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["first-level-support"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf06q008",
        frage: "Wann ist eine Weitergabe an den Second-Level-Support sinnvoll?",

        antworten: [
            {
                text: "Wenn das Problem tiefergehendes Fachwissen benötigt und im First Level nicht gelöst werden kann",
                richtig: true
            },
            {
                text: "Bei jedem Ticket unmittelbar nach der Aufnahme",
                richtig: false
            },
            {
                text: "Nur wenn der Benutzer ausdrücklich danach fragt",
                richtig: false
            },
            {
                text: "Ausschließlich bei Druckerproblemen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["second-level-support", "eskalation"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf06q009",
        frage: "Welche Gründe können eine Eskalation eines Supportfalls erforderlich machen?",

        antworten: [
            {
                text: "Das Problem liegt außerhalb der eigenen Zuständigkeit",
                richtig: true
            },
            {
                text: "Spezialwissen wird benötigt",
                richtig: true
            },
            {
                text: "Vereinbarte Servicezeiten könnten überschritten werden",
                richtig: true
            },
            {
                text: "Das Ticket ist länger als zwei Textzeilen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["eskalation"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf06q010",
        frage: "Was sollte bei einer systematischen Fehlersuche zuerst geschehen?",

        antworten: [
            {
                text: "Symptome und Rahmenbedingungen des Problems erfassen",
                richtig: true
            },
            {
                text: "Sofort beliebige Einstellungen verändern",
                richtig: false
            },
            {
                text: "Das Betriebssystem grundsätzlich neu installieren",
                richtig: false
            },
            {
                text: "Alle Sicherheitsfunktionen deaktivieren",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["fehlersuche-support"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf06q011",
        frage: "Ein Benutzer meldet: 'Das Internet geht nicht.' Welche Rückfragen helfen bei der Eingrenzung des Problems?",

        antworten: [
            {
                text: "Sind nur einzelne Webseiten oder alle Netzwerkdienste betroffen?",
                richtig: true
            },
            {
                text: "Sind weitere Benutzer betroffen?",
                richtig: true
            },
            {
                text: "Seit wann besteht das Problem?",
                richtig: true
            },
            {
                text: "Welche Farbe hat das Computergehäuse?",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["fehlersuche-support", "anwenderkommunikation", "ticketaufnahme"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf06q012",
        frage: "Was sollte bei einem Remote-Support-Zugriff berücksichtigt werden?",

        antworten: [
            {
                text: "Der Zugriff muss autorisiert sein",
                richtig: true
            },
            {
                text: "Datenschutz- und Sicherheitsvorgaben müssen beachtet werden",
                richtig: true
            },
            {
                text: "Der Zugriff sollte nachvollziehbar durchgeführt werden",
                richtig: true
            },
            {
                text: "Ein Techniker darf ohne Zustimmung jederzeit auf jedes Gerät zugreifen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["remote-support"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf06q013",
        frage: "Welche Kommunikation ist im Anwendersupport besonders sinnvoll?",

        antworten: [
            {
                text: "Technische Sachverhalte verständlich und situationsgerecht erklären",
                richtig: true
            },
            {
                text: "Möglichst viele unbekannte Fachbegriffe verwenden",
                richtig: false
            },
            {
                text: "Rückfragen grundsätzlich vermeiden",
                richtig: false
            },
            {
                text: "Den Benutzer für jede Störung verantwortlich machen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["anwenderkommunikation"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf06q014",
        frage: "Welchen Vorteil bietet eine Wissensdatenbank im IT-Support?",

        antworten: [
            {
                text: "Bekannte Lösungen können bei wiederkehrenden Problemen schneller gefunden werden",
                richtig: true
            },
            {
                text: "Sie macht ein Ticketsystem grundsätzlich überflüssig",
                richtig: false
            },
            {
                text: "Sie ersetzt alle technischen Mitarbeiter",
                richtig: false
            },
            {
                text: "Sie verhindert automatisch sämtliche Störungen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["wissensdatenbank"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf06q015",
        frage: "Welche Informationen sollten bei der Bearbeitung eines Supportfalls dokumentiert werden?",

        antworten: [
            {
                text: "Durchgeführte Diagnose",
                richtig: true
            },
            {
                text: "Durchgeführte Maßnahmen",
                richtig: true
            },
            {
                text: "Ergebnis beziehungsweise Lösung",
                richtig: true
            },
            {
                text: "Private Informationen ohne Bezug zum Supportfall",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["support-dokumentation"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf06q016",
        frage: "Was sollte vor dem endgültigen Schließen eines Tickets geprüft werden?",

        antworten: [
            {
                text: "Ob das Problem tatsächlich behoben wurde",
                richtig: true
            },
            {
                text: "Ob alle bisherigen Informationen gelöscht wurden",
                richtig: false
            },
            {
                text: "Ob das Ticket mindestens eine Woche geöffnet war",
                richtig: false
            },
            {
                text: "Ob der Benutzer einen neuen Computer gekauft hat",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["abschluss-ticket"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf06q017",
        frage: "Welche Reihenfolge ist beim Abschluss eines gelösten Supportfalls sinnvoll?",

        antworten: [
            {
                text: "Lösung prüfen → dokumentieren → Ticket schließen",
                richtig: true
            },
            {
                text: "Ticket schließen → Problem untersuchen → Lösung testen",
                richtig: false
            },
            {
                text: "Dokumentation löschen → Ticket schließen → Benutzer informieren",
                richtig: false
            },
            {
                text: "Ticket schließen → Problem ignorieren → neues Ticket anlegen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["abschluss-ticket", "support-dokumentation"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf06q018",
        frage: "Was unterscheidet einen Incident von einem Problem?",

        antworten: [
            {
                text: "Ein Incident ist eine konkrete Störung, ein Problem beschreibt eine zugrunde liegende Ursache",
                richtig: true
            },
            {
                text: "Ein Problem ist immer ein Benutzerkonto und ein Incident immer ein Server",
                richtig: false
            },
            {
                text: "Beide Begriffe bedeuten vollständig dasselbe",
                richtig: false
            },
            {
                text: "Ein Incident darf nicht dokumentiert werden",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["incident-problem"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf06q019",
        frage: "Mehrere Benutzer melden über mehrere Tage denselben Absturz einer Anwendung. Welche Aussage ist sinnvoll?",

        antworten: [
            {
                text: "Die einzelnen Ausfälle können Incidents sein, während nach einer gemeinsamen zugrunde liegenden Ursache gesucht wird",
                richtig: true
            },
            {
                text: "Jeder wiederkehrende Fehler muss grundsätzlich ignoriert werden",
                richtig: false
            },
            {
                text: "Mehrere ähnliche Störungen beweisen, dass kein technisches Problem vorliegt",
                richtig: false
            },
            {
                text: "Es darf nur der erste Benutzer ein Ticket erstellen",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["incident-problem", "wissensdatenbank", "fehlersuche-support"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf06q020",
        frage: "Welche Vorgehensweisen unterstützen einen professionellen IT-Support?",

        antworten: [
            {
                text: "Supportfälle nachvollziehbar dokumentieren",
                richtig: true
            },
            {
                text: "Probleme systematisch eingrenzen",
                richtig: true
            },
            {
                text: "Anwender verständlich informieren",
                richtig: true
            },
            {
                text: "Ungeprüfte Änderungen möglichst schnell ausprobieren",
                richtig: false
            }
        ],

        lernfelder: ["lf06"],
        themen: ["support-dokumentation", "fehlersuche-support", "anwenderkommunikation"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    }
];