const selections = [];
const x = 'x';
const o = 'o';
let currentTurn = x;
const choices = {
    x: [],
    o: []
}

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

function init() {
    const elements = document.getElementsByTagName('td')
    
    for (let i = 0; i < elements.length; i++) {
    
        const el = elements[i];
    
        el.addEventListener('click', () => {
            play(el);
        });
    }
}

init()

function play(el) {

    tagBox(el);

    const id = Number(el.id);

    isBoxTaken(id);
    
    function sortIds(a, b) {
        return a - b;
    }
    
    choices[currentTurn].push(id);

    checkStatus();
}

function isBoxTaken(id) {
    if (selections[id] !== undefined) {
        console.log(`Box ${id} Is Already Taken!`);
        return;
    }

    selections[id] = currentTurn;
}

function checkStatus() {

    const drawStatus = isDraw();
    let winner = isWinner();

    if (winner) {
        return;
    } else if (drawStatus) {
        return;
    }

    if (currentTurn === x) {
        currentTurn = o;
    } else {
        currentTurn = x;
    }
}

function isWinner() {

    const winningCombination = [];
    
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];

        for (let i = 0; i < combination.length; i++) {

            if (choices[currentTurn].includes(combination[i])) {
                winningCombination.push(combination[i]);
            }
        }

        console.log(winningCombination);
    }
}

function isDraw() {

    const drawBoard = [];

    selections.forEach(selection => {
        drawBoard.push(selection);
    })

    if (drawBoard.length > 8) {
        return true;
    }

    return false;
}

function tagBox(el) {
    el.innerHTML = currentTurn.toLocaleUpperCase();
}