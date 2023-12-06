let currentColour = "black";


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
    }
}

createDivSq(16);

// Colour Picker 

const redBlock = document.getElementById("red-block");
redBlock.addEventListener("click", () => {
    removeAllTicks();
    document.getElementById("red-box").classList.add("selected");
    document.getElementById("red-box").classList.remove("hidden");
    currentColour = "red";
})

const blueBlock = document.getElementById("blue-block");
blueBlock.addEventListener("click", () => {
    removeAllTicks();
    document.getElementById("blue-box").classList.add("selected");
    document.getElementById("blue-box").classList.remove("hidden");
    currentColour = "blue";
})

const yellowBlock = document.getElementById("yellow-block");
yellowBlock.addEventListener("click", () => {
    removeAllTicks();
    document.getElementById("yellow-box").classList.add("selected");
    document.getElementById("yellow-box").classList.remove("hidden");
    currentColour = "yellow";
})

const greenBlock = document.getElementById("green-block");
greenBlock.addEventListener("click", () => {
    removeAllTicks();
    document.getElementById("green-box").classList.add("selected");
    document.getElementById("green-box").classList.remove("hidden");
    currentColour = "green";
})

const pinkBlock = document.getElementById("pink-block");
pinkBlock.addEventListener("click", () => {
    removeAllTicks();
    document.getElementById("pink-box").classList.add("selected");
    document.getElementById("pink-box").classList.remove("hidden");
    currentColour = "pink";
})

const purpleBlock = document.getElementById("purple-block");
purpleBlock.addEventListener("click", () => {
    removeAllTicks();
    document.getElementById("purple-box").classList.add("selected");
    document.getElementById("purple-box").classList.remove("hidden");
    currentColour = "purple";
})

const blackBlock = document.getElementById("black-block");
blackBlock.addEventListener("click", () => {
    removeAllTicks();
    document.getElementById("black-box").classList.add("selected");
    document.getElementById("black-box").classList.remove("hidden");
    currentColour = "black";
})


const removeAllTicks = () => {
    console.log("Cleared");
    document.getElementById("red-box").classList.add("hidden");
    document.getElementById("blue-box").classList.add("hidden");
    document.getElementById("green-box").classList.add("hidden");
    document.getElementById("yellow-box").classList.add("hidden");
    document.getElementById("pink-box").classList.add("hidden");
    document.getElementById("purple-box").classList.add("hidden");
    document.getElementById("black-box").classList.add("hidden");
}

// Check for clicks within grid
document.addEventListener("DOMContentLoaded", () => {
    const sketchGrid = document.getElementById('sketch-grid');
    let isMouseDown = false;

    sketchGrid.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        handleSketchBlockEvent(event);
        if (event.target.classList.contains('sketch-block')) {
            // Change this to var of currentColour
            event.target.classList.add(currentColour);
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
            event.target.classList.add(currentColour);
        }
    }
});

// Reset
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    const blocks = document.getElementsByClassName('sketch-block');
    [].forEach.call(blocks, (el) => {
        el.classList.remove('red');
        el.classList.remove('blue');
        el.classList.remove('yellow');
        el.classList.remove('green');
        el.classList.remove('pink');
        el.classList.remove('purple');
        el.classList.remove('black');
    })
})

const eraseBtn = document.getElementById("eraser-btn");
eraseBtn.addEventListener('click', () => {
    removeAllTicks();
    currentColour = "white";
})

// Footer Year
const date = new Date();
const year = date.getFullYear();
const yearTag = document.getElementById('year');
yearTag.innerHTML = year;