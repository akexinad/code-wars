/*

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

function tickets(peopleInLine){
    const till = {
        25: 0,
        50: 0,
        100: 0,
        total: function() {
            return (this[25] * 25) + (this[50] * 50) + (this[100] * 100);
        }
    };
    
    let canGiveChange = [];

    peopleInLine.forEach(amount => {
        if (amount === 25) {
            till[25]++;
            canGiveChange.push(true);
        } else if (amount === 50 && till[25] > 0) {
            till[50]++;
            till[25]--;
            canGiveChange.push(true);
        } else if (amount === 100 && till[50] > 0 && till[25] > 0) {
            till[100]++;
            till[50]--;
            till[25]--;
            canGiveChange.push(true);
        } else if (amount === 100 && till[25] > 2) {
            till[100]++;
            till[25] -= 3;
            canGiveChange.push(true); 
        } else {
            canGiveChange.push(false);
        }
    });

    if (canGiveChange.indexOf(false) === -1) {
        return 'YES';
    } else {
        return 'NO';
    }
}

const foo = tickets([25, 25, 50, 50]);
const bar = tickets([25, 100]);
// const baz = tickets([26]);
const bur = tickets([25,25,25,100,25,25,25,100,25,25,50,100,25,25,25,100]);

console.log(foo);
console.log(bar);
// console.log(baz);
console.log(bur);



// BEST ANSWER
// ===========

function Clerk(name) {
    this.name = name;
    
    this.money = {
      25 : 0,
      50 : 0,
      100: 0 
    };
    
    this.sell = function(element, index, array) {
      this.money[element]++;
  
      switch (element) {
        case 25:
          return true;
        case 50:
          this.money[25]--;
          break;
        case 100:
          this.money[50] ? this.money[50]-- : this.money[25] -= 2;
          this.money[25]--;
          break;
      }
      return this.money[25] >= 0;
    };
  }
  
  function tickets(peopleInLine){
    var vasya = new Clerk("Vasya");
    return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}