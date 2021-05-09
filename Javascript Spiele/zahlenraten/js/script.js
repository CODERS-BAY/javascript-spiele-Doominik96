let maxNumber;
let triesNumber;
let counter = 0;
let random; 

function inputNumbers() {
    maxNumber = parseInt(document.getElementById("userMaxNumber").value);
    triesNumber = parseInt(document.getElementById("tries").value);
    random = Math.ceil(Math.random() * maxNumber);
    console.log("ZufallsNummer: " + random);

    document.getElementsByClassName("screen")[0].classList.toggle("hidden");
    document.getElementsByClassName("screen")[1].classList.toggle("hidden");
}

function guessNumber() {

    if(counter < triesNumber) {
        let userGuess = parseInt(document.getElementById("userInput").value);

        if(userGuess > random) {
            Summary("<" , userGuess)
            //console.log("Die gesuchte Zahl ist kleiner als " + userGuess);
        } else if (userGuess < random) {
            Summary(">", userGuess)
            //console.log("Die gesuchte Zahl ist größer als " + userGuess);
        } else {
            Summary("=", userGuess)
            //console.log("Du hast die gesuchte Zahl(" + userGuess + ") gefunden")
        }
    } else {
        console.log("Du hast leider keine Versuche mehr")
    }
    
    counter++;
}

function Summary(text , userGuess) {

    // create a p, style it, give it some text and append it to the summary div
    let displayText = document.createElement("p");
    displayText.classList.add("summary");
    

    if (text == "<") {
        displayText.innerText= "< " + userGuess + ".";
    } else if (text == ">") {
        displayText.innerText= "> " + userGuess + ".";
    } else {
        displayText.innerText= "Toll du hast die gesuchte Zahl " + random + " gefunden!";  
    }

    document.getElementById("number").append(displayText);
}