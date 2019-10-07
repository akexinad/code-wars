/*

Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called which verifies that a coupon code is valid, the coupon is not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    
    const dateFormatter = new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'    
    });
    
    // const currentDateFormatted = dateFormatter.format(new Date(currentDate));
    // const currentDateFormatted = new Date(currentDate);
    // const expirationDateFormatted = dateFormatter.format(new Date(expirationDate));
    // const expirationDateFormatted = new Date(expirationDate);
    const currentDateFormatted = Date.parse(currentDate);
    const expirationDateFormatted = Date.parse(expirationDate);
    

    console.log(currentDateFormatted);
    console.log(expirationDateFormatted);
        
    if (enteredCode !== correctCode) {
        return false;
    }

    if (currentDateFormatted > expirationDateFormatted) {
        return false;
    }
    
    return true;
}

const foob = checkCoupon('123','123','September 5, 2014','October 1, 2014');
const foo = checkCoupon('123','123','Nov 5, 2014','October 1, 2014');
const bar = checkCoupon("123", "123", "July 9, 2015", "July 2, 2015");
const barre = checkCoupon("123", '123', "january 1, 2015", "July 2, 2015");
const baz = checkCoupon("123", "123", "yes", "July 2, 2015");

console.log(foob);
// console.log(foo);
// console.log(bar);
// console.log(barre);
// console.log(baz);


// BEST ANSWER
// ===========

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}