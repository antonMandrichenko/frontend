"use strict";
// function Article() {
//   Article.count++;
//   this.created = new Date();
//   Article.created = this.created;
//   //...
// }
// Article.count = 0;
//
// Article.showCount = function() {
//   console.log( "Всего: " + this.count + ". Последняя: " + this.created); // (1)
// }
//
// // использование
// new Article();
// new Article();
// Article.showCount(); // (2)
// new Article();
// Article.showCount();
// new Article();
// Article.showCount();

// function sumArgs() {
//   var arr = [].slice.call(arguments);
//   return arr.reduce(function (a, b) {
//     return a + b;
//   }, 0);
// }
//
// console.log( sumArgs(1, 2, 7) );

// function applyAll() {
//   var arg = [].slice.call(arguments);
//   return arg[0].apply(this, arg.slice(1));
// }
//
// console.log ( applyAll(Math.min, 2, -2, 3, 24, 7425, -5, 5623, -5623) );

// var user = {
//   firstName: "Вася",
//   sayHi: function() {
//     alert( this.firstName );
//   }
// };
//
// setTimeout(user.sayHi.bind(user), 5000);

// function work(a) {
//   return a;
// }
//
// var log = [];
//
// function makeLogging(f, log) {
//   return function (a) {
//     log.push(a);
//     console.log(log, log[log.length-1]);
//     return f.call(this, log[log.length-1]);
//   };
// }
//
//
// work = makeLogging(work, log);
//
// console.log(work(1)); // 1, добавлено в log
// console.log(work(5)); // 5, добавлено в log
//
// for (var i = 0; i < log.length; i++) {
//   console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }


function work(a, b) {
  console.log( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
  return function(){
    var newArr = [].slice.call(arguments);
    log.push(newArr);
    console.log(log);
    return f.apply(this, newArr);
  };
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

