// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// var range = function(x, y) {
// };

function range(x, y, arr = [], initialValue = null) {

    if (!initialValue) initialValue = x;

    while (x < y) {
        if (initialValue === x) x++;
        arr.push(x);
        return range(x + 1, y, arr, initialValue);
    }

    return arr;
}

const foo = range(2, 9);
console.log(foo);
