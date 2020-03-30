// Iterator

// function nameIterator(names) {
//     nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length ?
//             { value: names[nextIndex++], done: false} :
//             { done: true}
//         }
//     }
// }

// // array of names...
// const namesArr = [ 'jack', 'jill', 'mooseface' ]; 

// // init iterator with names array...
// const names = nameIterator(namesArr);

// // iterate through array...
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());




// // Generator - kind of a shorthave version of an iterator (see console)
// // also not the 'function*' - specifies a generator
// function* sayNames() {
//     yield 'jack';
//     yield 'jill';
//     yield 'mooseface';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());




// Generator to generate IDs
function* createIds(){
    let index = 100; 

    while(true) {
        yield index += 20;
    }
}

const gen = createIds(); 

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


