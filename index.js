const RUN = require('./src')

const code = `
Badum.
Lets take print.
Lets take square.

Suppose that B stores 2.
Suppose that C stores 4.

I want the print to bring (A,B).
I want the square to bring (C).

Tss.
`;

function print(a,b) {
    console.log(+a + +b)
}
function square(a){
    let tmp = +a;
    console.log(tmp**2);
}
RUN(code,[print,square])