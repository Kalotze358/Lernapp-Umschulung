const lf07Fragen = [
    {
        id: "lf07q001",
        frage: "Was kennzeichnet ein cyber-physisches System?",

        antworten: [
            {
                text: "Digitale Verarbeitung ist mit Vorgängen in der physischen Welt verbunden",
                richtig: true
            },
            {
                text: "Es besteht ausschließlich aus einer Textdatei",
                richtig: false
            },
            {
                text: "Es darf keine Sensoren verwenden",
                richtig: false
            },
            {
                text: "Es funktioniert grundsätzlich ohne Hardware",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["cps-grundlagen"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf07q002",
        frage: "Welche Geräte oder Bauteile sind typische Sensoren?",

        antworten: [
            {
                text: "Temperatursensor",
                richtig: true
            },
            {
                text: "Bewegungssensor",
                richtig: true
            },
            {
                text: "Lichtsensor",
                richtig: true
            },
            {
                text: "Relais zur Schaltung einer Lampe",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["sensoren"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf07q003",
        frage: "Welche Aufgabe übernimmt ein Aktor?",

        antworten: [
            {
                text: "Ein Steuersignal in eine physische Wirkung umsetzen",
                richtig: true
            },
            {
                text: "Ausschließlich Messwerte erfassen",
                richtig: false
            },
            {
                text: "Nur IP-Adressen vergeben",
                richtig: false
            },
            {
                text: "Ausschließlich Daten dauerhaft speichern",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["aktoren"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf07q004",
        frage: "Welche Komponenten können als Aktoren eingesetzt werden?",

        antworten: [
            {
                text: "Motor",
                richtig: true
            },
            {
                text: "Relais",
                richtig: true
            },
            {
                text: "Ventil",
                richtig: true
            },
            {
                text: "Temperatursensor",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["aktoren"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf07q005",
        frage: "Was ist ein Mikrocontroller?",

        antworten: [
            {
                text: "Ein kleines Computersystem auf einem Chip mit Prozessor, Speicher und Ein- beziehungsweise Ausgängen",
                richtig: true
            },
            {
                text: "Ein ausschließlich mechanisches Bauteil",
                richtig: false
            },
            {
                text: "Ein Netzwerkprotokoll",
                richtig: false
            },
            {
                text: "Ein reiner Massenspeicher ohne Recheneinheit",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["mikrocontroller"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf07q006",
        frage: "Was beschreibt ein Embedded System am besten?",

        antworten: [
            {
                text: "Ein eingebettetes Computersystem, das in einem Gerät eine bestimmte Aufgabe übernimmt",
                richtig: true
            },
            {
                text: "Einen beliebigen Desktop-PC ohne besondere Aufgabe",
                richtig: false
            },
            {
                text: "Eine ausschließlich cloudbasierte Webseite",
                richtig: false
            },
            {
                text: "Ein analoges Kabel ohne Elektronik",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["embedded-systeme"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf07q007",
        frage: "Welche Aussagen treffen auf das Internet of Things zu?",

        antworten: [
            {
                text: "Geräte können über Netzwerke miteinander kommunizieren",
                richtig: true
            },
            {
                text: "Sensorwerte können übertragen und verarbeitet werden",
                richtig: true
            },
            {
                text: "Geräte können teilweise automatisiert gesteuert werden",
                richtig: true
            },
            {
                text: "IoT-Geräte dürfen grundsätzlich nicht vernetzt sein",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["iot"],
        schwierigkeit: "leicht",
        typ: "multiple-choice"
    },
    {
        id: "lf07q008",
        frage: "Was unterscheidet digitale und analoge Signale?",

        antworten: [
            {
                text: "Digitale Signale besitzen diskrete Zustände, analoge Signale können kontinuierliche Werte annehmen",
                richtig: true
            },
            {
                text: "Analoge Signale können ausschließlich die Werte 0 und 1 annehmen",
                richtig: false
            },
            {
                text: "Digitale Signale sind grundsätzlich mechanisch",
                richtig: false
            },
            {
                text: "Zwischen digitalen und analogen Signalen besteht kein Unterschied",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["digitale-analoge-signale"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf07q009",
        frage: "Welche Zuordnungen bei A/D- und D/A-Wandlern sind korrekt?",

        antworten: [
            {
                text: "ADC – analoges Signal in digitalen Wert umwandeln",
                richtig: true
            },
            {
                text: "DAC – digitalen Wert in analoges Signal umwandeln",
                richtig: true
            },
            {
                text: "ADC – ausschließlich Netzwerkpakete routen",
                richtig: false
            },
            {
                text: "DAC – ausschließlich IP-Adressen vergeben",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["adc-dac"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf07q010",
        frage: "Ein analoger Temperatursensor liefert eine Spannung. Welche Komponente kann diesen Wert für einen Mikrocontroller digital nutzbar machen?",

        antworten: [
            {
                text: "Analog-Digital-Wandler",
                richtig: true
            },
            {
                text: "Digital-Analog-Wandler",
                richtig: false
            },
            {
                text: "Netzteil",
                richtig: false
            },
            {
                text: "Ethernet-Switch",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["sensoren", "adc-dac"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf07q011",
        frage: "Welche Schnittstellen können bei eingebetteten oder cyber-physischen Systemen verwendet werden?",

        antworten: [
            {
                text: "I2C",
                richtig: true
            },
            {
                text: "SPI",
                richtig: true
            },
            {
                text: "UART",
                richtig: true
            },
            {
                text: "JPEG",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["schnittstellen-cps"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf07q012",
        frage: "Wofür steht die Abkürzung GPIO?",

        antworten: [
            {
                text: "General Purpose Input/Output",
                richtig: true
            },
            {
                text: "General Protocol Internet Operation",
                richtig: false
            },
            {
                text: "Global Processor Internal Output",
                richtig: false
            },
            {
                text: "Graphical Peripheral Input Operation",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["gpio"],
        schwierigkeit: "leicht",
        typ: "single-choice"
    },
    {
        id: "lf07q013",
        frage: "Wofür kann ein GPIO-Pin verwendet werden?",

        antworten: [
            {
                text: "Einen digitalen Eingang einlesen",
                richtig: true
            },
            {
                text: "Einen digitalen Ausgang ansteuern",
                richtig: true
            },
            {
                text: "Beispielsweise ein Relais oder eine LED ansteuern",
                richtig: true
            },
            {
                text: "Ausschließlich große Datenbanken speichern",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["gpio", "aktoren", "sensoren"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf07q014",
        frage: "Was unterscheidet eine Regelung grundsätzlich von einer einfachen Steuerung?",

        antworten: [
            {
                text: "Bei einer Regelung wird der tatsächliche Zustand zurückgeführt und mit einem Sollwert verglichen",
                richtig: true
            },
            {
                text: "Eine Steuerung benötigt immer einen Internetzugang",
                richtig: false
            },
            {
                text: "Eine Regelung besitzt grundsätzlich keine Sensoren",
                richtig: false
            },
            {
                text: "Eine Steuerung und eine Regelung sind immer identisch",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["steuerung-regelung"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf07q015",
        frage: "Ein Thermostat misst ständig die Raumtemperatur und schaltet die Heizung abhängig von Soll- und Istwert ein oder aus. Was liegt vor?",

        antworten: [
            {
                text: "Eine Regelung mit Rückkopplung",
                richtig: true
            },
            {
                text: "Eine reine Datensicherung",
                richtig: false
            },
            {
                text: "Eine DNS-Abfrage",
                richtig: false
            },
            {
                text: "Eine reine Netzwerkadressübersetzung",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["steuerung-regelung", "sensoren", "aktoren"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf07q016",
        frage: "Ein Bewegungssensor erkennt eine Person und schaltet automatisch eine Lampe ein. Welche Komponenten sind daran beteiligt?",

        antworten: [
            {
                text: "Ein Sensor zur Erfassung der Bewegung",
                richtig: true
            },
            {
                text: "Eine Steuerungslogik zur Verarbeitung des Zustands",
                richtig: true
            },
            {
                text: "Ein Aktor beziehungsweise geschalteter Ausgang für die Lampe",
                richtig: true
            },
            {
                text: "Zwingend ein öffentlicher DNS-Server",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["automatisierung", "sensoren", "aktoren"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf07q017",
        frage: "Welche Faktoren können die Auswahl einer Funk- oder Netzwerktechnik für ein IoT-Gerät beeinflussen?",

        antworten: [
            {
                text: "Benötigte Reichweite",
                richtig: true
            },
            {
                text: "Zu übertragende Datenmenge",
                richtig: true
            },
            {
                text: "Energiebedarf",
                richtig: true
            },
            {
                text: "Ausschließlich die Farbe des Geräts",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["kommunikation-iot", "iot"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
        id: "lf07q018",
        frage: "Wie funktioniert die Kommunikation bei MQTT grundsätzlich?",

        antworten: [
            {
                text: "Publisher veröffentlichen Nachrichten zu Topics und Subscriber abonnieren Topics",
                richtig: true
            },
            {
                text: "Jeder Teilnehmer benötigt eine eigene öffentliche Webseite",
                richtig: false
            },
            {
                text: "MQTT kann ausschließlich Bilddateien übertragen",
                richtig: false
            },
            {
                text: "Subscriber vergeben automatisch IP-Adressen an Publisher",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["mqtt"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf07q019",
        frage: "Ein Temperatursensor veröffentlicht regelmäßig Werte unter dem MQTT-Topic 'haus/wohnzimmer/temperatur'. Wer sendet in diesem Beispiel die Nachricht?",

        antworten: [
            {
                text: "Der Publisher",
                richtig: true
            },
            {
                text: "Der Subscriber",
                richtig: false
            },
            {
                text: "Der DNS-Resolver",
                richtig: false
            },
            {
                text: "Der DHCP-Client",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["mqtt", "sensoren"],
        schwierigkeit: "mittel",
        typ: "single-choice"
    },
    {
        id: "lf07q020",
        frage: "Welche Maßnahmen können die Sicherheit vernetzter IoT- und CPS-Geräte verbessern?",

        antworten: [
            {
                text: "Standardpasswörter ändern und sichere Zugangsdaten verwenden",
                richtig: true
            },
            {
                text: "Sicherheitsupdates installieren",
                richtig: true
            },
            {
                text: "Kommunikation und Netzwerkzugriffe geeignet absichern",
                richtig: true
            },
            {
                text: "Sicherheitsfunktionen grundsätzlich deaktivieren",
                richtig: false
            }
        ],

        lernfelder: ["lf07"],
        themen: ["cps-sicherheit", "iot"],
        schwierigkeit: "mittel",
        typ: "multiple-choice"
    },
    {
    id: "lf07q021",
    frage: "Ein intelligentes Gewächshaus misst Temperatur und Bodenfeuchtigkeit und steuert abhängig davon Lüfter und Bewässerung. Warum handelt es sich um ein cyber-physisches System?",

    antworten: [
        {
            text: "Sensoren erfassen physische Zustände, die digital verarbeitet werden und anschließend physische Aktionen auslösen",
            richtig: true
        },
        {
            text: "Weil jedes System mit Strom automatisch ein cyber-physisches System ist",
            richtig: false
        },
        {
            text: "Weil ausschließlich Daten gespeichert werden und keine Wechselwirkung mit der Umgebung besteht",
            richtig: false
        },
        {
            text: "Weil cyber-physische Systeme grundsätzlich keinen Mikrocontroller benötigen dürfen",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["cps-grundlagen", "mikrocontroller"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf07q022",
    frage: "Ein Mikrocontroller soll dauerhaft eine festgelegte Steuerungsaufgabe innerhalb einer Maschine übernehmen. Welche Aussagen treffen zu?",

    antworten: [
        {
            text: "Der Mikrocontroller kann Eingänge einlesen und Ausgänge ansteuern",
            richtig: true
        },
        {
            text: "Das System kann als Embedded System ausgeführt sein",
            richtig: true
        },
        {
            text: "Die Software ist typischerweise auf eine konkrete Aufgabe des Geräts ausgerichtet",
            richtig: true
        },
        {
            text: "Ein Embedded System muss grundsätzlich ein vollständiger Desktop-PC sein",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["mikrocontroller", "embedded-systeme"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf07q023",
    frage: "Ein eingebettetes System verarbeitet das kontinuierliche Spannungssignal eines Temperatursensors. Was ist für die digitale Verarbeitung typischerweise erforderlich?",

    antworten: [
        {
            text: "Das analoge Signal muss über einen geeigneten Analog-Digital-Wandler in digitale Werte umgesetzt werden",
            richtig: true
        },
        {
            text: "Das Signal muss zwingend zuerst über DNS aufgelöst werden",
            richtig: false
        },
        {
            text: "Analoge Signale können ausschließlich die Werte 0 und 1 besitzen",
            richtig: false
        },
        {
            text: "Embedded Systems können grundsätzlich keine analogen Sensorwerte verarbeiten",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["embedded-systeme", "digitale-analoge-signale"],
    schwierigkeit: "schwer",
    typ: "single-choice"
},
{
    id: "lf07q024",
    frage: "Ein Sensor liefert einen analogen Messwert, ein anderer nur den Zustand EIN oder AUS. Welche Aussagen sind korrekt?",

    antworten: [
        {
            text: "Der analoge Messwert kann innerhalb eines Bereichs viele unterschiedliche Werte annehmen",
            richtig: true
        },
        {
            text: "EIN und AUS können als zwei digitale Zustände dargestellt werden",
            richtig: true
        },
        {
            text: "Für die Anbindung verschiedener Sensoren können unterschiedliche Schnittstellen erforderlich sein",
            richtig: true
        },
        {
            text: "Analoge und digitale Signale sind technisch immer vollständig identisch",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["digitale-analoge-signale", "schnittstellen-cps"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf07q025",
    frage: "Mehrere Sensoren sollen mit einem Mikrocontroller verbunden und ihre Werte automatisch verarbeitet werden. Welche Überlegungen sind sinnvoll?",

    antworten: [
        {
            text: "Prüfen, welche Schnittstellen die Sensoren und der Mikrocontroller unterstützen",
            richtig: true
        },
        {
            text: "Festlegen, unter welchen Bedingungen bestimmte Aktionen ausgelöst werden",
            richtig: true
        },
        {
            text: "Die Verarbeitung der Sensorwerte kann automatisiert erfolgen",
            richtig: true
        },
        {
            text: "Die verwendete Schnittstelle ist für die technische Planung grundsätzlich bedeutungslos",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["schnittstellen-cps", "automatisierung"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf07q026",
    frage: "Ein System soll bei Überschreiten eines Temperaturgrenzwerts automatisch eine Warnmeldung an eine zentrale IoT-Plattform senden. Welche Komponenten beziehungsweise Abläufe werden benötigt?",

    antworten: [
        {
            text: "Eine automatisierte Auswertung des Messwerts",
            richtig: true
        },
        {
            text: "Eine geeignete Kommunikationsverbindung zur IoT-Plattform",
            richtig: true
        },
        {
            text: "Eine definierte Bedingung, ab der die Meldung ausgelöst wird",
            richtig: true
        },
        {
            text: "Zwingend eine manuelle Bestätigung vor jeder einzelnen Messung",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["automatisierung", "kommunikation-iot"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf07q027",
    frage: "Batteriebetriebene IoT-Sensoren sollen über große Entfernungen nur kleine Messwerte übertragen. Welche Faktoren sollten bei der Auswahl der Kommunikationstechnik besonders berücksichtigt werden?",

    antworten: [
        {
            text: "Reichweite",
            richtig: true
        },
        {
            text: "Energieverbrauch",
            richtig: true
        },
        {
            text: "Benötigte Datenrate beziehungsweise Datenmenge",
            richtig: true
        },
        {
            text: "Ausschließlich die Farbe des Sensorgehäuses",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["kommunikation-iot", "cps-sicherheit"],
    schwierigkeit: "mittel",
    typ: "multiple-choice"
},
{
    id: "lf07q028",
    frage: "Ein vernetztes Zugangssystem steuert elektronische Türschlösser. Welche Maßnahmen sind für einen sicheren Betrieb besonders wichtig?",

    antworten: [
        {
            text: "Kommunikation und Zugänge gegen unberechtigte Nutzung absichern",
            richtig: true
        },
        {
            text: "Sicherheitsupdates für die eingesetzten Komponenten berücksichtigen",
            richtig: true
        },
        {
            text: "Die Auswirkungen einer Manipulation auf den physischen Prozess berücksichtigen",
            richtig: true
        },
        {
            text: "Alle Schutzmechanismen deaktivieren, damit das System schneller reagiert",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["cps-sicherheit", "cps-grundlagen"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf07q029",
    frage: "Ein analoger Helligkeitssensor liefert einen Spannungswert, während eine LED über einen digitalen Pin des Mikrocontrollers geschaltet werden soll. Welche Aussagen sind korrekt?",

    antworten: [
        {
            text: "Der analoge Sensorwert kann über einen Analog-Digital-Wandler digital verarbeitet werden",
            richtig: true
        },
        {
            text: "Ein GPIO-Pin kann zur digitalen Ansteuerung der LED verwendet werden",
            richtig: true
        },
        {
            text: "ADC und GPIO erfüllen dabei unterschiedliche Aufgaben",
            richtig: true
        },
        {
            text: "Ein GPIO-Pin wandelt grundsätzlich jedes analoge Signal automatisch in einen digitalen Messwert um",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["adc-dac", "gpio"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
},
{
    id: "lf07q030",
    frage: "Ein Raumthermostat misst die Temperatur, vergleicht sie mit dem Sollwert und veröffentlicht den aktuellen Messwert zusätzlich per MQTT. Welche Aussagen treffen zu?",

    antworten: [
        {
            text: "Der Vergleich von Ist- und Sollwert mit Rückkopplung ist Bestandteil einer Regelung",
            richtig: true
        },
        {
            text: "Der Temperaturwert kann über ein MQTT-Topic veröffentlicht werden",
            richtig: true
        },
        {
            text: "Ein Subscriber kann das entsprechende Topic abonnieren und die veröffentlichten Werte empfangen",
            richtig: true
        },
        {
            text: "MQTT ersetzt den Sensor und führt die physische Temperaturmessung selbst durch",
            richtig: false
        }
    ],

    lernfelder: ["lf07"],
    themen: ["steuerung-regelung", "mqtt"],
    schwierigkeit: "schwer",
    typ: "multiple-choice"
}
];