// identifers
const container = document.querySelector('.sketch-container');

// create gridCount variable
let gridCount = 0;

for (gridCount; gridCount <= 255; gridCount++) {
    const divGrid = document.createElement('div');
    divGrid.classList.add('grid');
    divGrid.setAttribute('id', `${gridCount + 1}`)
    divGrid.textContent = `${gridCount + 1}`
    container.appendChild(divGrid);
}

const gridBox = document.querySelectorAll('.grid');

gridBox.forEach((grid) => {
    grid.addEventListener('mouseover', (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = 'red';
    })
})
