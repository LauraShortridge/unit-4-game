/* Summary of game:
You will be given a random number at the start of the game.
There are four cystals below. By clicking on a crystal you will add a specific amount of points to your total score. 
You win the game by matching your total score to the random number, you lose the game if your total score goes above the random number. 
The value  of each crystal is hidden from you until you click on it.
Each time when the game starts, the game will change the values of each crystal. */

//Define Variables
    //Wins
    let wins = 0; 

    //Losses
    let losses = 0; 

    //Random Number
    let randomNumberArray = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]; 
    let randomNumber = Math.floor(Math.random()*randomNumberArray.length);
    let pickedNumber = randomNumberArray[randomNumber];
    console.log(pickedNumber, "pickedNumber");

    //Crystal 1 Placeholder Value
    let crystalOneArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let crystalOneRandom = Math.floor(Math.random()*crystalOneArray.length); 
    let crystalOneNumber = crystalOneArray[crystalOneRandom];
    console.log(crystalOneNumber, "crystalOneNumber");

    //Crystal 2 Placeholder Value
    let crystalTwoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let crystalTwoRandom = Math.floor(Math.random()*crystalTwoArray.length); 
    let crystalTwoNumber = crystalTwoArray[crystalTwoRandom];
    console.log(crystalTwoNumber, "crystalTwoNumber");

    //Crystal 3 Placeholder Value
    let crystalThreeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let crystalThreeRandom = Math.floor(Math.random()*crystalThreeArray.length); 
    let crystalThreeNumber = crystalThreeArray[crystalThreeRandom];
    console.log(crystalThreeNumber, "crystalThreeNumber");

    //Crystal 4 Placeholder Value
    let crystalFourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let crystalFourRandom = Math.floor(Math.random()*crystalFourArray.length); 
    let crystalFourNumber = crystalFourArray[crystalFourRandom];
    console.log(crystalFourNumber, "crystalFourNumber");

    //Score
    let score = 0; 

//On Page Load:
    //Generate and list a random number between 19-120
    //Generate random values for the crystal buttons between 1-12

//Game Play:
    //When a crystal is clicked increase the score
    //End Game
        //If the score is less than the number...
            //The game continues
        //If the score is greater than the random number...
            //Increase losses by 1
            //Reset the Game
        //If the score equals the number...
            //Increase wins by 1
            //Reset the Game


$(document).ready(function(){

    $("#randomNumber").text(pickedNumber);
    $("#playersScore").text(score); 
    $("#wins").text(wins);
    $("#losses").text(losses); 
    $("#gamealert").text("Click on a crystal!"); 

    $("#crystalOne").attr("data-crystalvalue", crystalOneNumber);
    console.log(crystalOneNumber, "image crystalOneNumber");
    $("#crystalTwo").attr("data-crystalvalue", crystalTwoNumber);
    console.log(crystalTwoNumber, "image crystalTwoNumber");
    $("#crystalThree").attr("data-crystalvalue", crystalThreeNumber);
    console.log(crystalThreeNumber, "image crystalThreeNumber");
    $("#crystalFour").attr("data-crystalvalue", crystalFourNumber);
    console.log(crystalFourNumber, "image crystalFourNumber");


    $(".allCrystals").on("click", function(event){
    
        // console.log(event.target.attributes["data-crystalvalue"].nodeValue);

        score = parseInt(event.target.attributes["data-crystalvalue"].nodeValue) + score;
        
        // console.log(score, "score");

        $("#playersScore").text(score); 
        
        if (score === pickedNumber) {
            reset(); 
            wins++;
            $("#wins").text(wins); 
            $("#playersScore").text(score); 
            $("#gamealert").text("You won!"); 
        } else if (score > pickedNumber) {
            reset(); 
            losses++; 
            $("#losses").text(losses); 
            $("#playersScore").text(score); 
            $("#gamealert").text("You lost. Try again!"); 
        } else { 
            $("#gamealert").text("Click on a crystal!"); 
            return;
        }
 
    });

    //Reset the Game
    //New random number
    //Total score is zero
    //New values for the crystals

    function reset() {
        score = 0; 

        randomNumber = Math.floor(Math.random()*randomNumberArray.length);
        pickedNumber = randomNumberArray[randomNumber];
        $("#randomNumber").text(pickedNumber);
        console.log(pickedNumber, "reset pickedNumber");
 
        crystalOneRandom = Math.floor(Math.random()*crystalOneArray.length); 
        crystalOneNumber = crystalOneArray[crystalOneRandom];
        console.log(crystalOneNumber, "crystalOneNumber");

        crystalTwoRandom = Math.floor(Math.random()*crystalTwoArray.length); 
        crystalTwoNumber = crystalTwoArray[crystalTwoRandom];
        console.log(crystalTwoNumber, "crystalTwoNumber");

        crystalThreeRandom = Math.floor(Math.random()*crystalThreeArray.length); 
        crystalThreeNumber = crystalThreeArray[crystalThreeRandom];
        console.log(crystalThreeNumber, "crystalThreeNumber");

        crystalFourRandom = Math.floor(Math.random()*crystalFourArray.length); 
        crystalFourNumber = crystalFourArray[crystalFourRandom];
        console.log(crystalFourNumber, "crystalFourNumber");

    }
}); 
