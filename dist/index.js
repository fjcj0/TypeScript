"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let all = "Hello world!!";
console.log(all);
all = 1;
console.log(all);
const letMyFriends = ["Ali", "Mohammed", "Adam", "Jack", "Fadi", 10, true, false];
letMyFriends.map((friend, index) => {
    console.log((index + 1) + ': ' + friend);
});
const twoArray = [1, 2, 3, 4, ['Fadi', 'Ahmed'], [1, 2, 3, 4, 5, 6], ['Jack', 'John'], [10, 11, 12, 13], false, true];
twoArray.forEach((item, index) => {
    if (Array.isArray(item)) {
        console.log(`${index + 1}: [${item.join(', ')}]`);
    }
    else {
        console.log(`${index + 1}: ${item}`);
    }
});
//# sourceMappingURL=index.js.map