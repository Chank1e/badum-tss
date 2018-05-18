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
const _KEYWORDS_ = require('./keywords');
const _OPERATORS_ = require('./operators');


String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, '');
};

function run(code,mods) {
    function err(e) {
        throw new Error(e);
    };

    function checkBadumBegin(line) {
        return line === _KEYWORDS_.BEGIN;
    };

    function checkTssEnd(line) {
        return line === _KEYWORDS_.END;
    };
    const DEFAULT_MODULES = ['print',...mods];
    let global = {
        variables: {},
        functions: {}
    };
    const input = code;
    const lines = input.replace(/\n/g, '').trim().split('.').filter(_ => _ != '');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        //Check for beginning of the programm
        if (i === 0 && !checkBadumBegin(line))
            err(`No '${_KEYWORDS_.BEGIN}' in the beginning? I don't have anything to talk to you about.`);
        //Check for end of the programm
        if (i === lines.length - 1 && !checkTssEnd(line))
            err(`No '${_KEYWORDS_.END}' in the end? I don't have anything to talk to you about.`);
        if (line.startsWith('Lets take')) { //include modules
            const KEYWORD_LEN = _KEYWORDS_.IMPORT_MODULE.split(' ').length;
            let tmp = line.split(' '),
                module = tmp[KEYWORD_LEN];
            if (module && DEFAULT_MODULES.includes(module)) {
                global.functions[module] = eval(module);
            } else {
                err(`Invalid module(or no module) on line ${i+1}`);
            }
        } else if (line.startsWith(_KEYWORDS_.DEFINE_VARIABLE)) {
            const KEYWORD_LEN = _KEYWORDS_.DEFINE_VARIABLE.split(' ').length;
            const OPERATOR_LEN = _OPERATORS_.EQUALS.split(' ').length;
            let tmp = line.split(' '),
                name = tmp[KEYWORD_LEN],
                equals = tmp.slice(KEYWORD_LEN+1,KEYWORD_LEN+OPERATOR_LEN+1).join(' '),
                value = tmp.slice(KEYWORD_LEN+OPERATOR_LEN+1,tmp.length).join(' ').trim();
            if(equals!==_OPERATORS_.EQUALS)
                err(`Invalid equals operator. Found '${equals}', but expected '${_OPERATORS_.EQUALS}'`)
            if (!name) {
                err(`Error finding name of variable at line ${i+1}`);
            } else if (!value) {
                err(`Error finding value of variable at line ${i+1}`);
            } else if (global[name]) {
                err(`Duplicating variable at line ${i+1}`);
            } else {
                global.variables[name] = value;
            }
        } else if (line.startsWith(_KEYWORDS_.CALL_FUNCTION)) {
            const KEYWORD_LEN = _KEYWORDS_.CALL_FUNCTION.split(' ').length;
            const OPERATOR_LEN = _OPERATORS_.CALL_WITH_ARGS.split(' ').length;
            let tmp = line.split(' '),
                func = tmp[KEYWORD_LEN],
                operator = tmp.slice(KEYWORD_LEN+1,KEYWORD_LEN+OPERATOR_LEN+1).join(' '),
                args = tmp.slice(KEYWORD_LEN+OPERATOR_LEN+1,tmp.length).join(' ').trim();
            if(operator!==_OPERATORS_.CALL_WITH_ARGS)
                err(`Invalid call operator. Found '${operator}', but expected '${_OPERATORS_.CALL_WITH_ARGS}'`)
            if (!global.functions[func]) {
                err(`Unknown module at line ${i+1}`);
            } else if (!args) {
                err(`Invalid arguments at line ${i+1}`)
            } else {
                let tmp_args = args.replace(/\(|\)/g, '').trim().split(',');
                tmp_args.forEach((arg, arg_i) => {
                    if (!global.variables[arg]) {
                        err(`Oh no, we can't find variable ${arg} at line ${i+1}`)
                    } else {
                        tmp_args[arg_i] = global.variables[arg];
                    }
                })
                global.functions[func](...tmp_args)
            }
        }
    }
}

//Modules

function print(a,b) {
    console.log(+a + +b)
}
function square(a){
    let tmp = +a;
    console.log(tmp**2);
}
run(code,['square'])