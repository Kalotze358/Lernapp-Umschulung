const lf02Fragen = [
    {
        id: "lf02q001",
        frage: "Was sollte vor der Auswahl eines neuen IT-Arbeitsplatzes zuerst ermittelt werden?",

        antworten: [
            {
                text: "Die Anforderungen und der Einsatzzweck des Kunden",
                richtig: true
            },
            {
                text: "Ausschließlich die Farbe des Computergehäuses",
                richtig: false
            },
            {
                text: "Nur die maximale verfügbare Prozessorleistung",
                richtig: false
            },
            {
                text: "Die MAC-Adresse des späteren Arbeitsplatzes",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["kundenanforderungen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q002",
        frage: "Welche Informationen sind bei der Ermittlung von Kundenanforderungen relevant?",

        antworten: [
            {
                text: "Einsatzzweck des Arbeitsplatzes",
                richtig: true
            },
            {
                text: "Benötigte Anwendungen",
                richtig: true
            },
            {
                text: "Verfügbares Budget",
                richtig: true
            },
            {
                text: "Die zufällige Auswahl möglichst teurer Hardware",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["kundenanforderungen"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf02q003",
        frage: "Welche Aufgabe übernimmt die CPU hauptsächlich?",

        antworten: [
            {
                text: "Befehle und Berechnungen verarbeiten",
                richtig: true
            },
            {
                text: "Daten ausschließlich dauerhaft speichern",
                richtig: false
            },
            {
                text: "Netzwerkkabel miteinander verbinden",
                richtig: false
            },
            {
                text: "Dokumente auf Papier ausgeben",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["hardwarekomponenten", "prozessor"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q004",
        frage: "Welche Merkmale können bei der Auswahl eines Prozessors eine Rolle spielen?",

        antworten: [
            {
                text: "Anzahl der Prozessorkerne",
                richtig: true
            },
            {
                text: "Taktfrequenz",
                richtig: true
            },
            {
                text: "Unterstützte Funktionen und Architektur",
                richtig: true
            },
            {
                text: "Die Bildschirmdiagonale des Monitors",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["prozessor"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf02q005",
        frage: "Welche Aufgabe hat der Arbeitsspeicher eines Computers?",

        antworten: [
            {
                text: "Aktuell benötigte Daten und Programme schnell bereitstellen",
                richtig: true
            },
            {
                text: "Daten auch ohne Strom dauerhaft speichern",
                richtig: false
            },
            {
                text: "Den Computer mit dem Internet verbinden",
                richtig: false
            },
            {
                text: "Die Stromversorgung des Systems übernehmen",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["arbeitsspeicher"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q006",
        frage: "Welcher wesentliche Unterschied besteht zwischen RAM und einer SSD?",

        antworten: [
            {
                text: "RAM ist flüchtiger Arbeitsspeicher, eine SSD speichert Daten dauerhaft",
                richtig: true
            },
            {
                text: "Eine SSD ist flüchtig, RAM speichert Daten dauerhaft",
                richtig: false
            },
            {
                text: "RAM und SSD erfüllen exakt dieselbe Aufgabe",
                richtig: false
            },
            {
                text: "RAM wird ausschließlich für Netzwerkverbindungen verwendet",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["arbeitsspeicher", "massenspeicher"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q007",
        frage: "Welche Vorteile bietet eine SSD gegenüber einer klassischen mechanischen HDD typischerweise?",

        antworten: [
            {
                text: "Kürzere Zugriffszeiten",
                richtig: true
            },
            {
                text: "Keine mechanisch beweglichen Teile",
                richtig: true
            },
            {
                text: "In der Regel höhere Datenraten",
                richtig: true
            },
            {
                text: "Sie benötigt zwingend einen Lesekopf und rotierende Magnetscheiben",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["massenspeicher"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf02q008",
        frage: "Welche Schnittstelle wird typischerweise für eine kabelgebundene Ethernet-Netzwerkverbindung verwendet?",

        antworten: [
            {
                text: "RJ45",
                richtig: true
            },
            {
                text: "HDMI",
                richtig: false
            },
            {
                text: "DisplayPort",
                richtig: false
            },
            {
                text: "3,5-mm-Klinke",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["schnittstellen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q009",
        frage: "Welche Schnittstellen können zur digitalen Bildübertragung an einen Monitor verwendet werden?",

        antworten: [
            {
                text: "HDMI",
                richtig: true
            },
            {
                text: "DisplayPort",
                richtig: true
            },
            {
                text: "RJ45",
                richtig: false
            },
            {
                text: "SATA",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["schnittstellen", "peripherie"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf02q010",
        frage: "Welche Geräte zählen typischerweise zur Peripherie eines Arbeitsplatzes?",

        antworten: [
            {
                text: "Monitor",
                richtig: true
            },
            {
                text: "Tastatur",
                richtig: true
            },
            {
                text: "Maus",
                richtig: true
            },
            {
                text: "CPU-Kern",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["peripherie"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf02q011",
        frage: "Welche grundlegende Aufgabe übernimmt ein Betriebssystem?",

        antworten: [
            {
                text: "Hardware verwalten und Funktionen für Anwendungen und Benutzer bereitstellen",
                richtig: true
            },
            {
                text: "Ausschließlich Webseiten anzeigen",
                richtig: false
            },
            {
                text: "Nur die Stromversorgung des Computers steuern",
                richtig: false
            },
            {
                text: "Ausschließlich Dateien ausdrucken",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["betriebssysteme"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q012",
        frage: "Welche Kriterien sollten bei der Auswahl von Software berücksichtigt werden?",

        antworten: [
            {
                text: "Benötigter Funktionsumfang",
                richtig: true
            },
            {
                text: "Kompatibilität mit der vorhandenen Umgebung",
                richtig: true
            },
            {
                text: "Systemanforderungen",
                richtig: true
            },
            {
                text: "Ausschließlich das Symbol der Anwendung",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["softwareauswahl"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf02q013",
        frage: "Warum müssen Softwarelizenzen bei der Ausstattung eines Arbeitsplatzes berücksichtigt werden?",

        antworten: [
            {
                text: "Weil Software nur entsprechend den jeweiligen Lizenzbedingungen genutzt werden darf",
                richtig: true
            },
            {
                text: "Weil jede Software grundsätzlich kostenlos verwendet werden darf",
                richtig: false
            },
            {
                text: "Weil eine Lizenz die CPU-Leistung erhöht",
                richtig: false
            },
            {
                text: "Weil Lizenzen ausschließlich für Drucker erforderlich sind",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["softwarelizenzen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q014",
        frage: "Welche Maßnahmen können zu einem ergonomischen Bildschirmarbeitsplatz beitragen?",

        antworten: [
            {
                text: "Geeignete Monitorhöhe",
                richtig: true
            },
            {
                text: "Sinnvolle Sitzposition",
                richtig: true
            },
            {
                text: "Ausreichende Beleuchtung",
                richtig: true
            },
            {
                text: "Den Bildschirm unabhängig vom Benutzer möglichst hoch aufstellen",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["ergonomie"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf02q015",
        frage: "Warum sollte bei der Auswahl eines IT-Arbeitsplatzes auch die Energieeffizienz berücksichtigt werden?",

        antworten: [
            {
                text: "Sie kann Betriebskosten und Umweltbelastung reduzieren",
                richtig: true
            },
            {
                text: "Sie sorgt automatisch für unbegrenzte Rechenleistung",
                richtig: false
            },
            {
                text: "Sie macht Softwarelizenzen überflüssig",
                richtig: false
            },
            {
                text: "Sie ersetzt die Anforderungsanalyse des Kunden",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["energieeffizienz", "wirtschaftlichkeit"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q016",
        frage: "Welche Kosten können bei einer Wirtschaftlichkeitsbetrachtung eines Arbeitsplatzes relevant sein?",

        antworten: [
            {
                text: "Anschaffungskosten",
                richtig: true
            },
            {
                text: "Energiekosten",
                richtig: true
            },
            {
                text: "Wartungs- und Betriebskosten",
                richtig: true
            },
            {
                text: "Nur die Farbe des Gehäuses",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["wirtschaftlichkeit", "energieeffizienz"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf02q017",
        frage: "Warum ist die günstigste Hardware nicht automatisch die wirtschaftlichste Lösung?",

        antworten: [
            {
                text: "Weil auch Betriebskosten, Wartung und Nutzungsdauer berücksichtigt werden müssen",
                richtig: true
            },
            {
                text: "Weil grundsätzlich immer das teuerste Produkt gekauft werden muss",
                richtig: false
            },
            {
                text: "Weil der Kaufpreis bei einer Beschaffung keine Rolle spielt",
                richtig: false
            },
            {
                text: "Weil Wirtschaftlichkeit ausschließlich von der CPU-Taktfrequenz abhängt",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["wirtschaftlichkeit"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf02q018",
        frage: "Welche Schritte gehören typischerweise zur Bereitstellung eines neuen Arbeitsplatzes?",

        antworten: [
            {
                text: "Betriebssystem installieren",
                richtig: true
            },
            {
                text: "Benötigte Treiber und Anwendungen installieren",
                richtig: true
            },
            {
                text: "System entsprechend den Anforderungen konfigurieren",
                richtig: true
            },
            {
                text: "Die Funktionsprüfung grundsätzlich überspringen",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["installation-konfiguration"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf02q019",
        frage: "Was sollte nach der Installation und Konfiguration eines Arbeitsplatzes erfolgen?",

        antworten: [
            {
                text: "Die Funktionsfähigkeit des Systems prüfen",
                richtig: true
            },
            {
                text: "Sämtliche Dokumentation löschen",
                richtig: false
            },
            {
                text: "Das Betriebssystem sofort erneut installieren",
                richtig: false
            },
            {
                text: "Alle Sicherheitsfunktionen deaktivieren",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["installation-konfiguration"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf02q020",
        frage: "Welche Informationen können in der Dokumentation eines eingerichteten Arbeitsplatzes sinnvoll sein?",

        antworten: [
            {
                text: "Verwendete Hardware",
                richtig: true
            },
            {
                text: "Installierte Software",
                richtig: true
            },
            {
                text: "Besondere Einstellungen und Konfigurationen",
                richtig: true
            },
            {
                text: "Private Passwörter des Benutzers im Klartext",
                richtig: false
            }
        ],

        lernfelder: ["lf02"],
        themen: ["dokumentation-uebergabe"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
    id: "lf02q021",
    frage: "Ein vorhandener PC soll auf ein neues Betriebssystem umgestellt werden. Welche Punkte sollten vor der Installation geprüft werden?",

    antworten: [
        {
            text: "Ob die Hardware die Systemanforderungen erfüllt",
            richtig: true
        },
        {
            text: "Ob benötigte Treiber für die Hardware verfügbar sind",
            richtig: true
        },
        {
            text: "Ob die vorhandenen Komponenten mit dem Betriebssystem kompatibel sind",
            richtig: true
        },
        {
            text: "Nur die Farbe des Computergehäuses",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["hardwarekomponenten", "betriebssysteme"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf02q022",
    frage: "Für einen neuen Bildschirmarbeitsplatz soll geeignete Hardware ausgewählt werden. Welche Kombination berücksichtigt sowohl technische als auch ergonomische Anforderungen sinnvoll?",

    antworten: [
        {
            text: "Leistungsfähige, bedarfsgerechte Hardware sowie geeigneter Monitor und passende Eingabegeräte",
            richtig: true
        },
        {
            text: "Ausschließlich die leistungsstärkste CPU unabhängig vom Einsatzzweck",
            richtig: false
        },
        {
            text: "Möglichst kleiner Monitor und ungeeignete Eingabegeräte, wenn sie günstiger sind",
            richtig: false
        },
        {
            text: "Die Ergonomie spielt bei der Hardwareauswahl grundsätzlich keine Rolle",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["hardwarekomponenten", "ergonomie"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf02q023",
    frage: "Eine benötigte Fachanwendung soll auf mehreren Arbeitsplätzen eingesetzt werden. Was sollte vor der Softwareauswahl geprüft werden?",

    antworten: [
        {
            text: "Ob die Anwendung mit dem eingesetzten Betriebssystem kompatibel ist",
            richtig: true
        },
        {
            text: "Ob die Systemanforderungen erfüllt werden",
            richtig: true
        },
        {
            text: "Ob die benötigten Funktionen bereitgestellt werden",
            richtig: true
        },
        {
            text: "Ob das Programmsymbol farblich zum Desktop-Hintergrund passt",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["betriebssysteme", "softwareauswahl"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf02q024",
    frage: "Zwei Programme erfüllen technisch dieselben Anforderungen. Eines darf laut Lizenz nur auf einem Gerät genutzt werden, das andere besitzt eine passende Mehrplatzlizenz. Was sollte bei der Entscheidung berücksichtigt werden?",

    antworten: [
        {
            text: "Neben der Funktionalität müssen auch die Lizenzbedingungen zum geplanten Einsatz passen",
            richtig: true
        },
        {
            text: "Lizenzbedingungen können ignoriert werden, wenn beide Programme technisch funktionieren",
            richtig: false
        },
        {
            text: "Es muss grundsätzlich immer das Programm mit dem höchsten Preis gewählt werden",
            richtig: false
        },
        {
            text: "Softwarelizenzen sind nur für Server relevant",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["softwareauswahl", "softwarelizenzen"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf02q025",
    frage: "Warum kann es sinnvoll sein, bei der Übergabe eines Arbeitsplatzes auch Informationen zu installierter Software und deren Lizenzierung zu dokumentieren?",

    antworten: [
        {
            text: "Damit nachvollziehbar bleibt, welche Software installiert und wie sie lizenziert ist",
            richtig: true
        },
        {
            text: "Damit spätere Wartung und Lizenzprüfung erleichtert werden",
            richtig: true
        },
        {
            text: "Damit Änderungen am Arbeitsplatz nachvollziehbarer bleiben",
            richtig: true
        },
        {
            text: "Damit private Benutzerpasswörter im Klartext gespeichert werden können",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["softwarelizenzen", "dokumentation-uebergabe"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf02q026",
    frage: "Ein neuer Arbeitsplatz wurde technisch eingerichtet und ergonomisch an den Benutzer angepasst. Was gehört zu einer professionellen Übergabe?",

    antworten: [
        {
            text: "Die wichtigsten Einstellungen und Besonderheiten dokumentieren",
            richtig: true
        },
        {
            text: "Den Benutzer bei Bedarf in die Nutzung und ergonomische Einstellung des Arbeitsplatzes einweisen",
            richtig: true
        },
        {
            text: "Prüfen, ob Arbeitsplatz und Peripherie wie vorgesehen funktionieren",
            richtig: true
        },
        {
            text: "Nach der Einrichtung sämtliche Informationen zur Konfiguration löschen",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["ergonomie", "dokumentation-uebergabe"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf02q027",
    frage: "Ein neuer Arbeitsplatz wird für rechenintensive Anwendungen geplant. Welche Komponenten sollten besonders auf die Leistungsanforderungen abgestimmt werden?",

    antworten: [
        {
            text: "Prozessor und Arbeitsspeicher",
            richtig: true
        },
        {
            text: "Nur die Gehäusefarbe",
            richtig: false
        },
        {
            text: "Ausschließlich Maus und Tastatur",
            richtig: false
        },
        {
            text: "Nur das Netzwerkkabel",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["prozessor", "arbeitsspeicher"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "lf02q028",
    frage: "Ein Kunde benötigt einen Arbeitsplatz mit viel dauerhaftem Speicher und mehreren externen Geräten. Welche Punkte müssen bei der Auswahl berücksichtigt werden?",

    antworten: [
        {
            text: "Ausreichende Kapazität und geeignete Massenspeichertechnik",
            richtig: true
        },
        {
            text: "Genügend passende Schnittstellen für die benötigten Geräte",
            richtig: true
        },
        {
            text: "Art und Geschwindigkeit der benötigten Anschlüsse",
            richtig: true
        },
        {
            text: "Die Anzahl der Schnittstellen spielt bei der Planung grundsätzlich keine Rolle",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["massenspeicher", "schnittstellen"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf02q029",
    frage: "Vor der Beschaffung eines neuen Arbeitsplatzes werden die Anforderungen des Kunden aufgenommen. Warum sollte dabei auch die benötigte Peripherie berücksichtigt werden?",

    antworten: [
        {
            text: "Weil sich aus dem Einsatzzweck beispielsweise Anforderungen an Monitor, Eingabegeräte, Headset oder Drucker ergeben können",
            richtig: true
        },
        {
            text: "Weil jeder Kunde unabhängig vom Einsatzzweck dieselbe Peripherie benötigt",
            richtig: false
        },
        {
            text: "Weil Peripheriegeräte grundsätzlich keine Schnittstellen benötigen",
            richtig: false
        },
        {
            text: "Weil Kundenanforderungen erst nach der Beschaffung berücksichtigt werden sollten",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["kundenanforderungen", "peripherie"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf02q030",
    frage: "Ein Unternehmen richtet 50 neue Arbeitsplätze ein. Welche Maßnahmen können sowohl bei der Bereitstellung als auch beim späteren Energieverbrauch sinnvoll sein?",

    antworten: [
        {
            text: "Installation und Konfiguration nach einem einheitlichen Ablauf durchführen",
            richtig: true
        },
        {
            text: "Energiesparfunktionen passend zum Einsatzzweck konfigurieren",
            richtig: true
        },
        {
            text: "Bei der Hardwareauswahl den Energieverbrauch berücksichtigen",
            richtig: true
        },
        {
            text: "Alle Geräte dauerhaft mit maximaler Leistungsaufnahme betreiben, auch wenn sie nicht genutzt werden",
            richtig: false
        }
    ],

    lernfelder: ["lf02"],
    themen: ["energieeffizienz", "installation-konfiguration"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
}
];