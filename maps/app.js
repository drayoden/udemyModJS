// maps = key/value pair - can use ANY type as key or value

const map1 = new Map();

// set keys
const key1 = "some string",
      key2 = {};
      key3 = function() {};

// set map values by key
map1.set(key1, "key1 val");
map1.set(key2, "key2 val");
map1.set(key3, "key3 val");

// get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// count values
console.log(map1.size);
console.log('------------------- 1');

// map iterating

// for...of to get keys and values
for (let [k,v] of map1) {
    console.log(`${k} = ${v}`)
}

console.log('------------------- 2');

// keys only...
for (let k of map1.keys()) {
    console.log(k);
}

console.log('------------------- 3');

// values only... 
for (let v of map1.values()) {
    console.log(v);
}
console.log('------------------- 4');

// for...each
map1.forEach(function(v,k) {
    console.log(`${k} = ${v}`)
});

// convert to array

// array of k/v pairs
console.log('------------------- 5');

const kvArr = Array.from(map1);
console.log(kvArr);
console.log('------------------- 6');

// array of vals
const vArr = Array.from(map1.values());
console.log(vArr);
console.log('------------------- 7');

// array of keys
const kArr = Array.from(map1.keys());
console.log(kArr);
console.log('------------------- 8');



