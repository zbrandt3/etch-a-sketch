// stop using var idiot
let divs = document.querySelectorAll(".column")
const clearBtn = document.querySelector("#clear-btn");
const gridInput = document.querySelector("#grid-input");
const submitBtn = document.querySelector("#submit-btn");
const gridContainer = document.querySelector(".grid");
const drawColorBtns = document.querySelectorAll(".draw-color");

const GRIDMAX = 100;
const GRIDMIN = 10;
const gridInitVal = GRIDMIN;
let gridwidth = gridContainer.clientHeight;
let drawColor = "green"

gridInput.value = gridInitVal;
addDrawEvent();
drawGrid()
Array.from(drawColorBtns).forEach((e) => {e.addEventListener("click", changeColor)})

submitBtn.addEventListener("click", drawGrid);
clearBtn.addEventListener("click", clear);

function addDrawEvent() {
    Array.from(divs).forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = drawColor;
        })
    })
}

function drawGrid() {
    gridSize = gridInput.value;
    gridInput.value = "";
    
    if(gridSize > GRIDMAX) {
        alert("Too beeg");
        return;
    }
    
    if(gridSize < GRIDMIN) {
        alert("Too smol");
        return;
    }

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }

    gridwidth = gridContainer.clientHeight;

    for(let i = 0; i < gridSize; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        
        newRow.style.width = gridwidth;
        newRow.style.height = gridwidth/gridSize;

        gridContainer.appendChild(newRow);
        

        for(let j = 0; j < gridSize; j++) {
            let newCol = document.createElement("div")
            newCol.classList.add("column");

            newCol.style.height = gridwidth/gridSize + 'px';
            newCol.style.width = gridwidth/gridSize + 'px';

            newRow.appendChild(newCol)
        }
    }

    divs = document.querySelectorAll(".column");
    addDrawEvent();
}

function clear() {
    Array.from(divs).forEach((div) => {
        div.style.backgroundColor = "white";
    })
}

function changeColor() {
        if(this.id == 'red') { drawColor = 'red'; }
        if(this.id == 'green') { drawColor = 'green'; }
        if(this.id == 'blue') { drawColor = 'blue';  }
}