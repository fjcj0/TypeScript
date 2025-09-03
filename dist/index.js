"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myObject = {
    username: "Jack",
    id: 123195619,
    hire: true,
    skills: {
        one: "html",
        two: "css",
    },
    teacher: "Kai"
};
console.log(myObject);
const newObject = myObject;
newObject.username = "John";
newObject.hire = false;
newObject.id = 124095812;
newObject.skills.one = "JavaScript";
newObject.skills.two = "Bootstrap5";
console.log(newObject);
//# sourceMappingURL=index.js.map