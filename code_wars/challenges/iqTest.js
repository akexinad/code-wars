function iqTest(str) {
    
    const arr = str.split(' ').map(x => +x);

    const even = arr.filter(x => x % 2 === 0);
    const odd = arr.filter(x => x % 2 !== 0);

    if (even.length === 1) {
        return arr.indexOf(even[0]) + 1;
    } else {
        return arr.indexOf(odd[0]) + 1;
    }

}

const foo = "2 4 7 8 10";

const bar = iqTest(foo);

console.log(bar);

