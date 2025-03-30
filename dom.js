import {guessLetter} from "./gamelogic.js"

const wordDisplay = document.getElementById("hangman-words");
const hangmanImage = document.getElementById("hangman-img");
const message = document.getElementById("hangman-message");
const alphabetButtons = document.getElementById("hangman-alphabet");
const playAgainButton = document.getElementById("hangman-btn");

//here the empty strings are converted to underscores. This will be the #2 function to execute after the wordSelect function in gamelogic.js
export function updateWordDisplay(displayWord) {
    wordDisplay.textContent = displayWord.join(" ");
}

export function updateHangmanImage(wrongGuessCount){
    hangmanImage.src = `./assets/img/h-${wrongGuessCount}.jpg`;
}


/*--------------------------------------------------------------------*/


// #3 this function is what will create the A-Z buttons and sets up event listeners for each button.
export function initialiseAlphabetButtons(randomWord, showWord, gameState) { 
    //randowmWord and showWord are passed from script.js. gameState is passed to keep track of the remaining guesses.
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    alphabetButtons.innerHTML = ""; // Clear previous buttons

    alphabet.forEach(letter => {
        // Create a button for each letter in the alphabet
        const button = document.createElement("button");
        button.textContent = letter;

      
        
// #4 now the game starts after the user clicks a button and the letter is passed to the guessLetter function in gamelogic.js.
        //add an event listener to the button
        button.addEventListener("click", (event) => {
            guessLetter(letter); //calls the function from gamelogic
        
            event.target.disabled = true; //once clicked that button will be disabled so that it cannot be clicked again.

            const guessed = letter.toLowerCase();
                let letterFound = false; //this will be used to check if the letter is in the word or not. if it is, it will be set to true.
        

            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === guessed) { //
                    showWord[i] = guessed; //this will replace the underscore with the letter that was guessed.
                    letterFound = true; //this will be set to true if the letter is found in the word.
                }
            }


            updateWordDisplay(showWord) //here the word will update to __a__ if the letter a is guessed.

            //check if win or if there are no underscores left
            if (showWord.includes("_") === false){  //checking if there are no underscores left in the word. if there are no underscores left, the game is won.
                message.textContent = "congragulations";
                disableAlphabetButtons();
            }


        
            if (letterFound === false) { //wont be executed if the letter is found in the ShowWord array or evalues to true.
                gameState.remainingGuesses--; //this will decrease the remaining guesses by 1 from 10 if the letter is not found in the word.
                const wrongGuesses = 10 - gameState.remainingGuesses; //this will be used to update the hangman image. For example 10-9 = 1 which will be the first image in the hangman image folder.
                updateHangmanImage(wrongGuesses); //this will update the hangman image based on the number of wrong guesses.

                if (gameState.remainingGuesses === 0) {
                    message.textContent = `Game Over`;
                    disableAlphabetButtons(); //this will disable the buttons if the game is over.
                }
            }

        });


        alphabetButtons.appendChild(button); // Append the button to the alphabet container
    });

}


/*--------------------------------------------------------------------*/

function disableAlphabetButtons() {
    const buttons = alphabetButtons.children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; //disable all the buttons after the game is over.
    }
}


/*--------------------------------------------------------------------*/
// #5 this function will be used to reset the game when the play again button is clicked.

playAgainButton.addEventListener("click", () => {
    location.reload(); //this will reload the page and reset the game.
});