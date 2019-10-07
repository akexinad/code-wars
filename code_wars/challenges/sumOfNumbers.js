const triangle = {
    1: [1],
    2: [3, 5], // => 8
    3: [7, 9, 11], // => 27
    4: [13, 15, 17, 19], // => 64
    5: [21, 23, 25, 27, 29],
    6: [31, 33, 45, 37, 39, 41],
    7: [43, 45, 47, 49, 51, 53, 55]
};

// at line 1 i start at 1.
// at line 2 i add 2 once.
// at line 3 i add 2 twice.

function rowSumOddNumbers(n) {
    let i = 0;
    let startingNumber = 1;
    let sum = 0;
    let sumOfTwos = 0;
    
    while (i < n) {
        startingNumber += (i * 2);
        sumOfTwos += (i * 2);
        i++;
    }

    sum = (startingNumber * n) + sumOfTwos;
    return sum;
}

const foo = rowSumOddNumbers(42);
// const bar = rowSumOddNumbers(4);
console.log(foo);
// console.log(bar);




// BEST ANSWER ///////////////////////////

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}