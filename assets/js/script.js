const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn
// add event listener on each cell only once
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true})
})

function handleClick(event){
    const cell = event.target
    const currentClass = circleTurn? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    // Check for win
    // Check for draw
    // Switch Turns
    swapTurns()
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}