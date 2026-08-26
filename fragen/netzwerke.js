const netzwerkFragen = [
    {
        id: "netz001",
        frage: "Wie viele nutzbare Hosts hat ein /24-Netz?",
        antworten: ["252", "254", "255", "256"],
        richtig: 1,

        lernfelder: ["lf03", "lf09"],
        themen: ["ipv4", "subnetting"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "netz002",
        frage: "Wofür steht die Abkürzung DHCP?",
        antworten: [
            "Dynamic Host Configuration Protocol",
            "Domain Host Control Protocol",
            "Dynamic Hardware Connection Process",
            "Data Host Communication Protocol"
        ],
        richtig: 0,

        lernfelder: ["lf03", "lf09", "lf10b"],
        themen: ["dhcp", "netzwerkdienste"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "netz003",
        frage: "Welcher Port wird standardmäßig für HTTPS verwendet?",
        antworten: ["21", "53", "80", "443"],
        richtig: 3,

        lernfelder: ["lf03", "lf09", "lf11b"],
        themen: ["ports", "https", "netzwerkdienste"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "netz004",
        frage: "Welches Protokoll übersetzt Domainnamen in IP-Adressen?",
        antworten: ["DHCP", "DNS", "ARP", "HTTP"],
        richtig: 1,

        lernfelder: ["lf03", "lf09", "lf10b"],
        themen: ["dns", "netzwerkdienste"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
    id: "netz005",
    frage: "Was ist die grundlegende Aufgabe eines Computernetzwerks?",
    antworten: [
        "Geräte miteinander verbinden und Datenaustausch ermöglichen",
        "Nur Dateien auf einem einzelnen PC speichern",
        "Ausschließlich Programme installieren",
        "Die CPU-Leistung eines Computers erhöhen"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["netzwerkgrundlagen"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz006",
    frage: "Welche Netzwerktopologie wird in heutigen Ethernet-LANs häufig verwendet?",
    antworten: [
        "Stern-Topologie",
        "Ring-Topologie",
        "Bus-Topologie",
        "Linien-Topologie"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["netzwerktopologien"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz007",
    frage: "Aus wie vielen Schichten besteht das OSI-Modell?",
    antworten: [
        "4",
        "5",
        "7",
        "8"
    ],
    richtig: 2,

    lernfelder: ["lf03"],
    themen: ["osi-modell"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz008",
    frage: "Welchen Zweck erfüllt das TCP/IP-Modell?",
    antworten: [
        "Es beschreibt die Kommunikation in IP-Netzwerken",
        "Es beschreibt ausschließlich den Aufbau von Computern",
        "Es legt die Größe von Festplatten fest",
        "Es dient nur zur Benutzerverwaltung"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["tcp-ip-modell"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz009",
    frage: "Wofür wird Ethernet hauptsächlich eingesetzt?",
    antworten: [
        "Zur Datenübertragung in lokalen Netzwerken",
        "Zur Verschlüsselung von Passwörtern",
        "Zur Verwaltung von Datenbanken",
        "Zur Erstellung von Webseiten"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["ethernet"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz010",
    frage: "Wozu dient eine MAC-Adresse?",
    antworten: [
        "Zur Identifikation einer Netzwerkschnittstelle im lokalen Netzwerk",
        "Zur Vergabe eines Domainnamens",
        "Zur Verschlüsselung einer Internetverbindung",
        "Zur Speicherung eines Benutzerpassworts"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["mac-adressen"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},
{
    id: "netz011",
    frage: "Welche IPv4-Adresse gehört zum Loopback-Bereich?",
    antworten: [
        "127.0.0.1",
        "192.168.0.1",
        "169.254.0.1",
        "224.0.0.1"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["ipv4"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},

{
    id: "netz012",
    frage: "Wie lang ist eine IPv6-Adresse?",
    antworten: [
        "32 Bit",
        "64 Bit",
        "128 Bit",
        "256 Bit"
    ],
    richtig: 2,

    lernfelder: ["lf03"],
    themen: ["ipv6"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},

{
    id: "netz013",
    frage: "Wie viele nutzbare Hostadressen stehen in einem IPv4-/26-Netz normalerweise zur Verfügung?",
    antworten: [
        "30",
        "62",
        "64",
        "126"
    ],
    richtig: 1,

    lernfelder: ["lf03"],
    themen: ["ipv4", "subnetting"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},

{
    id: "netz014",
    frage: "In welcher Reihenfolge läuft der DHCP-DORA-Prozess ab?",
    antworten: [
        "Discover → Offer → Request → Acknowledge",
        "Discover → Request → Offer → Acknowledge",
        "Offer → Discover → Acknowledge → Request",
        "Request → Offer → Discover → Acknowledge"
    ],
    richtig: 0,

    lernfelder: ["lf03", "lf09", "lf10b"],
    themen: ["dhcp", "netzwerkdienste"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},

{
    id: "netz015",
    frage: "Welcher DNS-Record ordnet einen Hostnamen einer IPv4-Adresse zu?",
    antworten: [
        "A",
        "AAAA",
        "MX",
        "PTR"
    ],
    richtig: 0,

    lernfelder: ["lf03", "lf09", "lf10b"],
    themen: ["dns", "netzwerkdienste"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "netz016",
    frage: "Wann verwendet ein Client sein Standardgateway?",
    antworten: [
        "Wenn das Ziel außerhalb des eigenen lokalen Netzes liegt",
        "Bei jeder Kommunikation mit einem Gerät im gleichen Subnetz",
        "Nur wenn kein DNS-Server erreichbar ist",
        "Nur bei der automatischen Vergabe einer IP-Adresse"
    ],
    richtig: 0,

    lernfelder: ["lf03", "lf09"],
    themen: ["standardgateway"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},

{
    id: "netz017",
    frage: "Welche Aufgabe übernimmt ein Switch hauptsächlich in einem lokalen Netzwerk?",
    antworten: [
        "Er verbindet Geräte innerhalb eines LANs miteinander",
        "Er übersetzt Domainnamen in IP-Adressen",
        "Er vergibt automatisch IP-Adressen",
        "Er verbindet ausschließlich das LAN mit dem Internet"
    ],
    richtig: 0,

    lernfelder: ["lf03", "lf09"],
    themen: ["netzwerkkomponenten"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz018",
    frage: "Welcher wesentliche Unterschied besteht zwischen Kupfer- und Glasfaserkabeln?",
    antworten: [
        "Kupfer überträgt elektrische Signale, Glasfaser Lichtsignale",
        "Kupfer überträgt Lichtsignale, Glasfaser Funksignale",
        "Beide übertragen ausschließlich elektrische Signale",
        "Glasfaser kann nur für WLAN-Verbindungen verwendet werden"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["uebertragungsmedien"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz019",
    frage: "Welche Aufgabe übernimmt ein Access Point in einem WLAN?",
    antworten: [
        "Er ermöglicht drahtlosen Geräten den Zugang zum Netzwerk",
        "Er ersetzt grundsätzlich den DNS-Server",
        "Er speichert die IP-Adressen aller Internetserver",
        "Er verschlüsselt ausschließlich Dateien auf Clients"
    ],
    richtig: 0,

    lernfelder: ["lf03", "lf09"],
    themen: ["wlan", "netzwerkkomponenten"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz020",
    frage: "Mit welchem Befehl kann unter Windows die aktuelle IP-Konfiguration angezeigt werden?",
    antworten: [
        "ipconfig",
        "ping",
        "tracert",
        "nslookup"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["netzwerkbefehle"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
},

{
    id: "netz021",
    frage: "Ein PC erreicht keine Netzwerkressourcen. Was sollte bei einer systematischen Fehlersuche zuerst geprüft werden?",
    antworten: [
        "Die physische Verbindung, zum Beispiel Kabel und Link",
        "Sofort der DNS-Server neu installiert werden",
        "Das Betriebssystem vollständig neu installiert werden",
        "Direkt die Firewall des gesamten Netzwerks deaktiviert werden"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["fehlersuche"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},

{
    id: "netz022",
    frage: "Welche Information gehört typischerweise in eine Netzwerkdokumentation?",
    antworten: [
        "IP-Adressen, Geräte und Netzwerkverbindungen",
        "Nur die Passwörter aller Benutzer",
        "Ausschließlich die Kaufpreise der Computer",
        "Nur die Namen der installierten Programme"
    ],
    richtig: 0,

    lernfelder: ["lf03"],
    themen: ["netzwerkdokumentation"],
    schwierigkeit: "leicht",
    typ: "multiple-choice"
}
];