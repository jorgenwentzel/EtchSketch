//create grid
const createGrid = function(squares) {
    const grid = document.querySelector(".gridContainer");

    let totalSquares = (squares*squares);
    let squareHeight = (((800/squares) -2) +'px');
    let squareWidth = squareHeight;

    for (i = 0; i < totalSquares; i++) {
        let div = document.createElement('div');
        div.className = "cell";
        div.style.height = squareHeight;
        div.style.width = squareWidth;
        div.addEventListener("mouseover", function(){
        div.style.backgroundColor = "green";
        });
        div.style.transitionTimingFunction = "linear";
        div.style.transitionDuration = "0s";

        grid.appendChild(div);
    }
}

function clearGrid(){
    const myNode = document.querySelector(".gridContainer");
    myNode.innerHTML = '';
}

function drawGrid() {
    let gridSize = document.getElementById("gridsize").value;
    clearGrid();
    createGrid(gridSize);
}


