
const circle = document.querySelector(".circle");
const smCircle = document.querySelector(".small-circle");
const mdCircle = document.querySelector(".medium-circle");
const triangle = document.querySelector(".triangle");
const tbox = document.querySelector("#tbox");
const btnShakeIt = document.querySelector("#btn-shake-it");
const readingsP = document.querySelector("#readings");


//brings data from 3rd party api, injects into tbox
function api()  {

    fetch('https://yesno.wtf/api')
    .then((data)=>{
        return data.json();
    })
    .then((completedata)=>{
        console.log(completedata.answer);
        //document.getElementById('tbox').innerHTML = completedata.answer;
    })
    .catch((err)=>{
        console.log('FAILURE');
    })
    
    }
    
    //innate responses 
    let fortunes = ['it is certain', 'ask again later', 'very doubtful', 'outlook good','better not tell you now','it is decidedly so','concentrate and ask again', api()];
    
    function randomize() {
    
       let injectRandom = fortunes[Math.floor(Math.random() *fortunes.length)];
       console.log(injectRandom);
       tbox.innerHTML+= injectRandom;
    };
    
    
    function eraseRandom() {
    
        tbox.innerHTML='';
    
    };
    
    /*btnShakeIt.addEventListener("click", () => {
            const injectRandom = document.createElement('p');
            injectRandom.innerText = ;
            readingsP.appendChild(readings());
        
    });*/
    
    


//Shake it button starts animation
btnShakeIt.addEventListener("click", () => {
    circle.classList.add("shakeit");
    smCircle.classList.add("shakeit");
    mdCircle.classList.add("shakeit");
    triangle.classList.add("shakeit");
    triangle.classList.add("fade");
    tbox.classList.add("shakeit");
    tbox.classList.add("fade"); 
    

});



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
triangle.addEventListener("animationend", () => {
    triangle.classList.remove("shakeit");
    triangle.classList.remove("fade");
});
tbox.addEventListener("animationend", () => {
    tbox.classList.remove("shakeit");
    tbox.classList.remove("fade");
});







/*
async function getData() {
try {
const response = await fetch('https://yesno.wtf/api')
const data = await response.json();
console.log(data);
showResult(data);
} catch (err) {
console.log('uh oh');
}
}

*/









