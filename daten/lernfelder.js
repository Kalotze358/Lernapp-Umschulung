const lernfelder = [
    {
    id: "lf01",
    nummer: "LF 1",
    titel: "Das Unternehmen und die eigene Rolle im Betrieb beschreiben",
    kurzTitel: "Unternehmen & eigene Rolle",

    beschreibung:
        "In diesem Lernfeld geht es um den Aufbau und die Ziele von Unternehmen, die eigene Rolle im Betrieb sowie grundlegende wirtschaftliche, rechtliche und organisatorische Zusammenhänge.",

    themen: [
        {
            id: "unternehmensziele",
            titel: "Unternehmensziele",
            erklaerung:
                "Unternehmen verfolgen wirtschaftliche, soziale und ökologische Ziele. Wirtschaftliche Ziele sind zum Beispiel Gewinn, Umsatz oder Wachstum. Soziale und ökologische Ziele betreffen unter anderem Mitarbeiter, Gesellschaft und Nachhaltigkeit.",
            merksatz:
                "Unternehmen verfolgen nicht nur wirtschaftliche, sondern auch soziale und ökologische Ziele."
        },
        {
            id: "aufbauorganisation",
            titel: "Aufbauorganisation",
            erklaerung:
                "Die Aufbauorganisation beschreibt die Struktur eines Unternehmens. Sie legt fest, welche Abteilungen und Stellen existieren und wie Aufgaben, Verantwortung und Weisungsbefugnisse verteilt sind.",
            merksatz:
                "Aufbauorganisation = Wer macht was und wer ist wem unterstellt?"
        },
        {
            id: "ablauforganisation",
            titel: "Ablauforganisation",
            erklaerung:
                "Die Ablauforganisation beschreibt, wie Arbeitsprozesse zeitlich und sachlich durchgeführt werden. Dabei wird festgelegt, welche Arbeitsschritte in welcher Reihenfolge ausgeführt werden.",
            merksatz:
                "Ablauforganisation = Wie läuft die Arbeit ab?"
        },
        {
            id: "rechtsformen",
            titel: "Rechtsformen von Unternehmen",
            erklaerung:
                "Unternehmen können unterschiedliche Rechtsformen besitzen, zum Beispiel Einzelunternehmen, GmbH oder AG. Die Rechtsform beeinflusst unter anderem Haftung, Kapitalbedarf und Organisation.",
            merksatz:
                "Die Rechtsform beeinflusst Haftung, Kapital und Unternehmensstruktur."
        },
        {
            id: "interessengruppen",
            titel: "Interessengruppen eines Unternehmens",
            erklaerung:
                "Unternehmen stehen mit verschiedenen Interessengruppen in Beziehung. Dazu gehören beispielsweise Kunden, Mitarbeiter, Eigentümer, Lieferanten, Staat und Gesellschaft.",
            merksatz:
                "Ein Unternehmen muss die Interessen verschiedener Gruppen berücksichtigen."
        },
        {
            id: "wertschoepfung",
            titel: "Wertschöpfung und Geschäftsprozesse",
            erklaerung:
                "Wertschöpfung entsteht, wenn durch betriebliche Tätigkeiten ein Produkt oder eine Dienstleistung einen höheren Nutzen beziehungsweise Wert erhält. Geschäftsprozesse beschreiben die dafür notwendigen Arbeitsschritte.",
            merksatz:
                "Geschäftsprozesse erzeugen Wert für Kunden und Unternehmen."
        },
        {
            id: "eigene-rolle",
            titel: "Eigene Rolle im Betrieb",
            erklaerung:
                "Beschäftigte übernehmen innerhalb eines Unternehmens bestimmte Aufgaben und Verantwortung. Dabei arbeiten sie mit Kollegen, Kunden und anderen Bereichen zusammen und müssen betriebliche Regeln und Ziele berücksichtigen.",
            merksatz:
                "Die eigene Arbeit ist immer Teil eines größeren Geschäftsprozesses."
        },
        {
            id: "kommunikation",
            titel: "Kommunikation im Unternehmen",
            erklaerung:
                "Gute Kommunikation ist für die Zusammenarbeit mit Kollegen, Kunden und Geschäftspartnern wichtig. Informationen sollten verständlich, zielgerichtet und situationsgerecht weitergegeben werden.",
            merksatz:
                "Gute Kommunikation verhindert Missverständnisse und verbessert Zusammenarbeit."
        },
        {
            id: "nachhaltigkeit",
            titel: "Nachhaltigkeit",
            erklaerung:
                "Nachhaltiges Handeln berücksichtigt wirtschaftliche, ökologische und soziale Auswirkungen. In der IT gehören dazu beispielsweise Energieverbrauch, Lebensdauer von Geräten und verantwortungsvoller Umgang mit Ressourcen.",
            merksatz:
                "Nachhaltigkeit verbindet Wirtschaft, Umwelt und Gesellschaft."
        },
        {
            id: "qualitaet",
            titel: "Qualität und kontinuierliche Verbesserung",
            erklaerung:
                "Unternehmen versuchen Prozesse und Leistungen kontinuierlich zu verbessern. Dazu werden Arbeitsabläufe bewertet, Fehler analysiert und Verbesserungsmaßnahmen umgesetzt.",
            merksatz:
                "Qualität bedeutet nicht nur Fehler vermeiden, sondern Prozesse ständig verbessern."
        },
        {
    id: "organigramm",
    titel: "Organigramm",
    erklaerung:
        "Ein Organigramm stellt den organisatorischen Aufbau eines Unternehmens grafisch dar. Es zeigt zum Beispiel Abteilungen, Stellen, Hierarchien und Weisungsbeziehungen.",
    merksatz:
        "Das Organigramm zeigt, wer wo im Unternehmen eingeordnet ist."
},
{
    id: "zielkonflikte",
    titel: "Zielkonflikte im Unternehmen",
    erklaerung:
        "Unternehmensziele können sich gegenseitig beeinflussen oder widersprechen. Beispielsweise kann eine besonders kostengünstige Produktion mit sozialen oder ökologischen Zielen in Konflikt geraten.",
    merksatz:
        "Nicht alle Unternehmensziele lassen sich gleichzeitig vollständig erreichen."
},
{
    id: "geschaeftsprozesse",
    titel: "Geschäftsprozesse",
    erklaerung:
        "Ein Geschäftsprozess besteht aus mehreren zusammenhängenden Tätigkeiten, die gemeinsam ein betriebliches Ziel verfolgen. Prozesse können sich über mehrere Abteilungen erstrecken und beispielsweise von einer Kundenanfrage bis zur Auslieferung reichen.",
    merksatz:
        "Ein Geschäftsprozess verbindet mehrere Arbeitsschritte zu einem gemeinsamen Ziel."
},
{
    id: "rechte-pflichten",
    titel: "Rechte und Pflichten im Betrieb",
    erklaerung:
        "Beschäftigte und Arbeitgeber haben gegenseitige Rechte und Pflichten. Beschäftigte müssen beispielsweise vereinbarte Arbeitsleistungen erbringen und betriebliche Regeln beachten. Arbeitgeber müssen unter anderem die vereinbarte Vergütung zahlen und ihre Fürsorgepflicht erfüllen.",
    merksatz:
        "Arbeitsverhältnisse bestehen aus gegenseitigen Rechten und Pflichten."
}
    ]

    },
    {
    id: "lf02",
    nummer: "LF 2",
    titel: "Arbeitsplätze nach Kundenwunsch ausstatten",
    kurzTitel: "Arbeitsplätze & Clients",

    beschreibung:
        "In diesem Lernfeld geht es darum, die Anforderungen von Kunden an einen IT-Arbeitsplatz zu ermitteln und geeignete Hardware- und Softwarekomponenten auszuwählen, zu installieren und bereitzustellen. Dabei spielen auch Ergonomie, Wirtschaftlichkeit, Energieeffizienz und Lizenzierung eine Rolle.",

    themen: [
        {
            id: "kundenanforderungen",
            titel: "Kundenanforderungen ermitteln",
            erklaerung:
                "Vor der Auswahl eines IT-Arbeitsplatzes müssen die Anforderungen des Kunden ermittelt werden. Dabei werden beispielsweise Einsatzzweck, benötigte Programme, Leistungsanforderungen, Budget und besondere Wünsche berücksichtigt.",
            merksatz:
                "Erst den Bedarf verstehen – dann die Technik auswählen."
        },
        {
            id: "hardwarekomponenten",
            titel: "Hardwarekomponenten",
            erklaerung:
                "Zu einem Arbeitsplatz gehören verschiedene Hardwarekomponenten wie Prozessor, Arbeitsspeicher, Mainboard, Massenspeicher, Grafikeinheit und Netzteil. Die Komponenten müssen zum geplanten Einsatzzweck passen.",
            merksatz:
                "Die Hardware richtet sich nach der Aufgabe des Arbeitsplatzes."
        },
        {
            id: "prozessor",
            titel: "Prozessor und Rechenleistung",
            erklaerung:
                "Der Prozessor führt Befehle und Berechnungen aus. Wichtige Merkmale sind unter anderem Anzahl der Kerne, Taktfrequenz, Architektur und unterstützte Funktionen.",
            merksatz:
                "Die CPU verarbeitet Befehle und übernimmt einen großen Teil der Rechenarbeit."
        },
        {
            id: "arbeitsspeicher",
            titel: "Arbeitsspeicher",
            erklaerung:
                "Der Arbeitsspeicher stellt Daten und Programme bereit, die aktuell benötigt werden. Zu wenig Arbeitsspeicher kann die Leistung eines Systems deutlich beeinträchtigen.",
            merksatz:
                "RAM hält aktuell benötigte Daten schnell verfügbar."
        },
        {
            id: "massenspeicher",
            titel: "Massenspeicher",
            erklaerung:
                "Massenspeicher dienen zur dauerhaften Speicherung von Daten. SSDs bieten gegenüber klassischen Festplatten in der Regel deutlich kürzere Zugriffszeiten und höhere Datenraten.",
            merksatz:
                "RAM ist flüchtig – SSD und HDD speichern dauerhaft."
        },
        {
            id: "schnittstellen",
            titel: "Schnittstellen und Anschlüsse",
            erklaerung:
                "Schnittstellen ermöglichen die Verbindung von Geräten und Komponenten. Beispiele sind USB, HDMI, DisplayPort, Ethernet sowie interne Schnittstellen wie SATA und PCI Express.",
            merksatz:
                "Die richtige Schnittstelle verbindet die richtigen Geräte."
        },
        {
            id: "peripherie",
            titel: "Peripheriegeräte",
            erklaerung:
                "Peripheriegeräte erweitern einen Arbeitsplatz. Dazu gehören beispielsweise Monitor, Tastatur, Maus, Drucker, Scanner, Headset und Webcam.",
            merksatz:
                "Peripherie ergänzt den Computer um Ein- und Ausgabegeräte."
        },
        {
            id: "betriebssysteme",
            titel: "Betriebssysteme",
            erklaerung:
                "Das Betriebssystem verwaltet die Hardware eines Computers und stellt Funktionen für Anwendungen und Benutzer bereit. Bei der Auswahl müssen Anforderungen, Kompatibilität und Einsatzgebiet berücksichtigt werden.",
            merksatz:
                "Das Betriebssystem verbindet Hardware, Anwendungen und Benutzer."
        },
        {
            id: "softwareauswahl",
            titel: "Software auswählen",
            erklaerung:
                "Die benötigte Software richtet sich nach den Aufgaben des Benutzers. Dabei müssen unter anderem Funktionsumfang, Systemanforderungen, Kompatibilität, Sicherheit und Kosten berücksichtigt werden.",
            merksatz:
                "Software muss zur Aufgabe und zur vorhandenen Umgebung passen."
        },
        {
            id: "softwarelizenzen",
            titel: "Software und Lizenzen",
            erklaerung:
                "Software darf nur entsprechend den jeweiligen Lizenzbedingungen genutzt werden. Je nach Produkt können beispielsweise Einzelplatz-, Volumen- oder abonnementbasierte Lizenzen eingesetzt werden.",
            merksatz:
                "Software nutzen heißt auch Lizenzbedingungen beachten."
        },
        {
            id: "ergonomie",
            titel: "Ergonomie am Arbeitsplatz",
            erklaerung:
                "Ein ergonomischer Arbeitsplatz soll gesundheitliche Belastungen reduzieren. Dazu gehören beispielsweise eine geeignete Sitzposition, richtige Monitorhöhe, ausreichende Beleuchtung und sinnvoll angeordnete Eingabegeräte.",
            merksatz:
                "Ergonomie passt den Arbeitsplatz an den Menschen an."
        },
        {
            id: "energieeffizienz",
            titel: "Energieeffizienz",
            erklaerung:
                "Bei der Auswahl von IT-Komponenten sollte neben der Leistung auch der Energieverbrauch berücksichtigt werden. Energieeffiziente Systeme können Betriebskosten und Umweltbelastung reduzieren.",
            merksatz:
                "Nicht nur Leistung zählt – auch der Verbrauch."
        },
        {
            id: "wirtschaftlichkeit",
            titel: "Wirtschaftlichkeit und Beschaffung",
            erklaerung:
                "Bei der Beschaffung eines Arbeitsplatzes werden Kosten und Nutzen verschiedener Lösungen verglichen. Neben dem Kaufpreis können auch Betrieb, Wartung, Energieverbrauch und Nutzungsdauer berücksichtigt werden.",
            merksatz:
                "Die günstigste Anschaffung ist nicht automatisch die wirtschaftlichste Lösung."
        },
        {
            id: "installation-konfiguration",
            titel: "Installation und Konfiguration",
            erklaerung:
                "Nach der Auswahl werden Betriebssystem, Treiber und Anwendungen installiert und entsprechend den Anforderungen konfiguriert. Anschließend sollte die Funktionsfähigkeit des Arbeitsplatzes geprüft werden.",
            merksatz:
                "Installieren, konfigurieren, testen."
        },
        {
            id: "dokumentation-uebergabe",
            titel: "Dokumentation und Übergabe",
            erklaerung:
                "Ein eingerichteter Arbeitsplatz sollte nachvollziehbar dokumentiert und anschließend an den Benutzer übergeben werden. Dabei können beispielsweise Hardware, Software, Einstellungen und besondere Hinweise dokumentiert werden.",
            merksatz:
                "Ein Arbeitsplatz ist erst fertig, wenn er funktioniert und nachvollziehbar dokumentiert ist."
        }
    ]
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
            "Subnetting teilt ein großes Netzwerk in kleinere Netze.",

        vertiefung: "subnetting"
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
    },
    {
    id: "arp",
    titel: "ARP",
    erklaerung:
        "ARP steht für Address Resolution Protocol. Es wird in IPv4-Netzwerken verwendet, um zu einer bekannten IPv4-Adresse die zugehörige MAC-Adresse im lokalen Netzwerk zu ermitteln.",
    merksatz:
        "IP bekannt, MAC gesucht – ARP hilft."
},
{
    id: "private-ip-adressen",
    titel: "Private und öffentliche IPv4-Adressen",
    erklaerung:
        "Private IPv4-Adressen werden innerhalb lokaler Netzwerke verwendet und sind im Internet nicht direkt routbar. Typische private Bereiche sind 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16. Öffentliche IP-Adressen können dagegen grundsätzlich im Internet geroutet werden.",
    merksatz:
        "Private IP innen – öffentliche IP nach außen."
},
{
    id: "apipa",
    titel: "APIPA",
    erklaerung:
        "APIPA steht für Automatic Private IP Addressing. Wenn ein Windows-Client keine Adresse von einem DHCP-Server erhält, kann er sich automatisch eine IPv4-Adresse aus dem Bereich 169.254.0.0/16 vergeben.",
    merksatz:
        "169.254.x.x? Häufig hat DHCP nicht funktioniert."
},
{
    id: "ports-protokolle",
    titel: "Ports und Protokolle",
    erklaerung:
        "Ports ermöglichen es, Netzwerkverbindungen bestimmten Diensten und Anwendungen zuzuordnen. Häufig verwendete Ports sind zum Beispiel 80 für HTTP, 443 für HTTPS, 53 für DNS und 22 für SSH. TCP und UDP verwenden Portnummern von 0 bis 65535.",
    merksatz:
        "IP findet den Rechner – der Port findet den Dienst."
},
{
    id: "nat",
    titel: "NAT",
    erklaerung:
        "NAT steht für Network Address Translation. Dabei werden IP-Adressen beim Übergang zwischen Netzwerken übersetzt. In Heim- und Firmennetzen wird NAT häufig verwendet, damit mehrere Geräte mit privaten IPv4-Adressen über eine öffentliche IPv4-Adresse auf das Internet zugreifen können.",
    merksatz:
        "Viele private Adressen können sich nach außen eine öffentliche Adresse teilen."
},
{
    id: "routing",
    titel: "Routing-Grundlagen",
    erklaerung:
        "Routing beschreibt die Weiterleitung von Datenpaketen zwischen unterschiedlichen IP-Netzwerken. Router verwenden Routingtabellen, um zu entscheiden, über welchen Weg ein Paket sein Ziel erreichen soll.",
    merksatz:
        "Routing entscheidet, welchen Weg ein Paket in ein anderes Netzwerk nimmt."
},
{
    id: "vlan",
    titel: "VLAN-Grundlagen",
    erklaerung:
        "Ein VLAN ist ein logisch getrenntes Netzwerk innerhalb einer gemeinsamen physischen Netzwerkinfrastruktur. Dadurch können Geräte voneinander getrennt werden, obwohl sie beispielsweise am selben Switch angeschlossen sind. Für die Kommunikation zwischen unterschiedlichen VLANs wird Routing benötigt.",
    merksatz:
        "Ein Switch kann physisch gemeinsam sein – VLANs trennen das Netzwerk logisch."
},
{
    id: "tcp-udp",
    titel: "TCP und UDP",
    erklaerung:
        "TCP und UDP sind Transportprotokolle. TCP arbeitet verbindungsorientiert und zuverlässig, weil unter anderem Reihenfolge und Zustellung kontrolliert werden. UDP arbeitet verbindungslos und mit weniger Verwaltungsaufwand, bietet dafür aber keine Garantie für Zustellung oder Reihenfolge.",
    merksatz:
        "TCP ist zuverlässig – UDP ist schlanker und schneller."
},
{
    id: "icmp",
    titel: "ICMP",
    erklaerung:
        "ICMP steht für Internet Control Message Protocol. Es wird für Kontroll- und Fehlermeldungen in IP-Netzwerken verwendet. Das bekannte Werkzeug ping nutzt ICMP, um die Erreichbarkeit eines Ziels zu testen.",
    merksatz:
        "Ping prüft mit ICMP, ob ein Ziel erreichbar ist."
},
{
    id: "unicast-broadcast-multicast",
    titel: "Unicast, Broadcast und Multicast",
    erklaerung:
        "Unicast bezeichnet die Kommunikation von einem Sender zu genau einem Empfänger. Broadcast richtet sich an alle Geräte innerhalb einer Broadcast-Domäne. Multicast ermöglicht die Kommunikation mit einer bestimmten Gruppe von Empfängern.",
    merksatz:
        "Unicast = einer, Broadcast = alle, Multicast = ausgewählte Gruppe."
},
{
    id: "switching",
    titel: "Switching und MAC-Adresstabelle",
    erklaerung:
        "Ein Switch lernt anhand eingehender Ethernet-Frames, welche MAC-Adressen über welche Ports erreichbar sind. Diese Informationen speichert er in seiner MAC-Adresstabelle und kann Frames dadurch gezielt an den passenden Port weiterleiten.",
    merksatz:
        "Der Switch lernt MAC-Adresse und zugehörigen Port."
},
{
    id: "ipv6-vertiefung",
    titel: "IPv6-Grundlagen vertieft",
    erklaerung:
        "IPv6-Adressen bestehen aus 128 Bit und werden hexadezimal dargestellt. Link-Local-Adressen beginnen typischerweise mit fe80::/10 und werden für die Kommunikation innerhalb eines lokalen Netzwerksegments verwendet. IPv6 verwendet keinen klassischen Broadcast wie IPv4.",
    merksatz:
        "IPv6: 128 Bit, hexadezimal und ohne klassischen Broadcast."
},
{
    id: "wlan-sicherheit",
    titel: "WLAN-Sicherheit",
    erklaerung:
        "WLAN-Verbindungen sollten mit aktuellen Sicherheitsverfahren geschützt werden. WPA2 und WPA3 ermöglichen die Verschlüsselung und Authentifizierung im WLAN. WPA3 bietet gegenüber WPA2 zusätzliche Sicherheitsverbesserungen.",
    merksatz:
        "WLAN absichern: möglichst aktuelle Verschlüsselung wie WPA2 oder WPA3 verwenden."
}
]


},
{
    id: "lf04",
    nummer: "LF 4",
    titel: "Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen",
    kurzTitel: "IT-Sicherheit & Schutzbedarf",

    beschreibung:
        "In diesem Lernfeld geht es darum, schützenswerte Informationen und IT-Systeme zu erkennen, mögliche Gefährdungen und Schwachstellen zu beurteilen und geeignete Sicherheitsmaßnahmen abzuleiten. Grundlage sind unter anderem die Schutzziele Vertraulichkeit, Integrität und Verfügbarkeit.",

    themen: [
        {
            id: "schutzziele",
            titel: "Schutzziele der Informationssicherheit",
            erklaerung:
                "Zu den wichtigsten Schutzzielen gehören Vertraulichkeit, Integrität und Verfügbarkeit. Vertraulichkeit schützt Informationen vor unberechtigtem Zugriff, Integrität vor unbemerkter Veränderung und Verfügbarkeit stellt sicher, dass Informationen und Systeme bei Bedarf erreichbar sind.",
            merksatz:
                "CIA: Confidentiality, Integrity, Availability – Vertraulichkeit, Integrität, Verfügbarkeit."
        },
        {
            id: "schutzbedarf",
            titel: "Schutzbedarf feststellen",
            erklaerung:
                "Bei einer Schutzbedarfsfeststellung wird bewertet, welche Auswirkungen ein Verlust von Vertraulichkeit, Integrität oder Verfügbarkeit haben könnte. Der Schutzbedarf kann beispielsweise normal, hoch oder sehr hoch sein.",
            merksatz:
                "Je größer der mögliche Schaden, desto höher der Schutzbedarf."
        },
        {
            id: "schutzobjekte",
            titel: "Schutzobjekte und Werte",
            erklaerung:
                "Schutzobjekte sind beispielsweise Informationen, Anwendungen, IT-Systeme, Räume oder Kommunikationsverbindungen, die für ein Unternehmen einen Wert besitzen und deshalb geschützt werden müssen.",
            merksatz:
                "Was für den Betrieb wichtig ist, muss zuerst erkannt werden, bevor es geschützt werden kann."
        },
        {
            id: "bedrohungen",
            titel: "Bedrohungen und Gefährdungen",
            erklaerung:
                "Bedrohungen können durch Menschen, technische Fehler oder äußere Einflüsse entstehen. Beispiele sind Schadsoftware, Fehlbedienung, Hardwareausfälle, Feuer, Wasser oder Stromausfälle.",
            merksatz:
                "Gefahren können technisch, menschlich oder physisch entstehen."
        },
        {
            id: "schwachstellen",
            titel: "Schwachstellen",
            erklaerung:
                "Eine Schwachstelle ist eine Sicherheitslücke oder Schwäche, die von einer Bedrohung ausgenutzt werden kann. Beispiele sind ungepatchte Software, unsichere Passwörter oder falsch konfigurierte Systeme.",
            merksatz:
                "Eine Bedrohung wird besonders gefährlich, wenn sie auf eine Schwachstelle trifft."
        },
        {
            id: "risiko",
            titel: "Risiken bewerten",
            erklaerung:
                "Ein Risiko beschreibt die Möglichkeit, dass eine Bedrohung eine Schwachstelle ausnutzt und dadurch ein Schaden entsteht. Bei der Bewertung werden unter anderem Eintrittswahrscheinlichkeit und mögliche Schadenshöhe berücksichtigt.",
            merksatz:
                "Risiko hängt von Wahrscheinlichkeit und möglichem Schaden ab."
        },
        {
            id: "sicherheitsmassnahmen",
            titel: "Sicherheitsmaßnahmen",
            erklaerung:
                "Sicherheitsmaßnahmen sollen Risiken reduzieren. Dazu gehören technische, organisatorische und personelle Maßnahmen, beispielsweise Firewalls, Berechtigungskonzepte, Schulungen oder Sicherheitsrichtlinien.",
            merksatz:
                "Sicherheit entsteht durch Technik, Organisation und Menschen."
        },
        {
            id: "zutritt-zugang-zugriff",
            titel: "Zutritt, Zugang und Zugriff",
            erklaerung:
                "Zutrittskontrolle schützt Räume und Gebäude. Zugangskontrolle verhindert die unberechtigte Nutzung von IT-Systemen. Zugriffskontrolle legt fest, auf welche Daten und Funktionen ein berechtigter Benutzer zugreifen darf.",
            merksatz:
                "Zutritt = Raum, Zugang = System, Zugriff = Daten."
        },
        {
            id: "passwoerter-mfa",
            titel: "Passwörter und Mehrfaktor-Authentifizierung",
            erklaerung:
                "Sichere Authentifizierung schützt Benutzerkonten vor unberechtigtem Zugriff. Mehrfaktor-Authentifizierung kombiniert mindestens zwei unterschiedliche Faktoren, beispielsweise Wissen, Besitz oder biometrische Merkmale.",
            merksatz:
                "MFA kombiniert mehrere unterschiedliche Faktoren zur Anmeldung."
        },
        {
            id: "berechtigungen",
            titel: "Berechtigungen und Minimalprinzip",
            erklaerung:
                "Benutzer sollten nur die Rechte erhalten, die sie für ihre Aufgaben tatsächlich benötigen. Dieses Prinzip wird als Least Privilege oder Minimalprinzip bezeichnet.",
            merksatz:
                "So viele Rechte wie nötig – so wenige wie möglich."
        },
        {
            id: "malware",
            titel: "Schadsoftware",
            erklaerung:
                "Schadsoftware umfasst Programme mit schädlicher Absicht. Dazu gehören beispielsweise Viren, Würmer, Trojaner und Ransomware. Schutzmaßnahmen sind unter anderem Updates, Schutzsoftware und vorsichtiges Benutzerverhalten.",
            merksatz:
                "Malware ist der Oberbegriff für schädliche Software."
        },
        {
            id: "social-engineering",
            titel: "Social Engineering und Phishing",
            erklaerung:
                "Beim Social Engineering versuchen Angreifer, Menschen zu manipulieren, um Informationen oder Zugang zu erhalten. Phishing ist eine häufige Form, bei der beispielsweise gefälschte E-Mails oder Webseiten eingesetzt werden.",
            merksatz:
                "Nicht nur Systeme können angegriffen werden – auch Menschen."
        },
        {
            id: "updates-patches",
            titel: "Updates und Patchmanagement",
            erklaerung:
                "Updates und Sicherheitspatches beheben unter anderem bekannte Schwachstellen. Systeme sollten deshalb regelmäßig aktualisiert und der Patchstand kontrolliert werden.",
            merksatz:
                "Bekannte Sicherheitslücke plus fehlender Patch ergibt unnötiges Risiko."
        },
        {
            id: "datensicherung",
            titel: "Datensicherung",
            erklaerung:
                "Datensicherungen ermöglichen die Wiederherstellung von Daten nach Verlust, Beschädigung oder einem Sicherheitsvorfall. Backups sollten regelmäßig durchgeführt und ihre Wiederherstellbarkeit geprüft werden.",
            merksatz:
                "Ein Backup ist erst zuverlässig, wenn die Wiederherstellung funktioniert."
        },
        {
            id: "datenschutz",
            titel: "Datenschutz und Informationssicherheit",
            erklaerung:
                "Datenschutz befasst sich insbesondere mit dem Schutz personenbezogener Daten. Informationssicherheit betrachtet dagegen den Schutz von Informationen allgemein. Beide Bereiche überschneiden sich, verfolgen aber nicht exakt dasselbe Ziel.",
            merksatz:
                "Datenschutz schützt personenbezogene Daten – Informationssicherheit schützt Informationen."
        }
    ]
},
    {
    id: "lf05",
    nummer: "LF 5",
    titel: "Software zur Verwaltung von Daten anpassen",
    kurzTitel: "Daten & Programmierung",

    beschreibung:
        "In diesem Lernfeld geht es um grundlegende Programmierkonzepte und die Verarbeitung und Verwaltung von Daten. Dazu gehören Algorithmen, Variablen, Bedingungen, Schleifen, Funktionen sowie Grundlagen relationaler Datenbanken und SQL.",

    themen: [
        {
            id: "algorithmen",
            titel: "Algorithmen und Pseudocode",
            erklaerung:
                "Ein Algorithmus beschreibt eine eindeutige Folge von Schritten zur Lösung eines Problems. Pseudocode ermöglicht es, solche Abläufe unabhängig von einer konkreten Programmiersprache verständlich darzustellen.",
            merksatz:
                "Erst den Lösungsweg planen – dann programmieren."
        },
        {
            id: "variablen",
            titel: "Variablen",
            erklaerung:
                "Variablen speichern Werte, die während der Programmausführung verwendet oder verändert werden können.",
            merksatz:
                "Eine Variable gibt einem gespeicherten Wert einen Namen."
        },
        {
            id: "datentypen",
            titel: "Datentypen",
            erklaerung:
                "Datentypen legen fest, welche Art von Wert verarbeitet wird. Beispiele sind Ganzzahlen, Gleitkommazahlen, Zeichenketten und Wahrheitswerte.",
            merksatz:
                "Der Datentyp bestimmt, welche Art von Information gespeichert wird."
        },
        {
            id: "operatoren",
            titel: "Operatoren",
            erklaerung:
                "Operatoren ermöglichen Berechnungen und Vergleiche. Dazu gehören beispielsweise +, -, *, / sowie Vergleichsoperatoren wie ==, < oder >.",
            merksatz:
                "Operatoren rechnen, vergleichen oder verknüpfen Werte."
        },
        {
            id: "bedingungen",
            titel: "Bedingungen",
            erklaerung:
                "Mit Bedingungen kann ein Programm abhängig von einer Prüfung unterschiedliche Wege ausführen. Typische Anweisungen sind if und else.",
            merksatz:
                "Wenn Bedingung erfüllt → Weg A, sonst → Weg B."
        },
        {
            id: "schleifen",
            titel: "Schleifen",
            erklaerung:
                "Schleifen wiederholen Programmcode. Häufig verwendete Schleifen sind for und while.",
            merksatz:
                "Schleifen vermeiden unnötig wiederholten Code."
        },
        {
            id: "funktionen",
            titel: "Funktionen",
            erklaerung:
                "Funktionen fassen wiederverwendbare Programmteile zusammen. Sie können Werte entgegennehmen, verarbeiten und Ergebnisse zurückgeben.",
            merksatz:
                "Eine Funktion kapselt eine Aufgabe, die mehrfach verwendet werden kann."
        },
        {
            id: "listen-arrays",
            titel: "Listen und Arrays",
            erklaerung:
                "Listen und Arrays ermöglichen es, mehrere zusammengehörige Werte in einer Datenstruktur zu speichern und über Positionen beziehungsweise Indizes darauf zuzugreifen.",
            merksatz:
                "Viele zusammengehörige Werte können gemeinsam gespeichert werden."
        },
        {
            id: "debugging",
            titel: "Fehlersuche und Debugging",
            erklaerung:
                "Beim Debugging werden Fehler im Programm gesucht und analysiert. Dabei helfen unter anderem Fehlermeldungen, Testausgaben und das schrittweise Ausführen von Programmcode.",
            merksatz:
                "Fehler systematisch eingrenzen statt wahllos Code verändern."
        },
        {
            id: "datenbanken",
            titel: "Relationale Datenbanken",
            erklaerung:
                "Relationale Datenbanken speichern Daten strukturiert in Tabellen. Beziehungen zwischen Tabellen ermöglichen es, zusammengehörige Informationen miteinander zu verknüpfen.",
            merksatz:
                "Relationale Datenbanken organisieren Daten in miteinander verknüpften Tabellen."
        },
        {
            id: "primaerschluessel",
            titel: "Primär- und Fremdschlüssel",
            erklaerung:
                "Ein Primärschlüssel identifiziert einen Datensatz eindeutig. Ein Fremdschlüssel verweist auf einen Datensatz in einer anderen Tabelle und ermöglicht Beziehungen zwischen Tabellen.",
            merksatz:
                "Primärschlüssel identifiziert – Fremdschlüssel verbindet."
        },
        {
            id: "sql-select",
            titel: "SQL-Daten abfragen",
            erklaerung:
                "Mit SELECT können Daten aus einer Datenbank abgefragt werden. WHERE schränkt Ergebnisse ein und ORDER BY kann sie sortieren.",
            merksatz:
                "SELECT liest – WHERE filtert – ORDER BY sortiert."
        },
        {
            id: "sql-aendern",
            titel: "SQL-Daten verändern",
            erklaerung:
                "INSERT fügt Datensätze hinzu, UPDATE verändert bestehende Datensätze und DELETE entfernt Datensätze.",
            merksatz:
                "INSERT rein, UPDATE ändern, DELETE raus."
        },
        {
            id: "normalisierung",
            titel: "Normalisierung",
            erklaerung:
                "Normalisierung dient dazu, Daten sinnvoll auf Tabellen zu verteilen und unnötige Redundanzen sowie mögliche Änderungsprobleme zu reduzieren.",
            merksatz:
                "Daten sinnvoll trennen statt dieselben Informationen mehrfach speichern."
        },
        {
            id: "datenformate",
            titel: "Datenformate",
            erklaerung:
                "Daten können in unterschiedlichen Formaten gespeichert und ausgetauscht werden. Häufige Beispiele sind CSV und JSON.",
            merksatz:
                "Das Datenformat bestimmt, wie Informationen strukturiert gespeichert oder übertragen werden."
        }
    ]
},
    {
    id: "lf06",
    nummer: "LF 6",
    titel: "Serviceanfragen bearbeiten",
    kurzTitel: "IT-Support & Service",

    beschreibung:
        "In diesem Lernfeld geht es um die strukturierte Bearbeitung von Serviceanfragen und Störungen. Dazu gehören die Aufnahme und Bewertung von Tickets, systematische Fehlersuche, Kommunikation mit Anwendern, Dokumentation sowie die Eskalation und abschließende Lösung von Supportfällen.",

    themen: [
        {
            id: "serviceanfragen",
            titel: "Serviceanfragen und Störungen",
            erklaerung:
                "Im IT-Support werden unterschiedliche Anliegen bearbeitet. Eine Serviceanfrage betrifft beispielsweise die Bereitstellung einer Leistung oder Information, während eine Störung die Beeinträchtigung oder den Ausfall eines IT-Services beschreibt.",
            merksatz:
                "Serviceanfrage = etwas wird benötigt – Störung = etwas funktioniert nicht wie vorgesehen."
        },
        {
            id: "ticketsystem",
            titel: "Ticketsystem",
            erklaerung:
                "Ein Ticketsystem dient zur strukturierten Erfassung und Bearbeitung von Supportfällen. Ein Ticket kann unter anderem Benutzer, Beschreibung, Kategorie, Priorität, Bearbeitungsstatus und Lösung enthalten.",
            merksatz:
                "Ein Ticket macht einen Supportfall nachvollziehbar."
        },
        {
            id: "ticketaufnahme",
            titel: "Informationen bei der Ticketaufnahme",
            erklaerung:
                "Für eine erfolgreiche Bearbeitung müssen relevante Informationen erfasst werden. Dazu gehören beispielsweise betroffener Benutzer, Gerät, Fehlermeldung, Zeitpunkt, Auswirkungen und bereits durchgeführte Maßnahmen.",
            merksatz:
                "Gute Fehlerbeschreibung spart später Zeit."
        },
        {
            id: "priorisierung",
            titel: "Priorisierung",
            erklaerung:
                "Supportfälle werden nach ihrer Dringlichkeit und ihren Auswirkungen bewertet. Ein Ausfall, der viele Benutzer oder einen wichtigen Geschäftsprozess betrifft, erhält normalerweise eine höhere Priorität als ein kleineres Einzelproblem.",
            merksatz:
                "Priorität ergibt sich vor allem aus Auswirkung und Dringlichkeit."
        },
        {
            id: "sla",
            titel: "Service Level Agreement",
            erklaerung:
                "Ein Service Level Agreement, kurz SLA, beschreibt vereinbarte Leistungen und Qualitätsmerkmale eines IT-Services. Dazu können beispielsweise Reaktionszeiten, Lösungszeiten und Verfügbarkeiten gehören.",
            merksatz:
                "Ein SLA legt fest, welche Servicequalität vereinbart wurde."
        },
        {
            id: "first-level-support",
            titel: "First-Level-Support",
            erklaerung:
                "Der First-Level-Support ist häufig die erste Anlaufstelle für Anwender. Dort werden Störungen aufgenommen, grundlegende Analysen durchgeführt und bekannte Probleme möglichst direkt gelöst.",
            merksatz:
                "First Level: aufnehmen, prüfen, bekannte Probleme möglichst direkt lösen."
        },
        {
            id: "second-level-support",
            titel: "Second- und Third-Level-Support",
            erklaerung:
                "Komplexere Probleme können an spezialisierte Supportebenen weitergegeben werden. Der Second-Level-Support verfügt meist über tiefergehendes Fachwissen, während der Third-Level-Support häufig besonders komplexe oder herstellerspezifische Probleme bearbeitet.",
            merksatz:
                "Je spezieller das Problem, desto höher kann die Supportebene werden."
        },
        {
            id: "eskalation",
            titel: "Eskalation",
            erklaerung:
                "Ein Supportfall wird eskaliert, wenn er beispielsweise nicht innerhalb der eigenen Zuständigkeit gelöst werden kann, besondere Fachkenntnisse benötigt oder vereinbarte Servicezeiten gefährdet sind.",
            merksatz:
                "Eskalieren heißt gezielt weitergeben – nicht einfach abschieben."
        },
        {
            id: "fehlersuche-support",
            titel: "Systematische Fehlersuche",
            erklaerung:
                "Bei der Fehlersuche wird ein Problem schrittweise eingegrenzt. Zunächst werden Symptome und Rahmenbedingungen erfasst, anschließend mögliche Ursachen geprüft und Maßnahmen kontrolliert durchgeführt.",
            merksatz:
                "Problem verstehen → Ursache eingrenzen → Lösung testen."
        },
        {
            id: "remote-support",
            titel: "Remote-Support",
            erklaerung:
                "Beim Remote-Support kann ein Techniker ein entferntes System analysieren oder bedienen. Dabei müssen Berechtigungen, Datenschutz und Sicherheitsvorgaben berücksichtigt werden.",
            merksatz:
                "Fernzugriff nur autorisiert und nachvollziehbar durchführen."
        },
        {
            id: "anwenderkommunikation",
            titel: "Kommunikation mit Anwendern",
            erklaerung:
                "Im Support sollten technische Sachverhalte verständlich und situationsgerecht erklärt werden. Freundliche Rückfragen und klare Informationen helfen dabei, Probleme schneller einzugrenzen und Missverständnisse zu vermeiden.",
            merksatz:
                "Technisch korrekt und für den Anwender verständlich kommunizieren."
        },
        {
            id: "wissensdatenbank",
            titel: "Wissensdatenbank",
            erklaerung:
                "Eine Wissensdatenbank sammelt bekannte Probleme, Lösungen und Anleitungen. Dadurch können wiederkehrende Störungen schneller bearbeitet und Wissen innerhalb des Supportteams geteilt werden.",
            merksatz:
                "Einmal gelöst und gut dokumentiert kann vielen später helfen."
        },
        {
            id: "support-dokumentation",
            titel: "Dokumentation von Supportfällen",
            erklaerung:
                "Während der Bearbeitung sollten Diagnose, Maßnahmen und Ergebnis nachvollziehbar dokumentiert werden. Dadurch können spätere Bearbeiter den Verlauf verstehen und ähnliche Probleme schneller lösen.",
            merksatz:
                "Nicht nur die Lösung zählt – auch der Weg dorthin sollte nachvollziehbar sein."
        },
        {
            id: "abschluss-ticket",
            titel: "Ticketabschluss",
            erklaerung:
                "Vor dem Abschluss eines Supportfalls sollte geprüft werden, ob das Problem tatsächlich behoben wurde. Die Lösung wird dokumentiert und das Ticket anschließend mit einem passenden Status abgeschlossen.",
            merksatz:
                "Erst prüfen, dann dokumentieren, dann schließen."
        },
        {
            id: "incident-problem",
            titel: "Incident und Problem",
            erklaerung:
                "Ein Incident ist eine konkrete Störung eines IT-Services. Ein Problem bezeichnet dagegen eine zugrunde liegende oder noch unbekannte Ursache, die einen oder mehrere Incidents verursachen kann.",
            merksatz:
                "Incident = Störung – Problem = mögliche Ursache dahinter."
        }
    ]
},
    {
    id: "lf07",
    nummer: "LF 7",
    titel: "Cyber-physische Systeme ergänzen",
    kurzTitel: "Cyber-physische Systeme",

    beschreibung:
        "In diesem Lernfeld geht es um Systeme, bei denen Software, Hardware und physische Prozesse miteinander verbunden sind. Dazu gehören unter anderem Sensoren, Aktoren, Mikrocontroller, IoT-Geräte, Schnittstellen, Datenübertragung sowie einfache Steuerungs- und Regelungsabläufe.",

    themen: [
        {
            id: "cps-grundlagen",
            titel: "Cyber-physische Systeme",
            erklaerung:
                "Cyber-physische Systeme verbinden digitale Verarbeitung mit Vorgängen in der realen Welt. Sensoren erfassen Zustände, Software verarbeitet die Daten und Aktoren können anschließend auf die Umgebung einwirken.",
            merksatz:
                "CPS verbindet digitale Verarbeitung mit der physischen Welt."
        },
        {
            id: "sensoren",
            titel: "Sensoren",
            erklaerung:
                "Sensoren erfassen physikalische Größen oder Zustände und wandeln sie in elektrische beziehungsweise digitale Signale um. Beispiele sind Temperatur-, Licht-, Bewegungs- oder Feuchtigkeitssensoren.",
            merksatz:
                "Sensoren messen und liefern Informationen."
        },
        {
            id: "aktoren",
            titel: "Aktoren",
            erklaerung:
                "Aktoren setzen elektrische Steuersignale in eine physische Wirkung um. Beispiele sind Motoren, Relais, Lampen, Ventile oder Lautsprecher.",
            merksatz:
                "Sensoren erfassen – Aktoren handeln."
        },
        {
            id: "mikrocontroller",
            titel: "Mikrocontroller",
            erklaerung:
                "Mikrocontroller sind kleine Computersysteme auf einem Chip. Sie enthalten unter anderem Prozessor, Speicher sowie Ein- und Ausgänge und werden häufig zur Steuerung eingebetteter Systeme verwendet.",
            merksatz:
                "Der Mikrocontroller verarbeitet Eingaben und steuert Ausgaben."
        },
        {
            id: "embedded-systeme",
            titel: "Embedded Systems",
            erklaerung:
                "Ein Embedded System ist ein Computersystem, das in ein größeres technisches Gerät eingebettet ist und dort eine bestimmte Aufgabe übernimmt.",
            merksatz:
                "Embedded Systems sind Computer für eine festgelegte Aufgabe im Gerät."
        },
        {
            id: "iot",
            titel: "Internet of Things",
            erklaerung:
                "Beim Internet of Things werden Geräte und Sensoren über Netzwerke miteinander verbunden. Sie können Daten austauschen, zentral verwaltet oder automatisiert gesteuert werden.",
            merksatz:
                "IoT verbindet Geräte und Sensoren über Netzwerke."
        },
        {
            id: "digitale-analoge-signale",
            titel: "Digitale und analoge Signale",
            erklaerung:
                "Digitale Signale besitzen diskrete Zustände, beispielsweise 0 und 1. Analoge Signale können innerhalb eines Wertebereichs kontinuierlich unterschiedliche Werte annehmen.",
            merksatz:
                "Digital = feste Zustände, analog = kontinuierlicher Wertebereich."
        },
        {
            id: "adc-dac",
            titel: "A/D- und D/A-Wandlung",
            erklaerung:
                "Ein Analog-Digital-Wandler wandelt analoge Signale in digitale Werte um. Ein Digital-Analog-Wandler führt den umgekehrten Vorgang durch.",
            merksatz:
                "ADC: analog zu digital – DAC: digital zu analog."
        },
        {
            id: "schnittstellen-cps",
            titel: "Schnittstellen",
            erklaerung:
                "Cyber-physische Systeme nutzen verschiedene Schnittstellen zur Kommunikation zwischen Komponenten. Dazu gehören beispielsweise GPIO, I2C, SPI, UART, USB oder Ethernet.",
            merksatz:
                "Schnittstellen ermöglichen die Kommunikation zwischen Komponenten."
        },
        {
            id: "gpio",
            titel: "GPIO",
            erklaerung:
                "GPIO steht für General Purpose Input/Output. Solche Pins können beispielsweise digitale Zustände einlesen oder externe Komponenten ansteuern.",
            merksatz:
                "GPIO kann digitale Ein- und Ausgänge bereitstellen."
        },
        {
            id: "steuerung-regelung",
            titel: "Steuerung und Regelung",
            erklaerung:
                "Bei einer Steuerung beeinflusst eine Eingangsgröße einen Ablauf ohne kontinuierliche Rückmeldung des Ergebnisses. Bei einer Regelung wird der aktuelle Zustand gemessen und mit einem Sollwert verglichen.",
            merksatz:
                "Regelung besitzt Rückkopplung – Steuerung nicht zwingend."
        },
        {
            id: "automatisierung",
            titel: "Automatisierung",
            erklaerung:
                "Automatisierung ermöglicht es, Prozesse anhand festgelegter Bedingungen selbstständig auszuführen. Sensorwerte können beispielsweise Aktionen auslösen oder Geräte steuern.",
            merksatz:
                "Wenn Bedingung erfüllt, kann automatisch eine Aktion folgen."
        },
        {
            id: "kommunikation-iot",
            titel: "Kommunikation im IoT",
            erklaerung:
                "IoT-Geräte können über verschiedene Netzwerk- und Funktechnologien kommunizieren. Je nach Anwendung kommen beispielsweise Ethernet, WLAN, Bluetooth oder spezielle Funkstandards zum Einsatz.",
            merksatz:
                "Die Kommunikationstechnik richtet sich nach Reichweite, Datenmenge und Energiebedarf."
        },
        {
            id: "mqtt",
            titel: "MQTT-Grundlagen",
            erklaerung:
                "MQTT ist ein leichtgewichtiges Nachrichtenprotokoll, das häufig im IoT eingesetzt wird. Geräte veröffentlichen Nachrichten zu Topics, während andere Teilnehmer diese Topics abonnieren können.",
            merksatz:
                "MQTT: Publisher sendet an Topic – Subscriber hört auf Topic."
        },
        {
            id: "cps-sicherheit",
            titel: "Sicherheit cyber-physischer Systeme",
            erklaerung:
                "Vernetzte Geräte müssen gegen unberechtigten Zugriff und Manipulation geschützt werden. Dazu gehören unter anderem sichere Zugangsdaten, Updates, verschlüsselte Kommunikation und eine geeignete Netzwerktrennung.",
            merksatz:
                "Vernetzte Geräte brauchen genauso Sicherheitsmaßnahmen wie klassische IT-Systeme."
        }
    ]
},
    {
    id: "lf08",
    nummer: "LF 8",
    titel: "Daten systemübergreifend bereitstellen",
    kurzTitel: "Daten & Schnittstellen",

    beschreibung:
        "In diesem Lernfeld geht es darum, Daten zwischen unterschiedlichen Systemen bereitzustellen und auszutauschen. Dazu gehören Datenformate, Schnittstellen, APIs, Datenbanken, Import und Export sowie die strukturierte und sichere Übertragung von Informationen.",

    themen: [
        {
            id: "datenaustausch",
            titel: "Systemübergreifender Datenaustausch",
            erklaerung:
                "Beim systemübergreifenden Datenaustausch werden Informationen zwischen unterschiedlichen Anwendungen oder IT-Systemen übertragen. Dafür müssen Datenstruktur, Format und Übertragungsweg miteinander kompatibel sein.",
            merksatz:
                "Systeme können nur sinnvoll Daten austauschen, wenn Format und Schnittstelle zusammenpassen."
        },
        {
            id: "schnittstellen",
            titel: "Schnittstellen",
            erklaerung:
                "Eine Schnittstelle definiert, wie zwei Systeme oder Komponenten miteinander kommunizieren. Sie legt beispielsweise fest, welche Daten übertragen werden und in welcher Form dies geschieht.",
            merksatz:
                "Eine Schnittstelle beschreibt, wie Systeme miteinander sprechen."
        },
        {
            id: "api",
            titel: "APIs",
            erklaerung:
                "API steht für Application Programming Interface. Eine API stellt definierte Funktionen oder Daten bereit, die von anderen Programmen genutzt werden können.",
            merksatz:
                "Eine API ermöglicht Programmen, kontrolliert miteinander zu kommunizieren."
        },
        {
            id: "rest-api",
            titel: "REST-APIs",
            erklaerung:
                "REST ist ein häufig verwendetes Konzept für Web-APIs. Ressourcen werden typischerweise über URLs angesprochen und mit HTTP-Methoden wie GET, POST, PUT oder DELETE verarbeitet.",
            merksatz:
                "REST nutzt häufig HTTP-Methoden zum Lesen und Verändern von Ressourcen."
        },
        {
            id: "http-methoden",
            titel: "HTTP-Methoden",
            erklaerung:
                "HTTP-Methoden beschreiben die gewünschte Aktion. GET wird typischerweise zum Abrufen von Daten verwendet, POST zum Erstellen, PUT zum Aktualisieren und DELETE zum Entfernen von Ressourcen.",
            merksatz:
                "GET lesen – POST erstellen – PUT ändern – DELETE löschen."
        },
        {
            id: "json",
            titel: "JSON",
            erklaerung:
                "JSON ist ein textbasiertes Datenformat zur strukturierten Darstellung von Informationen. Es wird häufig bei Web-APIs und beim Datenaustausch zwischen Anwendungen eingesetzt.",
            merksatz:
                "JSON strukturiert Daten mit Schlüssel-Wert-Paaren."
        },
        {
            id: "xml",
            titel: "XML",
            erklaerung:
                "XML ist ein textbasiertes Format zur strukturierten Darstellung von Daten. Informationen werden mithilfe von Elementen und Tags beschrieben.",
            merksatz:
                "XML strukturiert Daten mit Tags."
        },
        {
            id: "csv",
            titel: "CSV",
            erklaerung:
                "CSV eignet sich zur einfachen Speicherung tabellarischer Daten. Werte werden zeilenweise gespeichert und durch ein definiertes Trennzeichen voneinander getrennt.",
            merksatz:
                "CSV ist einfach aufgebaut und eignet sich besonders für Tabellen."
        },
        {
            id: "datenformate-vergleich",
            titel: "Datenformate vergleichen",
            erklaerung:
                "Je nach Einsatzzweck können unterschiedliche Datenformate sinnvoll sein. CSV eignet sich gut für einfache Tabellen, während JSON und XML komplexere Strukturen darstellen können.",
            merksatz:
                "Das passende Datenformat richtet sich nach Struktur und Einsatzzweck."
        },
        {
            id: "import-export",
            titel: "Datenimport und Datenexport",
            erklaerung:
                "Beim Export werden Daten aus einem System ausgegeben. Beim Import werden Daten in ein anderes System eingelesen. Dabei müssen Struktur, Datentypen und Zeichencodierung berücksichtigt werden.",
            merksatz:
                "Export raus – Import rein."
        },
        {
            id: "zeichencodierung",
            titel: "Zeichencodierung",
            erklaerung:
                "Eine Zeichencodierung legt fest, wie Zeichen als Zahlenwerte gespeichert werden. UTF-8 ist heute weit verbreitet und unterstützt eine große Anzahl unterschiedlicher Zeichen.",
            merksatz:
                "Die gleiche Codierung verhindert Zeichensalat."
        },
        {
            id: "datenbankzugriff",
            titel: "Datenbankzugriff",
            erklaerung:
                "Anwendungen können Daten aus Datenbanken lesen oder dort verändern. Dafür werden geeignete Schnittstellen, Abfragen und Berechtigungen benötigt.",
            merksatz:
                "Datenbankzugriffe sollten gezielt und nur mit notwendigen Rechten erfolgen."
        },
        {
            id: "datenvalidierung",
            titel: "Datenvalidierung",
            erklaerung:
                "Bei der Datenvalidierung wird geprüft, ob Daten bestimmten Regeln entsprechen. Beispielsweise können Pflichtfelder, Wertebereiche oder Datenformate kontrolliert werden.",
            merksatz:
                "Validierung prüft, ob Daten den erwarteten Regeln entsprechen."
        },
        {
            id: "fehlerbehandlung-daten",
            titel: "Fehlerbehandlung beim Datenaustausch",
            erklaerung:
                "Beim Datenaustausch können Fehler auftreten, beispielsweise ungültige Daten, Verbindungsprobleme oder inkompatible Formate. Solche Fehler sollten erkannt, protokolliert und sinnvoll behandelt werden.",
            merksatz:
                "Fehler erkennen, dokumentieren und kontrolliert behandeln."
        },
        {
            id: "sicherheit-datenaustausch",
            titel: "Sicherheit beim Datenaustausch",
            erklaerung:
                "Beim Austausch von Daten müssen Vertraulichkeit, Integrität und Berechtigungen berücksichtigt werden. Je nach Anwendung können Verschlüsselung, Authentifizierung und Zugriffskontrollen notwendig sein.",
            merksatz:
                "Daten nicht nur übertragen – sondern auch schützen."
        }
    ]
},
    {
    id: "lf09",
    nummer: "LF 9",
    titel: "Netzwerke und Dienste bereitstellen",
    kurzTitel: "Netzwerke & Dienste",

    beschreibung:
        "In diesem Lernfeld geht es um die Planung, Einrichtung und Bereitstellung von Netzwerken und Netzwerkdiensten. Dazu gehören unter anderem IP-Adressierung, Subnetting, VLANs, Routing, DHCP, DNS, NAT, Firewalls, VPNs sowie die Überwachung und Dokumentation von Netzwerkinfrastrukturen.",

    themen: [
        {
            id: "netzwerkplanung",
            titel: "Netzwerkplanung",
            erklaerung:
                "Vor der Umsetzung eines Netzwerks werden Anforderungen wie Anzahl der Geräte, benötigte Dienste, Sicherheitsanforderungen, Bandbreite und zukünftige Erweiterungen betrachtet.",
            merksatz:
                "Erst Anforderungen planen – dann Netzwerk aufbauen."
        },
        {
            id: "ipv4",
            titel: "IPv4-Adressierung",
            erklaerung:
                "IPv4-Adressen bestehen aus 32 Bit und identifizieren Geräte beziehungsweise Netzwerkschnittstellen in IP-Netzen. Subnetzmaske oder Präfix bestimmen, welcher Teil die Netzwerk- und welcher die Hostadresse beschreibt.",
            merksatz:
                "IP-Adresse plus Präfix bestimmt, zu welchem Netz ein Gerät gehört."
        },
        {
            id: "subnetting",
            titel: "Subnetting",
            erklaerung:
                "Beim Subnetting wird ein größeres IP-Netz in kleinere Teilnetze aufgeteilt. Dadurch können Adressbereiche effizient genutzt und Netzwerke logisch strukturiert werden.",
            merksatz:
                "Mehr Netzbits bedeuten kleinere Subnetze und weniger Hostadressen."
        },
        {
            id: "vlan",
            titel: "VLANs",
            erklaerung:
                "VLANs ermöglichen die logische Trennung von Netzwerksegmenten auf gemeinsamer physischer Infrastruktur. Geräte verschiedener VLANs benötigen normalerweise Routing, um miteinander zu kommunizieren.",
            merksatz:
                "VLAN trennt logisch – Routing verbindet Netze wieder gezielt."
        },
        {
            id: "trunking",
            titel: "VLAN-Trunks",
            erklaerung:
                "Ein Trunk kann Datenverkehr mehrerer VLANs über eine gemeinsame Verbindung transportieren. Dabei werden Frames beispielsweise nach IEEE 802.1Q mit VLAN-Informationen gekennzeichnet.",
            merksatz:
                "Access-Port = normalerweise ein VLAN – Trunk = mehrere VLANs."
        },
        {
            id: "routing",
            titel: "Routing",
            erklaerung:
                "Router beziehungsweise Layer-3-Geräte leiten IP-Pakete zwischen verschiedenen Netzwerken weiter. Grundlage dafür sind Routingtabellen mit bekannten Netzwerken und möglichen nächsten Zielen.",
            merksatz:
                "Routing entscheidet, welchen Weg ein Paket in ein anderes Netz nimmt."
        },
        {
            id: "dhcp",
            titel: "DHCP",
            erklaerung:
                "DHCP ermöglicht die automatische Bereitstellung von Netzwerkkonfigurationen. Clients können unter anderem IP-Adresse, Subnetzmaske, Standardgateway und DNS-Server erhalten.",
            merksatz:
                "DHCP verteilt Netzwerkeinstellungen automatisch."
        },
        {
            id: "dns",
            titel: "DNS",
            erklaerung:
                "Das Domain Name System löst Namen in IP-Adressen und andere Informationen auf. Verschiedene Resource Records wie A, AAAA, CNAME oder MX erfüllen dabei unterschiedliche Aufgaben.",
            merksatz:
                "DNS macht aus Namen technisch nutzbare Informationen."
        },
        {
            id: "nat",
            titel: "NAT und PAT",
            erklaerung:
                "Network Address Translation verändert IP-Adressinformationen bei der Weiterleitung. PAT ermöglicht zusätzlich, mehrere interne Verbindungen über eine gemeinsame öffentliche IPv4-Adresse anhand unterschiedlicher Portnummern zu unterscheiden.",
            merksatz:
                "NAT übersetzt Adressen – PAT unterscheidet zusätzlich über Ports."
        },
        {
            id: "firewall",
            titel: "Firewalls",
            erklaerung:
                "Firewalls kontrollieren Netzwerkverkehr anhand definierter Regeln. Je nach System können beispielsweise Quell- und Zieladresse, Ports, Protokolle oder der Zustand einer Verbindung berücksichtigt werden.",
            merksatz:
                "Eine Firewall entscheidet nach Regeln, welcher Verkehr erlaubt wird."
        },
        {
            id: "vpn",
            titel: "VPN",
            erklaerung:
                "Ein Virtual Private Network ermöglicht geschützte Verbindungen über nicht vertrauenswürdige Netzwerke. VPNs werden beispielsweise für Remote-Zugriffe oder zur Verbindung verschiedener Standorte eingesetzt.",
            merksatz:
                "VPN schafft einen geschützten Kommunikationsweg über fremde Netze."
        },
        {
            id: "wlan-sicherheit",
            titel: "WLAN und WLAN-Sicherheit",
            erklaerung:
                "Bei WLAN-Netzen spielen Funkabdeckung, Kanäle, Frequenzbereiche und Sicherheitsverfahren eine Rolle. Moderne Netze sollten geeignete Verschlüsselungs- und Authentifizierungsverfahren wie WPA2 oder WPA3 einsetzen.",
            merksatz:
                "Gutes WLAN braucht Funkplanung und Sicherheit."
        },
        {
            id: "netzwerkdienste",
            titel: "Netzwerkdienste",
            erklaerung:
                "Netzwerkdienste stellen Funktionen für andere Systeme bereit. Beispiele sind DNS, DHCP, Web-, Datei-, Zeit- oder Verzeichnisdienste.",
            merksatz:
                "Ein Netzwerkdienst stellt anderen Systemen eine definierte Funktion bereit."
        },
        {
            id: "netzwerkmonitoring",
            titel: "Netzwerküberwachung und Monitoring",
            erklaerung:
                "Monitoring dient dazu, Verfügbarkeit, Auslastung und Zustände von Netzwerkkomponenten und Diensten zu überwachen. Dadurch können Fehler oder Engpässe frühzeitig erkannt werden.",
            merksatz:
                "Monitoring zeigt Probleme möglichst bevor die Anwender sie melden."
        },
        {
            id: "netzwerkdokumentation",
            titel: "Netzwerkdokumentation",
            erklaerung:
                "Eine Netzwerkdokumentation kann unter anderem IP-Adresspläne, VLANs, Geräte, Verbindungen, Dienste und Konfigurationen enthalten. Sie erleichtert Betrieb, Wartung und Fehlersuche.",
            merksatz:
                "Ein Netzwerk, das niemand nachvollziehen kann, ist schlecht wartbar."
        }
    ]
},
   {
    id: "lf10b",
    nummer: "LF 10b",
    titel: "Serverdienste bereitstellen und Administrationsaufgaben automatisieren",
    kurzTitel: "Server & Automatisierung",

    beschreibung:
        "In diesem Lernfeld geht es um die Planung, Installation, Konfiguration und Administration von Serverdiensten. Außerdem werden wiederkehrende Administrationsaufgaben mithilfe von Skripten und geeigneten Werkzeugen automatisiert.",

    themen: [
        {
            id: "server-grundlagen",
            titel: "Server und Serverrollen",
            erklaerung:
                "Ein Server stellt anderen Systemen Dienste oder Ressourcen bereit. Je nach Aufgabe kann er beispielsweise als Datei-, Web-, DNS-, DHCP- oder Verzeichnisserver eingesetzt werden.",
            merksatz:
                "Ein Server stellt Clients definierte Dienste bereit."
        },
        {
            id: "serverbetriebssysteme",
            titel: "Serverbetriebssysteme",
            erklaerung:
                "Serverbetriebssysteme sind für die Bereitstellung und Verwaltung von Netzwerkdiensten ausgelegt. Beispiele sind Windows Server und verschiedene Linux-Distributionen.",
            merksatz:
                "Das Serverbetriebssystem bildet die Grundlage für die Serverdienste."
        },
        {
            id: "virtualisierung",
            titel: "Virtualisierung",
            erklaerung:
                "Virtualisierung ermöglicht den Betrieb mehrerer virtueller Systeme auf einer physischen Hardware. Dadurch können Ressourcen effizienter genutzt und Systeme voneinander getrennt betrieben werden.",
            merksatz:
                "Ein physischer Host kann mehrere virtuelle Maschinen betreiben."
        },
        {
            id: "hypervisor",
            titel: "Hypervisor",
            erklaerung:
                "Ein Hypervisor stellt die Virtualisierungsumgebung bereit und verwaltet virtuelle Maschinen sowie deren Ressourcen wie CPU, Arbeitsspeicher, Netzwerk und Massenspeicher.",
            merksatz:
                "Der Hypervisor verwaltet die virtuellen Maschinen."
        },
        {
            id: "verzeichnisdienste",
            titel: "Verzeichnisdienste",
            erklaerung:
                "Verzeichnisdienste verwalten zentral Informationen über Benutzer, Computer, Gruppen und weitere Netzwerkobjekte. Ein bekanntes Beispiel ist Active Directory Domain Services.",
            merksatz:
                "Verzeichnisdienste ermöglichen zentrale Verwaltung."
        },
        {
            id: "active-directory",
            titel: "Active Directory",
            erklaerung:
                "Active Directory ermöglicht in Windows-Netzwerken die zentrale Verwaltung von Benutzern, Computern, Gruppen und Domänenressourcen.",
            merksatz:
                "Active Directory organisiert Identitäten und Ressourcen einer Windows-Domäne."
        },
        {
            id: "benutzer-gruppen",
            titel: "Benutzer und Gruppen",
            erklaerung:
                "Benutzerkonten identifizieren Personen oder Dienste. Gruppen erleichtern die gemeinsame Vergabe von Berechtigungen an mehrere Benutzer.",
            merksatz:
                "Berechtigungen möglichst über Gruppen statt einzeln vergeben."
        },
        {
            id: "berechtigungen-server",
            titel: "Berechtigungen und Freigaben",
            erklaerung:
                "Serverressourcen können durch Berechtigungen geschützt werden. Bei Dateiservern müssen beispielsweise Freigabe- und Dateisystemberechtigungen berücksichtigt werden.",
            merksatz:
                "Nur notwendige Zugriffe erlauben."
        },
        {
            id: "dateidienste",
            titel: "Datei- und Freigabedienste",
            erklaerung:
                "Dateiserver stellen Dateien und Ordner zentral im Netzwerk bereit. Benutzer können abhängig von ihren Berechtigungen auf diese Ressourcen zugreifen.",
            merksatz:
                "Dateiserver stellen Daten zentral im Netzwerk bereit."
        },
        {
            id: "gruppenrichtlinien",
            titel: "Gruppenrichtlinien",
            erklaerung:
                "Gruppenrichtlinien ermöglichen die zentrale Konfiguration von Benutzern und Computern innerhalb einer Windows-Domäne.",
            merksatz:
                "GPOs verteilen Einstellungen zentral."
        },
        {
            id: "powershell",
            titel: "PowerShell",
            erklaerung:
                "PowerShell ist eine Kommandozeilen- und Skriptumgebung zur Administration von Windows-Systemen. Viele administrative Aufgaben können damit automatisiert werden.",
            merksatz:
                "PowerShell macht Administration skript- und automatisierbar."
        },
        {
            id: "skripting",
            titel: "Skripting und Automatisierung",
            erklaerung:
                "Skripte führen definierte Befehlsfolgen automatisch aus. Wiederkehrende Aufgaben können dadurch schneller, reproduzierbarer und mit weniger manuellen Fehlern durchgeführt werden.",
            merksatz:
                "Was regelmäßig gleich abläuft, ist ein Kandidat für Automatisierung."
        },
        {
            id: "backup-server",
            titel: "Backup und Wiederherstellung",
            erklaerung:
                "Serverdaten und Konfigurationen sollten regelmäßig gesichert werden. Wiederherstellungsmöglichkeiten müssen geplant und getestet werden.",
            merksatz:
                "Backup erstellen – Restore testen."
        },
        {
            id: "server-monitoring",
            titel: "Serverüberwachung",
            erklaerung:
                "Monitoring überwacht beispielsweise CPU-Auslastung, Arbeitsspeicher, Speicherplatz, Netzwerk, Dienste und Ereignisse eines Servers.",
            merksatz:
                "Monitoring erkennt Probleme möglichst vor dem Ausfall."
        },
        {
            id: "server-dokumentation",
            titel: "Serverdokumentation",
            erklaerung:
                "Serverkonfigurationen, Rollen, IP-Adressen, Abhängigkeiten, Berechtigungen und besondere Einstellungen sollten nachvollziehbar dokumentiert werden.",
            merksatz:
                "Ein administrierbares System braucht nachvollziehbare Dokumentation."
        }
    ]
},
    {
    id: "lf11b",
    nummer: "LF 11b",
    titel: "Betrieb und Sicherheit vernetzter Systeme gewährleisten",
    kurzTitel: "Betrieb & IT-Sicherheit",

    beschreibung:
        "In diesem Lernfeld geht es darum, vernetzte IT-Systeme sicher und zuverlässig zu betreiben. Dazu gehören Systemhärtung, Patchmanagement, Firewall- und Berechtigungskonzepte, Protokollierung, Monitoring, Schwachstellenmanagement, Verschlüsselung sowie der Umgang mit Sicherheitsvorfällen.",

    themen: [
        {
            id: "systemhaertung",
            titel: "Systemhärtung",
            erklaerung:
                "Bei der Systemhärtung wird die Angriffsfläche eines Systems reduziert. Nicht benötigte Dienste, Benutzerkonten und Funktionen werden deaktiviert oder entfernt und sichere Einstellungen vorgenommen.",
            merksatz:
                "Was nicht benötigt wird, sollte möglichst auch nicht angreifbar sein."
        },
        {
            id: "patchmanagement",
            titel: "Patchmanagement",
            erklaerung:
                "Patchmanagement umfasst die Planung, Prüfung und Installation von Aktualisierungen. Sicherheitsupdates schließen bekannte Schwachstellen und sollten kontrolliert sowie zeitnah eingespielt werden.",
            merksatz:
                "Patchen heißt bekannte Schwachstellen möglichst schnell schließen."
        },
        {
            id: "schwachstellenmanagement",
            titel: "Schwachstellenmanagement",
            erklaerung:
                "Beim Schwachstellenmanagement werden Sicherheitslücken erkannt, bewertet, priorisiert und behoben. Dabei spielen beispielsweise Kritikalität, betroffene Systeme und mögliche Auswirkungen eine Rolle.",
            merksatz:
                "Schwachstelle finden → bewerten → priorisieren → beheben."
        },
        {
            id: "firewall-regeln",
            titel: "Firewall und Regelwerke",
            erklaerung:
                "Firewalls kontrollieren Netzwerkverkehr anhand definierter Regeln. Dabei können unter anderem Quell- und Zieladressen, Ports, Protokolle und Verbindungszustände berücksichtigt werden.",
            merksatz:
                "Nur den Netzwerkverkehr erlauben, der tatsächlich benötigt wird."
        },
        {
            id: "netzsegmentierung",
            titel: "Netzsegmentierung",
            erklaerung:
                "Durch die Aufteilung eines Netzwerks in unterschiedliche Segmente oder VLANs können Systeme voneinander getrennt und Kommunikationswege gezielt kontrolliert werden.",
            merksatz:
                "Segmentierung begrenzt, wer mit wem kommunizieren kann."
        },
        {
            id: "berechtigungskonzepte",
            titel: "Berechtigungskonzepte",
            erklaerung:
                "Berechtigungen sollten nach festgelegten Regeln vergeben werden. Dazu gehören Prinzipien wie Least Privilege und die Vergabe von Rechten über Rollen oder Gruppen.",
            merksatz:
                "So viele Rechte wie nötig – so wenige wie möglich."
        },
        {
            id: "authentifizierung",
            titel: "Authentifizierung",
            erklaerung:
                "Authentifizierung dient dazu, die Identität eines Benutzers oder Systems zu überprüfen. Dazu können Passwörter, Zertifikate, Tokens oder biometrische Merkmale eingesetzt werden.",
            merksatz:
                "Authentifizierung beantwortet die Frage: Wer bist du?"
        },
        {
            id: "verschluesselung",
            titel: "Verschlüsselung",
            erklaerung:
                "Verschlüsselung schützt Informationen vor unberechtigtem Lesen. Daten können sowohl bei der Übertragung als auch bei der Speicherung verschlüsselt werden.",
            merksatz:
                "Verschlüsselung schützt Daten unterwegs und im Speicher."
        },
        {
            id: "zertifikate-pki",
            titel: "Zertifikate und PKI",
            erklaerung:
                "Digitale Zertifikate können Identitäten bestätigen und öffentliche Schlüssel zuordnen. Eine Public Key Infrastructure verwaltet unter anderem Zertifikate und Zertifizierungsstellen.",
            merksatz:
                "Zertifikate verbinden eine Identität mit einem öffentlichen Schlüssel."
        },
        {
            id: "logging",
            titel: "Logging und Ereignisprotokolle",
            erklaerung:
                "Systeme protokollieren Ereignisse wie Anmeldungen, Fehler oder Sicherheitsereignisse. Logs sind wichtig für Fehlersuche, Überwachung und die Analyse von Sicherheitsvorfällen.",
            merksatz:
                "Logs zeigen, was auf einem System passiert ist."
        },
        {
            id: "monitoring-sicherheit",
            titel: "Monitoring",
            erklaerung:
                "Beim Monitoring werden Systeme und Dienste kontinuierlich überwacht. Dabei können Verfügbarkeit, Ressourcenverbrauch und ungewöhnliche Zustände erkannt werden.",
            merksatz:
                "Monitoring erkennt Abweichungen möglichst bevor daraus ein großer Ausfall wird."
        },
        {
            id: "ids-ips",
            titel: "IDS und IPS",
            erklaerung:
                "Ein Intrusion Detection System erkennt verdächtige Aktivitäten und meldet sie. Ein Intrusion Prevention System kann zusätzlich versuchen, erkannte Angriffe automatisch zu blockieren.",
            merksatz:
                "IDS erkennt – IPS erkennt und kann eingreifen."
        },
        {
            id: "backup-wiederherstellung",
            titel: "Backup und Wiederherstellung",
            erklaerung:
                "Backups schützen vor Datenverlust und unterstützen die Wiederherstellung nach technischen Fehlern oder Sicherheitsvorfällen. Sicherungen sollten regelmäßig erstellt und Wiederherstellungen getestet werden.",
            merksatz:
                "Ein Backup ist nur dann wertvoll, wenn es wiederhergestellt werden kann."
        },
        {
            id: "security-incident",
            titel: "Umgang mit Sicherheitsvorfällen",
            erklaerung:
                "Bei einem Sicherheitsvorfall müssen betroffene Systeme und Auswirkungen untersucht, geeignete Sofortmaßnahmen durchgeführt und der Vorfall dokumentiert werden. Anschließend erfolgt die Wiederherstellung und Nachbereitung.",
            merksatz:
                "Erkennen → begrenzen → untersuchen → wiederherstellen → nachbereiten."
        },
        {
            id: "hochverfuegbarkeit",
            titel: "Verfügbarkeit und Ausfallsicherheit",
            erklaerung:
                "Durch redundante Komponenten, Überwachung und geeignete Wiederherstellungskonzepte kann die Verfügbarkeit von IT-Systemen erhöht werden. Kritische Einzelkomponenten sollten möglichst keine unnötigen Single Points of Failure darstellen.",
            merksatz:
                "Redundanz kann verhindern, dass ein einzelner Fehler den gesamten Dienst stoppt."
        }
    ]
},
    {
    id: "lf12b",
    nummer: "LF 12b",
    titel: "Kundenauftrag durchführen",
    kurzTitel: "Systemintegration & Projekte",

    beschreibung:
        "In diesem Lernfeld geht es darum, einen Kundenauftrag von der Anforderungsanalyse über die Planung und technische Umsetzung bis zur Abnahme und Dokumentation durchzuführen. Dabei werden technische, wirtschaftliche und organisatorische Aspekte miteinander verbunden.",

    themen: [
        {
            id: "kundenauftrag",
            titel: "Kundenauftrag",
            erklaerung:
                "Ein Kundenauftrag beschreibt eine konkrete Anforderung, die geplant und umgesetzt werden soll. Dabei müssen technische, organisatorische und wirtschaftliche Rahmenbedingungen berücksichtigt werden.",
            merksatz:
                "Der Auftrag gibt Ziel, Rahmen und Anforderungen des Projekts vor."
        },
        {
            id: "anforderungsanalyse",
            titel: "Anforderungsanalyse",
            erklaerung:
                "Zu Beginn eines Projekts werden Anforderungen und Erwartungen des Kunden ermittelt. Dabei wird geklärt, was erreicht werden soll und welche Bedingungen eingehalten werden müssen.",
            merksatz:
                "Erst verstehen, was gebraucht wird – dann eine Lösung planen."
        },
        {
            id: "ist-soll-analyse",
            titel: "Ist- und Soll-Zustand",
            erklaerung:
                "Bei der Ist-Analyse wird die vorhandene Situation untersucht. Der Soll-Zustand beschreibt, wie das System nach erfolgreicher Umsetzung aussehen oder funktionieren soll.",
            merksatz:
                "Ist = aktueller Zustand – Soll = gewünschtes Ergebnis."
        },
        {
            id: "projektplanung",
            titel: "Projektplanung",
            erklaerung:
                "In der Projektplanung werden Aufgaben, Zeitbedarf, Ressourcen, Abhängigkeiten und Verantwortlichkeiten festgelegt.",
            merksatz:
                "Gute Planung macht Aufwand, Reihenfolge und Verantwortung sichtbar."
        },
        {
            id: "projektphasen",
            titel: "Projektphasen",
            erklaerung:
                "IT-Projekte können in verschiedene Phasen gegliedert werden, beispielsweise Analyse, Planung, Umsetzung, Test, Übergabe und Abschluss.",
            merksatz:
                "Ein Projekt wird Schritt für Schritt vom Auftrag zur fertigen Lösung geführt."
        },
        {
            id: "zeitplanung",
            titel: "Zeit- und Ressourcenplanung",
            erklaerung:
                "Für ein Projekt müssen benötigte Arbeitszeit, Personal, Hardware, Software und weitere Ressourcen eingeplant werden.",
            merksatz:
                "Zeit und Ressourcen sind begrenzt und müssen geplant werden."
        },
        {
            id: "risikomanagement",
            titel: "Projektrisiken",
            erklaerung:
                "Risiken sind mögliche Ereignisse, die ein Projekt negativ beeinflussen können. Risiken sollten frühzeitig erkannt, bewertet und durch geeignete Maßnahmen reduziert werden.",
            merksatz:
                "Risiken früh erkennen statt erst reagieren, wenn das Problem eingetreten ist."
        },
        {
            id: "loesungskonzept",
            titel: "Technisches Lösungskonzept",
            erklaerung:
                "Das Lösungskonzept beschreibt, wie die Anforderungen technisch umgesetzt werden sollen. Dabei können beispielsweise Systeme, Netzwerkstrukturen, Dienste, Sicherheitsmaßnahmen und Software ausgewählt werden.",
            merksatz:
                "Das Lösungskonzept übersetzt Anforderungen in eine technische Umsetzung."
        },
        {
            id: "wirtschaftlichkeit-projekt",
            titel: "Wirtschaftlichkeit",
            erklaerung:
                "Neben der technischen Eignung müssen auch Kosten und Nutzen berücksichtigt werden. Dazu gehören beispielsweise Anschaffung, Betrieb, Wartung und erwartete Nutzungsdauer.",
            merksatz:
                "Die technisch beste Lösung muss auch wirtschaftlich vertretbar sein."
        },
        {
            id: "projektdurchfuehrung",
            titel: "Technische Umsetzung",
            erklaerung:
                "Während der Durchführung wird die geplante Lösung installiert, konfiguriert und in die bestehende Umgebung integriert.",
            merksatz:
                "In der Umsetzung wird aus der Planung ein funktionierendes System."
        },
        {
            id: "tests",
            titel: "Tests und Funktionsprüfung",
            erklaerung:
                "Nach der Umsetzung wird geprüft, ob die Lösung die definierten Anforderungen erfüllt. Tests sollten geplant, durchgeführt und nachvollziehbar dokumentiert werden.",
            merksatz:
                "Nicht nur installieren – auch nachweisen, dass es funktioniert."
        },
        {
            id: "abnahme",
            titel: "Abnahme",
            erklaerung:
                "Bei der Abnahme wird geprüft, ob die vereinbarten Anforderungen erfüllt wurden. Der Auftraggeber bestätigt anschließend die ordnungsgemäße Leistung beziehungsweise dokumentiert noch bestehende Mängel.",
            merksatz:
                "Abnahme bedeutet: Erfüllt die Lösung den vereinbarten Auftrag?"
        },
        {
            id: "projektdokumentation",
            titel: "Projektdokumentation",
            erklaerung:
                "Eine Projektdokumentation beschreibt unter anderem Ausgangssituation, Anforderungen, Planung, Entscheidungen, Umsetzung, Tests und Ergebnis.",
            merksatz:
                "Dokumentation macht Entscheidungen und Umsetzung nachvollziehbar."
        },
        {
            id: "kundenuebergabe",
            titel: "Übergabe und Einweisung",
            erklaerung:
                "Nach erfolgreicher Umsetzung wird die Lösung an den Kunden beziehungsweise Betreiber übergeben. Je nach Projekt können Dokumentation, Zugangsinformationen und eine Einweisung dazugehören.",
            merksatz:
                "Ein Projekt endet nicht mit der Installation, sondern mit einer sauberen Übergabe."
        },
        {
            id: "projektabschluss",
            titel: "Projektabschluss und Reflexion",
            erklaerung:
                "Am Projektende wird bewertet, ob die Ziele erreicht wurden. Abweichungen, Probleme und Verbesserungspotenziale können analysiert und als Erfahrung für zukünftige Projekte genutzt werden.",
            merksatz:
                "Nach dem Projekt prüfen: Was lief gut und was kann beim nächsten Mal besser werden?"
        }
    ]
},
    
];
