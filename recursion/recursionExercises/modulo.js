// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// var modulo = function(x, y) {
// };

function modulo(number, divider) {
    while (number > divider) {
        number -= divider;
        return modulo(number, divider);
    }

    return number;
}

// const foo = modulo(5, 2);
// const foo = modulo(17, 5);
const foo = modulo(22, 6);
console.log(foo);
