var Letter = require('./letter');
var display = "";
var display2 = "";
// Constructor takes word and makes the letters of the word into objects.
function Word() {
    // function that makes each letter an object. 
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
    // interates through word and checks if letter was matched. If match, it displays letter.
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
module.exports = {
    Word : Word,
    display2 : display2
    
};
