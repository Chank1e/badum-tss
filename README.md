<p align="center">
  <img src="https://raw.githubusercontent.com/Chank1e/badum-tss/master/img/logo.png"/>
</p>

## Welcome to BadumTss (BTSS) official lang repository


BTSS is a simple JavaScript-based language which can be used to achieve... I don't really know for what)

```
npm install badum-tss --save

or

yarn add badum-tss
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Chank1e/badum-tss/master/img/banners/syntax.jpg"/>
</p>

### Begin
Firstly you need to write begin word, which you can find in **./src/constants/keywords.js**
__Default__ is 'Badum'

---

### End
In the end you need to write end word, which you can find in **./src/constants/keywords.js**
__Default__ is 'Tss'

---

### Separator
Between every command you need to type separator, which you can find in **./src/constants/operators.js**
__Default__ is '.'

---

### Define variables
Also you need to find out define variable word and equals word in **./src/constants/keywords.js** and **./src/constants/operators.js**  
__Default__ define variable word is 'Suppose that'  
__Default__ equals word is 'stores'  

#### Example:
```
Badum.
Suppose that A stores 2.
Suppose that B stores 'hello world'.
```
#### Now A===2, B==='hello world'

---

### Import functions
You can import any functions as a second argument and use them in BTSS with import keyword, which you can find in **./src/constants/keywords.js**
#### Sequence:
- Write functions
- Create array of functions
- Send array as second argument
- Import function in BTSS-lang

#### Example:
```
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
```
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



