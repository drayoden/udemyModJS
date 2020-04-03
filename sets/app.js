// sets - store unique values of any type


const set1 = new Set();

// add values to set
set1.add(100);
set1.add("string");
set1.add({name: 'Mooose toes'});
set1.add(true);

console.log(set1);
console.log("---------------------- 1");

set1.add(100);  // this does nothing since 100 already exists

// another way to create a set...
const set2 = new Set([1,false,"Moose nose"]);
console.log(set2);
console.log("---------------------- 2");

// size
console.log(set1.size);

// check for a value...
console.log(set1.has(100));
console.log(set1.has(50+50));
console.log(set1.has({name: 'Moose toes'})); // false because an object is a reference (pointer) only, not the actual object.
console.log("---------------------- 3");

// delete from set
set1.delete(100);
console.log(set1);
console.log("---------------------- 4");

// iterate - for...of
for (let item of set1) {  // can also use set1.values(), set1.keys(), set1.entries()
    console.log(item);
}
console.log("---------------------- 5");

// iterate - forEach
set1.forEach((value) => {
    console.log(value);
})
console.log("---------------------- 6");


// convert to array

const setArr = Array.from(set1);
console.log(setArr);
