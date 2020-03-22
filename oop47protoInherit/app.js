
// person constructor
function Person(fn, ln) {
    this.firstn = fn;
    this.lastn = ln; 
}

// greeting prototype
Person.prototype.greeting = function(){
    return `Hello ${this.firstn} ${this.lastn}`;
}

const person1 = new Person('Jonh', 'Doe');
console.log(person1.greeting());

// customer constructor
function Customer(fn, ln, phn, memb) {
    Person.call(this, fn, ln);
    this.phone = phn;
    this.member = memb; 
}


// inherit person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make customer prototype return customer()
Customer.prototype.constructor = Customer;

// new customer
const cust1 = new Customer('Stormy','Moosetoes', '0934', 'Pro');
console.log(cust1);
console.log(cust1.greeting());

// this will not work: console.log(cust1.greeting()); until
// the person prototype is inherited; line 24.

// customer greeting
Customer.prototype.greeting = function(){
    return `Welcome ${this.firstn} ${this.lastn}, you are very fuzzy.`
}

console.log(cust1.greeting());