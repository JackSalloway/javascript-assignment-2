// state identities
let colorState = 'black'

// identifers
const container = document.querySelector('.sketch-container');
// buttons
const blackColor = document.querySelector('.black-color');
const rainbowColor = document.querySelector('.rainbow-color');
const clearButton = document.querySelector('.clear');
// slider
const slider = document.getElementById('pixel-slider');
const sliderValue = document.getElementById('slider-value');

for (let gridCount = 1; gridCount <= 256; gridCount++) {
    const divGrid = document.createElement('div');
    divGrid.classList.add('grid');
    divGrid.setAttribute('id', `${gridCount}`)
    container.appendChild(divGrid);
}

// create random color picker
const numberGenerator = () => {
    return Math.floor(Math.random() * 255);
}

const attachGridListeners = () => {
    const gridBox = document.querySelectorAll('.grid');

    gridBox.forEach((grid) => {
        if (colorState === 'black') {
            grid.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'black';
            });
        } else if (colorState === 'rainbow') {
            grid.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = `rgb(${numberGenerator()}, ${numberGenerator()}, ${numberGenerator()}`;
                ;
            });
        }
    });
}

attachGridListeners();

blackColor.addEventListener('click', () => {
    colorState = 'black';
    attachGridListeners();
})

rainbowColor.addEventListener('click', () => {
    colorState = 'rainbow';
    attachGridListeners();
})

clearButton.addEventListener('click', () => {
    generateGrid();
})

const generateGrid = () => {
    const squared = slider.value * slider.value;
    sliderValue.textContent = slider.value;
    console.log(`Ammount of squares = ${squared}`);

    while (container.childNodes[0]) {
        container.removeChild(container.childNodes[0]);
    }

    for (let gridCount = 1; gridCount <= squared; gridCount++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        container.setAttribute('style', `grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value}, 1fr)`)
        divGrid.setAttribute('id', `${gridCount}`)
        divGrid.setAttribute('style', `width: ${640 / slider.value}px; height: ${640 / slider.value}px`);
        container.appendChild(divGrid);
    }

    attachGridListeners();
}

slider.onchange = generateGrid;