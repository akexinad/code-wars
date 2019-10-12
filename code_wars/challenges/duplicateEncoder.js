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
    let count = 0;
    let arrParen = [];
    
    while (count < arrWord.length) {
        let match = false;
        
        for (let i = 0; i < arrWord.length; i++) {
            let char = arrWord[i];
            let charCount = 0;
            console.log('the character', char);

            arrWord.forEach(letter => {
                console.log('the letter', letter);
                
                if (letter === char) {
                    charCount ++;
                }
            })

            console.log(charCount);

            if (charCount > 1) {
                match = true;
            }
        }

        if (match === true) {
            arrParen.push(')');
        } else {
            arrParen.push('(');
        }

        count ++;
    }

    return arrParen.join('');
}

const foo = duplicateEncode('ReCede');

console.log(foo);
