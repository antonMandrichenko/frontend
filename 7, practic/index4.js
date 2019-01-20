"use strict";

class Pony {
  constructor (speed, color) {
    this.color = color;
    this.speed = speed;
  }

  static DefSpeed() {
    return 10;
  }

  toString() {
    return `${this.color} pony`;
  }


}

class SmallPony extends Pony{
  constructor(speed, color) {
    super(speed, color);
  }
}

const bluePony = new Pony(25, "blue");
console.log(bluePony.toString());
console.dir(bluePony);
const led = Pony.DefSpeed();
console.log(led);
const smallPony = new SmallPony(20, 'grey');
console.dir(smallPony);

const pony = { name: 'Rainbow Dash', color: 'blue' };
const horse = { speed: 40, color: 'black' };
const printColor = animal => console.log(animal.color);
printColor(pony);
