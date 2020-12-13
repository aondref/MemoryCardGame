//Run the app as soon as the document runs
$(() => {
     
    //These are the choices that will populate the "board"
    const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    let choice = [];
    let idKeys = [];
    let matches = [];

    //I needed a way to randomize the choices for the board
    const rand = numbers.sort(() => Math.random() - 0.5);

    //This will give the start button some purpose
    // $(".start").click(function() {

        //This for loop will create the cards/board depending on array length
        for (let j = 0; j < numbers.length; j++) {
            $(".grid").append(`<div class=card-container><div class=card data-key=${rand[j]}><div class=card-front></div><div class=card-back><p class=card-content>${rand[j]}</p></div></div></div>`);
        }
        
        //This helps with flipping the cards
        $(".card").bind('click', function() {
            $(this).addClass("flip");
            idKeys.push($(".card").data("key"));
            choice.push($(this, ".card-content").text());
            console.log(choice);
            console.log(`There are ${idKeys} keys.`);
            if (idKeys.length === 2) {
            }
            if(idKeys[0] == idKeys[1]) {
                $("div.flip").removeClass('flip');
                setTimeout(function() {
                    $("div.flip").removeClass("flip");
                }, 1000);
                
            } else if (choice[0] === choice[1]) {

            }
        })




    // })
})

    //To Flip the Card... The CSS and html was painful!

