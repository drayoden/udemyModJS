// NOTE: The process Brad uses to authenticate (oauth) in the course will be
// depricated in November 2020. I switched to using a 'personal access token'
// (paTok) instead of client_id and client_secret in the query string. 


class Github {
    constructor() {
        this.paTok = '';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
            method: 'GET',
            headers: {"Authorization": `token ${this.paTok}`},
        });
 
        const profile = await profileResponse.json();
        return { profile }
    }
}



// https://api.github.com/users/drayoden
// https://api.github.com/users/drayoden/repos
