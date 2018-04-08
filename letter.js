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

// var el = new Letter("a");
// el.letterGuessed("d");
// el.compareLetters("o");
module.exports = Letter;