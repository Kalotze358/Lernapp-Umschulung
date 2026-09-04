// =========================================
// AP1 – Benutzeroberfläche und Logik
// =========================================

(function () {

    const pruefungAuswahl =
        document.querySelector(
            "#pruefung-bereich > .pruefung-auswahl"
        );

    const ap1Bereich =
        document.getElementById("ap1-bereich");

    const ap1Button =
        document.querySelector(
            '.pruefung-karte[data-pruefung="ap1"]'
        );

    const ap1Zurueck =
        document.getElementById("ap1-zurueck");


    const ap1ThemenButton =
        document.querySelector(
            '.pruefung-karte[data-ap1="themen"]'
        );

    const ap1ThemenBereich =
        document.getElementById(
            "ap1-themen-bereich"
        );

    const ap1ThemenZurueck =
        document.getElementById(
            "ap1-themen-zurueck"
        );


    const ap1HardwareButton =
        document.querySelector(
            '.pruefung-karte[data-ap1-thema="hardware"]'
        );

    const ap1HardwareBereich =
        document.getElementById(
            "ap1-hardware-bereich"
        );

    const ap1HardwareZurueck =
        document.getElementById(
            "ap1-hardware-zurueck"
        );
    
        const ap1HardwareThemaButtons =
        document.querySelectorAll(
            "[data-hardware-thema]"
        );


    const ap1AufgabeBereich =
        document.getElementById(
            "ap1-aufgabe-bereich"
        );

    const ap1AufgabeInhalt =
        document.getElementById(
            "ap1-aufgabe-inhalt"
        );

    const ap1AufgabeZurueck =
        document.getElementById(
            "ap1-aufgabe-zurueck"
        );

    const ap1FortschrittInhalt =
        document.getElementById(
            "ap1-fortschritt-inhalt"
        );


    let ap1AktuelleFragen = [];
    let ap1AktuellerIndex = 0;

     function ap1ErgebnisSpeichern(frage, punkte) {

    const speicherName = "ap1-pruefungsergebnisse";

    const gespeicherteErgebnisse =
        JSON.parse(
            localStorage.getItem(speicherName)
        ) || [];

    const ergebnis = {
        frageId: frage.id,
        bereich: frage.bereich,
        thema: frage.thema,
        punkteErreicht: punkte,
        punkteMoeglich: frage.punkte,
        prozent: Math.round(
            (punkte / frage.punkte) * 100
        ),
        datum: new Date().toISOString()
    };

    gespeicherteErgebnisse.push(ergebnis);

    // Damit der Speicher nicht unbegrenzt wächst
    const letzteErgebnisse =
        gespeicherteErgebnisse.slice(-200);

    localStorage.setItem(
        speicherName,
        JSON.stringify(letzteErgebnisse)
    );
}
function ap1FortschrittAktualisieren() {

    const gespeicherteErgebnisse =
        JSON.parse(
            localStorage.getItem(
                "ap1-pruefungsergebnisse"
            )
        ) || [];


    if (gespeicherteErgebnisse.length === 0) {

        ap1FortschrittInhalt.innerHTML =
            "<p>Noch keine Aufgaben bearbeitet.</p>";

        return;
    }


    // =========================================
    // Nur den jeweils letzten Versuch
    // einer Aufgabe verwenden
    // =========================================

    const letzteVersuche = {};

    gespeicherteErgebnisse.forEach(ergebnis => {

        letzteVersuche[ergebnis.frageId] =
            ergebnis;

    });


    const ergebnisse =
        Object.values(letzteVersuche);


    // =========================================
    // Gesamtpunktzahl
    // =========================================

    const gesamtErreicht =
        ergebnisse.reduce(
            (summe, ergebnis) =>
                summe + ergebnis.punkteErreicht,
            0
        );

    const gesamtMoeglich =
        ergebnisse.reduce(
            (summe, ergebnis) =>
                summe + ergebnis.punkteMoeglich,
            0
        );


    const gesamtProzent =
        gesamtMoeglich > 0
            ? Math.round(
                (gesamtErreicht /
                    gesamtMoeglich) * 100
            )
            : 0;


    // =========================================
    // AP1-Bereiche
    // =========================================

    const bereiche = [

        {
            id: "hardware",
            name: "🖥️ Hardware & Arbeitsplatz"
        },

        {
            id: "netzwerk",
            name: "🌐 Netzwerkgrundlagen"
        },

        {
            id: "sicherheit",
            name: "🔐 IT-Sicherheit & Datenschutz"
        },

        {
            id: "projekt",
            name: "📋 Projektmanagement"
        },

        {
            id: "wirtschaft",
            name: "💰 Wirtschaftlichkeit & Beschaffung"
        },

        {
            id: "daten",
            name: "💾 Daten & Programmierung"
        }

    ];


    let bereicheHtml = "";


    bereiche.forEach(bereich => {

        const bereichErgebnisse =
            ergebnisse.filter(
                ergebnis =>
                    ergebnis.bereich === bereich.id
            );


        if (bereichErgebnisse.length === 0) {

            bereicheHtml += `

                <div class="fortschritt-zeile">

                    <span>${bereich.name}</span>

                    <strong>–</strong>

                </div>
            `;

            return;
        }


        const erreicht =
            bereichErgebnisse.reduce(
                (summe, ergebnis) =>
                    summe +
                    ergebnis.punkteErreicht,
                0
            );

        const moeglich =
            bereichErgebnisse.reduce(
                (summe, ergebnis) =>
                    summe +
                    ergebnis.punkteMoeglich,
                0
            );


        const prozent =
            Math.round(
                (erreicht / moeglich) * 100
            );


        bereicheHtml += `

            <div class="fortschritt-zeile">

                <span>${bereich.name}</span>

                <strong>${prozent} %</strong>

            </div>
        `;

    });


    ap1FortschrittInhalt.innerHTML = `

        <div class="fortschritt-gesamt">

            <div>
                <span>Gesamt</span>
                <strong>${gesamtProzent} %</strong>
            </div>

            <div>
                <span>Bearbeitete Aufgaben</span>
                <strong>${ergebnisse.length}</strong>
            </div>

            <div>
                <span>Punkte</span>
                <strong>
                    ${gesamtErreicht} / ${gesamtMoeglich}
                </strong>
            </div>

        </div>

        <div class="fortschritt-bereiche">

            ${bereicheHtml}

        </div>
    `;
}

function ap1AufgabeAnzeigen(frage) {

    let systemeHtml = "";

    frage.systeme.forEach(system => {

        systemeHtml += `
            <div class="pruefungs-system">

                <h3>${system.name}</h3>

                <ul>
                    ${system.daten
                        .map(datum => `<li>${datum}</li>`)
                        .join("")}
                </ul>

            </div>
        `;

    });


    ap1AufgabeInhalt.innerHTML = `

    <p class="pruefungs-aufgabenstand">
        Aufgabe ${ap1AktuellerIndex + 1}
        von ${ap1AktuelleFragen.length}
    </p>

    <h2>${frage.titel}</h2>

        <p>
            <strong>${frage.punkte} Punkte</strong>
        </p>

        <div class="pruefungs-situation">

            <h3>Ausgangssituation</h3>

            <p>${frage.situation}</p>

        </div>


        <div class="pruefungs-systeme">

            ${systemeHtml}

        </div>


        <div class="pruefungs-aufgabe">

            <h3>Aufgabe</h3>

            <p>${frage.aufgabe}</p>

            <textarea
                id="ap1-freie-antwort"
                rows="8"
                placeholder="Deine Antwort ..."
            ></textarea>

            <button
                id="ap1-musterloesung-button"
                class="pruefung-aktion-button"
            >
                Musterlösung anzeigen
            </button>

            <div
                id="ap1-musterloesung"
                class="pruefung-detail"
            ></div>
            <div
                id="ap1-selbstbewertung"
                class="ap1-selbstbewertung"
                style="display: none;"
            >

                <h3>Selbstbewertung</h3>

                <p>
                    Vergleiche deine Antwort mit der Musterlösung.
                    Wie viele Punkte würdest du dir geben?
                </p>

                <div id="ap1-punkte-buttons"></div>

                <p id="ap1-punkte-ergebnis"></p>
            <div class="pruefungs-navigation">

                <button
                    id="ap1-vorherige-aufgabe"
                    class="pruefung-aktion-button"
                >
                    ← Vorherige Aufgabe
                </button>

                <button
                    id="ap1-naechste-aufgabe"
                    class="pruefung-aktion-button"
                >
                    Nächste Aufgabe →
                </button>

            </div>
            </div>

        </div>
    `;


    const musterButton =
        document.getElementById(
            "ap1-musterloesung-button"
        );

    const musterBereich =
        document.getElementById(
            "ap1-musterloesung"
        );
        const selbstbewertung =
    document.getElementById(
        "ap1-selbstbewertung"
    );

const punkteButtons =
    document.getElementById(
        "ap1-punkte-buttons"
    );
const vorherigeAufgabeButton =
    document.getElementById(
        "ap1-vorherige-aufgabe"
    );

const naechsteAufgabeButton =
    document.getElementById(
        "ap1-naechste-aufgabe"
    );
    vorherigeAufgabeButton.disabled =
    ap1AktuellerIndex === 0;

naechsteAufgabeButton.disabled =
    ap1AktuellerIndex ===
    ap1AktuelleFragen.length - 1;
const punkteErgebnis =
    document.getElementById(
        "ap1-punkte-ergebnis"
    );
    punkteButtons.innerHTML =
    Array.from(
        { length: frage.punkte + 1 },
        (_, punkte) => `
            <button
                class="punkte-button"
                data-punkte="${punkte}"
            >
                ${punkte}
            </button>
        `
    ).join("");


    musterButton.addEventListener("click", () => {

        musterBereich.innerHTML = `

            <h3>Musterlösung</h3>

            <p>${frage.musterloesung}</p>
        `;

        musterBereich.style.display = "block";
        selbstbewertung.style.display = "block";

    });
    punkteButtons
    .querySelectorAll(".punkte-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const punkte =
                Number(button.dataset.punkte);

            punkteButtons
                .querySelectorAll(".punkte-button")
                .forEach(btn =>
                    btn.classList.remove("ausgewaehlt")
                );

            button.classList.add("ausgewaehlt");

            const prozent =
                Math.round(
                    (punkte / frage.punkte) * 100
                );

            punkteErgebnis.textContent =
                `${punkte} von ${frage.punkte} Punkten – ${prozent} %`;
            ap1ErgebnisSpeichern(frage, punkte);
            ap1FortschrittAktualisieren();
        });

    });
vorherigeAufgabeButton.addEventListener(
    "click",
    () => {

        if (ap1AktuellerIndex > 0) {

            ap1AktuellerIndex--;

            ap1AufgabeAnzeigen(
                ap1AktuelleFragen[
                    ap1AktuellerIndex
                ]
            );
        }
    }
);


naechsteAufgabeButton.addEventListener(
    "click",
    () => {

        if (
            ap1AktuellerIndex <
            ap1AktuelleFragen.length - 1
        ) {

            ap1AktuellerIndex++;

            ap1AufgabeAnzeigen(
                ap1AktuelleFragen[
                    ap1AktuellerIndex
                ]
            );
        }
    }
);
}
// =========================================
// AP1 – Navigation
// =========================================

ap1Button.addEventListener("click", () => {

    pruefungAuswahl.style.display = "none";
    ap1Bereich.style.display = "block";

    ap1FortschrittAktualisieren();
});


ap1Zurueck.addEventListener("click", () => {

    ap1Bereich.style.display = "none";
    pruefungAuswahl.style.display = "grid";
});


ap1ThemenButton.addEventListener("click", () => {

    ap1Bereich.style.display = "none";
    ap1ThemenBereich.style.display = "block";
});


ap1ThemenZurueck.addEventListener("click", () => {

    ap1ThemenBereich.style.display = "none";
    ap1Bereich.style.display = "block";
});


ap1HardwareButton.addEventListener("click", () => {

    ap1ThemenBereich.style.display = "none";
    ap1HardwareBereich.style.display = "block";
});


ap1HardwareZurueck.addEventListener("click", () => {

    ap1HardwareBereich.style.display = "none";
    ap1ThemenBereich.style.display = "block";
});


// =========================================
// Alle Hardware-Themen automatisch öffnen
// =========================================

ap1HardwareThemaButtons.forEach(button => {

    button.addEventListener("click", () => {

        const thema =
            button.dataset.hardwareThema;

        ap1AktuelleFragen =
            ap1Pruefungsfragen.filter(
                frage =>
                    frage.bereich === "hardware" &&
                    frage.thema === thema
            );


        if (ap1AktuelleFragen.length === 0) {

            alert(
                "Für dieses Thema sind noch keine Prüfungsaufgaben vorhanden."
            );

            return;
        }


        ap1AktuellerIndex = 0;

        ap1HardwareBereich.style.display =
            "none";

        ap1AufgabeBereich.style.display =
            "block";

        ap1AufgabeAnzeigen(
            ap1AktuelleFragen[0]
        );
    });
});


ap1AufgabeZurueck.addEventListener("click", () => {

    ap1AufgabeBereich.style.display = "none";
    ap1HardwareBereich.style.display = "block";
});


})();


