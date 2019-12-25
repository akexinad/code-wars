// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
// var sumBelow = function(n) {
// };

function sumBelow(num, result = 0) {
    while (num > 0) {
        result += num;
        return sumBelow(num - 1, result);
    }

    return result;
}

const foo = sumBelow(7);
console.log(foo);
