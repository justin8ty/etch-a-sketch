//Defaults//

const resetColor = "gainsboro";
let color = "black";
let sizeInput = 16;

// Main

function setupGrid(sizeInput) {
  const sketchBoard = document.querySelector(".sketchBoard");

  sketchBoard.style.gridTemplateColumns = `repeat(${sizeInput}, 1fr)`;
  sketchBoard.style.gridTemplateRows = `repeat(${sizeInput}, 1fr)`;

  for (let i = 0; i < sizeInput * sizeInput; i++) {
    const grid = document.createElement("div");
    grid.classList.add("pixel");
    grid.addEventListener("mouseover", colorGrid);
    sketchBoard.appendChild(grid);
  }
}

setupGrid(sizeInput);

// Option listeners

const blackBtn = document.querySelector(".blackBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const eraserBtn = document.querySelector(".eraserBtn");

blackBtn.onclick = () => changeColor("black");
rainbowBtn.onclick = () => changeColor("rainbow");
eraserBtn.onclick = () => changeColor("gainsboro");

const resetBtn = document.querySelector(".resetBtn");
resetBtn.onclick = () => resetGrid();

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", changeSize);

// Option functions

function colorGrid() {
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 75%, 50%`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(colorChoice) {
  color = colorChoice;
}

function changeSize() {
  sizeInput = document.querySelector(".sizeInput").value;
  console.log(sizeInput);

  if (sizeInput >= 2 && sizeInput <= 98) {
    resetGrid();
    setupGrid(sizeInput);
  } else {
    alert("Choose an input between 2 and 100");
  }
}

function resetGrid() {
  let sketchBoard = document.querySelector(".sketchBoard");
  let wipeGrid = sketchBoard.querySelectorAll("div");
  wipeGrid.forEach((div) => (div.style.backgroundColor = resetColor));
}
