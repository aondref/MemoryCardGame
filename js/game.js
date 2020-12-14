//Run the app as soon as the document runs
$(() => {
     
    //The array I'm going to use to create the game content
    const numbers = ["red", "red"];

    //Using this empty array to tracks player picks
    let choice = [];

    //Using this empty array to track generated id-keys in the form of data-keys
    let idKeys = [];

    //Using this empty array to track matches solved.
    let matches = [];
    let choices = [];

    //This isn't really a score but what's left of my brain named the variable this
    let score = 0;

    //Player scores. Going to use this to produce a try tally.
    let player01 = 0;
    let player02 = 0;

    //I needed a way to randomize the choices for the board
    const rand = numbers.sort(() => Math.random() - 0.5);

    
    $(".grid-container").hide();
    $(".hint-container").hide();
    //This will give the start button some purpose
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

        function playersSession(player) {
            //This creates the flip card effect. 
            $(".card").bind('click', function() {
                $(this).addClass("flip");
                let flip = $("div").hasClass("flip");
                idKeys.push($(this).data("key"));
                const key1 = idKeys[0];
                choice.push($(this, ".card-content").text());
                const key2 = idKeys[1];
                let result = numbers.length / 2;
                console.log(result);
                console.log(numbers.length);
                
                if ( idKeys.length === 2) {
                    setTimeout(letsTry, 1000);
                }
                
                function letsTry() {
                    if(key1 == key2) {
                    $(".flip").eq(idKeys.indexOf(idKeys[0])).removeClass("flip");
                    $(".flip").eq(idKeys.indexOf(idKeys[1])).removeClass("flip");
                    console.log("You clicked the same card.");
                    score += 1;
                    } else if (choice[0] === choice[1]) {
                        console.log(choice);
                        console.log(idKeys);
                        $(".flip").eq(idKeys.indexOf(idKeys[0])).addClass("final");
                        $(".flip").eq(idKeys.indexOf(idKeys[1])).addClass("final");
                        $(".flip").eq(idKeys.indexOf(idKeys[1])).removeClass("flip");
                        $(".flip").eq(idKeys.indexOf(idKeys[0])).removeClass("flip");
                        matches.push(choice);
                        console.log(matches);
                        score += 1;
                    } else {
                        $(".flip").eq(idKeys.indexOf(idKeys[1])).removeClass("flip");
                        $(".flip").eq(idKeys.indexOf(idKeys[0])).removeClass("flip");
                        console.log(idKeys);
                        score += 1;
                    }
                    
                    if (matches.length === result) {
                        console.log("you got all the matches");
                        console.log(`Player's 1's score is ${score}`);
                        player = score;
                        $(".player1-score").append(score);
                        setTimeout(function() {
                            $(".card").delay(1000).removeClass("final");
                        }, 2000);cd
                        matches = [];
                        idKeys = [];
                        choice = [];
                    }
                }
            })
                idKeys = [];
                choice = [];
        }
        playersSession(player01);
    })

    $(".end").on("click", function() {
        location.reload();
    })
})