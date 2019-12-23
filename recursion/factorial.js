// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
// var factorial = function(n) {
// };

function factorial(result, num) {
    let result;
    
    while (num > 0) {
        result = num * (num - 1);
        
        if (num === 1) console.log(result);
        
        return factorial(result, num - 2);
    }
}

factorial(5);