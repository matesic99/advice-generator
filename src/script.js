//import fetch from 'node-fetch';
const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice");
const buttonGenerate = document.getElementById("button");

const generateAdvice = () =>{
fetch  ("https://api.adviceslip.com/advice", {cache:'no-store'})
.then(response => response.json()) // Translate JSON into JavaScript
.then(advice => {
    adviceNumber.textContent = advice.slip.id
    adviceText.textContent = advice.slip.advice


});

};



buttonGenerate.addEventListener("click",generateAdvice);