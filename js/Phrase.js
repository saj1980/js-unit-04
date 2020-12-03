/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    testWord = [];
    randomNumber;
    newArray = [];
    ul;

    constructor() {
        this.testWord = ['Harry Potter', 'The Parent Trap', 'Knives Out', 'Bridesmaids', 'The Invitation', 'Signs'];
        this.randomNumber = Math.floor(Math.random() * this.testWord.length);
        this.newArray = this.testWord[this.randomNumber].split('');
        this.ul = document.getElementsByTagName('ul')[0];
    }

    newGameWithNewPhrase() {

        this.ul.innerHTML = '';
        for (let i = 0; i < this.newArray.length; i++) {
            const letter = document.createElement('li'); // is a node
            //console.log(this.this.newArray[i])
            if (this.newArray[i] !== ' ') {
                letter.className = `hide letter ${this.newArray[i]}`;
                letter.innerHTML = this.newArray[i];
                this.ul.appendChild(letter);
            } else {
                letter.className = 'space';
                letter.innerHTML = '';
                this.ul.appendChild(letter);
            }
        }
    }

    deleteAllChildElements() {
        console.log(this.ul.children);

        for (let i = 0; i < this.ul.children.length; i++) {
            console.log('removed: ' + this.ul.children[i].remove)

        }
    }
}