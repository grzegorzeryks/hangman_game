/*jshint esversion: 6 */
let words = ['dog','cat','mouse','highway','fourty','seven'];
let word = document.querySelector('.word');
console.log(word);


//Function that randomly chooses an item from an array and splits it into new array
function randomWord(){
  let randomNr = Math.floor(Math.random() * words.length);
  let randomString = words[randomNr];
  let newArray = randomString.split('');

for (var i = 0; i < newArray.length; i++) {
  let newBox = document.createElement('div');
  let newWord = document.createElement('span');
  newWord.innerText = newArray[i].toUpperCase();

  word.appendChild(newWord);
}

}

randomWord();
