//var button = document.getElementsByTagName("button")[0];

//button.addEventListener("click", function() {x
//    console.log("Siema"); 
//})

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelectorAll("ul")[1];

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);

//button.addEventListener("click", function () {
//    if (input.value.length > 0) {
//        var li = document.createElement("li");
//        li.appendChild(document.createTextNode(input.value));
//        ul.appendChild(li);
//        input.value = "";
//    }
//})