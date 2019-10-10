/*

https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

*/
class Fighter {
    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = () => this.name;
    }
}

const fighter1 = new Fighter("Harald", 20, 5);
const fighter2 = new Fighter("Harry", 5, 4);

function declareWinner(fighter1, fighter2, firstAttacker) {
    return 'ok';
}

const foo = declareWinner(fighter1, fighter2, fighter1.toString());

console.log(foo);