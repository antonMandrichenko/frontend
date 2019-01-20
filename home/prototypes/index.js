"use strict";


// function Foo () {
//   this.name = "Andr";
// }
//
//
// console.log(Foo.prototype.constructor.name);
//
// function f() {
//   alert( "привет" );var animal = {
//     eats: true
//   };
//   var rabbit = {
//     jumps: true
//   };
//
//   rabbit.__proto__ = animal;
//
//   console.log(rabbit);
//
//   for (var key in rabbit) {
//     console.log( key + " = " + rabbit[key] ); // выводит и "eats" и "jumps"
//   }
//
//   var data = Object.create(null);
//   data.text = "Привет";
//
//   console.log(data.text); // Привет
//   console.log(data.toString);
//
//   var data2 = Object.create(rabbit, {
//     foo: {
//       writable: true,
//       configurable: true,
//       value: 'hello'
//     }
//   });
//
//   console.log(Object.getPrototypeOf(data2));
//
// }
//
// Function.prototype.defer = function (timer){
//   setTimeout(function () {
//     console.log(this);
//   }, timer)
// }
//
// f.defer(1000);
//
// console.log(Function.prototype);

// function CoffeeMachine(power) {
//   this.power = power;
//   this._waterAmount = 0;
//   this._WATER_HEAT_CAPACITY = 4200;
// }
//
// CoffeeMachine.prototype._getTimeToBoil = function () {
//   return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this.power;
// }
//
// CoffeeMachine.prototype.run = function() {
//   setTimeout(function() {
//     alert( 'Кофе готов!' );
//   }, this._getTimeToBoil());
// };
//
// CoffeeMachine.prototype.setWaterAmount = function(amount) {
//   this._waterAmount = amount;
// };

function Hamster() {
  this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();
