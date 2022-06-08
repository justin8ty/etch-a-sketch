//Defaults//

const resetColor = "gainsboro";
let color = "black";
let sizeInput = 16;

// Setup grid

function setupGrid(sizeInput) {
  const sketchBoard = document.querySelector(".sketchBoard");

  while (sketchBoard.firstChild) {
    sketchBoard.removeChild(sketchBoard.firstChild);
  }

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

const sizeSlider = document.querySelector(".sizeInput");
const sizeDisplay = document.querySelector(".sizeDisplay");
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", changeSize);

// Option functions

// Questions: How can I route onclick to colorGrid?

function colorGrid() {
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(colorChoice) {
  color = colorChoice;
}

function changeSize(value) {
  if (value >= 2 && value <= 100) {
    setupGrid(value);
  } else {
    alert("Please choose a grid size between 2 and 100");
  }
}

function updateSizeValue(value) {
  sizeDisplay.textContent = `${value} x ${value}`;
}

function resetGrid() {
  let sketchBoard = document.querySelector(".sketchBoard");
  let wipeGrid = sketchBoard.querySelectorAll(".pixel");
  wipeGrid.forEach((div) => (div.style.backgroundColor = resetColor));
}
