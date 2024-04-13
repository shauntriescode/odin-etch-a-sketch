// NEED TO PUT THE RGB VALUE IN A FOR EACH LOOP SO EACH SQUARE IS DIFFERENT

// Variables
const container = document.querySelector('.container');
let gridHeight = 16;
let gridWidth = 16;
let numberOfSquares = gridHeight * gridWidth
const btn = document.querySelector('.btn');


// Random RGB Value
const getRandomRGB = function (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
};

  const r = getRandomRGB(0, 255);
  const g = getRandomRGB(0, 255);
  const b = getRandomRGB(0, 255);
  const randomRGB = `${r},${g},${b}`


// Create Grid Function
function createGrid(container, numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
  // Create each square
  const square = document.createElement('div');
  square.classList.add('square');

  // Style
  square.style.width = `calc(100% / ${gridHeight})`
  square.style.height = `calc(100% / ${gridWidth})`
  square.style.backgroundColor = '#111'
  square.style.flexGrow = '1';
  square.style.flexBasis = 'auto';

  // Event Listener
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = `rgb(${randomRGB})`
    });
  
  // Append to container
  container.appendChild(square);
    };
};

// New Grid via Button Input
btn.addEventListener('click', () => {
  input = prompt('Enter a number from 1 to 100 to update the grid')

  if (input === null || isNaN(input) || input > 100 || input < 1) {
    alert('Please enter a valid number from 1 to 100')
  } else {
    // Clear current
    container.innerHTML = ''

    // New Grid
    gridHeight = input;
    gridWidth = input;
    numberOfSquares = gridHeight * gridWidth


    // Call function with new grid parameters
    createGrid(container, numberOfSquares)
  };
});




// Calling function
createGrid(container, numberOfSquares);
console.log(randomRGB);






