"use strict";

var input = [1,2,3,4,5,6,7,8,14,13,21,77, 88, 99,101];

function isOdd(x) {
  return x%2 === 1;
}

function filter(arr, func) {
  var arrNew = [];
  arr.forEach(function (item) {
    if(func(item)){
      arrNew.push(item);
    }
  });
  return arrNew;
}

console.log(filter(input, isOdd));