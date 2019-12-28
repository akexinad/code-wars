// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
// var divide = function(x, y) {
// };

function divide(number, divider, result = 0, remainder = 0) {
    while (number >= divider) {
        number -= divider;
        result++;
        return divide(number, divider, result);
    }

    if (number < divider) remainder = number;

    return remainder
        ? `result is ${result} with remainder ${remainder}.`
        : `result is ${result}.`;
}

const foo = divide(19, 5);
console.log(foo);
