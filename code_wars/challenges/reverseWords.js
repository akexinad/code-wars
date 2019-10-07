/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
    if (str === null) {
        return;
    }

    const strArr = str.split(' ').map(word => {
        return word.split('')
                    .reverse()
                    .join('')
    });

    return strArr.join(' ');    
}

const foo = reverseWords("This is an example!")

console.log(foo);




// BEST ANSWER
// ===========

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
}