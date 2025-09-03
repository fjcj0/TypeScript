"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    username;
    id;
    msg;
    constructor(username, id) {
        this.username = username;
        this.id = id;
        this.msg = () => {
            return `Hello ${this.username} with id ${this.id}`;
        };
    }
    set setId(id) {
        this.id = id;
    }
    get getId() {
        return this.id;
    }
    get getUsername() {
        return this.username;
    }
    set setUsername(username) {
        this.username = username;
    }
}
let newUser = new User("Jack Johnson", 100);
console.log(newUser);
newUser.setUsername = "Kai Alex";
newUser.setId = 1;
console.log(newUser);
//# sourceMappingURL=index.js.map