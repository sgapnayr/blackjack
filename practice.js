
// // for (let i = 10; i <= 100; i += 10) {
// //     console.log(i);
// // }

// let sentence = ["Hello", "my", "name", "is", "Ryan"]
// let greetingEl = document.getElementById('greeting-el')

// for (let i = 0; i < sentence.length; i++) {
//     console.log(sentence[i]);
//     greetingEl.textContent += sentence[i] + " ";
// }

let player1Time = 110;
let player2Time = 107;

// function getFaststRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time // or player2 doesnt matter
//     }
// }

// let fastestRace = getFaststRaceTime()

// console.log(fastestRace);

function raceTime() {
    return player1Time + player2Time;
}

let newTime = raceTime()

console.log(newTime);