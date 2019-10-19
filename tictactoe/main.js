const board = [];
const x = 'X';
const o = 'O';
let currentTurn = x;
const xChoices = [];
const oChoices = [];

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

console.log(winningCombinations);

const elements = document.getElementsByTagName('td')


for (let i = 0; i < elements.length; i++) {

    const el = elements[i];

    el.addEventListener('click', () => {

        play(el.id);

        if (currentTurn === x) {
            currentTurn = o;
        } else {
            currentTurn = x;
        }
    });
}

function play(id) {
    
    let status;

    console.log(board[9]);
    
    
    if (board[id] !== undefined) {
        console.log(`Box ${id} Is Already Taken!`);
        return;
    }

    board[id] = currentTurn;
    
    function sortIds(a, b) {
        return a - b;
    }
    
    if (currentTurn === x) {
        xChoices.push(Number(id))
        xChoices.sort(sortIds);
        status = checkStatus(xChoices);
    } else {
        oChoices.push(Number(id))
        oChoices.sort(sortIds);
        status = checkStatus(oChoices);
    }

    
}

function checkStatus(choices) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        
        if (choices[0] === combination[0] &&
            choices[1] === combination[1] &&
            choices[2] === combination[2]
        ) {
            console.log(`${ currentTurn } IS THE WINNER!`);
            return true;
        } else if (board.length === 9) {
            console.log('DRAW');
            return false;
        }
    }
    

    return 'no winner chicken dinner.';
}