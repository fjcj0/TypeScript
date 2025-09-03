const logging = (msg: string) : void => {
    console.log(msg);
    return; 
};
 
const fail = (msg: string) => {
    throw new Error(msg);
    return;
};

const alwaysLog = (name: string) : never => {
    while (true) {
        console.log(name);
    }
};