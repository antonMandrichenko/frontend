const poneyNumber: number = 0;
const poneyName: string = 'Rainbow Dash';

// class Pony {
//     constructor (speed:number, color:string) {
//         this.color = color;
//         this.speed = speed;
//     }
//
//     static DefSpeed() {
//         return 10;
//     }
//
//     toString() {
//         return `${this.color} pony`;
//     }
// }

interface CanRun {
    run(meters: number): void;
}

class Pony implements CanRun {
    run(meters) {
        console.log(`pony runs ${meters}m`);
    }
}

const pony: Pony = new Pony();

pony.run(20);

class NamedPonyWithoutShortcut {
    public name: string;
    constructor(name: string, private speed: number) {
        this.name = name;
        this.speed = speed;
    }
    run() {
        console.log(`pony runs at ${this.speed}m/s`);
    }
}

const pony2 = new NamedPonyWithoutShortcut("lila", 15);
console.log(pony2);
pony2.speed = 25;
console.log(pony2.speed);
pony2.run();

