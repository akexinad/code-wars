// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
// var sum = function(array) {
// };

function sum(arr, result = 0) {
    const newArr = [...arr];

    while (newArr.length > 0) {
        result += newArr[0];
        newArr.shift();
        return sum(newArr, result);
    }
    return result;
}

const foo = sum([1, 2, 3, 4, 5, 6]);
console.log(foo);
