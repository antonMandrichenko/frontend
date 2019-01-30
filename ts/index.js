var poneyNumber = 0;
var poneyName = 'Rainbow Dash';
var Pony = /** @class */ (function () {
    function Pony() {
    }
    Pony.prototype.run = function (meters) {
        console.log("pony runs " + meters + "m");
    };
    return Pony;
}());
var pony = new Pony();
pony.run(20);
var NamedPonyWithoutShortcut = /** @class */ (function () {
    function NamedPonyWithoutShortcut(name, speed) {
        this.speed = speed;
        this.name = name;
        this.speed = speed;
    }
    NamedPonyWithoutShortcut.prototype.run = function () {
        console.log("pony runs at " + this.speed + "m/s");
    };
    return NamedPonyWithoutShortcut;
}());
var pony2 = new NamedPonyWithoutShortcut("lila", 15);
console.log(pony2);
pony2.speed = 25;
console.log(pony2.speed);
pony2.run();
