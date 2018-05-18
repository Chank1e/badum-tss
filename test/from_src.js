const fs = require('fs');
let code = '';
String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, '');
};
fs.readFile('./btss/hello_world.btss',(err,data)=>{
    if(err)
        throw err;
    code = data.toString();
    mainProcess();
});

const BTSS = require('../src');
function mainProcess(){
    function print(...args){
        console.log(...args);
    }
    function square(a){
        print((+a)**2)
    }
    const tree = BTSS.go(code,[print,square]);
    BTSS.compile(tree,'./dist/hello.js')
}

