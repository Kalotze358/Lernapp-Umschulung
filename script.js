const mobileMenuButton =
    document.getElementById("mobile-menu-button");

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
    ...programmierungFragen
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
let aktuelleFrage = 0;
let punkte = 0;
let aktuellesLernfeld = null;

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


buttonBereich.appendChild(wiederholenButton);
buttonBereich.appendChild(zurueckButton);

quizAuswertung.appendChild(buttonBereich);
}

function frageAnzeigen() {

    const frage = aktiveFragen[aktuelleFrage];
    fortschrittAnzeige.textContent =
    "Frage " +
    (aktuelleFrage + 1) +
    " von " +
    aktiveFragen.length;

    frageAnzeige.textContent = frage.frage;

    antwortButtons.forEach((button, index) => {
        button.textContent = frage.antworten[index];
        button.disabled = false;
    });

    ergebnis.textContent = "";

    quizAuswertung.innerHTML = "";

    naechsteFrageButton.disabled = true;
}

antwortButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const frage = aktiveFragen[aktuelleFrage];

        if (index === frage.richtig) {

            ergebnis.textContent = "✓ Richtig!";

            punkte++;
            punkteAnzeige.textContent = punkte;

        } else {

            const richtigeAntwort = frage.antworten[frage.richtig];

            ergebnis.textContent =
                "✗ Falsch! Richtig wäre: " + richtigeAntwort;
        }

        antwortButtons.forEach((button) => {
            button.disabled = true;
        });

        naechsteFrageButton.disabled = false;
    });

});

naechsteFrageButton.addEventListener("click", () => {

    aktuelleFrage++;

    if (aktuelleFrage < aktiveFragen.length) {

        frageAnzeigen();

    } else {


    frageAnzeige.textContent = "Quiz beendet!";

    fortschrittAnzeige.textContent =
        "Quiz abgeschlossen";

    ergebnis.textContent = "";

    antwortButtons.forEach((button) => {

        button.disabled = true;
        button.textContent = "";

    });

    naechsteFrageButton.disabled = true;

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