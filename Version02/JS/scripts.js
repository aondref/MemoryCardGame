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

//////Start Page
const startBtn = document.querySelector('#start-btn');
const optionBtn = document.querySelector('#options-btn');

////Button Functionality
startBtn.addEventListener("click", playerPage);

function playerPage() {
    cardChoice.style.display = "grid";
    choiceContainer.style.display = "grid";
    buttons.style.display = "none";
    gamePage.style.display = "none";
}

//////Next Page
const backBtn = document.querySelector('#back-btn');
const continueBtn = document.querySelector('#continue-btn');
const playerChoice = document.querySelector('#player-choice');
const choiceContainer = document.querySelector('#choice-container');
const cardChoice = document.querySelector('#card-choice')

const span = document.createElement('span');
const player01 = document.createTextNode('Player 1 ');
const player02 = document.createTextNode('Player 2');
span.appendChild(player01);
const element = document.querySelector('#game-page-header');
element.appendChild(span);


////Button Functionality
backBtn.addEventListener("click", homePage);

function homePage() {
    buttons.style.display = "grid";
    playerChoice.style.display = "none";
    gamePage.style.display = "none";
}

//////Game Page
const exitBtn = document.querySelector('#exit-btn');


//Start, Player, Score and Game Pages
const buttons = document.querySelector('.buttons');
const gamePage = document.querySelector('#game-page');
const player01Choice = document.querySelector('#player01Btn');
const player02Choice = document.querySelector('#player02Btn');
const startGamePage = document.querySelector('#start-game-page');
const player01Score = document.querySelector('#player01Score').innerHTML;
const player02Score = document.querySelector('#player02Score').innerHTML;
const scoreBtn = document.querySelector('#scoreBtn');

console.log(parseInt(player01Score) + 1);
console.log(parseInt(player02Score) + 1);

//Scoring Functionality
scoreBtn.addEventListener('click', scoreIncrease)

function scoreIncrease() {
    let score = 0;
    console.log(score += 1);
}

//Button Functionality
continueBtn.addEventListener("click", gameStart);
exitBtn.addEventListener("click", exitButton);


//Button Functions


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
