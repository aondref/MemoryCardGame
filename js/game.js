// //When the document loads this function starts immediately.
// $(() => {
//     //Array: This array will make up the elements of the game.
//     const elements = ["red", "red", "blue", "blue", "yellow", "yellow", "green", "green", "purple", "purple", "orange", "orange", "violent", "violent", "white", "white"];

//     //Player01 and Player02 Score
//     let Player01 = 0;
//     let Player02 = 0;

//     //Populate the Game Board
//     for (let j = 0; j < elements.length; j++) {
//         console.log(elements[j]);
//         $("#board").add("div").addClass("box").text(elements[j]);
//     }
// })

$(() => {
    const firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const secondNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let playerChoice1 = [];
    let playerChoice2 = [];
    const jQueryGreet = "<p>Hello World!</p>";
    let total;

    $("body").append(jQueryGreet);
    for (let j = 1; j <= 16; j++) {
        const pStart = "<p>";
        const content = j;
        const pEnd = "</p>";
        let total = pStart + content + pEnd;
        $("body").append(total);
    }
    
    $("p").click(function() {
        const content = $(this).text();
        console.log(content);
        secondNumbers.push(content);
        $(this).hide();
    })

    
    console.log(secondNumbers);

    // for (let j = 0; j < colors.length; j++) {
    //     if(colors[j] === "blue" || colors[j] === "yellow") {
    //         $("body").append(`<p class=box>${colors[j]}</p>`);
    //     } else {

    //     }
        
    //     $("p").click(function() {
    //         $(this).hide();
    //     });
    //     $("p").click(function() {
    //         let item1 = $(this).text();
    //         if (item1 === "yellow") {
    //             console.log(item1);
    //         } else {
    //             console.log("this isn't yellow");
    //         }
    //     })
    // }
})