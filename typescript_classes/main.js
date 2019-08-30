"use strict";
var Schema = /** @class */ (function () {
    function Schema(name, username, age) {
        this.username = username;
        this.name = name;
        this.age = age;
    }
    return Schema;
}());
var model = new Schema('Fellini', 'Fede', 20);
console.log(model.name);
console.log(model.username);
console.log(model.age);
/*

TS CLASS PROPERTIES

PUBILC
    - Available to whoever wants to access it.
    - The default i public.

PRIVATE
    - You can only access it fron this class or whatever object you build from this class.
    - A major addition in typescript, ES6 does not have this functionality.
    
PROTECTED
    - Like private, but also available from objects that inherit from the parent class.

*/ 
