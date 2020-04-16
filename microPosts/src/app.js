import { http } from './http';
import { ui } from './ui';


// get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// listen for delete post
document.querySelector('#posts').addEventListener('click', deletePost);

// listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// listen for cancel edit
document.querySelector('.card-form').addEventListener('click', cancelEdit);




function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
        
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;

    const data = {
        title,
        body
    }


    // validate input
    if(title === '' || body === '') {
        ui.showAlert('Please fill in all fields','alert alert-danger');
    } else {

        // check for ID -- if blank create post
        if(id === '') {

            // crete post
            http.post('http://localhost:3000/posts', data)
                .then(data => {
                    ui.showAlert('Post added', 'alert alert-success'); 
                    ui.clearFields();
                    getPosts();
                })
                .catch(err => console.log(err));

        } else {   // update post -- put request
            
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data => {
                ui.showAlert('Post updated', 'alert alert-success'); 
                ui.changeFormState('add');
                getPosts();
            })
            .catch(err => console.log(err));

        }

    
    }

}

function deletePost(e) {
    e.preventDefault();

    if(e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if(confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post removed','alert alert-success');
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }
}

function enableEdit(e) {

    if(e.target.parentElement.classList.contains('edit')) {
        // console.log(e.target.parentElement.dataset.id);
        // console.log(e.target.parentElement.previousElementSibling.textContent);
        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        const id = e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent; 
        const body = e.target.parentElement.previousElementSibling.textContent; 

        const data = {
            id,
            title,
            body
        }

        // fill the form with current post
        ui.fillForm(data);



    }

    e.preventDefault();


}

// cancel edit state
function cancelEdit(e) {
    if(e.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
    e.preventDefault();
}