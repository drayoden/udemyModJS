document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUsers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    
    xhr.onload = function() {
        if(this.status === 200){
            // console.log(this.responseText);

            const users = JSON.parse(this.responseText);  // allows regular use of JSON objects...
            
            let output = '';

            users.forEach(function(user) {
                output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Company: ${user.company}</li>
                    <li>Phone: ${user.phone}</li>
                </ul><hr>
            `;
                
            });
            
            
            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}


function loadUser(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    
    xhr.onload = function() {
        if(this.status === 200){
            // console.log(this.responseText);

            const user = JSON.parse(this.responseText);  // allows regular use of JSON objects...
            
            const output = `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Company: ${user.company}</li>
                    <li>Phone: ${user.phone}</li>
                </ul>
            `;

            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
}

// NOTE: use jsonlint.com to validate JSON files.