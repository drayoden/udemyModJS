
 
async function getUser(url) {
    
    const paToken = '';
    
    const r = await fetch(url, {
        method: 'GET',
        headers: {"Authorization": `token ${paToken}`},

    });
    
    const p = await r.json();
    return {p};
}


getUser('https://api.github.com/users/dzz3')
    .then(data => console.log(data.p.message));


