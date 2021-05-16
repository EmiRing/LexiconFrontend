//---------------------------------------------------------------------
//text rotation
let textRotator = document.getElementById("textRotator");
let initialText = textRotator.innerText;
let id = null;
function rotatingLexicon(interval) {
  let counter = 0;
  clearInterval(id);
  id = setInterval(frame, parseInt(interval));
  function frame() {
    textRotator.innerText =
      textRotator.innerText.charAt(textRotator.innerText.length - 1) +
      textRotator.innerText.substring(0, textRotator.innerText.length - 1);
  }
}

function myStopFunction() {
  clearInterval(id);
}

function resetText() {
  textRotator.innerText = initialText;
}
//----------------------------------------------------------------
//Guessing game
let numberToGuess = null;
let hideElem = document.getElementById("hide");
let guess = document.getElementById("guess");
let guessBtn = document.getElementById("guessBtn");
let result = document.getElementById("guessResult");
//hideElem.setAttribute("hidden", true);
function guessingNumber() {
  if (numberToGuess == null) {
    numberToGuess = Math.ceil(Math.random() * 10);
    guessBtn.innerText = "guess!";
    
    hideElem.removeAttribute("hidden");
    guess.value = "";
    result.innerText = "";
    guessBtn.style.float = "left";
    
  } else {
    let guessedValue = parseInt(guess.value);
    if (guessedValue < numberToGuess) {
      result.innerText = "Too low!";
      guess.value = "";
    } else if (guessedValue > numberToGuess) {
      result.innerText = "Too high!";
      guess.value = "";
    } else if( guessedValue === numberToGuess) {
      result.innerText = "Good Work!";
      numberToGuess = null;
      guess.value = "";
      guessBtn.innerText = "Randomize";
      guessBtn.style.float = "unset";

      hideElem.setAttribute("hidden", true);
    } else {
      result.innerText = "You didn't enter a value!";
      guess.value = "";
    }
  }
  guess.focus();
}
//------------------------------------------------------------------------
//Days to Christmas
const aDay = 24 * 60 * 60 * 1000;
let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 24);
if (today.getMonth == 11 && today.getDate > 24)
  christmas.setFullYear(christmas.getFullYear() + 1);

let daysleft = Math.ceil((christmas.getTime() - today.getTime()) / aDay);
const newH2 = document.createElement("h2");
const newContent = document.createTextNode(
  "Today it is " + daysleft + " days until christmas eve"
);
newH2.appendChild(newContent);
const newDiv = document.getElementById("daysToChristmas");
newDiv.appendChild(newH2);

//------------------------------------------------------------------------
//Add py to words
function mouseOverPy() {
  document.getElementById("pyWord").focus();
}
function addPyToWord() {
  let word = document.getElementById("pyWord").value;
  console.log(word.substring(0, 2).toLowerCase());
  word = word.substring(0, 2).toLowerCase() === "py" ? word : "py" + word;

  document.getElementById("pyResult").innerText = word;
}

//-------------------------------------------------------------------------
//Find the value closest to 100
function closeTo100() {
  let value1 = parseInt(document.getElementById("value1").value);
  let value2 = parseInt(document.getElementById("value2").value);
  let result = document.getElementById("closeTo100result");
  if (Math.abs(100 - value1) === Math.abs(100 - value2)) {
    result.innerText = "They are equally far from 100";
    
  }else {
    let res =
      Math.abs(100 - value1) <= Math.abs(100 - value2) ? value1 : value2;
    result.innerText = res + " is closest to 100.";
    
  }
  
}
