// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
// var arraySum = function(array) {
// };

function arraySum(arr, result = 0) {
    const newArr = [...arr];

    // while (arr.length > 0) {
        if (Array.isArray(newArr[0])) {
            newArr.splice(0, 1, ...newArr[0])
        }
    // }

    // const arrFlattened = [];
}

const foo = arraySum([1, [2, 3], [[4]], 5]);
// console.log(foo);


function flattenArray(arr, newArr) {
    while (arr.length > 0) {
        if (Array.isArray(arr[0])) {
            newArr.push(...arr[0]);
            arr.splice(0, 1);
            return flattenArray(arr, newArr);
        }
    }
}

const bar = flattenArray([1, [2, 3], [[4]], 5]);
console.log(bar);
