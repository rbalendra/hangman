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
let remainingGuesses = 10; //this will be used to store the letters that have been guessed incorrectly


//https://stackoverflow.com/questions/16065579/generate-a-random-word-from-an-array-and-then-print-it-to-the-console-log-in-a-f

/* this function will iterate through the words array and choose a random word from it. it will then create an array of underscores that is the same length as the word. it will then return the random word and the array of underscores. */
export const wordSelect = (words) => {
    const randomWordList = words[Math.floor(Math.random() * words.length)]; 
    let showWord = [];
    for (let i = 0; i < randomWordList.length; i++) {
        showWord.push("_"); 
    }
    console.log(randomWordList);
    console.log(showWord);

    return {
        randomWordList,
        showWord
    }
}


export const guessLetter = (letter) => {
    if (guessedLetters.includes(letter)) {
        console.log(`Letter ${letter} has been already guessed`);
        return;
    }
    guessedLetters.push(letter);
console.log("Guessed Letters", guessedLetters)
}


