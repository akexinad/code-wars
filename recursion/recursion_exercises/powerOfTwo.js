// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// var powerOfTwo = function(n) {};

function powerOfTwo(num, check = 2) {
    if (num === 1) return true;

    while (check < num) {
        check **= 2;
        if (check === num) return true;
        return powerOfTwo(num, check);
    }

    return false;
}

// const foo = powerOfTwo(1);
// const foo = powerOfTwo(2);
// const foo = powerOfTwo(4);
// const foo = powerOfTwo(16);
// const foo = powerOfTwo(10);
// const foo = powerOfTwo(34353);
// const foo = powerOfTwo(1234);
// const foo = powerOfTwo(84673);
// const foo = powerOfTwo(256);
// const foo = powerOfTwo(65536);
const foo = powerOfTwo(4294967296);
console.log(foo);
