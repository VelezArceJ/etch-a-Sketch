const container = document.querySelector('#container');
let width = 48;
const squares = [];
const button = document.querySelector('button');
button.addEventListener('click', clearBoard);

function createBoard() {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        container.appendChild(square);
        squares.push(square);
    }
}

createBoard();

squares.forEach( square => square.addEventListener('mouseenter', function() {colorBoard(square)} ));

function colorBoard(e) {
    e.style.backgroundColor = 'black';
}

function clearBoard() {
    squares.forEach( square => square.style.backgroundColor = 'grey')
}