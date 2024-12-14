var divs = document.querySelectorAll(".column")
const clearBtn = document.querySelector("#clear-btn");
const gridInput = document.querySelector("#grid-input");
const submitBtn = document.querySelector("#submit-btn");
const gridContainer = document.querySelector(".grid");
const GRIDMAX = 100;
const GRIDMIN = 20;
const gridInitVal = GRIDMIN;
var gridwidth = gridContainer.clientHeight;

gridInput.value = gridInitVal;
addDrawEvent();
drawGrid()
submitBtn.addEventListener("click", drawGrid);
clearBtn.addEventListener("click", clear);

function addDrawEvent() {
    Array.from(divs).forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
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

    for(var i = 0; i < gridSize; i++) {
        var newRow = document.createElement("div");
        newRow.classList.add("row");
        console.log(gridwidth/gridSize);
        newRow.style.width = gridwidth;
        gridContainer.appendChild(newRow);
        newRow.style.height = gridwidth/gridSize;
        console.log(newRow.style.height)
        

        for(var j = 0; j < gridSize; j++) {
            var newCol = document.createElement("div")
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