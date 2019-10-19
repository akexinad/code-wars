const selections = [];
const playerX = 'x';
const playerO = 'o';
let currentTurn = playerX;
const choices = {
    x: [],
    o: []
}

const elements = document.getElementsByTagName('td')

const winningCombinations = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function sortIds(a, b) {
    return a - b;
}

function init() {
    
    for (let i = 0; i < elements.length; i++) {
    
        const el = elements[i];
    
        el.addEventListener('click', () => {
            play(el);
        });
    }
}

init()

function play(el) {
    const id = Number(el.id);
    const boxTaken = isBoxTaken(id);

    if (!checkStatus()) {
        return;
    }
    
    if (boxTaken) {
        console.log(`Box ${id} Is Already Taken!`);
        return;
    }

    choices[currentTurn].push(id);
    choices[currentTurn].sort(sortIds);
    selections[id] = currentTurn;

    fillBox(id);
    
    if (!checkStatus()) {
        return;
    }
    
    if (currentTurn === playerX) {
        currentTurn = playerO;
    } else {
        currentTurn = playerX;
    }
}

function checkStatus() {


    if (isDraw()) {
        return false;
    } else if (isWinner()) {
        return false;
    }
    
    return true;
}

function isBoxTaken(id) {
    if (selections[id] !== undefined) {
        return true;
    }    
}

function isWinner() {

    const currentChoices = choices[currentTurn];
    
    for (let i = 0; i < winningCombinations.length; i++) {
        const [x, y, z] = winningCombinations[i];

        if (currentChoices.includes(x) &&
            currentChoices.includes(y) &&
            currentChoices.includes(z)
        ) {
            console.log('WINNER');
            return true;
        }
    }

    return false;
}

function isDraw() {

    const drawBoard = [];

    selections.forEach(selection => {
        drawBoard.push(selection);
    })

    if (drawBoard.length === 9) {
        console.log('DRAW!');
        return true;
    }

    return false;
}

function fillBox(id) {
    const element = document.getElementById(id);

    element.innerHTML = currentTurn.toUpperCase();
}