

// Add the squares to the grid
let container = document.querySelector(".container");
function makeGrid(size) {
    container.replaceChildren();
    for (i = 1; i <= size * size; i++) {
        let square = document.createElement('div');
        let percent = (100 / size) + "%";
        square.className = "square";
        square.style.flexBasis = percent;
        container.appendChild(square);
    }
    // Change square color on mouseover
    let box = document.querySelectorAll(".square");
    box.forEach(function (elem) {
        elem.addEventListener("mouseover", () => {
            elem.classList.add("hover");
        })
    })
}

// Set up default grid
let size = 16;
makeGrid(size);

// Get the user size and set up new grid
function setSize() {
    size = prompt("How many squares per side of the grid?");
    makeGrid(size);
}

let sizeButton = document.querySelector("#sizeButton")
sizeButton.addEventListener("click", setSize)










