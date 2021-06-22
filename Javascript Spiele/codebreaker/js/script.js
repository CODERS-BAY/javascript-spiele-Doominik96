let triesCounter = 12;
let firstNumberCorrect = false;
let secondNumberCorrect = false;
let thirdNumberCorrect = false;
let randomArray = [];
randomArray[0] = Math.ceil(Math.random() * 9);
randomArray[1] = Math.ceil(Math.random() * 9);
randomArray[2] = Math.ceil(Math.random() * 9);
let rA1 = randomArray[0];
let rA2 = randomArray[1];
let rA3 = randomArray[2];

//console.log(randomArray[0] + " " + randomArray[1] + " " + randomArray[2]);

let triescontainer = "<p>Du hast noch " + triesCounter + " Versuche übrig.";
$('#container').append(triescontainer);

$('#guessNumber').click(function() {
    
    if ($('#userInput').val().length != 3) {
        addPopUp("Du musst 3 Zahlen eingeben!", false);
    } else{
        triesCounter--;

        if(triesCounter <= 0) {
            addPopUp("Du hast keine Versuche mehr übrig und verloren.", true);
        }
        triescontainer = "<p>Du hast noch " + triesCounter + " Versuche übrig.";
        triescontainer += "</p>"
        $('#container').empty();
        $('#container').append(triescontainer);

        let userInput = [];
        userInput[0] = $('#userInput').val().charAt(0);
        userInput[1] = $('#userInput').val().charAt(1);
        userInput[2] = $('#userInput').val().charAt(2);

        isInPlace(userInput, randomArray);

        isTrue(userInput, randomArray);
    }
    
});


//check if the Number is in the correct place;
function isInPlace(userInput, randomArray) {
    firstNumberCorrect = false;
    secondNumberCorrect = false;
    thirdNumberCorrect = false;
    let correctNumberP = document.getElementById("correctNumber");
    let isInTheRightPlace = '';

    if ((userInput[0] == randomArray[0] || firstNumberCorrect) && (userInput[1] == randomArray[1] || secondNumberCorrect) && (userInput[2] == randomArray[2] || thirdNumberCorrect)) {
        firstNumberCorrect = true;
        secondNumberCorrect = true;
        thirdNumberCorrect = true;
        //console.log("Alle drei Zahlen sind richtig.");
        isInTheRightPlace = "Alle drei Zahlen sind richtig.";
        addPopUp("Du hast gewonnen", true);
    } else if ((userInput[0] == randomArray[0] || firstNumberCorrect) && (userInput[1] == randomArray[1] || secondNumberCorrect)) {
        //console.log("Zwei Zahlen sind an der richtigen Stelle");
        isInTheRightPlace = "Zwei Zahlen sind an der richtigen Stelle";
        firstNumberCorrect = true;
        secondNumberCorrect = true;
        thirdNumberCorrect = false;
    } else if ((userInput[0] == randomArray[0] || firstNumberCorrect) && (userInput[2] == randomArray[2] || thirdNumberCorrect)) {
        //console.log("Zwei Zahlen sind an der richtigen Stelle");
        isInTheRightPlace = "Zwei Zahlen sind an der richtigen Stelle";
        firstNumberCorrect = true;
        secondNumberCorrect = false;
        thirdNumberCorrect = true;
    } else if ((userInput[1] == randomArray[1] || secondNumberCorrect) && (userInput[2] == randomArray[2] || thirdNumberCorrect)) {
        //console.log("Zwei Zahlen sind an der richtigen Stelle");
        isInTheRightPlace = "Zwei Zahlen sind an der richtigen Stelle";
        firstNumberCorrect = false;
        secondNumberCorrect = true;
        thirdNumberCorrect = true;
    } else if (userInput[0] == randomArray[0] || firstNumberCorrect) {
        //console.log("Eine Zahl ist an der richtigen Stelle.");
        isInTheRightPlace = "Eine Zahl ist an der richtigen Stelle.";
        firstNumberCorrect = true;
        secondNumberCorrect = false;
        thirdNumberCorrect = false;
    } else if (userInput[1] == randomArray[1] || secondNumberCorrect) {
        //console.log("Eine Zahl ist an der richtigen Stelle.");
        isInTheRightPlace = "Eine Zahl ist an der richtigen Stelle.";
        firstNumberCorrect = false;
        secondNumberCorrect = true;
        thirdNumberCorrect = false
    } else if (userInput[2] == randomArray[2] || thirdNumberCorrect) {
        //console.log("Eine Zahl ist an der richtigen Stelle.");
        isInTheRightPlace = "Eine Zahl ist an der richtigen Stelle.";
        firstNumberCorrect = false;
        secondNumberCorrect = false;
        thirdNumberCorrect = true;
    }

    correctNumberP.innerText = isInTheRightPlace;
    
}
//check if a Number is in the Code but on the wrong place
function isTrue(userInput, randomArray) {

    let wrongPlaceP = document.getElementById('wrongPlace');
    let numberOnWrongPlace = '';
    if(firstNumberCorrect) {
        randomArray[0] = -2;
    }
    if(secondNumberCorrect) {
        randomArray[1] = -2;
    }
    if(thirdNumberCorrect) {
        randomArray[2] = -2;
    }
   
    if(!(firstNumberCorrect && secondNumberCorrect && thirdNumberCorrect)) {
        let zahlcounter = 0;
        for (let i = 0; i < userInput.length; i++) {
            for (let j = 0; j < randomArray.length; j++) {
                if(userInput[i] == randomArray[j]) {
                    zahlcounter++;
                }
            }
        }


        if(zahlcounter == 3) {
            //console.log("Drei Zahlen sind im code vorhanden aber nicht an der richtigen Stelle.");
            numberOnWrongPlace = "Drei Zahlen sind im code vorhanden aber nicht an der richtigen Stelle.";
        } else if (zahlcounter == 2) {
            //console.log("Zwei Zahlen sind im code vorhanden aber nicht an der richtigen Stelle.");
            numberOnWrongPlace = "Zwei Zahlen sind im code vorhanden aber nicht an der richtigen Stelle.";
        } else if (zahlcounter == 1) {
            //console.log("Eine Zahl ist im code vorhanden aber nicht an der richtigen Stelle.");
            numberOnWrongPlace = "Eine Zahl ist im code vorhanden aber nicht an der richtigen Stelle.";
        } else {
            //console.log("Keine der Zahlen ist im code vorhanden.");
            numberOnWrongPlace = "Keine der Zahlen ist im code vorhanden.";
        }
        wrongPlaceP.innerText = numberOnWrongPlace;
    }
    randomArray[0] = rA1;
    randomArray[1] = rA2;
    randomArray[2] = rA3;
    
}
