/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function(event) {

let words = ['dog', 'cat', 'mouse', 'highway', 'fourty', 'seven'];
let word = document.querySelector('.word');
let letters = document.querySelectorAll('.letters div');
let clickSound = new Audio('snd/click.mp3');

//Function that randomly chooses an item from an array and splits it into new array
function randomWord() {
  let randomNr = Math.floor(Math.random() * words.length);
  let randomString = words[randomNr];
  let newArray = randomString.split('');

  for (var i = 0; i < newArray.length; i++) {
    let newBox = document.createElement('div');
    let newWord = document.createElement('span');
    newWord.innerText = newArray[i].toUpperCase();
    newBox.appendChild(newWord);
    word.appendChild(newBox);
  }

}

randomWord();


//functions checking letters
function checkLetter() {
  console.log('works');
  clickSound.play();
  if (true) {

  }
  else {
    console.log('wrong!');
  }
}

for (var i = 0; i < letters.length; i++) {
  letters[i].addEventListener('click', checkLetter);

}


});
