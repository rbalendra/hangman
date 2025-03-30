import {guessLetter, checkLetterInWord} from "./gamelogic.js"

const wordDisplay = document.getElementById("hangman-words");
const hangmanImage = document.getElementById("hangman-img");
const message = document.getElementById("hangman-message");
const alphabetButtons = document.getElementById("hangman-alphabet");
const playAgainButton = document.getElementById("hangman-btn");

//here the empty strings are converted to underscores. This will be the #2 function to execute after the wordSelect function in gamelogic.js
export function updateWordDisplay(displayWord) {
    wordDisplay.textContent = displayWord.join(" ");
}

// Update hangman image based on the number of wrong guesses
export function updateHangmanImage(wrongGuessCount){
    hangmanImage.src = `./assets/img/h-${wrongGuessCount}.jpg`;
}


/*--------------------------------------------------------------------*/


// #3 this function is what will create the A-Z buttons and sets up event listeners for each button.
export function initialiseAlphabetButtons(randomWord, showWord, gameState) {
    //randowmWord and showWord are passed from script.js. gameState is passed to keep track of the remaining guesses.
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


    alphabet.forEach(letter => {
        // Create a button for each letter in the alphabet
        const button = document.createElement("button");
        button.textContent = letter;

    
        // now the game starts after the user clicks a button and the letter is passed to the guessLetter function in gamelogic.js.
        //add an event listener to the button
        button.addEventListener("click", (event) => {
            guessLetter(letter); //record the guessed letter     
            console.log(`Guessed letter (from dom.js): ${letter}`); //this will show the guessed letter in the console.
            event.target.disabled = true; //once clicked that button will be disabled so that it cannot be clicked again.

            //check if the guessed letter is in the word.
            const letterFound = checkLetterInWord(letter, randomWord, showWord);
            console.log(`Letter found: ${letterFound}`); //this will show if the letter is found or not in the console.
            updateWordDisplay(showWord);
        
            //if letter was not found, update the remaining guess and hagnman image
            
            if (letterFound === false) { //wont be executed if the letter is found in the ShowWord array or evalues to true.
                gameState.remainingGuesses--; //this will decrease the remaining guesses by 1 from 10 if the letter is not found in the word.
                console.log(`remaining guesses ${gameState.remainingGuesses}`)
                const wrongGuesses = 10 - gameState.remainingGuesses; //this will be used to update the hangman image. For example 10-9 = 1 which will be the first image in the hangman image folder.
                console.log(`count of wrong guesses ${wrongGuesses}`)
                updateHangmanImage(wrongGuesses); //this will update the hangman image based on the number of wrong guesses.
            }
            updateGameStatus(showWord, gameState);//
        });
        alphabetButtons.appendChild(button); // Append the button to the alphabet container
    });
}

/*--------------------------------------------------------------------*/


//Function to update game status and disable the buttons if necessary
function updateGameStatus(showWord, gameState) {
    if (showWord.includes("_") === false) {
        message.textContent = "congragulations";
        disableAlphabetButtons();
    } else if (gameState.remainingGuesses <= 0) {
        message.textContent = "game over";
        disableAlphabetButtons();
    }
}

/*--------------------------------------------------------------------*/


//disable all alphabet buttons function
function disableAlphabetButtons() {
    const buttons = alphabetButtons.children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; //disable all the buttons after the game is over.
    }
}


// this function will be used to reset the game when the play again button is clicked.
playAgainButton.addEventListener("click", () => {
    location.reload(); //this will reload the page and reset the game.
});


