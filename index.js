const randomWord = require('random-word');
var words = require("./Word.js")
const inquirer = require("inquirer");
const isLetter = require("is-letter");
var guessesLeft;
var gameWord = randomWord();
var display2 = words.display2;
var Word = words.Word;
var turn = 0;
// console.log(gameWord);
// creates inital game word
var wordHolder = new Word();
    wordHolder.objectLetters(gameWord);
    guessesLeft = gameWord.length;
// Recursive game function that prompts user for guesses each round.
function recursiveGuess() {
    if( turn === 0) {
        console.log("Welcome To the Hangman, where you shall pay for your sins!\n")
    };
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "\nWhat letter will yee be guessing?",
            validate: function(str){
                if( isLetter(str)) {
                    return true;
                }
                else {
                    return "Please pick a letter.";
                    return false;
                }
        }
    }
    ]).then(function(data){
        // calls the function to check if any letters match with guess.
        var display3 = wordHolder.compareLetters(data.letter);
        console.log(display3);
        // logic to decide outcomes. If win, give new word. 
        if (display3.indexOf("_") === -1) {
            console.log("Congatulations you won!");
            console.log("Next word.\n");
            gameWord = randomWord();
            wordHolder = new Word();
            wordHolder.objectLetters(gameWord);
            guessesLeft = gameWord.length;
        }
        if(!(display3.indexOf(data.letter) === -1)) {
            console.log("\nCorrect!\n");
        }
        else {
            console.log("Wrong!");
            guessesLeft--;
            console.log("You have " + guessesLeft + " guesses remaining!");
        }

        if(guessesLeft <= 0) {
            console.log("\nGame Over!");
            return;
        }
        // start next letter guess. 
        turn++;
         recursiveGuess();
        
    })
 }

 recursiveGuess();

