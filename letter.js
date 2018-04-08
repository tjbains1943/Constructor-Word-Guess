// Makes letters into objects with properties for revealing letter or not. 
function Letter(letter) {
    this.value = letter;
    this.guessed = false;
    this.letterGuessed = function () {
        if (this.guessed === true) {
            return this.value;
        }
        else {
            return " _ ";
        }
    }
    this.checkLetter = function (letterGuess) {
        if (this.value === letterGuess) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;