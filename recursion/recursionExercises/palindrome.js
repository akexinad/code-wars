// 10. Write a function that determines if a string is a palindrome.
// var palindrome = function(string) {
// };

function palindrome(str, strReversed = [], original = null) {
    if (!original) original = str;

    const strArray = str.split("");

    while (strArray.length > 0) {
        strReversed.push(strArray.pop());
        return palindrome(strArray.join(""), strReversed, original);
    }

    return strReversed.join("") === original ? true : false;
}

const foo = palindrome("radar");
// const foo = palindrome("level");
// const foo = palindrome("kayak");
// const foo = palindrome("qwertyuiop");
console.log(foo);
