let article: [number, string, boolean] = [101, "First Title", true];//non read-only writable
console.log(article);
article = [1, "Second Title", false];
console.log(article);
article.push(100);
console.log(article);

const students: readonly [number, string, boolean] = [1, "Jack", true];//read only
console.log(students);

const [id, name, absence] = students;
console.log(`Id number: ${id}`);

console.log(`Name: ${name}`);

console.log(`Absence: ${absence}`);