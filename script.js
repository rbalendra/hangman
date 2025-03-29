import { wordSelect, wordslist } from "./gamelogic.js"; //
import { guessLetter} from "./gamelogic.js"; //
import { updateWordDisplay, initialiseAlphabetButtons} from "./dom.js";



const gameState = {
    remainingGuesses:10
};

const result = wordSelect(wordslist); 
const randomWordList = result.randomWordList; 
const showWord = result.showWord; 


// const { randomWordList, showWord } = wordSelect(wordslist); //this will call the wordSelect function and destructure the randomWordList and showWord variables from it
console.log(randomWordList); //this will log the random word to the console
updateWordDisplay(showWord); //this will update the word display with the underscores

initialiseAlphabetButtons(randomWordList, showWord,gameState)

