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
},
{
    id: "lf04q033",
    frage: "Welche drei Schutzziele gehören zur CIA-Triade der Informationssicherheit?",
    antworten: [
        {
            text: "Vertraulichkeit, Integrität und Verfügbarkeit",
            richtig: true
        },
        {
            text: "Authentifizierung, Autorisierung und Protokollierung",
            richtig: false
        },
        {
            text: "Verschlüsselung, Redundanz und Datensicherung",
            richtig: false
        },
        {
            text: "Identifikation, Kontrolle und Zugriffsschutz",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q034",
    frage: "Was bedeutet das Schutzziel Vertraulichkeit?",
    antworten: [
        {
            text: "Informationen dürfen nur von berechtigten Personen oder Systemen eingesehen werden.",
            richtig: true
        },
        {
            text: "Informationen müssen jederzeit ohne Unterbrechung erreichbar sein.",
            richtig: false
        },
        {
            text: "Informationen dürfen ausschließlich verschlüsselt gespeichert werden.",
            richtig: false
        },
        {
            text: "Informationen müssen nach jeder Änderung automatisch gesichert werden.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q035",
    frage: "Welches Beispiel beschreibt eine Verletzung der Vertraulichkeit?",
    antworten: [
        {
            text: "Ein unberechtigter Mitarbeiter kann Gehaltsdaten anderer Beschäftigter einsehen.",
            richtig: true
        },
        {
            text: "Eine Rechnungssumme wird bei der Übertragung unbemerkt verändert.",
            richtig: false
        },
        {
            text: "Ein Dateiserver ist wegen eines Defekts nicht erreichbar.",
            richtig: false
        },
        {
            text: "Eine Sicherungskopie wird erfolgreich wiederhergestellt.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele", "zutritt-zugang-zugriff"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q036",
    frage: "Was beschreibt das Schutzziel Integrität am besten?",
    antworten: [
        {
            text: "Daten müssen vollständig und vor unbemerkter beziehungsweise unberechtigter Veränderung geschützt sein.",
            richtig: true
        },
        {
            text: "Daten müssen von jedem Arbeitsplatz aus erreichbar sein.",
            richtig: false
        },
        {
            text: "Daten dürfen nur in verschlüsselter Form übertragen werden.",
            richtig: false
        },
        {
            text: "Daten müssen regelmäßig auf mehrere Server verteilt werden.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q037",
    frage: "Welches Beispiel betrifft hauptsächlich die Integrität von Daten?",
    antworten: [
        {
            text: "Eine Rechnungssumme wird während der Übertragung unbemerkt verändert.",
            richtig: true
        },
        {
            text: "Ein Mitarbeiter kann wegen eines Serverausfalls nicht auf eine Datei zugreifen.",
            richtig: false
        },
        {
            text: "Ein unberechtigter Benutzer liest vertrauliche Personaldaten.",
            richtig: false
        },
        {
            text: "Ein Benutzer meldet sich mit Zwei-Faktor-Authentifizierung an.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q038",
    frage: "Was bedeutet das Schutzziel Verfügbarkeit?",
    antworten: [
        {
            text: "Systeme und Daten müssen bei Bedarf zuverlässig nutzbar sein.",
            richtig: true
        },
        {
            text: "Daten dürfen nur von Administratoren verändert werden.",
            richtig: false
        },
        {
            text: "Alle Daten müssen dauerhaft verschlüsselt gespeichert werden.",
            richtig: false
        },
        {
            text: "Jeder Benutzer muss auf alle benötigten Daten zugreifen dürfen.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q039",
    frage: "Welche Maßnahme unterstützt insbesondere die Verfügbarkeit eines IT-Systems?",
    antworten: [
        {
            text: "Regelmäßige Backups und ein getestetes Wiederherstellungskonzept",
            richtig: true
        },
        {
            text: "Ausschließlich besonders lange Benutzerkennungen",
            richtig: false
        },
        {
            text: "Eine strengere Klassifizierung von Benutzerrollen",
            richtig: false
        },
        {
            text: "Eine Verschlüsselung aller Bildschirmdarstellungen",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele", "datensicherung"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q040",
    frage: "Ein Mitarbeiter darf Gehaltsdaten nur einsehen, wenn seine berufliche Rolle dies erfordert. Welches Schutzziel steht im Vordergrund?",
    antworten: [
        {
            text: "Vertraulichkeit",
            richtig: true
        },
        {
            text: "Verfügbarkeit",
            richtig: false
        },
        {
            text: "Redundanz",
            richtig: false
        },
        {
            text: "Fehlertoleranz",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele", "berechtigungen"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q041",
    frage: "Ein Angreifer verändert unbemerkt die Kontonummer auf einer digitalen Rechnung. Welches Schutzziel wurde verletzt?",
    antworten: [
        {
            text: "Integrität",
            richtig: true
        },
        {
            text: "Verfügbarkeit",
            richtig: false
        },
        {
            text: "Vertraulichkeit",
            richtig: false
        },
        {
            text: "Redundanz",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q042",
    frage: "Ein Ransomware-Angriff verschlüsselt Unternehmensdaten, sodass Mitarbeiter nicht mehr darauf zugreifen können. Welches Schutzziel ist unmittelbar betroffen?",
    antworten: [
        {
            text: "Verfügbarkeit",
            richtig: true
        },
        {
            text: "Vertraulichkeit",
            richtig: false
        },
        {
            text: "Authentifizierung",
            richtig: false
        },
        {
            text: "Zutrittskontrolle",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele", "malware"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q043",
    frage: "Welche Kombination kann gleichzeitig mehrere Schutzziele eines Informationssystems unterstützen?",
    antworten: [
        {
            text: "Verschlüsselung und ein geeignetes Rollen- und Berechtigungskonzept",
            richtig: true
        },
        {
            text: "Ein gemeinsames Administratorkonto für alle Beschäftigten",
            richtig: false
        },
        {
            text: "Die dauerhafte Deaktivierung von Sicherheitsupdates",
            richtig: false
        },
        {
            text: "Uneingeschränkte Schreibrechte für alle Benutzer",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele", "sicherheitsmassnahmen", "berechtigungen"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q044",
    frage: "Was ist im Zusammenhang mit IT-Sicherheit eine Bedrohung?",
    antworten: [
        {
            text: "Eine mögliche Ursache, die eine Schwachstelle ausnutzen und dadurch einen Schaden verursachen kann.",
            richtig: true
        },
        {
            text: "Eine Maßnahme zur Verringerung eines bereits erkannten Risikos.",
            richtig: false
        },
        {
            text: "Eine verbindliche Beschreibung der Netzwerkstruktur.",
            richtig: false
        },
        {
            text: "Eine Sicherheitskopie wichtiger Unternehmensdaten.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["bedrohungen", "risiko"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q045",
    frage: "Welche Situation stellt eine typische Sicherheitsschwachstelle dar?",
    antworten: [
        {
            text: "Mehrere Benutzer verwenden dasselbe einfache Passwort für verschiedene Dienste.",
            richtig: true
        },
        {
            text: "Mitarbeiter verwenden unterschiedliche Authentifizierungsfaktoren.",
            richtig: false
        },
        {
            text: "Sicherheitsupdates werden nach einem geregelten Verfahren installiert.",
            richtig: false
        },
        {
            text: "Benutzer erhalten nur die für ihre Aufgaben erforderlichen Rechte.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schwachstellen", "passwoerter-mfa"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q046",
    frage: "Welches Verhalten stellt ein typisches Sicherheitsrisiko dar?",
    antworten: [
        {
            text: "Einen unbekannten E-Mail-Anhang ungeprüft zu öffnen.",
            richtig: true
        },
        {
            text: "Verdächtige Nachrichten an die zuständige IT-Stelle zu melden.",
            richtig: false
        },
        {
            text: "Sicherheitsupdates zeitnah nach Freigabe einzuspielen.",
            richtig: false
        },
        {
            text: "Für unterschiedliche Dienste unterschiedliche Passwörter zu verwenden.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["risiko", "social-engineering", "malware"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q047",
    frage: "Welche technische Maßnahme schützt ein Unternehmensnetz insbesondere vor unerwünschten Netzwerkverbindungen von außen?",
    antworten: [
        {
            text: "Eine korrekt konfigurierte Firewall",
            richtig: true
        },
        {
            text: "Eine lokale Datensicherung ohne Zugriffsschutz",
            richtig: false
        },
        {
            text: "Ein Verzeichnisdienst ohne Berechtigungsregeln",
            richtig: false
        },
        {
            text: "Ein zusätzliches Benutzerkonto mit Administratorrechten",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["sicherheitsmassnahmen"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q048",
    frage: "Mitarbeiter dürfen auf eine Kundendatenbank nur entsprechend ihrer jeweiligen Rolle zugreifen. Welche Sicherheitsmaßnahme wird angewendet?",
    antworten: [
        {
            text: "Ein Rollen- und Berechtigungskonzept",
            richtig: true
        },
        {
            text: "Eine Malware-Signatur",
            richtig: false
        },
        {
            text: "Ein vollständiger Netzwerk-Scan",
            richtig: false
        },
        {
            text: "Eine redundante Datenspeicherung",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["berechtigungen", "zutritt-zugang-zugriff"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q049",
    frage: "Welche Maßnahme ermöglicht nach einem Hardwaredefekt die Wiederherstellung wichtiger Daten?",
    antworten: [
        {
            text: "Ein aktuelles und erfolgreich getestetes Backup",
            richtig: true
        },
        {
            text: "Eine Firewall-Regel für eingehende Verbindungen",
            richtig: false
        },
        {
            text: "Eine stärkere Passwortkomplexität",
            richtig: false
        },
        {
            text: "Eine Zwei-Faktor-Authentifizierung",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datensicherung", "sicherheitsmassnahmen"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q050",
    frage: "Ein Administrator möchte nachvollziehen können, wer Änderungen an wichtigen Daten vorgenommen hat. Welche Maßnahme unterstützt dieses Ziel?",
    antworten: [
        {
            text: "Logging und Protokollierung",
            richtig: true
        },
        {
            text: "Deaktivierung der Ereignisprotokolle",
            richtig: false
        },
        {
            text: "Verwendung eines gemeinsamen Benutzerkontos",
            richtig: false
        },
        {
            text: "Reduzierung der Anzahl vorhandener Backups",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["sicherheitsmassnahmen", "berechtigungen"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q051",
    frage: "Ein Mitarbeiter öffnet einen manipulierten E-Mail-Anhang, der Schadsoftware enthält. Welche Kombination beschreibt die Situation am besten?",
    antworten: [
        {
            text: "Bedrohung durch Schadsoftware und Erhöhung des Risikos durch unvorsichtiges Nutzerverhalten",
            richtig: true
},
        {
            text: "Bedrohung durch Datensicherung und Schutzmaßnahme durch Passwortwechsel",
            richtig: false
        },
        {
            text: "Bedrohung durch Berechtigungen und Schutzmaßnahme durch Deaktivierung der Firewall",
            richtig: false
        },
        {
            text: "Bedrohung durch Zwei-Faktor-Authentifizierung und Schutzmaßnahme durch Malware",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["bedrohungen", "malware", "social-engineering", "sicherheitsmassnahmen"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},

{
    id: "lf04q052",
    frage: "Ein Unternehmen möchte verhindern, dass Unbefugte Kundendaten lesen und berechtigte Mitarbeiter diese Daten unbemerkt verändern. Welche beiden Schutzziele sind besonders relevant?",
    antworten: [
        {
            text: "Vertraulichkeit und Integrität",
            richtig: true
        },
        {
            text: "Verfügbarkeit und Redundanz",
            richtig: false
        },
        {
            text: "Verfügbarkeit und Authentifizierung",
            richtig: false
        },
        {
            text: "Redundanz und Datensicherung",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q053",
    frage: "Ein Server ist durch Zugriffskontrollen vor unbefugtem Zugriff geschützt und seine Daten werden regelmäßig auf ein separates System gesichert. Welche beiden Schutzziele werden dadurch besonders unterstützt?",
    antworten: [
        {
            text: "Vertraulichkeit und Verfügbarkeit",
            richtig: true
        },
        {
            text: "Nur Integrität und Authentifizierung",
            richtig: false
        },
        {
            text: "Nur Verfügbarkeit und Redundanz",
            richtig: false
        },
        {
            text: "Integrität und ausschließlich Zutrittskontrolle",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele", "datensicherung", "zutritt-zugang-zugriff"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},

{
    id: "lf04q054",
    frage: "Ein Unternehmen stellt fest, dass mehrere Mitarbeiter schwache Passwörter verwenden, eine Firewall-Regel zu großzügig konfiguriert ist und auf einigen Rechnern Sicherheitsupdates fehlen. Welche Aussage trifft am besten zu?",
    antworten: [
        {
            text: "Es bestehen mehrere Schwachstellen, die unterschiedliche Angriffswege ermöglichen und das Gesamtrisiko erhöhen.",
            richtig: true
        },
        {
            text: "Es besteht ausschließlich ein Problem mit der Verfügbarkeit.",
            richtig: false
        },
        {
            text: "Solange aktuelle Backups vorhanden sind, entsteht daraus kein relevantes Sicherheitsrisiko.",
            richtig: false
        },
        {
            text: "Die vorhandenen Schwachstellen gleichen sich gegenseitig aus.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schwachstellen", "risiko", "updates-patches", "passwoerter-mfa"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},

{
    id: "lf04q055",
    frage: "Welche Maßnahme stellt am ehesten ein mehrschichtiges Sicherheitskonzept dar?",
    antworten: [
        {
            text: "Firewall, Schutzsoftware, sichere Authentifizierung, Backups und regelmäßige Mitarbeiterschulungen kombinieren",
            richtig: true
        },
        {
            text: "Ausschließlich eine leistungsfähige Firewall einsetzen",
            richtig: false
        },
        {
            text: "Ausschließlich ein Antivirenprogramm auf allen Clients installieren",
            richtig: false
        },
        {
            text: "Allen Mitarbeitern Administratorrechte geben, damit Probleme schneller behoben werden können",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["sicherheitsmassnahmen", "risiko"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q056",
    frage: "Ein Unternehmen verliert durch einen Cyberangriff vorübergehend den Zugriff auf seine Daten. Aktuelle Backups ermöglichen anschließend die Wiederherstellung. Welche Zuordnung ist korrekt?",
    antworten: [
        {
            text: "Verfügbarkeit wurde beeinträchtigt; Backups unterstützen die Wiederherstellung.",
            richtig: true
        },
        {
            text: "Vertraulichkeit wurde ausschließlich beeinträchtigt; eine Firewall stellt die Daten wieder her.",
            richtig: false
        },
        {
            text: "Integrität wurde ausschließlich beeinträchtigt; ein Passwortmanager stellt die Daten wieder her.",
            richtig: false
        },
        {
            text: "Authentifizierung wurde beeinträchtigt; Zwei-Faktor-Authentifizierung ersetzt das Backup.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzziele", "datensicherung"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q057",
    frage: "Welche Aussage beschreibt eine grundlegende Vorgehensweise der IT-Sicherheit am besten?",
    antworten: [
        {
            text: "Schutzobjekte, Bedrohungen und Schwachstellen werden analysiert, Risiken bewertet und anschließend geeignete Maßnahmen ausgewählt.",
            richtig: true
        },
        {
            text: "Eine einzelne technische Schutzmaßnahme kann grundsätzlich alle Sicherheitsrisiken vollständig beseitigen.",
            richtig: false
        },
        {
            text: "Sicherheitsmaßnahmen sind erst notwendig, nachdem ein konkreter Angriff erfolgreich war.",
            richtig: false
        },
        {
            text: "Ein vorhandenes Backup macht weitere technische und organisatorische Sicherheitsmaßnahmen überflüssig.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["schutzobjekte", "bedrohungen", "schwachstellen", "risiko", "sicherheitsmassnahmen"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf04q058",
    frage: "Was ist ein zentrales Ziel des Datenschutzes?",
    antworten: [
        {
            text: "Das Recht auf informationelle Selbstbestimmung zu schützen.",
            richtig: true
        },
        {
            text: "Die Verarbeitung personenbezogener Daten grundsätzlich zu verbieten.",
            richtig: false
        },
        {
            text: "Sämtliche Unternehmensdaten unabhängig von ihrem Inhalt zu schützen.",
            richtig: false
        },
        {
            text: "Den Datenaustausch zwischen Unternehmen vollständig zu verhindern.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q059",
    frage: "Was schützt der Datenschutz in erster Linie?",
    antworten: [
        {
            text: "Personenbezogene Daten und damit verbundene Rechte natürlicher Personen.",
            richtig: true
        },
        {
            text: "Ausschließlich technische IT-Systeme eines Unternehmens.",
            richtig: false
        },
        {
            text: "Alle Unternehmensdaten unabhängig von einem Personenbezug.",
            richtig: false
        },
        {
            text: "Ausschließlich vertrauliche Geschäftsgeheimnisse.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q060",
    frage: "Welcher Unterschied zwischen Datenschutz und Datensicherheit ist grundsätzlich richtig?",
    antworten: [
        {
            text: "Datenschutz bezieht sich auf personenbezogene Daten und die Rechte betroffener Personen; Datensicherheit schützt Daten durch geeignete Maßnahmen vor Verlust, Manipulation oder unberechtigtem Zugriff.",
            richtig: true
        },
        {
            text: "Datenschutz und Datensicherheit sind vollständig identische Begriffe.",
            richtig: false
        },
        {
            text: "Datenschutz betrifft ausschließlich Papierakten, Datensicherheit ausschließlich digitale Daten.",
            richtig: false
        },
        {
            text: "Datenschutz ist ausschließlich technisch, Datensicherheit ausschließlich rechtlich.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q061",
    frage: "Wofür steht die Abkürzung DSGVO?",
    antworten: [
        {
            text: "Datenschutz-Grundverordnung",
            richtig: true
        },
        {
            text: "Datensicherheits-Grundverordnung",
            richtig: false
        },
        {
            text: "Deutsches Schutzgesetz für Verwaltungsorganisationen",
            richtig: false
        },
        {
            text: "Datenschutzgesetz für öffentliche Verwaltungen",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q062",
    frage: "Welche Funktion hat das Bundesdatenschutzgesetz (BDSG) im Verhältnis zur DSGVO in Deutschland?",
    antworten: [
        {
            text: "Es ergänzt die DSGVO in Bereichen, in denen nationale Regelungen zulässig oder erforderlich sind.",
            richtig: true
        },
        {
            text: "Es ersetzt die DSGVO in Deutschland vollständig.",
            richtig: false
        },
        {
            text: "Es gilt nur für Unternehmen außerhalb der Europäischen Union.",
            richtig: false
        },
        {
            text: "Es ist eine Verordnung der Europäischen Union.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q063",
    frage: "Aus wie vielen Kapiteln besteht die DSGVO?",
    antworten: [
        {
            text: "11",
            richtig: true
        },
        {
            text: "7",
            richtig: false
        },
        {
            text: "13",
            richtig: false
        },
        {
            text: "15",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q064",
    frage: "Wie viele Artikel umfasst die DSGVO?",
    antworten: [
        {
            text: "99",
            richtig: true
        },
        {
            text: "89",
            richtig: false
        },
        {
            text: "109",
            richtig: false
        },
        {
            text: "173",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},

{
    id: "lf04q065",
    frage: "Wie viele Erwägungsgründe enthält die DSGVO?",
    antworten: [
        {
            text: "173",
            richtig: true
        },
        {
            text: "99",
            richtig: false
        },
        {
            text: "201",
            richtig: false
        },
        {
            text: "69",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q066",
    frage: "Was sind sogenannte Öffnungsklauseln der DSGVO?",
    antworten: [
        {
            text: "Regelungen, die Mitgliedstaaten in bestimmten Bereichen eigene oder ergänzende nationale Vorschriften ermöglichen.",
            richtig: true
        },
        {
            text: "Regelungen, mit denen Unternehmen die DSGVO freiwillig außer Kraft setzen können.",
            richtig: false
        },
        {
            text: "Ausnahmen, die grundsätzlich für Unternehmen mit weniger als 50 Mitarbeitern gelten.",
            richtig: false
        },
        {
            text: "Regelungen, die ausschließlich Datenschutzbehörden betreffen.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q067",
    frage: "Welche Verarbeitung fällt grundsätzlich in den sachlichen Anwendungsbereich der DSGVO?",
    antworten: [
        {
            text: "Die ganz oder teilweise automatisierte Verarbeitung personenbezogener Daten.",
            richtig: true
        },
        {
            text: "Ausschließlich die Verarbeitung personenbezogener Daten durch Behörden.",
            richtig: false
        },
        {
            text: "Nur die vollständig manuelle Verarbeitung ungeordneter Papierunterlagen.",
            richtig: false
        },
        {
            text: "Ausschließlich die Verarbeitung verschlüsselter personenbezogener Daten.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q068",
    frage: "Was ist unter einer teilweise automatisierten Verarbeitung personenbezogener Daten zu verstehen?",
    antworten: [
        {
            text: "Eine Verarbeitung, bei der zumindest teilweise technische Systeme oder Hilfsmittel zur Datenverarbeitung eingesetzt werden.",
            richtig: true
        },
        {
            text: "Eine Verarbeitung, die ausschließlich handschriftlich erfolgt.",
            richtig: false
        },
        {
            text: "Eine Verarbeitung, bei der nur ein Teil der personenbezogenen Daten geschützt wird.",
            richtig: false
        },
        {
            text: "Eine Verarbeitung, die ausschließlich von Datenschutzbeauftragten durchgeführt wird.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q069",
    frage: "Ein Unternehmen digitalisiert personenbezogene Dokumente mit einem Scanner und verarbeitet die Dateien anschließend elektronisch. Fällt dies grundsätzlich in den Anwendungsbereich der DSGVO?",
    antworten: [
        {
            text: "Ja, weil personenbezogene Daten mithilfe technischer Systeme verarbeitet werden.",
            richtig: true
        },
        {
            text: "Nein, weil die ursprünglichen Dokumente auf Papier vorlagen.",
            richtig: false
        },
        {
            text: "Nein, weil ein Scanner nicht als technisches Hilfsmittel gilt.",
            richtig: false
        },
        {
            text: "Nur dann, wenn die Verarbeitung länger als 24 Stunden dauert.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q070",
    frage: "Wann können nichtautomatisiert verarbeitete personenbezogene Daten ebenfalls unter die DSGVO fallen?",
    antworten: [
        {
            text: "Wenn sie in einem Dateisystem gespeichert sind oder gespeichert werden sollen.",
            richtig: true
        },
        {
            text: "Nur wenn sie zusätzlich verschlüsselt wurden.",
            richtig: false
        },
        {
            text: "Nur wenn sie ausschließlich elektronisch vorliegen.",
            richtig: false
        },
        {
            text: "Nichtautomatisiert verarbeitete Daten fallen grundsätzlich nie unter die DSGVO.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q071",
    frage: "Patientenakten werden alphabetisch nach Nachnamen in einem Aktenschrank abgelegt. Warum können diese Papierakten unter die DSGVO fallen?",
    antworten: [
        {
            text: "Weil sie Bestandteil eines strukturierten Dateisystems sind.",
            richtig: true
        },
        {
            text: "Weil Papierunterlagen grundsätzlich immer automatisiert verarbeitet werden.",
            richtig: false
        },
        {
            text: "Weil ausschließlich medizinische Daten von der DSGVO erfasst werden.",
            richtig: false
        },
        {
            text: "Weil jede Sammlung von Papier unabhängig von ihrer Struktur ein Dateisystem darstellt.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},

{
    id: "lf04q072",
    frage: "Auf einem Schreibtisch liegen ungeordnet einzelne Notizzettel mit Namen und Telefonnummern. Sind diese allein wegen der enthaltenen personenbezogenen Daten bereits ein Dateisystem im Sinne der DSGVO?",
    antworten: [
        {
            text: "Nein, eine ungeordnete Sammlung ist allein dadurch noch kein strukturiertes Dateisystem.",
            richtig: true
        },
        {
            text: "Ja, jede Sammlung personenbezogener Daten ist automatisch ein Dateisystem.",
            richtig: false
        },
        {
            text: "Ja, sobald mehr als zehn Notizzettel vorhanden sind.",
            richtig: false
        },
        {
            text: "Nur dann, wenn alle Telefonnummern noch aktuell sind.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},

{
    id: "lf04q073",
    frage: "Welche Verarbeitung fällt grundsätzlich nicht in den Anwendungsbereich der DSGVO?",
    antworten: [
        {
            text: "Die Verarbeitung personenbezogener Daten durch eine natürliche Person ausschließlich für persönliche oder familiäre Tätigkeiten.",
            richtig: true
        },
        {
            text: "Die Verarbeitung von Kundendaten durch ein Unternehmen.",
            richtig: false
        },
        {
            text: "Die Verarbeitung von Beschäftigtendaten durch einen Arbeitgeber.",
            richtig: false
        },
        {
            text: "Die Verarbeitung personenbezogener Bestelldaten eines Onlineshops.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q074",
    frage: "Gilt die DSGVO grundsätzlich für personenbezogene Daten verstorbener Personen?",
    antworten: [
        {
            text: "Nein, die DSGVO erfasst personenbezogene Daten verstorbener Personen grundsätzlich nicht.",
            richtig: true
        },
        {
            text: "Ja, ohne jede Ausnahme.",
            richtig: false
        },
        {
            text: "Ja, aber ausschließlich bei Gesundheitsdaten.",
            richtig: false
        },
        {
            text: "Nur wenn die Daten von einem Unternehmen verarbeitet werden.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q075",
    frage: "Unter welcher Voraussetzung kann die DSGVO auch für ein Unternehmen ohne Niederlassung in der Europäischen Union gelten?",
    antworten: [
        {
            text: "Wenn es beispielsweise Personen in der EU Waren oder Dienstleistungen anbietet oder deren Verhalten beobachtet.",
            richtig: true
        },
        {
            text: "Nur wenn das Unternehmen eine deutsche Tochtergesellschaft besitzt.",
            richtig: false
        },
        {
            text: "Nur wenn mindestens ein Mitarbeiter Staatsbürger eines EU-Mitgliedstaates ist.",
            richtig: false
        },
        {
            text: "Die DSGVO kann für Unternehmen außerhalb der EU grundsätzlich nie gelten.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},

{
    id: "lf04q076",
    frage: "Welche beiden Anwendungsbereiche sollten geprüft werden, wenn festgestellt werden soll, ob die DSGVO auf einen konkreten Sachverhalt anwendbar ist?",
    antworten: [
        {
            text: "Der sachliche und der räumliche Anwendungsbereich.",
            richtig: true
        },
        {
            text: "Nur der Unternehmensumsatz und die Anzahl der Mitarbeiter.",
            richtig: false
        },
        {
            text: "Nur der Standort des Servers und das verwendete Betriebssystem.",
            richtig: false
        },
        {
            text: "Nur die Staatsangehörigkeit der Mitarbeiter und Kunden.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},

{
    id: "lf04q077",
    frage: "Ein Unternehmen mit Sitz in den USA betreibt einen Onlineshop und bietet seine Produkte gezielt Kunden in Deutschland an. Dabei verarbeitet es Namen, Adressen und Zahlungsinformationen. Welche Aussage ist am zutreffendsten?",
    antworten: [
        {
            text: "Die DSGVO kann gelten, weil das Unternehmen Waren oder Dienstleistungen gezielt Personen in der EU anbietet.",
            richtig: true
        },
        {
            text: "Die DSGVO kann nicht gelten, weil sich der Unternehmenssitz außerhalb der EU befindet.",
            richtig: false
        },
        {
            text: "Die DSGVO gilt nur dann, wenn sich die Server des Unternehmens in Deutschland befinden.",
            richtig: false
        },
        {
            text: "Die DSGVO gilt nur, wenn das Unternehmen zusätzlich eine Niederlassung in Deutschland eröffnet.",
            richtig: false
        }
    ],
    lernfelder: ["lf04"],
    themen: ["datenschutz"],
    schwierigkeit: "schwer",
    typ: "single-choice"
}
];