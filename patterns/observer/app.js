// observer - allows you to subscribe/unsubscribe to events or functionallity
// 'subscription model'

// ES5 base oop function way...
// NOTE: change <script> tag in index.html to use this or appES6.js


function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(function(item){
            if(item != fn) {
                return item;
            }
        });
        console.log(`You are now UNsubscribed to ${fn.name}`);
    }, 

    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}

const click = new EventObserver();

// event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

// click handlers
const getCurrMilliseconds = function() {
    console.log(`Current ms: ${new Date().getMilliseconds()}`); 
}

const getCurrSeconds = function() {
    console.log(`Current sec: ${new Date().getSeconds()}`); 
}
