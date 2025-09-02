"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const showMsg = true;
const showDetails = (name = "Default Name", age, salary) => {
    if (showMsg) {
        return `Hello ${name}, Your Age is ${age}, Your Salary is ${salary}`;
    }
    return false;
};
console.log(showDetails(undefined, 20, 20.5));
//# sourceMappingURL=index.js.map