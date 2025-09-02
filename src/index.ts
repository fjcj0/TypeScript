const showMsg: boolean = true;

const showDetails = (name:string,age:number,salary:number):any => {
    if (showMsg) {
        return `Hello ${name}, Your Age is ${age}, Your Salary is ${salary}`;
    }
    return false;
};
console.log(showDetails("Jack",20,20.5));