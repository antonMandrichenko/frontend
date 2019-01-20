"use strict";

var test = {
  a: 1,
  b: 2,
  c: 3,
  d: 5
};

var f = function (a, b, c) {

};

var arr = [
  1,2,3,4,,,,4,4,3,,,,3,3,3
];

function getCount(obj) {

  var count = 0;

  if (obj === null) {
    console.log ("this is null");
    return;
  }

  if (obj.length && typeof (obj) === "object"){
    obj.forEach(function (item) {
      if (item !== undefined){
        count++;
      }
    });
  }

  if (typeof (obj) === "function"){
    count = obj.length;
  }

  if (typeof (obj) === "object" && !obj.length){
    for (var key in obj) {
      count++;
    }
  }

  if (typeof (obj) !== "object" && typeof (obj) !== "function" ) {
    return console.log("Enter object, array or function");
  }

  return "count: " + count;

}

console.log(getCount(arr));
console.log(getCount(f));
console.log(getCount(test));
console.log(getCount("ttttt"));
console.log(getCount([1,2,3,44,,,,4,4,4]));

