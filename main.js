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

//regex input v


btnShakeIt.addEventListener('click', (e) => {

    checkInput();
});

function checkInput() {
  //checks char in input field
  const inputValue = input.value.trim();

if(inputValue === '') {
  //show error
  //add error class
  setErrorFor(input, 'you must ask a question to receive a reading');
  document.getElementById('tbox').innerHTML = "";
} else {
  setTimeout(getFromEightBallApi,2500);
  clearInput();
  setSuccessfor(input);
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


function setSuccessfor(input) {
  const small = inputControl.querySelector('small');
  // adds success class
  inputControl.className = 'input-control success';
}