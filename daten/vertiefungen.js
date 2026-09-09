const vertiefungen = {
    subnetting: {
        id: "subnetting",
        titel: "Subnetting",
        untertitel: "IPv4-Netze verstehen, berechnen und aufteilen",

        abschnitte: [
            {
                id: "ipv4-grundlagen",
                titel: "1. IPv4-Grundlagen",

                texte: [
                    "Eine IPv4-Adresse besteht aus 32 Bit. Zur besseren Lesbarkeit werden diese 32 Bit in vier Gruppen mit jeweils 8 Bit aufgeteilt. Eine solche Gruppe nennt man Oktett.",

                    "Jedes Oktett kann einen Wert zwischen 0 und 255 besitzen. Eine typische IPv4-Adresse sieht zum Beispiel so aus: 192.168.10.25.",

                    "Eine IP-Adresse besteht logisch aus einem Netzanteil und einem Hostanteil. Der Netzanteil beschreibt, zu welchem Netzwerk die Adresse gehört. Der Hostanteil kennzeichnet ein einzelnes Gerät innerhalb dieses Netzes."
                ],

                liste: [
                    "IPv4-Adresse: 32 Bit",
                    "4 Oktette mit jeweils 8 Bit",
                    "Werte pro Oktett: 0 bis 255",
                    "Netzanteil: identifiziert das Netzwerk",
                    "Hostanteil: identifiziert ein Gerät innerhalb des Netzwerks"
                ],

                beispiel: {
                    titel: "Beispiel",
                    text: "192.168.10.25 ist eine IPv4-Adresse. Welche Bits zum Netz und welche zum Host gehören, lässt sich erst zusammen mit der Subnetzmaske beziehungsweise der CIDR-Präfixlänge eindeutig bestimmen."
                },

                merksatz:
                    "IPv4 = 32 Bit = 4 Oktette mit jeweils 8 Bit."
            },
            {
                id: "netzklassen",
                titel: "2. Klassische Netzklassen",

                texte: [
                    "Früher wurden IPv4-Netze in feste Adressklassen eingeteilt. Für normale Host-Netzwerke waren vor allem die Klassen A, B und C wichtig.",

                    "Die Netzklasse wurde anhand des ersten Oktetts bestimmt. Gleichzeitig war damit eine Standard-Subnetzmaske festgelegt.",

                    "Heute wird diese starre Einteilung weitgehend durch CIDR ersetzt. Für das Verständnis älterer Netzwerkmodelle und für Prüfungsaufgaben können die Netzklassen trotzdem wichtig sein."
                ],

                tabelle: [
                    {
                        klasse: "A",
                        bereich: "1 – 126",
                        cidr: "/8",
                        maske: "255.0.0.0"
                    },
                    {
                        klasse: "B",
                        bereich: "128 – 191",
                        cidr: "/16",
                        maske: "255.255.0.0"
                    },
                    {
                        klasse: "C",
                        bereich: "192 – 223",
                        cidr: "/24",
                        maske: "255.255.255.0"
                    }
                ],

                hinweis:
                    "Wichtig: Netzklassen und private IP-Adressbereiche sind nicht dasselbe. Die privaten IPv4-Bereiche sind 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16.",

                merksatz:
                    "Klasse A = /8, Klasse B = /16, Klasse C = /24."
            },
            {
                id: "netz-hostanteil",
                titel: "3. Netz- und Hostanteil",

                texte: [
                    "Jede IPv4-Adresse besteht aus einem Netzanteil und einem Hostanteil. Der Netzanteil beschreibt das Netzwerk, während der Hostanteil ein bestimmtes Gerät innerhalb dieses Netzwerks kennzeichnet.",

                    "Welche Bits zum Netz und welche zum Host gehören, wird durch die Subnetzmaske beziehungsweise die CIDR-Präfixlänge festgelegt.",

                    "In der binären Subnetzmaske stehen die Bits mit dem Wert 1 für den Netzanteil. Die Bits mit dem Wert 0 gehören zum Hostanteil."
                ],

                liste: [
                    "Netzanteil: identifiziert das Netzwerk",
                    "Hostanteil: identifiziert ein Gerät innerhalb des Netzwerks",
                    "1-Bits der Subnetzmaske = Netzanteil",
                    "0-Bits der Subnetzmaske = Hostanteil",
                    "Alle Geräte im gleichen Subnetz besitzen denselben Netzanteil"
                ],

                beispiel: {
                    titel: "Beispiel mit /24",
                    text: "Bei 192.168.1.34/24 gehören die ersten 24 Bit zum Netz und die letzten 8 Bit zum Host. Vereinfacht betrachtet ist 192.168.1 der Netzbereich und 34 der Hostanteil."
                },

                hinweis:
                    "Diese Trennung liegt nicht immer genau zwischen zwei Oktetten. Bei einem Präfix wie /26 liegen beispielsweise auch innerhalb des letzten Oktetts sowohl Netz- als auch Hostbits.",

                merksatz:
                    "Die Subnetzmaske entscheidet, wo der Netzanteil endet und der Hostanteil beginnt."
            },
            {
                id: "cidr",
                titel: "4. CIDR-Schreibweise",

                texte: [
                    "CIDR steht für Classless Inter-Domain Routing. Mit CIDR können Netzgrößen wesentlich flexibler festgelegt werden als mit den früheren festen Netzklassen.",

                    "Die Zahl hinter dem Schrägstrich gibt an, wie viele der insgesamt 32 Bit einer IPv4-Adresse zum Netzanteil gehören.",

                    "Ein Präfix /24 bedeutet daher, dass 24 Bit zum Netzanteil und die verbleibenden 8 Bit zum Hostanteil gehören."
                ],

                liste: [
                    "/8  = 8 Netzbits und 24 Hostbits",
                    "/16 = 16 Netzbits und 16 Hostbits",
                    "/24 = 24 Netzbits und 8 Hostbits",
                    "/25 = 25 Netzbits und 7 Hostbits",
                    "/26 = 26 Netzbits und 6 Hostbits",
                    "/27 = 27 Netzbits und 5 Hostbits",
                    "/28 = 28 Netzbits und 4 Hostbits",
                    "/29 = 29 Netzbits und 3 Hostbits",
                    "/30 = 30 Netzbits und 2 Hostbits"
                ],

                beispiel: {
                    titel: "Beispiel: 192.168.10.50/26",
                    text: "Das Präfix /26 bedeutet: 26 Bit gehören zum Netz und 6 Bit bleiben für Hosts übrig. Die zugehörige Subnetzmaske lautet 255.255.255.192."
                },

                hinweis:
                    "Je größer die Zahl hinter dem Schrägstrich wird, desto größer wird der Netzanteil und desto kleiner wird der Hostanteil. Dadurch entstehen kleinere Subnetze mit weniger möglichen Hostadressen.",

                merksatz:
                    "Die CIDR-Zahl sagt direkt, wie viele der 32 IPv4-Bits zum Netz gehören."
            },
            {
                id: "subnetzmaske",
                titel: "5. Subnetzmaske berechnen",

                texte: [
                    "Eine Subnetzmaske besteht wie eine IPv4-Adresse aus 32 Bit. Die Netzbits stehen dabei auf 1 und die Hostbits auf 0.",

                    "Um aus einer CIDR-Angabe die Subnetzmaske zu bestimmen, werden von links so viele Bits auf 1 gesetzt, wie die Zahl hinter dem Schrägstrich angibt.",

                    "Für die Umrechnung eines binären Oktetts in eine Dezimalzahl werden die Bitwerte 128, 64, 32, 16, 8, 4, 2 und 1 verwendet."
                ],

                liste: [
                    "Bit 1 = 128",
                    "Bit 2 = 64",
                    "Bit 3 = 32",
                    "Bit 4 = 16",
                    "Bit 5 = 8",
                    "Bit 6 = 4",
                    "Bit 7 = 2",
                    "Bit 8 = 1"
                ],

                beispiel: {
                    titel: "Beispiel: /26",
                    text: "/26 bedeutet 26 Netzbits. Die ersten drei Oktette enthalten jeweils 8 Netzbits und ergeben deshalb 255. Im vierten Oktett bleiben noch 2 Netzbits: 11000000. Die gesetzten Bits haben die Werte 128 und 64. 128 + 64 = 192. Die Subnetzmaske lautet daher 255.255.255.192."
                },

                hinweis:
                    "Volle Oktette mit acht gesetzten Bits ergeben immer 255. Bei /24 sind deshalb die ersten drei Oktette 255 und das letzte Oktett 0.",

                merksatz:
                    "CIDR-Bits von links auf 1 setzen und die gesetzten Bitwerte jedes Oktetts addieren."
            },
            {
                id: "netzadresse",
                titel: "6. Netzadresse bestimmen",

                texte: [
                    "Die Netzadresse bezeichnet das gesamte Subnetz und nicht einen einzelnen Host. Sie ist die erste Adresse eines Subnetzes.",

                    "Technisch erhält man die Netzadresse durch eine bitweise UND-Verknüpfung von IP-Adresse und Subnetzmaske. Für viele typische Prüfungsaufgaben lässt sie sich aber auch schnell über die Blockgröße bestimmen.",

                    "Die Blockgröße ergibt sich im interessanten Oktett aus 256 minus dem Wert der Subnetzmaske."
                ],

                liste: [
                    "Subnetzmaske bestimmen",
                    "Das Oktett finden, in dem die Maske nicht 255 und nicht 0 ist",
                    "Blockgröße berechnen: 256 - Maskenwert",
                    "Subnetzgrenzen in Schritten der Blockgröße auflisten",
                    "Prüfen, in welchem Bereich die gegebene IP-Adresse liegt",
                    "Die erste Adresse dieses Bereichs ist die Netzadresse"
                ],

                beispiel: {
                    titel: "Beispiel: 192.168.10.130/26",
                    text: "/26 entspricht 255.255.255.192. Die Blockgröße beträgt 256 - 192 = 64. Die Subnetze beginnen daher bei 0, 64, 128 und 192. Die Adresse 130 liegt im Bereich 128 bis 191. Die Netzadresse lautet somit 192.168.10.128."
                },

                hinweis:
                    "Die Netzadresse selbst darf einem normalen Host nicht zugewiesen werden, weil sie das gesamte Subnetz bezeichnet.",

                merksatz:
                    "Die Netzadresse ist immer die erste Adresse des jeweiligen Subnetzes."
            },
            {
                id: "broadcast",
                titel: "7. Broadcastadresse bestimmen",

                texte: [
                    "Die Broadcastadresse ist die letzte Adresse eines Subnetzes. Sie wird verwendet, um alle Hosts innerhalb dieses Subnetzes gleichzeitig anzusprechen.",

                    "Wenn die Netzadresse und die Blockgröße bekannt sind, lässt sich die Broadcastadresse sehr einfach bestimmen.",

                    "Dazu nimmt man die nächste Netzadresse und zieht 1 ab. Alternativ kann man zur Netzadresse die Blockgröße minus 1 addieren."
                ],

                liste: [
                    "Netzadresse bestimmen",
                    "Blockgröße kennen",
                    "Nächste Netzadresse ermitteln",
                    "Von der nächsten Netzadresse 1 abziehen",
                    "Das Ergebnis ist die Broadcastadresse"
                ],

                beispiel: {
                    titel: "Beispiel: 192.168.10.130/26",
                    text: "Die Netzadresse lautet 192.168.10.128 und die Blockgröße beträgt 64. Das nächste Subnetz beginnt bei 192.168.10.192. Daher lautet die Broadcastadresse 192.168.10.191."
                },

                hinweis:
                    "Auch die Broadcastadresse darf normalerweise keinem Host zugewiesen werden, da sie für die Kommunikation mit allen Hosts des Subnetzes reserviert ist.",

                merksatz:
                    "Broadcastadresse = letzte Adresse des Subnetzes."
            },
            {
                id: "hostbereich",
                titel: "8. Hostbereich bestimmen",

                texte: [
                    "Der nutzbare Hostbereich liegt zwischen der Netzadresse und der Broadcastadresse.",

                    "Da die Netzadresse das Subnetz selbst bezeichnet und die Broadcastadresse für alle Hosts des Subnetzes reserviert ist, können diese beiden Adressen nicht als normale Hostadressen verwendet werden.",

                    "Die erste nutzbare Hostadresse erhält man daher, indem man zur Netzadresse 1 addiert. Die letzte nutzbare Hostadresse erhält man, indem man von der Broadcastadresse 1 abzieht."
                ],

                liste: [
                    "Erster Host = Netzadresse + 1",
                    "Letzter Host = Broadcastadresse - 1",
                    "Netzadresse gehört nicht zum normalen Hostbereich",
                    "Broadcastadresse gehört nicht zum normalen Hostbereich"
                ],

                beispiel: {
                    titel: "Beispiel: 192.168.10.130/26",
                    text: "Die Netzadresse lautet 192.168.10.128 und die Broadcastadresse 192.168.10.191. Der erste nutzbare Host ist deshalb 192.168.10.129. Der letzte nutzbare Host ist 192.168.10.190."
                },

                hinweis:
                    "Ob eine konkrete IP-Adresse als Hostadresse geeignet ist, hängt also nicht nur davon ab, ob sie innerhalb des Zahlenbereichs liegt. Netz- und Broadcastadresse sind ausgeschlossen.",

                merksatz:
                    "Hostbereich = von Netzadresse + 1 bis Broadcastadresse - 1."
            },
            {
                id: "hostanzahl",
                titel: "9. Anzahl der Hosts berechnen",

                texte: [
                    "Die Anzahl der möglichen Adressen eines Subnetzes hängt davon ab, wie viele Bits für den Hostanteil übrig bleiben.",

                    "Ein einzelnes Bit kann zwei Zustände besitzen: 0 oder 1. Deshalb ergibt sich die Anzahl aller möglichen Adressen aus 2 hoch der Anzahl der Hostbits.",

                    "Bei klassischen IPv4-Subnetzen werden anschließend zwei Adressen abgezogen: die Netzadresse und die Broadcastadresse."
                ],

                liste: [
                    "Hostbits bestimmen: 32 - CIDR-Präfix",
                    "Gesamtzahl der Adressen: 2^Hostbits",
                    "Nutzbare Hostadressen: 2^Hostbits - 2"
                ],

                beispiel: {
                    titel: "Beispiel: /26",
                    text: "/26 besitzt 26 Netzbits. Damit bleiben 32 - 26 = 6 Hostbits. 2^6 ergibt 64 mögliche Adressen. Netz- und Broadcastadresse werden abgezogen: 64 - 2 = 62 nutzbare Hostadressen."
                },

                hinweis:
                    "Die Formel 2^Hostbits - 2 ist die klassische Berechnung für normale IPv4-Subnetze. Sonderfälle wie /31-Punkt-zu-Punkt-Netze und /32-Adressen werden später getrennt betrachtet.",

                merksatz:
                    "Nutzbare Hosts = 2^(32 - Präfixlänge) - 2."
            },
            {
                id: "subnetze-aufteilen",
                titel: "10. Netz in Subnetze aufteilen",

                texte: [
                    "Beim Subnetting wird ein vorhandenes Netzwerk in mehrere kleinere Subnetze unterteilt. Dafür werden Bits aus dem bisherigen Hostanteil für den Netzanteil verwendet.",

                    "Je mehr Hostbits zu Netzbits werden, desto mehr Subnetze entstehen. Gleichzeitig besitzt jedes einzelne Subnetz weniger mögliche Hostadressen.",

                    "Soll ein Netzwerk in gleich große Subnetze aufgeteilt werden, muss zunächst ermittelt werden, wie viele zusätzliche Netzbits benötigt werden."
                ],

                liste: [
                    "Benötigte Anzahl der Subnetze bestimmen",
                    "Ermitteln, wie viele zusätzliche Netzbits benötigt werden",
                    "Die Präfixlänge um diese Bits erhöhen",
                    "Neue Subnetzmaske bestimmen",
                    "Blockgröße berechnen",
                    "Netzadressen der neuen Subnetze auflisten",
                    "Broadcast- und Hostbereiche bestimmen"
                ],

                beispiel: {
                    titel: "Beispiel: 192.168.10.0/24 in 4 gleich große Subnetze aufteilen",
                    text: "Für 4 Subnetze werden 2 zusätzliche Netzbits benötigt, denn 2^2 = 4. Aus /24 wird deshalb /26. Ein /26-Netz besitzt eine Blockgröße von 64 Adressen. Die vier Netzadressen lauten 192.168.10.0, 192.168.10.64, 192.168.10.128 und 192.168.10.192."
                },

                hinweis:
                    "Beim Aufteilen eines Netzes gilt ein Tausch: Mehr Subnetze bedeuten weniger Hostadressen pro Subnetz. Werden beispielsweise zwei zusätzliche Netzbits verwendet, entstehen viermal so viele Netze, aber jedes davon besitzt nur noch ein Viertel des ursprünglichen Adressraums.",

                merksatz:
                    "Bits vom Hostanteil ausleihen = mehr Subnetze, aber weniger Hosts pro Subnetz."
            },
            {
                id: "uebungen",
                titel: "11. Übungsaufgaben",

                texte: [
                    "Berechne die folgenden Subnetting-Aufgaben selbst. Trage deine Ergebnisse in die Felder ein und prüfe anschließend deine Antworten.",

                    "Falls du nicht weiterkommst, kannst du dir die Lösung anzeigen lassen. Versuche die Aufgabe aber möglichst zuerst ohne Hilfe zu lösen."
                ],

                uebungen: [
                    {
                        titel: "Aufgabe 1",
                        aufgabe: "Gegeben ist die IP-Adresse 192.168.20.70/26.",

                        felder: [
                            {
                                label: "Subnetzmaske",
                                antwort: "255.255.255.192"
                            },
                            {
                                label: "Netzadresse",
                                antwort: "192.168.20.64"
                            },
                            {
                                label: "Broadcastadresse",
                                antwort: "192.168.20.127"
                            },
                            {
                                label: "Erster Host",
                                antwort: "192.168.20.65"
                            },
                            {
                                label: "Letzter Host",
                                antwort: "192.168.20.126"
                            },
                            {
                                label: "Nutzbare Hosts",
                                antwort: "62"
                            }
                        ]
                    },

                    {
                        titel: "Aufgabe 2",
                        aufgabe: "Gegeben ist die IP-Adresse 10.10.5.200/27.",

                        felder: [
                            {
                                label: "Subnetzmaske",
                                antwort: "255.255.255.224"
                            },
                            {
                                label: "Netzadresse",
                                antwort: "10.10.5.192"
                            },
                            {
                                label: "Broadcastadresse",
                                antwort: "10.10.5.223"
                            },
                            {
                                label: "Erster Host",
                                antwort: "10.10.5.193"
                            },
                            {
                                label: "Letzter Host",
                                antwort: "10.10.5.222"
                            },
                            {
                                label: "Nutzbare Hosts",
                                antwort: "30"
                            }
                        ]
                    },

                    {
                        titel: "Aufgabe 3",
                        aufgabe: "Das Netzwerk 192.168.50.0/24 soll in 8 gleich große Subnetze aufgeteilt werden.",

                        felder: [
                            {
                                label: "Neue CIDR-Präfixlänge",
                                antwort: "/27"
                            },
                            {
                                label: "Neue Subnetzmaske",
                                antwort: "255.255.255.224"
                            },
                            {
                                label: "Blockgröße",
                                antwort: "32"
                            },
                            {
                                label: "Netzadresse des 4. Subnetzes",
                                antwort: "192.168.50.96"
                            },
                            {
                                label: "Broadcastadresse des 4. Subnetzes",
                                antwort: "192.168.50.127"
                            }
                        ]
                    }
                ],

                merksatz:
                    "Subnetting lernt man am besten durch Rechnen – nicht durch Auswendiglernen."
            },
            {
                id: "zufall",
                titel: "12. Zufällige Subnetting-Aufgabe",

                texte: [
                    "Hier kannst du beliebig viele neue Subnetting-Aufgaben erzeugen. Die IP-Adresse und die CIDR-Präfixlänge werden bei jeder Aufgabe zufällig gewählt.",

                    "Berechne Subnetzmaske, Netzadresse, Broadcastadresse, Hostbereich und die Anzahl der nutzbaren Hosts möglichst ohne Hilfe."
                ],

                zufallsGenerator: true,

                merksatz:
                    "Je öfter du unterschiedliche Adressen berechnest, desto sicherer wirst du beim Subnetting."
            },
            {
                id: "rechner",
                titel: "13. Subnetting-Rechner",

                texte: [
                    "Mit dem Subnetting-Rechner kannst du eine IPv4-Adresse und eine CIDR-Präfixlänge eingeben und die wichtigsten Netzwerkinformationen automatisch berechnen lassen.",

                    "Zusätzlich zeigt der Rechner einen kurzen Rechenweg an. Dadurch eignet er sich nicht nur zum Kontrollieren, sondern auch zum Nachvollziehen einer Aufgabe."
                ],

                subnetzRechner: true,

                hinweis:
                    "In der ersten Version unterstützt der Rechner Präfixlängen von /8 bis /30. Die Sonderfälle /31 und /32 behandeln wir später getrennt.",

                merksatz:
                    "Den Rechner am besten zum Kontrollieren verwenden – zuerst selbst rechnen."
            },
        ]
    },
    "osi-modell": {

    titel:
        "OSI-Modell – die 7 Schichten verstehen",

    untertitel:
        "Vom Netzwerkkabel bis zur Anwendung: Das OSI-Modell zerlegt die Netzwerkkommunikation in sieben klar definierte Schichten.",

    abschnitte: [

        {
            id: "osi-grundlagen",

            titel:
                "1. Was ist das OSI-Modell?",

            texte: [
                "Das OSI-Modell ist ein Referenzmodell für die Kommunikation in Netzwerken.",
                "Es unterteilt den gesamten Kommunikationsvorgang in sieben Schichten. Jede Schicht übernimmt bestimmte Aufgaben und stellt ihre Dienste der darüberliegenden Schicht zur Verfügung.",
                "Das Modell hilft vor allem dabei, Netzwerkfunktionen zu verstehen und Fehler systematisch einzugrenzen."
            ],

            liste: [
                "Layer 7 – Anwendung",
                "Layer 6 – Darstellung",
                "Layer 5 – Sitzung",
                "Layer 4 – Transport",
                "Layer 3 – Vermittlung",
                "Layer 2 – Sicherung",
                "Layer 1 – Bitübertragung"
            ],

            merksatz:
                "Alle Deutschen Studenten Trinken Verschiedene Sorten Bier."
        },


        {
            id: "osi-layer7",

            titel:
                "2. Layer 7 – Anwendungsschicht",

            texte: [
                "Die Anwendungsschicht ist die oberste Schicht des OSI-Modells.",
                "Sie stellt Netzwerkdienste für Anwendungen des Benutzers bereit."
            ],

            liste: [
                "Zugriff von Anwendungen auf Netzwerkdienste",
                "Webzugriffe",
                "E-Mail-Kommunikation",
                "Namensauflösung",
                "Dateiübertragung",
                "Beispiele: HTTP, HTTPS, DNS, SMTP, FTP"
            ],

            beispiel: {
                titel:
                    "Beispiel",

                text:
                    "Du öffnest eine Webseite im Browser. Der Browser verwendet auf Anwendungsebene beispielsweise HTTP oder HTTPS."
            },

            merksatz:
                "Layer 7 ist dort, wo Anwendungen Netzwerkdienste nutzen."
        },


        {
            id: "osi-layer6",

            titel:
                "3. Layer 6 – Darstellungsschicht",

            texte: [
                "Die Darstellungsschicht sorgt dafür, dass Daten in einer Form vorliegen, die Sender und Empfänger verstehen können.",
                "Sie beschäftigt sich mit der Darstellung und Umwandlung von Daten."
            ],

            liste: [
                "Zeichen- und Datenformate",
                "Kodierung",
                "Datenumwandlung",
                "Kompression",
                "Verschlüsselung und Entschlüsselung"
            ],

            merksatz:
                "Layer 6 kümmert sich um das Format der Daten."
        },


        {
            id: "osi-layer5",

            titel:
                "4. Layer 5 – Sitzungsschicht",

            texte: [
                "Die Sitzungsschicht organisiert die Kommunikation zwischen zwei Anwendungen.",
                "Sie kann Sitzungen aufbauen, verwalten und wieder beenden."
            ],

            liste: [
                "Sitzungen aufbauen",
                "Sitzungen steuern",
                "Kommunikation synchronisieren",
                "Sitzungen beenden"
            ],

            merksatz:
                "Layer 5 organisiert das Gespräch zwischen Anwendungen."
        },


        {
            id: "osi-layer4",

            titel:
                "5. Layer 4 – Transportschicht",

            texte: [
                "Die Transportschicht sorgt für die Ende-zu-Ende-Kommunikation zwischen Anwendungen.",
                "Hier spielen insbesondere TCP und UDP sowie Portnummern eine wichtige Rolle."
            ],

            liste: [
                "Ende-zu-Ende-Kommunikation",
                "Aufteilung von Daten",
                "Portnummern",
                "Fluss- und Fehlerkontrolle bei TCP",
                "TCP – verbindungsorientiert",
                "UDP – verbindungslos"
            ],

            beispiel: {
                titel:
                    "Beispiel",

                text:
                    "HTTPS verwendet normalerweise TCP-Port 443. Die Portnummer sorgt dafür, dass die Daten der richtigen Anwendung zugeordnet werden können."
            },

            merksatz:
                "Layer 4 = TCP, UDP und Ports."
        },


        {
            id: "osi-layer3",

            titel:
                "6. Layer 3 – Vermittlungsschicht",

            texte: [
                "Die Vermittlungsschicht verbindet unterschiedliche Netzwerke miteinander.",
                "Auf dieser Schicht werden logische Adressen und Routing verwendet."
            ],

            liste: [
                "IP-Adressen",
                "Routing",
                "Auswahl eines Weges durch verschiedene Netzwerke",
                "Weiterleitung von Paketen",
                "Typisches Gerät: Router",
                "Wichtiges Protokoll: IP"
            ],

            beispiel: {
                titel:
                    "Beispiel",

                text:
                    "Ein Paket soll von deinem Heimnetz zu einem Server im Internet. Der Router entscheidet, wohin das IP-Paket als Nächstes weitergeleitet wird."
            },

            merksatz:
                "Layer 3 = IP-Adresse und Routing."
        },


        {
            id: "osi-layer2",

            titel:
                "7. Layer 2 – Sicherungsschicht",

            texte: [
                "Die Sicherungsschicht organisiert die Übertragung innerhalb eines lokalen Netzwerkabschnitts.",
                "Hier spielen MAC-Adressen und Ethernet-Frames eine wichtige Rolle."
            ],

            liste: [
                "MAC-Adressen",
                "Ethernet-Frames",
                "Zugriff auf das Übertragungsmedium",
                "Erkennung von Übertragungsfehlern",
                "Typisches Gerät: Switch"
            ],

            beispiel: {
                titel:
                    "Beispiel",

                text:
                    "Ein Switch betrachtet die Ziel-MAC-Adresse eines Ethernet-Frames und entscheidet, über welchen Port er den Frame weiterleitet."
            },

            merksatz:
                "Layer 2 = MAC-Adresse, Frame und Switch."
        },


        {
            id: "osi-layer1",

            titel:
                "8. Layer 1 – Bitübertragungsschicht",

            texte: [
                "Die Bitübertragungsschicht ist die unterste Ebene des OSI-Modells.",
                "Sie beschreibt die physische Übertragung einzelner Bits über ein Übertragungsmedium."
            ],

            liste: [
                "Elektrische oder optische Signale",
                "Funkübertragung",
                "Kupferkabel",
                "Glasfaser",
                "Stecker und physische Schnittstellen",
                "Bitübertragung",
                "Typische Geräte: Repeater und Hub"
            ],

            beispiel: {
                titel:
                    "Beispiel",

                text:
                    "Ein Netzwerkkabel transportiert elektrische Signale. Die Bedeutung einer IP- oder MAC-Adresse interessiert Layer 1 dabei noch nicht."
            },

            merksatz:
                "Layer 1 überträgt Bits – nicht IP-Adressen oder Anwendungen."
        },
        {
            id: "osi-kapselung",

            titel:
                "9. Kapselung und Entkapselung",

            texte: [
                "Beim Senden durchlaufen die Daten das OSI-Modell von oben nach unten.",
                "Dabei fügt jede beteiligte Schicht zusätzliche Steuerinformationen hinzu. Dieser Vorgang wird Kapselung genannt.",
                "Beim Empfänger läuft der Vorgang in umgekehrter Richtung. Die zusätzlichen Informationen werden Schicht für Schicht ausgewertet und entfernt. Das nennt man Entkapselung."
            ],

            liste: [
                "Layer 7–5: Daten",
                "Layer 4: Segment bei TCP bzw. Datagramm bei UDP",
                "Layer 3: Paket",
                "Layer 2: Frame",
                "Layer 1: Bits",
                "Empfänger: Bits → Frame → Paket → Segment/Datagramm → Daten"
            ],

            beispiel: {
                titel:
                    "Beispiel: Webseite aufrufen",

                text:
                    "Der Browser erzeugt Daten. TCP ergänzt unter anderem Portinformationen. IP ergänzt Quell- und Ziel-IP-Adresse. Ethernet ergänzt unter anderem MAC-Adressen. Anschließend wird der Frame als Folge von Bits über das Netzwerk übertragen."
            },

            hinweis:
                "Die Begriffe Daten, Segment, Paket und Frame helfen dir in Prüfungsaufgaben dabei zu erkennen, auf welcher OSI-Schicht du dich gerade befindest.",

            merksatz:
                "Daten → Segment → Paket → Frame → Bits. Beim Empfänger läuft es rückwärts."
        },
        {
    id: "osi-lueckentest",

    titel:
        "10. Interaktiver OSI-Lückentest",
    einklappbareUebungen: true,

    texte: [
        "Jetzt kannst du testen, ob du die sieben Schichten des OSI-Modells auswendig zuordnen kannst.",
        "Trage jeweils nur den Namen der Schicht ein – zum Beispiel Anwendung, Transport oder Sicherung."
    ],

    hinweis:
    "Versuche die Aufgaben zunächst ohne Hilfe zu lösen. Falls du nicht weiterkommst, kannst du die vorherigen Kapitel noch einmal ansehen.",

    uebungen: [

        {
            titel:
                "Die 7 OSI-Schichten",

            aufgabe:
                "Ergänze die fehlenden Namen der OSI-Schichten.",

            felder: [

                {
                    label:
                        "Layer 7",
                    antwort:
                        "Anwendung"
                },

                {
                    label:
                        "Layer 6",
                    antwort:
                        "Darstellung"
                },

                {
                    label:
                        "Layer 5",
                    antwort:
                        "Sitzung"
                },

                {
                    label:
                        "Layer 4",
                    antwort:
                        "Transport"
                },

                {
                    label:
                        "Layer 3",
                    antwort:
                        "Vermittlung"
                },

                {
                    label:
                        "Layer 2",
                    antwort:
                        "Sicherung"
                },

                {
                    label:
                        "Layer 1",
                    antwort:
                        "Bitübertragung"
                }

            ]
        },
        {
    titel:
        "Stufe 2 – Aufgaben richtig zuordnen",

    aufgabe:
        "Welche OSI-Schicht passt zu der jeweiligen Aufgabe oder dem genannten Begriff? Trage nur den Namen der Schicht ein.",

    felder: [

        {
            label:
                "HTTP, HTTPS, DNS",
            antwort:
                "Anwendung"
        },

        {
            label:
                "Kodierung, Kompression, Verschlüsselung",
            antwort:
                "Darstellung"
        },

        {
            label:
                "Sitzungen aufbauen und verwalten",
            antwort:
                "Sitzung"
        },

        {
            label:
                "TCP, UDP und Portnummern",
            antwort:
                "Transport"
        },

        {
            label:
                "IP-Adressen und Routing",
            antwort:
                "Vermittlung"
        },

        {
            label:
                "MAC-Adressen, Frames und Switches",
            antwort:
                "Sicherung"
        },

        {
            label:
                "Kabel, Signale und Bits",
            antwort:
                "Bitübertragung"
        }

    ]
},
{
    titel:
        "Stufe 3 – Prüfungssituationen erkennen",

    aufgabe:
        "Lies die Situation und bestimme die passende OSI-Schicht. Trage nur den Namen der Schicht ein.",

    felder: [

        {
            label:
                "Ein Browser fordert eine Webseite per HTTPS an.",
            antwort:
                "Anwendung"
        },

        {
            label:
                "Daten werden komprimiert oder verschlüsselt.",
            antwort:
                "Darstellung"
        },

        {
            label:
                "Eine Kommunikationssitzung zwischen zwei Anwendungen wird aufgebaut und verwaltet.",
            antwort:
                "Sitzung"
        },

        {
            label:
                "TCP sorgt für eine zuverlässige Ende-zu-Ende-Übertragung.",
            antwort:
                "Transport"
        },

        {
            label:
                "Ein Router entscheidet, wohin ein IP-Paket als Nächstes weitergeleitet wird.",
            antwort:
                "Vermittlung"
        },

        {
            label:
                "Ein Switch wertet die Ziel-MAC-Adresse eines Frames aus.",
            antwort:
                "Sicherung"
        },

        {
            label:
                "Bits werden als elektrische, optische oder Funksignale übertragen.",
            antwort:
                "Bitübertragung"
        }

    ]
}

    ]

    
}


    ]
}


};