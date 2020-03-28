const user = {email: "moosetoes@bugus.net"}


try {
    // ref error
    // myFunc();

    // type error
    // null.myFunc();

    // syntax error
    // console.log(eval('2 + 2')); // this works, eval evaluates the string as JS
    // eval('Hello World');

    // URI error
    // decodeURIComponent('%');

    // create your own error:
    if(!user.name) {
        // throw 'User does not have name attribute...' // create your own error (no line number info)
        throw new SyntaxError('User does not have name attribute...'); // create your own syntax error (with line number info)
    }

} catch(e) {
    
    // --- created your own error (user)
    // console.log(e);
    console.log(`User error: ${e.message}`); // custom error message
    
    // URI error
    // console.log(e);
    
    // --- syntax error
    // console.log(e);

    // --- type error
    // console.log("Hey, Mooses are null!")    // don't have to process the erorr(e) at all
                                            // can handle it internally or display it to the DOM,
                                            // whatever you want.
    // console.log(`${e.name}: Whoa!, Mooses are null!`);

    // --- ref error
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);  // bool test for 'name'
} finally {
    // this runs regardles of error
    console.log("Finally...");
}



// try/catch will allow program flow
// to continue and allows the dev
// to handle it anyway they want:
console.log("Program continues...")