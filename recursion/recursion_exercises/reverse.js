// 9. Write a function that reverses a string.
// var reverse = function(string) {
// };

function reverse(str, reversed = []) {
    while (str.length > 0) {
        const strArr = str.split("");
        reversed.push(strArr.pop());
        return reverse(strArr.join(""), reversed);
    }

    return reversed.join("");
}

const foo = reverse("qwertyuiop");
// const foo = reverse("poiuytrewq");
console.log(foo);

// console.log(bar[3]);
