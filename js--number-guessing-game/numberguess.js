let chances;
let targetNumber;
let reply;
let guessButton;
let guessList;
let game;
let guess;

document.getElementById("startButton").onclick = beginGame;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function cleanList() {
    let guessListItems = guessList.querySelectorAll("li");
    let arraySize = guessList.querySelectorAll("li").length;
    for(let i = 0; i < guessListItems.length; i++){
        guessListItems[i].remove();
    }
}

function appendListItem() {
    let guessVal = document.getElementById('number').value;
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(guessVal));
    guessList.appendChild(entry);
}

// Main functions below

function beginGame() {
    guessList = document.getElementById("guessList");
    game = document.getElementById("game");
    game.classList.remove("hide");
    cleanList();
    chances = 5;
    targetNumber = getRandomInt(0,100);
    reply = document.getElementsByClassName("reply")[0];
    guessButton = document.getElementById("guessButton");
    guessButton.removeAttribute("disabled");
    reply.innerHTML = "The game begins!";
    document.getElementById("startButton").classList.add("hide");
}

function guessNumber() {
    guess = document.getElementById('number').value
    chances--;
    if(guess === targetNumber){
        appendListItem();
        reply.innerHTML = "You win!";
        guessButton.setAttribute("disabled", true);
        document.getElementById("startButton").classList.remove("hide");
        return;
    }
    else if (guess < targetNumber){
        reply.innerHTML = "Too low!";
        appendListItem();
    }
    else {
        reply.innerHTML = "Too high!";
        appendListItem();
    }

    if(chances < 1){
        reply.innerHTML = "Game over! The correct number was: " + targetNumber;
        guessButton.setAttribute("disabled", true);
        document.getElementById("startButton").classList.remove("hide");
    }
}