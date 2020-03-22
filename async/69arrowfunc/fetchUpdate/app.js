// Fetch API - the new standard to may HTTP requests
// and the fetch API returns a promise.
// this version now has arrow '=>' functions 

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
    fetch('test.txt')
        .then(r => r.text())
        
        .then(d => {
            document.getElementById('output').innerHTML = d;
        })
        
        .catch(e => console.log(e));
}

function getJSON() {
    fetch('posts.json')
        .then(r => r.json())
        
        .then(d => {
            let output = '';
            d.forEach(function(post){
                output += `<li>${post.title}</li>`;
            }); 
            document.getElementById('output').innerHTML = output;
        })
        
        .catch(e => console.log(e)); 
        
}

function getExternal() {
    fetch('https://api.github.com/users')
        .then(r => r.json())
        
        .then(d => {
            let output = '';
            d.forEach(function(user, index){
                output += `<li>[${index+1}] -- ${user.login}</li>`;
            }); 
            document.getElementById('output').innerHTML = output;
        })

        .catch(e => console.log(e));
}
