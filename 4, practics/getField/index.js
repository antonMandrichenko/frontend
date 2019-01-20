"use strict";

var test = [
  {"firstName": "test1", "secondName": "test3", "third": "rrrr"},
  {"firstName": "test2", "secondName": "test4"}
];

function getField(arr, key) {

  var arrNew = [];
  arr.forEach(function (item) {
    for ( var keys in item) {
      if (keys === key){
        arrNew.push(item[key]);
      }
    }
  });

  if (+arrNew === 0) {
    return "There are not key '" + key + "' in this array";
  }

  return "Values of key '" + key + "' are: " + arrNew;

}

console.log(getField(test, "secondName"));
console.log(getField(test, "third"));
console.log(getField(test, "fifth"));

