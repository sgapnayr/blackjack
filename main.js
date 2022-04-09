
/* Variables */
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";

/* HTML Elements */
let messageEl = document.querySelector('#message-el');
let playerEl = document.querySelector('#player-el')
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');

/* Player */
let player = {
    name: "Ryan",
    chips: 145,
}

playerEl.textContent = player.name + ": $" + player.chips

/* Functions */
function getRandomCard() {
    let randomCard = Math.floor((Math.random() * 13) + 1);
    if (randomCard > 10) {
        cardsEl.textContent = 10
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard; 
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum
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
}
function newCard() {
    if (sum < 21 && sum > 1) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

