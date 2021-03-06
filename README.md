<p align="center">
  <img src="https://raw.githubusercontent.com/Chank1e/badum-tss/master/img/logo.png"/>
</p>

## Welcome to BadumTss (BTSS) official lang repository


BTSS is a simple JavaScript-based language which can be used to achieve... I don't really know for what)

```s
$ npm install badum-tss --save

# or

$ yarn add badum-tss
```

---

### Constructor

```javascript

const BTSS = require('badum-tss');
const tks = BTSS.go(code[, modules, need_to_run]); //Returns array of tokens
const jsValid = BTSS.compile(tree,'./dist/hello.js'); //Returns JS-Valid code and compile BTSS code into js and save to './dist/hello.js'

```


<p align="center">
  <img src="https://raw.githubusercontent.com/Chank1e/badum-tss/master/img/banners/syntax.jpg"/>
</p>

### Begin
Firstly you need to write begin word\
__Default__ is 'Badum'

---

### End
In the end you need to write end word\
__Default__ is 'Tss'

---

### Separator
Between every command you need to type separator
__Default__ is '.'

---

### Define variables 
__Default__ define variable word is 'Suppose that'  
__Default__ equals word is 'stores'

#### Example:
```
Badum.
Suppose that A stores 2.
Suppose that B stores 'hello world'.
Tss.
```
#### Now A===2, B==='hello world'

---

### Import functions
You can import any functions as a second argument and use them in BTSS with import keyword
#### Sequence:
- Write functions
- Create array of functions
- Send array as second argument
- Import function in BTSS-lang

#### Example:
```javascript
const BTSS = require('badum-tss');
function print(...args){
  console.log(...args);
}
const code = `
Badum.
Lets take print.
Suppose that A stores 1.

I want the print to bring (A).
Tss.
`;

BTSS(code,[print]);
```
That code will log '1' to console.

---

### Call function with arguments
If you've already import any function, you want to call it with arguments. 
#### You need:
- Write call function keyword
- Write function name
- Write call function with arguments operator
- Write arguments in the round brackets

#### Example:
```javascript
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

const BTSS = require('badum-tss');

function print(...args){
    console.log(...args);
}
function square(a){
    print((+a)**2)
}

BTSS(code,[print,square]);
```

<p align="center">
  <img src="https://raw.githubusercontent.com/Chank1e/badum-tss/master/img/banners/thanks.jpg"/>
</p>

### I don't hope for any usage of this project, but I would be grateful for the star=3

#### Thank's just for reading. Logo and banners are from [canva.com](https://canva.com)

#### copyright [github.com/chank1e](https://github.com/chank1e), 2018
