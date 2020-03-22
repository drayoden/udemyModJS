// ES5 OOP wiht prototypes library - ES6 with fetch and promises is in Part3


function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// HTTP GET request
easyHTTP.prototype.get = function(url, cb) {    // set callback
    this.http.open('GET', url, true);
    let self = this;                            // needed or get type error
    this.http.onload = function(){
        if(self.http.status === 200) {
            cb(null, self.http.responseText);         // call calback
        } else {
            cb('Error: ' + self.http.status); 
        }
    }

    this.http.send(); 
}

// HTTP POST request
easyHTTP.prototype.post = function(url, data, cb){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;                            // needed or get type error
    this.http.onload = function(){
        cb(null, self.http.responseText);         // call calback
    }
    this.http.send(JSON.stringify(data));
}


// HTTP PUT request
easyHTTP.prototype.put = function(url, data, cb){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;                            // needed or get type error
    this.http.onload = function(){
        cb(null, self.http.responseText);         // call calback
    }
    this.http.send(JSON.stringify(data));
}

// HTTP DELETE request
// need to run chrome from terminal to see this work otherwise throws a CORS error:
// google-chrome --disable-web-security --user-data-dir="/tmp/chrome_tmp"
easyHTTP.prototype.delete = function(url, cb) {    // set callback
    this.http.open('DELETE', url, true);
    let self = this;                            // needed or get type error
    this.http.onload = function(){
        if(self.http.status === 200) {
            cb(null, 'Post Deleted...');         // call calback
        } else {
            cb('Error: ' + self.http.status); 
        }
    }

    this.http.send(); 
}