// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// var powerOfTwo = function(n) {};

function powerOfTwo(num, result = 1) {

    console.log(num);
    console.log(result);

    if (num === result) {
        return true;
    }

    if (result > num) return false;

    result = num ** 2;

    return powerOfTwo(num, result);
}

const foo = powerOfTwo(4);
console.log(foo);
