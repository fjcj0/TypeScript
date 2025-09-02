let all: string | number | boolean = "Hello world!!";

console.log(all);

all = 1;

console.log(all);

const letMyFriends: (string | number | boolean)[] = ["Ali", "Mohammed", "Adam", "Jack", "Fadi", 10,true,false];

letMyFriends.map((friend, index) => {
    console.log((index + 1) + ': ' + friend);
});

const twoArray: (string | number | boolean | string[] | number[])[] = [1, 2, 3, 4, ['Fadi', 'Ahmed'], [1, 2, 3, 4, 5, 6], ['Jack', 'John'], [10, 11, 12, 13], false, true];

twoArray.forEach((item, index) => {
    if (Array.isArray(item)) {
        console.log(`${index + 1}: [${item.join(', ')}]`);
    } else {
        console.log(`${index + 1}: ${item}`);
    }
});