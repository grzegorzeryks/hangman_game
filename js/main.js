/*jshint esversion: 6 */
console.log('elo');
let words = ['dog','cat','mouse','highway','fourty','seven'];



function randomWord(){
  let randomNr = Math.floor(Math.random() * words.length);
  let randomString = words[randomNr];
 console.log(words[randomNr]);
  let newArray = randomString.split('');
  console.log(newArray);
};

randomWord();
