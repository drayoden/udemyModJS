// using fake JSON API: https://jsonplaceholder.typicode.com/posts


const http = new easyHTTP;

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, r){
//      if(err) {
//          console.log(err);
//      } else {
//         console.log(r);
//      }
// }); 

// get post (1)
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, r){
//      if(err) {
//          console.log(err);
//      } else {
//         console.log(r);
//      }
// }); 

// post request
// const data = {
//     title: 'Custom post',
//     body: 'this is custom post'
// };
//                                                             // cb below - 'function'
// http.post('https://jsonplaceholder.typicode.com/posts',data, function(err,post) {

//      if(err) {
//          console.log(err);
//      } else {
//         console.log(post);
//      }
// }); 

// put (change/update existing data) request 
// const data = {
//     title: 'changed post',
//     body: 'this is a changed post'
// };
//                                                             // cb below - 'function'
// http.put('https://jsonplaceholder.typicode.com/posts/37',data, function(err,post) {

//      if(err) {
//          console.log(err);
//      } else {
//         console.log(post);
//      }
// }); 

// delete request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, r){
     if(err) {
         console.log(err);
     } else {
        console.log(r);
     }
}); 

