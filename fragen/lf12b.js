const lf12bFragen = [
    {
        id: "lf12bq001",
        frage: "Was sollte zu Beginn eines Kundenauftrags zuerst geklärt werden?",

        antworten: [
            {
                text: "Anforderungen, Ziele und Rahmenbedingungen des Kunden",
                richtig: true
            },
            {
                text: "Ausschließlich die Farbe der eingesetzten Hardware",
                richtig: false
            },
            {
                text: "Nur der endgültige Projektabschluss",
                richtig: false
            },
            {
                text: "Die Dokumentation wird grundsätzlich vor der Analyse vollständig geschrieben",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["kundenauftrag", "anforderungsanalyse"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf12bq002",
        frage: "Welche Informationen können Bestandteil einer Anforderungsanalyse sein?",

        antworten: [
            {
                text: "Gewünschte Funktionen",
                richtig: true
            },
            {
                text: "Technische Rahmenbedingungen",
                richtig: true
            },
            {
                text: "Budget und zeitliche Vorgaben",
                richtig: true
            },
            {
                text: "Ausschließlich persönliche Vorlieben des Technikers",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["anforderungsanalyse"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq003",
        frage: "Was beschreibt die Ist-Analyse?",

        antworten: [
            {
                text: "Den aktuellen Zustand vor Durchführung des Projekts",
                richtig: true
            },
            {
                text: "Das gewünschte Endergebnis",
                richtig: false
            },
            {
                text: "Ausschließlich die Projektkosten",
                richtig: false
            },
            {
                text: "Nur die spätere Kundeneinweisung",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["ist-soll-analyse"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf12bq004",
        frage: "Was beschreibt der Soll-Zustand eines Projekts?",

        antworten: [
            {
                text: "Den gewünschten Zustand nach erfolgreicher Umsetzung",
                richtig: true
            },
            {
                text: "Den Zustand vor Beginn des Projekts",
                richtig: false
            },
            {
                text: "Nur die vorhandene Hardware",
                richtig: false
            },
            {
                text: "Ausschließlich die Arbeitszeit des Technikers",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["ist-soll-analyse"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf12bq005",
        frage: "Welche Punkte gehören typischerweise zur Projektplanung?",

        antworten: [
            {
                text: "Aufgaben festlegen",
                richtig: true
            },
            {
                text: "Zeitbedarf abschätzen",
                richtig: true
            },
            {
                text: "Ressourcen und Verantwortlichkeiten planen",
                richtig: true
            },
            {
                text: "Die spätere Funktionsprüfung grundsätzlich weglassen",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["projektplanung", "zeitplanung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq006",
        frage: "Welche Reihenfolge beschreibt einen typischen Projektablauf sinnvoll?",

        antworten: [
            {
                text: "Analyse → Planung → Umsetzung → Test → Übergabe",
                richtig: true
            },
            {
                text: "Übergabe → Analyse → Test → Planung → Umsetzung",
                richtig: false
            },
            {
                text: "Test → Projektabschluss → Analyse → Umsetzung",
                richtig: false
            },
            {
                text: "Umsetzung → Auftrag erhalten → Analyse → Planung",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["projektphasen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf12bq007",
        frage: "Welche Ressourcen können bei der Planung eines IT-Projekts berücksichtigt werden?",

        antworten: [
            {
                text: "Personal und Arbeitszeit",
                richtig: true
            },
            {
                text: "Hardware",
                richtig: true
            },
            {
                text: "Software und Lizenzen",
                richtig: true
            },
            {
                text: "Nur die Anzahl der vorhandenen Monitore",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["zeitplanung", "projektplanung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq008",
        frage: "Was ist ein Projektrisiko?",

        antworten: [
            {
                text: "Ein mögliches Ereignis, das den Projektverlauf oder das Projektergebnis negativ beeinflussen kann",
                richtig: true
            },
            {
                text: "Jede erfolgreich erledigte Aufgabe",
                richtig: false
            },
            {
                text: "Ausschließlich ein bereits eingetretener Hardwaredefekt",
                richtig: false
            },
            {
                text: "Nur eine verspätete Rechnung",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["risikomanagement"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf12bq009",
        frage: "Welche Vorgehensweise ist beim Umgang mit Projektrisiken sinnvoll?",

        antworten: [
            {
                text: "Risiken frühzeitig erkennen",
                richtig: true
            },
            {
                text: "Risiken bewerten",
                richtig: true
            },
            {
                text: "Geeignete Gegenmaßnahmen planen",
                richtig: true
            },
            {
                text: "Risiken grundsätzlich erst nach Projektende betrachten",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["risikomanagement"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq010",
        frage: "Welchen Zweck erfüllt ein technisches Lösungskonzept?",

        antworten: [
            {
                text: "Es beschreibt, wie die Anforderungen technisch umgesetzt werden sollen",
                richtig: true
            },
            {
                text: "Es ersetzt grundsätzlich die Anforderungsanalyse",
                richtig: false
            },
            {
                text: "Es enthält ausschließlich die Rechnung für den Kunden",
                richtig: false
            },
            {
                text: "Es dient nur zur Gestaltung der Benutzeroberfläche",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["loesungskonzept"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf12bq011",
        frage: "Welche Aspekte können bei der Auswahl einer technischen Lösung berücksichtigt werden?",

        antworten: [
            {
                text: "Technische Eignung",
                richtig: true
            },
            {
                text: "Sicherheitsanforderungen",
                richtig: true
            },
            {
                text: "Kosten und zukünftige Erweiterbarkeit",
                richtig: true
            },
            {
                text: "Ausschließlich die persönliche Lieblingsmarke des Administrators",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["loesungskonzept", "wirtschaftlichkeit-projekt"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq012",
        frage: "Warum sollte bei einem Kundenprojekt nicht ausschließlich der Anschaffungspreis betrachtet werden?",

        antworten: [
            {
                text: "Auch Betriebs-, Wartungs- und Folgekosten können die Wirtschaftlichkeit beeinflussen",
                richtig: true
            },
            {
                text: "Weil der Anschaffungspreis grundsätzlich keine Rolle spielt",
                richtig: false
            },
            {
                text: "Weil immer automatisch die teuerste Lösung gewählt werden muss",
                richtig: false
            },
            {
                text: "Weil Wirtschaftlichkeit ausschließlich von der Netzwerkgeschwindigkeit abhängt",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["wirtschaftlichkeit-projekt"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf12bq013",
        frage: "Ein neuer Server soll in eine bestehende Infrastruktur integriert werden. Was gehört typischerweise zur technischen Umsetzung?",

        antworten: [
            {
                text: "Server installieren und konfigurieren",
                richtig: true
            },
            {
                text: "Benötigte Dienste einrichten",
                richtig: true
            },
            {
                text: "Integration in die bestehende Umgebung durchführen",
                richtig: true
            },
            {
                text: "Die geplante Konfiguration vollständig ignorieren",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["projektdurchfuehrung", "loesungskonzept"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq014",
        frage: "Warum sollten nach der technischen Umsetzung Tests durchgeführt werden?",

        antworten: [
            {
                text: "Um zu prüfen, ob die vereinbarten Anforderungen erfüllt werden",
                richtig: true
            },
            {
                text: "Damit die Projektdokumentation überflüssig wird",
                richtig: false
            },
            {
                text: "Damit keine Abnahme mehr notwendig ist",
                richtig: false
            },
            {
                text: "Um sämtliche Systeme unabhängig vom Ergebnis neu zu installieren",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["tests"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf12bq015",
        frage: "Welche Merkmale zeichnen eine sinnvolle Funktionsprüfung aus?",

        antworten: [
            {
                text: "Die erwarteten Ergebnisse sind vorher definiert",
                richtig: true
            },
            {
                text: "Die Testergebnisse werden nachvollziehbar dokumentiert",
                richtig: true
            },
            {
                text: "Die Tests orientieren sich an den Anforderungen",
                richtig: true
            },
            {
                text: "Ein einmaliger Start des Systems reicht grundsätzlich für jede Abnahme aus",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["tests"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq016",
        frage: "Was ist das Ziel einer Abnahme?",

        antworten: [
            {
                text: "Festzustellen, ob die vereinbarte Leistung beziehungsweise die Anforderungen erfüllt wurden",
                richtig: true
            },
            {
                text: "Das Projekt ohne Prüfung sofort zu beenden",
                richtig: false
            },
            {
                text: "Alle Projektdokumente zu löschen",
                richtig: false
            },
            {
                text: "Den Kunden aus der weiteren Durchführung auszuschließen",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["abnahme"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf12bq017",
        frage: "Welche Inhalte können sinnvoll Bestandteil einer Projektdokumentation sein?",

        antworten: [
            {
                text: "Ausgangssituation und Anforderungen",
                richtig: true
            },
            {
                text: "Planung und technische Entscheidungen",
                richtig: true
            },
            {
                text: "Umsetzung, Tests und Ergebnis",
                richtig: true
            },
            {
                text: "Private Passwörter aller Projektbeteiligten im Klartext",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["projektdokumentation"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq018",
        frage: "Was kann zu einer sauberen Übergabe einer IT-Lösung gehören?",

        antworten: [
            {
                text: "Technische Dokumentation übergeben",
                richtig: true
            },
            {
                text: "Anwender beziehungsweise Administratoren bei Bedarf einweisen",
                richtig: true
            },
            {
                text: "Wichtige Betriebsinformationen bereitstellen",
                richtig: true
            },
            {
                text: "Sämtliche Informationen über die Konfiguration zurückhalten",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["kundenuebergabe"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf12bq019",
        frage: "Ein Projekt wurde technisch erfolgreich abgeschlossen, dauerte aber deutlich länger als geplant. Was sollte beim Projektabschluss sinnvollerweise geschehen?",

        antworten: [
            {
                text: "Die Abweichung analysieren und Erkenntnisse für zukünftige Projekte dokumentieren",
                richtig: true
            },
            {
                text: "Die Verzögerung grundsätzlich ignorieren",
                richtig: false
            },
            {
                text: "Alle Projektdaten löschen",
                richtig: false
            },
            {
                text: "Die technische Lösung ausschließlich wegen der Verzögerung zurückbauen",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: ["projektabschluss"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf12bq020",
        frage: "Welche Vorgehensweisen unterstützen einen professionell durchgeführten Kundenauftrag?",

        antworten: [
            {
                text: "Anforderungen vor der Umsetzung eindeutig klären",
                richtig: true
            },
            {
                text: "Planung und technische Entscheidungen nachvollziehbar dokumentieren",
                richtig: true
            },
            {
                text: "Das Ergebnis testen und anschließend sauber übergeben",
                richtig: true
            },
            {
                text: "Während des Projekts möglichst ohne Planung beliebige Änderungen durchführen",
                richtig: false
            }
        ],

        lernfelder: ["lf12b"],
        themen: [
            "anforderungsanalyse",
            "projektplanung",
            "tests",
            "kundenuebergabe"
        ],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    }
];