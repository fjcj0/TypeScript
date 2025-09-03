class User {
    private static created: number = 0;
    static getCount() : void {
        console.log(`${this.created} Objects Created!!`);
    }
    constructor(username: string) {
        User.created++;
    }
}
let firstUser = new User("Jack");
let secondUser = new User("Johnson");
let thirdUser = new User("Kai");
User.getCount()