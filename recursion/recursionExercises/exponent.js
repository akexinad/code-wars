// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
// var exponent = function(base, exp) {
// };

function exponent(base, exp, result = 1) {
    while (exp > 0) {
        result *= base;
        return exponent(base, exp - 1, result);
    }

    return result;
}

const foo = exponent(2, 4);
console.log(foo);
