let firstCard = 11;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.querySelector('#message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

function startGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
    if (sum <= 20) {
        message = "Do you want another card?";
    }
    else if (sum === 21) {
        message = "BlackJack!";
        hasBlackJack = true;
    }
    else {
        message = "You\'ve lost.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new Card")
}

