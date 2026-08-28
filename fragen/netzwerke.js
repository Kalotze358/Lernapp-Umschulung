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
        themen: ["ports-protokolle"],
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
    },
    {
    id: "netz023",
    frage: "Welche Protokolle gehören zur Transportschicht des TCP/IP-Modells?",

    antworten: [
        {
            text: "TCP",
            richtig: true
        },
        {
            text: "UDP",
            richtig: true
        },
        {
            text: "IP",
            richtig: false
        },
        {
            text: "ICMP",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["tcp-ip-modell", "tcp-udp"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz024",
    frage: "Welche Aufgabe hat ARP in einem IPv4-Netzwerk?",

    antworten: [
        {
            text: "Zu einer bekannten IPv4-Adresse die passende MAC-Adresse ermitteln",
            richtig: true
        },
        {
            text: "Domainnamen in IPv4-Adressen übersetzen",
            richtig: false
        },
        {
            text: "Automatisch IPv4-Adressen an Clients vergeben",
            richtig: false
        },
        {
            text: "Daten zwischen verschiedenen Netzwerken routen",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["arp"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz025",
    frage: "Welcher IPv4-Bereich wird für APIPA verwendet?",

    antworten: [
        {
            text: "10.0.0.0/8",
            richtig: false
        },
        {
            text: "169.254.0.0/16",
            richtig: true
        },
        {
            text: "172.16.0.0/12",
            richtig: false
        },
        {
            text: "192.168.0.0/16",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["apipa", "ipv4"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz026",
    frage: "Ein Windows-PC besitzt die IPv4-Adresse 169.254.15.27. Worauf deutet das häufig hin?",

    antworten: [
        {
            text: "Der Client konnte wahrscheinlich keine Adresse von einem DHCP-Server erhalten",
            richtig: true
        },
        {
            text: "Der DNS-Server arbeitet fehlerfrei",
            richtig: false
        },
        {
            text: "Der Client besitzt automatisch eine öffentliche IPv4-Adresse",
            richtig: false
        },
        {
            text: "Der Client hat zwingend eine statische IPv4-Adresse erhalten",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["apipa", "dhcp", "fehlersuche"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz027",
    frage: "Welche der folgenden IPv4-Adressen gehört zu einem privaten IPv4-Adressbereich?",

    antworten: [
        {
            text: "8.8.8.8",
            richtig: false
        },
        {
            text: "192.168.10.25",
            richtig: true
        },
        {
            text: "169.254.10.5",
            richtig: false
        },
        {
            text: "203.0.113.10",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["private-ip-adressen", "ipv4"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz028",
    frage: "Welche IPv4-Netzbereiche sind für private Netzwerke vorgesehen?",

    antworten: [
        {
            text: "10.0.0.0/8",
            richtig: true
        },
        {
            text: "172.16.0.0/12",
            richtig: true
        },
        {
            text: "192.168.0.0/16",
            richtig: true
        },
        {
            text: "169.254.0.0/16",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["private-ip-adressen", "ipv4"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz029",
    frage: "Ein Client kennt die IPv4-Adresse eines Geräts im lokalen Netzwerk, benötigt aber dessen MAC-Adresse. Welches Protokoll wird verwendet?",

    antworten: [
        {
            text: "ARP",
            richtig: true
        },
        {
            text: "DNS",
            richtig: false
        },
        {
            text: "DHCP",
            richtig: false
        },
        {
            text: "HTTP",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["arp"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz030",
    frage: "Welche IPv4-Adresse liegt nicht in einem der privaten IPv4-Adressbereiche?",

    antworten: [
        {
            text: "10.10.10.10",
            richtig: false
        },
        {
            text: "172.20.5.4",
            richtig: false
        },
        {
            text: "192.168.1.100",
            richtig: false
        },
        {
            text: "172.32.0.1",
            richtig: true
        }
    ],

    lernfelder: ["lf03"],
    themen: ["private-ip-adressen", "ipv4"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz031",
    frage: "Welcher Port wird standardmäßig für HTTP verwendet?",

    antworten: [
        {
            text: "22",
            richtig: false
        },
        {
            text: "53",
            richtig: false
        },
        {
            text: "80",
            richtig: true
        },
        {
            text: "443",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["ports-protokolle"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz032",
    frage: "Welche Zuordnungen von Dienst und Standardport sind korrekt?",

    antworten: [
        {
            text: "SSH – Port 22",
            richtig: true
        },
        {
            text: "DNS – Port 53",
            richtig: true
        },
        {
            text: "HTTP – Port 80",
            richtig: true
        },
        {
            text: "HTTPS – Port 21",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["ports-protokolle"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz033",
    frage: "Welche Aussage beschreibt NAT am besten?",

    antworten: [
        {
            text: "NAT übersetzt IP-Adressen beim Übergang zwischen Netzwerken",
            richtig: true
        },
        {
            text: "NAT übersetzt Domainnamen in IP-Adressen",
            richtig: false
        },
        {
            text: "NAT vergibt automatisch IP-Adressen an Clients",
            richtig: false
        },
        {
            text: "NAT ersetzt grundsätzlich einen Switch",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["nat"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz034",
    frage: "Welchen Vorteil bietet NAT häufig in IPv4-Netzwerken?",

    antworten: [
        {
            text: "Mehrere Geräte mit privaten IPv4-Adressen können eine öffentliche IPv4-Adresse gemeinsam nutzen",
            richtig: true
        },
        {
            text: "Jeder Client benötigt dadurch zwingend eine eigene öffentliche IPv4-Adresse",
            richtig: false
        },
        {
            text: "NAT ersetzt die Vergabe von MAC-Adressen",
            richtig: false
        },
        {
            text: "NAT verhindert grundsätzlich jede Kommunikation zwischen Netzwerken",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["nat", "private-ip-adressen"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz035",
    frage: "Welche Aufgabe übernimmt ein Router hauptsächlich?",

    antworten: [
        {
            text: "Datenpakete zwischen unterschiedlichen IP-Netzwerken weiterleiten",
            richtig: true
        },
        {
            text: "Nur Geräte innerhalb desselben LANs über MAC-Adressen verbinden",
            richtig: false
        },
        {
            text: "Ausschließlich Domainnamen auflösen",
            richtig: false
        },
        {
            text: "Nur WLAN-Signale verstärken",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["routing", "netzwerkkomponenten"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz036",
    frage: "Wofür verwendet ein Router eine Routingtabelle?",

    antworten: [
        {
            text: "Um zu entscheiden, über welchen Weg ein Datenpaket weitergeleitet wird",
            richtig: true
        },
        {
            text: "Um Benutzerpasswörter zu speichern",
            richtig: false
        },
        {
            text: "Um MAC-Adressen dauerhaft an DNS-Namen zu binden",
            richtig: false
        },
        {
            text: "Um Dateien zwischen Clients zu synchronisieren",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["routing"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz037",
    frage: "Welche Aussagen über VLANs sind korrekt?",

    antworten: [
        {
            text: "VLANs ermöglichen eine logische Trennung von Netzwerken",
            richtig: true
        },
        {
            text: "Geräte in unterschiedlichen VLANs können am selben physischen Switch angeschlossen sein",
            richtig: true
        },
        {
            text: "Für die Kommunikation zwischen unterschiedlichen VLANs ist Routing erforderlich",
            richtig: true
        },
        {
            text: "Ein VLAN funktioniert nur mit WLAN-Geräten",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["vlan", "routing"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz038",
    frage: "Was ist der wesentliche Zweck eines VLANs?",

    antworten: [
        {
            text: "Ein physisches Netzwerk logisch in getrennte Netzwerkbereiche aufteilen",
            richtig: true
        },
        {
            text: "IPv4-Adressen automatisch vergeben",
            richtig: false
        },
        {
            text: "Domainnamen in IP-Adressen umwandeln",
            richtig: false
        },
        {
            text: "Die Übertragungsgeschwindigkeit eines Netzwerkkabels erhöhen",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["vlan"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz039",
    frage: "Ein Client möchte ein Ziel in einem anderen IP-Netzwerk erreichen. An welches Gerät sendet er das Paket normalerweise zuerst?",

    antworten: [
        {
            text: "An sein Standardgateway",
            richtig: true
        },
        {
            text: "Direkt an den DNS-Server",
            richtig: false
        },
        {
            text: "Immer an den DHCP-Server",
            richtig: false
        },
        {
            text: "An jeden Switch im Netzwerk gleichzeitig",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["routing", "standardgateway"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz040",
    frage: "Welche Protokolle verwenden Portnummern?",

    antworten: [
        {
            text: "TCP",
            richtig: true
        },
        {
            text: "UDP",
            richtig: true
        },
        {
            text: "IP",
            richtig: false
        },
        {
            text: "ARP",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09"],
    themen: ["ports-protokolle", "tcp-ip-modell"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz041",
    frage: "Welche Aussage beschreibt TCP korrekt?",

    antworten: [
        {
            text: "TCP arbeitet verbindungsorientiert und bietet eine zuverlässige Datenübertragung",
            richtig: true
        },
        {
            text: "TCP arbeitet grundsätzlich ohne Verbindungsaufbau",
            richtig: false
        },
        {
            text: "TCP verwendet keine Portnummern",
            richtig: false
        },
        {
            text: "TCP kann ausschließlich in lokalen Netzwerken eingesetzt werden",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["tcp-udp", "ports-protokolle"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz042",
    frage: "Welche Aussagen über UDP sind korrekt?",

    antworten: [
        {
            text: "UDP arbeitet verbindungslos",
            richtig: true
        },
        {
            text: "UDP garantiert die Zustellung aller Daten",
            richtig: false
        },
        {
            text: "UDP verwendet Portnummern",
            richtig: true
        },
        {
            text: "UDP garantiert die Reihenfolge der übertragenen Daten",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["tcp-udp", "ports-protokolle"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz043",
    frage: "Welches Protokoll wird vom Werkzeug ping typischerweise verwendet?",

    antworten: [
        {
            text: "ICMP",
            richtig: true
        },
        {
            text: "HTTP",
            richtig: false
        },
        {
            text: "DHCP",
            richtig: false
        },
        {
            text: "ARP",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["icmp", "netzwerkbefehle"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz044",
    frage: "Welche Aufgabe erfüllt ICMP in IP-Netzwerken hauptsächlich?",

    antworten: [
        {
            text: "Kontroll- und Fehlermeldungen übertragen",
            richtig: true
        },
        {
            text: "IPv4-Adressen automatisch vergeben",
            richtig: false
        },
        {
            text: "Domainnamen in IP-Adressen übersetzen",
            richtig: false
        },
        {
            text: "Dateien zwischen Clients übertragen",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["icmp"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz045",
    frage: "Welche Zuordnungen sind korrekt?",

    antworten: [
        {
            text: "Unicast – ein Sender zu einem Empfänger",
            richtig: true
        },
        {
            text: "Broadcast – ein Sender zu allen Geräten einer Broadcast-Domäne",
            richtig: true
        },
        {
            text: "Multicast – ein Sender zu einer bestimmten Empfängergruppe",
            richtig: true
        },
        {
            text: "Unicast – ein Sender grundsätzlich zu allen Geräten im Netzwerk",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["unicast-broadcast-multicast"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz046",
    frage: "Welche Information lernt ein Switch aus einem eingehenden Ethernet-Frame?",

    antworten: [
        {
            text: "Über welchen Port die Quell-MAC-Adresse erreichbar ist",
            richtig: true
        },
        {
            text: "Das Passwort des sendenden Benutzers",
            richtig: false
        },
        {
            text: "Den DNS-Namen des Zielservers",
            richtig: false
        },
        {
            text: "Die öffentliche IPv4-Adresse des Internetproviders",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["switching", "mac-adressen", "netzwerkkomponenten"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz047",
    frage: "Wozu verwendet ein Switch seine MAC-Adresstabelle?",

    antworten: [
        {
            text: "Um Ethernet-Frames möglichst gezielt an den richtigen Port weiterzuleiten",
            richtig: true
        },
        {
            text: "Um Domainnamen aufzulösen",
            richtig: false
        },
        {
            text: "Um automatisch IPv4-Adressen zu vergeben",
            richtig: false
        },
        {
            text: "Um Daten zwischen verschiedenen IP-Netzen zu routen",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["switching", "mac-adressen"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz048",
    frage: "Wie werden IPv6-Adressen dargestellt?",

    antworten: [
        {
            text: "Als hexadezimale Werte mit Doppelpunkten als Trennzeichen",
            richtig: true
        },
        {
            text: "Ausschließlich als vier dezimale Zahlen zwischen 0 und 255",
            richtig: false
        },
        {
            text: "Nur als MAC-Adressen",
            richtig: false
        },
        {
            text: "Ausschließlich als Binärzahlen ohne Trennzeichen",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["ipv6", "ipv6-vertiefung"],
    schwierigkeit: "leicht",
    typ: "single-choice"
},
{
    id: "netz049",
    frage: "Welche Adresse gehört zum IPv6-Link-Local-Bereich?",

    antworten: [
        {
            text: "fe80::1",
            richtig: true
        },
        {
            text: "192.168.1.1",
            richtig: false
        },
        {
            text: "127.0.0.1",
            richtig: false
        },
        {
            text: "10.0.0.1",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["ipv6", "ipv6-vertiefung"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz050",
    frage: "Welche Aussagen über IPv6 sind korrekt?",

    antworten: [
        {
            text: "IPv6-Adressen sind 128 Bit lang",
            richtig: true
        },
        {
            text: "IPv6-Adressen werden typischerweise hexadezimal dargestellt",
            richtig: true
        },
        {
            text: "IPv6 verwendet keinen klassischen Broadcast wie IPv4",
            richtig: true
        },
        {
            text: "IPv6-Adressen bestehen grundsätzlich aus vier Dezimalblöcken",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["ipv6", "ipv6-vertiefung"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz051",
    frage: "Welche Verfahren werden zur Absicherung moderner WLAN-Verbindungen eingesetzt?",

    antworten: [
        {
            text: "WPA2",
            richtig: true
        },
        {
            text: "WPA3",
            richtig: true
        },
        {
            text: "Telnet",
            richtig: false
        },
        {
            text: "FTP",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09", "lf11b"],
    themen: ["wlan", "wlan-sicherheit"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},
{
    id: "netz052",
    frage: "Welches Sicherheitsverfahren bietet gegenüber WPA2 zusätzliche moderne Schutzmechanismen?",

    antworten: [
        {
            text: "WPA3",
            richtig: true
        },
        {
            text: "WEP",
            richtig: false
        },
        {
            text: "HTTP",
            richtig: false
        },
        {
            text: "ARP",
            richtig: false
        }
    ],

    lernfelder: ["lf03", "lf09", "lf11b"],
    themen: ["wlan-sicherheit", "wlan"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz053",
    frage: "Ein Unternehmen plant ein neues LAN für 20 Arbeitsplätze. Warum ist eine strukturierte Sterntopologie mit zentralen Switches gegenüber einer direkten Verkettung der Geräte sinnvoll?",

    antworten: [
        {
            text: "Einzelne Verbindungen können getrennt verwaltet werden und der Ausfall eines Endgeräts unterbricht nicht automatisch alle anderen Verbindungen",
            richtig: true
        },
        {
            text: "Alle Geräte benötigen dadurch dieselbe IP-Adresse",
            richtig: false
        },
        {
            text: "Ein Switch ersetzt dadurch automatisch den Router zum Internet",
            richtig: false
        },
        {
            text: "Eine Sterntopologie benötigt grundsätzlich keine Netzwerkkabel",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["netzwerkgrundlagen", "netzwerktopologien"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "netz054",
    frage: "Zwei PCs befinden sich im selben Ethernet-LAN und sollen direkt miteinander kommunizieren. Welche Informationen beziehungsweise Mechanismen sind dabei relevant?",

    antworten: [
        {
            text: "IP-Adressen zur logischen Adressierung",
            richtig: true
        },
        {
            text: "MAC-Adressen für die Übertragung innerhalb des lokalen Ethernet-Netzes",
            richtig: true
        },
        {
            text: "Ein Switch kann Ethernet-Frames zwischen den Geräten weiterleiten",
            richtig: true
        },
        {
            text: "Für jede Kommunikation im selben LAN ist zwingend ein Internetzugang erforderlich",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["netzwerkgrundlagen", "ethernet"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz055",
    frage: "Mehrere Büroarbeitsplätze werden über einen zentralen Switch miteinander verbunden. Welche Aussagen zur physischen Netzwerkstruktur sind korrekt?",

    antworten: [
        {
            text: "Die Struktur entspricht grundsätzlich einer Sterntopologie",
            richtig: true
        },
        {
            text: "Kupferleitungen können für die Verbindung der Arbeitsplätze zum Switch eingesetzt werden",
            richtig: true
        },
        {
            text: "Glasfaser kann beispielsweise für längere oder leistungsfähige Verbindungen zwischen Netzwerkbereichen eingesetzt werden",
            richtig: true
        },
        {
            text: "In einer Sterntopologie müssen alle Endgeräte direkt miteinander verkabelt werden",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["netzwerktopologien", "uebertragungsmedien"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz056",
    frage: "Ein Ethernet-Switch wertet MAC-Adressen aus, um Frames im lokalen Netzwerk weiterzuleiten. Welcher OSI-Schicht wird diese Funktion hauptsächlich zugeordnet?",

    antworten: [
        {
            text: "Schicht 2 – Sicherungsschicht",
            richtig: true
        },
        {
            text: "Schicht 1 – Bitübertragungsschicht",
            richtig: false
        },
        {
            text: "Schicht 4 – Transportschicht",
            richtig: false
        },
        {
            text: "Schicht 7 – Anwendungsschicht",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["osi-modell", "ethernet"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "netz057",
    frage: "Ein Ethernet-Frame wird als Broadcast an alle Geräte innerhalb derselben Broadcast-Domain gesendet. Welche Aussagen sind korrekt?",

    antworten: [
        {
            text: "Broadcast-Kommunikation richtet sich an alle Teilnehmer der betreffenden Broadcast-Domain",
            richtig: true
        },
        {
            text: "Ethernet arbeitet bei der Frameübertragung auf der Sicherungsschicht des OSI-Modells",
            richtig: true
        },
        {
            text: "Router leiten Layer-2-Broadcasts normalerweise nicht einfach in andere Netze weiter",
            richtig: true
        },
        {
            text: "Broadcast bedeutet eine Kommunikation ausschließlich zwischen genau zwei Geräten",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["osi-modell", "unicast-broadcast-multicast"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "netz058",
    frage: "Zwischen zwei Gebäudeteilen soll eine längere Netzwerkverbindung mit hoher Datenrate und möglichst geringer Empfindlichkeit gegenüber elektromagnetischen Störungen aufgebaut werden. Welche Lösung ist besonders geeignet?",

    antworten: [
        {
            text: "Eine geeignete Glasfaserverbindung",
            richtig: true
        },
        {
            text: "Ein beliebiges ungeschirmtes Kupferkabel unabhängig von Entfernung und Umgebung",
            richtig: false
        },
        {
            text: "Eine analoge Telefonleitung",
            richtig: false
        },
        {
            text: "Die Übertragungsart muss nicht dokumentiert werden, weil sie für spätere Wartung bedeutungslos ist",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["uebertragungsmedien", "netzwerkdokumentation"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "netz059",
    frage: "Ein Administrator dokumentiert, welche Netzwerksegmente Broadcast- und Multicast-Verkehr verwenden. Warum ist diese Information für den späteren Betrieb sinnvoll?",

    antworten: [
        {
            text: "Kommunikationswege und mögliche Auswirkungen von Netzwerkverkehr lassen sich besser nachvollziehen",
            richtig: true
        },
        {
            text: "Fehlersuche und spätere Änderungen werden erleichtert",
            richtig: true
        },
        {
            text: "Die Dokumentation kann bei der Analyse unerwarteten Netzwerkverkehrs helfen",
            richtig: true
        },
        {
            text: "Eine Netzwerkdokumentation macht technische Kenntnisse überflüssig",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["netzwerkdokumentation", "unicast-broadcast-multicast"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz060",
    frage: "Ein Client besitzt die Adresse 192.168.20.130/26. Welches Standardgateway wäre grundsätzlich möglich, wenn es sich im selben Subnetz befinden soll?",

    antworten: [
        {
            text: "192.168.20.129",
            richtig: true
        },
        {
            text: "192.168.20.65",
            richtig: false
        },
        {
            text: "192.168.20.191",
            richtig: false
        },
        {
            text: "192.168.20.192",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["subnetting", "standardgateway"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "netz061",
    frage: "Ein Rechner erreicht einen Webserver über dessen IP-Adresse, aber nicht über seinen Namen. Welche Schritte sind für die Fehlersuche sinnvoll?",

    antworten: [
        {
            text: "Die konfigurierte DNS-Serveradresse überprüfen",
            richtig: true
        },
        {
            text: "Mit geeigneten Netzwerkbefehlen die Namensauflösung testen",
            richtig: true
        },
        {
            text: "Prüfen, ob der DNS-Dienst erreichbar ist",
            richtig: true
        },
        {
            text: "Sofort die Netzwerkkarte austauschen, ohne weitere Tests durchzuführen",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["dns", "netzwerkbefehle"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "netz062",
    frage: "Ein Windows-PC erhält die Adresse 169.254.45.12 und kann keine Server im Unternehmensnetz erreichen. Welche Schlussfolgerung und Vorgehensweise sind sinnvoll?",

    antworten: [
        {
            text: "Die APIPA-Adresse deutet darauf hin, dass wahrscheinlich keine reguläre DHCP-Konfiguration bezogen wurde",
            richtig: true
        },
        {
            text: "Die Verbindung zum Netzwerk und die Erreichbarkeit des DHCP-Dienstes sollten geprüft werden",
            richtig: true
        },
        {
            text: "Die Fehlersuche sollte die aktuelle IP-Konfiguration einbeziehen",
            richtig: true
        },
        {
            text: "Eine Adresse aus 169.254.0.0/16 bestätigt, dass DHCP erfolgreich gearbeitet hat",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["apipa", "fehlersuche"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "netz063",
    frage: "Ein PC möchte innerhalb seines lokalen IPv4-Netzes ein Paket an ein anderes Gerät senden. Die Ziel-IP ist bekannt, die MAC-Adresse jedoch nicht. Was geschieht typischerweise?",

    antworten: [
        {
            text: "ARP wird verwendet, um die zur IPv4-Adresse gehörende MAC-Adresse zu ermitteln",
            richtig: true
        },
        {
            text: "NAT übersetzt die Ziel-IP automatisch in eine MAC-Adresse",
            richtig: false
        },
        {
            text: "DNS ermittelt grundsätzlich die MAC-Adresse des Zielsystems",
            richtig: false
        },
        {
            text: "Ohne öffentliche IPv4-Adresse ist lokale Kommunikation unmöglich",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["arp", "nat"],
    schwierigkeit: "mittel",
    typ: "single-choice"
},
{
    id: "netz064",
    frage: "Ein Administrator prüft die Kommunikation zwischen verschiedenen VLANs. Welche Aussagen sind korrekt?",

    antworten: [
        {
            text: "Geräte in unterschiedlichen VLANs benötigen für die Kommunikation normalerweise Routing",
            richtig: true
        },
        {
            text: "ICMP kann beispielsweise mit ping zur Prüfung der Erreichbarkeit verwendet werden",
            richtig: true
        },
        {
            text: "Eine fehlgeschlagene ICMP-Antwort beweist allein noch nicht eindeutig, dass das Zielsystem ausgeschaltet ist",
            richtig: true
        },
        {
            text: "VLANs sorgen automatisch dafür, dass alle Geräte ohne Routing miteinander kommunizieren können",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["vlan", "icmp"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "netz065",
    frage: "Ein Unternehmen erweitert sein kabelgebundenes LAN um WLAN-Access-Points. Welche Maßnahmen unterstützen einen sicheren und funktionierenden Betrieb?",

    antworten: [
        {
            text: "Geeignete WLAN-Sicherheitsverfahren wie WPA2 oder WPA3 einsetzen",
            richtig: true
        },
        {
            text: "Switch-Ports und Netzwerkzuordnungen passend zur geplanten Infrastruktur konfigurieren",
            richtig: true
        },
        {
            text: "Die Einbindung der Access-Points in die vorhandene Switching-Infrastruktur berücksichtigen",
            richtig: true
        },
        {
            text: "Für ein sicheres WLAN grundsätzlich sämtliche Authentifizierung deaktivieren",
            richtig: false
        }
    ],

    lernfelder: ["lf03"],
    themen: ["switching", "wlan-sicherheit"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
}
];