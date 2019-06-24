// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {

    sArray = s.split(" ");
    let word = 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii';

    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i].length < word.length) {
            word = sArray[i];
        } else {
            word = word;
        }
    }

    return word.length;
}

const stringOfWords = "hello my name is z short for zlkhewbvclevgflksqbvdleqrbvflvlcgewyfr";
findShort(stringOfWords);


// BEST SOLUTION

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}