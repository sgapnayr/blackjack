
/* Variables */
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let message = "";

/* HTML Elements */
let messageEl = document.querySelector('#message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');

/* Functions */
function startGame() {renderGame();}

function renderGame() {
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i] + " ";
    }
    if (sum > 21) {
        message = "You lost.";
        
    } else if (sum === 21) {
        message = "BlackJack!";
        hasBlackJack = true;
    } else {
        message = "Do you want another card?";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card);
    renderGame();
}

function getRandomCard() {
    let randomCard = Math.floor((Math.random() * 12));
    return randomCard;
}
