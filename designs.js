// make the event listener for form submit
document.getElementById("sizePicker").onsubmit = function () {
    makeGrid();
}

function makeGrid() {
    event.preventDefault();
    // get height and width from html
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    // get and reset table
    var table = document.getElementById("pixelCanvas");
    table.innerHTML = "";

    // nested for loop for making the grid
    for (let i = 0; i < height; i++) {
        //insert a row
        // https://www.w3schools.com/jsref/met_table_insertrow.asp
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            // for each column, insert a cell
            let cell = row.insertCell(j);
            // add the event listener to the cell to change color
            cell.addEventListener("click", function(e) {
                // get the color
                let color = document.getElementById('colorPicker').value;
                // set the color on the cell as background color
                event.target.style.backgroundColor = color;
            });
        }
    }
}
