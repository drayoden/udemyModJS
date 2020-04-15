// ES7 version of easyhttp lib with fetch and async/await

class EasyHTTP {

    // get request method
    async get(url) {
        const res = await fetch(url); 
        const data = await res.json();
        return data;
    }
        

    // post request method
    async post(url, data){
        const res = await fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })

        const rdata = await res.json();
        return rdata;
    }

    // put (update) request method
    async put(url, data){
        const res = await fetch(url, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })

        const rdata = await res.json();
        return rdata;
    }

    // delete request method
    async delete(url){
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
        })

        const rdata = await 'Deleted successfully...'; 
        return rdata;
    }
}

export const http = new EasyHTTP();












// ~~~~~~~~~~~~~~~~~~~~~ Original library below ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function easyHTTP() {
//     this.http = new XMLHttpRequest();
// }

// // HTTP GET request
// easyHTTP.prototype.get = function(url, cb) {    // set callback
//     this.http.open('GET', url, true);
//     let self = this;                            // needed or get type error
//     this.http.onload = function(){
//         if(self.http.status === 200) {
//             cb(null, self.http.responseText);         // call calback
//         } else {
//             cb('Error: ' + self.http.status); 
//         }
//     }

//     this.http.send(); 
// }

// // HTTP POST request
// easyHTTP.prototype.post = function(url, data, cb){
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;                            // needed or get type error
//     this.http.onload = function(){
//         cb(null, self.http.responseText);         // call calback
//     }
//     this.http.send(JSON.stringify(data));
// }


// // HTTP PUT request
// easyHTTP.prototype.put = function(url, data, cb){
//     this.http.open('PUT', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;                            // needed or get type error
//     this.http.onload = function(){
//         cb(null, self.http.responseText);         // call calback
//     }
//     this.http.send(JSON.stringify(data));
// }

// // HTTP DELETE request
// // need to run chrome from terminal to see this work otherwise throws a CORS error:
// // google-chrome --disable-web-security --user-data-dir="/tmp/chrome_tmp"
// easyHTTP.prototype.delete = function(url, cb) {    // set callback
//     this.http.open('DELETE', url, true);
//     let self = this;                            // needed or get type error
//     this.http.onload = function(){
//         if(self.http.status === 200) {
//             cb(null, 'Post Deleted...');         // call calback
//         } else {
//             cb('Error: ' + self.http.status); 
//         }
//     }

//     this.http.send(); 
// }