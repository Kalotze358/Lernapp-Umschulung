const quizAuswahlButtons =
    document.querySelectorAll("[data-start-kategorie]");
const startQuizButton =
    document.getElementById("start-quiz-button");

const startLernfelderButton =
    document.getElementById("start-lernfelder-button");
const mobileMenuButton =
    document.getElementById("mobile-menu-button");
const antwortPruefenButton =
    document.getElementById("antwort-pruefen");
const hauptnavigation =
    document.getElementById("hauptnavigation");
const darkmodeButton =
    document.getElementById("darkmode-button");
const frageAnzeige = document.getElementById("frage");
const antwortButtons = document.querySelectorAll("#antworten button");
const ergebnis = document.getElementById("ergebnis");
const punkteAnzeige = document.getElementById("punkte");
const naechsteFrageButton = document.getElementById("naechste-frage");
const kategorieButtons = document.querySelectorAll(".kategorie-button");

const kategorieTitel = document.getElementById("kategorie-titel");

const lernfelderListe = document.getElementById("lernfelder-liste");

const fortschrittAnzeige = document.getElementById("fortschritt");
const quizAuswertung =
    document.getElementById("quiz-auswertung");

let aktiveFragen = netzwerkFragen;
const alleFragen = [
    ...netzwerkFragen,
    ...programmierungFragen,
    ...lf01Fragen,
    ...lf02Fragen,
    ...lf04Fragen,
    ...lf06Fragen,
    ...lf07Fragen,
    ...lf08Fragen,
    ...lf09Fragen,
    ...lf10bFragen,
    ...lf11bFragen,
    ...lf12bFragen
];
function fragenMischen(fragen) {

    const gemischteFragen = [...fragen];

    for (let i = gemischteFragen.length - 1; i > 0; i--) {

        const zufallsIndex =
            Math.floor(Math.random() * (i + 1));

        [
            gemischteFragen[i],
            gemischteFragen[zufallsIndex]
        ] = [
            gemischteFragen[zufallsIndex],
            gemischteFragen[i]
        ];

    }

    return gemischteFragen;
}
function antwortenMischen(frage) {

    const antworten =
        frage.antworten.map((antwort) => {

            return {
                ...antwort
            };

        });

    for (let i = antworten.length - 1; i > 0; i--) {

        const zufallsIndex =
            Math.floor(Math.random() * (i + 1));

        [
            antworten[i],
            antworten[zufallsIndex]
        ] = [
            antworten[zufallsIndex],
            antworten[i]
        ];
    }

    return antworten;
}

let aktuelleFrage = 0;
let punkte = 0;
let aktuellesLernfeld = null;
let aktuelleAntworten = [];

function lernfelderAnzeigen() {

    lernfelderListe.innerHTML = "";

    lernfelder.forEach((lernfeld) => {

        const karte = document.createElement("button");

        karte.classList.add("lernfeld-karte");

        karte.dataset.lernfeld = lernfeld.id;

        const nummer = document.createElement("span");
        nummer.classList.add("lernfeld-nummer");
        nummer.textContent = lernfeld.nummer;

        const kurzTitel = document.createElement("strong");
        kurzTitel.textContent = lernfeld.kurzTitel;

        const titel = document.createElement("span");
        titel.classList.add("lernfeld-titel");
        titel.textContent = lernfeld.titel;

        karte.appendChild(nummer);
        karte.appendChild(kurzTitel);
        karte.appendChild(titel);

        karte.addEventListener("click", () => {

            lernfeldDetailsAnzeigen(lernfeld);

        });

        lernfelderListe.appendChild(karte);

    });

}


function lernfeldDetailsAnzeigen(lernfeld) {

    lernfelderListe.innerHTML = "";

    const zurueckButton = document.createElement("button");
    zurueckButton.textContent = "← Zurück zu den Lernfeldern";
    zurueckButton.classList.add("zurueck-button");

    zurueckButton.addEventListener("click", () => {
        lernfelderAnzeigen();
    });

    const nummer = document.createElement("p");
    nummer.classList.add("lernfeld-detail-nummer");
    nummer.textContent = lernfeld.nummer;

    const titel = document.createElement("h2");
    titel.textContent = lernfeld.titel;

    const beschreibung = document.createElement("p");

    beschreibung.textContent =
        lernfeld.beschreibung ||
        "Für dieses Lernfeld werden die Inhalte noch ergänzt.";

    const themenTitel = document.createElement("h3");
    themenTitel.textContent = "Themen";

    const themenListe = document.createElement("div");
    themenListe.classList.add("themen-liste");

    if (lernfeld.themen) {

    lernfeld.themen.forEach((thema) => {

        const themaElement = document.createElement("button");

        themaElement.classList.add("thema-karte");

        if (typeof thema === "string") {

            themaElement.textContent = thema;

            themaElement.addEventListener("click", () => {

                themaDetailsAnzeigen(
                    lernfeld,
                    {
                        titel: thema
                    }
                );

            });

        } else {

            themaElement.textContent = thema.titel;

            themaElement.addEventListener("click", () => {

                themaDetailsAnzeigen(lernfeld, thema);

            });

        }

        themenListe.appendChild(themaElement);

    });

} else {

    const hinweis = document.createElement("p");
    hinweis.textContent = "Themen werden noch ergänzt.";

    themenListe.appendChild(hinweis);

}


const lernfeldFragen =
    findeFragenFuerLernfeld(lernfeld.id);

const lernfeldQuizButton =
    document.createElement("button");

lernfeldQuizButton.classList.add(
    "lernfeld-quiz-button"
);

if (lernfeldFragen.length > 0) {

    lernfeldQuizButton.textContent =
        "Gesamtes " +
        lernfeld.nummer +
        "-Quiz starten (" +
        lernfeldFragen.length +
        " Fragen)";

    lernfeldQuizButton.addEventListener(
        "click",
        () => {

            lernfeldQuizStarten(lernfeld);

        }
    );

} else {

    lernfeldQuizButton.textContent =
        "Noch keine Quizfragen für dieses Lernfeld";

    lernfeldQuizButton.disabled = true;

}
lernfelderListe.appendChild(zurueckButton);
lernfelderListe.appendChild(nummer);
lernfelderListe.appendChild(titel);
lernfelderListe.appendChild(beschreibung);

lernfelderListe.appendChild(lernfeldQuizButton);

lernfelderListe.appendChild(themenTitel);
lernfelderListe.appendChild(themenListe);


}
function findeFragenFuerLernfeld(lernfeldId) {

    return alleFragen.filter((frage) => {

        return (
            frage.lernfelder &&
            frage.lernfelder.includes(lernfeldId)
        );

    });

}
function lernfeldQuizStarten(lernfeld) {

    aktuellesLernfeld = lernfeld;

    const passendeFragen =
        findeFragenFuerLernfeld(lernfeld.id);

    if (passendeFragen.length === 0) {

        alert("Für dieses Lernfeld sind noch keine Quizfragen vorhanden.");
        return;

    }

    aktiveFragen = fragenMischen(passendeFragen);

    aktuelleFrage = 0;
    punkte = 0;

    punkteAnzeige.textContent = punkte;

    kategorieTitel.textContent =
        lernfeld.nummer + " – Gesamtquiz";

    bereiche.forEach((bereich) => {
        bereich.classList.remove("aktiv");
    });

    document
        .getElementById("quiz-bereich")
        .classList.add("aktiv");
navButtons.forEach((button) => {
    button.classList.remove("aktiv");
});

const quizButton =
    document.querySelector(
        '.nav-button[data-bereich="quiz-bereich"]'
    );

quizButton.classList.add("aktiv");

quizUntermenue.classList.add("aktiv");

frageAnzeigen();

}



startLernfelderButton.addEventListener("click", () => {

    bereiche.forEach((bereich) => {
        bereich.classList.remove("aktiv");
    });

    document
        .getElementById("lernfelder-bereich")
        .classList.add("aktiv");
});


quizAuswahlButtons.forEach((button) => {

    button.addEventListener("click", () => {

        
        const kategorie =
            button.dataset.startKategorie;

        aktuellesLernfeld = null;

        if (kategorie === "netzwerk") {

            aktiveFragen =
                fragenMischen(netzwerkFragen);

            kategorieTitel.textContent =
                "Netzwerktechnik";

        } else if (kategorie === "programmierung") {

            aktiveFragen =
                fragenMischen(programmierungFragen);

            kategorieTitel.textContent =
                "Programmierung";
        }

        aktuelleFrage = 0;
        punkte = 0;

        punkteAnzeige.textContent = punkte;

        bereiche.forEach((bereich) => {
            bereich.classList.remove("aktiv");
        });

        document
            .getElementById("quiz-bereich")
            .classList.add("aktiv");

        frageAnzeigen();
    });

});
    
function findeFragenFuerThema(lernfeldId, themaId) {

    return alleFragen.filter((frage) => {

        const passtZumLernfeld =
            frage.lernfelder &&
            frage.lernfelder.includes(lernfeldId);

        const passtZumThema =
            frage.themen &&
            frage.themen.includes(themaId);

        return passtZumLernfeld && passtZumThema;

    });

}
function themenQuizStarten(lernfeld, thema) {

    aktuellesLernfeld = lernfeld;

    const passendeFragen =
        findeFragenFuerThema(lernfeld.id, thema.id);

    if (passendeFragen.length === 0) {

        alert("Für dieses Thema sind noch keine Quizfragen vorhanden.");
        return;

    }

    aktiveFragen = fragenMischen(passendeFragen);

    aktuelleFrage = 0;
    punkte = 0;

    punkteAnzeige.textContent = punkte;

    kategorieTitel.textContent =
        lernfeld.nummer + " – " + thema.titel;

    bereiche.forEach((bereich) => {
        bereich.classList.remove("aktiv");
    });

    document
        .getElementById("quiz-bereich")
        .classList.add("aktiv");

    navButtons.forEach((button) => {
        button.classList.remove("aktiv");
    });

    const quizButton =
        document.querySelector(
            '.nav-button[data-bereich="quiz-bereich"]'
        );

    quizButton.classList.add("aktiv");

    quizUntermenue.classList.add("aktiv");

    frageAnzeigen();

}
function themaDetailsAnzeigen(lernfeld, thema) {
    
    lernfelderListe.innerHTML = "";

    const zurueckButton = document.createElement("button");

    zurueckButton.textContent =
        "← Zurück zu " + lernfeld.nummer;

    zurueckButton.classList.add("zurueck-button");

    zurueckButton.addEventListener("click", () => {

        lernfeldDetailsAnzeigen(lernfeld);

    });
    function vertiefungAnzeigen(lernfeld, thema, vertiefung) {

    lernfelderListe.innerHTML = "";

    // Zurück-Button
    const zurueckButton = document.createElement("button");

    zurueckButton.textContent =
        "← Zurück zu " + thema.titel;

    zurueckButton.classList.add("zurueck-button");

    zurueckButton.addEventListener("click", () => {

        themaDetailsAnzeigen(
            lernfeld,
            thema
        );

    });

    lernfelderListe.appendChild(zurueckButton);


    // Lernfeld anzeigen
    const lernfeldNummer = document.createElement("p");

    lernfeldNummer.classList.add(
        "lernfeld-detail-nummer"
    );

    lernfeldNummer.textContent =
        lernfeld.nummer +
        " – " +
        lernfeld.kurzTitel;

    lernfelderListe.appendChild(lernfeldNummer);


    // Titel
    const titel = document.createElement("h2");

    titel.textContent =
        vertiefung.titel;

    lernfelderListe.appendChild(titel);


    // Untertitel
    const untertitel = document.createElement("p");

    untertitel.textContent =
        vertiefung.untertitel;

    lernfelderListe.appendChild(untertitel);


    // Kapitelüberschrift
    const kapitelTitel = document.createElement("h3");

    kapitelTitel.textContent =
        "Lerninhalte";

    lernfelderListe.appendChild(kapitelTitel);


    // Kapitel erzeugen
    vertiefung.abschnitte.forEach(abschnitt => {

        const kapitel = document.createElement("div");

        kapitel.classList.add(
            "vertiefungs-kapitel"
        );
        kapitel.id =
            "vertiefung-" + abschnitt.id;


        const kapitelUeberschrift =
            document.createElement("h3");

        kapitelUeberschrift.textContent =
            abschnitt.titel;


        kapitel.appendChild(
            kapitelUeberschrift
        );
        // Erklärungstexte
if (abschnitt.texte) {

    abschnitt.texte.forEach(text => {

        const absatz = document.createElement("p");

        absatz.textContent = text;

        kapitel.appendChild(absatz);

    });
}



// Aufzählung
if (abschnitt.liste) {

    const liste = document.createElement("ul");

    abschnitt.liste.forEach(eintrag => {

        const listenPunkt =
            document.createElement("li");

        listenPunkt.textContent =
            eintrag;

        liste.appendChild(listenPunkt);

    });

    kapitel.appendChild(liste);
}


// Beispiel
if (abschnitt.beispiel) {

    const beispielBox =
        document.createElement("div");

    beispielBox.classList.add(
        "vertiefungs-beispiel"
    );


    const beispielTitel =
        document.createElement("strong");

    beispielTitel.textContent =
        abschnitt.beispiel.titel;


    const beispielText =
        document.createElement("p");

    beispielText.textContent =
        abschnitt.beispiel.text;


    beispielBox.appendChild(
        beispielTitel
    );

    beispielBox.appendChild(
        beispielText
    );

    kapitel.appendChild(
        beispielBox
    );
}


// Tabelle
if (abschnitt.tabelle) {

    const tabelle =
        document.createElement("table");

    tabelle.classList.add(
        "vertiefungs-tabelle"
    );


    tabelle.innerHTML = `
        <thead>
            <tr>
                <th>Klasse</th>
                <th>1. Oktett</th>
                <th>Standard</th>
                <th>Subnetzmaske</th>
            </tr>
        </thead>
    `;


    const tbody =
        document.createElement("tbody");


    abschnitt.tabelle.forEach(eintrag => {

        const zeile =
            document.createElement("tr");

        zeile.innerHTML = `
            <td>${eintrag.klasse}</td>
            <td>${eintrag.bereich}</td>
            <td>${eintrag.cidr}</td>
            <td>${eintrag.maske}</td>
        `;

        tbody.appendChild(zeile);

    });


    tabelle.appendChild(tbody);

    kapitel.appendChild(tabelle);
}


// Hinweis
if (abschnitt.hinweis) {

    const hinweis =
        document.createElement("div");

    hinweis.classList.add(
        "vertiefungs-hinweis"
    );

    hinweis.textContent =
        abschnitt.hinweis;

    kapitel.appendChild(hinweis);
}

// Interaktive Übungen
if (abschnitt.uebungen) {

    abschnitt.uebungen.forEach(uebung => {

        const uebungsBox =
            document.createElement("div");

        uebungsBox.classList.add(
            "vertiefungs-uebung"
        );


        const titel =
            document.createElement("h4");

        titel.textContent =
            uebung.titel;

        uebungsBox.appendChild(titel);


        const aufgabe =
            document.createElement("p");

        aufgabe.textContent =
            uebung.aufgabe;

        uebungsBox.appendChild(aufgabe);


        const eingaben = [];


        uebung.felder.forEach(feld => {

            const zeile =
                document.createElement("div");

            zeile.classList.add(
                "uebungs-zeile"
            );


            const label =
                document.createElement("label");

            label.textContent =
                feld.label;


            const input =
                document.createElement("input");

            input.type = "text";

            input.placeholder =
                "Antwort eingeben";


            zeile.appendChild(label);
            zeile.appendChild(input);

            uebungsBox.appendChild(zeile);


            eingaben.push({
                input: input,
                antwort: feld.antwort
            });

        });


        const buttonBereich =
            document.createElement("div");

        buttonBereich.classList.add(
            "uebungs-buttons"
        );


        // Antwort prüfen
        const pruefenButton =
            document.createElement("button");

        pruefenButton.textContent =
            "Antworten prüfen";

        pruefenButton.classList.add(
            "themen-quiz-button"
        );


        pruefenButton.addEventListener(
            "click",
            () => {

                eingaben.forEach(eintrag => {

                    const eingabe =
                        eintrag.input.value
                            .trim()
                            .toLowerCase();

                    const richtig =
                        eintrag.antwort
                            .trim()
                            .toLowerCase();


                    eintrag.input.classList.remove(
                        "uebung-richtig",
                        "uebung-falsch"
                    );


                    if (eingabe === richtig) {

                        eintrag.input.classList.add(
                            "uebung-richtig"
                        );

                    } else {

                        eintrag.input.classList.add(
                            "uebung-falsch"
                        );

                    }

                });

            }
        );


        // Lösung anzeigen
        const loesungButton =
            document.createElement("button");

        loesungButton.textContent =
            "Lösung anzeigen";

        loesungButton.classList.add(
            "themen-quiz-button"
        );


        loesungButton.addEventListener(
            "click",
            () => {

                eingaben.forEach(eintrag => {

                    eintrag.input.value =
                        eintrag.antwort;

                    eintrag.input.classList.remove(
                        "uebung-falsch"
                    );

                    eintrag.input.classList.add(
                        "uebung-richtig"
                    );

                });

            }
        );


        buttonBereich.appendChild(
            pruefenButton
        );

        buttonBereich.appendChild(
            loesungButton
        );


        uebungsBox.appendChild(
            buttonBereich
        );


        kapitel.appendChild(
            uebungsBox
        );

    });

}
// Zufällige Subnetting-Aufgabe
if (abschnitt.zufallsGenerator) {

    const zufallsBox =
        document.createElement("div");

    zufallsBox.classList.add(
        "vertiefungs-uebung"
    );


    const aufgabenText =
        document.createElement("h4");

    zufallsBox.appendChild(
        aufgabenText
    );


    const feldDefinitionen = [
        {
            label: "Subnetzmaske",
            key: "subnetzmaske"
        },
        {
            label: "Netzadresse",
            key: "netzadresse"
        },
        {
            label: "Broadcastadresse",
            key: "broadcastadresse"
        },
        {
            label: "Erster Host",
            key: "ersterHost"
        },
        {
            label: "Letzter Host",
            key: "letzterHost"
        },
        {
            label: "Nutzbare Hosts",
            key: "nutzbareHosts"
        }
    ];


    const eingaben = {};

    let aktuelleAufgabe = null;


    feldDefinitionen.forEach(feld => {

        const zeile =
            document.createElement("div");

        zeile.classList.add(
            "uebungs-zeile"
        );


        const label =
            document.createElement("label");

        label.textContent =
            feld.label;


        const input =
            document.createElement("input");

        input.type = "text";

        input.placeholder =
            "Antwort eingeben";


        eingaben[feld.key] = input;


        zeile.appendChild(label);
        zeile.appendChild(input);

        zufallsBox.appendChild(zeile);

    });


    const buttonBereich =
        document.createElement("div");

    buttonBereich.classList.add(
        "uebungs-buttons"
    );


    // Neue Aufgabe
    const neueAufgabeButton =
        document.createElement("button");

    neueAufgabeButton.textContent =
        "🎲 Neue Aufgabe";

    neueAufgabeButton.classList.add(
        "themen-quiz-button"
    );


    // Antworten prüfen
    const pruefenButton =
        document.createElement("button");

    pruefenButton.textContent =
        "Antworten prüfen";

    pruefenButton.classList.add(
        "themen-quiz-button"
    );


    // Lösung anzeigen
    const loesungButton =
        document.createElement("button");

    loesungButton.textContent =
        "Lösung anzeigen";

    loesungButton.classList.add(
        "themen-quiz-button"
    );


    function neueAufgabeErzeugen() {

        aktuelleAufgabe =
            zufaelligeSubnettingAufgabe();


        aufgabenText.textContent =
            "Berechne: " +
            aktuelleAufgabe.ip +
            "/" +
            aktuelleAufgabe.praefix;


        Object.values(eingaben).forEach(input => {

            input.value = "";

            input.classList.remove(
                "uebung-richtig",
                "uebung-falsch"
            );

        });

    }


    neueAufgabeButton.addEventListener(
        "click",
        neueAufgabeErzeugen
    );


    pruefenButton.addEventListener(
        "click",
        () => {

            feldDefinitionen.forEach(feld => {

                const input =
                    eingaben[feld.key];

                const eingabe =
                    input.value
                        .trim()
                        .toLowerCase();

                const richtig =
                    String(
                        aktuelleAufgabe[feld.key]
                    )
                        .trim()
                        .toLowerCase();


                input.classList.remove(
                    "uebung-richtig",
                    "uebung-falsch"
                );


                if (eingabe === richtig) {

                    input.classList.add(
                        "uebung-richtig"
                    );

                } else {

                    input.classList.add(
                        "uebung-falsch"
                    );

                }

            });

        }
    );


    loesungButton.addEventListener(
        "click",
        () => {

            feldDefinitionen.forEach(feld => {

                const input =
                    eingaben[feld.key];

                input.value =
                    aktuelleAufgabe[feld.key];

                input.classList.remove(
                    "uebung-falsch"
                );

                input.classList.add(
                    "uebung-richtig"
                );

            });

        }
    );


    buttonBereich.appendChild(
        neueAufgabeButton
    );

    buttonBereich.appendChild(
        pruefenButton
    );

    buttonBereich.appendChild(
        loesungButton
    );


    zufallsBox.appendChild(
        buttonBereich
    );

    kapitel.appendChild(
        zufallsBox
    );


    // Direkt beim Öffnen eine Aufgabe erzeugen
    neueAufgabeErzeugen();
}
// Subnetting-Rechner
if (abschnitt.subnetzRechner) {

    const rechnerBox =
        document.createElement("div");

    rechnerBox.classList.add(
        "vertiefungs-uebung",
        "subnetz-rechner"
    );


    // IP-Adresse
    const ipZeile =
        document.createElement("div");

    ipZeile.classList.add(
        "uebungs-zeile"
    );


    const ipLabel =
        document.createElement("label");

    ipLabel.textContent =
        "IPv4-Adresse";


    const ipInput =
        document.createElement("input");

    ipInput.type = "text";

    ipInput.placeholder =
        "z. B. 192.168.10.130";


    ipZeile.appendChild(ipLabel);
    ipZeile.appendChild(ipInput);

    rechnerBox.appendChild(ipZeile);


    // CIDR
    const cidrZeile =
        document.createElement("div");

    cidrZeile.classList.add(
        "uebungs-zeile"
    );


    const cidrLabel =
        document.createElement("label");

    cidrLabel.textContent =
        "CIDR-Präfix";


    const cidrInput =
        document.createElement("input");

    cidrInput.type = "text";

    cidrInput.placeholder =
        "z. B. /26";


    cidrZeile.appendChild(cidrLabel);
    cidrZeile.appendChild(cidrInput);

    rechnerBox.appendChild(cidrZeile);


    // Berechnen-Button
    const berechnenButton =
        document.createElement("button");

    berechnenButton.textContent =
        "🧮 Subnetz berechnen";

    berechnenButton.classList.add(
        "themen-quiz-button"
    );

    rechnerBox.appendChild(
        berechnenButton
    );


    // Fehlermeldung
    const fehlerText =
        document.createElement("p");

    fehlerText.classList.add(
        "rechner-fehler"
    );

    rechnerBox.appendChild(
        fehlerText
    );


    // Ergebnisbereich
    const ergebnisBox =
        document.createElement("div");

    ergebnisBox.classList.add(
        "rechner-ergebnis"
    );

    ergebnisBox.style.display = "none";


    const ergebnisTitel =
        document.createElement("h4");

    ergebnisTitel.textContent =
        "Ergebnis";

    ergebnisBox.appendChild(
        ergebnisTitel
    );


    const ergebnisFelder = [
        ["Subnetzmaske", "subnetzmaske"],
        ["Netzadresse", "netzadresse"],
        ["Broadcastadresse", "broadcastadresse"],
        ["Erster Host", "ersterHost"],
        ["Letzter Host", "letzterHost"],
        ["Nutzbare Hosts", "nutzbareHosts"]
    ];


    const ausgaben = {};


    ergebnisFelder.forEach(([labelText, key]) => {

        const zeile =
            document.createElement("div");

        zeile.classList.add(
            "rechner-zeile"
        );


        const label =
            document.createElement("strong");

        label.textContent =
            labelText;


        const wert =
            document.createElement("span");


        ausgaben[key] = wert;


        zeile.appendChild(label);
        zeile.appendChild(wert);

        ergebnisBox.appendChild(zeile);

    });


    // Rechenweg
    const rechenwegBox =
        document.createElement("div");

    rechenwegBox.classList.add(
        "rechenweg-box"
    );


    const rechenwegTitel =
        document.createElement("h4");

    rechenwegTitel.textContent =
        "Rechenweg";


    const rechenwegText =
        document.createElement("div");


    rechenwegBox.appendChild(
        rechenwegTitel
    );

    rechenwegBox.appendChild(
        rechenwegText
    );


    ergebnisBox.appendChild(
        rechenwegBox
    );

    rechnerBox.appendChild(
        ergebnisBox
    );


    // IPv4-Adresse prüfen
    function ipv4IstGueltig(ip) {

        const teile =
            ip.trim().split(".");


        if (teile.length !== 4) {
            return false;
        }


        return teile.every(teil => {

            if (!/^\d{1,3}$/.test(teil)) {
                return false;
            }

            const zahl = Number(teil);

            return (
                zahl >= 0 &&
                zahl <= 255
            );

        });
    }


    // Berechnung durchführen
    function rechnerAusfuehren() {

        const ip =
            ipInput.value.trim();

        const praefixText =
            cidrInput.value
                .trim()
                .replace("/", "");

        const praefix =
            Number(praefixText);


        fehlerText.textContent = "";


        if (!ipv4IstGueltig(ip)) {

            ergebnisBox.style.display =
                "none";

            fehlerText.textContent =
                "Bitte eine gültige IPv4-Adresse eingeben.";

            return;
        }


        if (
            !Number.isInteger(praefix) ||
            praefix < 8 ||
            praefix > 30
        ) {

            ergebnisBox.style.display =
                "none";

            fehlerText.textContent =
                "Bitte eine CIDR-Präfixlänge zwischen /8 und /30 eingeben.";

            return;
        }


        const ergebnis =
            subnetzBerechnen(
                ip,
                praefix
            );


        ausgaben.subnetzmaske.textContent =
            ergebnis.subnetzmaske;

        ausgaben.netzadresse.textContent =
            ergebnis.netzadresse;

        ausgaben.broadcastadresse.textContent =
            ergebnis.broadcastadresse;

        ausgaben.ersterHost.textContent =
            ergebnis.ersterHost;

        ausgaben.letzterHost.textContent =
            ergebnis.letzterHost;

        ausgaben.nutzbareHosts.textContent =
            ergebnis.nutzbareHosts;


        // Binäre Subnetzmaske
        const binaereMaske =
            ergebnis.subnetzmaske
                .split(".")
                .map(oktett =>
                    Number(oktett)
                        .toString(2)
                        .padStart(8, "0")
                )
                .join(".");


        const hostBits =
            32 - praefix;

        const gesamtAdressen =
            2 ** hostBits;


        rechenwegText.innerHTML = `
            <p>
                <strong>1.</strong>
                /${praefix} bedeutet:
                ${praefix} Netzbits und
                ${hostBits} Hostbits.
            </p>

            <p>
                <strong>2.</strong>
                Binäre Subnetzmaske:
                <br>
                ${binaereMaske}
            </p>

            <p>
                <strong>3.</strong>
                Subnetzmaske:
                ${ergebnis.subnetzmaske}
            </p>

            <p>
                <strong>4.</strong>
                2^${hostBits} =
                ${gesamtAdressen}
                Adressen.
                ${gesamtAdressen} - 2 =
                ${ergebnis.nutzbareHosts}
                nutzbare Hosts.
            </p>

            <p>
                <strong>5.</strong>
                Netzadresse:
                ${ergebnis.netzadresse}
                <br>
                Broadcastadresse:
                ${ergebnis.broadcastadresse}
            </p>
        `;


        ergebnisBox.style.display =
            "block";
    }


    berechnenButton.addEventListener(
        "click",
        rechnerAusfuehren
    );


    // Enter funktioniert ebenfalls
    ipInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                rechnerAusfuehren();
            }

        }
    );


    cidrInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                rechnerAusfuehren();
            }

        }
    );


    kapitel.appendChild(
        rechnerBox
    );
}
// Merksatz
if (abschnitt.merksatz) {

    const merksatz =
        document.createElement("div");

    merksatz.classList.add(
        "vertiefungs-merksatz"
    );

    merksatz.textContent =
        "Merksatz: " +
        abschnitt.merksatz;

    kapitel.appendChild(merksatz);
}

        lernfelderListe.appendChild(
            kapitel
        );

    });

}
function ipZuZahl(ip) {

    const teile =
        ip.split(".").map(Number);

    return (
        (
            (
                (
                    teile[0] * 256 +
                    teile[1]
                ) * 256 +
                teile[2]
            ) * 256 +
            teile[3]
        ) >>> 0
    );
}


function zahlZuIp(zahl) {

    return [
        (zahl >>> 24) & 255,
        (zahl >>> 16) & 255,
        (zahl >>> 8) & 255,
        zahl & 255
    ].join(".");
}


function subnetzBerechnen(ip, praefix) {

    const ipZahl =
        ipZuZahl(ip);

    const hostBits =
        32 - praefix;

    const maskeZahl =
        (0xffffffff << hostBits) >>> 0;

    const netzZahl =
        (ipZahl & maskeZahl) >>> 0;

    const wildcard =
        (~maskeZahl) >>> 0;

    const broadcastZahl =
        (netzZahl | wildcard) >>> 0;


    return {

        subnetzmaske:
            zahlZuIp(maskeZahl),

        netzadresse:
            zahlZuIp(netzZahl),

        broadcastadresse:
            zahlZuIp(broadcastZahl),

        ersterHost:
            zahlZuIp(
                (netzZahl + 1) >>> 0
            ),

        letzterHost:
            zahlZuIp(
                (broadcastZahl - 1) >>> 0
            ),

        nutzbareHosts:
            (2 ** hostBits) - 2
    };
}


function zufaelligeSubnettingAufgabe() {

    // Zufälliges Präfix zwischen /24 und /30
    const praefix =
        Math.floor(Math.random() * 7) + 24;


    const blockgroesse =
        2 ** (32 - praefix);


    // Gültigen Subnetzstart bestimmen
    const netzStart =
        Math.floor(
            Math.random() *
            (256 / blockgroesse)
        ) * blockgroesse;


    let oktett1;
    let oktett2;
    let oktett3;


    // Einen privaten IPv4-Bereich auswählen
    const bereich =
        Math.floor(Math.random() * 3);


    if (bereich === 0) {

        // 192.168.0.0/16

        oktett1 = 192;
        oktett2 = 168;

        oktett3 =
            Math.floor(Math.random() * 256);

    } else if (bereich === 1) {

        // 10.0.0.0/8

        oktett1 = 10;

        oktett2 =
            Math.floor(Math.random() * 256);

        oktett3 =
            Math.floor(Math.random() * 256);

    } else {

        // 172.16.0.0/12

        oktett1 = 172;

        oktett2 =
            16 +
            Math.floor(Math.random() * 16);

        oktett3 =
            Math.floor(Math.random() * 256);
    }


    // Eine gültige Hostadresse innerhalb
    // des zufälligen Subnetzes erzeugen
    const hostOffset =
        1 +
        Math.floor(
            Math.random() *
            (blockgroesse - 2)
        );


    const oktett4 =
        netzStart + hostOffset;


    const ip =
        oktett1 + "." +
        oktett2 + "." +
        oktett3 + "." +
        oktett4;


    const loesung =
        subnetzBerechnen(
            ip,
            praefix
        );


    return {

        ip: ip,
        praefix: praefix,

        ...loesung
    };
}


    const lernfeldNummer = document.createElement("p");

    lernfeldNummer.classList.add("lernfeld-detail-nummer");

    lernfeldNummer.textContent =
        lernfeld.nummer + " – " + lernfeld.kurzTitel;


    const titel = document.createElement("h2");

    titel.textContent = thema.titel;


    const erklaerungTitel = document.createElement("h3");

    erklaerungTitel.textContent = "Erklärung";


    const erklaerung = document.createElement("p");

    erklaerung.textContent =
        thema.erklaerung ||
        "Für dieses Thema wird der Lerninhalt noch ergänzt.";


    lernfelderListe.appendChild(zurueckButton);
    lernfelderListe.appendChild(lernfeldNummer);
    lernfelderListe.appendChild(titel);
    lernfelderListe.appendChild(erklaerungTitel);
    lernfelderListe.appendChild(erklaerung);


    if (thema.merksatz) {

        const merksatzBox = document.createElement("div");

        merksatzBox.classList.add("merksatz-box");


        const merksatzTitel = document.createElement("strong");

        merksatzTitel.textContent = "Merksatz";


        const merksatzText = document.createElement("p");

        merksatzText.textContent = thema.merksatz;


        merksatzBox.appendChild(merksatzTitel);
        merksatzBox.appendChild(merksatzText);

        lernfelderListe.appendChild(merksatzBox);

    }

    if (thema.vertiefung && vertiefungen[thema.vertiefung]) {

    const vertiefungsButton = document.createElement("button");

    vertiefungsButton.classList.add(
    "themen-quiz-button",
    "vertiefungs-button"
);

    vertiefungsButton.textContent =
        "📖 Thema ausführlich lernen";

    vertiefungsButton.addEventListener("click", () => {

    const vertiefung =
        vertiefungen[thema.vertiefung];

    vertiefungAnzeigen(
        lernfeld,
        thema,
        vertiefung
    );

});



    lernfelderListe.appendChild(vertiefungsButton);
}

if (thema.id) {

    const passendeFragen =
        findeFragenFuerThema(lernfeld.id, thema.id);
        
    const quizButton = document.createElement("button");

    quizButton.classList.add("themen-quiz-button");

    if (passendeFragen.length > 0) {

        quizButton.textContent =
            "Quiz zu diesem Thema starten (" +
            passendeFragen.length +
            " Fragen)";

        quizButton.addEventListener("click", () => {

            themenQuizStarten(lernfeld, thema);

        });

    } else {

        quizButton.textContent =
            "Noch keine Quizfragen zu diesem Thema";

        quizButton.disabled = true;

    }

lernfelderListe.appendChild(quizButton);

}}
function quizWiederholen() {

    aktiveFragen = fragenMischen(aktiveFragen);

    aktuelleFrage = 0;
    punkte = 0;

    punkteAnzeige.textContent = punkte;

    quizAuswertung.innerHTML = "";

    frageAnzeigen();

}
function zurueckZumLernfeld() {

    if (!aktuellesLernfeld) {
        return;
    }

    bereiche.forEach((bereich) => {
        bereich.classList.remove("aktiv");
    });

    document
        .getElementById("lernfelder-bereich")
        .classList.add("aktiv");

    navButtons.forEach((button) => {
        button.classList.remove("aktiv");
    });

    const lernfelderButton =
        document.querySelector(
            '.nav-button[data-bereich="lernfelder-bereich"]'
        );

    lernfelderButton.classList.add("aktiv");

    quizUntermenue.classList.remove("aktiv");

    lernfeldDetailsAnzeigen(aktuellesLernfeld);

}

function quizErgebnisAnzeigen() {

    const gesamtFragen = aktiveFragen.length;

    const prozent =
        (punkte / gesamtFragen) * 100;

    let bewertung = "";

    if (prozent >= 90) {

        bewertung = "Sehr gut";

    } else if (prozent >= 80) {

        bewertung = "Gut";

    } else if (prozent >= 67) {

        bewertung = "Befriedigend";

    } else if (prozent >= 50) {

        bewertung = "Ausreichend";

    } else {

        bewertung = "Noch etwas üben";

    }


    quizAuswertung.innerHTML = `
        <h3>Dein Ergebnis</h3>

        <p>
            <strong>${punkte} von ${gesamtFragen}</strong>
            Fragen richtig
        </p>

        <p class="prozent-ergebnis">
            ${prozent.toFixed(1).replace(".", ",")} %
        </p>

        <p class="bewertung">
            ${bewertung}
        </p>
    `;
    const buttonBereich =
    document.createElement("div");

buttonBereich.classList.add("ergebnis-buttons");


const wiederholenButton =
    document.createElement("button");

wiederholenButton.textContent =
    "Quiz wiederholen";

wiederholenButton.classList.add(
    "ergebnis-button"
);

wiederholenButton.addEventListener(
    "click",
    quizWiederholen
);


buttonBereich.appendChild(wiederholenButton);

if (aktuellesLernfeld) {

    const zurueckButton =
        document.createElement("button");

    zurueckButton.textContent =
        "← Zurück zum Lernfeld";

    zurueckButton.classList.add(
        "ergebnis-button"
    );

    zurueckButton.addEventListener(
        "click",
        zurueckZumLernfeld
    );

    buttonBereich.appendChild(zurueckButton);
}

quizAuswertung.appendChild(buttonBereich);
}

function frageAnzeigen() {

    const frage = aktiveFragen[aktuelleFrage];

    aktuelleAntworten = antwortenMischen(frage);

    fortschrittAnzeige.textContent =
        "Frage " +
        (aktuelleFrage + 1) +
        " von " +
        aktiveFragen.length;

    frageAnzeige.textContent = frage.frage;

    antwortButtons.forEach((button, index) => {

    const antwort = aktuelleAntworten[index];

    button.classList.remove("ausgewaehlt");

    if (antwort) {

        button.style.display = "block";
        button.textContent = antwort.text;
        button.disabled = false;

    } else {

        button.style.display = "none";
        button.textContent = "";
        button.disabled = true;
    }
    if (frage.typ === "multiple-choice") {

    antwortPruefenButton.style.display = "block";
    antwortPruefenButton.disabled = true;

} else {

    antwortPruefenButton.style.display = "none";
}

});

    ergebnis.textContent = "";

    quizAuswertung.innerHTML = "";
    
    naechsteFrageButton.style.display = "block";
    naechsteFrageButton.disabled = true;
}

antwortButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const frage = aktiveFragen[aktuelleFrage];

        const ausgewaehlteAntwort =
            aktuelleAntworten[index];

        if (!ausgewaehlteAntwort) {
            return;
        }


        // MULTIPLE-CHOICE
        if (frage.typ === "multiple-choice") {

            button.classList.toggle("ausgewaehlt");

            const mindestensEineAusgewaehlt =
                Array.from(antwortButtons).some((button) => {
                    return button.classList.contains("ausgewaehlt");
                });

            antwortPruefenButton.disabled =
                !mindestensEineAusgewaehlt;

            return;
        }


        // SINGLE-CHOICE
        if (ausgewaehlteAntwort.richtig) {

            ergebnis.textContent = "✓ Richtig!";

            punkte++;
            punkteAnzeige.textContent = punkte;

        } else {

            const richtigeAntwort =
                aktuelleAntworten.find((antwort) => {
                    return antwort.richtig;
                });

            ergebnis.textContent =
                "✗ Falsch! Richtig wäre: " +
                richtigeAntwort.text;
        }

        antwortButtons.forEach((button) => {
            button.disabled = true;
        });

        naechsteFrageButton.disabled = false;
    });

});
antwortPruefenButton.addEventListener("click", () => {

    const frage = aktiveFragen[aktuelleFrage];

    if (frage.typ !== "multiple-choice") {
        return;
    }

    const allesRichtig =
        aktuelleAntworten.every((antwort, index) => {

            const wurdeAusgewaehlt =
                antwortButtons[index]
                    .classList.contains("ausgewaehlt");

            return antwort.richtig === wurdeAusgewaehlt;
        });


    if (allesRichtig) {

        ergebnis.textContent = "✓ Richtig!";

        punkte++;
        punkteAnzeige.textContent = punkte;

    } else {

        const richtigeAntworten =
            aktuelleAntworten
                .filter((antwort) => {
                    return antwort.richtig;
                })
                .map((antwort) => {
                    return antwort.text;
                })
                .join(", ");

        ergebnis.textContent =
            "✗ Falsch! Richtig wären: " +
            richtigeAntworten;
    }


    antwortButtons.forEach((button) => {
        button.disabled = true;
    });

    antwortPruefenButton.disabled = true;

    naechsteFrageButton.disabled = false;
});

naechsteFrageButton.addEventListener("click", () => {

    aktuelleFrage++;

    if (aktuelleFrage < aktiveFragen.length) {

        frageAnzeigen();

    } else {

    frageAnzeige.textContent = "Quiz beendet!";
    antwortPruefenButton.style.display = "none";
    antwortPruefenButton.disabled = true;

    fortschrittAnzeige.textContent =
        "Quiz abgeschlossen";

    ergebnis.textContent = "";

    antwortButtons.forEach((button) => {

        button.disabled = true;
        button.textContent = "";
        button.style.display = "none";

    });

    naechsteFrageButton.disabled = true;
    naechsteFrageButton.style.display = "none";

    quizErgebnisAnzeigen();

}

});

    kategorieButtons.forEach((button) => {

    button.addEventListener("click", () => {

        kategorieButtons.forEach((button) => {
            button.classList.remove("aktiv");
            bereiche.forEach((bereich) => {
    bereich.classList.remove("aktiv");
    });

    document
    .getElementById("quiz-bereich")
    .classList.add("aktiv");
        });

        button.classList.add("aktiv");

        const kategorie = button.dataset.kategorie;

        if (kategorie === "netzwerk") {

            aktiveFragen = netzwerkFragen;
            kategorieTitel.textContent = "Netzwerktechnik";

        } else if (kategorie === "programmierung") {

            aktiveFragen = programmierungFragen;
            kategorieTitel.textContent = "Programmierung";
        }

        aktuelleFrage = 0;
        punkte = 0;

        punkteAnzeige.textContent = punkte;

        frageAnzeigen();
        mobilesMenueSchliessen();

    });

});

mobileMenuButton.addEventListener("click", () => {

    const istOffen =
        hauptnavigation.classList.toggle("mobil-offen");

    if (istOffen) {

        mobileMenuButton.textContent =
            "✕ Menü schließen";

    } else {

        mobileMenuButton.textContent =
            "☰ Menü";

    }

});

function mobilesMenueSchliessen() {

    hauptnavigation.classList.remove("mobil-offen");

    mobileMenuButton.textContent =
        "☰ Menü";
}


const navButtons = document.querySelectorAll(".nav-button");
const bereiche = document.querySelectorAll(".bereich");
const quizUntermenue = document.getElementById("quiz-untermenue");


startQuizButton.addEventListener("click", () => {

    bereiche.forEach((bereich) => {
        bereich.classList.remove("aktiv");
    });

    document
        .getElementById("quiz-auswahl-bereich")
        .classList.add("aktiv");
});


startLernfelderButton.addEventListener("click", () => {

    bereiche.forEach((bereich) => {
        bereich.classList.remove("aktiv");
    });

    document
        .getElementById("lernfelder-bereich")
        .classList.add("aktiv");
});


navButtons.forEach((button) => {

    button.addEventListener("click", () => {

        navButtons.forEach((button) => {
            button.classList.remove("aktiv");
        });

        bereiche.forEach((bereich) => {
            bereich.classList.remove("aktiv");
        });

        button.classList.add("aktiv");

        const bereichId = button.dataset.bereich;

        document
            .getElementById(bereichId)
            .classList.add("aktiv");
        if (bereichId === "quiz-bereich") {

            quizUntermenue.classList.add("aktiv");

        } else {

            quizUntermenue.classList.remove("aktiv");
        }
        
        mobilesMenueSchliessen();
    
    });

});
function darkModeAktualisieren() {

    const darkModeAktiv =
        document.body.classList.contains("dark-mode");

    if (darkModeAktiv) {

        darkmodeButton.textContent =
            "☀️ Light Mode";

    } else {

        darkmodeButton.textContent =
            "🌙 Dark Mode";
    }
}


darkmodeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkModeAktiv =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "darkMode",
        darkModeAktiv
    );

    darkModeAktualisieren();
});


if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark-mode");
}

darkModeAktualisieren();

lernfelderAnzeigen();
frageAnzeigen();
// =========================================
// Globale Lerninhalt-Suche
// =========================================

const sucheInput =
    document.getElementById("suche-input");

const sucheErgebnisse =
    document.getElementById("suche-ergebnisse");


const suchIndex = [];


// Hilfsfunktion für Vertiefungsinhalte
function abschnittSuchtextErzeugen(abschnitt) {

    const texte = [
        abschnitt.id,
        abschnitt.titel,
        abschnitt.merksatz,
        abschnitt.hinweis
    ];


    if (abschnitt.texte) {
        texte.push(...abschnitt.texte);
    }


    if (abschnitt.liste) {
        texte.push(...abschnitt.liste);
    }


    if (abschnitt.beispiel) {

        texte.push(
            abschnitt.beispiel.titel,
            abschnitt.beispiel.text
        );
    }


    return texte
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
}


// Suchindex aufbauen
lernfelder.forEach(lernfeld => {

    // Lernfeld selbst
    suchIndex.push({

        typ: "lernfeld",

        titel:
            lernfeld.nummer +
            " – " +
            lernfeld.kurzTitel,

        info:
            "Lernfeld",

        suchtext: [
            lernfeld.id,
            lernfeld.nummer,
            lernfeld.titel,
            lernfeld.kurzTitel,
            lernfeld.beschreibung
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase(),

        lernfeld: lernfeld
    });


    // Themen des Lernfelds
    lernfeld.themen.forEach(thema => {

        suchIndex.push({

            typ: "thema",

            titel:
                thema.titel,

            info:
                lernfeld.nummer +
                " – " +
                lernfeld.kurzTitel,

            suchtext: [
                thema.id,
                thema.titel,
                thema.erklaerung,
                thema.merksatz
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase(),

            lernfeld: lernfeld,
            thema: thema
        });


        // Gibt es zu diesem Thema eine Vertiefung?
        if (
            thema.vertiefung &&
            vertiefungen[thema.vertiefung]
        ) {

            const vertiefung =
                vertiefungen[
                    thema.vertiefung
                ];


            vertiefung.abschnitte.forEach(
                abschnitt => {

                    suchIndex.push({

                        typ: "kapitel",

                        titel:
                            abschnitt.titel,

                        info:
                            vertiefung.titel +
                            " – Vertiefung",

                        suchtext:
                            abschnittSuchtextErzeugen(
                                abschnitt
                            ),

                        lernfeld: lernfeld,
                        thema: thema,
                        vertiefung: vertiefung,
                        abschnitt: abschnitt
                    });

                }
            );
        }

    });

});


// Bewertung eines Treffers
function suchTrefferBewerten(
    treffer,
    suchbegriff
) {

    const titel =
        treffer.titel.toLowerCase();


    if (titel === suchbegriff) {
        return 100;
    }


    if (titel.startsWith(suchbegriff)) {
        return 80;
    }


    if (titel.includes(suchbegriff)) {
        return 60;
    }


    if (
        treffer.suchtext.includes(
            suchbegriff
        )
    ) {
        return 20;
    }


    return 0;
}


// Lernfelder-Bereich öffnen
function lernfelderBereichOeffnen() {

    const button =
        document.querySelector(
            '.nav-button[data-bereich="lernfelder-bereich"]'
        );


    if (button) {
        button.click();
    }
}


// Treffer öffnen
function suchTrefferOeffnen(treffer) {

    lernfelderBereichOeffnen();


    // Lernfeld
    if (treffer.typ === "lernfeld") {

        lernfeldDetailsAnzeigen(
            treffer.lernfeld
        );

    }


    // Normales Thema
    if (treffer.typ === "thema") {

        themaDetailsAnzeigen(
            treffer.lernfeld,
            treffer.thema
        );

    }


    // Kapitel einer Vertiefung
    if (treffer.typ === "kapitel") {

        // Erst normale Themenseite öffnen
        themaDetailsAnzeigen(
            treffer.lernfeld,
            treffer.thema
        );


        // Vertiefungsbutton anklicken
        const vertiefungsButton =
            lernfelderListe.querySelector(
                ".vertiefungs-button"
            );


        if (vertiefungsButton) {

            vertiefungsButton.click();


            // Anschließend zum Kapitel scrollen
            requestAnimationFrame(() => {

                const ziel =
                    document.getElementById(
                        "vertiefung-" +
                        treffer.abschnitt.id
                    );


                if (ziel) {

                    ziel.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        }

    }


    // Suche danach schließen
    sucheInput.value = "";

    sucheErgebnisse.innerHTML = "";

    sucheErgebnisse.style.display =
        "none";
}


// Treffer anzeigen
function sucheAusfuehren() {

    const suchbegriff =
        sucheInput.value
            .trim()
            .toLowerCase();


    sucheErgebnisse.innerHTML = "";


    // Erst ab zwei Zeichen suchen
    if (suchbegriff.length < 2) {

        sucheErgebnisse.style.display =
            "none";

        return;
    }


    const treffer =
        suchIndex
            .map(eintrag => ({
                eintrag: eintrag,

                punkte:
                    suchTrefferBewerten(
                        eintrag,
                        suchbegriff
                    )
            }))
            .filter(
                treffer =>
                    treffer.punkte > 0
            )
            .sort(
                (a, b) =>
                    b.punkte - a.punkte
            )
            .slice(0, 8);


    // Keine Treffer
    if (treffer.length === 0) {

        const keineTreffer =
            document.createElement("div");

        keineTreffer.classList.add(
            "suche-keine-treffer"
        );

        keineTreffer.textContent =
            "Keine passenden Lerninhalte gefunden.";

        sucheErgebnisse.appendChild(
            keineTreffer
        );

        sucheErgebnisse.style.display =
            "block";

        return;
    }


    // Treffer erzeugen
    treffer.forEach(
        ({ eintrag }) => {

            const trefferElement =
                document.createElement("div");

            trefferElement.classList.add(
                "suche-treffer"
            );


            const titel =
                document.createElement("div");

            titel.classList.add(
                "suche-treffer-titel"
            );

            titel.textContent =
                eintrag.titel;


            const info =
                document.createElement("div");

            info.classList.add(
                "suche-treffer-info"
            );

            info.textContent =
                eintrag.info;


            trefferElement.appendChild(
                titel
            );

            trefferElement.appendChild(
                info
            );


            trefferElement.addEventListener(
                "click",
                () => {

                    suchTrefferOeffnen(
                        eintrag
                    );

                }
            );


            sucheErgebnisse.appendChild(
                trefferElement
            );

        }
    );


    sucheErgebnisse.style.display =
        "block";
}


// Während der Eingabe suchen
sucheInput.addEventListener(
    "input",
    sucheAusfuehren
);


// Suche beim Klick außerhalb schließen
document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".suche-container"
            )
        ) {

            sucheErgebnisse.style.display =
                "none";
        }

    }
);

// =========================================
// Prüfungsvorbereitung
// AP2 und WiSo
// AP1 befindet sich in pruefungen/ap1-ui.js
// =========================================

const pruefungAuswahl =
    document.querySelector(
        "#pruefung-bereich > .pruefung-auswahl"
    );

const ap2Bereich =
    document.getElementById("ap2-bereich");

const ap2Button =
    document.querySelector(
        '.pruefung-karte[data-pruefung="ap2"]'
    );

const ap2Zurueck =
    document.getElementById("ap2-zurueck");


const wisoBereich =
    document.getElementById("wiso-bereich");

const wisoButton =
    document.querySelector(
        '.pruefung-karte[data-pruefung="wiso"]'
    );

const wisoZurueck =
    document.getElementById("wiso-zurueck");


ap2Button.addEventListener("click", () => {

    pruefungAuswahl.style.display = "none";
    ap2Bereich.style.display = "block";
});


ap2Zurueck.addEventListener("click", () => {

    ap2Bereich.style.display = "none";
    pruefungAuswahl.style.display = "grid";
});


wisoButton.addEventListener("click", () => {

    pruefungAuswahl.style.display = "none";
    wisoBereich.style.display = "block";
});


wisoZurueck.addEventListener("click", () => {

    wisoBereich.style.display = "none";
    pruefungAuswahl.style.display = "grid";
});