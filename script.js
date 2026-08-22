const frageAnzeige = document.getElementById("frage");
const antwortButtons = document.querySelectorAll("#antworten button");
const ergebnis = document.getElementById("ergebnis");
const punkteAnzeige = document.getElementById("punkte");
const naechsteFrageButton = document.getElementById("naechste-frage");
const kategorieButtons = document.querySelectorAll(".kategorie-button");
const kategorieTitel = document.getElementById("kategorie-titel");

let aktiveFragen = netzwerkFragen;

let aktuelleFrage = 0;
let punkte = 0;

function frageAnzeigen() {

    const frage = aktiveFragen[aktuelleFrage];

    frageAnzeige.textContent = frage.frage;

    antwortButtons.forEach((button, index) => {
        button.textContent = frage.antworten[index];
        button.disabled = false;
    });

    ergebnis.textContent = "";

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

        ergebnis.textContent =
            "Du hast " + punkte + " von " + aktiveFragen.length + " Punkten erreicht.";

        antwortButtons.forEach((button) => {
            button.disabled = true;
        });

        naechsteFrageButton.disabled = true;
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

    });

});
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

    });

});
frageAnzeigen();