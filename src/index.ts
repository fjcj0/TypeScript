interface user {
    id: number,
    username: string, 
    country: string,
    sayHello(): string,
    sayWelcome: () => string,
    getDouble(num:number) : number
};
let user: user={
    id: 100,
    username: "jack223",
    country: "usa",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome : () => {
        return `Welcome ${user.username}`;
    },
    getDouble(n) {
        return n * 2;
    }

};
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(4));