const lf04Fragen = [
    {
        id: "lf04q001",
        frage: "Welche drei grundlegenden Schutzziele gehören zur Informationssicherheit?",

        antworten: [
            {
                text: "Vertraulichkeit",
                richtig: true
            },
            {
                text: "Integrität",
                richtig: true
            },
            {
                text: "Verfügbarkeit",
                richtig: true
            },
            {
                text: "Gewinnmaximierung",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["schutzziele"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf04q002",
        frage: "Welches Schutzziel ist verletzt, wenn Unbefugte vertrauliche Kundendaten lesen können?",

        antworten: [
            {
                text: "Vertraulichkeit",
                richtig: true
            },
            {
                text: "Integrität",
                richtig: false
            },
            {
                text: "Verfügbarkeit",
                richtig: false
            },
            {
                text: "Wirtschaftlichkeit",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["schutzziele"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf04q003",
        frage: "Welches Schutzziel ist betroffen, wenn Daten unbemerkt verändert wurden?",

        antworten: [
            {
                text: "Integrität",
                richtig: true
            },
            {
                text: "Vertraulichkeit",
                richtig: false
            },
            {
                text: "Verfügbarkeit",
                richtig: false
            },
            {
                text: "Ergonomie",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["schutzziele"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf04q004",
        frage: "Wovon hängt der Schutzbedarf eines Systems oder einer Information insbesondere ab?",

        antworten: [
            {
                text: "Von den möglichen Auswirkungen eines Sicherheitsvorfalls",
                richtig: true
            },
            {
                text: "Nur vom Kaufpreis der Hardware",
                richtig: false
            },
            {
                text: "Ausschließlich vom Alter des Systems",
                richtig: false
            },
            {
                text: "Nur von der Anzahl der Benutzer",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["schutzbedarf"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf04q005",
        frage: "Welche Objekte können einen Schutzbedarf besitzen?",

        antworten: [
            {
                text: "Informationen",
                richtig: true
            },
            {
                text: "IT-Systeme",
                richtig: true
            },
            {
                text: "Räume und Kommunikationsverbindungen",
                richtig: true
            },
            {
                text: "Nur Geräte mit Internetzugang",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["schutzobjekte", "schutzbedarf"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf04q006",
        frage: "Welche Beispiele stellen mögliche Bedrohungen oder Gefährdungen dar?",

        antworten: [
            {
                text: "Schadsoftware",
                richtig: true
            },
            {
                text: "Stromausfall",
                richtig: true
            },
            {
                text: "Fehlbedienung",
                richtig: true
            },
            {
                text: "Eine korrekt installierte Sicherheitsaktualisierung",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["bedrohungen"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf04q007",
        frage: "Was ist eine Schwachstelle?",

        antworten: [
            {
                text: "Eine Sicherheitslücke oder Schwäche, die von einer Bedrohung ausgenutzt werden kann",
                richtig: true
            },
            {
                text: "Jeder erfolgreiche Angriff auf ein Unternehmen",
                richtig: false
            },
            {
                text: "Eine automatisch erstellte Datensicherung",
                richtig: false
            },
            {
                text: "Ein ausschließlich physischer Schaden an Hardware",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["schwachstellen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf04q008",
        frage: "Welche Beispiele stellen typische Schwachstellen dar?",

        antworten: [
            {
                text: "Ungepatchte Software",
                richtig: true
            },
            {
                text: "Unsichere Passwörter",
                richtig: true
            },
            {
                text: "Fehlkonfigurierte Systeme",
                richtig: true
            },
            {
                text: "Eine funktionierende Mehrfaktor-Authentifizierung",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["schwachstellen", "updates-patches"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf04q009",
        frage: "Welche Faktoren werden bei einer einfachen Risikobewertung typischerweise berücksichtigt?",

        antworten: [
            {
                text: "Eintrittswahrscheinlichkeit",
                richtig: true
            },
            {
                text: "Mögliche Schadenshöhe",
                richtig: true
            },
            {
                text: "Die Farbe des Servergehäuses",
                richtig: false
            },
            {
                text: "Die Anzahl der USB-Anschlüsse",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["risiko"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf04q010",
        frage: "Welche Arten von Sicherheitsmaßnahmen werden häufig unterschieden?",

        antworten: [
            {
                text: "Technische Maßnahmen",
                richtig: true
            },
            {
                text: "Organisatorische Maßnahmen",
                richtig: true
            },
            {
                text: "Personelle Maßnahmen",
                richtig: true
            },
            {
                text: "Ausschließlich optische Maßnahmen",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["sicherheitsmassnahmen"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf04q011",
        frage: "Welche Zuordnung ist korrekt?",

        antworten: [
            {
                text: "Zutritt = Räume und Gebäude",
                richtig: true
            },
            {
                text: "Zugang = Nutzung eines IT-Systems",
                richtig: true
            },
            {
                text: "Zugriff = Berechtigung auf Daten und Funktionen",
                richtig: true
            },
            {
                text: "Zutritt = ausschließlich Zugriff auf Dateien",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["zutritt-zugang-zugriff"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf04q012",
        frage: "Was ist das Grundprinzip einer Mehrfaktor-Authentifizierung?",

        antworten: [
            {
                text: "Mindestens zwei unterschiedliche Authentifizierungsfaktoren werden kombiniert",
                richtig: true
            },
            {
                text: "Dasselbe Passwort wird zweimal eingegeben",
                richtig: false
            },
            {
                text: "Zwei verschiedene Benutzernamen werden gleichzeitig verwendet",
                richtig: false
            },
            {
                text: "Der Benutzer benötigt grundsätzlich zwei Computer",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["passwoerter-mfa"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf04q013",
        frage: "Welche Beispiele gehören zu unterschiedlichen Authentifizierungsfaktoren?",

        antworten: [
            {
                text: "Passwort als Wissensfaktor",
                richtig: true
            },
            {
                text: "Hardware-Token oder Smartphone als Besitzfaktor",
                richtig: true
            },
            {
                text: "Fingerabdruck als biometrischer Faktor",
                richtig: true
            },
            {
                text: "Zwei verschiedene Passwörter als zwei unterschiedliche Faktorarten",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["passwoerter-mfa"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf04q014",
        frage: "Was bedeutet das Least-Privilege-Prinzip?",

        antworten: [
            {
                text: "Benutzer erhalten nur die Rechte, die sie für ihre Aufgaben benötigen",
                richtig: true
            },
            {
                text: "Jeder Benutzer erhält grundsätzlich Administratorrechte",
                richtig: false
            },
            {
                text: "Benutzer dürfen keinerlei Berechtigungen besitzen",
                richtig: false
            },
            {
                text: "Berechtigungen werden ausschließlich nach Betriebszugehörigkeit vergeben",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["berechtigungen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf04q015",
        frage: "Welche Programme zählen zu Schadsoftware?",

        antworten: [
            {
                text: "Ransomware",
                richtig: true
            },
            {
                text: "Trojaner",
                richtig: true
            },
            {
                text: "Computerwürmer",
                richtig: true
            },
            {
                text: "Ein reguläres Sicherheitsupdate",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["malware"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf04q016",
        frage: "Was beschreibt Social Engineering?",

        antworten: [
            {
                text: "Die gezielte Manipulation von Menschen, um Informationen oder Zugang zu erhalten",
                richtig: true
            },
            {
                text: "Die automatische Konfiguration eines Switches",
                richtig: false
            },
            {
                text: "Die Reparatur beschädigter Hardware",
                richtig: false
            },
            {
                text: "Die Verschlüsselung einer Festplatte",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["social-engineering"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf04q017",
        frage: "Welche Merkmale können auf einen Phishing-Versuch hindeuten?",

        antworten: [
            {
                text: "Ungewöhnlicher Zeitdruck",
                richtig: true
            },
            {
                text: "Aufforderung zur Eingabe vertraulicher Zugangsdaten",
                richtig: true
            },
            {
                text: "Verdächtige Links oder Absender",
                richtig: true
            },
            {
                text: "Jede intern versendete E-Mail ist automatisch Phishing",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["social-engineering"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf04q018",
        frage: "Warum ist regelmäßiges Patchmanagement wichtig?",

        antworten: [
            {
                text: "Bekannte Sicherheitslücken können dadurch geschlossen werden",
                richtig: true
            },
            {
                text: "Dadurch werden automatisch alle Benutzer zu Administratoren",
                richtig: false
            },
            {
                text: "Dadurch werden Datensicherungen überflüssig",
                richtig: false
            },
            {
                text: "Damit Computer grundsätzlich mehr Arbeitsspeicher erhalten",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["updates-patches"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf04q019",
        frage: "Welche Aussagen über Datensicherungen sind korrekt?",

        antworten: [
            {
                text: "Backups sollten regelmäßig durchgeführt werden",
                richtig: true
            },
            {
                text: "Die Wiederherstellung sollte getestet werden",
                richtig: true
            },
            {
                text: "Backups können nach Datenverlust bei der Wiederherstellung helfen",
                richtig: true
            },
            {
                text: "Ein vorhandenes Backup macht weitere Sicherheitsmaßnahmen unnötig",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["datensicherung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf04q020",
        frage: "Was unterscheidet Datenschutz und Informationssicherheit am besten?",

        antworten: [
            {
                text: "Datenschutz konzentriert sich insbesondere auf personenbezogene Daten, Informationssicherheit auf Informationen allgemein",
                richtig: true
            },
            {
                text: "Datenschutz betrifft nur Papierdokumente, Informationssicherheit nur Computer",
                richtig: false
            },
            {
                text: "Beide Begriffe bedeuten vollständig dasselbe",
                richtig: false
            },
            {
                text: "Informationssicherheit beschäftigt sich ausschließlich mit Passwörtern",
                richtig: false
            }
        ],

        lernfelder: ["lf04"],
        themen: ["datenschutz", "schutzziele"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
    id: "lf04q021",
    frage: "Ein Unternehmen bewertet seinen zentralen Kundendatenbestand. Welche Überlegungen sind für die Schutzbedarfs- und Risikobetrachtung sinnvoll?",

    antworten: [
        {
            text: "Welche Auswirkungen ein Verlust oder eine Manipulation der Daten hätte",
            richtig: true
        },
        {
            text: "Wie wichtig die Daten für Geschäftsprozesse sind",
            richtig: true
        },
        {
            text: "Welche möglichen Schäden bei einem Sicherheitsvorfall entstehen könnten",
            richtig: true
        },
        {
            text: "Ausschließlich die Dateigröße der gespeicherten Daten",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["schutzobjekte", "risiko"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf04q022",
    frage: "Ein Serverraum enthält zentrale Systeme und Sicherungsmedien. Welche Bedrohungen sollten bei der Betrachtung dieses Schutzobjekts berücksichtigt werden?",

    antworten: [
        {
            text: "Feuer oder Wasserschäden",
            richtig: true
        },
        {
            text: "Unberechtigter Zutritt",
            richtig: true
        },
        {
            text: "Stromausfälle oder technische Defekte",
            richtig: true
        },
        {
            text: "Nur Angriffe aus dem Internet sind relevant",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["schutzobjekte", "bedrohungen"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf04q023",
    frage: "Mitarbeiter erhalten regelmäßig gefälschte E-Mails mit schädlichen Anhängen. Welche Kombination aus Bedrohung und Sicherheitsmaßnahme passt am besten?",

    antworten: [
        {
            text: "Phishing beziehungsweise Schadsoftware als Bedrohung und Anwenderschulung sowie technische Schutzmaßnahmen als Gegenmaßnahmen",
            richtig: true
        },
        {
            text: "Hardwareverschleiß als Bedrohung und Bildschirmreinigung als Gegenmaßnahme",
            richtig: false
        },
        {
            text: "Stromausfall als Bedrohung und Passwortänderung als einzige Gegenmaßnahme",
            richtig: false
        },
        {
            text: "Eine Sicherheitsmaßnahme ist nicht notwendig, solange noch kein erfolgreicher Angriff stattgefunden hat",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["bedrohungen", "sicherheitsmassnahmen"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf04q024",
    frage: "Welche Maßnahmen können den physischen und technischen Zugang zu besonders schützenswerten IT-Systemen sinnvoll begrenzen?",

    antworten: [
        {
            text: "Serverraum nur für berechtigte Personen zugänglich machen",
            richtig: true
        },
        {
            text: "Anmeldung am System durch geeignete Authentifizierung absichern",
            richtig: true
        },
        {
            text: "Berechtigungen auf benötigte Daten und Funktionen beschränken",
            richtig: true
        },
        {
            text: "Allen Mitarbeitern vorsorglich vollständigen Zugriff geben",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["sicherheitsmassnahmen", "zutritt-zugang-zugriff"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf04q025",
    frage: "Ein Mitarbeiter kann sich an einem Fileserver anmelden, soll aber nur die Dateien seiner eigenen Abteilung lesen können. Welche Kontrollen sind hier besonders relevant?",

    antworten: [
        {
            text: "Zugangskontrolle für die Anmeldung und Zugriffskontrolle für die erlaubten Dateien",
            richtig: true
        },
        {
            text: "Nur die Zutrittskontrolle zum Firmengebäude",
            richtig: false
        },
        {
            text: "Ausschließlich die IP-Adresse des Arbeitsplatzes",
            richtig: false
        },
        {
            text: "Nach erfolgreicher Anmeldung sollten grundsätzlich alle Dateien zugänglich sein",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["zutritt-zugang-zugriff", "berechtigungen"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf04q026",
    frage: "In einem Personalverwaltungssystem befinden sich sensible personenbezogene Daten. Welche Vorgehensweise unterstützt sowohl Datenschutz als auch ein sinnvolles Berechtigungskonzept?",

    antworten: [
        {
            text: "Nur Benutzer mit dienstlicher Notwendigkeit erhalten die erforderlichen Rechte",
            richtig: true
        },
        {
            text: "Berechtigungen werden regelmäßig überprüft",
            richtig: true
        },
        {
            text: "Zugriffe werden nach Aufgaben und Zuständigkeiten begrenzt",
            richtig: true
        },
        {
            text: "Alle Beschäftigten erhalten aus Gründen der Einfachheit Vollzugriff",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["berechtigungen", "datenschutz"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf04q027",
    frage: "Ein Unternehmen sichert personenbezogene Kundendaten regelmäßig. Welche Punkte sind dabei besonders zu beachten?",

    antworten: [
        {
            text: "Auch Sicherungskopien müssen vor unberechtigtem Zugriff geschützt werden",
            richtig: true
        },
        {
            text: "Die Wiederherstellbarkeit der Daten sollte geprüft werden",
            richtig: true
        },
        {
            text: "Aufbewahrung und Zugriff auf Sicherungen sollten geregelt sein",
            richtig: true
        },
        {
            text: "Datenschutz spielt bei Backups grundsätzlich keine Rolle",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["datenschutz", "datensicherung"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf04q028",
    frage: "Ein Arbeitsplatz wird durch Ransomware verschlüsselt. Warum kann eine geeignete Datensicherungsstrategie besonders wichtig sein?",

    antworten: [
        {
            text: "Nicht betroffene und funktionsfähige Sicherungen können eine Wiederherstellung der Daten ermöglichen",
            richtig: true
        },
        {
            text: "Ein Backup verhindert automatisch jede Infektion mit Schadsoftware",
            richtig: false
        },
        {
            text: "Bei vorhandenen Backups werden Sicherheitsupdates grundsätzlich überflüssig",
            richtig: false
        },
        {
            text: "Sicherungskopien sollten möglichst dauerhaft direkt durch jedes infizierte System beschreibbar sein",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["datensicherung", "malware"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf04q029",
    frage: "Auf mehreren Arbeitsplatzrechnern läuft veraltete Software mit einer bekannten Schwachstelle, über die Schadsoftware eingeschleust werden könnte. Welche Bewertung ist sinnvoll?",

    antworten: [
        {
            text: "Die vorhandene Schwachstelle erhöht zusammen mit der Bedrohung durch Schadsoftware das Sicherheitsrisiko",
            richtig: true
        },
        {
            text: "Ein Risiko besteht erst, nachdem definitiv ein Schaden eingetreten ist",
            richtig: false
        },
        {
            text: "Bekannte Schwachstellen sind irrelevant, wenn die Computer noch funktionieren",
            richtig: false
        },
        {
            text: "Schadsoftware kann grundsätzlich keine bekannten Softwarelücken ausnutzen",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["malware", "risiko"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf04q030",
    frage: "Ein Unternehmen entdeckt auf einem öffentlich erreichbaren Server eine Schwachstelle, durch die vertrauliche Kundendaten offengelegt werden könnten. Welche Bewertung ist sinnvoll?",

    antworten: [
        {
            text: "Der mögliche Schaden für die Vertraulichkeit der Kundendaten muss bei der Schutzbedarfs- und Risikobewertung berücksichtigt werden",
            richtig: true
        },
        {
            text: "Die Schwachstelle ist bedeutungslos, solange sie noch nicht ausgenutzt wurde",
            richtig: false
        },
        {
            text: "Der Schutzbedarf hängt ausschließlich vom Anschaffungspreis des Servers ab",
            richtig: false
        },
        {
            text: "Öffentlich erreichbare Systeme benötigen grundsätzlich keinen besonderen Schutz",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["schutzbedarf", "schwachstellen"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf04q031",
    frage: "Ein Mitarbeiter erhält eine täuschend echt wirkende E-Mail und wird aufgefordert, sich über einen enthaltenen Link mit seinem Firmenkonto anzumelden. Welche Maßnahmen reduzieren das Risiko eines erfolgreichen Angriffs?",

    antworten: [
        {
            text: "Verdächtige Links und Absender kritisch prüfen",
            richtig: true
        },
        {
            text: "Mehrfaktor-Authentifizierung für das Benutzerkonto einsetzen",
            richtig: true
        },
        {
            text: "Mitarbeiter für Phishing und Social Engineering sensibilisieren",
            richtig: true
        },
        {
            text: "Das Firmenpasswort vorsorglich direkt über den Link in der E-Mail eingeben",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["passwoerter-mfa", "social-engineering"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf04q032",
    frage: "Für eine weit verbreitete Anwendung wird eine kritische Sicherheitslücke bekannt und der Hersteller stellt einen Patch bereit. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Betroffene Systeme identifizieren, den Patch kontrolliert prüfen und entsprechend der Kritikalität zeitnah verteilen",
            richtig: true
        },
        {
            text: "Den Patch grundsätzlich ignorieren, solange die Anwendung noch startet",
            richtig: false
        },
        {
            text: "Sicherheitspatches erst installieren, wenn ein erfolgreicher Angriff stattgefunden hat",
            richtig: false
        },
        {
            text: "Alle Schutzmaßnahmen deaktivieren, damit das Update schneller installiert werden kann",
            richtig: false
        }
    ],

    lernfelder: ["lf04"],
    themen: ["updates-patches", "schwachstellen"],
    schwierigkeit: "schwer",
    typ: "single-choice"
}
];