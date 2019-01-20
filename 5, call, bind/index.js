"use strict";
// var person = {
//   name: "Oleg",
//   sayHello: function () {
//     console.log("Hello" + this.name);
//   },
//   addSecondNameAndAge: function (secondName, age) {
//     console.log (this.name, arguments);
//   }
//
// };
//
// var person2 = {
//   name: "Pasha"
// };
//
// var sayHello  = person.sayHello();
//
// person.addSecondNameAndAge.apply (person2, ['AAAA', 11]);
//
// function logArray(param1){
//   console.log(this);
//   console.log(param1);
// }
//
// logArray.call([1,2,3], 'test');
//
// var obj = {
//   testKey: 'test'
// };
//
// function foo() {
//   console.log(this.testKey);
// }
//
// foo.call(obj);
//
// function foo2(key) {
//   console.log(this[key]);
// }
//
// foo2.call(obj, 'testKey');
//
// function Human(firstName, secondName) {
//   this.firstName = firstName;
//   this.secondName = secondName;
// }
//
// function Student() {
//   Human.apply(this, arguments);
// }
//
// var student1 = new Student('test1', 'test2');
//
// console.log(student1.firstName); // test1
// //
// console.log(student1.secondName); // test2
//
// var obj = {
//   phrase: 'This is'
// };
//
// var arr = ['Ivan', 'Ivanov'];
//
// function foo4(firstName, lastName) {
//   console.log(this.phrase + firstName + lastName);
// }
//
// foo4.apply(obj, arr);
//
// function logArray(params1) {
//   console.log(this);
//   console.log(params1);
// }
// //
// var func1 = logArray.bind(obj);
//
// console.log(func1('name'));
//
// var func2 = func1.bind(obj);
//
// console.log(func2('name2'));
// function mul(a) {
//   return function (b) {
//     return a*b;
//   };
// };
//
// console.log(mul(2)(3));
//
// function mulBind() {
//   return function () {
//     return arguments[0]*arguments[1];
//   }.bind(null, arguments[0]);
// };
//
//
// console.log(mulBind(5)(3));
//
//

// function foo() {
//
// }

// var leader = {
//   name: "Василий Иванович",
//   age: 35
// };
//
// var forJson = JSON.stringify(leader);
// console.log(forJson);
//
// var fromJson = JSON.parse(forJson);
// console.log(fromJson);

// var leader = {
//   name: "Василий Иванович"
// };
//
// var soldier = {
//   name: "Петька"
// };
//
// // эти объекты ссылаются друг на друга!
// leader.soldier = soldier;
// soldier.leader = leader;
//
// var team = [leader, soldier];
// console.log(JSON.stringify(team));

/**
 * function f
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param d
 * @returns {*}
 */


function func(a, b, c, d) {
  return a + b + c/d;
}

func(5, 3, 5);



try {
  var user = {
    firstName: "Anton",
    lastName: "Mandrychenko"
  };

  user.lastName = "test";

  var userJson = JSON.stringify(user, function (key,value) {
    if (key === "lastName") {
      value = "test";
      return value;
    }
    return value;
  });

  console.log(userJson = userJson+'123');

  var user2 = JSON.parse(userJson);

  console.log(user2);
}catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}


