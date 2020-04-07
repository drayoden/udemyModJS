// ~~~~~~~~~~~~~~~~~~~~~~ storate contoller






// ~~~~~~~~~~~~~~~~~~~~~~ item controller
const ItemCtrl = (function() {

    // constructor
    const Item = function(id,name,cal){
        this.id = id; 
        this.name = name; 
        this.calories = cal;
    }

    // data structure/state
    const data = {
        items: [
            // {id:0,name: 'Fish Dinner', calories:1200},
            // {id:1,name: 'Scone', calories:400},
            // {id:2,name: 'Tootsie Rool', calories:300},
        ],
        currentItem: null,
        totalCal: 0
    }

    // public return
    return {
        getItems: function() {

            return data.items;
        },

        addItem: function(name, cal) {
            
            // create ID - auto increment
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0; 
            }

            // calories to number
            const calories = parseInt(cal);

            // create new item
            newItem = new Item(ID, name, calories);

            // add to items array
            data.items.push(newItem);

            return newItem;
        },

        getTotalCalories: function() {
            let total = 0;

            // add all calories from data.items:
            data.items.forEach(function(item){
                total += item.calories; 
            });

            // set totalcal in data structure
            data.totalCal = total;

            // return total
            return data.totalCal;
        },

        
        logData: function() {
            return data;
        }
    }
})(); 







// ~~~~~~~~~~~~~~~~~~~~~~ UI controller
const UICtrl = (function() {
    
    // central control of any selectors 
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCalInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    // public return
    return {

        populateItemList: function(items) {
            let html = ``;
            items.forEach(function(item) {
                html += 
                `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong><em>${item.calories} Calories</em>
                    <a href="" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                </li>
                `
            });
 
            // insert list items into DOM
            document.querySelector(UISelectors.itemList).innerHTML = html; 
        },

        // make selectors public
        getSelectors: function() {
            return UISelectors;
        }, 

        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCalInput).value
            }
        }, 

        addListItem: function(item) {
            // show list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            
            // create li element
            const li = document.createElement('li');
            
            // set class
            li.className = 'collection-item';

            // set item id
            li.id = `item-${item.id}`;

            // set remaining html
            li.innerHTML = 
            `
            <strong>${item.name}: </strong><em>${item.calories} Calories</em>
            <a href="" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            `;
            
            // insert item in DOM
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);

        }, 

        clearInputs: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCalInput).value = '';
        }, 

        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        }, 

        showTotalCalories: function(totalCalories) {
            //  console.log(totalCalories);
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories; 
        }

    }

})(); 






// ~~~~~~~~~~~~~~~~~~~~~~ app controller
const App = (function(ItemCtrl,UICtrl) {
    
    // load eventlisteners
    const loadEventListeners = function() {
        const UISelectors = UICtrl.getSelectors();

        // add events
        document.querySelector(UISelectors.addBtn).addEventListener('click', ItemAddSubmit);

    }


    // event methods
    const ItemAddSubmit = function(e) {
        
        // get form input from UI controller
        const input = UICtrl.getItemInput();
        
        // validate item/calorie input
        if(input.name !== '' &&  input.calories !== '') {
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            // add item to UI
            UICtrl.addListItem(newItem);

            // get total calories
            const totalCalories = ItemCtrl.getTotalCalories(); 

            // add total calories to DOM
            UICtrl.showTotalCalories(totalCalories);

            // clear inputs
            UICtrl.clearInputs();
        }
        e.preventDefault();
    }



    // public method
    return {
        init: function() {
           
            // fetch items from data structure
            const items = ItemCtrl.getItems();

            // check if any items exist
            if(items.length === 0 ) {
                UICtrl.hideList();
            } else {
               // populate list with items
               UICtrl.populateItemList(items);
            }

 
            // load event listeners
            loadEventListeners();
        }
    }
})(ItemCtrl,UICtrl); 


// init app
App.init();