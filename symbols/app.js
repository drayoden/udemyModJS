// Symbols - every symbol is unique

const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('sym3');

console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2);  // false - uniqueness...
console.log(sym3);
console.log(typeof lsym2);

// The main purpose of symbols is unique object keys...

const KEY1 = Symbol();
const KEY2 = Symbol('key2');

const myObj = {};

console.log(myObj);
myObj[KEY1] = 'Property1';
myObj[KEY2] = 'Property2';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// cannot iterate over symbols, not numerable
for() {
    let i in myObj
}