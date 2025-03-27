import { wordSelect, wordslist} from "./gamelogic.js";
import { updateWordDisplay } from "./dom.js";

const { randomWordList, showWord } = wordSelect(wordslist); //this will call the wordSelect function and destructure the randomWordList and showWord variables from it
console.log(randomWordList); //this will log the random word to the console

updateWordDisplay(showWord); //this will update the word display with the underscores


