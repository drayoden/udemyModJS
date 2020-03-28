// prototypes

// Object.prototype


// person constructor
function Person(fn, ln, dob) {
    this.firstn = fn;
    this.lastn = ln; 
    this.birthday = new Date(dob);
    // this.calcAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

const john = new Person('John', 'Doe', '09/23/1945');
const jane = new Person('Jane', 'Jones', '6/12/89');

console.log(jane);  // note '__proto__ object at bottom in the dev tools
console.log(john);

// each Person object has a unique firstname, lastname and birthday, 
// however, all Person objects will have thier age calculated the same
// way. Thus, the calcAge method can be moved to a prototype:

// calcAge prototype:
Person.prototype.calcAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// getFullName prototype:
Person.prototype.getFullName = function(){
    return `${this.firstn} ${this.lastn}`;
}

// gets married protype (changes data)
Person.prototype.getsMarried = function(newLastn){
    this.lastn = newLastn;
}

// note in dev tools that calcAge is no longer in the upper level object.
// it is now under the __proto__ object.

console.log(john.calcAge());
console.log(jane.calcAge());

console.log(john.getFullName());
console.log(jane.getFullName());

jane.getsMarried('Smith');
console.log(jane.getFullName());

console.log(jane.hasOwnProperty('firstn')); // returns bool
