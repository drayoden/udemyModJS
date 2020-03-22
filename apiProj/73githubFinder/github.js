class Github {
    constructor() {
        this.paTok = 'a115ec2a90bdf682f9571e1db2c066b1862df320';
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
