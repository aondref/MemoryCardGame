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

//Start Page Buttons
const startBtn = document.querySelector('#start-btn');
const optionBtn = document.querySelector('#options-btn');
const backBtn = document.querySelector('#back-btn');

//Start and Player Pages
const buttons = document.querySelector('.buttons');
const playerChoice = document.querySelector('#player-choice');

//Button Functionality
startBtn.addEventListener("click", playerPage);
backBtn.addEventListener("click", homePage);

//Button Functions
function playerPage() {
    buttons.style.display = "none";
    playerChoice.style.display = "grid";
}

function homePage() {
    buttons.style.display = "grid";
    playerChoice.style.display = "none";
}