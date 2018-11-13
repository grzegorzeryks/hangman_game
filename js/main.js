/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function(event) {

  let words = ["dog", "cat", "horse", "mouse", "elephant", "crocodile", "eagle", "pig", "cow", "monkey", "hippotoamus", "weasel", "deer", "frog", "lizzard", "snake", "dinosaur", "ape", "wolf", "lion", "tiger", "chicken", "tarantula"];
  let word = document.querySelector('.word');
  let letters = document.querySelectorAll('.letters div');
  let clickSound = new Audio('snd/click.mp3');
  let newestArray;
  let bodyCounter = 0;
  let winCounter = 0;
  let gameOver = document.querySelector('.game-over');
  //Function that randomly chooses an item from an array and splits it into new array and creates html elements
  function randomWord() {
    let randomNr = Math.floor(Math.random() * words.length);
    let randomArray = words[randomNr].split('');

    for (let i = 0; i < randomArray.length; i++) {
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
  let hangmanBody = document.querySelectorAll('.hangman-body div');
console.log(wordElements);
  //function checking letters
  function checkLetter() {
    clickSound.play();
    let isThere = false;

    for (let i = 0; i < newestArray.length; i++) {
      if (newestArray[i] === this.className) {
        isThere = true;
        wordElements[i].style.display = 'block';
        winCounter += 1;
        if (winCounter === newestArray.length) {
          gameOver.innerText = 'YOU WIN !';
          gameOver.style.display = 'flex';
          // setTimeout(function(){ reset(); }, 3000);
        }
      }
    }
    if (!isThere) {
      if (bodyCounter <= 6) {
        for (let i = 0; i < hangmanBody.length; i++) {
          hangmanBody[bodyCounter].style.display = 'block';
          bodyCounter += 1;

          if (bodyCounter > 6) {
            gameOver.innerText = 'GAME OVER !';
            gameOver.style.display = 'flex';
          }
          return;
        }
      }
    }
  }
function reset(){
  gameOver.style.display = "none";
  location.reload();
}


  // Adding checkLetter function to all letter buttons/divs
  for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('click', checkLetter);
  }

});
