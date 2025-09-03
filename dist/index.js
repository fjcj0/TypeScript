"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    username;
    theme;
    font;
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log(`Saved successfully ${this.username},${this.theme},${this.font}!!`);
    }
    update() {
        console.log(`Updated successfully!!`);
    }
}
let firstUser = new User("Jack", true, "Poppins");
firstUser.save();
//# sourceMappingURL=index.js.map