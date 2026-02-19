let button = document.getElementById("buttonId").value
let box = document.querySelector(".box");

function displayText(e){
    e.default
    let userInput = document.getElementById("text").value
    box.innerText = userInput
}

button.addEventListener('click',displayText)