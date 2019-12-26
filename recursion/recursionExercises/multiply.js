// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
// var multiply = function(x, y) {
// };

function multiply(x, y, initialValue = null) {
    if (!initialValue) initialValue = x;

    while (y > 1) {
        x += initialValue;
        return multiply(x, y - 1, initialValue);
    }

    return x;
}

const foo = multiply(8, 3);
// const foo = multiply(4, 4);
// const foo = multiply(100, 3);
console.log(foo);
