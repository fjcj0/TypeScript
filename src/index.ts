type A = {
    one: string,
    two: number,
    three: boolean
};
type B = A & {
    four: number;
};
type C = {
    five: boolean;
}

type mix_a_with_c = A & C;

const values: mix_a_with_c = {
    one:"Hello",
    two:2,
    three:true,
    five:false
};
console.log(values);