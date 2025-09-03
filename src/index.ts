class User{
   private username: string;
   private id: number;
    msg: () => string;
    constructor(username: string, id: number) {
        this.username = username;
        this.id = id;
        this.msg = () => {
            return `Hello ${this.username} with id ${this.id}`;
        }
    }
    set setId (id:number) {
       this.id = id;
    }
    get getId ():number {
        return this.id;
    }
    get getUsername () : string  {
        return this.username;
    }
    set setUsername (username: string) {
        this.username = username;
    }
}

let newUser = new User("Jack Johnson", 100);
console.log(newUser);

newUser.setUsername="Kai Alex";
newUser.setId=1;
console.log(newUser);