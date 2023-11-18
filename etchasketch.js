// create 16 div inside div.container

let container = document.querySelector(".container");
for (x=0; x<16; x++) {
    let column = document.createElement('div');
    column.className = "column";

    for (i=0; i<16; i++) {
        let row = document.createElement('div');
        row.className = "row";
        row.innerText = (x * 16) + i;
        column.appendChild(row);
    }

    container.appendChild(column); 
}