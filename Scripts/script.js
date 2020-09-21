/*ETCH-A-SKETCH APP
*The size input determines the number of rows and columns the grid will contain 1 represents 1 row and column 10 represents 10 columns and 10 rows. 
*The clear button will reset the box container.
*Use CSS grid to create a grid of square boxs.
*Hovering over a square will change the background color to a randomised color.
*/

//CLEAR
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", containerReset);

function containerReset() {
    document.getElementById("box-container").reset();
}

//GRID




const container = document.getElementById("box-container");
const size = document.getElementById("size-input");
size.addEventListener('input', sizeOfGrid);

function sizeOfGrid() {
    container.innerHTML = "";
    numberOfSquares = size.value * size.value; 
    console.log(numberOfSquares);
    for(i = 0; i < numberOfSquares; i++) {
        const square = document.createElement("div");
        square.className = "sqaure";
        container.appendChild(square);
        square.addEventListener("mouseover", function (){
            let randomColour = "#" + Math.random().toString(16).substr(-6);
            square.style.background = randomColour;
        });
    }
}

function colorChange () {
    let randomColour = "#" + Math.random().toString(16).substr(-6);
    square.style.background = randomColour;
}











