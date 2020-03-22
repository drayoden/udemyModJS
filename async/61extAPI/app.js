// listener...
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const num = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);

    xhr.send();

    xhr.onload = function() {
        if (this.status === 200) {
            const resp = JSON.parse(this.responseText);
            
            let output = '';

            if(resp.type === 'success'){
                resp.value.forEach(function(joke,index){
                    output += `<li>[${index+1}] -- ${joke.joke}</li>`;
                });
            } else {
                output += '<li>Houston, we have a prolem...</li>'
            }

            document.querySelector('.jokes').innerHTML = output
        }
    }
    
    e.preventDefault();
}