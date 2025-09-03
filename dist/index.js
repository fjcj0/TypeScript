"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    static created = 0;
    static getCount() {
        console.log(`${this.created} Objects Created!!`);
    }
    constructor(username) {
        User.created++;
    }
}
let firstUser = new User("Jack");
let secondUser = new User("Johnson");
let thirdUser = new User("Kai");
User.getCount();
//# sourceMappingURL=index.js.map