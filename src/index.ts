type buttons = {
    up: string,
    down: string,
    left: number,
    right: number,
    caps: number[],
    esc: (string | boolean) [],
};
const getActions  = (btns:buttons) => {
    console.log(`Up: ${btns.up} ,Down: ${btns.down} ,Right: ${btns.right} ,left: ${btns.left}`);
    btns.caps.map((cap, index) => (
        console.log(cap)
    ));
       btns.esc.map((es, index) => (
        console.log(es)
    ));
};

getActions({ up: "go up", down: "go down", right: 1, left: 2, caps: [1, 2, 3, 4, 5, 6], esc: ["jack", "johnson", "liz", false, true, "kane"] });

type last = buttons & {
x: boolean,
};

const getNewActions  = (btns:last) => {
    console.log(`Up: ${btns.up} ,Down: ${btns.down} ,Right: ${btns.right} ,left: ${btns.left}`);
    btns.caps.map((cap, index) => (
        console.log(cap)
    ));
       btns.esc.map((es, index) => (
        console.log(es)
       ));
    console.log('x: ', btns.x);
};

getNewActions({ up: "go up", down: "go down", right: 1, left: 2, caps: [1, 2, 3, 4, 5, 6], esc: ["jack", "johnson", "liz", false, true, "kane"] ,x:true});