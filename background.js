var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

//console.log(body);
//body.style.background = "red";

console.log(color1);
console.log(color2);

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

//mo�a przenie�� do html i w znaczniku doda�: oninput="setGradient()", albo onclick 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);