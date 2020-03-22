
// async function myFunc() {   // 'async' makes the function return a promise see console.
//     const pr = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 3000);
//     });

//     // error
//     const error = true;
    
//     if (!error){
//         const res = await pr;
//         return res;
//     } else {
//         await Promise.reject(new Error('Houston, we have a problem'));
//     }

//     // const res = await pr;   // waits until the promise is resolved (timeout)
//     // return res;
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));



// using async with fetch
async function getUsers() {
    
    // await the response of the fetch call
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once fetch is resolved
    const data = await res.json();

    // only proceed once second promise (await) is reolved
    return data;
}

getUsers().then(users => console.log(users));