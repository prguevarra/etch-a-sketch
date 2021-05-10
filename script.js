//query selectors
let boardContainer = document.querySelector('.container');

// query selectors for buttons 
let buttonSelections = document.querySelectorAll('button');
let blackButton = document.querySelector('button.black');
let redButton = document.querySelector('red');
let rgbButton = document.querySelector('rgb');
let clearButton = document.querySelector('clear');

//query selectors for sliders
let sizeSlider = document.querySelector("#sizeRange");

//////////////////////////////////////////////////////

// event listeners for the buttons
buttonSelections.forEach((button) => {
    button.addEventListener('click', boardDoodleColor)
});

// set colors of hover "effect"
let colorSelected;
function boardDoodleColor(e) {
    let bucketSelection = e.target.getAttribute('class');
    if (bucketSelection === "black") {
        colorSelected = "black";
    } else if (bucketSelection === "red") {
        colorSelected = "red";
    } else if (bucketSelection === "rgb"){
        colorSelected = "randomColor";
    } else if (bucketSelection === "eraser") {
        colorSelected = "eraser";
    } else if (bucketSelection === "clear") {
        clearBoard();
    } 
    return colorSelected; 
}

// generate random colors
let randomColor = function() {
    colorSelection = Math.floor(Math.random()*16777215).toString(16);
    return colorSelection;
}

// choose color to change divs upon hover
function paintPixel(targetPixel) {
    if (colorSelected === "black") {
        targetPixel.setAttribute('style', 'background: #A0AFB7');
    } else if (colorSelected === "red") {
        targetPixel.setAttribute('style', 'background: #7391c8');
    } else if (colorSelected === "randomColor") {
        targetPixel.setAttribute('style', `background: ${'#' + randomColor()}`);
    } else if (colorSelected === "eraser") {
        targetPixel.setAttribute('style', 'background: #98d7c2');
    } else {
        targetPixel.setAttribute('style', 'background: #A0AFB7');
    }
}

// clear all doodles
function clearBoard() {
    allPixels = document.querySelectorAll('.pixel');
        allPixels.forEach((pixel) => {
            pixel.setAttribute('style', 'background: #98d7c2');
        });
}

//////////////////////////////////////////////////////
// const gridValue =  Number(window.prompt("Set the dimension"));
// const gridDimensions = UserSet * UserSet;

gridSetDimensions(16);
// resetSliders();
sizeSlider.addEventListener("change", gridSizeUserDefined);

function gridSizeUserDefined(e) {
    let gridValue = e.target.valueAsNumber;
    gridSetDimensions(gridValue);
    addStyleProperties(gridValue);
}

// create a number of divs depending on user input dimension

function gridSetDimensions(gridValue) {
    // console.log(gridValue);
    boardContainer.textContent = '';
    for (i=0; i < (gridValue * gridValue); i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        boardContainer.appendChild(pixel);
    }
}

// Set the number of rows and columns of grid children 
function addStyleProperties(gridValue) {
    boardContainer.style['gridTemplateRows'] = `repeat(${gridValue}, 1fr)`;
    boardContainer.style['gridTemplateColumns'] = `repeat(${gridValue}, 1fr)`;
    console.log(gridValue);
}

// Add event listener to divs/pixels
    boardContainer.addEventListener('mouseover', hoverEffects);

// Add effects on divs upon mouse hover
function hoverEffects(e) {
    let targetPixel = e.target;
    let targetContainer = e.target.getAttribute('class');
    if (!(targetContainer === 'container')) {
        paintPixel(targetPixel);
        console.log(targetPixel);
    }
}