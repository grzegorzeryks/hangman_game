/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function(event) {

  let words = ['dog', 'cat', 'mouse', 'highway', 'fourty', 'seven', 'bubble'];
  let word = document.querySelector('.word');
  let letters = document.querySelectorAll('.letters div');
  let clickSound = new Audio('snd/click.mp3');
  let newestArray;

  //Function that randomly chooses an item from an array and splits it into new array and creates html elements
  function randomWord() {
    let randomNr = Math.floor(Math.random() * words.length);
    let randomArray = words[randomNr].split('');

    for (var i = 0; i < randomArray.length; i++) {
      let newBox = document.createElement('div');
      let newWord = document.createElement('span');
      newWord.innerText = randomArray[i].toUpperCase();
      newBox.appendChild(newWord);
      word.appendChild(newBox);
    }
    newestArray = randomArray;
  }

  randomWord();
  console.log(newestArray);
  let wordElements = document.querySelectorAll('.word div span');

  //function checking letters
  function checkLetter() {
    clickSound.play();
    let isThere = false;
    let letterNr = 0;
    for (var i = 0; i < newestArray.length; i++) {
      if (newestArray[i] === this.className) {
        isThere = true;
        letterNr = i;
        wordElements[i].style.display = "block";
      }
    }
    if (!isThere) {
      console.log('nie ma');
    } else {
      console.log('jest');
    }
  }

  for (var i = 0; i < letters.length; i++) {
    letters[i].addEventListener('click', checkLetter);
  }


});
