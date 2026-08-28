const lf10bFragen = [
    {
        id: "lf10bq001",
        frage: "Was ist die grundlegende Aufgabe eines Servers?",

        antworten: [
            {
                text: "Dienste oder Ressourcen für andere Systeme bereitzustellen",
                richtig: true
            },
            {
                text: "Ausschließlich lokale Spiele auszuführen",
                richtig: false
            },
            {
                text: "Nur Netzwerkpakete zu verschlüsseln",
                richtig: false
            },
            {
                text: "Grundsätzlich keine Verbindung zu Clients zu besitzen",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["server-grundlagen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf10bq002",
        frage: "Welche Dienste können typischerweise von Servern bereitgestellt werden?",

        antworten: [
            {
                text: "Dateidienste",
                richtig: true
            },
            {
                text: "DNS-Dienste",
                richtig: true
            },
            {
                text: "Webdienste",
                richtig: true
            },
            {
                text: "Ausschließlich die Bildschirmhelligkeit eines Clients",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["server-grundlagen"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq003",
        frage: "Welche Systeme können als Serverbetriebssystem eingesetzt werden?",

        antworten: [
            {
                text: "Windows Server",
                richtig: true
            },
            {
                text: "Linux-Distributionen",
                richtig: true
            },
            {
                text: "Beide genannten Systeme",
                richtig: true
            },
            {
                text: "Ausschließlich Firmware eines Monitors",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["serverbetriebssysteme"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq004",
        frage: "Welche Vorteile kann Servervirtualisierung bieten?",

        antworten: [
            {
                text: "Mehrere virtuelle Systeme können auf einem physischen Host betrieben werden",
                richtig: true
            },
            {
                text: "Hardware-Ressourcen können effizienter genutzt werden",
                richtig: true
            },
            {
                text: "Virtuelle Systeme können voneinander getrennt betrieben werden",
                richtig: true
            },
            {
                text: "Jede virtuelle Maschine benötigt zwingend einen eigenen physischen Server",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["virtualisierung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq005",
        frage: "Welche Aufgabe übernimmt ein Hypervisor?",

        antworten: [
            {
                text: "Virtuelle Maschinen und deren Hardware-Ressourcen verwalten",
                richtig: true
            },
            {
                text: "Ausschließlich DNS-Namen auflösen",
                richtig: false
            },
            {
                text: "Nur Benutzerpasswörter speichern",
                richtig: false
            },
            {
                text: "Netzwerkkabel physisch miteinander verbinden",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["hypervisor", "virtualisierung"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf10bq006",
        frage: "Welche Ressourcen können einer virtuellen Maschine durch einen Hypervisor bereitgestellt werden?",

        antworten: [
            {
                text: "Virtuelle CPUs",
                richtig: true
            },
            {
                text: "Arbeitsspeicher",
                richtig: true
            },
            {
                text: "Virtuelle Netzwerkadapter",
                richtig: true
            },
            {
                text: "Eine physische Tastatur als zwingende Voraussetzung",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["hypervisor", "virtualisierung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq007",
        frage: "Welchen Zweck erfüllt ein Verzeichnisdienst wie Active Directory?",

        antworten: [
            {
                text: "Benutzer, Computer, Gruppen und weitere Objekte zentral verwalten",
                richtig: true
            },
            {
                text: "Ausschließlich Webseiten anzeigen",
                richtig: false
            },
            {
                text: "Nur Festplatten formatieren",
                richtig: false
            },
            {
                text: "Alle Netzwerkgeräte automatisch durch Router ersetzen",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["verzeichnisdienste", "active-directory"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf10bq008",
        frage: "Welche Objekte können in einem Active Directory verwaltet werden?",

        antworten: [
            {
                text: "Benutzerkonten",
                richtig: true
            },
            {
                text: "Computer",
                richtig: true
            },
            {
                text: "Gruppen",
                richtig: true
            },
            {
                text: "Ausschließlich öffentliche IPv4-Adressen",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["active-directory", "verzeichnisdienste"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq009",
        frage: "Warum ist es häufig sinnvoll, Berechtigungen über Gruppen statt direkt an einzelne Benutzer zu vergeben?",

        antworten: [
            {
                text: "Berechtigungen können dadurch zentraler und übersichtlicher verwaltet werden",
                richtig: true
            },
            {
                text: "Dadurch benötigt jeder Benutzer automatisch Administratorrechte",
                richtig: false
            },
            {
                text: "Dadurch werden Passwörter überflüssig",
                richtig: false
            },
            {
                text: "Gruppen erhöhen automatisch die CPU-Leistung des Servers",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["benutzer-gruppen", "berechtigungen-server"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf10bq010",
        frage: "Eine Abteilung soll Zugriff auf einen gemeinsamen Ordner erhalten. Welche Vorgehensweise ist administrativ sinnvoll?",

        antworten: [
            {
                text: "Eine passende Gruppe erstellen, Benutzer zuordnen und der Gruppe die benötigten Rechte vergeben",
                richtig: true
            },
            {
                text: "Jedem Mitarbeiter grundsätzlich Vollzugriff auf den gesamten Server geben",
                richtig: false
            },
            {
                text: "Alle Berechtigungen deaktivieren",
                richtig: false
            },
            {
                text: "Allen Mitarbeitern dasselbe Benutzerkonto geben",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["benutzer-gruppen", "berechtigungen-server", "dateidienste"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf10bq011",
        frage: "Welche Aufgabe erfüllt ein Dateiserver?",

        antworten: [
            {
                text: "Dateien und Ordner zentral im Netzwerk bereitstellen",
                richtig: true
            },
            {
                text: "Ausschließlich IP-Adressen automatisch vergeben",
                richtig: false
            },
            {
                text: "Nur Internetseiten blockieren",
                richtig: false
            },
            {
                text: "Die CPU eines Clients ersetzen",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["dateidienste"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf10bq012",
        frage: "Wozu werden Gruppenrichtlinien in einer Windows-Domäne verwendet?",

        antworten: [
            {
                text: "Um Einstellungen für Benutzer und Computer zentral zu konfigurieren",
                richtig: true
            },
            {
                text: "Um ausschließlich Netzwerkkabel zu testen",
                richtig: false
            },
            {
                text: "Um physische Server automatisch zu reparieren",
                richtig: false
            },
            {
                text: "Um DHCP vollständig durch DNS zu ersetzen",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["gruppenrichtlinien", "active-directory"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf10bq013",
        frage: "Welche Aufgaben können grundsätzlich mithilfe von Gruppenrichtlinien zentral umgesetzt werden?",

        antworten: [
            {
                text: "Sicherheits- und Systemeinstellungen konfigurieren",
                richtig: true
            },
            {
                text: "Einstellungen für mehrere Domänencomputer verteilen",
                richtig: true
            },
            {
                text: "Bestimmte Benutzereinstellungen zentral vorgeben",
                richtig: true
            },
            {
                text: "Defekte Hardwarebauteile physisch austauschen",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["gruppenrichtlinien"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq014",
        frage: "Welche PowerShell-Anweisung zeigt laufende Prozesse an?",

        antworten: [
            {
                text: "Get-Process",
                richtig: true
            },
            {
                text: "Set-Process-All",
                richtig: false
            },
            {
                text: "Show-DNS",
                richtig: false
            },
            {
                text: "Open-CPU",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["powershell"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf10bq015",
        frage: "Welcher PowerShell-Befehl kann verwendet werden, um Dienste eines Windows-Systems anzuzeigen?",

        antworten: [
            {
                text: "Get-Service",
                richtig: true
            },
            {
                text: "Get-Website",
                richtig: false
            },
            {
                text: "Show-RAM",
                richtig: false
            },
            {
                text: "Open-ServiceManager",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["powershell"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf10bq016",
        frage: "Welche Vorteile bietet die Automatisierung wiederkehrender Administrationsaufgaben?",

        antworten: [
            {
                text: "Wiederholbare Abläufe",
                richtig: true
            },
            {
                text: "Zeitersparnis bei häufigen Aufgaben",
                richtig: true
            },
            {
                text: "Weniger manuelle Eingabefehler",
                richtig: true
            },
            {
                text: "Jedes automatisierte Skript ist grundsätzlich fehlerfrei",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["skripting", "powershell"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq017",
        frage: "Es sollen 100 Benutzerkonten nach einem einheitlichen Schema angelegt werden. Welche Vorgehensweise ist besonders sinnvoll?",

        antworten: [
            {
                text: "Die Aufgabe mithilfe eines geeigneten Skripts automatisieren",
                richtig: true
            },
            {
                text: "Alle Konten jedes Mal ohne Vorlage vollständig manuell anlegen",
                richtig: false
            },
            {
                text: "Allen Mitarbeitern ein gemeinsames Benutzerkonto geben",
                richtig: false
            },
            {
                text: "Auf Benutzerkonten vollständig verzichten",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["skripting", "powershell", "benutzer-gruppen"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf10bq018",
        frage: "Welche Aussagen über Server-Backups sind korrekt?",

        antworten: [
            {
                text: "Datensicherungen sollten regelmäßig durchgeführt werden",
                richtig: true
            },
            {
                text: "Die Wiederherstellung sollte getestet werden",
                richtig: true
            },
            {
                text: "Auch wichtige Konfigurationen können Bestandteil einer Sicherungsstrategie sein",
                richtig: true
            },
            {
                text: "Ein erfolgreich gestarteter Backup-Job garantiert ohne Prüfung automatisch eine erfolgreiche Wiederherstellung",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["backup-server"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq019",
        frage: "Welche Werte oder Zustände sind für die Überwachung eines Servers sinnvoll?",

        antworten: [
            {
                text: "CPU-Auslastung",
                richtig: true
            },
            {
                text: "Freier Speicherplatz",
                richtig: true
            },
            {
                text: "Status wichtiger Dienste",
                richtig: true
            },
            {
                text: "Die Farbe des Servergehäuses",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["server-monitoring"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf10bq020",
        frage: "Welche Informationen gehören sinnvoll in eine Serverdokumentation?",

        antworten: [
            {
                text: "Installierte Rollen und Dienste",
                richtig: true
            },
            {
                text: "IP-Adressen und wichtige Abhängigkeiten",
                richtig: true
            },
            {
                text: "Besondere Konfigurationen und Berechtigungskonzepte",
                richtig: true
            },
            {
                text: "Private Passwörter der Administratoren im Klartext",
                richtig: false
            }
        ],

        lernfelder: ["lf10b"],
        themen: ["server-dokumentation"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
    id: "lf10bq021",
    frage: "Ein Unternehmen plant einen neuen Dateiserver. Welche Punkte sollten bei der Auswahl und Einrichtung des Serverbetriebssystems berücksichtigt werden?",

    antworten: [
        {
            text: "Unterstützung der benötigten Serverrollen und Dienste",
            richtig: true
        },
        {
            text: "Kompatibilität mit der bestehenden Infrastruktur",
            richtig: true
        },
        {
            text: "Möglichkeiten für Wartung, Updates und Sicherung",
            richtig: true
        },
        {
            text: "Ausschließlich das Hintergrundbild der Benutzeroberfläche",
            richtig: false
        }
    ],

    lernfelder: ["lf10b"],
    themen: ["serverbetriebssysteme", "backup-server"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf10bq022",
    frage: "Nach einem Update startet ein wichtiger Serverdienst nicht mehr. Warum sind eine geeignete Backupstrategie und vorherige Planung besonders wichtig?",

    antworten: [
        {
            text: "Damit Daten und relevante Konfigurationen im Fehlerfall möglichst kontrolliert wiederhergestellt werden können",
            richtig: true
        },
        {
            text: "Damit Serverupdates grundsätzlich niemals getestet werden müssen",
            richtig: false
        },
        {
            text: "Damit Ereignisprotokolle nach jedem Fehler automatisch gelöscht werden",
            richtig: false
        },
        {
            text: "Damit jedes Serverbetriebssystem ohne Administrator vollständig verwaltet werden kann",
            richtig: false
        }
    ],

    lernfelder: ["lf10b"],
    themen: ["backup-server", "serverbetriebssysteme"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf10bq023",
    frage: "Das Monitoring meldet, dass der freie Speicherplatz eines Servers seit mehreren Tagen stark abnimmt. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Die Entwicklung der Messwerte analysieren",
            richtig: true
        },
        {
            text: "Die Ursache des steigenden Speicherverbrauchs untersuchen",
            richtig: true
        },
        {
            text: "Festgestellte Änderungen und notwendige Maßnahmen nachvollziehbar dokumentieren",
            richtig: true
        },
        {
            text: "Die Warnung deaktivieren, damit sie nicht mehr angezeigt wird",
            richtig: false
        }
    ],

    lernfelder: ["lf10b"],
    themen: ["server-monitoring", "server-dokumentation"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf10bq024",
    frage: "Ein neuer Server wird produktiv in Betrieb genommen. Welche Maßnahmen erleichtern den späteren Betrieb und die Fehlersuche?",

    antworten: [
        {
            text: "Wichtige Dienste und Ressourcen in das Monitoring aufnehmen",
            richtig: true
        },
        {
            text: "Installierte Rollen, IP-Adressen und besondere Konfigurationen dokumentieren",
            richtig: true
        },
        {
            text: "Abhängigkeiten zu anderen Systemen nachvollziehbar festhalten",
            richtig: true
        },
        {
            text: "Monitoring und Dokumentation nach erfolgreicher Installation grundsätzlich weglassen",
            richtig: false
        }
    ],

    lernfelder: ["lf10b"],
    themen: ["server-monitoring", "server-dokumentation"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf10bq025",
    frage: "Ein Unternehmen möchte mehrere Serverdienste auf einem leistungsfähigen physischen System betreiben. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Geeignete Serverrollen auf getrennte virtuelle Maschinen verteilen und deren Ressourcen über einen Hypervisor verwalten",
            richtig: true
        },
        {
            text: "Jeder Serverdienst benötigt zwingend einen eigenen physischen Computer",
            richtig: false
        },
        {
            text: "Ein Hypervisor dient ausschließlich zur DNS-Namensauflösung",
            richtig: false
        },
        {
            text: "Virtuelle Maschinen benötigen grundsätzlich keinerlei CPU- oder Arbeitsspeicherressourcen",
            richtig: false
        }
    ],

    lernfelder: ["lf10b"],
    themen: ["server-grundlagen", "hypervisor"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf10bq026",
    frage: "In einer Windows-Domäne sollen Mitarbeiter abhängig von ihrer Abteilung unterschiedliche Zugriffsrechte erhalten. Welche Vorgehensweise ist administrativ sinnvoll?",

    antworten: [
        {
            text: "Benutzer zentral über den Verzeichnisdienst verwalten",
            richtig: true
        },
        {
            text: "Geeignete Gruppen für unterschiedliche Aufgaben oder Abteilungen verwenden",
            richtig: true
        },
        {
            text: "Berechtigungen möglichst über Gruppen statt einzeln für jeden Benutzer vergeben",
            richtig: true
        },
        {
            text: "Allen Domänenbenutzern vorsorglich Vollzugriff auf sämtliche Ressourcen geben",
            richtig: false
        }
    ],

    lernfelder: ["lf10b"],
    themen: ["verzeichnisdienste", "berechtigungen-server"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf10bq027",
    frage: "Ein Unternehmen stellt für mehrere Abteilungen gemeinsame Netzwerkordner bereit. Welche zentrale Verwaltung ist sinnvoll?",

    antworten: [
        {
            text: "Dateifreigaben mit passenden Zugriffsberechtigungen konfigurieren",
            richtig: true
        },
        {
            text: "Gruppenrichtlinien für geeignete zentrale Benutzereinstellungen einsetzen",
            richtig: true
        },
        {
            text: "Berechtigungen und Konfigurationen entsprechend den organisatorischen Anforderungen planen",
            richtig: true
        },
        {
            text: "Alle Freigaben grundsätzlich ohne Zugriffsbeschränkung bereitstellen",
            richtig: false
        }
    ],

    lernfelder: ["lf10b"],
    themen: ["dateidienste", "gruppenrichtlinien"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf10bq028",
    frage: "Ein Administrator muss regelmäßig für viele Benutzer dieselben Verzeichnisstrukturen anlegen und Berechtigungen setzen. Warum eignet sich Skripting für diese Aufgabe?",

    antworten: [
        {
            text: "Der Ablauf kann automatisiert und reproduzierbar für viele Benutzer durchgeführt werden",
            richtig: true
        },
        {
            text: "Wiederkehrende manuelle Eingaben und mögliche Eingabefehler können reduziert werden",
            richtig: true
        },
        {
            text: "Das Skript kann nach definierten Regeln dieselben Arbeitsschritte wiederholen",
            richtig: true
        },
        {
            text: "Ein Skript benötigt grundsätzlich keine Prüfung und kann niemals Fehler enthalten",
            richtig: false
        }
    ],

    lernfelder: ["lf10b"],
    themen: ["skripting"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
}
];