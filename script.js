//Defaults//

const resetColor = "MintCream";
let color = "black";
let sizeInput = 16;

// Needs to be initialized early

const sizeDisplay = document.querySelector(".sizeDisplay");

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
    // grid.addEventListener("mousedown", colorGrid);
    sketchBoard.appendChild(grid);
  }

  sizeDisplay.textContent = `${sizeInput} x ${sizeInput}`;
}

setupGrid(sizeInput);

// Option listeners

const blackBtn = document.querySelector(".blackBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const eraserBtn = document.querySelector(".eraserBtn");

blackBtn.onclick = () => changeColor("black");
rainbowBtn.onclick = () => changeColor("rainbow");
eraserBtn.onclick = () => changeColor("MintCream");

const resetBtn = document.querySelector(".resetBtn");
resetBtn.onclick = () => resetGrid();

const sizeSlider = document.querySelector(".sizeInput");
sizeSlider.onmousemove = (e) => updateSize(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

// const submitBtn = document.querySelector(".submitBtn");
// submitBtn.addEventListener("click", changeSize);

// Option functions

// Questions: How can I route onclick to colorGrid?
// How do I make the grid listens only when mouse clicks?

function colorGrid(e) {
  // if (e.type === "mouseover" && !mousedown) return;
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%`;
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

function updateSize(value) {
  sizeDisplay.textContent = `${value} x ${value}`;
}

function resetGrid() {
  let sketchBoard = document.querySelector(".sketchBoard");
  let wipeGrid = sketchBoard.querySelectorAll(".pixel");
  wipeGrid.forEach((div) => (div.style.backgroundColor = resetColor));
}
