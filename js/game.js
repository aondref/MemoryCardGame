//Run the app as soon as the document runs.
$(() => {
     
    //The array I'm going to use to create the game content.
    const numbers = ["red", "red", "blue", "blue", "yellow", "yellow", "orange", "orange", "green", "green", "pink", "pink", "black", "black", "white", "white"];

    //Using this empty array to tracks player picks.
    let choice = [];

    //Using this empty array to track generated id-keys in the form of data-keys.
    let idKeys = [];

    //Using this empty array to track matches solved.
    let matches = [];
    let choices = [];

    //This isn't really a score but what's left of my brain named the variable this.
    let score = 0;

    //I needed a way to randomize the choices for the board.
    const rand = numbers.sort(() => Math.random() - 0.5);

    //This helps create the "start game" effect.
    $(".grid-container").hide();
    $(".hint-container").hide();


    //This will give the start button some purpose.
    $(".start").on("click", function() {
        $(".grid-container").show();
        $(".hint-container").show();

        //This makes it so you can't create an endless amount of match choices.
        if($(".grid").length === 1) {
            $(".start").unbind("click");
        }

        //This for loop will create the cards/board depending on array length.
        for (let j = 0; j < numbers.length; j++) {
            $(".grid").append(`<div class=card-container><div class=card data-key=${j}><div class=card-front></div><div class=card-back><p class=card-content>${rand[j]}</p></div></div></div>`);
            console.log(j);
        }

            //This creates the flip card effect. 
            $(".card").bind('click', function() {
                $(this).addClass("flip"); //The actual effect is styled with CSS. Adding the flip class to card creates the effect.
                idKeys.push($(this).data("key")); //After you click a card, it's key gets added to the idKeys aray.
                choice.push($(this, ".card-content").text()); //After you click a card, the contents of its HTML elements get added to the choice array.
                const result = numbers.length / 2; //I created result for comparison purposes later.
                
                //I wanted to create a delay effect for the cards when they flip. Without it, the second card won't flip at all.
                if ( idKeys.length === 2) {
                    setTimeout(compare, 1000);
                }
                
                //Created a function that compares the keys of cards chosen and the cards themselves.
                function compare() {
                if(idKeys[0] == idKeys[1]) { //This compares the id-keys of cards. This triggers by clicking the same card.
                    $(".flip").eq(idKeys.indexOf(idKeys[0])).removeClass("flip"); //If the id-keys of the cards chosen are the same then remove the flip class.
                    $(".flip").eq(idKeys.indexOf(idKeys[1])).removeClass("flip"); //Removing the flip class animates the card flipping back over.
                    score += 1; //Increase score by 1.
                } else if (choice[0] === choice[1]) { //This compares 2 cards and checks if their html content is the same. 
                    $(".flip").eq(idKeys.indexOf(idKeys[0])).addClass("final"); //The flipped cards will have the "flip" class. If the cards are the same, 
                    $(".flip").eq(idKeys.indexOf(idKeys[1])).addClass("final"); //the "final" class gets added to the cards. It keeps the cards flipped
                    $(".flip").eq(idKeys.indexOf(idKeys[1])).removeClass("flip"); //The final class keeps the cards flipped. Removing "flip" helps 
                    $(".flip").eq(idKeys.indexOf(idKeys[0])).removeClass("flip"); //later on.
                    matches.push(choice); //This takes the choice array and adds it to the matches array. This turns it into a match pair
                    score += 1; //Increases the score again. This tracks all the match attempts.
                } else {
                    $(".flip").eq(idKeys.indexOf(idKeys[1])).removeClass("flip"); //If the cards don't match, removing the flip class, flips the cards back over.
                    $(".flip").eq(idKeys.indexOf(idKeys[0])).removeClass("flip"); //This flips the cards over that targets the specified id-Keys.
                    score += 1;
                }

                //After we cycle through the if, else if, and else statement, we empty the id-Keys and choice arrays to repeat the process.
                idKeys = [];
                choice = [];
                
                //Here, we use the matches array and the result variable to see if we got all the matches.
                if (matches.length === result) {
                    choices.push(score); //The number of tries get pushed into the choices array.

                    //Having choice and choices is confusing. If choices array is 2 this activates.
                    if (choices.length === 2) {
                        $(".player1-score").append(choices[0]); //The first index of choices array gets logged to player 1 span element.
                        $(".player2-score").append(choices[1]); //The second index of choices array gets logged to player 2 span element.
                        if ($(choices[0]) < $(choices[1])) { //If the first index of choices array is less then the second, this activates.
                            $(".message").append(`Player01 Wins`);
                        } else { //Otherwise this gets activated.
                            $(".message").append(`Player02 Wins`);
                        }

                        //This effectively ends the game by removing the flip and click functionalities.
                        $(".card").removeClass("final flip");
                        $(".card").unbind("click")
                    }
                    
                    //This restarts the game for the second player, using a delay so it's not so sudden.
                    setTimeout(function() {
                        $(".card").delay(1000).removeClass("final");
                        $(".card").delay(1000).removeClass("flip");
                        matches = [];
                        idKeys = [];
                        choice = [];
                        score = 0;
                    }, 2000); //This controls the amount of time before the game session restarts.
                }
            }
            
        })
    })

    $(".end").on("click", function() {
        location.reload();
    })
})