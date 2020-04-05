// mediator - interface with 'colleagues' like a chat room.
// NOTE: Brad is using the ES5 OOP here, feel free to use 
// the ES6 OOP (classes) ("syntactic sugar")

// the chatroom is the mediator and the users are colleagues.


const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    
    send: function(msg, to) {
        this.chatroom.send(msg,this,to);
    },
    
    recieve: function(msg,from) {
        console.log(`${from.name} to ${this.name}: ${msg}`)
    }
}

const Chatroom = function() {
    let users = {};  // list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this; 
            console.log(`${user.name} has been registered...`);
        },

        send: function(msg,from,to) {
            if(to) {
                // single user msg
                to.recieve(msg,from);
            } else {
                // multiple recipients
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].recieve(msg,from);
                    }
                }
            }
        }

    }
}

// users...
const stormy = new User('stormy');
const forrest = new User('forrest');
const tinny = new User('tinny');

// chatroom...
const chatroom = new Chatroom();

// register users...
chatroom.register(stormy);
chatroom.register(forrest);
chatroom.register(tinny);


// users send/receive, etc...
stormy.send('hello forrest, stop bullying me!',forrest);
forrest.send('stop being a wimp, I am not bullying you!',stormy);
tinny.send('Both of you stop it all or I will, and if I do you will not like it!');