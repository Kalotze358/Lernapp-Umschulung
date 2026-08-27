const netzwerkFragen = [
    {
        id: "netz001",
        frage: "Wie viele nutzbare Hosts hat ein /24-Netz?",
        antworten: [
            {
                text: "252",
                richtig: false
            },
            {
                text: "254",
                richtig: true
            },
            {
                text: "255",
                richtig: false
            },
            {
                text: "256",
                richtig: false
            }
        ],
        lernfelder: ["lf03", "lf09"],
        themen: ["ipv4", "subnetting"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz002",
        frage: "Wofür steht die Abkürzung DHCP?",
        antworten: [
            {
                text: "Dynamic Host Configuration Protocol",
                richtig: true
            },
            {
                text: "Domain Host Control Protocol",
                richtig: false
            },
            {
                text: "Dynamic Hardware Connection Process",
                richtig: false
            },
            {
                text: "Data Host Communication Protocol",
                richtig: false
            }
        ],
        lernfelder: ["lf03", "lf09", "lf10b"],
        themen: ["dhcp", "netzwerkdienste"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz003",
        frage: "Welcher Port wird standardmäßig für HTTPS verwendet?",
        antworten: [
            {
                text: "21",
                richtig: false
            },
            {
                text: "53",
                richtig: false
            },
            {
                text: "80",
                richtig: false
            },
            {
                text: "443",
                richtig: true
            }
        ],
        lernfelder: ["lf03", "lf09", "lf11b"],
        themen: ["ports", "https", "netzwerkdienste"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz004",
        frage: "Welches Protokoll übersetzt Domainnamen in IP-Adressen?",
        antworten: [
            {
                text: "DHCP",
                richtig: false
            },
            {
                text: "DNS",
                richtig: true
            },
            {
                text: "ARP",
                richtig: false
            },
            {
                text: "HTTP",
                richtig: false
            }
        ],
        lernfelder: ["lf03", "lf09", "lf10b"],
        themen: ["dns", "netzwerkdienste"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz005",
        frage: "Was ist die grundlegende Aufgabe eines Computernetzwerks?",
        antworten: [
            {
                text: "Geräte miteinander verbinden und Datenaustausch ermöglichen",
                richtig: true
            },
            {
                text: "Nur Dateien auf einem einzelnen PC speichern",
                richtig: false
            },
            {
                text: "Ausschließlich Programme installieren",
                richtig: false
            },
            {
                text: "Die CPU-Leistung eines Computers erhöhen",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["netzwerkgrundlagen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz006",
        frage: "Welche Netzwerktopologie wird in heutigen Ethernet-LANs häufig verwendet?",
        antworten: [
            {
                text: "Stern-Topologie",
                richtig: true
            },
            {
                text: "Ring-Topologie",
                richtig: false
            },
            {
                text: "Bus-Topologie",
                richtig: false
            },
            {
                text: "Linien-Topologie",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["netzwerktopologien"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz007",
        frage: "Aus wie vielen Schichten besteht das OSI-Modell?",
        antworten: [
            {
                text: "4",
                richtig: false
            },
            {
                text: "5",
                richtig: false
            },
            {
                text: "7",
                richtig: true
            },
            {
                text: "8",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["osi-modell"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz008",
        frage: "Welchen Zweck erfüllt das TCP/IP-Modell?",
        antworten: [
            {
                text: "Es beschreibt die Kommunikation in IP-Netzwerken",
                richtig: true
            },
            {
                text: "Es beschreibt ausschließlich den Aufbau von Computern",
                richtig: false
            },
            {
                text: "Es legt die Größe von Festplatten fest",
                richtig: false
            },
            {
                text: "Es dient nur zur Benutzerverwaltung",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["tcp-ip-modell"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz009",
        frage: "Wofür wird Ethernet hauptsächlich eingesetzt?",
        antworten: [
            {
                text: "Zur Datenübertragung in lokalen Netzwerken",
                richtig: true
            },
            {
                text: "Zur Verschlüsselung von Passwörtern",
                richtig: false
            },
            {
                text: "Zur Verwaltung von Datenbanken",
                richtig: false
            },
            {
                text: "Zur Erstellung von Webseiten",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["ethernet"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz010",
        frage: "Wozu dient eine MAC-Adresse?",
        antworten: [
            {
                text: "Zur Identifikation einer Netzwerkschnittstelle im lokalen Netzwerk",
                richtig: true
            },
            {
                text: "Zur Vergabe eines Domainnamens",
                richtig: false
            },
            {
                text: "Zur Verschlüsselung einer Internetverbindung",
                richtig: false
            },
            {
                text: "Zur Speicherung eines Benutzerpassworts",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["mac-adressen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz011",
        frage: "Welche IPv4-Adresse gehört zum Loopback-Bereich?",
        antworten: [
            {
                text: "127.0.0.1",
                richtig: true
            },
            {
                text: "192.168.0.1",
                richtig: false
            },
            {
                text: "169.254.0.1",
                richtig: false
            },
            {
                text: "224.0.0.1",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["ipv4"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "netz012",
        frage: "Wie lang ist eine IPv6-Adresse?",
        antworten: [
            {
                text: "32 Bit",
                richtig: false
            },
            {
                text: "64 Bit",
                richtig: false
            },
            {
                text: "128 Bit",
                richtig: true
            },
            {
                text: "256 Bit",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["ipv6"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "netz013",
        frage: "Wie viele nutzbare Hostadressen stehen in einem IPv4-/26-Netz normalerweise zur Verfügung?",
        antworten: [
            {
                text: "30",
                richtig: false
            },
            {
                text: "62",
                richtig: true
            },
            {
                text: "64",
                richtig: false
            },
            {
                text: "126",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["ipv4", "subnetting"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "netz014",
        frage: "In welcher Reihenfolge läuft der DHCP-DORA-Prozess ab?",
        antworten: [
            {
                text: "Discover → Offer → Request → Acknowledge",
                richtig: true
            },
            {
                text: "Discover → Request → Offer → Acknowledge",
                richtig: false
            },
            {
                text: "Offer → Discover → Acknowledge → Request",
                richtig: false
            },
            {
                text: "Request → Offer → Discover → Acknowledge",
                richtig: false
            }
        ],
        lernfelder: ["lf03", "lf09", "lf10b"],
        themen: ["dhcp", "netzwerkdienste"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "netz015",
        frage: "Welcher DNS-Record ordnet einen Hostnamen einer IPv4-Adresse zu?",
        antworten: [
            {
                text: "A",
                richtig: true
            },
            {
                text: "AAAA",
                richtig: false
            },
            {
                text: "MX",
                richtig: false
            },
            {
                text: "PTR",
                richtig: false
            }
        ],
        lernfelder: ["lf03", "lf09", "lf10b"],
        themen: ["dns", "netzwerkdienste"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "netz016",
        frage: "Wann verwendet ein Client sein Standardgateway?",
        antworten: [
            {
                text: "Wenn das Ziel außerhalb des eigenen lokalen Netzes liegt",
                richtig: true
            },
            {
                text: "Bei jeder Kommunikation mit einem Gerät im gleichen Subnetz",
                richtig: false
            },
            {
                text: "Nur wenn kein DNS-Server erreichbar ist",
                richtig: false
            },
            {
                text: "Nur bei der automatischen Vergabe einer IP-Adresse",
                richtig: false
            }
        ],
        lernfelder: ["lf03", "lf09"],
        themen: ["standardgateway"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "netz017",
        frage: "Welche Aufgabe übernimmt ein Switch hauptsächlich in einem lokalen Netzwerk?",
        antworten: [
            {
                text: "Er verbindet Geräte innerhalb eines LANs miteinander",
                richtig: true
            },
            {
                text: "Er übersetzt Domainnamen in IP-Adressen",
                richtig: false
            },
            {
                text: "Er vergibt automatisch IP-Adressen",
                richtig: false
            },
            {
                text: "Er verbindet ausschließlich das LAN mit dem Internet",
                richtig: false
            }
        ],
        lernfelder: ["lf03", "lf09"],
        themen: ["netzwerkkomponenten"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz018",
        frage: "Welcher wesentliche Unterschied besteht zwischen Kupfer- und Glasfaserkabeln?",
        antworten: [
            {
                text: "Kupfer überträgt elektrische Signale, Glasfaser Lichtsignale",
                richtig: true
            },
            {
                text: "Kupfer überträgt Lichtsignale, Glasfaser Funksignale",
                richtig: false
            },
            {
                text: "Beide übertragen ausschließlich elektrische Signale",
                richtig: false
            },
            {
                text: "Glasfaser kann nur für WLAN-Verbindungen verwendet werden",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["uebertragungsmedien"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz019",
        frage: "Welche Aufgabe übernimmt ein Access Point in einem WLAN?",
        antworten: [
            {
                text: "Er ermöglicht drahtlosen Geräten den Zugang zum Netzwerk",
                richtig: true
            },
            {
                text: "Er ersetzt grundsätzlich den DNS-Server",
                richtig: false
            },
            {
                text: "Er speichert die IP-Adressen aller Internetserver",
                richtig: false
            },
            {
                text: "Er verschlüsselt ausschließlich Dateien auf Clients",
                richtig: false
            }
        ],
        lernfelder: ["lf03", "lf09"],
        themen: ["wlan", "netzwerkkomponenten"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz020",
        frage: "Mit welchem Befehl kann unter Windows die aktuelle IP-Konfiguration angezeigt werden?",
        antworten: [
            {
                text: "ipconfig",
                richtig: true
            },
            {
                text: "ping",
                richtig: false
            },
            {
                text: "tracert",
                richtig: false
            },
            {
                text: "nslookup",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["netzwerkbefehle"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "netz021",
        frage: "Ein PC erreicht keine Netzwerkressourcen. Was sollte bei einer systematischen Fehlersuche zuerst geprüft werden?",
        antworten: [
            {
                text: "Die physische Verbindung, zum Beispiel Kabel und Link",
                richtig: true
            },
            {
                text: "Sofort der DNS-Server neu installiert werden",
                richtig: false
            },
            {
                text: "Das Betriebssystem vollständig neu installiert werden",
                richtig: false
            },
            {
                text: "Direkt die Firewall des gesamten Netzwerks deaktiviert werden",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["fehlersuche"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "netz022",
        frage: "Welche Information gehört typischerweise in eine Netzwerkdokumentation?",
        antworten: [
            {
                text: "IP-Adressen, Geräte und Netzwerkverbindungen",
                richtig: true
            },
            {
                text: "Nur die Passwörter aller Benutzer",
                richtig: false
            },
            {
                text: "Ausschließlich die Kaufpreise der Computer",
                richtig: false
            },
            {
                text: "Nur die Namen der installierten Programme",
                richtig: false
            }
        ],
        lernfelder: ["lf03"],
        themen: ["netzwerkdokumentation"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    }
];