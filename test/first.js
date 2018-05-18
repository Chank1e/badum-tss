const code = `
Badum.
Lets take print.
Lets take square.

Suppose that A stores 1.
Suppose that B stores 2.
Suppose that C stores 4.

I want the print to bring (A,B).
I want the square to bring (C).

Tss.
`;

const RUN = require('badum-tss');

function print(...args){
    console.log(...args);
}
function square(a){
    print((+a)**2)
}

RUN(code,[print,square]);
