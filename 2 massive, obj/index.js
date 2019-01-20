"use strict";
// console.log(333);
//
// // while (){
// //
// // }
//
// var k = 0;
//
// while (k<5){
//   console.log(k);
//   k++;
// };
//
// for (var i=0; i<8; i++){
//   console.log (i);
// };
//
// var j=0;
//
// do {
//   console.log(j);
//   j++;
// } while (j<5);

// function sum(a,b) {
//   console.log(a+b);
// }
//
// sum(1,2 massive, obj);
//
// (function f(a) {
//   console.log(a)
// })("hi");

// function circle() {
//   for (var i=5; i>0; i--) {
//     console.log(i);
//   }
// }
//
// circle();
//
// function func() {
//   return func();
// }

// function factorial(x) {
//   if (x===1){
//     return x;
//   } else {
//     return x*factorial(x-1);
//   }
// }
//
// var fact = factorial(5);
//
// console.log(fact);

// 1 call: factorial(5) 5*24=120
// 5*factorial(4)
// 2 massive, obj call: factorial(4) 4*6=24
// 4*factorial(3)
// 3 call: factorial(3) 3*2 massive, obj=6
// 3*factorial(2 massive, obj)
// 4 call: factorial(2 massive, obj) 2 massive, obj*1=2 massive, obj
// 2 massive, obj*factorial(1)
// 5 call: factorial(1) -> 1

// function pow(x, n) {
//   if (x===1) {
//     return x;
//   } else {
//     return x*pow(x,n-1);
//   }
// }
//
// var result = pow(2 massive, obj,4);
//
// console.log (result);

//работает так, как функция сверху

// var arr = ["hello", 1,3,4, {}, true];
//
// console.log(arr);
//
// arr.forEach(function (element, i) {
//   console.log (element, i)
// })
//
// var array = arr.map(function (el,i) {
//   if (typeof (el)==="boolean" && el){
//     return el;
//   }
// });
//
// console.log ("arr ", array);
//
// var res = arr.every (function (el) {
//   if (el) {
//     return true;
//   }
// })
//
// console.log(res);

// var obj = {
//   name: "Anton",
//   secondName: "Mandr",
//   sayHello: function () {
//     console.log("Hello");
//   }
// };
//
// console.log (obj.name);
// console.log(obj["secondName"]);
//
// for (var key in obj) {
//   console.log(obj[key]);
// }
//
// obj.sayHello();

// var array = [1,2 massive, obj,3, true, null, undefined, {}];
//
// for (var i=0; i<array.length; i++){
//   console.log(array[i]);
// }
//
//
// var timerId = setInterval(function() {
//   console.log(moment().format('LLL'));
// }, 1000);

// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
//   console.log(arr[i].length);
// }

// var arrNew = arr.map(function (word) {
//   return word.length;
// })
//
// console.log("ffff", arrNew ); // 4,5,2 massive, obj,5

// var arr2 = [1,2 massive, obj,3,4,5];
// function arrSum (arr) {
//   var arrNew = [];
//   var totalArr = arr.reduce(function (previousValue, currentItem) {
//     arrNew.push(previousValue);
//     return previousValue+currentItem;
//   });
//   arrNew.push (totalArr);
//   return arrNew;
// }
//
// var arr3 = arrSum(arr2);
//
// console.log(arr3);

//добавление класса в объект

// var obj = {
//   className: 'open mymenu'
// }
//
// addClass(obj, "cls")
//
// function addClass(obj, cls) {
//   var arr = obj.className.split(" ");
//   console.log(arr);
//   if (arr.indexOf(cls) !== -1) {
//     return console.log ("not");
//   } else {
//     arr.push (cls);
//     obj.className = arr.join(" ");
// }
// }
//
// addClass(obj, "menu");
//
// console.log(obj);


// function camelize(str){
//   str = str.split("-");
//   str.forEach(function (value, i) {
//     if (i!==0){
//       str[i] = value.charAt(0).toUpperCase() + value.slice(1);
//     }
//   });
//   return str.join("");
// }
//
// console.log (camelize("rex-opt-rai-tre-fff"));


// var obj = {
//   className: 'menu menu open menu'
// };
//
// function removeClass(obj, cls) {
//   var arr = obj.className.split(" ");
//
//
//   for (var i=0; i<arr.length; i++){
//     if (cls === arr[i]) {
//       arr.splice(i,1);
//       i--;
//     }
//   }
//
//   return obj.className = arr.join(" ");
//
// }
// removeClass(obj, "mymen");
// console.log (obj);


// arr = [5, 3, 8, 1, 2, 22, 55];
//
// filterRangeInPlace(arr, 1, 4);
//
// function filterRangeInPlace(array, minValue, maxValue) {
//   for(var i=0; i<array.length; i++){
//     if(maxValue < array[i] || array[i]< minValue){
//       array.splice(i,1);
//       i--;
//     }
//   }
// }
// console.log(arr);

var arr = [5, 3, 8, 1, 2, -5, 22, 55];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

arr.sort(compareNumeric);
console.log (arr);
arr.reverse();
console.log (arr);
