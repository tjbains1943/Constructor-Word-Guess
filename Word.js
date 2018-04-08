var Letter = require('./letter');
var display = "";
var display2 = "";

function Word() {
    this.arry = [];
    this.objectLetters = function (word) {
        display = "";
        for (var i = 0; i < word.length; i++) {
            var storeThis = new Letter(word.charAt(i));
            display += storeThis.letterGuessed();
            this.arry.push(storeThis);
        }
        console.log(display);
    } 
    this.compareLetters = function(letter) {
        display2="";
        for (let x = 0; x < this.arry.length; x++) {
                this.arry[x].checkLetter(letter);
                this.arry[x].letterGuessed();
                var storeThis = this.arry[x].letterGuessed();
                display2 += storeThis;
                
            
        }
        return display2;
    }

}

// var el = new Word();
// el.objectLetters("word");
// el.compareLetters("o");
// console.log(el.arry[1].letterGuessed());

module.exports = {
    Word : Word,
    display2 : display2
    
};
