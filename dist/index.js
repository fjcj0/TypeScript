"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    value;
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} -- ${this.value}`);
    }
}
let userOne = new User("Elzero");
console.log(userOne.value);
userOne.show("Message");
let userTwo = new User(100);
console.log(userTwo.value);
userTwo.show("Message");
//# sourceMappingURL=index.js.map