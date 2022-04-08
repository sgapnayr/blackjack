/* Variables */
let firstCard = 8;
let secondCard = 1;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];
let randomCard = Math.floor((Math.random() * 10) + 1);
let message = "";
let hasBlackJack = false;
let isAlive = true;

/* HTML Elements */
let messageEl = document.querySelector('#message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');

/* Functions */
function startGame() {renderGame();}
function newCard() {cardsEl.textContent = "Cards: " + randomCard;}

function renderGame() {
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
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
    sumEl.textContent = "Sum: " + sum
}
