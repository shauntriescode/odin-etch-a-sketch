
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

// Opacity
const darkenOpacity = function () {

}

// Create Grid Function
function createGrid(container, numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
  // Random RGB
  const r = getRandomRGB(0, 255);
  const g = getRandomRGB(0, 255);
  const b = getRandomRGB(0, 255);
  const randomRGB = `${r},${g},${b}`

  // Create each square
  const square = document.createElement('div');
  square.classList.add('square');

  // Style
  square.style.width = `calc(100% / ${gridHeight})`
  square.style.height = `calc(100% / ${gridWidth})`
  square.style.backgroundColor = 'rgb(${randomRGB})'
  square.style.flexGrow = '1';
  square.style.flexBasis = 'auto';

  // Opacity Decrement
  const opacityDecrement = 1 / 10;


  // Event Listeners
  square.addEventListener('mouseover', () => {
    // Random RBG
    square.style.backgroundColor = `rgb(${randomRGB})`;

    // Opacity
    const currentSquare = event.target;
    const computedStyle = window.getComputedStyle(currentSquare);
    let opacity = computedStyle.getPropertyValue('opacity');

    // Makes sure it begins at full opacity
    if (opacity === '') {
      opacity = '1'
    }


      let opacityAsNum = parseFloat(opacity);

      opacityAsNum -= opacityDecrement;

      if (opacityAsNum < 0) {
        opacityAsNum = 0;
      }
      square.style.opacity = opacityAsNum.toString()
    
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







