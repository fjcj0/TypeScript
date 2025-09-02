"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addAll = (...nums) => {
    let result = 0;
    if (nums) {
        nums.forEach(num => result += num);
        return result;
    }
    return 0;
};
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//# sourceMappingURL=index.js.map