"use strict";

function createCounter(start, step) {
  var count = start-step;
  return function(){
    return count += step;
  }
}

var counter = createCounter(10, 3);
console.log(counter());
console.log(counter());

var counter2 = createCounter(14, 1);
console.log(counter2());
console.log(counter2());

function pick(func, count) {
  var arr = [];
  for (var i=0; i<count; i++) {
    arr.push(func());
  }
  return arr;
}

var counter3 = createCounter(10, 3);
console.log(pick(counter3, 10));