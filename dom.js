import {guessLetter} from "./gamelogic.js"

const wordDisplay = document.getElementById("hangman-words");
const hangmanImage = document.getElementById("hangman-img");
const message = document.getElementById("hangman-message");
const alphabetButtons = document.getElementById("hangman-alphabet");
const playAgainButton = document.getElementById("hangman-btn");


export function updateWordDisplay(displayWord) {
    wordDisplay.textContent = displayWord.join(" ");
}

export function updateHangmanImage(wrongGuessCount){
    hangmanImage.src = `./assets/img/h-${wrongGuessCount}.jpg`;
}


export function initialiseAlphabetButtons(randomWord, showWord, gameState) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    alphabetButtons.innerHTML = "";

    alphabet.forEach(letter => {
        // Create a button for each letter in the alphabet
        const button = document.createElement("button");
        button.textContent = letter;

      
        

        //add an event listener to the button
        button.addEventListener("click", (event) => {
            guessLetter(letter); //calls the function from gamelogic
        
            event.target.disabled = true;

            const guessed = letter.toLowerCase();
                let letterFound = false;
        

            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === guessed) {
                    showWord[i] = guessed;
                    letterFound = true;
                }
            }


            updateWordDisplay(showWord)

            //check if win or if there are no underscores left
            if (!showWord.includes("_")) {
                message.textContent = "congragulations";
                disableAlphabetButtons();
            }





            if (!letterFound) {
                gameState.remainingGuesses--;
                const wrongGuesses = 10 - gameState.remainingGuesses;
                updateHangmanImage(wrongGuesses);

                if (gameState.remainingGuesses === 0) {
                    message.textContent = `Game Over`;
                    disableAlphabetButtons();
                }
            }

        });


        alphabetButtons.appendChild(button); // Append the button to the alphabet container
    });

}


function disableAlphabetButtons() {
    Array.from(alphabetButtons.children).forEach(button => {
        button.disabled = true;
    });
}