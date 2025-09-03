class User{
    username: string;
    id: number;
    msg: () => string;
    constructor(username: string, id: number) {
        this.username = username;
        this.id = id;
        this.msg = () => {
            return `Hello ${this.username} with id ${this.id}`;
        }
    }
}
let user = new User("jack223", 1234);
console.log(user.msg());