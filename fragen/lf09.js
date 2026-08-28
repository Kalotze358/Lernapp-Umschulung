const lf09Fragen = [
    {
        id: "lf09q001",
        frage: "Wie viele nutzbare Hostadressen stehen in einem IPv4-Netz mit dem Präfix /27 zur Verfügung?",

        antworten: [
            {
                text: "30",
                richtig: true
            },
            {
                text: "32",
                richtig: false
            },
            {
                text: "62",
                richtig: false
            },
            {
                text: "14",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["subnetting", "ipv4"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q002",
        frage: "Ein Gerät besitzt die IPv4-Adresse 192.168.10.70/26. Welche Netzwerkadresse gehört zu diesem Subnetz?",

        antworten: [
            {
                text: "192.168.10.64",
                richtig: true
            },
            {
                text: "192.168.10.0",
                richtig: false
            },
            {
                text: "192.168.10.70",
                richtig: false
            },
            {
                text: "192.168.10.128",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["subnetting", "ipv4"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q003",
        frage: "Ein neues IPv4-Subnetz soll mindestens 50 nutzbare Hostadressen bereitstellen. Welches Präfix ist dafür das kleinste geeignete Netz?",

        antworten: [
            {
                text: "/26",
                richtig: true
            },
            {
                text: "/27",
                richtig: false
            },
            {
                text: "/28",
                richtig: false
            },
            {
                text: "/30",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["subnetting", "netzwerkplanung"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q004",
        frage: "Zwei Computer sind am selben Switch angeschlossen, befinden sich aber in unterschiedlichen VLANs. Was wird benötigt, damit sie miteinander kommunizieren können?",

        antworten: [
            {
                text: "Routing zwischen den VLANs",
                richtig: true
            },
            {
                text: "Nur ein längeres Netzwerkkabel",
                richtig: false
            },
            {
                text: "Beide Geräte müssen dieselbe MAC-Adresse erhalten",
                richtig: false
            },
            {
                text: "Ein zusätzlicher DNS-Server reicht aus",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["vlan", "routing"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q005",
        frage: "Welcher Standard wird häufig verwendet, um VLAN-Informationen auf einer Ethernet-Trunk-Verbindung zu kennzeichnen?",

        antworten: [
            {
                text: "IEEE 802.1Q",
                richtig: true
            },
            {
                text: "IEEE 802.11",
                richtig: false
            },
            {
                text: "IPv4",
                richtig: false
            },
            {
                text: "SMTP",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["trunking", "vlan"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q006",
        frage: "Welche Aussagen über Access-Ports und Trunk-Ports sind korrekt?",

        antworten: [
            {
                text: "Ein Access-Port ist normalerweise einem einzelnen VLAN zugeordnet",
                richtig: true
            },
            {
                text: "Ein Trunk kann Verkehr mehrerer VLANs transportieren",
                richtig: true
            },
            {
                text: "Trunks werden beispielsweise zwischen Switches eingesetzt",
                richtig: true
            },
            {
                text: "Ein Access-Port muss grundsätzlich alle VLANs gleichzeitig transportieren",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["trunking", "vlan"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf09q007",
        frage: "Ein Router kennt für ein Zielnetz sowohl eine spezifische Route als auch eine Default-Route. Welche Route wird normalerweise verwendet?",

        antworten: [
            {
                text: "Die spezifischere passende Route",
                richtig: true
            },
            {
                text: "Immer die Default-Route",
                richtig: false
            },
            {
                text: "Immer die Route mit der längsten IP-Adresse",
                richtig: false
            },
            {
                text: "Der Router verwirft das Paket grundsätzlich",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["routing"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q008",
        frage: "Wie wird eine IPv4-Default-Route üblicherweise dargestellt?",

        antworten: [
            {
                text: "0.0.0.0/0",
                richtig: true
            },
            {
                text: "127.0.0.1/8",
                richtig: false
            },
            {
                text: "255.255.255.255/32",
                richtig: false
            },
            {
                text: "169.254.0.0/16",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["routing"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf09q009",
        frage: "Welche Informationen können einem Client über DHCP bereitgestellt werden?",

        antworten: [
            {
                text: "IPv4-Adresse und Subnetzmaske",
                richtig: true
            },
            {
                text: "Standardgateway",
                richtig: true
            },
            {
                text: "DNS-Server",
                richtig: true
            },
            {
                text: "Die MAC-Adresse seiner Netzwerkkarte wird durch DHCP neu erzeugt",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["dhcp"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf09q010",
        frage: "Warum kann in einem gerouteten Netzwerk ein DHCP-Relay eingesetzt werden?",

        antworten: [
            {
                text: "Damit DHCP-Anfragen zwischen verschiedenen Subnetzen an einen DHCP-Server weitergeleitet werden können",
                richtig: true
            },
            {
                text: "Damit jeder Client automatisch eine neue MAC-Adresse erhält",
                richtig: false
            },
            {
                text: "Damit DNS-Namen verschlüsselt werden",
                richtig: false
            },
            {
                text: "Damit VLANs ohne Switches funktionieren",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["dhcp", "routing"],
        schwierigkeit: "schwer",
        typ: "single-choice"
    },
    {
        id: "lf09q011",
        frage: "Welche Zuordnungen von DNS-Record und Funktion sind korrekt?",

        antworten: [
            {
                text: "A – Name zu IPv4-Adresse",
                richtig: true
            },
            {
                text: "AAAA – Name zu IPv6-Adresse",
                richtig: true
            },
            {
                text: "MX – zuständiger Mailserver einer Domain",
                richtig: true
            },
            {
                text: "CNAME – vergibt automatisch IPv4-Adressen per DHCP",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["dns"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf09q012",
        frage: "Ein Webserver ist über seine IP-Adresse erreichbar, aber nicht über seinen Hostnamen. Welcher Dienst sollte als Erstes genauer überprüft werden?",

        antworten: [
            {
                text: "DNS",
                richtig: true
            },
            {
                text: "NAT auf dem lokalen Drucker",
                richtig: false
            },
            {
                text: "Die Bildschirmauflösung",
                richtig: false
            },
            {
                text: "Das Audiosystem",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["dns", "netzwerkdienste"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q013",
        frage: "Was ist ein wesentlicher Unterschied zwischen NAT und PAT?",

        antworten: [
            {
                text: "PAT kann zusätzlich Portnummern verwenden, um mehrere Verbindungen über eine öffentliche IPv4-Adresse zu unterscheiden",
                richtig: true
            },
            {
                text: "NAT funktioniert ausschließlich mit WLAN",
                richtig: false
            },
            {
                text: "PAT ersetzt das Domain Name System",
                richtig: false
            },
            {
                text: "NAT kann grundsätzlich keine IP-Adressen verändern",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["nat"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q014",
        frage: "Mehrere interne PCs greifen gleichzeitig über dieselbe öffentliche IPv4-Adresse auf das Internet zu. Wie können ihre Verbindungen bei PAT unterschieden werden?",

        antworten: [
            {
                text: "Durch unterschiedliche Portzuordnungen",
                richtig: true
            },
            {
                text: "Durch identische MAC-Adressen",
                richtig: false
            },
            {
                text: "Durch unterschiedliche Bildschirmauflösungen",
                richtig: false
            },
            {
                text: "Durch die Hostnamen der Monitore",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["nat"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q015",
        frage: "Eine Firewall soll aus einem Clientnetz ausschließlich HTTPS-Verbindungen zu einem Webserver erlauben. Welche Kombination ist dafür besonders relevant?",

        antworten: [
            {
                text: "TCP und Zielport 443",
                richtig: true
            },
            {
                text: "UDP und Zielport 53",
                richtig: false
            },
            {
                text: "TCP und Zielport 22",
                richtig: false
            },
            {
                text: "UDP und Zielport 67",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["firewall"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q016",
        frage: "Welche Informationen können von einer Firewallregel zur Entscheidung über Netzwerkverkehr verwendet werden?",

        antworten: [
            {
                text: "Quell- und Zieladresse",
                richtig: true
            },
            {
                text: "Quell- und Zielport",
                richtig: true
            },
            {
                text: "Verwendetes Netzwerkprotokoll",
                richtig: true
            },
            {
                text: "Die Farbe des Netzwerkkabels als zwingendes IP-Merkmal",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["firewall"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf09q017",
        frage: "Welcher VPN-Typ eignet sich typischerweise zur dauerhaften geschützten Verbindung zweier Unternehmensstandorte?",

        antworten: [
            {
                text: "Site-to-Site-VPN",
                richtig: true
            },
            {
                text: "Remote-Access-VPN eines einzelnen Benutzers",
                richtig: false
            },
            {
                text: "DHCP-Relay",
                richtig: false
            },
            {
                text: "DNS-CNAME",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["vpn"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf09q018",
        frage: "Ein Mitarbeiter arbeitet von zu Hause und soll sicher auf interne Unternehmensressourcen zugreifen. Welche Lösung ist dafür typischerweise geeignet?",

        antworten: [
            {
                text: "Remote-Access-VPN",
                richtig: true
            },
            {
                text: "Ein öffentliches WLAN ohne Verschlüsselung",
                richtig: false
            },
            {
                text: "Eine APIPA-Adresse",
                richtig: false
            },
            {
                text: "Ausschließlich ein DNS-A-Record",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["vpn"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf09q019",
        frage: "Welche Informationen sind für ein sinnvolles Netzwerkmonitoring besonders geeignet?",

        antworten: [
            {
                text: "Erreichbarkeit von Geräten",
                richtig: true
            },
            {
                text: "Auslastung von Netzwerkverbindungen",
                richtig: true
            },
            {
                text: "Zustand wichtiger Netzwerkdienste",
                richtig: true
            },
            {
                text: "Die Hintergrundbilder sämtlicher Benutzer",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["netzwerkmonitoring"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf09q020",
        frage: "Welche Informationen gehören sinnvoll in eine technische Netzwerkdokumentation?",

        antworten: [
            {
                text: "IP-Adressbereiche und Subnetze",
                richtig: true
            },
            {
                text: "VLAN-Zuordnungen und Netzwerkgeräte",
                richtig: true
            },
            {
                text: "Wichtige Verbindungen und bereitgestellte Dienste",
                richtig: true
            },
            {
                text: "Private Passwörter der Mitarbeiter im Klartext",
                richtig: false
            }
        ],

        lernfelder: ["lf09"],
        themen: ["netzwerkdokumentation", "netzwerkplanung"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
    id: "lf09q021",
    frage: "Das Monitoring meldet regelmäßig eine sehr hohe Auslastung einer Verbindung zwischen zwei zentralen Switches. Welche Vorgehensweise ist sinnvoll?",

    antworten: [
        {
            text: "Messwerte und Zeitpunkt dokumentieren, die betroffene Verbindung analysieren und mögliche Engpässe untersuchen",
            richtig: true
        },
        {
            text: "Die Monitoring-Meldung grundsätzlich deaktivieren",
            richtig: false
        },
        {
            text: "Die Netzwerkdokumentation löschen, damit keine widersprüchlichen Angaben entstehen",
            richtig: false
        },
        {
            text: "Ohne weitere Analyse sämtliche Switches ersetzen",
            richtig: false
        }
    ],

    lernfelder: ["lf09"],
    themen: ["netzwerkmonitoring", "netzwerkdokumentation"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf09q022",
    frage: "Ein Administrator erweitert ein bestehendes Netzwerk um einen neuen Switch und mehrere VLANs. Welche Maßnahmen unterstützen den späteren Betrieb und die Fehlersuche?",

    antworten: [
        {
            text: "Neue Geräte, Ports und VLAN-Zuordnungen dokumentieren",
            richtig: true
        },
        {
            text: "Wichtige Verbindungen und Dienste in das Monitoring aufnehmen",
            richtig: true
        },
        {
            text: "Änderungen an IP-Adressierung und Netzwerkstruktur nachvollziehbar festhalten",
            richtig: true
        },
        {
            text: "Die Dokumentation nicht aktualisieren, solange das Netzwerk aktuell funktioniert",
            richtig: false
        }
    ],

    lernfelder: ["lf09"],
    themen: ["netzwerkmonitoring", "netzwerkdokumentation"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf09q023",
    frage: "Für ein neues Büro sollen Mitarbeiter-, Server- und Gastnetz logisch getrennt werden. Welche Punkte sollten bereits bei der Netzwerkplanung berücksichtigt werden?",

    antworten: [
        {
            text: "Benötigte VLANs und deren Zweck festlegen",
            richtig: true
        },
        {
            text: "Planen, über welche Verbindungen mehrere VLANs per Trunk transportiert werden müssen",
            richtig: true
        },
        {
            text: "IP-Adressbereiche und notwendige Kommunikationswege zwischen den Netzen berücksichtigen",
            richtig: true
        },
        {
            text: "Alle Geräte unabhängig vom Einsatzzweck in dasselbe VLAN aufnehmen",
            richtig: false
        }
    ],

    lernfelder: ["lf09"],
    themen: ["netzwerkplanung", "trunking"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf09q024",
    frage: "Ein Mitarbeiter soll von unterwegs auf einen internen Server zugreifen dürfen. Welche Kombination ermöglicht einen kontrollierten und geschützten Zugriff?",

    antworten: [
        {
            text: "Einen geeigneten VPN-Zugang bereitstellen und den erlaubten Netzwerkverkehr durch Firewallregeln begrenzen",
            richtig: true
        },
        {
            text: "Den internen Server ohne Zugriffsschutz vollständig aus dem Internet erreichbar machen",
            richtig: false
        },
        {
            text: "Alle Firewallregeln deaktivieren, sobald ein VPN verwendet wird",
            richtig: false
        },
        {
            text: "Dem Mitarbeiter ausschließlich eine APIPA-Adresse zuweisen",
            richtig: false
        }
    ],

    lernfelder: ["lf09"],
    themen: ["firewall", "vpn"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf09q025",
    frage: "Ein Unternehmen richtet ein separates WLAN für Gäste ein. Welche Maßnahmen sind für einen sicheren Betrieb sinnvoll?",

    antworten: [
        {
            text: "Das Gästenetz logisch vom internen Unternehmensnetz trennen",
            richtig: true
        },
        {
            text: "Ein geeignetes aktuelles WLAN-Sicherheitsverfahren einsetzen",
            richtig: true
        },
        {
            text: "Den Zugriff aus dem Gästenetz auf interne Ressourcen durch geeignete Regeln begrenzen",
            richtig: true
        },
        {
            text: "Gästen uneingeschränkten Zugriff auf interne Server und Verwaltungsnetze geben",
            richtig: false
        }
    ],

    lernfelder: ["lf09"],
    themen: ["wlan-sicherheit", "firewall"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
}
];