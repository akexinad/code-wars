/*

https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4.

Then the whole pattern repeats.

Hence the following method: Multiply the right most digit of the number with the left most number in the sequence shown above, the second right most digit to the second left most digit of the number in the sequence. The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

...........................................................................

Example: What is the remainder when 1234567 is divided by 13?

7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

...........................................................................

From now on the sequence is stationary and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13: 9

Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48

Test.assertEquals(thirt(8529), 79)
Test.assertEquals(thirt(85299258), 31)
Test.assertEquals(thirt(5634), 57)
Test.assertEquals(thirt(1111111111), 71)
Test.assertEquals(thirt(987654321), 30)

*/

function thirt(n) {
    const INTEGERS = [1, 10, 9, 12, 3, 4];
    let numFromArg = n;
    let startingSum = 0;
    let newSum = 0;
    
    while (true) {
        let numStrReversed = numFromArg.toString().split('').reverse();

        for (let i = 0; i < numStrReversed.length; i++) {
            
            const nInt = Number(numStrReversed[i]);
    
            if (INTEGERS[i] === undefined) {
                newSum += nInt * INTEGERS[i - INTEGERS.length];
            } else {
                newSum += nInt * INTEGERS[i];
            }
        }
    
        if (newSum === startingSum) {
            return newSum;
        } else {
            startingSum = newSum;
            numFromArg = newSum;
            newSum = 0; 
        }
    }
}

const foo = thirt(1234567);
const bar = thirt(1111111111);
const baz = thirt(987654321);

console.log(foo);
console.log(bar);
console.log(baz);



// BEST ANSWER
// ===========

function thirt(n) {
    const nums = [1,10,9,12,3,4]
    var sum = (''+n).split('').reverse().reduce((sum,v,i) => sum + v * nums[i%nums.length], 0)
    return sum === n ? n : thirt(sum)
  }