"use strict";
// var array = [];
//
// for (var i=0; i<7; i++){
//   function func(iteration) {
//     var it = iteration;
//     return function (){
//       console.log(it);
//     }
//   }
//   array.push(func(i));
// }
//
// array[6]();
//
// console.log(array);
//
// function func1() {
//   console.log("Hi 1");
// }
//
// function func2() {
//   console.log("Hi 2");
// }
//
// function func3() {
//   console.log("Hi 3");
// }
//
// setTimeout(function () {
//   console.log("Hi steck");
// }, 0);
//
// func1();
//
// setTimeout(function () {
//   console.log("Hi steck");
// }, 0);
//
// func2();
//
// setTimeout(function () {
//   console.log("Hi steck");
// }, 0);
//
// func3();

// for (var i=0; i<6; i++){
//   setTimeout(function () {
//     console.log ("iteration N: ", i);
//   }, 1000);
// }

// var int = setInterval(function () {
//   console.log("Hi");
// }, 1000);
//
// setTimeout(function () {
//   clearInterval(int);
// }, 5000);

// var obj = {
//   name: "Anton",
//   showName: function () {
//     console.log(this.name);
//   }
// };
// // obj.showName();
// console.log (obj);

// var showCustomName = obj.showName();
//
// showCustomName();


// var user = {};
//
// Object.defineProperty(user, "name",)

// function Animal(name) {
//   this.name = name;
// };
//
// var Rabbit = new Animal ("Rabbit");
// console.log (Rabbit);
//
// function Car(name, type) {
//   this.name = name;
//   this.type = type;
//   this.showType = function () {
//     console.log("Type car is: ", this.type);
//   };
// }
//
// var diesel = new Car("Mens", "Diesel");
// var electro = new Car ("Women", "Electro");
//
// console.log (diesel, electro);
//
// var age = 18;
// if (age === 18) {
//   alert("You are told")
// }
//
// var number = 234;
//
// number.toFixed(2);
// number.toExponential();
// number.toPrecision(3);
// number.toString();
//
// Math.sqrt(81);
// Math.pow(5,4);
// Math.floor();
// Math.ceil();
// Math.round();
// Math.PI;

var str = "fgfh hghg";
console.log(str.length);

