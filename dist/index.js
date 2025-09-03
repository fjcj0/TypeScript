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
}
let user = new User("jack223", 1234);
console.log(user.msg());
//# sourceMappingURL=index.js.map