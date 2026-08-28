function pruefeFragenkatalog() {
    console.clear();

    console.log("======================================");
    console.log("🔍 PRÜFUNG DES FRAGENKATALOGS – V4");
    console.log("======================================");

    const fehler = [];
    const warnungen = [];
    const hinweise = [];

    const erlaubteSchwierigkeiten = [
        "leicht",
        "mittel",
        "schwer"
    ];

    const erlaubteTypen = [
        "single-choice",
        "multiple-choice"
    ];

    // ====================================
    // Hilfsfunktionen
    // ====================================

    function normalisiereText(text) {
        return String(text)
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");
    }

    function sichereListe(wert) {
        return Array.isArray(wert) ? wert : [];
    }

    // ====================================
    // Lernfelder vorbereiten
    // ====================================

    const lernfeldMap = new Map();
    const themenProLernfeld = new Map();
    const alleThemenIds = new Set();

    lernfelder.forEach((lernfeld) => {
        if (lernfeldMap.has(lernfeld.id)) {
            fehler.push(
                `Doppelte Lernfeld-ID: ${lernfeld.id}`
            );
        }

        lernfeldMap.set(lernfeld.id, lernfeld);

        const themenSet = new Set();

        sichereListe(lernfeld.themen).forEach((thema) => {
            if (themenSet.has(thema.id)) {
                fehler.push(
                    `${lernfeld.nummer}: Doppelte Themen-ID "${thema.id}".`
                );
            }

            themenSet.add(thema.id);
            alleThemenIds.add(thema.id);

            if (!thema.titel) {
                warnungen.push(
                    `${lernfeld.nummer}: Thema "${thema.id}" besitzt keinen Titel.`
                );
            }

            if (!thema.erklaerung) {
                warnungen.push(
                    `${lernfeld.nummer}: Thema "${thema.id}" besitzt keine Erklärung.`
                );
            }

            if (!thema.merksatz) {
                warnungen.push(
                    `${lernfeld.nummer}: Thema "${thema.id}" besitzt keinen Merksatz.`
                );
            }
        });

        themenProLernfeld.set(
            lernfeld.id,
            themenSet
        );
    });

    // ====================================
    // Doppelte Fragen-IDs
    // ====================================

    const verwendeteIds = new Set();

    alleFragen.forEach((frage) => {
        if (verwendeteIds.has(frage.id)) {
            fehler.push(
                `Doppelte Fragen-ID: ${frage.id}`
            );
        }

        verwendeteIds.add(frage.id);
    });

    // ====================================
    // Doppelte Fragetexte
    // ====================================

    const frageTexte = new Map();

    alleFragen.forEach((frage) => {
        if (!frage.frage) {
            return;
        }

        const normalisiert =
            normalisiereText(frage.frage);

        if (frageTexte.has(normalisiert)) {
            warnungen.push(
                `Möglicherweise doppelte Frage: ` +
                `${frageTexte.get(normalisiert)} und ${frage.id}`
            );
        } else {
            frageTexte.set(
                normalisiert,
                frage.id
            );
        }
    });

    // ====================================
    // Einzelne Fragen prüfen
    // ====================================

    alleFragen.forEach((frage) => {

        // --------------------------------
        // ID
        // --------------------------------

        if (!frage.id) {
            fehler.push(
                "Eine Frage besitzt keine ID."
            );
        }

        // --------------------------------
        // Fragetext
        // --------------------------------

        if (
            !frage.frage ||
            frage.frage.trim() === ""
        ) {
            fehler.push(
                `${frage.id}: Kein Fragetext vorhanden.`
            );
        }

        // --------------------------------
        // Lernfelder
        // --------------------------------

        const frageLernfelder =
            sichereListe(frage.lernfelder);

        if (frageLernfelder.length === 0) {
            fehler.push(
                `${frage.id}: Kein Lernfeld zugeordnet.`
            );
        }

        frageLernfelder.forEach(
            (lernfeldId) => {

                if (!lernfeldMap.has(lernfeldId)) {
                    fehler.push(
                        `${frage.id}: Unbekanntes Lernfeld "${lernfeldId}".`
                    );
                }
            }
        );

        // --------------------------------
        // Themen
        // --------------------------------

        const frageThemen =
            sichereListe(frage.themen);

        if (frageThemen.length === 0) {
            warnungen.push(
                `${frage.id}: Kein Thema zugeordnet.`
            );
        }

        frageThemen.forEach((themaId) => {

            if (!alleThemenIds.has(themaId)) {
                fehler.push(
                    `${frage.id}: Unbekanntes Thema "${themaId}".`
                );

                return;
            }

            const passtZuLernfeld =
                frageLernfelder.some(
                    (lernfeldId) => {

                        const themenSet =
                            themenProLernfeld.get(
                                lernfeldId
                            );

                        return (
                            themenSet &&
                            themenSet.has(themaId)
                        );
                    }
                );

            if (!passtZuLernfeld) {
                warnungen.push(
                    `${frage.id}: Thema "${themaId}" ` +
                    `gehört zu keinem der zugeordneten Lernfelder.`
                );
            }
        });

        // --------------------------------
        // Schwierigkeit
        // --------------------------------

        if (
            !erlaubteSchwierigkeiten.includes(
                frage.schwierigkeit
            )
        ) {
            fehler.push(
                `${frage.id}: Ungültige Schwierigkeit ` +
                `"${frage.schwierigkeit}".`
            );
        }

        // --------------------------------
        // Fragetyp
        // --------------------------------

        if (!erlaubteTypen.includes(frage.typ)) {
            fehler.push(
                `${frage.id}: Ungültiger Fragetyp ` +
                `"${frage.typ}".`
            );
        }

        // --------------------------------
        // Antworten
        // --------------------------------

        if (!Array.isArray(frage.antworten)) {
            fehler.push(
                `${frage.id}: Antworten fehlen.`
            );

            return;
        }

        if (frage.antworten.length < 2) {
            fehler.push(
                `${frage.id}: Zu wenige Antworten vorhanden.`
            );
        }

        // Unsere App ist momentan auf
        // vier Antwortmöglichkeiten ausgelegt.
        if (frage.antworten.length !== 4) {
            warnungen.push(
                `${frage.id}: Besitzt ${frage.antworten.length} ` +
                `statt 4 Antwortmöglichkeiten.`
            );
        }

        const antwortTexte = new Set();

        frage.antworten.forEach(
            (antwort, index) => {

                if (
                    typeof antwort.text !== "string" ||
                    antwort.text.trim() === ""
                ) {
                    fehler.push(
                        `${frage.id}: Antwort ${index + 1} ` +
                        `besitzt keinen gültigen Text.`
                    );
                }

                if (
                    typeof antwort.richtig !==
                    "boolean"
                ) {
                    fehler.push(
                        `${frage.id}: Antwort ${index + 1} ` +
                        `besitzt keinen gültigen richtig-Wert.`
                    );
                }

                const normalisiert =
                    normalisiereText(
                        antwort.text
                    );

                if (
                    normalisiert !== "" &&
                    antwortTexte.has(normalisiert)
                ) {
                    warnungen.push(
                        `${frage.id}: Doppelte Antwort ` +
                        `"${antwort.text}".`
                    );
                }

                antwortTexte.add(normalisiert);
            }
        );

        const richtigeAntworten =
            frage.antworten.filter(
                (antwort) =>
                    antwort.richtig === true
            );

        const falscheAntworten =
            frage.antworten.filter(
                (antwort) =>
                    antwort.richtig === false
            );

        // --------------------------------
        // Single Choice
        // --------------------------------

        if (
            frage.typ === "single-choice" &&
            richtigeAntworten.length !== 1
        ) {
            fehler.push(
                `${frage.id}: Single-Choice benötigt ` +
                `genau eine richtige Antwort. ` +
                `Gefunden: ${richtigeAntworten.length}.`
            );
        }

        // --------------------------------
        // Multiple Choice
        // --------------------------------

        if (
            frage.typ === "multiple-choice" &&
            richtigeAntworten.length < 2
        ) {
            warnungen.push(
                `${frage.id}: Multiple-Choice besitzt ` +
                `weniger als zwei richtige Antworten.`
            );
        }

        if (
            frage.typ === "multiple-choice" &&
            falscheAntworten.length === 0
        ) {
            warnungen.push(
                `${frage.id}: Bei Multiple-Choice sind ` +
                `alle Antworten richtig.`
            );
        }
    });

    // ====================================
    // Statistik pro Lernfeld
    // ====================================

    console.log("");
    console.log("📚 LERNFELD-STATISTIK");

    const lernfeldStatistik =
        lernfelder.map((lernfeld) => {

            const fragen =
                alleFragen.filter(
                    (frage) =>
                        sichereListe(
                            frage.lernfelder
                        ).includes(
                            lernfeld.id
                        )
                );

            const themen =
                sichereListe(
                    lernfeld.themen
                );

            const abgedeckteThemen =
                themen.filter((thema) =>
                    fragen.some((frage) =>
                        sichereListe(
                            frage.themen
                        ).includes(
                            thema.id
                        )
                    )
                );

            return {
                Lernfeld: lernfeld.nummer,
                Fragen: fragen.length,

                Leicht:
                    fragen.filter(
                        (frage) =>
                            frage.schwierigkeit ===
                            "leicht"
                    ).length,

                Mittel:
                    fragen.filter(
                        (frage) =>
                            frage.schwierigkeit ===
                            "mittel"
                    ).length,

                Schwer:
                    fragen.filter(
                        (frage) =>
                            frage.schwierigkeit ===
                            "schwer"
                    ).length,

                Single:
                    fragen.filter(
                        (frage) =>
                            frage.typ ===
                            "single-choice"
                    ).length,

                Multiple:
                    fragen.filter(
                        (frage) =>
                            frage.typ ===
                            "multiple-choice"
                    ).length,

                Themen:
                    `${abgedeckteThemen.length}/${themen.length}`
            };
        });

    console.table(lernfeldStatistik);

    // ====================================
    // Gesamtverteilung Schwierigkeit
    // ====================================

    console.log("");
    console.log("🎚️ SCHWIERIGKEIT GESAMT");

    const schwierigkeitsStatistik =
        erlaubteSchwierigkeiten.map(
            (schwierigkeit) => ({
                Schwierigkeit:
                    schwierigkeit,

                Anzahl:
                    alleFragen.filter(
                        (frage) =>
                            frage.schwierigkeit ===
                            schwierigkeit
                    ).length
            })
        );

    console.table(
        schwierigkeitsStatistik
    );

    // ====================================
    // Fragetypen
    // ====================================

    console.log("");
    console.log("🔘 FRAGETYPEN");

    console.table([
        {
            Typ: "Single Choice",
            Anzahl:
                alleFragen.filter(
                    (frage) =>
                        frage.typ ===
                        "single-choice"
                ).length
        },
        {
            Typ: "Multiple Choice",
            Anzahl:
                alleFragen.filter(
                    (frage) =>
                        frage.typ ===
                        "multiple-choice"
                ).length
        }
    ]);

    // ====================================
    // Fragen pro Thema
    // ====================================

    console.log("");
    console.log("📖 FRAGEN PRO THEMA");

    lernfelder.forEach((lernfeld) => {

        const themenStatistik =
            sichereListe(
                lernfeld.themen
            ).map((thema) => {

                const anzahl =
                    alleFragen.filter(
                        (frage) =>
                            sichereListe(
                                frage.lernfelder
                            ).includes(
                                lernfeld.id
                            ) &&
                            sichereListe(
                                frage.themen
                            ).includes(
                                thema.id
                            )
                    ).length;

                return {
                    Thema: thema.titel,
                    ID: thema.id,
                    Fragen: anzahl
                };
            });

        console.groupCollapsed(
            `${lernfeld.nummer} – Themenübersicht`
        );

        console.table(
            themenStatistik
        );

        console.groupEnd();
    });
// ====================================
// Themenabdeckung analysieren
// ====================================

console.log("");
console.log("📊 THEMENABDECKUNG");

const themenAbdeckungStatistik = [];

lernfelder.forEach((lernfeld) => {

    sichereListe(
        lernfeld.themen
    ).forEach((thema) => {

        const anzahl =
            alleFragen.filter(
                (frage) =>
                    sichereListe(
                        frage.lernfelder
                    ).includes(
                        lernfeld.id
                    ) &&
                    sichereListe(
                        frage.themen
                    ).includes(
                        thema.id
                    )
            ).length;

        themenAbdeckungStatistik.push({
            Lernfeld: lernfeld.nummer,
            Thema: thema.titel,
            ID: thema.id,
            Fragen: anzahl
        });
    });
});

const themenMitEinerFrage =
    themenAbdeckungStatistik.filter(
        (thema) => thema.Fragen === 1
    );

const themenMitZweiFragen =
    themenAbdeckungStatistik.filter(
        (thema) => thema.Fragen === 2
    );

const themenMitDreiOderMehr =
    themenAbdeckungStatistik.filter(
        (thema) => thema.Fragen >= 3
    );

// Übersicht
console.table([
    {
        Kategorie: "Nur 1 Frage",
        Themen: themenMitEinerFrage.length
    },
    {
        Kategorie: "2 Fragen",
        Themen: themenMitZweiFragen.length
    },
    {
        Kategorie: "3 oder mehr Fragen",
        Themen: themenMitDreiOderMehr.length
    }
]);

// Themen mit nur einer Frage
console.groupCollapsed(
    `🔴 Nur 1 Frage – ${themenMitEinerFrage.length} Themen`
);

if (themenMitEinerFrage.length > 0) {
    console.table(
        themenMitEinerFrage
    );
} else {
    console.log(
        "✅ Kein Thema besitzt nur eine Frage."
    );
}

console.groupEnd();

// Themen mit zwei Fragen
console.groupCollapsed(
    `🟡 2 Fragen – ${themenMitZweiFragen.length} Themen`
);

if (themenMitZweiFragen.length > 0) {
    console.table(
        themenMitZweiFragen
    );
} else {
    console.log(
        "✅ Kein Thema besitzt genau zwei Fragen."
    );
}

console.groupEnd();

// Themen mit mindestens drei Fragen
console.groupCollapsed(
    `🟢 3+ Fragen – ${themenMitDreiOderMehr.length} Themen`
);

if (themenMitDreiOderMehr.length > 0) {
    console.table(
        themenMitDreiOderMehr
    );
} else {
    console.log(
        "Noch kein Thema besitzt mindestens drei Fragen."
    );
}

console.groupEnd();

// Hinweis für weiteren Ausbau
if (themenMitEinerFrage.length > 0) {
    hinweise.push(
        `${themenMitEinerFrage.length} Themen besitzen bisher nur eine Frage.`
    );
}
// ====================================
// Ausbau-Prioritäten
// ====================================

console.log("");
console.log("🎯 AUSBAU-PRIORITÄTEN");

const ausbauPrioritaeten = [];

lernfelder.forEach((lernfeld) => {

    sichereListe(
        lernfeld.themen
    ).forEach((thema) => {

        const fragen =
            alleFragen.filter(
                (frage) =>
                    sichereListe(
                        frage.lernfelder
                    ).includes(
                        lernfeld.id
                    ) &&
                    sichereListe(
                        frage.themen
                    ).includes(
                        thema.id
                    )
            );

        const leicht =
            fragen.filter(
                (frage) =>
                    frage.schwierigkeit ===
                    "leicht"
            ).length;

        const mittel =
            fragen.filter(
                (frage) =>
                    frage.schwierigkeit ===
                    "mittel"
            ).length;

        const schwer =
            fragen.filter(
                (frage) =>
                    frage.schwierigkeit ===
                    "schwer"
            ).length;

        let prioritaet;

        if (fragen.length <= 1) {
            prioritaet = "hoch";
        } else if (fragen.length === 2) {
            prioritaet = "mittel";
        } else {
            prioritaet = "gut";
        }

        ausbauPrioritaeten.push({
            Lernfeld: lernfeld.nummer,
            Thema: thema.titel,
            ID: thema.id,
            Fragen: fragen.length,
            Leicht: leicht,
            Mittel: mittel,
            Schwer: schwer,
            Prioritaet: prioritaet
        });
    });
});

// ------------------------------------
// Kategorien bilden
// ------------------------------------

const prioritaetHoch =
    ausbauPrioritaeten.filter(
        (eintrag) =>
            eintrag.Prioritaet === "hoch"
    );

const prioritaetMittel =
    ausbauPrioritaeten.filter(
        (eintrag) =>
            eintrag.Prioritaet === "mittel"
    );

const prioritaetGut =
    ausbauPrioritaeten.filter(
        (eintrag) =>
            eintrag.Prioritaet === "gut"
    );

// ------------------------------------
// Übersicht
// ------------------------------------

console.table([
    {
        Prioritaet: "🔴 Hoch",
        Bedeutung: "0–1 Fragen",
        Themen: prioritaetHoch.length
    },
    {
        Prioritaet: "🟡 Mittel",
        Bedeutung: "2 Fragen",
        Themen: prioritaetMittel.length
    },
    {
        Prioritaet: "🟢 Gut",
        Bedeutung: "3+ Fragen",
        Themen: prioritaetGut.length
    }
]);

// ------------------------------------
// Hohe Priorität
// ------------------------------------

console.groupCollapsed(
    `🔴 HOHE PRIORITÄT – ${prioritaetHoch.length} Themen`
);

if (prioritaetHoch.length > 0) {
    console.table(
        prioritaetHoch.map((eintrag) => ({
            Lernfeld: eintrag.Lernfeld,
            Thema: eintrag.Thema,
            Fragen: eintrag.Fragen,
            Leicht: eintrag.Leicht,
            Mittel: eintrag.Mittel,
            Schwer: eintrag.Schwer
        }))
    );
} else {
    console.log(
        "✅ Keine Themen mit hoher Ausbau-Priorität."
    );
}

console.groupEnd();

// ------------------------------------
// Mittlere Priorität
// ------------------------------------

console.groupCollapsed(
    `🟡 MITTLERE PRIORITÄT – ${prioritaetMittel.length} Themen`
);

if (prioritaetMittel.length > 0) {
    console.table(
        prioritaetMittel.map((eintrag) => ({
            Lernfeld: eintrag.Lernfeld,
            Thema: eintrag.Thema,
            Fragen: eintrag.Fragen,
            Leicht: eintrag.Leicht,
            Mittel: eintrag.Mittel,
            Schwer: eintrag.Schwer
        }))
    );
} else {
    console.log(
        "✅ Keine Themen mit mittlerer Ausbau-Priorität."
    );
}

console.groupEnd();

// ------------------------------------
// Gut abgedeckt
// ------------------------------------

console.groupCollapsed(
    `🟢 GUT ABGEDECKT – ${prioritaetGut.length} Themen`
);

if (prioritaetGut.length > 0) {
    console.table(
        prioritaetGut.map((eintrag) => ({
            Lernfeld: eintrag.Lernfeld,
            Thema: eintrag.Thema,
            Fragen: eintrag.Fragen,
            Leicht: eintrag.Leicht,
            Mittel: eintrag.Mittel,
            Schwer: eintrag.Schwer
        }))
    );
}

console.groupEnd();
    // ====================================
    // Themen ohne Fragen
    // ====================================

    const themenOhneFragen = [];

    lernfelder.forEach((lernfeld) => {

        sichereListe(
            lernfeld.themen
        ).forEach((thema) => {

            const hatFrage =
                alleFragen.some(
                    (frage) =>
                        sichereListe(
                            frage.lernfelder
                        ).includes(
                            lernfeld.id
                        ) &&
                        sichereListe(
                            frage.themen
                        ).includes(
                            thema.id
                        )
                );

            if (!hatFrage) {
                themenOhneFragen.push(
                    `${lernfeld.nummer} → ` +
                    `${thema.titel} (${thema.id})`
                );
            }
        });
    });

    console.log("");
    console.log("📕 THEMEN OHNE FRAGEN");

    if (themenOhneFragen.length === 0) {
        console.log(
            "✅ Alle Themen besitzen mindestens eine Frage."
        );
    } else {
        themenOhneFragen.forEach(
            (thema) =>
                console.warn(thema)
        );
    }

    // ====================================
    // Lernfelder ohne schwere Fragen
    // ====================================

    const ohneSchwereFragen =
        lernfelder.filter(
            (lernfeld) =>
                !alleFragen.some(
                    (frage) =>
                        sichereListe(
                            frage.lernfelder
                        ).includes(
                            lernfeld.id
                        ) &&
                        frage.schwierigkeit ===
                        "schwer"
                )
        );

    console.log("");
    console.log("🧠 LERNFELDER OHNE SCHWERE FRAGEN");

    if (ohneSchwereFragen.length === 0) {
        console.log(
            "✅ Jedes Lernfeld besitzt schwere Fragen."
        );
    } else {
        ohneSchwereFragen.forEach(
            (lernfeld) => {
                console.log(
                    `${lernfeld.nummer} – ${lernfeld.kurzTitel}`
                );
            }
        );

        hinweise.push(
            `${ohneSchwereFragen.length} Lernfelder ` +
            `besitzen noch keine schweren Fragen.`
        );
    }

    // ====================================
    // Gesamtzahlen
    // ====================================

    const lernfeldZuordnungen =
        alleFragen.reduce(
            (summe, frage) =>
                summe +
                sichereListe(
                    frage.lernfelder
                ).length,
            0
        );

    const anzahlThemen =
        lernfelder.reduce(
            (summe, lernfeld) =>
                summe +
                sichereListe(
                    lernfeld.themen
                ).length,
            0
        );

    console.log("");
    console.log("======================================");
    console.log("📊 GESAMTERGEBNIS");
    console.log("======================================");

    console.log(
        `Einzigartige Fragen: ${alleFragen.length}`
    );

    console.log(
        `Lernfeld-Zuordnungen: ${lernfeldZuordnungen}`
    );

    console.log(
        `Lernfelder: ${lernfelder.length}`
    );

    console.log(
        `Themen insgesamt: ${anzahlThemen}`
    );

    console.log(
        `Fehler: ${fehler.length}`
    );

    console.log(
        `Warnungen: ${warnungen.length}`
    );

    // ====================================
    // Fehler ausgeben
    // ====================================

    if (fehler.length > 0) {
        console.log("");
        console.error("❌ FEHLER");

        fehler.forEach(
            (fehlerText) =>
                console.error(fehlerText)
        );
    }

    // ====================================
    // Warnungen ausgeben
    // ====================================

    if (warnungen.length > 0) {
        console.log("");
        console.warn("⚠️ WARNUNGEN");

        warnungen.forEach(
            (warnung) =>
                console.warn(warnung)
        );
    }

    // ====================================
    // Hinweise
    // ====================================

    if (hinweise.length > 0) {
        console.log("");
        console.log("💡 HINWEISE");

        hinweise.forEach(
            (hinweis) =>
                console.log(hinweis)
        );
    }

    // ====================================
    // Abschluss
    // ====================================

    if (
        fehler.length === 0 &&
        warnungen.length === 0
    ) {
        console.log("");
        console.log(
            "✅ Fragenkatalog technisch sauber."
        );
    }

    console.log("======================================");

    return {
    fragen: alleFragen.length,
    lernfeldZuordnungen,
    lernfelder: lernfelder.length,
    themen: anzahlThemen,
    fehler,
    warnungen,
    hinweise,
    themenOhneFragen,
    lernfeldStatistik,
    themenAbdeckungStatistik,
    ausbauPrioritaeten
};
}