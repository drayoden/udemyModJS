let re;

re = /hello/;  // literal value

console.log(re);
console.log(re.source);

// exec() - returns result in an array or null
// const result = re.exec('hello world');
// console.log(result);

// ["hello", index: 0, input: "hello world", groups: undefined]
// 0: "hello"
// index: 0
// input: "hello world"
// groups: undefined
// length: 1
// __proto__: Array(0)

// --- index changes...

const result = re.exec('mooses hello world');
console.log(result);
console.log(result[0]); // get first array item
console.log(result.index);

// ["hello", index: 7, input: "mooses hello world", groups: undefined]
// 0: "hello"
// index: 7
// input: "mooses hello world"
// groups: undefined
// length: 1
// __proto__: Array(0)

// --- null result because it it looking for the literal 'hello'

// const result = re.exec('hi world');
// console.log(result);

// null
