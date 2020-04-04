// observer - allows you to subscribe/unsubscribe to events or functionallity
// 'subscription model'

// Turn ES5 base oop into ES6 classes:
// NOTE: change <script> tag in index.html to use this or app.js


class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {

        // Filter out from the list a matching callback function. 
        // If there is no match, the callback simply stays on the 
        // list, thus is still in play to be 'fired'. The filter
        // returns a new list and reassigns the list of observers.
        
        this.observers = this.observers.filter(function(item){
            if(item != fn) {
                return item;
            }
        });
        console.log(`You are now UNsubscribed to ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}


// --------- orginal prototype (ES5) base oop. All 'method' functionallity
// has bee moved to the class above.  See app.js

// EventObserver.prototype = {
//     subscribe: function(fn) {
//     },
    
//     unsubscribe: function(fn) {
//      }, 

//     fire: function() {
//         });
//     }
// }

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
