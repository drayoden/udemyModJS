// ES6 Arrow Functions

// non-Arrow function
// const sayHello = function() {
//     console.log('Hello');
// }

// same function converted to an Arrow function:
// const sayHello = () => {
//     console.log('Hello');
// }

// this also works for 'one liner/short' functions (no braces):
// const sayHello = () => console.log('Hello'); 

// sayHello();

// this also works but RETURNS the string. You then console log the call to the function
// const sayHello = () => 'Hello'
// console.log(sayHello());

// returning an object literal is a little different, note extra parens:
// const sayHello = () => ({msg: 'Hello'}); 
// console.log(sayHello());

// use parameters...
// const sayHello = (name) => console.log(`Hello ${name}`); 
// const sayHello = name => console.log(`Hello ${name}`);   // don't need the parm parens if only one arg.
// const sayHello = (fn,ln) => console.log(`Hello ${fn} ${ln}`); // multiple params need parens
// sayHello('MooseCat', 'Pimpletoes');



// use arrow functions as callbacks
const users = ['Thomas','Dick','Sam'];

// non-arrow function:
// const nameLen = users.map(function(name) {
//     return name.length;
// }); 

// arrow version of same thing...
const nameLen = users.map(name => name.length);
console.log(nameLen);