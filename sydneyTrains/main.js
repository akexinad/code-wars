/* MTA
 *
 * The program takes the line and stop that a user is getting on at and the line
 * and stop that user is getting off at and prints the journey and the total
 * number of stops for the trip in the console.
 *
 * There are 3 subway lines:
 * - The N line has the following stops: Times Square, 34th, 28th, 23rd,
 *   Union Square, and 8th
 * - The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
 * - The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd,
 *   Union Square, and Astor Place.
 * - All 3 subway lines intersect at Union Square, but there are no other
 *   intersection points. (For example, this means the 28th stop on the N line
 *   is different than the 28th street stop on the 6 line, so you'll have to
 *   differentiate this when you name your stops in the arrays.)
 * - Tell the user the number of stops AND the stops IN ORDER that they will
 *   pass through or change at.
 */

const arr = ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place'];

const subway = {
    n: ['times square', '34th', '28th', '23rd', 'union square', '8th'],
    l: ['28th', '6th', 'union square', '3rd', '1st'],
    six: ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']
}



function msg(msg) {
    return console.log(msg);
}

function warn(msg) {
    return console.log('WARNING!', msg);
}

function lineCheck(msg) {
    const line = prompt(msg).toLowerCase();
    
    if (!subway[line]) {
        return lineCheck('Invalid entry, try again: ');
    }
    
    return line;
}

function stopCheck(msg, line) {
    const stop = prompt(msg).toLowerCase();
    
    if (!~subway[line].indexOf(stop)) {
        return stopCheck(`Error: ${ stop } is not on line ${ line }`, line);
    }
    
    return stop; 
}

function noLineChange(lines, line, origin, destination) {
    const lineTravelled = lines[line];
    const originIndex = lineTravelled.indexOf(origin);
    const destinationIndex = lineTravelled.indexOf(destination);
    
    lineTravelled.splice(originIndex, 1);
    lineTravelled.splice(destinationIndex , 1);
    
    msg(`The following stops are ${ lineTravelled.join(', ') }`);
}

function lineChange(lines, originLine, destinationLine, orginStop, destinationStop) {
    
}

(function () {

    const originLine = lineCheck("Origin Line: ");
    const originStop = stopCheck("Your Origin: ", originLine);
    const destinationLine = lineCheck("Destination Line: ");
    const destinationStop = stopCheck("Your Destination: ", destinationLine);

    if (originLine == destinationLine) {
        return noLineChange(subway, originLine, originStop, destinationStop);
    }

})()