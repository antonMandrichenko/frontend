"use strict";

function Gumburger(cost, kilocalories) {
  this.cost = cost;
  this.initialCost = cost;
  this.kilocalories = kilocalories;
  this.initialKcal = kilocalories;
  this.supplements = {};

  Gumburger.countGumburgers++;

  if (!Gumburger.allForSale) {
    Gumburger.allForSale = [];
    Gumburger.allForSale.push(this);
  } else {
    Gumburger.allForSale.push(this);
  }
};

Gumburger.countGumburgers = 0;

Gumburger.prototype.add = function (cost, kilocalories) {
  this.cost += cost;
  this.kilocalories += kilocalories;
};

Gumburger.prototype.withCheese = function () {
  var costCheese = 10;
  var kcalCheese = 20;
  Gumburger.prototype.add.apply(this, [costCheese, kcalCheese]);
  !this.supplements.cheese ? this.supplements.cheese = 1 : this.supplements.cheese += 1;
};

Gumburger.prototype.withSalad = function () {
  var costSalad = 20;
  var kcalSalad = 5;
  Gumburger.prototype.add.apply(this, [costSalad, kcalSalad]);
  !this.supplements.salad ? this.supplements.salad = 1 : this.supplements.salad += 1;
};

Gumburger.prototype.withPotato = function () {
  var costPotato = 15;
  var kcalPotato = 10;
  Gumburger.prototype.add.apply(this, [costPotato, kcalPotato]);
  !this.supplements.potato ? this.supplements.potato = 1 : this.supplements.potato += 1;
};

Gumburger.prototype.withMayonnaise = function () {
  var costMayonnaise = 20;
  var kcalMayonnaise = 5;
  Gumburger.prototype.add.apply(this, [costMayonnaise, kcalMayonnaise]);
  !this.supplements.mayonnaise ? this.supplements.mayonnaise = 1 : this.supplements.mayonnaise += 1;
};

Gumburger.prototype.withSeosoning = function () {
  var costSeosoning = 15;
  var kcalSeosoning = 0;
  Gumburger.prototype.add.apply(this, [costSeosoning, kcalSeosoning]);
  !this.supplements.seosoning ? this.supplements.seosoning = 1 : this.supplements.seosoning += 1;
};

Gumburger.prototype.showAboutGumb = function () {
  console.log("This gumburger costs: " + this.cost + " lirs. And it has " + this.kilocalories + " kcal. Compositions" +
    " are ", this.supplements, " Initial cost is " + this.initialCost + " lirs. Initial kcal is " + this.initialKcal);
};

Gumburger.profit = function () {
  var profitGum = 0;
  Gumburger.allForSale.forEach(function (value) {
    if (value.cost) {
      profitGum += value.cost;
    }
  });
  return console.log("Summ are " + profitGum + " lirs.", "We sold " + Gumburger.countGumburgers + " gumburgers");
};

var bigGumburger = new Gumburger(100, 60);
bigGumburger.withCheese();
bigGumburger.withSalad();
bigGumburger.withCheese();
bigGumburger.withPotato();


var smallGumburger = new Gumburger(50, 40);
smallGumburger.withCheese();
smallGumburger.withMayonnaise();
bigGumburger.showAboutGumb();
smallGumburger.showAboutGumb();
var smallGumburger2 = new Gumburger(50, 40);
var bigGumburger2 = new Gumburger(100, 60);
bigGumburger2.withPotato();
bigGumburger2.withMayonnaise();
console.log(bigGumburger.kilocalories);

console.log(Gumburger.allForSale);

Gumburger.profit();
