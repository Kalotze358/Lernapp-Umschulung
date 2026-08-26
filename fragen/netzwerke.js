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
    }
];