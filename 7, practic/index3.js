"use strict";

function add(a, b) {
  return a + b;
}

var add5 = partial(add, 5);

console.log(add5(2)); //6

console.log(add5(8)); //13

function partial(func, number) {
  return func.bind(null, number);
}

function testFunc(a, b, c) {
  return "a= " + a + ", b= " + b + ", c= " + c;
}

var test1_3 = partialDeep (testFunc,  4, 21, undefined);

console.log (test1_3(23451)); // a=1, b=5, c=3

function partialDeep(func, a, b, c) {
  var newArg = Array.prototype.slice.call(arguments, 1);
  return function (number) {
    newArg.forEach(function (value, i) {
      if (value === undefined) {
        newArg[i] = number;
      }
    });
    return func.apply(func, newArg);
  }
}
