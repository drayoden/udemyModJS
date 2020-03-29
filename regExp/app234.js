let re;

// --- --- shorthand char classes --- --- 
// re =/x(?!y)/;  // assersion - match x only if NOT followed by y
// const str = 'lksjdlfkjxy lksjdflkjxy'; // NO match
// const str = 'lksjdlfkjx lksjdflkjxy'; // match first x

// re =/x(?=y)/;  // assersion - match x only if followed by y
// const str = 'mooses xy'; // match
// const str = 'yx'; // NO match
// const str = 'x'; // NO match

// re =/Hell\b/i;  // \b match word boundry
// const str = 'Hello welcome!'; // NO match
// const str = 'Hello welcome to hell'; // match 'hell'

// re =/\S/;  // match non- whitespace chars
// re =/\s/;  // match whitespace chars
// const str = 'moose'; // NO match 
// const str = 'The moose is b1g'; // matched first space 

// re =/\D/;  // matches non-digit chars
// const str = 'The moose is b1g'; // matched '1' in 'b1g' 
// const str = '38zzz288'; // match zzz 
// const str = '3838288'; // NO match

// re =/\d+/;  // matches one or more digits 
// const str = 'Mooses are cute'; // NO match
// const str = 'M00ses are 7'; // match
// const str = 'mooses'; // NO match
// const str = 'mo0ses'; // match

// re =/\d/;  // matches any digit
// const str = 'mooses'; // NO match
// const str = '5'; // match first digit
// const str = 'c3c'; // match first digit

// re =/\W/;  // matches everything except letters, numbers, or underscore 
// const str = '789w'; // NO match
// const str = '789w'; // NO match
// const str = ' '; // match
// const str = '!'; // match

// re =/\w+/;  // matches one or more work char - letters, numbers, or underscore 
// const str = '!'; // NO match
// const str = ' '; // NO match
// const str = '7xx8xx 67x7'; // match

// re =/\w/;  // word char - alphanumeric (letters, numbers, or underscore) only matches first char
// const str = '?xx'; // match
// const str = 'xxx xxx'; // match
// const str = 'xxx'; // match




// --- --- parens () - grouping - just like formula presidense --- --- 
// re =/([0-9]x){3}/;  // match 'numx' - 3 times
// const str = '9x1x0123x'; // NO match
// const str = '9x12345x0x'; // NO match
// const str = '9083x1x0x'; // match
// const str = 'x1x0x'; // NO match
// const str = '9x1x0x'; // match
// const str = '3x9x1x'; // match

// re =/[0-9]x{3}/;  // match any number before 3 x
// const str = '1xxx';  // match





// --- --- braces {} - quantifiers  --- --- 
// re =/Hel{2,}o/i;  // matching 2 or MORE 'l' - previous char
// const str = 'Hellllllllllllo';  // match
//const str = 'Hello';  // match
// const str = 'Helo';  // NO match

// re =/Hel{2,4}o/i;  // matching 2 to 4 'l' - previous char
// const str = 'Hello';  // match
// const str = 'Helo';  // NO match
// const str = 'Hellllo';  // match
// const str = 'Helllo';  // match

// re =/Hel{2}o/i;  // matching 2 'l' - previous char
// const str = 'Helllo';  // NO match
// const str = 'Helo';  // NO match
// const str = 'Hello';  // match





// --- --- brackets [] - character sets --- --- 
// re =/[0-9]rey/; match any digit before 'rey'
// re =/[A-Za-z]rey/; string must contain any char (no nums or symbols) before 'rey'
// re =/[A-Z]rey/;  // '[]' string must contain with any uppercase char before 'rey'
// const str = 'bljsXrey'; // match; 'rey' is prefixed with uppercase char
// re =/^[GF]rey/;  // '[]' string must contain G OR F before 'rey'
// re =/[^GF]rey/;  // '[]' the character must NOT be G OR F
// const str = 'Xrey'; // match; not a G or F
// const str = 'Frey'; // NO match
// const str = 'Grey'; // NO match

// re =/[GF]rey/;  // '[]' the character must be G OR F - removed 'i'
// const str = 'rey'; // does NOT match
// const str = 'Frey'; // match
// const str = 'grey'; // does NOT match

// re =/gr[ae]y/i;  // '[]' the character must be a OR e
// const str = 'Gry?'; // does NOT match
// const str = 'Gray?'; // matches
// const str = 'Grey?'; // matches




// --- --- metacharacters --- --- 
// re =/grey\?/i;  // '\' esc char make the '?' a literal
// const str = 'Grey?'; // matches
// const str = 'Grey?'; // matches; y is optional not matching '?'

// 'grey' is sometimes spelled 'gray':
// re =/gre?a?y/i;  // '?' optional char
// const str = 'gry'; // matches; e and y are OPTIONAL
// const str = 'grZy';  // does NOT match
// const str = 'grAy';  // matches - 'i'
// const str = 'grEy';  // matches - 'i'
// const str = 'gray';  // matches
// const str = 'grey';  // matches

// re =/h*llo/i;  // '*' matches any char 0 or more times
// const str = 'hllo world';
// ~~~~~~ output ~~~~~~~~
// app2.js:83 ["hllo", index: 0, input: "hllo world", groups: undefined]
// app2.js:88 hllo world matched h*llo

// re =/h*llo/i;  // '*' matches any char 0 or more times
// const str = 'heello world';
// ~~~~~~ output ~~~~~~~~
// app2.js:76 ["llo", index: 3, input: "heello world", groups: undefined]
// app2.js:81 heello world matched h*llo

// re =/h.llo/i;  // '.' matches any ONE char
// const str = 'heello world';
// ~~~~~~ output ~~~~~~~~
// app2.js:70 null
// app2.js:77 heello world does NOT match h.llo

// re =/h.llo/i;  // '.' matches any ONE char
// const str = 'h3llo world';
// ~~~~~~ output ~~~~~~~~
// app2.js:62 ["h3llo", index: 0, input: "h3llo world", groups: undefined]
// app2.js:67 h3llo world matched h.llo

// re =/^world$/i;  // start and end with 'world'
// const str = 'World';
// ~~~~~~ output ~~~~~~~~
// app2.js:56 ["World", index: 0, input: "World", groups: undefined]
// app2.js:61 World matched ^world$

// re =/world$/i;  // '$' - must end with 'world' - 'i' - case insensitive
// const str = 'Hello moose World';
// ~~~~~~ output ~~~~~~~~
// app2.js:49 ["World", index: 12, input: "Hello moose World", groups: undefined]
// app2.js:54 Hello moose World matched world$

// re =/h$/i;  // '$' - must end with 'h'
// const str = 'Hello moose world';
// ~~~~~~ output ~~~~~~~~
// null
// app2.js:51 Hello moose world does NOT match h$

// re =/h$/i;  // '$' - must end with 'h'
// const str = 'Hello moose worldh';
// ~~~~~~ output ~~~~~~~~
// "h", index: 17, input: "Hello moose worldh", groups: undefined]
// app2.js:43 Hello moose worldh matched h$

// re =/^h/i;  // '^' - must start with 'h'
// const str = 'Hello moose world';
// ~~~~~~ output ~~~~~~~~
// ["H", index: 0, input: "Hello moose world", groups: undefined]
// app2.js:40 Hello moose world matched ^h

// re =/^h/i;  // '^' - must start with 'h'
// const str = 'moose hello world';
// ~~~~~~ output ~~~~~~~~
// null
// app2.js:34 moose hello world does NOT match ^h




// --- --- literal --- ---  
// re = /hello/i;  // 'i' - case insensitive
// const str = 'Hello World';
// ~~~~~~ output ~~~~~~~~
// ["Hello", index: 0, input: "Hello World", groups: undefined]
// app2.js:24 Hello World matched hello

// re = /hello/;
// const str = 'Hello World';
// ~~~~~~ output ~~~~~~~~
// null
// app2.js:19 Hello World does NOT match hello


const result = re.exec(str);
console.log(result);


function reTest(re, str){
    if (re.test(str)){
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }

}

reTest(re,str);