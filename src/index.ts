const addAll = (...nums: number[]): number => {
    let result: number = 0;
    if (nums) {
        nums.forEach(num => result += num);
        return result;
    }
    return 0;
};
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));