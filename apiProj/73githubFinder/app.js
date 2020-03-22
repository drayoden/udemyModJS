// init classes
const github = new Github;
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    
     

    if (userText !== ''){
        
        // http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message == 'Not Found') {
                    console.log(data.profile.message);
                } else {
                    console.log(data.profile.id, data.profile.login);
                }
            })
    } else {
        // clear profile in UI
    }
});