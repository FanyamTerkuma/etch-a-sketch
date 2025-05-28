const container = document.querySelector('.container');
//create grid items

container.addEventListener('mouseover', e => {
    if (e.target.classList.contains('grid-item')) {
        e.target.classList.add('grid-item-touched');
    }
});

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    let grdDimension = 16;
    let customGridDimension = prompt('Enter custom dimension for new layout');
    if (customGridDimension != null) {
        gridDimension = customGridDimension;
        for (let i = 0; i < gridDimension * gridDimension; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.flexBasis = `calc((100%/${gridDimension}))`;
            container?.appendChild(gridItem);
        }
    }
});
