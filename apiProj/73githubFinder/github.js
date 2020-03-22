// NOTE: The process Brad uses to authenticate (oauth) in the course will be
// depricated in November 2020. I switched to using a 'personal access token'
// (paTok) instead of 'client_id' and 'client_secret' in the query string. 


class Github {
    constructor() {
        fetch('local.json')
            .then(r => r.json())
            .then(d => this.paTok = d.paToken)
            .catch(e => console.log(e));
        this.repos_count = 5; 
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
            method: 'GET',
            headers: {"Authorization": `token ${this.paTok}`},
        });

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.repos_sort}&per_page=${this.repos_count}`, {
            method: 'GET',
            headers: {"Authorization": `token ${this.paTok}`},
        });

 
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return { profile, repos }
    }
}



// https://api.github.com/users/drayoden
// https://api.github.com/users/drayoden/repos
