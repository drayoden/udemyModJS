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
                    // show alert
                } else {
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // clear profile in UI
    }
});