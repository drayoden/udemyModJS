// original callbacks demo with promises
// included in the ASYNCHRONOUS section was 
// modified to use promises instead of callbacks.



const posts = [
    {title: 'one', body: 'this is post one'},
    {title: 'two', body: 'this is post two'},
]; 

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


function createPost(post) {        // **** pass in a callback to createPost 
    return new Promise(function(resolve,reject){                            // *** resolve, reject. 
        setTimeout(function() {                                             // reject is called when an error is raised    
            posts.push(post); 
            
            // simple error test:
            const error = true;        // change true/false to see error handling demo
            if(!error) {
                resolve();
            } else {
                reject('Houston, we have a problem...');                    // .catch displays error at bottom                                                  
            }

        }, 2000);
    });
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

createPost({title: 'three', body: 'this is post three'})
    .then(getPosts)     // *** .then calls getPosts here
    .catch(function(e){
        console.log(e);
    });
