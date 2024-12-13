var divs = document.querySelectorAll(".column")
const clearBtn = document.querySelector("#clear-btn");
const gridInput = document.querySelector("#grid-input");
const submitBtn = document.querySelector("#submit-btn");
const gridContainer = document.querySelector(".grid");
const gridInitVal = 8;
const gridwidth = gridContainer.clientHeight;

gridInput.value = gridInitVal;
addDrawEvent();
drawGrid()
submitBtn.addEventListener("click", drawGrid);
clearBtn.addEventListener("click", clear);

function addDrawEvent() {
    Array.from(divs).forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "blue";
        })
    })
}

function drawGrid() {
    gridSize = gridInput.value;
    gridInput.value = "";
    
    if(gridSize > 20) {
        alert("Too beeg");
        return;
    }
    
    if(gridSize < 2) {
        alert("Too smol");
        return;
    }

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }

    for(var i = 0; i < gridSize; i++) {
        var newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.style.height = gridwidth/gridSize;
        newRow.style.width = gridwidth;
        gridContainer.appendChild(newRow);
        console.log(newRow.style.height)
        

        for(var j = 0; j < gridSize; j++) {
            var newCol = document.createElement("div")
            newCol.classList.add("column");
            newCol.style.height = gridwidth/gridSize;
            newCol.style.width = gridwidth/gridSize;
            newRow.appendChild(newCol)
        }
    }

    divs = document.querySelectorAll(".column");
    addDrawEvent();
}

function etch(element) {
    element.style.backgroundColor = "blue";
}

function clear() {
    Array.from(divs).forEach((div) => {
        div.style.backgroundColor = "black";
    })
}