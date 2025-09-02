"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let article = [101, "First Title", true]; //non read-only writable
console.log(article);
article = [1, "Second Title", false];
console.log(article);
article.push(100);
console.log(article);
const students = [1, "Jack", true]; //read only
console.log(students);
const [id, name, absence] = students;
console.log(`Id number: ${id}`);
console.log(`Name: ${name}`);
console.log(`Absence: ${absence}`);
//# sourceMappingURL=index.js.map