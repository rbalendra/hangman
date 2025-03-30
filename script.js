import { wordSelect, wordslist, guessLetter } from "./gamelogic.js"; //
import { updateWordDisplay, initialiseAlphabetButtons} from "./dom.js";

//created an object to store the game state where the remaining guesses will be stored
const gameState = {
    remainingGuesses:10
};

//WOrd selection and underscore creation and calls gamelogic.js
const result = wordSelect(wordslist);  //here we store the results of the wordSelect function in a variable called result
const randomWordList = result.randomWordList; //this will store the random word that is selected from the words array
const showWord = result.underscores; //this will store the array of underscores that is the same length as the word


console.log(randomWordList); //this will log the random word to the console
updateWordDisplay(showWord); //this will update the word display with the underscores by calling it from dom.js

//here this function calls the dom.js for A-Z button setup and event listener setup
initialiseAlphabetButtons(randomWordList, showWord,gameState)

