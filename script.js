//query selectors
let boardContainer = document.querySelector('.container');
// query selectors for buttons 
let buttonSelections = document.querySelectorAll('button');
let blackButton = document.querySelector('button.black');
let redButton = document.querySelector('red');
let rgbButton = document.querySelector('rgb');
let clearButton = document.querySelector('clear');


///////////////////generate random colors//////////////
// const randomColorArray = ['orange', 'yellow', 'blue', 'violet', 'green', 'pink', 'purple', 'brown'];
// const randomColor = function() {
//     randomColorArray.forEach.
//     // for(i=0; i<randomColorArray.length; i++){
//     //     const colorRandomSelected = Math.floor(Math.random()*randomColorArray[i]);
//     //     return colorRandomSelected;
//     // }
// }
////////////////////////////////////////////////

///////////////////event listener for buttons color selection/////////////////////////////////////////////
let colorSelected;
// event listeners for the buttons
buttonSelections.forEach((button, index) => {

    button.addEventListener('click', boardDoodleColor)
});

function boardDoodleColor(e) {
    // console.log(e);
    let bucketSelection = e.target.getAttribute('class');
    // console.log(bucketSelection);
    if (bucketSelection === "black") {
        // targetPixel.classList.add('black-paint');
        colorSelected = "black";
    } else if (bucketSelection === "red") {
        colorSelected = "red";
    } else if (bucketSelection === "rgb"){
        colorSelected = "randomColor";
    }  else if (bucketSelection === "clear") {
        colorSelected = "clear";
    } 
    console.log(colorSelected);
    return colorSelected; 
       // targetPixel.classList.add('red-paint');
}

//////////////////////////////////////////////////////

// ask for user input
const UserSet =  Number(window.prompt("Set the dimension"));
const gridDimensions = UserSet * UserSet;

// create a number of divs depending on user input dimension
for (i=0; i < gridDimensions; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    boardContainer.appendChild(pixel);
}

// Set the number of rows and columns of grid children
boardContainer.style['gridTemplateRows'] = `repeat(${UserSet}, 1fr)`;
boardContainer.style['gridTemplateColumns'] = `repeat(${UserSet}, 1fr)`;

// Add event listener to divs
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

// choose color to change divs upon hover
function paintPixel(targetPixel) {
    if (colorSelected === "black") {
        targetPixel.setAttribute('style', 'background: black');
    } else if (colorSelected === "red") {
        targetPixel.setAttribute('style', 'background: red');
    } 
    // else if (colorSelected === "rgb") {
        // targetPixel.setAttribute('style', 'background: ${randomColor}');
    // }
     else if (colorSelected === "clear") {
        targetPixel.setAttribute('style', 'background: gray');
    } else {
        targetPixel.setAttribute('style', 'background: black');
    }
}



// grid-template-rows: 1fr 50px 1fr 1fr; 
// for (i=0; i < UserSetDimension; i++) {
//     pixel[i] = document.createElement('div');
//     console.log(UserSetDimension);
// }
