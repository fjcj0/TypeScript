let myObject: {
    username: string,
    id: number,
    hire: boolean,
    skills: {
        one: string,
        two: string,
    },
    readonly teacher: string,
} = {
    username: "Jack",
    id: 123195619,
    hire: true,
    skills: {
        one: "html",
        two: "css",
    },
    teacher: "Kai"
}
console.log(myObject);

const newObject = myObject;
newObject.username = "John";
newObject.hire = false;
newObject.id = 124095812;
newObject.skills.one = "JavaScript";
newObject.skills.two = "Bootstrap5";
console.log(newObject);