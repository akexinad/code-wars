/* 

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString (strng) {
    const arr = strng.split('');
    const charArr =arr.filter(char => !Number.isInteger(+char)); 
    const intArr = arr.filter(char => Number.isInteger(+char));
    const letters = charArr.join('');
    let numbers = intArr.join('');
    let int;

    if (numbers[0] === '0') {
        const newNum = Number(numbers) + 1;
        const numLength = numbers.length;
        const zerosToAdd = numLength - newNum.toString().length;
        const padding = '0'.repeat(zerosToAdd);

        int = padding + newNum.toString();

        return letters + int;
    } else {
        numbers = Number(numbers) + 1;
        return letters + numbers;
    }
}

const foo = incrementString("foo123");
const bar = incrementString("foobar24");
const baz = incrementString("foo0043");
const bur = incrementString("foo10");
const buz = incrementString("foo100");

console.log(foo);
console.log(bar);
console.log(baz);
console.log(bur);
console.log(buz);



// BEST ANSWER
// ===========


function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }