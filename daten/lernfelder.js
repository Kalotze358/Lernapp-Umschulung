const lernfelder = [
    {
        id: "lf01",
        nummer: "LF 1",
        titel: "Das Unternehmen und die eigene Rolle im Betrieb beschreiben",
        kurzTitel: "Unternehmen & eigene Rolle"
    },
    {
        id: "lf02",
        nummer: "LF 2",
        titel: "Arbeitsplätze nach Kundenwunsch ausstatten",
        kurzTitel: "Arbeitsplätze"
    },
    {
        id: "lf03",
        nummer: "LF 3",
        titel: "Clients in Netzwerke einbinden",
        kurzTitel: "Clients & Netzwerke",

    beschreibung:
        "In diesem Lernfeld geht es um die Grundlagen von Netzwerken und darum, Clients in eine bestehende Netzwerkinfrastruktur einzubinden.",

    themen: [
    {
        id: "netzwerkgrundlagen",
        titel: "Netzwerkgrundlagen",

        erklaerung:
            "Ein Netzwerk verbindet mehrere Geräte miteinander, damit sie Daten austauschen und gemeinsame Ressourcen wie Dateien, Drucker oder Internetzugänge nutzen können.",

        merksatz:
            "Ein Netzwerk verbindet Geräte und ermöglicht Kommunikation."
    },

    {
        id: "netzwerktopologien",
        titel: "Netzwerktopologien",

        erklaerung:
            "Eine Netzwerktopologie beschreibt, wie Geräte und Verbindungen innerhalb eines Netzwerks angeordnet sind. Typische Beispiele sind Stern-, Bus-, Ring- und vermaschte Topologien.",

        merksatz:
            "Die Topologie beschreibt den Aufbau eines Netzwerks."
    },

    {
        id: "osi-modell",
        titel: "OSI-Modell",

        erklaerung:
            "Das OSI-Modell beschreibt die Netzwerkkommunikation in sieben aufeinander aufbauenden Schichten. Jede Schicht übernimmt bestimmte Aufgaben.",

        merksatz:
            "Alle Deutschen Studenten Trinken Verschiedene Sorten Bier."
    },

    {
        id: "tcp-ip-modell",
        titel: "TCP/IP-Modell",

        erklaerung:
            "Das TCP/IP-Modell beschreibt die Kommunikation in IP-Netzwerken. Es fasst mehrere Aufgaben des OSI-Modells in weniger Schichten zusammen und bildet die Grundlage moderner Netzwerke.",

        merksatz:
            "TCP/IP ist das praktische Modell hinter der Kommunikation im Internet."
    },

    {
        id: "ethernet",
        titel: "Ethernet",

        erklaerung:
            "Ethernet ist eine weit verbreitete Technik zur Datenübertragung in lokalen Netzwerken. Geräte werden typischerweise über Netzwerkkabel und Switches miteinander verbunden.",

        merksatz:
            "Ethernet ist der Standard für viele kabelgebundene LANs."
    },

    {
        id: "mac-adressen",
        titel: "MAC-Adressen",

        erklaerung:
            "Eine MAC-Adresse dient zur Identifikation einer Netzwerkschnittstelle innerhalb eines lokalen Netzwerks. Sie arbeitet auf der Sicherungsschicht des OSI-Modells.",

        merksatz:
            "MAC-Adresse = Identifikation einer Netzwerkschnittstelle im lokalen Netz."
    },

    {
        id: "ipv4",
        titel: "IPv4",

        erklaerung:
            "IPv4-Adressen bestehen aus 32 Bit und werden normalerweise als vier Dezimalzahlen dargestellt, zum Beispiel 192.168.1.10.",

        merksatz:
            "IPv4 = 32 Bit = 4 Oktette."
    },

    {
        id: "ipv6",
        titel: "IPv6",

        erklaerung:
            "IPv6 verwendet 128 Bit lange Adressen und bietet dadurch einen wesentlich größeren Adressraum als IPv4. IPv6-Adressen werden hexadezimal dargestellt.",

        merksatz:
            "IPv6 = 128 Bit und deutlich mehr Adressen als IPv4."
    },

    {
        id: "subnetting",
        titel: "Subnetting",

        erklaerung:
            "Beim Subnetting wird ein IP-Netz in kleinere Teilnetze unterteilt. Dadurch können Adressbereiche effizient genutzt und Netzwerke logisch getrennt werden.",

        merksatz:
            "Subnetting teilt ein großes Netzwerk in kleinere Netze."
    },

    {
        id: "dhcp",
        titel: "DHCP",

        erklaerung:
            "DHCP kann Clients automatisch mit Netzwerkinformationen wie IP-Adresse, Subnetzmaske, Gateway und DNS-Server versorgen.",

        merksatz:
            "DHCP verteilt die Netzwerkkonfiguration automatisch."
    },

    {
        id: "dns",
        titel: "DNS",

        erklaerung:
            "DNS übersetzt für Menschen lesbare Namen wie server.example in IP-Adressen. Dadurch müssen Benutzer sich nicht die zugehörigen IP-Adressen merken.",

        merksatz:
            "DNS macht aus Namen die passende IP-Adresse."
    },

    {
        id: "standardgateway",
        titel: "Standardgateway",

        erklaerung:
            "Das Standardgateway ist normalerweise ein Router. Ein Client sendet Daten dorthin, wenn das Ziel außerhalb des eigenen lokalen Netzes liegt.",

        merksatz:
            "Raus aus dem eigenen Netz? Dann geht es zum Gateway."
    },

    {
        id: "netzwerkkomponenten",
        titel: "Netzwerkkomponenten",

        erklaerung:
            "Zu typischen Netzwerkkomponenten gehören Switches, Router, Access Points, Firewalls und Netzwerkkarten. Jede Komponente übernimmt unterschiedliche Aufgaben.",

        merksatz:
            "Switch verbindet im LAN, Router verbindet unterschiedliche Netze."
    },

    {
        id: "uebertragungsmedien",
        titel: "Kupfer und Glasfaser",

        erklaerung:
            "Netzwerkdaten können über verschiedene Medien übertragen werden. Kupferleitungen übertragen elektrische Signale, während Glasfaser Lichtsignale verwendet.",

        merksatz:
            "Kupfer arbeitet elektrisch, Glasfaser mit Licht."
    },

    {
        id: "wlan",
        titel: "WLAN",

        erklaerung:
            "WLAN ermöglicht die drahtlose Verbindung von Geräten mit einem Netzwerk. Access Points stellen dabei die Verbindung zwischen Funknetz und kabelgebundenem Netzwerk her.",

        merksatz:
            "WLAN ist Netzwerkkommunikation per Funk."
    },

    {
        id: "netzwerkbefehle",
        titel: "Netzwerkbefehle",

        erklaerung:
            "Netzwerkbefehle helfen bei der Konfiguration und Fehlersuche. Typische Beispiele sind ping, ipconfig, tracert und nslookup.",

        merksatz:
            "Erst prüfen, dann ändern: Netzwerkbefehle helfen bei der Fehlersuche."
    },

    {
        id: "fehlersuche",
        titel: "Fehlersuche",

        erklaerung:
            "Bei Netzwerkproblemen sollte systematisch vorgegangen werden. Zuerst werden einfache Ursachen wie Kabel und Verbindung geprüft, danach IP-Konfiguration, Gateway, DNS und schließlich der gewünschte Dienst.",

        merksatz:
            "Erst physisch, dann logisch: Kabel → IP → Gateway → DNS → Dienst."
    },

    {
        id: "netzwerkdokumentation",
        titel: "Netzwerkdokumentation",

        erklaerung:
            "Eine Netzwerkdokumentation hält den Aufbau und die Konfiguration eines Netzwerks nachvollziehbar fest. Dazu können Netzwerkpläne, IP-Adresslisten, Geräteinformationen und Konfigurationen gehören.",

        merksatz:
            "Was nicht dokumentiert ist, lässt sich später nur schwer nachvollziehen."
    }
]


},
{
    id: "lf04",
        nummer: "LF 4",
        titel: "Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen",
        kurzTitel: "IT-Sicherheit I"
    },
    {
        id: "lf05",
        nummer: "LF 5",
        titel: "Software zur Verwaltung von Daten anpassen",
        kurzTitel: "Daten & Programmierung"
    },
    {
        id: "lf06",
        nummer: "LF 6",
        titel: "Serviceanfragen bearbeiten",
        kurzTitel: "IT-Support"
    },
    {
        id: "lf07",
        nummer: "LF 7",
        titel: "Cyber-physische Systeme ergänzen",
        kurzTitel: "Cyber-physische Systeme"
    },
    {
        id: "lf08",
        nummer: "LF 8",
        titel: "Daten systemübergreifend bereitstellen",
        kurzTitel: "Datenbereitstellung"
    },
    {
        id: "lf09",
        nummer: "LF 9",
        titel: "Netzwerke und Dienste bereitstellen",
        kurzTitel: "Netzwerke & Dienste"
    },
    {
        id: "lf10b",
        nummer: "LF 10b",
        titel: "Serverdienste bereitstellen und Administrationsaufgaben automatisieren",
        kurzTitel: "Server & Automatisierung"
    },
    {
        id: "lf11b",
        nummer: "LF 11b",
        titel: "Betrieb und Sicherheit vernetzter Systeme gewährleisten",
        kurzTitel: "IT-Sicherheit II"
    },
    {
        id: "lf12b",
        nummer: "LF 12b",
        titel: "Kundenspezifische Systemintegration durchführen",
        kurzTitel: "Systemintegration & Projekte"
    }
];