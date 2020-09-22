/*ETCH-A-SKETCH APP
*The size input determines the number of rows and columns by squaring the size.value and setting the rows and columns to the result.
*The clear button will set the background of the boxes to white.
*Use CSS grid to create a grid of square boxs.
*Hovering over a square will change the background color to a randomised color.
*/


//GRID
const container = document.getElementById("box-container");
const size = document.getElementById("size-input");
size.addEventListener('input', sizeOfGrid);
const square = document.createElement("div");

function sizeOfGrid() {
    container.innerHTML = "";
    container.style.setProperty("--grid-rows", size.value);
    container.style.setProperty("--grid-rows", size.value);
    numberOfSquares = size.value * size.value; 
    console.log(numberOfSquares);
    for(i = 0; i < numberOfSquares; i++) {
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
        square.addEventListener("mouseover", function (){
            let randomColour = "#" + Math.random().toString(16).substr(-6);
            square.style.background = randomColour;
        });
    }
}

//CLEAR
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", containerReset);

function containerReset() {
    squares = document.getElementsByClassName('square');
    for(i = 0; i < squares.length; i++) {
        squares[i].style.background = "#ffffff";   
    }  
}










