class Player {
    constructor(public name: string) { }
    attack(): void {
        console.log("Attacking now");
    }
}
class Red extends Player {
    constructor(name: string) {
        super(name);
    }
    override attack(): void {
        console.log(`${this.name} Is Attacking Now`);
    }
}
class Blue extends Player {
    constructor(name: string) {
        super(name);
    }
    override attack(): void {
        console.log(`${this.name} Is Attacking Now`);
    }
}

let blueTeam = new Blue("Blue Team");
let redTeam = new Blue("Red Team");
blueTeam.attack();
redTeam.attack();