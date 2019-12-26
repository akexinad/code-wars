// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
// var arraySum = function(array) {
// };

const array = [1, [2, 3], [[4]], 5, [[6, [7]]], [[[[[8]]]]]];

function arraySum(arr, result = 0) {
    const newArr = [...arr];
    const firstItem = newArr[0];

    while (newArr.length > 0) {
        if (Array.isArray(firstItem)) {
            newArr.splice(0, 1, ...firstItem);
            return arraySum(newArr, result);
        }

        result += firstItem;
        newArr.shift();
        return arraySum(newArr, result);
    }

    return result;
}

const bar = arraySum(array);
console.log(bar);
