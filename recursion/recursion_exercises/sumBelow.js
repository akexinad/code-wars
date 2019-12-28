// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
// var sumBelow = function(n) {
// };

function sumBelow(num, result = 0, initalValue = null) {
    if (!initalValue) initalValue = num;

    while (num > 0) {
        result += num;
        return sumBelow(num - 1, result, initalValue);
    }

    return result - initalValue;
}

const foo = sumBelow(10);
console.log(foo);
