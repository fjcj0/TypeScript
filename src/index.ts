class Player {
    constructor(public name: string) { }
    attack(): void {
        console.log("Attacking now");
    }
}
class Red extends Player {
    constructor(public name: string) {
        super(name);
    }
    attack(): void {
        console.log(`${this.name} Is Attacking Now`);
    }
}
class Blue extends Player {
    constructor(public name: string) {
        super(name);
    }
    attack(): void {
        console.log(`${this.name} Is Attacking Now`);
    }
}

let blueTeam = new Blue("Blue Team");
let redTeam = new Blue("Red Team");
blueTeam.attack();
redTeam.attack();