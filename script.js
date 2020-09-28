const container = document.querySelector('#container');
container.style.width = '480px';
container.style.height = '480px';
let width = parseInt(prompt("Original board width is 48. New width?")) || 16;
let squares = [];
const button = document.querySelector('#shake');
button.addEventListener('click', clearBoard);
const reset = document.querySelector('#resize')
reset.addEventListener('click', resizeBoard)

function createBoard() {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        square.setAttribute('class', 'square');
        square.style.width = (480 / width) + "px";
        square.style.height = (480 / width) + "px";
        container.appendChild(square);
        squares.push(square);
    }
}

createBoard();

squares.forEach( square => square.addEventListener('mouseenter', function() {colorBoard(square)} ));

function colorBoard(e) {
    e.style.backgroundColor = 'black';
}

function resizeBoard() {
    window.location.reload();
};

function clearBoard() {
    console.log(squares[0]);
    squares.forEach( square => square.style.backgroundColor = 'grey');
}