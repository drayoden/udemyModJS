// button eventlistener

document.getElementById('button').addEventListener('click' ,loadData);

function loadData(){

    // create xhr object
    const xhr = new XMLHttpRequest();

    // open
    xhr.open('GET', 'data.txt', true);

    console.log('READYSTATE', xhr.readyState);  // --> READYSTATE 1

    // used for spinners/loaders/progress objects:
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);  // --> READYSTATE 3
    }


    // do something with the data
    // NOTE 'onload' is realatively new and repesents readyState 2 - 4.
    //      In the past you would test the readyState for a value of 4
    //      see other example below of readyState.
    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`
        }
    }

    // error checking
    xhr.onerror = function(){
         console.log('Request error...');
    }


    // old way of testing readyState:
    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();
}


// HTTP Status:
// 200: OK
// 403: forbidden
// 404: not found

// XHR readyState values:
// 0: reqest not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready