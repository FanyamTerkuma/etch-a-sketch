const container = document.querySelector('.container');

container.addEventListener('mouseover', e => {
    if (e.target.classList.contains('grid-item')) {
        e.target.classList.add('grid-item-touched');
    }
});
//create default grid items
let gridDimension = 16;
for (let i = 0; i < gridDimension * gridDimension; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.flexBasis = `calc((100%/${gridDimension}))`;
    container?.appendChild(gridItem);
}

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    let customGridDimension = prompt('Enter custom dimension for new layout');
    if (customGridDimension != null) {
        //remove all children of container div
        if (container.hasChildNodes()) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }

        //display grid with new dimension
        for (let i = 0; i < customGridDimension * customGridDimension; i++) {
            const newGridItem = document.createElement('div');
            newGridItem.classList.add('grid-item');
            newGridItem.style.flexBasis = `calc((100%/${customGridDimension}))`;
            container?.appendChild(newGridItem);
        }
    }
});
