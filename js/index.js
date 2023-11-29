let currentColour;


// Sketck grid generation
const gridSize = '400px';
const sketchContainer = document.getElementById('sketch-grid');
const createDivSq = (divs) => {
    for (let i = 0; i < divs; i++) {
    const divRow = document.createElement('div');
    divRow.setAttribute('id', `row-${i}`)
    for (let j = 0; j < divs; j++) {
        const divBlock = document.createElement('div');
        divBlock.classList.add('sketch-block');
        divBlock.setAttribute('id', `row-${i}-block-${j}`)
        divBlock.style.width = `calc(${gridSize} / ${divs})`;
        divBlock.style.height = `calc(${gridSize} / ${divs})`;
        divBlock.style.border = 'thin solid lightgray'
        divRow.appendChild(divBlock);
    }
    sketchContainer.appendChild(divRow);
}}

createDivSq(32);

// Colour Picker 
document.addEventListener('DOMContentLoaded', () => {
    const colourContainer = document.getElementById('colours');

    colourContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('colour-block')) {
            
        }
    })
})

// Check for clicks within grid
document.addEventListener("DOMContentLoaded", () => {
    const sketchGrid = document.getElementById('sketch-grid');
    let isMouseDown = false;

    sketchGrid.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        handleSketchBlockEvent(event);
        if (event.target.classList.contains('sketch-block')) {
            // Change this to var of currentColour
            event.target.classList.add('red');
        }
    });

    document.addEventListener('mouseup', () => isMouseDown = false);

    sketchGrid.addEventListener('mousemove', (event) => {
        if (isMouseDown) {
            handleSketchBlockEvent(event);
        }
    });

    function handleSketchBlockEvent(event) {
        if (event.target.classList.contains('sketch-block')) {
            event.target.classList.add('red');
        }
    }
});

// Reset
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    const blocks = document.getElementsByClassName('sketch-block');
    [].forEach.call(blocks, (el) => {
        el.classList.remove('red');
    })
})

// Footer Year
const date = new Date();
const year = date.getFullYear();
const yearTag = document.getElementById('year');
yearTag.innerHTML = year;