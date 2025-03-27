const wordDisplay = document.getElementById("hangman-words");
const hangmanImage = document.getElementById("hangman-img");
const message = document.getElementById("hangman-message");
const alphabetButtons = document.getElementById("hangman-alphabet");
const playAgainButton = document.getElementById("hangman-btn");


export function updateWordDisplay(displayWord) {
    wordDisplay.textContent = displayWord.join(" ");
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

alphabet.forEach(letter => {
    // Create a button for each letter in the alphabet
    const button = document.createElement("button");
    button.textContent = letter;


//add an event listener to the button
    button.addEventListener("click", () => {
        console.log(letter);
    });

    alphabetButtons.appendChild(button); // Append the button to the alphabet container

});
