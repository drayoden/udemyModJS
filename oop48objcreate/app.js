const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.fn} ${this.ln}`;
    }, 
    getsMarried: function(newLn){
        this.ln = newLn
    }
}

const mary = Object.create(personPrototypes);

mary.fn = 'Mary';
mary.ln = 'Jones';
mary.age = 34;

console.log(mary.greeting());

mary.getsMarried('Skallywag');

console.log(mary.greeting());

const stormy = Object.create(personPrototypes, {
    fn: {value: 'Stormy'}, 
    ln: {value: 'Fuzztoes'},
    age: {value: 3}
}); 

console.log(stormy);
console.log(stormy.greeting());