const grid = document.getElementById("grid");
const changeSizeBtn = document.getElementById("change-size-btn");

function generateGrid(size) {
    for (let y = 0; y < size; y++) {
        let row = document.createElement("row");
        row.classList.add("row");
        for (let x = 0; x < size; x++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}
generateGrid(16);

grid.addEventListener("mouseover", event => {
    if (event.target.classList.contains("square"))
        event.target.classList.add("filled");
});

changeSizeBtn.addEventListener("click", () => {
    let size = prompt("What size do you want the grid?");
    if (isNaN(size)) return;

    size = parseInt(size);
    console.log(size)
    console.log(typeof size)
    if (size > 100 || size < 1) return;

    if (grid.firstChild) grid.replaceChildren();
    generateGrid(size);
});
