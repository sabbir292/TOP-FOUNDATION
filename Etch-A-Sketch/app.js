const grid = prompt('choose the grid size, maximum 100x100');


let isRandom = false;
let eraser = false;

// console.log(randomColor)
const gridContainer = document.querySelector('.container')
gridContainer.style.display = `grid`;
gridContainer.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;

for (let i = 0; i < grid; i++) {

    for (let j = 0; j < grid; j++) {
        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')
        gridContainer.appendChild(gridItem)
    }
}

const gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {

        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        const alpha = Math.random()

        const randomColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
        if (!isRandom && !eraser) {
            item.style.background = 'black'
        }
        else if (isRandom) {
            item.style.background = randomColor
        }
        else if(eraser){
            item.style.background = 'white'
        }
    })
})