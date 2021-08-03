// //The Great Randomization
// const animals = ["Lion", "Giraffe", "Fish", "Bird", "Elephant", "Monkey"];
// let emptyArray = []

// //For Loop creates a randomized index number
// for(let j = 0; j < animals.length; j++) {
//     const randomNumber = Math.floor(Math.random() * animals.length);
//     if(emptyArray.length < animals.length) {

//         if(!emptyArray.includes(randomNumber)) {
//             emptyArray.push(randomNumber);
//         }
//         j = 0;
//     }
// }

// //For Loop takes the animal array, using the random number as the index
// for(let j = 0; j < animals.length; j++) {
//     console.log(animals[emptyArray[j]]);
// }

//Buttons
const startBtn = document.querySelector('#start-btn');
const optionBtn = document.querySelector('#options-btn');
const backBtn = document.querySelector('#back-btn');
const continueBtn = document.querySelector('#continue-btn');
const exitBtn = document.querySelector('#exit-btn');

//Start, Player, Score and Game Pages
const buttons = document.querySelector('.buttons');
const playerChoice = document.querySelector('#player-choice');
const gamePage = document.querySelector('#game-page');
const player01Choice = document.querySelector('#player01Btn');
const player02Choice = document.querySelector('#player02Btn');
const startGamePage = document.querySelector('#start-game-page');
const player01Score = document.querySelector('#player01Score').innerHTML;
const player02Score = document.querySelector('#player02Score').innerHTML;

console.log(player01Score + 1);
console.log(player02Score + 1);


//Button Functionality
startBtn.addEventListener("click", playerPage);
backBtn.addEventListener("click", homePage);
continueBtn.addEventListener("click", gameStart);
exitBtn.addEventListener("click", exitButton);


//Button Functions
function playerPage() {
    playerChoice.style.display = "grid";
    buttons.style.display = "none";
    gamePage.style.display = "none";
}

function homePage() {
    buttons.style.display = "grid";
    playerChoice.style.display = "none";
    gamePage.style.display = "none";
}

function gameStart() {
    gamePage.style.display = "grid";
    buttons.style.display = "none";
    playerChoice.style.display = "none";
    startGamePage.style.display = "none";
}

function exitButton() {
    startGamePage.style.display = "block";
    buttons.style.display = "grid";
    gamePage.style.display = "none";
}

//Game Initializer
