"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    name;
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking now");
    }
}
class Red extends Player {
    name;
    constructor(name) {
        super(name);
        this.name = name;
    }
    attack() {
        console.log(`${this.name} Is Attacking Now`);
    }
}
class Blue extends Player {
    name;
    constructor(name) {
        super(name);
        this.name = name;
    }
    attack() {
        console.log(`${this.name} Is Attacking Now`);
    }
}
let blueTeam = new Blue("Blue Team");
let redTeam = new Blue("Red Team");
blueTeam.attack();
redTeam.attack();
//# sourceMappingURL=index.js.map