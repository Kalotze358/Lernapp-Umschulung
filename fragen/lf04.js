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
    }
];