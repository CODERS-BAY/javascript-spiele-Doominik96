
// globale Variablen
let triesCounter;
let g;
let entfernungZumMonster;

// entfernung zufälling ausrechnen und runden
entfernungZumMonster = Math.random() * 90 + 10;
entfernungZumMonster = Math.round(entfernungZumMonster);

// funktion um den screen zu wechseln
function changeScreen() {

    triesCounter = document.getElementById("tryCounter").value;

    // check ob eine eingabe gemacht wurde
    if (triesCounter < 1) {
        alert("ungültige Anzahl an Versuchen")
    } else {

        // eingaben in Int umwandeln
        triesCounter = parseInt(document.getElementById("tryCounter").value);
        g = parseFloat(document.getElementById("planetSelection").value);

        // screen wechseln und anzeige wie weit das monster weg ist
        document.getElementsByClassName("screen")[0].classList.toggle("active");
        document.getElementsByClassName("screen")[1].classList.toggle("active");
        document.getElementById("monster").innerText = "Die Katze ist " + entfernungZumMonster + " Meter entfernt.";
    }
}
// funktion zum werfen
function werfen() {

    // maximale anzahl an Versuchen
    if (triesCounter > 0) {
        let grad = document.getElementById("winkel").value;
        let v0 = document.getElementById("anfangsGeschwindigkeit").value;

        // überprüfung ob richtige werte angegeben wurden
        if (grad < 1 || grad > 90) {
            alert(grad + "° ist nicht im gültigen Bereich von 1° - 90°");
        } else {
            if (v0 < 1) {
                alert("Die angegebene Wurfgeschwindigkeit ist kein gültiger Wert");
            } else {

                // werte zu Int umwandeln
                let grad = parseInt(document.getElementById("winkel").value);
                let v0 = parseInt(document.getElementById("anfangsGeschwindigkeit").value);

                // winkel und wurfweite berechnung
                let derWinkel = grad * ( Math.PI / 180 );
                let wurfweite = ((v0 * v0) * Math.sin(2 * derWinkel)) / g;
                wurfweite = Math.round(wurfweite);

                // check ob das monster getroffenn wurde
                if(wurfweite == entfernungZumMonster) {
                    document.getElementById("monster").innerText = "Toll! Du hast direkt neben die Katze geworfen und sie gefüttert.";
                    document.getElementById("catGif").style.display = "inline";             

                    document.getElementById("versuche").innerText = "Du hattest noch " + (triesCounter-1) + " Versuche übrig."
                    document.getElementById("verstecken").style.display = "none";

                    // check ob zu weit geworfen wurde
                } else if (wurfweite>entfernungZumMonster) {
                    document.getElementById("meineWurfweite").innerText = "Du hast " + wurfweite + " Meter geworfen.";
                    document.getElementById("monster").innerText = "Du hast um " + (wurfweite-entfernungZumMonster) + " Meter zu weit geworfen.";

                    // check ob man noch Versuche hat
                    if (triesCounter == 1){
                        document.getElementById("versuche").innerText = "Du hast keine Versuche mehr übrig und leider verloren."
                    } else {
                        document.getElementById("versuche").innerText = "Du hast noch " + (triesCounter-1) + " Versuche übrig."
                    }

                    // was passiert wenn man zu kurz wirft
                } else {
                    document.getElementById("meineWurfweite").innerText = "Du hast " + wurfweite + " Meter geworfen.";
                    document.getElementById("monster").innerText = "Du hast um " + (entfernungZumMonster-wurfweite) + " Meter zu kurz geworfen.";

                    // check ob man noch Versuche hat
                    if (triesCounter == 1) {
                        document.getElementById("versuche").innerText = "Du hast keine Versuche mehr übrig und leider verloren."
                    } else {
                        document.getElementById("versuche").innerText = "Du hast noch " + (triesCounter-1) + " Versuche übrig."
                    }
                }
                triesCounter --;
            }      
        } 
    } 
}