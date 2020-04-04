// ES6 introduces modules but browsers do not implement it yet.

// basic structure
// (function() {
//     // declare private vars and funcs


//     return {
//         // declare public var and funcs
//     }

// })();

// -------------- standard module pattern ----------------------
// const UICtrl = (function(){

//     // private stuff
//     let text = 'Hello World'; 
   
//     const changeText = function() {
//         const element = document.querySelector('h4');
//         element.textContent = text;
//     }


//     // public exposed stuff in the return
//     return{
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();  // returns 'Hello World' (public function)
// console.log(UICtrl.text); // returns undefined (private attribute)
// UICtrl.changeText(); // returns a TypeError: changeText is not a function (private fuction)



// ----------------- revealing module pattern ----------------------

const ItemCtrl = (function() {
    
    // private
    let data = [];    // private vars may be like '_data' (underscore)

    function add(item) {
        data.push(item);
        console.log('Item Added...');
    }

    function get(id) {
        return data.find(item =>{
            return item.id === id; 
        }); 
    }

    // public - this time we 'reveal' or make private functions (add, get) public
    return {
        add: add, 
        get: get,
    }
})();

ItemCtrl.add({ id: 1, name: 'Stormy'}); // Item Added...
ItemCtrl.add({ id: 2, name: 'Forrest'}); // Item Added...
console.log(ItemCtrl.get(1)); // returns the object with id = 1
console.log(ItemCtrl.get(2)); // returns the object with id = 2

