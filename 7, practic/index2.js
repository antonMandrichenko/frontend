"use strict";

/**
 * Constructor representing a gumburger.
 * @constructor
 * @param {string} category - "big" or "small" gumburger;
 */
function Gumburger(category) {
  /**
   * If user enter wrong argument of new object, this instruction generates error
   */
  try {
    if (!category || (category !== "big" && category !== "small")) {
      // console.log(category === "big");
      throw new SyntaxError("Please, enter argument of new object 'big' or 'small'");
    }
  } catch (e) {
    alert('Ошибка ' + e.name + ": " + e.message);
  }
  /**
   * Сategory selection (public properties)
   */
  switch (category) {
    case "big":
      this.cost = this.initialCost = Gumburger.prototype.BIGCOST;
      this.kilocalories = this.initialKcal = Gumburger.prototype.BIGKCAL;
      this.name = "big";
      this.count = countBigGumburgers();
      Gumburger.countBigGumburgers++;
      break;
    case "small":
      this.cost = this.initialCost = Gumburger.prototype.SMALLCOST;
      this.kilocalories = this.initialKcal = Gumburger.prototype.SMALLKCAL;
      this.name = "small";
      this.count = countSmallGumburgers();
      Gumburger.countSmallGumburgers++;
      break;
  }
  /**
   *This property shows all supplements in this object
   * @type {{}}
   */
  this.supplements = {};
  /**
   * Counter of gumburger's quantity
   */
  Gumburger.countGumburgers++;
  /**
   * This static property shows array of all gumburgers
   */
  if (!Gumburger.allForSale) {
    Gumburger.allForSale = [];
    Gumburger.allForSale.push(this);
  } else {
    Gumburger.allForSale.push(this);
  }
};
/**
 * Generating counter
 * @returns {function(): number}
 */
function counter(){
  var count = 1;
  return function () {
    return count++;
  }
}
var countBigGumburgers = counter();
var countSmallGumburgers = counter();
Gumburger.countGumburgers = 0;
Gumburger.countBigGumburgers = 0;
Gumburger.countSmallGumburgers = 0;
/**
 * This static properties set up constants of gumburger's сost and kilocalories
 * @type {number}
 */
Gumburger.prototype.BIGCOST = 100;
Gumburger.prototype.BIGKCAL = 60;
Gumburger.prototype.SMALLCOST = 50;
Gumburger.prototype.SMALLKCAL = 40;
/**
 * Proto add parameters in gumburger
 * @param {number} cost
 * @param {number} kilocalories
 * @param {number} amount
 */
Gumburger.prototype.add = function (cost, kilocalories, amount) {
  if (!amount) {
    this.cost += cost;
    this.kilocalories += kilocalories;
    return;
  }
  this.cost += (cost*amount);
  this.kilocalories += (kilocalories*amount);
};
/**
 * Сheese order
 * @param {number} amount - Number of servings
 */
Gumburger.prototype.withCheese = function (amount) {
  var costCheese = 10;
  var kcalCheese = 20;
  Gumburger.prototype.add.apply(this, [costCheese, kcalCheese, amount]);
  if (!amount){
    !this.supplements.cheese ? this.supplements.cheese = 1 : this.supplements.cheese += 1;
    return;
  }
  !this.supplements.cheese ? this.supplements.cheese = amount : this.supplements.cheese += amount;
};
/**
 * Salad order
 * @param {number} amount - Number of servings
 */
Gumburger.prototype.withSalad = function (amount) {
  var costSalad = 20;
  var kcalSalad = 5;
  Gumburger.prototype.add.apply(this, [costSalad, kcalSalad, amount]);
  if (!amount){
    !this.supplements.salad ? this.supplements.salad = 1 : this.supplements.salad += 1;
    return;
  }
  !this.supplements.salad ? this.supplements.salad = amount : this.supplements.salad += amount;
};
/**
 * Potato order
 * @param {number} amount - Number of servings
 */
Gumburger.prototype.withPotato = function (amount) {
  var costPotato = 15;
  var kcalPotato = 10;
  Gumburger.prototype.add.apply(this, [costPotato, kcalPotato, amount]);
  if (!amount){
    !this.supplements.potato ? this.supplements.potato = 1 : this.supplements.potato += 1;
    return;
  }
  !this.supplements.potato ? this.supplements.potato = amount : this.supplements.potato += amount;
};
/**
 * Mayonnaise order
 * @param {number} amount - Number of servings
 */
Gumburger.prototype.withMayonnaise = function (amount) {
  var costMayonnaise = 20;
  var kcalMayonnaise = 5;
  Gumburger.prototype.add.apply(this, [costMayonnaise, kcalMayonnaise, amount]);
  if (!amount){
    !this.supplements.mayonnaise ? this.supplements.mayonnaise = 1 : this.supplements.mayonnaise += 1;
    return;
  }
  !this.supplements.mayonnaise ? this.supplements.mayonnaise = amount : this.supplements.mayonnaise += amount;
};
/**
 * Seosoning order
 * @param {number} amount - Number of servings
 */
Gumburger.prototype.withSeosoning = function (amount) {
  var costSeosoning = 15;
  var kcalSeosoning = 0;
  Gumburger.prototype.add.apply(this, [costSeosoning, kcalSeosoning, amount]);
  if (!amount){
    !this.supplements.seosoning ? this.supplements.seosoning = 1 : this.supplements.seosoning += 1;
    return;
  }
  !this.supplements.seosoning ? this.supplements.seosoning = amount : this.supplements.seosoning += amount;
};
/**
 * Information about gumburger
 */
Gumburger.prototype.showAboutGumburger = function () {
  console.log("This " + this.count + " " + this.name + " gumburger costs: " + this.cost + " lirs. And it has " + this.kilocalories + " kcal. Compositions" +
    " are ", this.supplements, " Initial cost is " + this.initialCost + " lirs. Initial kcal is " + this.initialKcal + ".");
};
/**
 * Total profit
 */
Gumburger.profit = function () {
  var profitGum = 0;
  Gumburger.allForSale.forEach(function (value) {
    if (value.cost) {
      profitGum += value.cost;
    }
  });
  return console.log("Sum of selling are " + profitGum + " lirs.", "We sold " + Gumburger.countGumburgers + " gumburgers. Big" +
    " gumburgers: " + Gumburger.countBigGumburgers + ". Small gumburgers: " + Gumburger.countSmallGumburgers + ".");
};

var bigGumburger1 = new Gumburger("big");
bigGumburger1.withCheese(2);
bigGumburger1.withSalad();
bigGumburger1.withCheese();
bigGumburger1.withPotato(3);

var smallGumburger1 = new Gumburger("small");
smallGumburger1.withCheese(4);
smallGumburger1.withMayonnaise(2);
smallGumburger1.withSeosoning(3);

var smallGumburger2 = new Gumburger("small");
smallGumburger2.withPotato(3);

var bigGumburger2 = new Gumburger("big");
bigGumburger2.withPotato();
bigGumburger2.withMayonnaise();

var bigGumburger3 = new Gumburger("small");
bigGumburger3.withPotato();
bigGumburger3.withMayonnaise();

var bigGumburger4 = new Gumburger("big");
bigGumburger4.withPotato(2);
bigGumburger4.withMayonnaise(2);

var smallGumburger3 = new Gumburger("small");

bigGumburger1.showAboutGumburger();
smallGumburger1.showAboutGumburger();
bigGumburger2.showAboutGumburger();
smallGumburger2.showAboutGumburger();
bigGumburger3.showAboutGumburger();
bigGumburger4.showAboutGumburger();

console.log(Gumburger.allForSale);

Gumburger.profit();
