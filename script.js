// identifers
const container = document.querySelector('.sketch-container');

for (let gridCount = 1; gridCount <= 256; gridCount++) {
    const divGrid = document.createElement('div');
    divGrid.classList.add('grid');
    divGrid.setAttribute('id', `${gridCount}`)
    container.appendChild(divGrid);
}

const gridBox = document.querySelectorAll('.grid');

gridBox.forEach((grid) => {
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    })
})

const slider = document.getElementById('pixel-slider');
const sliderValue = document.getElementById('slider-value');

const generateGrid = () => {
    const squared = slider.value * slider.value;
    sliderValue.textContent = slider.value;
    console.log(squared);

    while (container.childNodes[0]) {
        container.removeChild(container.childNodes[0]);
    }
}

slider.onchange = generateGrid;