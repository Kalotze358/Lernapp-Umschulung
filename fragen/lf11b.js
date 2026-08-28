const lf11bFragen = [
    {
        id: "lf11bq001",
        frage: "Was ist das Hauptziel der Systemhärtung?",

        antworten: [
            {
                text: "Die Angriffsfläche eines Systems zu reduzieren",
                richtig: true
            },
            {
                text: "Möglichst viele Dienste gleichzeitig zu aktivieren",
                richtig: false
            },
            {
                text: "Allen Benutzern Administratorrechte zu geben",
                richtig: false
            },
            {
                text: "Sämtliche Protokollierung zu deaktivieren",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["systemhaertung"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf11bq002",
        frage: "Welche Maßnahmen können zur Systemhärtung beitragen?",

        antworten: [
            {
                text: "Nicht benötigte Dienste deaktivieren",
                richtig: true
            },
            {
                text: "Nicht benötigte Benutzerkonten entfernen oder deaktivieren",
                richtig: true
            },
            {
                text: "Sichere Konfigurationen verwenden",
                richtig: true
            },
            {
                text: "Alle Netzwerkports grundsätzlich freigeben",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["systemhaertung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf11bq003",
        frage: "Warum ist ein strukturiertes Patchmanagement wichtig?",

        antworten: [
            {
                text: "Bekannte Schwachstellen können kontrolliert und zeitnah geschlossen werden",
                richtig: true
            },
            {
                text: "Damit keine Backups mehr benötigt werden",
                richtig: false
            },
            {
                text: "Damit alle Systeme automatisch Administratorrechte erhalten",
                richtig: false
            },
            {
                text: "Damit sämtliche Firewallregeln entfernt werden können",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["patchmanagement"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf11bq004",
        frage: "Welche Schritte gehören typischerweise zum Schwachstellenmanagement?",

        antworten: [
            {
                text: "Schwachstellen erkennen",
                richtig: true
            },
            {
                text: "Schwachstellen bewerten und priorisieren",
                richtig: true
            },
            {
                text: "Geeignete Maßnahmen zur Behebung durchführen",
                richtig: true
            },
            {
                text: "Bekannte Schwachstellen grundsätzlich ignorieren",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["schwachstellenmanagement"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf11bq005",
        frage: "Ein öffentlich erreichbarer Server besitzt eine kritisch bewertete Sicherheitslücke. Welche Maßnahme ist sinnvoll?",

        antworten: [
            {
                text: "Das Risiko priorisiert bewerten und die Schwachstelle möglichst zeitnah beheben oder absichern",
                richtig: true
            },
            {
                text: "Die Schwachstelle ignorieren, solange noch kein Angriff bekannt ist",
                richtig: false
            },
            {
                text: "Die Ereignisprotokolle löschen",
                richtig: false
            },
            {
                text: "Allen Benutzern zusätzliche Rechte geben",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["schwachstellenmanagement", "patchmanagement"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf11bq006",
        frage: "Welche Informationen können bei einer Firewallregel berücksichtigt werden?",

        antworten: [
            {
                text: "Quell- und Zieladresse",
                richtig: true
            },
            {
                text: "Ports",
                richtig: true
            },
            {
                text: "Netzwerkprotokolle",
                richtig: true
            },
            {
                text: "Die Gehäusefarbe des Servers",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["firewall-regeln"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf11bq007",
        frage: "Welches Grundprinzip ist bei der Erstellung von Firewallregeln sicherheitstechnisch sinnvoll?",

        antworten: [
            {
                text: "Nur den tatsächlich benötigten Netzwerkverkehr erlauben",
                richtig: true
            },
            {
                text: "Grundsätzlich jeden Netzwerkverkehr erlauben",
                richtig: false
            },
            {
                text: "Alle Ports für sämtliche Systeme öffnen",
                richtig: false
            },
            {
                text: "Firewallregeln ausschließlich nach der IP-Adresse des Administrators benennen",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["firewall-regeln"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf11bq008",
        frage: "Welchen Sicherheitsvorteil kann die Segmentierung eines Netzwerks bieten?",

        antworten: [
            {
                text: "Kommunikationswege zwischen unterschiedlichen Bereichen können gezielt kontrolliert werden",
                richtig: true
            },
            {
                text: "Jedes Gerät erhält automatisch Administratorrechte",
                richtig: false
            },
            {
                text: "Es werden grundsätzlich keine Firewalls mehr benötigt",
                richtig: false
            },
            {
                text: "Alle Geräte befinden sich anschließend automatisch im selben Broadcast-Netz",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["netzsegmentierung"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf11bq009",
        frage: "Ein Unternehmen trennt Server, Clients und Gäste in verschiedene VLANs. Welche Ziele können damit verfolgt werden?",

        antworten: [
            {
                text: "Netzbereiche logisch voneinander trennen",
                richtig: true
            },
            {
                text: "Kommunikation zwischen Bereichen gezielt kontrollieren",
                richtig: true
            },
            {
                text: "Auswirkungen eines Sicherheitsvorfalls möglicherweise begrenzen",
                richtig: true
            },
            {
                text: "Allen Geräten automatisch dieselbe IP-Adresse geben",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["netzsegmentierung", "firewall-regeln"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf11bq010",
        frage: "Welches Prinzip sollte bei Benutzerberechtigungen angewendet werden?",

        antworten: [
            {
                text: "Benutzer erhalten nur die Rechte, die sie für ihre Aufgaben benötigen",
                richtig: true
            },
            {
                text: "Jeder Benutzer erhält grundsätzlich Vollzugriff",
                richtig: false
            },
            {
                text: "Berechtigungen werden niemals überprüft",
                richtig: false
            },
            {
                text: "Alle Mitarbeiter verwenden dasselbe Administratorkonto",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["berechtigungskonzepte"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf11bq011",
        frage: "Was beschreibt Authentifizierung?",

        antworten: [
            {
                text: "Die Überprüfung der Identität eines Benutzers oder Systems",
                richtig: true
            },
            {
                text: "Die Vergabe einer IP-Adresse",
                richtig: false
            },
            {
                text: "Das Erstellen eines Backups",
                richtig: false
            },
            {
                text: "Das physische Verbinden zweier Switches",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["authentifizierung"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf11bq012",
        frage: "Welche Verfahren können zur Authentifizierung verwendet werden?",

        antworten: [
            {
                text: "Passwort",
                richtig: true
            },
            {
                text: "Hardware-Token",
                richtig: true
            },
            {
                text: "Digitales Zertifikat",
                richtig: true
            },
            {
                text: "Bildschirmauflösung",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["authentifizierung"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf11bq013",
        frage: "Welchen Zweck erfüllt Verschlüsselung?",

        antworten: [
            {
                text: "Informationen vor unberechtigtem Lesen zu schützen",
                richtig: true
            },
            {
                text: "Die CPU-Taktfrequenz zu erhöhen",
                richtig: false
            },
            {
                text: "IP-Adressen automatisch zu vergeben",
                richtig: false
            },
            {
                text: "Benutzerkonten automatisch zu löschen",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["verschluesselung"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf11bq014",
        frage: "Welche Aussagen über digitale Zertifikate sind korrekt?",

        antworten: [
            {
                text: "Sie können eine Identität mit einem öffentlichen Schlüssel verbinden",
                richtig: true
            },
            {
                text: "Sie können Bestandteil einer PKI sein",
                richtig: true
            },
            {
                text: "Zertifizierungsstellen können Zertifikate ausstellen beziehungsweise bestätigen",
                richtig: true
            },
            {
                text: "Ein Zertifikat ersetzt grundsätzlich sämtliche Passwörter und Berechtigungen",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["zertifikate-pki", "verschluesselung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf11bq015",
        frage: "Warum sind Ereignisprotokolle für den sicheren Betrieb von IT-Systemen wichtig?",

        antworten: [
            {
                text: "Sie können Informationen über Fehler, Anmeldungen und Sicherheitsereignisse liefern",
                richtig: true
            },
            {
                text: "Sie ersetzen grundsätzlich alle Backups",
                richtig: false
            },
            {
                text: "Sie verhindern automatisch jeden Cyberangriff",
                richtig: false
            },
            {
                text: "Sie dienen ausschließlich zur Speicherung von Bildschirmfotos",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["logging"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf11bq016",
        frage: "Welche Informationen können für ein Sicherheits- und Systemmonitoring sinnvoll sein?",

        antworten: [
            {
                text: "Ungewöhnliche Anmeldeversuche",
                richtig: true
            },
            {
                text: "Ausfall wichtiger Dienste",
                richtig: true
            },
            {
                text: "Ungewöhnliche Ressourcen- oder Netzwerkauslastung",
                richtig: true
            },
            {
                text: "Die bevorzugte Hintergrundfarbe eines Benutzers",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["monitoring-sicherheit", "logging"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf11bq017",
        frage: "Was unterscheidet ein IDS grundsätzlich von einem IPS?",

        antworten: [
            {
                text: "Ein IDS erkennt und meldet verdächtige Aktivitäten, ein IPS kann zusätzlich aktiv eingreifen",
                richtig: true
            },
            {
                text: "Ein IDS vergibt IP-Adressen, ein IPS löst DNS-Namen auf",
                richtig: false
            },
            {
                text: "Ein IPS kann ausschließlich Dateien sichern",
                richtig: false
            },
            {
                text: "Zwischen IDS und IPS besteht grundsätzlich kein Unterschied",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["ids-ips"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf11bq018",
        frage: "Welche Aussagen über eine sinnvolle Backupstrategie sind korrekt?",

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
                text: "Sicherungen sollten gegen Verlust oder Manipulation angemessen geschützt werden",
                richtig: true
            },
            {
                text: "Ein Backup auf demselben Datenträger schützt zuverlässig vor jedem Hardwareausfall",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["backup-wiederherstellung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf11bq019",
        frage: "Auf einem Server wird ein möglicher Sicherheitsvorfall festgestellt. Welche Vorgehensweise ist grundsätzlich sinnvoll?",

        antworten: [
            {
                text: "Vorfall erkennen, Auswirkungen begrenzen, untersuchen, Systeme wiederherstellen und anschließend nachbereiten",
                richtig: true
            },
            {
                text: "Sämtliche Protokolle sofort löschen und den Vorfall ignorieren",
                richtig: false
            },
            {
                text: "Alle Systeme ohne Analyse dauerhaft abschalten",
                richtig: false
            },
            {
                text: "Sämtliche Benutzer zu Administratoren machen",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["security-incident", "logging"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf11bq020",
        frage: "Welche Maßnahmen können die Ausfallsicherheit eines wichtigen IT-Dienstes erhöhen?",

        antworten: [
            {
                text: "Redundante Komponenten einsetzen",
                richtig: true
            },
            {
                text: "Kritische Systeme überwachen",
                richtig: true
            },
            {
                text: "Wiederherstellungsmöglichkeiten planen und testen",
                richtig: true
            },
            {
                text: "Möglichst viele unnötige Single Points of Failure einbauen",
                richtig: false
            }
        ],

        lernfelder: ["lf11b"],
        themen: ["hochverfuegbarkeit", "backup-wiederherstellung", "monitoring-sicherheit"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    }
];