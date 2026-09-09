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
    },
    {
    id: "lf06q021",
    frage: "Ein Mitarbeiter beantragt die Installation einer bereits freigegebenen Software. Laut SLA gelten für solche Anfragen andere Bearbeitungszeiten als für Störungen. Welche Aussagen sind korrekt?",

    antworten: [
        {
            text: "Die Installation kann als Serviceanfrage behandelt werden",
            richtig: true
        },
        {
            text: "Die im SLA vereinbarten Bearbeitungszeiten sollten berücksichtigt werden",
            richtig: true
        },
        {
            text: "Serviceanfragen und Störungen können unterschiedlich priorisiert und behandelt werden",
            richtig: true
        },
        {
            text: "Jede Serviceanfrage ist automatisch ein kritischer Incident",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["serviceanfragen", "sla"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf06q022",
    frage: "Ein Benutzer meldet eine Störung, deren vereinbarte Reaktionszeit laut SLA bald überschritten wird. Was sollte der First-Level-Support tun?",

    antworten: [
        {
            text: "Den Fall entsprechend der Vorgaben priorisieren und bei Bedarf rechtzeitig eskalieren",
            richtig: true
        },
        {
            text: "Das Ticket schließen, damit die SLA-Zeit nicht überschritten wird",
            richtig: false
        },
        {
            text: "Die Zeitvorgaben ignorieren, solange der Benutzer nicht erneut anruft",
            richtig: false
        },
        {
            text: "Sämtliche anderen Tickets unabhängig von deren Priorität löschen",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["sla", "first-level-support"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf06q023",
    frage: "Der First-Level-Support hat einen Fehler aufgenommen, bekannte Lösungsschritte durchgeführt und das Problem ausreichend dokumentiert, kann es aber nicht beheben. Wie sollte sinnvoll weiter vorgegangen werden?",

    antworten: [
        {
            text: "Das Ticket mit den bereits gewonnenen Informationen an den zuständigen Second-Level-Support weitergeben",
            richtig: true
        },
        {
            text: "Alle bisherigen Diagnoseinformationen vor der Weitergabe löschen",
            richtig: false
        },
        {
            text: "Dem Benutzer mitteilen, dass das Problem nicht mehr bearbeitet wird",
            richtig: false
        },
        {
            text: "Ohne Fachkenntnis beliebige tiefgreifende Änderungen am System durchführen",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["first-level-support", "second-level-support"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf06q024",
    frage: "Der Second-Level-Support muss eine komplexe Fehlkonfiguration auf dem Rechner eines entfernten Mitarbeiters untersuchen. Welche Vorgehensweisen beim Remote-Support sind sinnvoll?",

    antworten: [
        {
            text: "Vor dem Fernzugriff die notwendige Autorisierung beziehungsweise Zustimmung sicherstellen",
            richtig: true
        },
        {
            text: "Nur die für die Fehlerbehebung erforderlichen Aktionen durchführen",
            richtig: true
        },
        {
            text: "Durchgeführte Änderungen nachvollziehbar dokumentieren",
            richtig: true
        },
        {
            text: "Den Rechner jederzeit ohne Wissen des Benutzers für beliebige Zwecke fernsteuern",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["second-level-support", "remote-support"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf06q025",
    frage: "Ein Benutzer benötigt Unterstützung bei einer Anwendung und erlaubt einen Remote-Zugriff auf seinen Arbeitsplatz. Welche Aussagen treffen auf diesen Supportfall zu?",

    antworten: [
        {
            text: "Das Anliegen sollte als Support- beziehungsweise Servicefall nachvollziehbar erfasst werden",
            richtig: true
        },
        {
            text: "Beim Fernzugriff müssen Datenschutz- und Sicherheitsvorgaben beachtet werden",
            richtig: true
        },
        {
            text: "Nur für den Support erforderliche Informationen und Aktionen sollten berücksichtigt werden",
            richtig: true
        },
        {
            text: "Ein Remote-Zugriff erlaubt dem Support automatisch uneingeschränkten Zugriff auf sämtliche privaten Daten des Benutzers",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["remote-support", "serviceanfragen"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf06q026",
    frage: "Ein Benutzer meldet eine wiederkehrende Fehlermeldung an seinem Arbeitsplatz. Welche Informationen sollten im Ticketsystem für die weitere Bearbeitung erfasst werden?",

    antworten: [
        {
            text: "Betroffener Benutzer beziehungsweise Arbeitsplatz",
            richtig: true
        },
        {
            text: "Genaue Fehlermeldung und Zeitpunkt des Auftretens",
            richtig: true
        },
        {
            text: "Bereits durchgeführte Maßnahmen",
            richtig: true
        },
        {
            text: "Private Informationen ohne Bezug zum Supportfall",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["ticketsystem", "ticketaufnahme"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf06q027",
    frage: "Ein unternehmenskritischer Dienst fällt aus und die vereinbarte Lösungszeit droht überschritten zu werden. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Das Ticket aufgrund von Auswirkung und Dringlichkeit hoch priorisieren und bei Bedarf rechtzeitig eskalieren",
            richtig: true
        },
        {
            text: "Das Ticket niedriger priorisieren, weil bereits daran gearbeitet wird",
            richtig: false
        },
        {
            text: "Die SLA-Zeit ignorieren und das Ticket erst am nächsten Tag bearbeiten",
            richtig: false
        },
        {
            text: "Das Ticket schließen, bevor die vereinbarte Zeit überschritten wird",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["priorisierung", "eskalation"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf06q028",
    frage: "Ein bekanntes Problem wurde erfolgreich gelöst und die Lösung könnte zukünftig auch bei anderen Supportfällen helfen. Welche Maßnahmen sind sinnvoll?",

    antworten: [
        {
            text: "Die Lösung nachvollziehbar im Ticket dokumentieren",
            richtig: true
        },
        {
            text: "Geeignete Informationen zusätzlich in einer Wissensdatenbank festhalten",
            richtig: true
        },
        {
            text: "Vor dem Ticketabschluss prüfen, ob das Problem tatsächlich behoben ist",
            richtig: true
        },
        {
            text: "Nach erfolgreicher Lösung sämtliche Diagnoseinformationen löschen",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["wissensdatenbank", "abschluss-ticket"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf06q029",
    frage: "Mehrere Mitarbeiter melden unabhängig voneinander denselben Ausfall einer Anwendung. Nach der Wiederherstellung tritt die Störung einige Tage später erneut auf. Welche Betrachtung ist sinnvoll?",

    antworten: [
        {
            text: "Die einzelnen Ausfälle können als Incidents betrachtet werden, während zusätzlich die zugrunde liegende Ursache als Problem untersucht wird",
            richtig: true
        },
        {
            text: "Jeder Incident muss vollständig unabhängig betrachtet werden und darf niemals mit anderen Fällen in Verbindung gebracht werden",
            richtig: false
        },
        {
            text: "Nach der ersten Wiederherstellung darf die Ursache nicht weiter untersucht werden",
            richtig: false
        },
        {
            text: "Ein wiederkehrender Incident beweist, dass kein Problem vorhanden ist",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["incident-problem"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf06q030",
    frage:
        "Ein Mitarbeiter meldet, dass sein Drucker seit heute keine Dokumente mehr ausgibt. Um welche Art von Supportfall handelt es sich am ehesten?",

    antworten: [
        {
            text:
                "Eine Störung, weil ein bisher nutzbarer IT-Service nicht wie vorgesehen funktioniert.",
            richtig: true
        },
        {
            text:
                "Eine Serviceanfrage, weil der Mitarbeiter grundsätzlich einen Drucker benötigt.",
            richtig: false
        },
        {
            text:
                "Ein Problem, weil jede Druckerstörung automatisch als Problem eingestuft wird.",
            richtig: false
        },
        {
            text:
                "Eine Änderung, weil der Drucker neu konfiguriert werden muss.",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["serviceanfragen", "incident-problem"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf06q031",
    frage:
        "Welche Informationen sollten bei der Aufnahme eines Supporttickets möglichst erfasst werden?",

    antworten: [
        {
            text:
                "Betroffener Benutzer beziehungsweise Ansprechpartner",
            richtig: true
        },
        {
            text:
                "Fehlerbeschreibung und beobachtete Symptome",
            richtig: true
        },
        {
            text:
                "Zeitpunkt, Auswirkungen und bereits durchgeführte Maßnahmen",
            richtig: true
        },
        {
            text:
                "Nur die vermutete technische Ursache des Mitarbeiters",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["ticketaufnahme", "ticketsystem"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},

{
    id: "lf06q032",
    frage:
        "Zwei Tickets treffen gleichzeitig ein. Ticket A betrifft einen einzelnen Benutzer, dessen zweiter Monitor ausgefallen ist. Ticket B betrifft den Ausfall des zentralen Warenwirtschaftssystems für 80 Mitarbeiter. Welches Ticket sollte normalerweise höher priorisiert werden?",

    antworten: [
        {
            text:
                "Ticket B, weil deutlich mehr Benutzer und ein wichtiger Geschäftsprozess betroffen sind.",
            richtig: true
        },
        {
            text:
                "Ticket A, weil Hardwarefehler grundsätzlich die höchste Priorität erhalten.",
            richtig: false
        },
        {
            text:
                "Beide müssen immer dieselbe Priorität erhalten, weil sie gleichzeitig eingegangen sind.",
            richtig: false
        },
        {
            text:
                "Ticket A, weil Probleme einzelner Benutzer schneller gelöst werden können.",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["priorisierung", "ticketsystem"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf06q033",
    frage:
        "In einem SLA ist für kritische Störungen eine Reaktionszeit von 30 Minuten vereinbart. Was bedeutet diese Angabe?",

    antworten: [
        {
            text:
                "Innerhalb von 30 Minuten muss mit der Bearbeitung beziehungsweise einer vereinbarten Reaktion begonnen werden.",
            richtig: true
        },
        {
            text:
                "Die Störung muss zwingend innerhalb von 30 Minuten vollständig behoben sein.",
            richtig: false
        },
        {
            text:
                "Das Ticket darf frühestens nach 30 Minuten an den Support weitergeleitet werden.",
            richtig: false
        },
        {
            text:
                "Nach 30 Minuten wird das Ticket unabhängig vom Status automatisch geschlossen.",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["sla", "priorisierung"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf06q034",
    frage:
        "Der First-Level-Support hat eine Störung aufgenommen, grundlegende Prüfungen durchgeführt und festgestellt, dass eine tiefergehende Analyse eines Servers notwendig ist. Wie sollte weiter vorgegangen werden?",

    antworten: [
        {
            text:
                "Das Ticket mit allen bisherigen Erkenntnissen gezielt an den zuständigen Second-Level-Support eskalieren.",
            richtig: true
        },
        {
            text:
                "Das Ticket schließen und den Benutzer bitten, bei erneutem Auftreten ein neues Ticket anzulegen.",
            richtig: false
        },
        {
            text:
                "Alle bisherigen Diagnoseinformationen löschen, damit der Second-Level-Support unvoreingenommen beginnt.",
            richtig: false
        },
        {
            text:
                "Das Problem ohne weitere Dokumentation an einen beliebigen Mitarbeiter weitergeben.",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: [
        "first-level-support",
        "second-level-support",
        "eskalation",
        "support-dokumentation"
    ],
    schwierigkeit: "schwer",
    typ: "single-choice"
},

{
    id: "lf06q035",
    frage:
        "Ein Benutzer kann eine interne Webseite nicht öffnen. Andere Benutzer haben keine Probleme. Welche Vorgehensweise entspricht am ehesten einer systematischen Fehlersuche?",

    antworten: [
        {
            text:
                "Zuerst Symptome und Rahmenbedingungen erfassen, anschließend mögliche Ursachen schrittweise prüfen und Änderungen kontrolliert testen.",
            richtig: true
        },
        {
            text:
                "Sofort mehrere Netzwerkeinstellungen gleichzeitig verändern und anschließend prüfen, ob die Webseite wieder funktioniert.",
            richtig: false
        },
        {
            text:
                "Den Rechner direkt neu installieren, weil dadurch die meisten Softwareprobleme beseitigt werden.",
            richtig: false
        },
        {
            text:
                "Das Ticket ohne weitere Prüfung an den höchsten Supportlevel weiterleiten.",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: ["fehlersuche-support", "ticketaufnahme"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},

{
    id: "lf06q036",
    frage:
        "Welche Maßnahmen sind bei einem Remote-Support-Zugriff auf den Rechner eines Mitarbeiters sinnvoll?",

    antworten: [
        {
            text:
                "Der Zugriff sollte nur mit entsprechender Berechtigung beziehungsweise Zustimmung erfolgen.",
            richtig: true
        },
        {
            text:
                "Die durchgeführten Maßnahmen sollten nachvollziehbar dokumentiert werden.",
            richtig: true
        },
        {
            text:
                "Sicherheits- und Datenschutzvorgaben müssen berücksichtigt werden.",
            richtig: true
        },
        {
            text:
                "Für eine schnellere Bearbeitung sollte ein dauerhaftes gemeinsames Administratorkonto verwendet werden.",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: [
        "remote-support",
        "support-dokumentation",
        "anwenderkommunikation"
    ],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},

{
    id: "lf06q037",
    frage:
        "In einem Unternehmen treten innerhalb einer Woche mehrfach ähnliche Ausfälle desselben Dienstes auf. Die einzelnen Störungen werden jeweils kurzfristig behoben, die eigentliche Ursache ist jedoch unbekannt. Welche Vorgehensweise ist am sinnvollsten?",

    antworten: [
        {
            text:
                "Die wiederkehrenden Incidents untersuchen, um das zugrunde liegende Problem und dessen Ursache zu identifizieren.",
            richtig: true
        },
        {
            text:
                "Jedes Ticket nach der kurzfristigen Behebung schließen und die wiederholten Ausfälle getrennt betrachten.",
            richtig: false
        },
        {
            text:
                "Die Priorität aller zukünftigen Tickets automatisch auf niedrig setzen, weil bereits eine Zwischenlösung existiert.",
            richtig: false
        },
        {
            text:
                "Den betroffenen Dienst ohne Ursachenanalyse dauerhaft deaktivieren.",
            richtig: false
        }
    ],

    lernfelder: ["lf06"],
    themen: [
        "incident-problem",
        "fehlersuche-support",
        "wissensdatenbank",
        "support-dokumentation"
    ],
    schwierigkeit: "schwer",
    typ: "single-choice"
}
];