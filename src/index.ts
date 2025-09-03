const multipleTypes = <FirstType, SecondType>(firstValue: FirstType, secondValue: SecondType): string => {
    return `The first value is: ${firstValue}, The second value is: ${secondValue}`;
}
console.log(multipleTypes<number, number>(100, 100));
console.log(multipleTypes<string, number>('jack', 100));
console.log(multipleTypes<number, number[]>(100, [100, 200, 300, 400])); 