var divs = document.querySelectorAll(".column")
const clearBtn = document.querySelector("#clear-btn");
const gridInput = document.querySelector("#grid-input");
const submitBtn = document.querySelector("#submit-btn");
const gridContainer = document.querySelector(".grid");

addDrawEvent();

submitBtn.addEventListener("click", () => {
    gridSize = gridInput.value;
    
    if(gridSize > 20) {
        alert("Too beeg");
        gridInput.value = "";
        return;
    }
    
    if(gridSize < 2) {
        alert("Too smol");
        gridInput.value = "";
        return;
    }

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }

    for(var i = 0; i < gridSize; i++) {
        var newRow = document.createElement("div");
        newRow.classList.add("row");
        gridContainer.appendChild(newRow);
        

        for(var j = 0; j < gridSize; j++) {
            var newCol = document.createElement("div")
            newCol.classList.add("column");
            newRow.appendChild(newCol)
        }
    }

    divs = document.querySelectorAll(".column");
    addDrawEvent();

})

clearBtn.addEventListener("click", () => {
    Array.from(divs).forEach((div) => {
        div.style.backgroundColor = "white";
    })
});



function addDrawEvent() {
    Array.from(divs).forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "blue";
        })
    })
}















//TODO: Figure out how to incorporate functions within eventlisteners
function etch(element) {
    element.style.backgroundColor = "blue";
}

function clear() {
    Array.from(divs).forEach((div) => {
        div.style.backgroundColor = "black";
    })
}