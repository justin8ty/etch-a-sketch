const drawGrid = document.getElementById("drawGrid");

function makeRows(rows, cols) {
  drawGrid.style.setProperty("--grid-rows", rows);
  drawGrid.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    drawGrid.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);
