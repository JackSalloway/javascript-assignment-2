// identifers
const container = document.querySelector('.sketch-container');

// create gridCount variable
let gridCount = 0;

for (gridCount; gridCount <= 255; gridCount++) {
    const divGrid = document.createElement('div');
    divGrid.classList.add(`grid-${gridCount}`);
    divGrid.textContent = `${gridCount + 1}`

    container.appendChild(divGrid);
}

