// person constructor

function Person(name,dob) {
    this.name = name; 
    this.birthday = new Date(dob);
    this.calcAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const chad = new Person('chad', '9-10-89');
const john = new Person('john', '8/23/56'); 

console.log(chad.calcAge());
console.log(john.calcAge());

