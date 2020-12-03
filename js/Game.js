/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    //testWord = ['My Champ', 'How are you'];
    //randomNumber = Math.floor(Math.random() * this.testWord.length);
    //newArray = this.testWord[this.randomNumber].split('');
    ul = document.getElementsByTagName('ul')[0];
    checkIfKeyIsPressed = [];
    btn = document.getElementById('btn__reset');
    overlay = document.getElementById('overlay');
    titleOne = document.getElementsByTagName('h2')[0];
    keys = document.querySelectorAll('.key');
    heart = document.getElementsByTagName('ol')[0].children
    newGameArrayName;

    pressStartButton() {

        //console.log(titleOne);
        this.btn.addEventListener('click', (e) => {
            this.overlay.removeAttribute('id');
            this.btn.setAttribute('hidden', 'hidden');
            this.titleOne.setAttribute('hidden', 'hidden');

            const newGamePhrase = new Phrase();
            newGamePhrase.newGameWithNewPhrase();
            this.newGameArrayName = newGamePhrase.newArray;
        })
    }

    checkIfValueIsInPhrase() {
        //alert(this.newArray)


        this.keys.forEach(key => {
            key.addEventListener('click', (e) => {
                //console.log(document.querySelector('#qwerty').children[0].querySelectorAll('button')[0].className = 'chosen')
                let buttonClicked = e.target.textContent;
                let key = e.target;
                console.log(key)
                this.keyPressed(key);
                let correctKeyPressed = this.newGameArrayName.filter(letter => letter.toLowerCase().includes(buttonClicked));
                console.log(correctKeyPressed);
                this.clickedWrongKeyRemoveHeart(buttonClicked, correctKeyPressed, key);


                //console.log(this.newArray[0]);
                for (let i = 0; i < this.newGameArrayName.length; i++) {
                    //console.log(this.newArray[i].includes(buttonClicked));
                    let lowerCasePhrase = this.newGameArrayName[i].toLowerCase();
                    if (lowerCasePhrase.includes(buttonClicked)) {
                        //console.log('true: '+ lowerCasePhrase + '-' + lowerCasePhrase.includes(buttonClicked));
                        //console.log(e.target)
                        let phraseLetters = document.querySelectorAll('.letter');
                        for (let i = 0; i < phraseLetters.length; i++) {
                            if (phraseLetters[i].textContent.toLowerCase() === buttonClicked) {
                                phraseLetters[i].className = 'show';

                            }
                        }
                    }
                }
            })
        });
    }

    clickedWrongKeyRemoveHeart(buttonClicked, correctKeyPressed, key) {

        let keyPressedAlready = this.checkIfKeyIsPressed.includes(key.textContent);
        this.checkIfKeyIsPressed.push(key.textContent);

        let numberOfHearts = document.getElementsByTagName('ol')[0].children.length;
        if (buttonClicked && correctKeyPressed.length === 0) {


            if (numberOfHearts != 1) {
                this.heart[0].remove();
            } else {
                console.log('you lost');
                //restart everything
                this.overlay.setAttribute('id', 'overlay');
                this.btn.removeAttribute('hidden');
                this.titleOne.removeAttribute('hidden');
                console.log(this.btn.textContent = 'Try again');
                this.resetKeyPressed();
                this.resetHearts();
            }
        }
    }

    keyPressed(key) {
        key.className = 'chosen';
    }

    resetKeyPressed() {
        this.keys.forEach(key => {
            key.className = 'key';
        });
    }//<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
    resetHearts() {
        const partenElementHeart = this.heart[0].parentElement;

        for (let i = 0; i < 4; i++) {
            const htmlheartstring = document.createElement(`li`);
            htmlheartstring.setAttribute('class', 'tries');
            const htmlImageString = document.createElement('img');
            htmlImageString.setAttribute('src', 'images/liveHeart.png');
            htmlImageString.setAttribute('alt', 'Heart Icon');
            htmlImageString.setAttribute('height', '35');
            htmlImageString.setAttribute('width', '30');
            htmlheartstring.appendChild(htmlImageString);
            partenElementHeart.appendChild(htmlheartstring);

        }




    }




}