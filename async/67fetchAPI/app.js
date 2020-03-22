// Fetch API - the new standard to may HTTP requests
// and the fetch API returns a promise.

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
    fetch('test.txt')
        .then(function(r){
            return r.text();
        })
        .then(function(d){
            document.getElementById('output').innerHTML = d;
        })
        .catch(function(e){
            console.log(e)
        });
}

function getJSON() {
    fetch('posts.json')
        .then(function(r){
            return r.json();
        })
        .then(function(d){
            let output = '';
            d.forEach(function(post){
                output += `<li>${post.title}</li>`;
            }); 
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(e){
            console.log(e)
        });
}

function getExternal() {
    fetch('https://api.github.com/users')
        .then(function(r){
            return r.json();
        })
        .then(function(d){
            let output = '';
            d.forEach(function(user, index){
                output += `<li>[${index+1}] -- ${user.login}</li>`;
            }); 
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(e){
            console.log(e)
        });
}
