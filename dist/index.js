"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compare = (num1, num2) => {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    return -1;
};
console.log(compare(20, 15));
console.log(compare(20, 20));
console.log(compare(20, 30));
//# sourceMappingURL=index.js.map