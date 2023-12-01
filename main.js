const circle = document.querySelector(".circle");
const smCircle = document.querySelector(".small-circle");
const mdCircle = document.querySelector(".medium-circle");
const outlineTriangle = document.querySelector(".outlinetriangle");
const triangle = document.querySelector(".triangle");
const tbox = document.querySelector("#tbox");
const btnShakeIt = document.querySelector("#btn-shake-it");
const input = document.getElementById('input');
const inputControl = input.parentElement; // .input-control


//brings data from 3rd party api, injects into tbox
function getFromEightBallApi() {
  fetch("http://localhost:3000/")
    .then(res => res.json())
    .then(data => {
      document.getElementById('tbox').innerHTML = data.body;
    })
    .catch((err) => {
      console.log("FAILURE");
    });
}

//clears input after user submits text
function clearInput() {
  document.getElementById("input").value = "";
}


//shake it button removes animation - allows for 1 click reaction
circle.addEventListener("animationend", () => {
  circle.classList.remove("shakeit");
});
smCircle.addEventListener("animationend", () => {
  smCircle.classList.remove("shakeit");
});
mdCircle.addEventListener("animationend", () => {
  mdCircle.classList.remove("shakeit");
});
outlineTriangle.addEventListener("animationend", () => {
  outlineTriangle.classList.remove("shakeit");
  outlineTriangle.classList.remove("fade");
});
triangle.addEventListener("animationend", () => {
  triangle.classList.remove("shakeit");
  triangle.classList.remove("fade");
});
tbox.addEventListener("animationend", () => {
  tbox.classList.remove("shakeit");
  tbox.classList.remove("fade");
});

//regex input 
const regex = /^(who|am|what|when|where|will|how|if|would|when|does|why|whose|whom|which|could|should|can|does|don't|dont|won't|wont|couldn't|couldnt|shouldn't|shouldnt|can't|cant)+( [\w]+)*(\?+$)/i;


//checks conditions of input/starts animation clicking button
btnShakeIt.addEventListener('click', (e) => { 
    checkInput();
});

// "" hitting enter key
input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      checkInput();
    }   
    
});




function checkInput() {
  //checks char in input field
  const inputValue = input.value.trim();

if(inputValue ==='') {
  //show error
  //add error class
  setErrorFor(input, 'you must ask a question to receive a reading');
} 
  else if (!isQuestion(inputValue)) {
  setErrorFor(input, 'you must ask in the form of a question');
} 
  else {
  setTimeout(getFromEightBallApi,2500);
  clearInput();
  setSuccessFor(input);
  //Shake it button starts animation
  circle.classList.add("shakeit");
  smCircle.classList.add("shakeit");
  mdCircle.classList.add("shakeit");
  outlineTriangle.classList.add("shakeit");
  outlineTriangle.classList.add("fade");
  triangle.classList.add("shakeit");
  triangle.classList.add("fade");
  tbox.classList.add("shakeit");
  tbox.classList.add("fade");
}};


function setErrorFor(input, message) {
    const small = inputControl.querySelector('small');
    //adds error messsage in small tag
    small.innerText = message;
    // adds error class
    inputControl.className = 'input-control error';
}


function setSuccessFor(input) {
  const small = inputControl.querySelector('small');
  // adds success class
  inputControl.className = 'input-control success';
}

function isQuestion (input) {
  //applies regex to input
  return regex.test(input);
}

console.log(isQuestion());



