/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

function duplicateEncode(word){
    const arrWord = word.toLowerCase().split('');
    let result = [];
    
    for (let i = 0; i < arrWord.length; i++) {
        let char = arrWord[i];
        let charCount = 0;

        arrWord.forEach(letter => {
            if (letter === char) {
                charCount ++;
            }
        })

        if (charCount > 1) {
            result.push(')');
        } else {
            result.push('(');
        }
    }

    return result.join('');
}

const foo = duplicateEncode('(( @');

console.log(foo);




// BEST ANSWER
// ===========

function duplicateEncode2(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}

const bar = duplicateEncode2('recede');

console.log(bar);
