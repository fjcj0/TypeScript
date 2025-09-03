const returnType = <GenericType>(val: GenericType): GenericType => {
    return val;
};
console.log(returnType<number>(100));
console.log(returnType<string>("Jack"));
console.log(returnType<boolean>(true));