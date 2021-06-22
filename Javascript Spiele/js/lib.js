function addPopUp(text, reload = false) {

    //<div id="popUp">Du hast gewonnen <button>OK</button></div>
    //clickhandler / Eventlistener
    //css- absolute

    let oppacityDiv = document.createElement("div");
    oppacityDiv.setAttribute("id", "oppacityDiv");

    let popUpDiv = document.createElement("div");
    popUpDiv.setAttribute("id", "popUp");
    popUpDiv.innerHTML = text + "</br>";

    let popUpButton = document.createElement("button");

    if(reload) {
        popUpButton.addEventListener("click", reloadPage);
    } else {
        popUpButton.addEventListener("click", closePopUp);
    }

    popUpButton.innerText = "OK";
    
    
    popUpDiv.append(popUpButton);
    oppacityDiv.append(popUpDiv)
    document.getElementsByTagName("body")[0].append(oppacityDiv);

}

function reloadPage() {
    location.reload();
}

function closePopUp() {
    document.getElementById("oppacityDiv").remove();
}