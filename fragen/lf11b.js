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
    },
    {
    id: "lf11bq021",
    frage: "Ein Administrator soll den Zugriff auf besonders schützenswerte Serverdienste absichern. Welche Maßnahmen sind sinnvoll?",

    antworten: [
        {
            text: "Berechtigungen nach dem Least-Privilege-Prinzip vergeben",
            richtig: true
        },
        {
            text: "Zugriffe möglichst über geeignete Rollen oder Gruppen steuern",
            richtig: true
        },
        {
            text: "Zertifikate können zur sicheren Identifikation von Systemen eingesetzt werden",
            richtig: true
        },
        {
            text: "Allen Benutzern vorsorglich Administratorrechte geben",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["berechtigungskonzepte", "zertifikate-pki"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf11bq022",
    frage: "Ein interner Webdienst soll ausschließlich für berechtigte Systeme erreichbar sein und eine vertrauenswürdige Identität nachweisen. Welche Kombination ist sinnvoll?",

    antworten: [
        {
            text: "Zugriffsrechte gezielt beschränken und ein geeignetes digitales Zertifikat verwenden",
            richtig: true
        },
        {
            text: "Allen Benutzern Vollzugriff geben und Zertifikatsprüfungen deaktivieren",
            richtig: false
        },
        {
            text: "Nur den Servernamen ändern",
            richtig: false
        },
        {
            text: "Berechtigungen und Zertifikate sind für sichere Dienste grundsätzlich bedeutungslos",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["zertifikate-pki", "berechtigungskonzepte"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf11bq023",
    frage: "Ein IDS meldet ungewöhnlich viele verdächtige Verbindungsversuche auf einen Server. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Die Meldungen und betroffenen Systeme analysieren",
            richtig: true
        },
        {
            text: "Prüfen, ob tatsächlich ein Sicherheitsvorfall vorliegt",
            richtig: true
        },
        {
            text: "Bei bestätigtem Vorfall geeignete Maßnahmen zur Begrenzung einleiten",
            richtig: true
        },
        {
            text: "Die IDS-Meldungen grundsätzlich löschen und ignorieren",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["ids-ips", "security-incident"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf11bq024",
    frage: "Ein IPS erkennt Netzwerkverkehr, der eindeutig einem bekannten Angriffsmuster entspricht. Was unterscheidet das IPS hierbei grundsätzlich von einem reinen IDS?",

    antworten: [
        {
            text: "Das IPS kann zusätzlich versuchen, den erkannten Angriff automatisch zu blockieren",
            richtig: true
        },
        {
            text: "Ein IDS kann grundsätzlich keine Ereignisse erkennen",
            richtig: false
        },
        {
            text: "Ein IPS dient ausschließlich zur Datensicherung",
            richtig: false
        },
        {
            text: "Ein IPS ersetzt automatisch sämtliche Maßnahmen zur Behandlung eines Sicherheitsvorfalls",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["ids-ips", "security-incident"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "lf11bq025",
    frage: "Ein wichtiger Unternehmensdienst soll auch beim Ausfall eines einzelnen Servers möglichst verfügbar bleiben. Welche Maßnahmen sind sinnvoll?",

    antworten: [
        {
            text: "Redundante Systeme oder Komponenten vorsehen",
            richtig: true
        },
        {
            text: "Ausfälle und ungewöhnliche Zustände überwachen",
            richtig: true
        },
        {
            text: "Für Störungen und Sicherheitsvorfälle geeignete Wiederherstellungs- und Notfallmaßnahmen planen",
            richtig: true
        },
        {
            text: "Den gesamten Dienst bewusst von einer einzigen nicht redundanten Komponente abhängig machen",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["hochverfuegbarkeit", "security-incident"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf11bq026",
    frage: "Warum können hochverfügbare Systeme auch für die IT-Sicherheit wichtig sein?",

    antworten: [
        {
            text: "Redundanz kann helfen, Dienste trotz Ausfall einzelner Komponenten weiter bereitzustellen",
            richtig: true
        },
        {
            text: "Ein Angriff oder technischer Fehler muss dadurch nicht zwangsläufig den gesamten Dienst lahmlegen",
            richtig: true
        },
        {
            text: "Ausfallsicherheit unterstützt das Schutzziel Verfügbarkeit",
            richtig: true
        },
        {
            text: "Hochverfügbarkeit macht Sicherheitsupdates und Zugriffskontrollen überflüssig",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["hochverfuegbarkeit", "security-incident"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf11bq027",
    frage: "Ein neu installierter Server soll vor der Inbetriebnahme abgesichert werden. Welche Maßnahmen sind sinnvoll?",

    antworten: [
        {
            text: "Nicht benötigte Dienste und Funktionen deaktivieren",
            richtig: true
        },
        {
            text: "Verfügbare Sicherheitsupdates kontrolliert installieren",
            richtig: true
        },
        {
            text: "Nur tatsächlich benötigte Netzwerkdienste bereitstellen",
            richtig: true
        },
        {
            text: "Sämtliche vorhandenen Dienste vorsorglich aktivieren",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["systemhaertung", "patchmanagement"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf11bq028",
    frage: "Bei einem Schwachstellenscan wird auf mehreren Clients eine kritische Sicherheitslücke entdeckt. Die Geräte befinden sich im gleichen Netz wie wichtige Server. Welche Maßnahmen sind sinnvoll?",

    antworten: [
        {
            text: "Die Schwachstelle bewerten und möglichst zeitnah beheben",
            richtig: true
        },
        {
            text: "Die betroffenen Systeme bei Bedarf durch geeignete Netzsegmentierung von besonders kritischen Bereichen trennen",
            richtig: true
        },
        {
            text: "Mögliche Kommunikationswege zu wichtigen Systemen kontrollieren",
            richtig: true
        },
        {
            text: "Die Schwachstelle ignorieren, solange noch kein erfolgreicher Angriff bekannt ist",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["schwachstellenmanagement", "netzsegmentierung"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf11bq029",
    frage: "Ein Administrator greift von außerhalb des Unternehmens auf ein sensibles Verwaltungssystem zu. Welche Kombination erhöht die Sicherheit besonders?",

    antworten: [
        {
            text: "Die Identität des Administrators zuverlässig authentifizieren und die übertragenen Daten verschlüsseln",
            richtig: true
        },
        {
            text: "Die Anmeldung ohne Identitätsprüfung ermöglichen, wenn die Verbindung verschlüsselt ist",
            richtig: false
        },
        {
            text: "Auf Verschlüsselung verzichten, sobald ein Passwort verwendet wird",
            richtig: false
        },
        {
            text: "Für Administratorzugänge grundsätzlich ein gemeinsames Benutzerkonto verwenden",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["authentifizierung", "verschluesselung"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf11bq030",
    frage: "Das Monitoring meldet ungewöhnliche Fehler auf einem wichtigen Server. Kurz darauf fällt der Dienst vollständig aus. Welche Maßnahmen unterstützen eine schnelle Wiederherstellung?",

    antworten: [
        {
            text: "Monitoring- und Ereignisdaten zur Ursachenanalyse verwenden",
            richtig: true
        },
        {
            text: "Vorhandene und getestete Sicherungen für eine notwendige Wiederherstellung nutzen",
            richtig: true
        },
        {
            text: "Nach der Wiederherstellung prüfen, ob der Dienst wieder ordnungsgemäß funktioniert",
            richtig: true
        },
        {
            text: "Monitoring abschalten und vorhandene Backups löschen, damit der Fehler nicht erneut gemeldet wird",
            richtig: false
        }
    ],

    lernfelder: ["lf11b"],
    themen: ["monitoring-sicherheit", "backup-wiederherstellung"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
}
];