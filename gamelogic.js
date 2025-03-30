export const wordslist = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "pear",
    "peach",
    "plum",
    "melon",
    "lemon",
    "pineapple",
    "mango",
    "papaya",
    "coconut",
    "strawberry",
    "blueberry",
    "raspberry",
    "blackberry",
    "cherry",
    "apricot",
    "tomato",
    "carrot",
    "potato",
    "onion",
    "garlic",
    "pepper",
    "lettuce",
    "broccoli",
    "spinach",
    "zucchini",
    "cucumber",
    "celery",
    "cauliflower",
    "asparagus",
    "mushroom",
    "pumpkin",
    "radish",
    "beetroot",
    "turnip",
    "parsnip",
    "elephant",
    "giraffe",
    "tiger",
    "lion",
    "cheetah",
    "leopard",
    "zebra",
    "rhino",
    "hippo",
    "buffalo",
    "kangaroo",
    "koala",
    "panda",
    "sloth",
    "chimpanzee",
    "gorilla",
    "orangutan",
    "lemur",
    "meerkat",
    "otter",
    "shark",
    "whale",
    "dolphin",
    "seal",
    "octopus",
    "jellyfish",
    "lobster",
    "crab",
    "shrimp",
    "starfish",
    "eagle",
    "sparrow",
    "parrot",
    "penguin",
    "ostrich",
    "flamingo",
    "peacock",
    "hummingbird",
    "owl",
    "falcon",
    "house",
    "apartment",
    "mansion",
    "cottage",
    "bungalow",
    "castle",
    "villa",
    "shack",
    "chalet",
    "palace",
    "bed",
    "chair",
    "table",
    "desk",
    "sofa",
    "couch",
    "cabinet",
    "wardrobe",
    "bookshelf",
    "dresser",
    "car",
    "bicycle",
    "motorcycle",
    "scooter",
    "truck",
    "bus",
    "train",
    "airplane",
    "helicopter",
    "boat",
    "submarine",
    "rocket",
    "spaceship",
    "hovercraft",
    "tram",
    "trolley",
    "taxi",
    "ferry",
    "yacht",
    "canoe",
    "violin",
    "guitar",
    "piano",
    "trumpet",
    "flute",
    "drums",
    "clarinet",
    "saxophone",
    "cello",
    "harp",
    "concert",
    "symphony",
    "melody",
    "harmony",
    "rhythm",
    "tempo",
    "note",
    "scale",
    "chord",
    "tune",
    "dog",
    "cat",
    "rabbit",
    "hamster",
    "goldfish",
    "parakeet",
    "ferret",
    "guinea",
    "chinchilla",
    "gerbil",
    "winter",
    "spring",
    "summer",
    "autumn",
    "snow",
    "rain",
    "hail",
    "sleet",
    "fog",
    "storm",
    "mountain",
    "river",
    "lake",
    "ocean",
    "forest",
    "desert",
    "valley",
    "canyon",
    "island",
    "waterfall",
    "kitchen",
    "bathroom",
    "bedroom",
    "livingroom",
    "garage",
    "basement",
    "attic",
    "hallway",
    "balcony",
    "patio",
    "science",
    "history",
    "math",
    "geography",
    "chemistry",
    "biology",
    "physics",
    "astronomy",
    "literature",
    "philosophy",
    "football",
    "basketball",
    "tennis",
    "golf",
    "soccer",
    "baseball",
    "hockey",
    "cricket",
    "rugby",
    "volleyball"
];

let guessedLetters = []; //this will be used to store the letters that have been guessed
let remainingGuesses = 10; //incorrect guesses will be deducted from this number.



/* this function will iterate through the words array and choose a random word from it. it will then create an array of underscores that is the same length as the word. it will then return the random word and the array of underscores.

This is the #1 function thhat will run */
export const wordSelect = (words) => {
    const randomWord = words[Math.floor(Math.random() * words.length)]; 
    let underscores = [];
    for (let i = 0; i < randomWord.length; i++) {
        underscores.push("_"); 
    }
    console.log(randomWord); 
    console.log(underscores); 

    return {
        randomWord,
        underscores
    }
}

//this function will be used to check if the letter has already been guessed. if it has, it will return true. 
export const guessLetter = (letter) => {
    if (guessedLetters.includes(letter)) {
        // console.log(`Letter ${letter} has been already guessed`); wont show in console because I have disabled the event target button after the first click. 
        return; //exit if its alrready guesssed
    }
    guessedLetters.push(letter); //this will add the letter to the guessed letters array
        console.log("Guessed Letters (from gamelogic.js)", guessedLetters)
}

//this function will be used to check if the letter is in the word. if it is, it will replace the underscore with the letter. 
export const checkLetterInWord = (letter, randomWord, showWord) => {
    let found = false; //this will be used to check if the letter is in the word. if it is, it will be set to true.
    const lowerCaseLetter = letter.toLowerCase();
    for (let i = 0; i < randomWord.length; i++) { 
         if (randomWord[i] === lowerCaseLetter) {
            // console.log(randomWord[i]); //checking if it works in console{
             showWord[i] = lowerCaseLetter; 
             found = true;
        }
    }
     return found; 
}



// checkLetterInWord('r', 'rugby', '_');