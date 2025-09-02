type s = string;
const teacher: s = "Jack Johnson";
type college = string | number | (number | string | boolean) [];
const students: college = [1, 2, 3, 4, "ahmed", true, false, "ali"];
console.log("Teacher name: " + teacher);
console.log("his students number and name: ");
students.map((student, index) => (
    console.log((index+1) + ': ' + student) 
));