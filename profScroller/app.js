const data = [
    {
        name: 'Fuzzy Toes',
        age: 3.5,
        gender: 'male', 
        location: 'under stairs',
        image: 'https://cataas.com/cat/5e2ebb6a4348da001c78fb8b'
    },
    {
        name: 'Moose Buns',
        age: 2,
        gender: 'female', 
        location: 'top of fridge',
        image: 'https://cataas.com/cat/5e2b4b644348da001c78fb89'
    }, 
    {
        name: 'Mr. Toes',
        age: 6,
        gender: 'male', 
        location: 'on lap',
        image: 'https://cataas.com/cat/5e32f1594348da001c78fb8d'
    }, 
    {
        name: 'Big Steve',
        age: 10,
        gender: 'male', 
        location: 'next to dog',
        image: 'https://cataas.com/cat/5da89e96a85b6600185f3546'
    }
]; 

const profiles = profileIter(data);

// get first profile
nextProfile();

// next event...
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display...
function nextProfile() {

    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        </ul>`;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // no more profiles
        window.location.reload();
    }
}


// profile iterator...
function profileIter(profiles) {
    let nextindex = 0;
    return {
        next: function() {
            return nextindex < profiles.length ? {value: profiles[nextindex++], done: false} :
            { done: true }
        }
    };
}