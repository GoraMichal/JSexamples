var button = document.getElementById("addBtn");

function addBlockAfterClick() {
    var newBlock = document.createElement("div");

    newBlock.classList.add("blockStyle");
    currentDiv = document.getElementById("firstDiv");

    //var newContent = document.createTextNode("IMG");
    //newBlock.appendChild(newContent);

    var currentDiv = document.getElementById("naglowek");
    document.body.insertBefore(newBlock, currentDiv);

}

button.addEventListener("click", addBlockAfterClick);
