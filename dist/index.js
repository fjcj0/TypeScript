"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kids = 15;
const easy = 9;
const medium = 6;
const hard = 3;
var level;
(function (level) {
    level[level["kids"] = 15] = "kids";
    level[level["easy"] = 9] = "easy";
    level[level["medium"] = 6] = "medium";
    level[level["hard"] = 3] = "hard";
})(level || (level = {}));
;
let lvl = "easy";
if (lvl === 'easy') {
    console.log(`The level is ${lvl} and number of seconds is ${level.easy}s`);
}
//# sourceMappingURL=index.js.map