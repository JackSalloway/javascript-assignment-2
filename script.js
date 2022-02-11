// identifers
const container = document.querySelector('.sketch-container');
const gridBox = document.querySelectorAll('.grid');

// create gridCount variable
let gridCount = 0;

for (gridCount; gridCount <= 255; gridCount++) {
    const divGrid = document.createElement('div');
    divGrid.classList.add('grid');
    divGrid.setAttribute('id', `${gridCount + 1}`)
    divGrid.textContent = `${gridCount + 1}`

    container.appendChild(divGrid);
}

