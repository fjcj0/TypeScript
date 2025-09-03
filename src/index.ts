const kids:number = 15;
const easy: number = 9;
const medium: number = 6;
const hard: number = 3;
enum level {
    kids = 15,
    easy = 9,
    medium = 6,
    hard = 3
};
let lvl: string = "easy";
if (lvl === 'easy') {
    console.log(`The level is ${lvl} and number of seconds is ${level.easy}s`);
}