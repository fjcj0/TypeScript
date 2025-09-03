"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging = (msg) => {
    console.log(msg);
    return;
};
const fail = (msg) => {
    throw new Error(msg);
    return;
};
const alwaysLog = (name) => {
    while (true) {
        console.log(name);
    }
};
//# sourceMappingURL=index.js.map