// built-in constructors - we don't normally use them! just a demo

// strings
const name1 = 'Jeff'; 
const name2 = new String("Jeff");

console.log(name1);
console.log(name2);

name2.foo = 'bar'

// typeof not the same:
console.log(typeof(name1));
console.log(typeof(name2));



// numbers
const num1 = 5;
const num2 = new Number(5);

console.log(typeof(num1));
console.log(typeof(num2));

// applies to bools and functions as well

