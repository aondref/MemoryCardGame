//The Great Randomization
const animals = ["Lion", "Giraffe", "Fish", "Bird", "Elephant", "Monkey"];
let emptyArray = []

for(let j = 0; j < animals.length; j++) {
    const randomNumber = Math.floor(Math.random() * animals.length);
    if(emptyArray.length < animals.length) {

        if(!emptyArray.includes(randomNumber)) {
            emptyArray.push(randomNumber);
        }
        j = 0;
    }
}
console.log(emptyArray);