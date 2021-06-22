let playerNumber;
let pcOptionPicked;
let random;
let winSummaryCounter = 0;
let playerTimesWon = 0;
let pcTimesWon = 0;
let winsCounter;

// function to change the screen
function changeScreen() {
    // save the amont of wins needed
    winsCounter = document.getElementById("winCounter").value;
    // check ob eine eingabe gemacht wurde
    if (winsCounter < 1) {
        addPopUp("ungültige Anzahl an Versuchen")
    } else {
        // eingaben in Int umwandeln
        winsCounter = parseInt(document.getElementById("winCounter").value);
        // screen wechseln 
        document.getElementsByClassName("screen")[0].classList.toggle("hidden");
        document.getElementsByClassName("screen")[1].classList.toggle("hidden");
    }
}

// happens afer the player clicked on an option
function playerpick(picked) {
    // ckeck if the game is already won / lost
    if(!(playerTimesWon >= winsCounter || pcTimesWon >=winsCounter)){
        // check what he picked
    switch (picked){
        case "scissors":
        playerNumber = 1;
        break;
        case "stone":
        playerNumber = 2;
        break;
        case "paper":
        playerNumber = 3;
        break;
    }
    // function to see what the pc picked
    pcPick();
    // function to see who won
    whoWon();
    }
}

// function to see what the pc picked
function pcPick() {
    // generate random number between 1 - 3 and making it eiter scissors, stone or paper
    random = Math.ceil(Math.random() * 3);
    switch (random){
        case 1:
        pcOptionPicked = "scissors";
        break;
        case 2:
        pcOptionPicked = "stone";
        break;
        case 3:
        pcOptionPicked = "paper";
        break;
    }
}

// function to see who won
function whoWon() {
    // check if the player won
    if ((playerNumber == 1 && random == 3) ||playerNumber == 2 && random == 1 || playerNumber == 3 && random == 2){
        // add to the player won counter
        playerTimesWon++;
        // function to generate a summary
        addSummary("won");

        // check if its a draw
    } else if (playerNumber == random) {
        // function to generate a summary
        addSummary("draw");

        // to this when the pc won
    } else {
        // add to the pc won counter
        pcTimesWon++;
        // function to generate a summary
        addSummary("lost");
    }
    // check if the summary counter is higher than 4
    if (winSummaryCounter > 4) {
        // delete the first summary
        document.getElementById("flexbox2").children[0].remove();
    }
    // add summary counter
    winSummaryCounter++;

    // check if someone won
    if(playerTimesWon >= winsCounter) {
        setTimeout(function() {
            addPopUp("You Won!", true)
        }, 500); 
    } else if (pcTimesWon >= winsCounter) {
        setTimeout(function() {
            addPopUp("You Lost!", true)
        }, 500);
    }
}

// function to add a summary
function addSummary(text) {
    // create a div and give it the class summary
    let addSummary = document.createElement("div");
    addSummary.classList.add("summary");

    // create a p, style it, give it some text and append it to the summary div
    let pcChoseText = document.createElement("p");
    pcChoseText.style.margin = "2px";
    pcChoseText.innerText = "Pc Chose:"
    addSummary.append(pcChoseText)

    // create a div, style it with the image the pc picked and append it to the summary div
    let pcImgChosen = document.createElement("div");
    pcImgChosen.classList.add(pcOptionPicked);
    addSummary.append(pcImgChosen);

    // create a p , check if you won, lost or drew and append it to the summary div
    let score = document.createElement("p");
    if (text == "won") {
        score.innerHTML= "<strong>You Won</strong> <br>" + playerTimesWon + ":" + pcTimesWon; 
    } else if (text == "draw") {
        score.innerHTML= "<strong>Draw</strong> <br>" + playerTimesWon + ":" + pcTimesWon;
    } else {
        score.innerHTML= "<strong>You Lost</strong> <br>" + playerTimesWon + ":" + pcTimesWon;  
    }
    addSummary.append(score);

    // set the summary div´s id and append it to the container
    addSummary.setAttribute("id", text);
    document.getElementById("flexbox2").append(addSummary);
}