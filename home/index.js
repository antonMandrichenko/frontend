//"use strict";

// var obj = {a: 1};
// var copy = Object.assign({}, obj);
//
// console.log(copy);
// obj.a = 120;
// console.log(copy);
//
// var obj1 = {
//   a: 1,
//   b:{c:0},
//   d:{f:{l:2}}
// };
// var obj2 = Object.assign({}, obj1);
// obj2.b.c = 3;
// obj1.b.c = 5;
// console.log(obj2);
//
//
// let obj3 = JSON.parse(JSON.stringify(obj1));
//
//
// obj3.b.c = 7;
// obj3.d.f.l = 10;
// console.log(obj3);
// console.log(obj1);

// var v1 = 'abc';
// var v2 = true;
// var v3 = 10;
// var v4 = Symbol('foo');
//
// var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
//
// console.log(obj);  // виводить { "0": "a", "1": "b", "2": "c" }

// var obj = {
//   a: 1,
//   b: 2,
//   c:{e:3}
// }
//
// console.log(Object.keys(obj));

// var a = [1,2,3,[7,6,[10,11]],5];
//
// var b = a.slice(0,3);
// var c = a.slice(0);
// c[0] = 100;
// a[0] = 222;
// //b = b.concat([4,5,[6,7]]);
// console.log(a, b, c);

// var userOne = {
//   email: "aaaa@ddddd.com",
//   name: "Anton",
//   login(){
//     console.log(this.email, "has logged in");
//   },
//   logout(){
//     console.log(this.email, "has logged out");
//   }
// };
//
// console.log(userOne);

// function makeFunc(x) {
//   return function () {
//     return x;
//   };
// };
//
// var a = [makeFunc(0),makeFunc(3), makeFunc(5)];
//
// console.log(a[0]());
// console.log(a[1]());
// console.log(a[2]());
// alert(a[3]());

// var uniqueID = (function () {
//     var id=0;
//     return function () {
//       return id++;
//     };
// })();

// var uniqueID = function (x) {
//   var id=x;
//   return function () {
//     return id++;
//   };
// };
//
// for (var i = 0; i < 8; i++){
//   console.log(uniqueID(1)());
// }

let i = 1;

const f = ()=>{
  console.log(i);
}
