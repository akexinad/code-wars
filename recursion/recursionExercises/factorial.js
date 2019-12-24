// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
// var factorial = function(n) {
// };

function factorial(num, result = 1) {
    while (num > 0) {
        result *= num;
        return factorial(num - 1, result);
    }
    return result;
}

const foo = factorial(6);
console.log(foo);
