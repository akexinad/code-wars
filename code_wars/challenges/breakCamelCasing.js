/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'

*/

function solution(string) {
  const arrStr = string.split("");
  let result = [];

  arrStr.forEach(char => {
    if (char === char.toUpperCase()) {
      result.push(" ");
    }

    result.push(char);
  });

  return result.join("");
}

const foo = solution("camelCasing");

console.log(foo);




// BEST ANSWER
// ===========

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1')); 
}