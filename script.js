import { wordSelect, wordslist } from "./gamelogic.js"; //
import { updateWordDisplay, updateHangmanImage, initialiseAlphabetButtons} from "./dom.js";

//created an object to store the game state where the remaining guesses will be stored
const gameState = {
    remainingGuesses:10
};
const { randomWord, underscores } = wordSelect(wordslist);
console.log(`[from script]:the chosen word is = [${randomWord}], [${underscores}]`); 


updateWordDisplay(underscores)

updateHangmanImage(0)//the (0) means that the first image will be displayed. The first image is the hangman with no body parts.

//
initialiseAlphabetButtons(randomWord,underscores,gameState)
//select the word from the wordslist array and create an array of underscores that is the same length as the word. this will be used to display the word to the user. The randomWord will be used to check if the letter guessed is in the word or not. The underscores will be used to display the word to the user. The gameState will be used to keep track of the remaining guesses. The gameState will be passed to the initialiseAlphabetButtons function to keep track of the remaining guesses.