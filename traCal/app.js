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

        getItemById: function(id) {
            let found = null;

            // loop through items
            data.items.forEach(function(item) {
                if (item.id === id) {
                    found = item;
                }
            });
            return found; 
        },

        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getCurrentItem: function() {
            return data.currentItem;
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
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
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
        }, 

        clearEditState: function() {
            UICtrl.clearInputs();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        }, 

        showEditState: function() {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        }, 


        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
         }

    }

})(); 






// ~~~~~~~~~~~~~~~~~~~~~~ app controller
const App = (function(ItemCtrl,UICtrl) {
    
    // load eventlisteners
    const loadEventListeners = function() {
        const UISelectors = UICtrl.getSelectors();

        // add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', ItemAddSubmit);
        
        // edit item event - must use event delegation because this is dynamically loaded after an
        // item is added - this targets the ul only - remaining logic in callback.
        document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);

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

    // update item submit
    const itemUpdateSubmit = function(e) {
        
        // targets the 'pencil' icon with class '.edit-item' -- see commented html
        if(e.target.classList.contains('edit-item')){
            
            // get list item ID -- this targets the parent->parent 'li'->'id' attribute
            const listId = e.target.parentNode.parentNode.id;
            
            // get only the digit from the listID - id="item-x"
            // REMEMBER TO parseInt anything returned from the DOM if not a string!
            const id = parseInt(listId.split('-')[1]);
            
            // get the item by id
            const itemToEdit = ItemCtrl.getItemById(id);
            
            // set the currentItem
            ItemCtrl.setCurrentItem(itemToEdit);

            // add item to form 
            UICtrl.addItemToForm();
        }


        e.preventDefault();
    }



    // public method
    return {
        init: function() {
           
            // clear edit state / set init state
            UICtrl.clearEditState(); 

            // fetch items from data structure
            const items = ItemCtrl.getItems();

            // check if any items exist
            if(items.length === 0 ) {
                UICtrl.hideList();
            } else {
               // populate list with items
               UICtrl.populateItemList(items);
            }

            // get total calories
            const totalCalories = ItemCtrl.getTotalCalories(); 

            // add total calories to DOM
            UICtrl.showTotalCalories(totalCalories);
 
            // load event listeners
            loadEventListeners();
        }
    }
})(ItemCtrl,UICtrl); 


// init app
App.init();