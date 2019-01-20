"use strict";

// var  animal = {
//   name: 'animal'
// }
//
// var rabbit = {
//   jump: true
// }
//
// console.log('before proto', rabbit.name);
//
// rabbit.__proto__ = animal;
//
// console.log('after proto', rabbit.name);

// var car = {
//   name: "car"
// };
//
// var electric = {
//   electric: true
// };
//
// var diesel = {
//   diesel: true
// };
//
// electric.__proto__ = car;
// diesel.__proto__ = car;
//
//
// var human = {
//   name: 'test'
// };
//
// var student = {
//   name: 'test2'
// }
//
// student.__proto__= human;
//
// delete student.name;
//
// console.log(student.name);
//
// delete human.name;
//
// console.log(student.name);
//
// function Arr(array){
//   this.array = array;
// }
//
// Arr.prototype.forEach = function () {
//   for (var i = 0; i < this.array; i++) {
//     console.log(this.array[i]);
//   }
// }
//
// var arr1 = new Arr([1, 23, 43]);
//
// console.dir(arr1);

// arr1.forEach();

// function Human(name) {
//   this.name = name;
// }
//
// Human.prototype.sayName = function () {
//   console.log(this.name);
// }
//
// var andrii = new Human('Andrii');
//
// var anton = new Human('Anton');
//
// console.dir(andrii);
//
// console.dir(anton);

// var date = new Date();
// console.log(typeof date);

function Figure (a) {
  this.firstSide = a;
}

function Squere(a) {
  Figure.apply(this, arguments);
}

function Rectangle(a, b) {
  Figure.apply(this, arguments);
  this.secondSide = b;
}

function Triangle(a, b) {
  Rectangle.apply(this, arguments);

}

Squere.prototype.getArea = function () {
  console.log(this.firstSide * this.firstSide);
}

Rectangle.prototype.getArea = function () {
  console.log(this.firstSide * this.secondSide);
}

Triangle.prototype.getArea = function () {
  console.log(0.5 * this.firstSide * this.secondSide);
}

var squere = new Squere(10);
console.dir(squere);
console.dir(squere.getArea());
var rectangle = new Rectangle(10, 15);
console.dir(rectangle);


