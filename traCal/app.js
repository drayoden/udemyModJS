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

        updateItem: function(name, calories) {
            // calories to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });

            return found; 
        },

        deleteItem: function(id) {

            // get ids 
            ids = data.items.map(function(item) {
                return item.id
            });

            // get index
            const index = ids.indexOf(id);

            // remove item
            data.items.splice(index, 1);


        },

        clearAllListItems: function() {
            data.items = [];
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
        itemList:       '#item-list',
        addBtn:         '.add-btn',
        updateBtn:      '.update-btn',
        deleteBtn:      '.delete-btn',
        backBtn:        '.back-btn',
        itemNameInput:  '#item-name',
        itemCalInput:   '#item-calories',
        totalCalories:  '.total-calories',
        listItems:      '#item-list li',
        clearBtn:       '.clear-btn'
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

        updateListItem: function(item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // convert node list to an array
            listItems = Array.from(listItems);


            // loop through
            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`) {
                    document.queclearBtnrySelector(`#${itemID}`).innerHTML = 
                    `
                    <strong>${item.name}: </strong><em>${item.calories} Calories</em>
                    <a href="" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    `; 
                }
            });
        },

        deleteListItem: function(id) {
            const itemID = `#item-${id}`; 
            const item = document.querySelector(itemID);
            item.remove();
        },

        removeItems: function() {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // convert node list to array
            listItems = Array.from(listItems);

            listItems.forEach(function(item) {
                item.remove();
            })
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

        // disable submit on enter - when editing an item if engter is pressed it adds that item to the list again
        document.addEventListener('keypress', function(e) {
            if(e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });
        

        // edit item event - (<i> pencil icon) must use event delegation because this is dynamically loaded after an
        // item is added - this targets the ul only - remaining logic in callback.
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        // delete item event 
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // clear all event -> button in nav bar right side
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItems);



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

    // item submit
    const itemEditClick = function(e) {
        

        // targets the 'pencil' icon with class '.edit-item' -- see commented html
        if(e.target.classList.contains('edit-item')){
            
            // get list item ID -- this targets the parent->parent: (<a> -> li'->'id') attribute
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

    // update item submit
    const itemUpdateSubmit = function(e) {

        // get item input
        const input = UICtrl.getItemInput();

        // update item
        const updatedItem = ItemCtrl.updateItem(input.name,input.calories);

        // update the UI
        UICtrl.updateListItem(updatedItem);

        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories(); 

        // add total calories to DOM
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    // delete item submit
    const itemDeleteSubmit = function(e) {
        // get item id from currentItem
        const currentItem = ItemCtrl.getCurrentItem();

        // delete item from data structure
        ItemCtrl.deleteItem(currentItem.id); 

        // delete from UI
        UICtrl.deleteListItem(currentItem.id);

        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories(); 

        // add total calories to DOM
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    // clear all items
    const clearAllItems = function() {
        // delete all items from data structure
        ItemCtrl.clearAllListItems(); 

        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories(); 

        // add total calories to DOM
        UICtrl.showTotalCalories(totalCalories);


        // remove all items from UI
        UICtrl.removeItems();

        // hide the ul
        UICtrl.hideList();


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