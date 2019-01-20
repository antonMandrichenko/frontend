"use strict";

function square (x){
  return x*x;
}

function map(func, arr) {
  var arrNew = [];
  arr.forEach(function (item) {
    arrNew.push(func(item));
  });
  return arrNew;
}

console.log(map(square, [1,2,3,4,5,20]));
console.log(map(square, []));
