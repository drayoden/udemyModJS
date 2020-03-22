
// ------- SYNCHRONOUS -------

const posts = [
    {title: 'one', body: 'this is post one'},
    {title: 'two', body: 'this is post two'},
]; 

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 1100);
// }

// function getPosts() {
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'three', body: 'this is post three'});
// getPosts(); 


/*
NOTE: the setTimeouts are a representaion of server latency

Sychronous (no callback) - if timeout on createPost is less than or 
equal to the timeout on getPosts, it will work. But if timeout on 
createPost is greater, post three will not be placed in the array in
time.

Asychronous (with callbacks, below) - now with callbacks, the timeout
value (server latency) no longer matters. It will correctly in the combined 
sum of timeout values regardless of which one is greater.

*/


// ------- ASYNCHRONOUS -------


function createPost(post, callback) {                   // **** pass in a callback to createPost 
    setTimeout(function() {
        posts.push(post);
        callback();                                     // **** runs the callback function
    }, 1000);
}

function getPosts() {
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 3000);
}

createPost({title: 'three', body: 'this is post three'}, getPosts);     // ****  pass getPost as the callback function
                                                                        // ****  no need to explicitly run getPosts
