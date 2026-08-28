function pruefeFragenkatalog() {
    console.clear();

    console.log("====================================");
    console.log("🔍 PRÜFUNG DES FRAGENKATALOGS");
    console.log("====================================");

    const fehler = [];
    const warnungen = [];

    const erlaubteSchwierigkeiten = [
        "leicht",
        "mittel",
        "schwer"
    ];

    const erlaubteTypen = [
        "single-choice",
        "multiple-choice"
    ];

    // ------------------------------------
    // Lernfelder und Themen vorbereiten
    // ------------------------------------

    const lernfeldMap = new Map();

    lernfelder.forEach((lernfeld) => {
        lernfeldMap.set(lernfeld.id, lernfeld);
    });

    const alleThemenIds = new Set();

    lernfelder.forEach((lernfeld) => {
        lernfeld.themen.forEach((thema) => {
            alleThemenIds.add(thema.id);
        });
    });

    // ------------------------------------
    // Doppelte Fragen-IDs prüfen
    // ------------------------------------

    const verwendeteIds = new Set();

    alleFragen.forEach((frage) => {
        if (verwendeteIds.has(frage.id)) {
            fehler.push(
                `Doppelte Fragen-ID: ${frage.id}`
            );
        }

        verwendeteIds.add(frage.id);
    });

    // ------------------------------------
    // Einzelne Fragen prüfen
    // ------------------------------------

    alleFragen.forEach((frage) => {

        // ID
        if (!frage.id) {
            fehler.push(
                "Eine Frage besitzt keine ID."
            );
        }

        // Fragetext
        if (!frage.frage || frage.frage.trim() === "") {
            fehler.push(
                `${frage.id}: Kein Fragetext vorhanden.`
            );
        }

        // Lernfelder
        if (
            !Array.isArray(frage.lernfelder) ||
            frage.lernfelder.length === 0
        ) {
            fehler.push(
                `${frage.id}: Kein Lernfeld zugeordnet.`
            );
        } else {
            frage.lernfelder.forEach((lernfeldId) => {
                if (!lernfeldMap.has(lernfeldId)) {
                    fehler.push(
                        `${frage.id}: Unbekanntes Lernfeld "${lernfeldId}".`
                    );
                }
            });
        }

        // Themen
        if (
            !Array.isArray(frage.themen) ||
            frage.themen.length === 0
        ) {
            warnungen.push(
                `${frage.id}: Kein Thema zugeordnet.`
            );
        } else {
            frage.themen.forEach((themaId) => {
                if (!alleThemenIds.has(themaId)) {
                    fehler.push(
                        `${frage.id}: Unbekanntes Thema "${themaId}".`
                    );
                }
            });
        }

        // Schwierigkeit
        if (
            !erlaubteSchwierigkeiten.includes(
                frage.schwierigkeit
            )
        ) {
            fehler.push(
                `${frage.id}: Ungültige Schwierigkeit "${frage.schwierigkeit}".`
            );
        }

        // Fragetyp
        if (!erlaubteTypen.includes(frage.typ)) {
            fehler.push(
                `${frage.id}: Ungültiger Fragetyp "${frage.typ}".`
            );
        }

        // Antworten vorhanden?
        if (
            !Array.isArray(frage.antworten) ||
            frage.antworten.length < 2
        ) {
            fehler.push(
                `${frage.id}: Zu wenige oder keine Antworten vorhanden.`
            );

            return;
        }

        // Antwortstruktur prüfen
        frage.antworten.forEach((antwort, index) => {
            if (
                typeof antwort.text !== "string" ||
                antwort.text.trim() === ""
            ) {
                fehler.push(
                    `${frage.id}: Antwort ${index + 1} besitzt keinen gültigen Text.`
                );
            }

            if (typeof antwort.richtig !== "boolean") {
                fehler.push(
                    `${frage.id}: Antwort ${index + 1} besitzt keinen gültigen richtig-Wert.`
                );
            }
        });

        const richtigeAntworten =
            frage.antworten.filter(
                (antwort) => antwort.richtig
            );

        // Single Choice
        if (
            frage.typ === "single-choice" &&
            richtigeAntworten.length !== 1
        ) {
            fehler.push(
                `${frage.id}: Single-Choice benötigt genau eine richtige Antwort, gefunden: ${richtigeAntworten.length}.`
            );
        }

        // Multiple Choice
        if (
            frage.typ === "multiple-choice" &&
            richtigeAntworten.length < 2
        ) {
            warnungen.push(
                `${frage.id}: Multiple-Choice besitzt weniger als zwei richtige Antworten.`
            );
        }
    });

    // ------------------------------------
    // Fragen pro Lernfeld
    // ------------------------------------

    console.log("");
    console.log("📚 FRAGEN PRO LERNFELD");

    lernfelder.forEach((lernfeld) => {
        const anzahl =
            alleFragen.filter((frage) =>
                frage.lernfelder.includes(lernfeld.id)
            ).length;

        console.log(
            `${lernfeld.nummer}: ${anzahl} Fragen`
        );
    });

    // ------------------------------------
    // Schwierigkeitsverteilung
    // ------------------------------------

    console.log("");
    console.log("🎚️ SCHWIERIGKEIT");

    erlaubteSchwierigkeiten.forEach(
        (schwierigkeit) => {

            const anzahl =
                alleFragen.filter(
                    (frage) =>
                        frage.schwierigkeit ===
                        schwierigkeit
                ).length;

            console.log(
                `${schwierigkeit}: ${anzahl}`
            );
        }
    );

    // ------------------------------------
    // Themen ohne Fragen
    // ------------------------------------

    const themenOhneFragen = [];

    lernfelder.forEach((lernfeld) => {
        lernfeld.themen.forEach((thema) => {

            const hatFrage =
                alleFragen.some((frage) =>
                    frage.lernfelder.includes(
                        lernfeld.id
                    ) &&
                    frage.themen.includes(
                        thema.id
                    )
                );

            if (!hatFrage) {
                themenOhneFragen.push(
                    `${lernfeld.nummer} → ${thema.titel} (${thema.id})`
                );
            }
        });
    });

    console.log("");
    console.log("📖 THEMEN OHNE FRAGEN");

    if (themenOhneFragen.length === 0) {
        console.log(
            "✅ Alle Themen besitzen mindestens eine Frage."
        );
    } else {
        themenOhneFragen.forEach((thema) => {
            console.warn(thema);
        });
    }

    // ------------------------------------
    // Gesamtergebnis
    // ------------------------------------

    console.log("");
    console.log("====================================");
    console.log("📊 GESAMTERGEBNIS");
    console.log("====================================");

    console.log(
        `Einzigartige Fragen: ${alleFragen.length}`
    );

    console.log(
        `Fehler: ${fehler.length}`
    );

    console.log(
        `Warnungen: ${warnungen.length}`
    );

    if (fehler.length > 0) {
        console.log("");
        console.error("❌ FEHLER");

        fehler.forEach((fehlerText) => {
            console.error(fehlerText);
        });
    }

    if (warnungen.length > 0) {
        console.log("");
        console.warn("⚠️ WARNUNGEN");

        warnungen.forEach((warnung) => {
            console.warn(warnung);
        });
    }

    if (
        fehler.length === 0 &&
        warnungen.length === 0
    ) {
        console.log("");
        console.log(
            "✅ Fragenkatalog technisch sauber."
        );
    }

    console.log("====================================");

    return {
        fragen: alleFragen.length,
        fehler,
        warnungen,
        themenOhneFragen
    };
}