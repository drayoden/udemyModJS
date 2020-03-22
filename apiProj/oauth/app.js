
 
async function getUser(url) {
    
    const paToken = 'a115ec2a90bdf682f9571e1db2c066b1862df320';
    
    const r = await fetch(url, {
        method: 'GET',
        headers: {"Authorization": `token ${paToken}`},

    });
    
    const p = await r.json();
    return {p};
}


getUser('https://api.github.com/users/dzz3')
    .then(data => console.log(data.p.message));


// personal access token:
// a115ec2a90bdf682f9571e1db2c066b1862df320
        