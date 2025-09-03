interface Settings {
    theme: boolean,
    font: string,
    save(): void,
}
class User implements Settings {
    constructor(public username:string,public theme: boolean,public font :string) {}
    save(): void{
        console.log(`Saved successfully ${this.username},${this.theme},${this.font}!!`);
    }
    update(): void {
        console.log(`Updated successfully!!`);
    }
}

let firstUser = new User("Jack", true, "Poppins");
firstUser.save();