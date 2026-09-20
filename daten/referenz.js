const referenzDaten = {

    abkuerzungen: {
        titel: "🔤 Abkürzungen",

        eintraege: [
    {
        id: "ip",
        begriff: "IP",
        bedeutung: "Internet Protocol",
        erklaerung:
            "Protokoll zur Adressierung und Weiterleitung von Datenpaketen zwischen Geräten in Netzwerken."
    },
    {
        id: "ipv4",
        begriff: "IPv4",
        bedeutung: "Internet Protocol Version 4",
        erklaerung:
            "Weit verbreitete Version des Internet Protocols mit 32 Bit langen IP-Adressen."
    },
    {
        id: "ipv6",
        begriff: "IPv6",
        bedeutung: "Internet Protocol Version 6",
        erklaerung:
            "Nachfolger von IPv4 mit 128 Bit langen Adressen und einem wesentlich größeren Adressraum."
    },
    {
        id: "tcp",
        begriff: "TCP",
        bedeutung: "Transmission Control Protocol",
        erklaerung:
            "Verbindungsorientiertes Transportprotokoll, das eine zuverlässige und geordnete Datenübertragung ermöglicht."
    },
    {
        id: "udp",
        begriff: "UDP",
        bedeutung: "User Datagram Protocol",
        erklaerung:
            "Verbindungsloses Transportprotokoll mit geringem Overhead, aber ohne Garantie für Zustellung oder Reihenfolge."
    },
    {
        id: "dns",
        begriff: "DNS",
        bedeutung: "Domain Name System",
        erklaerung:
            "Ordnet Domainnamen wie example.com den zugehörigen IP-Adressen und weiteren DNS-Informationen zu."
    },
    {
        id: "dhcp",
        begriff: "DHCP",
        bedeutung: "Dynamic Host Configuration Protocol",
        erklaerung:
            "Vergibt automatisch Netzwerkeinstellungen wie IP-Adresse, Subnetzmaske, Gateway und DNS-Server an Clients."
    },
    {
        id: "mac",
        begriff: "MAC",
        bedeutung: "Media Access Control",
        erklaerung:
            "Bezeichnet im Netzwerkbereich unter anderem die MAC-Adresse zur Identifikation einer Netzwerkschnittstelle auf der Sicherungsschicht."
    },
    {
        id: "lan",
        begriff: "LAN",
        bedeutung: "Local Area Network",
        erklaerung:
            "Lokales Netzwerk innerhalb eines begrenzten Bereichs, beispielsweise eines Hauses, Büros oder Unternehmensstandorts."
    },
    {
        id: "wan",
        begriff: "WAN",
        bedeutung: "Wide Area Network",
        erklaerung:
            "Weitverkehrsnetz, das Netzwerke über größere geografische Entfernungen miteinander verbindet."
    },
    {
        id: "wlan",
        begriff: "WLAN",
        bedeutung: "Wireless Local Area Network",
        erklaerung:
            "Lokales drahtloses Netzwerk, bei dem Geräte typischerweise über Funk nach IEEE-802.11-Standards kommunizieren."
    },
    {
        id: "vlan",
        begriff: "VLAN",
        bedeutung: "Virtual Local Area Network",
        erklaerung:
            "Ermöglicht die logische Aufteilung eines physischen Netzwerks in voneinander getrennte Broadcast-Domänen."
    },
    {
        id: "nat",
        begriff: "NAT",
        bedeutung: "Network Address Translation",
        erklaerung:
            "Übersetzt Netzwerkadressen zwischen verschiedenen Netzen und wird häufig beim Übergang zwischen privaten Netzen und dem Internet eingesetzt."
    },
    {
        id: "vpn",
        begriff: "VPN",
        bedeutung: "Virtual Private Network",
        erklaerung:
            "Ermöglicht eine geschützte Verbindung zwischen Geräten oder Netzwerken über ein anderes Netzwerk wie das Internet."
    },
    {
        id: "http",
        begriff: "HTTP",
        bedeutung: "Hypertext Transfer Protocol",
        erklaerung:
            "Anwendungsprotokoll zur Übertragung von Webinhalten zwischen Client und Server."
    },
    {
        id: "https",
        begriff: "HTTPS",
        bedeutung: "Hypertext Transfer Protocol Secure",
        erklaerung:
            "HTTP-Kommunikation, die durch TLS verschlüsselt und gegen Manipulation geschützt wird."
    },
    {
        id: "ssh",
        begriff: "SSH",
        bedeutung: "Secure Shell",
        erklaerung:
            "Protokoll für verschlüsselte Remote-Verbindungen und die Administration von Systemen über das Netzwerk."
    },
    {
        id: "rdp",
        begriff: "RDP",
        bedeutung: "Remote Desktop Protocol",
        erklaerung:
            "Microsoft-Protokoll für den grafischen Fernzugriff auf einen anderen Computer."
    },
    {
        id: "smb",
        begriff: "SMB",
        bedeutung: "Server Message Block",
        erklaerung:
            "Netzwerkprotokoll für den gemeinsamen Zugriff auf Dateien, Ordner, Drucker und andere Ressourcen."
    },
    {
        id: "raid",
        begriff: "RAID",
        bedeutung: "Redundant Array of Independent Disks",
        erklaerung:
            "Fasst mehrere Datenträger zusammen, um je nach RAID-Level beispielsweise Verfügbarkeit oder Leistung zu erhöhen."
    },
    {
        id: "ad",
        begriff: "AD",
        bedeutung: "Active Directory",
        erklaerung:
            "Microsoft-Verzeichnisdienst zur zentralen Verwaltung von Benutzern, Computern, Gruppen und weiteren Ressourcen einer Domäne."
    },
    {
        id: "gpo",
        begriff: "GPO",
        bedeutung: "Group Policy Object",
        erklaerung:
            "Gruppenrichtlinienobjekt zur zentralen Konfiguration von Benutzern und Computern in einer Windows-Domäne."
    },
    {
        id: "vm",
        begriff: "VM",
        bedeutung: "Virtual Machine",
        erklaerung:
            "Virtueller Computer, der auf einem physischen Host ausgeführt wird und ein eigenes Betriebssystem betreiben kann."
    },
    {
        id: "cpu",
        begriff: "CPU",
        bedeutung: "Central Processing Unit",
        erklaerung:
            "Hauptprozessor eines Computers, der Befehle verarbeitet und Berechnungen ausführt."
    },
    {
        id: "ram",
        begriff: "RAM",
        bedeutung: "Random Access Memory",
        erklaerung:
            "Schneller flüchtiger Arbeitsspeicher für Daten und Programme, die aktuell benötigt werden."
    },
    {
        id: "ssd",
        begriff: "SSD",
        bedeutung: "Solid State Drive",
        erklaerung:
            "Nichtflüchtiger Massenspeicher auf Flash-Basis ohne bewegliche mechanische Bauteile."
    },
    {
        id: "uefi",
        begriff: "UEFI",
        bedeutung: "Unified Extensible Firmware Interface",
        erklaerung:
            "Moderne Firmware-Schnittstelle zwischen Hardware und Betriebssystem und weitgehender Nachfolger des klassischen BIOS."
    },
    {
        id: "api",
        begriff: "API",
        bedeutung: "Application Programming Interface",
        erklaerung:
            "Programmierschnittstelle, über die Anwendungen oder Dienste definierte Funktionen und Daten austauschen können."
    },
    {
        id: "mfa",
        begriff: "MFA",
        bedeutung: "Multi-Factor Authentication",
        erklaerung:
            "Authentifizierung mit mindestens zwei unterschiedlichen Faktoren, beispielsweise Passwort und Sicherheitsschlüssel."
    },
    {
        id: "acl",
        begriff: "ACL",
        bedeutung: "Access Control List",
        erklaerung:
            "Liste von Regeln oder Berechtigungen, die festlegt, wer oder was auf eine Ressource zugreifen darf."
    }
]
    },


    fachbegriffe: {
        titel: "📖 Fachbegriffe",

        eintraege: [
    {
        id: "client",
        begriff: "Client",
        bedeutung: "Nutzt einen Dienst",
        erklaerung:
            "Ein Client ist ein Gerät oder Programm, das Dienste oder Ressourcen von einem Server anfordert und verwendet."
    },
    {
        id: "server",
        begriff: "Server",
        bedeutung: "Stellt Dienste bereit",
        erklaerung:
            "Ein Server stellt anderen Systemen im Netzwerk Dienste, Daten oder Ressourcen zur Verfügung."
    },
    {
        id: "gateway",
        begriff: "Gateway",
        bedeutung: "Übergang zwischen Netzwerken",
        erklaerung:
            "Ein Gateway ermöglicht die Kommunikation mit anderen Netzwerken. In IP-Netzen übernimmt diese Aufgabe häufig ein Router."
    },
    {
        id: "subnetz",
        begriff: "Subnetz",
        bedeutung: "Teil eines IP-Netzwerks",
        erklaerung:
            "Ein Subnetz ist ein logisch abgegrenzter Teil eines größeren IP-Netzwerks."
    },
    {
        id: "routing",
        begriff: "Routing",
        bedeutung: "Weiterleitung zwischen Netzwerken",
        erklaerung:
            "Routing bestimmt, über welchen Weg Datenpakete von einem Netzwerk zu einem anderen weitergeleitet werden."
    },
    {
        id: "port",
        begriff: "Port",
        bedeutung: "Logischer Kommunikationsendpunkt",
        erklaerung:
            "Ports ermöglichen TCP und UDP die Zuordnung von Netzwerkverkehr zu bestimmten Anwendungen oder Diensten."
    },
    {
        id: "protokoll",
        begriff: "Protokoll",
        bedeutung: "Regeln für Kommunikation",
        erklaerung:
            "Ein Protokoll legt Regeln und Abläufe fest, nach denen Systeme Daten miteinander austauschen."
    },
    {
        id: "broadcast",
        begriff: "Broadcast",
        bedeutung: "Nachricht an alle Teilnehmer",
        erklaerung:
            "Ein Broadcast richtet sich an alle Geräte innerhalb einer Broadcast-Domäne."
    },
    {
        id: "firewall",
        begriff: "Firewall",
        bedeutung: "Netzwerkverkehr kontrollieren",
        erklaerung:
            "Eine Firewall kontrolliert Netzwerkverkehr anhand definierter Regeln und kann unerwünschte Verbindungen blockieren."
    },
    {
        id: "virtualisierung",
        begriff: "Virtualisierung",
        bedeutung: "Virtuelle IT-Ressourcen bereitstellen",
        erklaerung:
            "Virtualisierung ermöglicht es, beispielsweise mehrere virtuelle Computer auf derselben physischen Hardware zu betreiben."
    },
    {
        id: "hypervisor",
        begriff: "Hypervisor",
        bedeutung: "Verwaltet virtuelle Maschinen",
        erklaerung:
            "Ein Hypervisor stellt virtuelle Maschinen bereit und verwaltet deren Zugriff auf physische Ressourcen wie CPU, RAM und Speicher."
    },
    {
        id: "snapshot",
        begriff: "Snapshot",
        bedeutung: "Zustand zu einem Zeitpunkt festhalten",
        erklaerung:
            "Ein Snapshot hält den Zustand eines Systems oder Datenträgers zu einem bestimmten Zeitpunkt fest. Er ersetzt normalerweise kein vollständiges Backup."
    },
    {
        id: "backup",
        begriff: "Backup",
        bedeutung: "Sicherung von Daten",
        erklaerung:
            "Ein Backup ist eine zusätzliche Kopie von Daten, die bei Datenverlust oder Beschädigung zur Wiederherstellung verwendet werden kann."
    },
    {
        id: "restore",
        begriff: "Restore",
        bedeutung: "Daten wiederherstellen",
        erklaerung:
            "Restore bezeichnet die Wiederherstellung von Daten oder Systemen aus einer vorhandenen Sicherung."
    },
    {
        id: "redundanz",
        begriff: "Redundanz",
        bedeutung: "Komponenten mehrfach vorhalten",
        erklaerung:
            "Redundanz bedeutet, wichtige Komponenten oder Systeme mehrfach bereitzuhalten, damit beim Ausfall einer Komponente weiterhin ein Betrieb möglich sein kann."
    },
    {
        id: "verfuegbarkeit",
        begriff: "Verfügbarkeit",
        bedeutung: "Systeme und Daten nutzbar halten",
        erklaerung:
            "Verfügbarkeit beschreibt, dass Systeme, Dienste und Daten bei Bedarf erreichbar und nutzbar sind."
    },
    {
        id: "authentifizierung",
        begriff: "Authentifizierung",
        bedeutung: "Identität überprüfen",
        erklaerung:
            "Bei der Authentifizierung wird überprüft, ob eine Person oder ein System tatsächlich die angegebene Identität besitzt."
    },
    {
        id: "autorisierung",
        begriff: "Autorisierung",
        bedeutung: "Berechtigungen festlegen",
        erklaerung:
            "Die Autorisierung bestimmt nach erfolgreicher Identifikation beziehungsweise Authentifizierung, auf welche Ressourcen zugegriffen werden darf."
    },
    {
        id: "verschluesselung",
        begriff: "Verschlüsselung",
        bedeutung: "Daten vor unbefugtem Lesen schützen",
        erklaerung:
            "Bei der Verschlüsselung werden Daten mithilfe eines kryptografischen Verfahrens so verändert, dass sie ohne passenden Schlüssel nicht sinnvoll gelesen werden können."
    },
    {
        id: "hash",
        begriff: "Hash",
        bedeutung: "Prüfwert aus Daten",
        erklaerung:
            "Eine Hashfunktion erzeugt aus Eingabedaten einen Wert fester Länge und wird unter anderem zur Integritätsprüfung eingesetzt."
    },
    {
        id: "malware",
        begriff: "Malware",
        bedeutung: "Schadsoftware",
        erklaerung:
            "Malware ist ein Sammelbegriff für schädliche Software wie Viren, Würmer, Trojaner oder Ransomware."
    },
    {
        id: "phishing",
        begriff: "Phishing",
        bedeutung: "Täuschungsversuch zum Datendiebstahl",
        erklaerung:
            "Beim Phishing versuchen Angreifer, Personen zur Preisgabe vertraulicher Informationen oder zu gefährlichen Handlungen zu verleiten."
    },
    {
        id: "patch",
        begriff: "Patch",
        bedeutung: "Software aktualisieren oder korrigieren",
        erklaerung:
            "Ein Patch ist eine Softwareänderung, die beispielsweise Fehler behebt oder Sicherheitslücken schließt."
    },
    {
        id: "deployment",
        begriff: "Deployment",
        bedeutung: "Software oder Systeme bereitstellen",
        erklaerung:
            "Deployment bezeichnet die Verteilung und Bereitstellung von Software, Konfigurationen oder Systemen für den produktiven Einsatz."
    },
    {
        id: "rollback",
        begriff: "Rollback",
        bedeutung: "Änderung zurücksetzen",
        erklaerung:
            "Ein Rollback versetzt ein System nach einer problematischen Änderung möglichst wieder in einen vorherigen funktionierenden Zustand."
    },
    {
        id: "monitoring",
        begriff: "Monitoring",
        bedeutung: "Systeme überwachen",
        erklaerung:
            "Monitoring erfasst und überwacht Zustände und Messwerte von Systemen, beispielsweise Auslastung, Verfügbarkeit oder Speicherplatz."
    },
    {
        id: "ticket",
        begriff: "Ticket",
        bedeutung: "Supportvorgang dokumentieren",
        erklaerung:
            "Ein Ticket dokumentiert eine Anfrage, Störung oder Aufgabe und ermöglicht deren strukturierte Bearbeitung und Nachverfolgung."
    },
    {
        id: "incident",
        begriff: "Incident",
        bedeutung: "Störung eines IT-Dienstes",
        erklaerung:
            "Ein Incident ist eine ungeplante Störung oder Beeinträchtigung eines IT-Dienstes, deren Betrieb möglichst schnell wiederhergestellt werden soll."
    },
    {
        id: "problem",
        begriff: "Problem",
        bedeutung: "Ursache hinter Störungen untersuchen",
        erklaerung:
            "Im IT-Service-Management bezeichnet ein Problem eine Ursache oder mögliche Ursache eines oder mehrerer Incidents."
    },
    {
        id: "sla",
        begriff: "Service Level Agreement",
        bedeutung: "Vereinbarung über Serviceleistungen",
        erklaerung:
            "Ein Service Level Agreement beschreibt vereinbarte Leistungsmerkmale eines IT-Services, beispielsweise Verfügbarkeit oder Reaktionszeiten."
    }
]
    },


    programmierung: {
        titel: "💻 Programmierung",

        eintraege: [
    {
        id: "variable",
        begriff: "Variable",
        bedeutung: "Wert unter einem Namen speichern",
        erklaerung:
            "Eine Variable speichert einen Wert, auf den im Programm über einen Namen zugegriffen werden kann."
    },
    {
        id: "datentyp",
        begriff: "Datentyp",
        bedeutung: "Art eines Wertes",
        erklaerung:
            "Ein Datentyp beschreibt, welche Art von Wert vorliegt, beispielsweise Ganzzahl, Text oder Wahrheitswert."
    },
    {
        id: "int",
        begriff: "int",
        bedeutung: "Ganzzahl",
        erklaerung:
            "Datentyp für ganze Zahlen wie 5, 0 oder -20."
    },
    {
        id: "float",
        begriff: "float",
        bedeutung: "Gleitkommazahl",
        erklaerung:
            "Datentyp für Zahlen mit Nachkommastellen wie 3.14 oder 19.99."
    },
    {
        id: "str",
        begriff: "str",
        bedeutung: "Zeichenkette",
        erklaerung:
            "Datentyp für Text beziehungsweise Zeichenketten."
    },
    {
        id: "bool",
        begriff: "bool",
        bedeutung: "Wahrheitswert",
        erklaerung:
            "Datentyp mit den Wahrheitswerten True und False."
    },
    {
        id: "if",
        begriff: "if",
        bedeutung: "Bedingung prüfen",
        erklaerung:
            "Führt einen Codeblock nur aus, wenn eine festgelegte Bedingung erfüllt ist."
    },
    {
        id: "elif",
        begriff: "elif",
        bedeutung: "Weitere Bedingung prüfen",
        erklaerung:
            "Prüft in Python eine weitere Bedingung, wenn vorherige if- oder elif-Bedingungen nicht erfüllt wurden."
    },
    {
        id: "else",
        begriff: "else",
        bedeutung: "Alternativfall",
        erklaerung:
            "Führt einen Codeblock aus, wenn die vorherigen Bedingungen nicht erfüllt wurden."
    },
    {
        id: "for",
        begriff: "for",
        bedeutung: "Schleife",
        erklaerung:
            "Wiederholt einen Codeblock für Elemente einer Folge oder einen definierten Wertebereich."
    },
    {
        id: "while",
        begriff: "while",
        bedeutung: "Bedingungsgesteuerte Schleife",
        erklaerung:
            "Wiederholt einen Codeblock, solange eine bestimmte Bedingung erfüllt ist."
    },
    {
        id: "break",
        begriff: "break",
        bedeutung: "Schleife beenden",
        erklaerung:
            "Beendet eine laufende Schleife sofort."
    },
    {
        id: "continue",
        begriff: "continue",
        bedeutung: "Schleifendurchlauf überspringen",
        erklaerung:
            "Beendet den aktuellen Schleifendurchlauf und setzt mit dem nächsten fort."
    },
    {
        id: "function",
        begriff: "Funktion",
        bedeutung: "Wiederverwendbarer Codeblock",
        erklaerung:
            "Eine Funktion fasst Anweisungen zusammen und kann bei Bedarf mehrfach aufgerufen werden."
    },
    {
        id: "def",
        begriff: "def",
        bedeutung: "Funktion definieren",
        erklaerung:
            "Mit def wird in Python eine eigene Funktion definiert."
    },
    {
        id: "return",
        begriff: "return",
        bedeutung: "Wert zurückgeben",
        erklaerung:
            "Beendet eine Funktion und kann einen Wert an die aufrufende Stelle zurückgeben."
    },
    {
        id: "parameter",
        begriff: "Parameter",
        bedeutung: "Eingabewert einer Funktion",
        erklaerung:
            "Parameter ermöglichen es, einer Funktion Werte zur Verarbeitung zu übergeben."
    },
    {
        id: "print",
        begriff: "print()",
        bedeutung: "Ausgabe anzeigen",
        erklaerung:
            "Gibt in Python Text oder andere Werte auf der Konsole aus."
    },
    {
        id: "input",
        begriff: "input()",
        bedeutung: "Benutzereingabe einlesen",
        erklaerung:
            "Liest in Python eine Eingabe des Benutzers als Zeichenkette ein."
    },
    {
        id: "list",
        begriff: "Liste",
        bedeutung: "Mehrere Werte speichern",
        erklaerung:
            "Eine Liste speichert mehrere Elemente in einer geordneten und veränderbaren Sammlung."
    },
    {
        id: "dictionary",
        begriff: "Dictionary",
        bedeutung: "Schlüssel-Wert-Sammlung",
        erklaerung:
            "Ein Dictionary speichert Werte in Form von Schlüssel-Wert-Paaren."
    },
    {
        id: "tuple",
        begriff: "Tuple",
        bedeutung: "Unveränderbare geordnete Sammlung",
        erklaerung:
            "Ein Tuple speichert mehrere Werte ähnlich wie eine Liste, ist nach der Erstellung jedoch nicht veränderbar."
    },
    {
        id: "len",
        begriff: "len()",
        bedeutung: "Anzahl von Elementen bestimmen",
        erklaerung:
            "Gibt beispielsweise die Länge einer Zeichenkette oder die Anzahl der Elemente einer Sammlung zurück."
    },
    {
        id: "range",
        begriff: "range()",
        bedeutung: "Zahlenbereich erzeugen",
        erklaerung:
            "Erzeugt in Python eine Zahlenfolge und wird häufig zusammen mit for-Schleifen verwendet."
    },
    {
        id: "import",
        begriff: "import",
        bedeutung: "Modul einbinden",
        erklaerung:
            "Bindet in Python Funktionen, Klassen oder andere Inhalte aus einem Modul ein."
    },
    {
        id: "try-except",
        begriff: "try / except",
        bedeutung: "Fehler behandeln",
        erklaerung:
            "Ermöglicht es, mögliche Laufzeitfehler kontrolliert abzufangen und darauf zu reagieren."
    },
    {
        id: "vergleich",
        begriff: "==",
        bedeutung: "Werte vergleichen",
        erklaerung:
            "Der Vergleichsoperator == prüft, ob zwei Werte gleich sind. Er ist nicht mit dem Zuweisungsoperator = zu verwechseln."
    },
    {
        id: "and",
        begriff: "and",
        bedeutung: "Logisches UND",
        erklaerung:
            "Eine zusammengesetzte Bedingung mit and ist nur wahr, wenn beide Teilbedingungen wahr sind."
    },
    {
        id: "or",
        begriff: "or",
        bedeutung: "Logisches ODER",
        erklaerung:
            "Eine zusammengesetzte Bedingung mit or ist wahr, wenn mindestens eine Teilbedingung wahr ist."
    },
    {
        id: "not",
        begriff: "not",
        bedeutung: "Logische Negation",
        erklaerung:
            "Kehrt einen Wahrheitswert beziehungsweise das Ergebnis einer Bedingung um."
    }
]
    },


    datenbanken: {
        titel: "🗄️ SQL & Datenbanken",

     eintraege: [
    {
        id: "select",
        begriff: "SELECT",
        bedeutung: "Daten abfragen",
        erklaerung:
            "Liest ausgewählte Spalten aus einer oder mehreren Tabellen aus."
    },
    {
        id: "from",
        begriff: "FROM",
        bedeutung: "Datenquelle festlegen",
        erklaerung:
            "Legt fest, aus welcher Tabelle oder Datenquelle die Daten einer SQL-Abfrage gelesen werden."
    },
    {
        id: "where",
        begriff: "WHERE",
        bedeutung: "Datensätze filtern",
        erklaerung:
            "Schränkt eine Abfrage auf Datensätze ein, die eine bestimmte Bedingung erfüllen."
    },
    {
        id: "order-by",
        begriff: "ORDER BY",
        bedeutung: "Ergebnisse sortieren",
        erklaerung:
            "Sortiert das Ergebnis einer Abfrage nach einer oder mehreren Spalten."
    },
    {
        id: "group-by",
        begriff: "GROUP BY",
        bedeutung: "Datensätze gruppieren",
        erklaerung:
            "Gruppiert Zeilen mit gleichen Werten, häufig zusammen mit Aggregatfunktionen wie COUNT oder AVG."
    },
    {
        id: "having",
        begriff: "HAVING",
        bedeutung: "Gruppen filtern",
        erklaerung:
            "Filtert gruppierte Ergebnisse nach einer Bedingung und wird typischerweise zusammen mit GROUP BY verwendet."
    },
    {
        id: "distinct",
        begriff: "DISTINCT",
        bedeutung: "Doppelte Ergebnisse entfernen",
        erklaerung:
            "Sorgt dafür, dass identische Werte oder Zeilen im Ergebnis nur einmal ausgegeben werden."
    },
    {
        id: "as",
        begriff: "AS",
        bedeutung: "Alias vergeben",
        erklaerung:
            "Vergibt einer Spalte oder Tabelle innerhalb einer SQL-Abfrage einen vorübergehenden Namen."
    },
    {
        id: "inner-join",
        begriff: "INNER JOIN",
        bedeutung: "Tabellen verknüpfen",
        erklaerung:
            "Verknüpft Datensätze aus zwei Tabellen und gibt nur Datensätze zurück, für die auf beiden Seiten passende Werte vorhanden sind."
    },
    {
        id: "left-join",
        begriff: "LEFT JOIN",
        bedeutung: "Tabellen linksseitig verknüpfen",
        erklaerung:
            "Gibt alle Datensätze der linken Tabelle und passende Datensätze der rechten Tabelle zurück."
    },
    {
        id: "count",
        begriff: "COUNT",
        bedeutung: "Datensätze zählen",
        erklaerung:
            "Aggregatfunktion zum Zählen von Zeilen beziehungsweise nicht leeren Werten."
    },
    {
        id: "sum",
        begriff: "SUM",
        bedeutung: "Werte addieren",
        erklaerung:
            "Aggregatfunktion zur Berechnung der Summe numerischer Werte."
    },
    {
        id: "avg",
        begriff: "AVG",
        bedeutung: "Durchschnitt berechnen",
        erklaerung:
            "Aggregatfunktion zur Berechnung des arithmetischen Mittelwerts numerischer Werte."
    },
    {
        id: "min",
        begriff: "MIN",
        bedeutung: "Kleinsten Wert bestimmen",
        erklaerung:
            "Aggregatfunktion, die den kleinsten Wert einer ausgewählten Spalte ermittelt."
    },
    {
        id: "max",
        begriff: "MAX",
        bedeutung: "Größten Wert bestimmen",
        erklaerung:
            "Aggregatfunktion, die den größten Wert einer ausgewählten Spalte ermittelt."
    },
    {
        id: "insert-into",
        begriff: "INSERT INTO",
        bedeutung: "Datensätze hinzufügen",
        erklaerung:
            "Fügt einer Tabelle einen oder mehrere neue Datensätze hinzu."
    },
    {
        id: "update",
        begriff: "UPDATE",
        bedeutung: "Datensätze ändern",
        erklaerung:
            "Ändert vorhandene Daten in einer Tabelle. Mit WHERE kann festgelegt werden, welche Datensätze betroffen sind."
    },
    {
        id: "delete",
        begriff: "DELETE",
        bedeutung: "Datensätze löschen",
        erklaerung:
            "Löscht Datensätze aus einer Tabelle. Ohne passende WHERE-Bedingung können alle Datensätze betroffen sein."
    },
    {
        id: "create-table",
        begriff: "CREATE TABLE",
        bedeutung: "Tabelle erstellen",
        erklaerung:
            "Erstellt eine neue Tabelle mit den festgelegten Spalten, Datentypen und Einschränkungen."
    },
    {
        id: "alter-table",
        begriff: "ALTER TABLE",
        bedeutung: "Tabellenstruktur ändern",
        erklaerung:
            "Ändert die Struktur einer bestehenden Tabelle, beispielsweise durch Hinzufügen oder Ändern von Spalten."
    },
    {
        id: "drop-table",
        begriff: "DROP TABLE",
        bedeutung: "Tabelle entfernen",
        erklaerung:
            "Löscht eine Tabelle einschließlich ihrer Struktur und der darin enthaltenen Daten."
    },
    {
        id: "primary-key",
        begriff: "PRIMARY KEY",
        bedeutung: "Primärschlüssel",
        erklaerung:
            "Kennzeichnet eine Spalte oder Spaltenkombination, die jeden Datensatz einer Tabelle eindeutig identifiziert."
    },
    {
        id: "foreign-key",
        begriff: "FOREIGN KEY",
        bedeutung: "Fremdschlüssel",
        erklaerung:
            "Stellt eine Beziehung zu einem Schlüssel einer anderen oder derselben Tabelle her."
    },
    {
        id: "not-null",
        begriff: "NOT NULL",
        bedeutung: "Wert erforderlich",
        erklaerung:
            "Legt fest, dass eine Spalte keinen NULL-Wert enthalten darf."
    },
    {
        id: "unique",
        begriff: "UNIQUE",
        bedeutung: "Eindeutige Werte",
        erklaerung:
            "Stellt sicher, dass Werte in der betreffenden Spalte oder Spaltenkombination nicht doppelt vorkommen."
    },
    {
        id: "null",
        begriff: "NULL",
        bedeutung: "Fehlender oder unbekannter Wert",
        erklaerung:
            "Kennzeichnet in einer Datenbank einen nicht vorhandenen beziehungsweise unbekannten Wert und ist nicht dasselbe wie 0 oder ein leerer Text."
    },
    {
        id: "normalisierung",
        begriff: "Normalisierung",
        bedeutung: "Daten sinnvoll strukturieren",
        erklaerung:
            "Verfahren zur strukturierten Aufteilung von Daten, um Redundanzen und typische Änderungsprobleme zu reduzieren."
    },
    {
        id: "erste-normalform",
        begriff: "1. Normalform (1NF)",
        bedeutung: "Atomare Werte",
        erklaerung:
            "Eine Tabelle befindet sich in der ersten Normalform, wenn die Attributwerte atomar sind und keine Wiederholungsgruppen enthalten."
    },
    {
        id: "zweite-normalform",
        begriff: "2. Normalform (2NF)",
        bedeutung: "Keine partiellen Abhängigkeiten",
        erklaerung:
            "Eine Tabelle in 1NF befindet sich in der zweiten Normalform, wenn jedes Nichtschlüsselattribut vollständig vom gesamten Kandidatenschlüssel abhängt."
    },
    {
        id: "dritte-normalform",
        begriff: "3. Normalform (3NF)",
        bedeutung: "Keine transitiven Abhängigkeiten",
        erklaerung:
            "Vereinfacht gesagt sollen Nichtschlüsselattribute nicht über andere Nichtschlüsselattribute voneinander abhängen."
    }
]   
    }
};