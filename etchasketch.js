// create 16 div inside div.container

let container = document.querySelector(".container");
function makeGrid (size) {
for (i=1; i<=size*size; i++) {
    let square = document.createElement('div');
    square.className = "square";
    container.appendChild(square); 
}
}

makeGrid(16);

let box = document.querySelectorAll(".square");

box.forEach(function (elem) {
    elem.addEventListener("mouseover", () => {
        elem.classList.add("hover");
    })
})
