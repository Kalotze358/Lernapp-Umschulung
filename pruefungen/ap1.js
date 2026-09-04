const ap1Pruefungsfragen = [

    {
        id: "ap1-hw-001",

        bereich: "hardware",
        thema: "auswahl",

        titel: "Arbeitsplatz-PC auswählen",

        typ: "offen",
        punkte: 6,

        situation: `
            Ein Unternehmen benötigt einen neuen Arbeitsplatz-PC
            für einen Mitarbeiter im Büro.

            Der Mitarbeiter nutzt hauptsächlich Office-Anwendungen,
            einen Webbrowser, Videokonferenzen und zwei QHD-Monitore.

            Das Budget beträgt maximal 800 Euro.
        `,

        aufgabe: `
            Entscheide, welches der beiden Systeme besser geeignet ist
            und begründe deine Entscheidung anhand von drei Kriterien.
        `,

        systeme: [
            {
                name: "System A",
                daten: [
                    "6-Core-Prozessor",
                    "16 GB RAM",
                    "512 GB NVMe-SSD",
                    "integrierte Grafikeinheit",
                    "2 × DisplayPort",
                    "3 Jahre Vor-Ort-Service",
                    "749 €"
                ]
            },

            {
                name: "System B",
                daten: [
                    "12-Core-Prozessor",
                    "32 GB RAM",
                    "1 TB NVMe-SSD",
                    "dedizierte Grafikkarte",
                    "2 × HDMI",
                    "1 Jahr Bring-in-Service",
                    "1.099 €"
                ]
            }
        ],

        musterloesung: `
            System A ist für den beschriebenen Arbeitsplatz besser geeignet.

            Mögliche Begründungen:

            • Der Preis von 749 € liegt innerhalb des Budgets von 800 €.
            • 16 GB RAM und der 6-Core-Prozessor reichen für die genannten
              Büroanwendungen aus.
            • Die integrierte Grafikeinheit ist für Office und
              Videokonferenzen ausreichend.
            • Zwei DisplayPort-Anschlüsse ermöglichen den Anschluss
              der beiden QHD-Monitore.
            • Der dreijährige Vor-Ort-Service ist für ein Unternehmen
              vorteilhafter.

            System B bietet zwar mehr Leistung, diese wird für den
            beschriebenen Einsatzzweck jedoch nicht benötigt und das
            System überschreitet das Budget.
        `
        },
    {
        id: "ap1-hw-002",

        bereich: "hardware",
        thema: "auswahl",

        titel: "Mobiles Arbeitsgerät auswählen",

        typ: "offen",
        punkte: 6,

        situation: `
            Für einen Mitarbeiter im technischen Außendienst
            soll ein neues Notebook beschafft werden.

            Der Mitarbeiter nutzt regelmäßig virtuelle Maschinen,
            arbeitet unterwegs und verwendet am Büroarbeitsplatz
            eine USB-C-Dockingstation mit zwei QHD-Monitoren.

            Das Budget beträgt maximal 1.200 Euro.
        `,

        aufgabe: `
            Wähle das besser geeignete Notebook aus und begründe
            deine Entscheidung anhand von drei technischen Kriterien.
        `,

        systeme: [
            {
                name: "Notebook A",
                daten: [
                    "8-Core-Prozessor",
                    "32 GB RAM",
                    "1 TB NVMe-SSD",
                    "Thunderbolt 4 / USB-C mit DisplayPort",
                    "ca. 9 Stunden Akkulaufzeit",
                    "1.149 €"
                ]
            },

            {
                name: "Notebook B",
                daten: [
                    "12-Core-Prozessor",
                    "32 GB RAM",
                    "1 TB NVMe-SSD",
                    "USB-C 3.2 nur für Datenübertragung",
                    "ca. 6 Stunden Akkulaufzeit",
                    "999 €"
                ]
            }
        ],

        musterloesung: `
            Notebook A ist insgesamt besser geeignet.

            Mögliche Begründungen:

            • 32 GB RAM sind für den Betrieb virtueller Maschinen geeignet.
            • Thunderbolt 4 bzw. DisplayPort über USB-C ermöglicht die
              vorgesehene Nutzung der Dockingstation und der Monitore.
            • Die längere Akkulaufzeit ist für den Außendienst vorteilhaft.
            • Mit 1.149 € bleibt das Gerät innerhalb des Budgets.

            Notebook B besitzt zwar den leistungsfähigeren Prozessor
            und ist günstiger, erfüllt aber die Anforderungen an die
            vorhandene USB-C-Dockingstation nicht vollständig.
        `
    },


    {
        id: "ap1-hw-003",

        bereich: "hardware",
        thema: "auswahl",

        titel: "Leistungsengpass beurteilen",

        typ: "offen",
        punkte: 5,

        situation: `
            Ein Arbeitsplatz-PC reagiert bei mehreren gleichzeitig
            geöffneten Anwendungen zunehmend langsam.

            Der Administrator ermittelt während der Probleme
            die folgenden Auslastungswerte.
        `,

        aufgabe: `
            Bestimme den wahrscheinlichsten Leistungsengpass und
            nenne zwei geeignete Maßnahmen zur Verbesserung.
            Begründe deine Entscheidung kurz.
        `,

        systeme: [
            {
                name: "Gemessene Systemauslastung",
                daten: [
                    "CPU: 38 %",
                    "Arbeitsspeicher: 94 %",
                    "SSD: 22 %",
                    "Netzwerk: 8 %",
                    "Mehrere Anwendungen gleichzeitig geöffnet"
                ]
            }
        ],

        musterloesung: `
            Der wahrscheinlichste Engpass ist der Arbeitsspeicher.

            Begründung:

            • Der RAM ist mit 94 % nahezu vollständig ausgelastet.
            • CPU, SSD und Netzwerk weisen dagegen noch deutliche
              Leistungsreserven auf.

            Geeignete Maßnahmen sind zum Beispiel:

            • Arbeitsspeicher erweitern.
            • Nicht benötigte Anwendungen oder Dienste schließen.
            • Speicherintensive Anwendungen untersuchen und optimieren.
            • Bei ungewöhnlich hohem Verbrauch auf Memory Leaks prüfen.

            Für die volle Punktzahl müssen der RAM als Engpass erkannt,
            die Entscheidung begründet und zwei sinnvolle Maßnahmen
            genannt werden.
        `
    },
    {
    id: "ap1-hw-004",

    bereich: "hardware",
    thema: "schnittstellen",

    titel: "USB-Stromversorgung beurteilen",

    typ: "offen",
    punkte: 5,

    situation: `
        Ein externes Gerät benötigt eine Versorgungsspannung
        von 5 V und eine Stromstärke von 1,8 A.

        Der verwendete USB-Anschluss kann maximal
        5 V bei 0,9 A bereitstellen.
    `,

    aufgabe: `
        Berechne die benötigte Leistung des Geräts und die
        maximal verfügbare Leistung des USB-Anschlusses.

        Beurteile anschließend, ob das Gerät zuverlässig
        über diesen Anschluss versorgt werden kann.
    `,

    systeme: [
        {
            name: "Technische Daten",
            daten: [
                "Gerät: 5 V / 1,8 A",
                "USB-Anschluss: 5 V / maximal 0,9 A",
                "Formel: P = U × I"
            ]
        }
    ],

    musterloesung: `
        Benötigte Leistung des Geräts:

        P = U × I
        P = 5 V × 1,8 A
        P = 9 W

        Maximal verfügbare Leistung:

        P = 5 V × 0,9 A
        P = 4,5 W

        Der USB-Anschluss kann das Gerät nicht zuverlässig
        versorgen, da nur maximal 4,5 W zur Verfügung stehen,
        das Gerät jedoch 9 W benötigt.

        Es muss eine leistungsfähigere Stromversorgung bzw.
        ein geeigneter Anschluss verwendet werden.
    `
},


{
    id: "ap1-hw-005",

    bereich: "hardware",
    thema: "schnittstellen",

    titel: "Dockingstation anschließen",

    typ: "offen",
    punkte: 5,

    situation: `
        Ein Notebook soll an einer vorhandenen USB-C-Dockingstation
        betrieben werden.

        Über ein einziges Kabel sollen Daten übertragen,
        zwei Monitore angeschlossen und das Notebook geladen werden.

        Das Notebook besitzt zwei USB-C-Anschlüsse.
    `,

    aufgabe: `
        Entscheide, welcher Anschluss für die Dockingstation
        geeignet ist und begründe deine Entscheidung anhand
        der angegebenen Eigenschaften.
    `,

    systeme: [
        {
            name: "USB-C-Anschluss 1",
            daten: [
                "USB 3.2",
                "Datenübertragung",
                "keine Bildausgabe",
                "kein Power Delivery"
            ]
        },

        {
            name: "USB-C-Anschluss 2",
            daten: [
                "USB 3.2",
                "DisplayPort Alt Mode",
                "USB Power Delivery",
                "Datenübertragung"
            ]
        }
    ],

    musterloesung: `
        Anschluss 2 ist geeignet.

        Er unterstützt:

        • Datenübertragung über USB.
        • Bildausgabe über DisplayPort Alt Mode.
        • Stromversorgung über USB Power Delivery.

        Damit können die benötigten Funktionen grundsätzlich
        über eine gemeinsame USB-C-Verbindung bereitgestellt werden.

        Anschluss 1 reicht nicht aus, da weder Bildausgabe
        noch Power Delivery unterstützt werden.
    `
},


{
    id: "ap1-hw-006",

    bereich: "hardware",
    thema: "schnittstellen",

    titel: "Monitoranschlüsse planen",

    typ: "offen",
    punkte: 4,

    situation: `
        An einem Büro-PC sollen zwei vorhandene QHD-Monitore
        digital angeschlossen werden.

        Jeder Monitor besitzt jeweils einen HDMI-
        und einen DisplayPort-Eingang.
    `,

    aufgabe: `
        Nenne zwei geeignete Anschlussmöglichkeiten für die
        Monitore und erläutere einen Vorteil einer digitalen
        Bildübertragung gegenüber einer analogen Verbindung.
    `,

    systeme: [
        {
            name: "PC-Anschlüsse",
            daten: [
                "2 × DisplayPort",
                "1 × HDMI",
                "1 × USB-A"
            ]
        }
    ],

    musterloesung: `
        Geeignete Lösungen sind zum Beispiel:

        • Beide Monitore über DisplayPort anschließen.
        • Einen Monitor über DisplayPort und den zweiten über HDMI
          anschließen.

        Ein Vorteil der digitalen Übertragung ist beispielsweise,
        dass das Bildsignal ohne eine zusätzliche Digital-Analog-
        und Analog-Digital-Wandlung übertragen wird.

        USB-A ist in der angegebenen Konfiguration kein
        geeigneter direkter Monitoranschluss.
    `
}
];