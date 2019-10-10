/*

https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript

You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form:

"Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:

if a result in seconds is ab.xy... it will be given truncated as ab.

if the given string is "" you will return ""

*/

function stat(strg) {
    const arrTimes = strg.replace(/\|/g, ':').split(', ');
    let timesInSeconds = [];
    
    function sortNumber(a, b) {
        return a - b;
    }

    function add(total, num) {
        return total + num;
    }

    arrTimes.forEach(time => {
        const timesSplit = time.split(":")

        const hours = +timesSplit[0] * Math.pow(60, 2);
        const minutes = +timesSplit[1] * 60;
        const seconds = +timesSplit[2];

        timesInSeconds.push(hours + minutes + seconds)
    });

    const lastIndex = timesInSeconds.length - 1;

    timesInSeconds.sort(sortNumber);

    const range = timesInSeconds[lastIndex] - timesInSeconds[0];
    const mean = Math.round((timesInSeconds.reduce(add)) / timesInSeconds.length);

    let median;

    if (timesInSeconds.length % 2 === 0) {
        const lowMedian = timesInSeconds[timesInSeconds.length / 2];
        const highMedian = timesInSeconds[timesInSeconds.length / 2 + 1];

        median = (lowMedian + highMedian) / 2;
    } else {
        median = timesInSeconds[Math.floor(timesInSeconds.length / 2)];
    }
    
    const arrSeconds = [range, mean, median];

    const data = [];
    
    arrSeconds.forEach(item => {
        let hours = Math.floor(item / 3600).toString();
        let minutes = Math.floor(item % 3600 / 60).toString();
        let seconds = Math.floor(item % 3600 % 60).toString();
        
        hours.length === 1 ? hours = hours.padStart(2, '0') : hours;
        minutes.length === 1 ? minutes = minutes.padStart(2, '0') : minutes;
        seconds.length === 1 ? seconds = seconds.padStart(2, '0') : seconds;
        
        data.push(`${hours}|${minutes}|${seconds}`);
    });

    return `Range: ${data[0]} Average: ${data[1]} Median: ${data[2]}`;
}

const foo = stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17, 1|44|44");
// const bar = stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41");
// const baz = stat("hello-world-from-yes");

console.log(foo);
// console.log(bar);
// console.log(baz);
