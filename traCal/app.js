// ~~~~~~~~~~~~~~~~~~~~~~ storate contoller






// ~~~~~~~~~~~~~~~~~~~~~~ item controller
const ItemCtrl = (function() {
    console.log('item controller...')

    // constructor
    const Item = function(id,name,cal){
        this.id = id; 
        this.name = name; 
        this.cal = cal;
    }

    // data structure/state
    const data = {
        items: [
            {id:0,name: 'Fish Dinner', calories:1200},
            {id:1,name: 'Scone', calories:400},
            {id:2,name: 'Tootsie Rool', calories:300},
        ],
        currentItem: null,
        totalCal: 0
    }

    // public return
    return {
        getItems: function() {

            return data.items;
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
        itemList: '#item-list'
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
        }

    }

})(); 






// ~~~~~~~~~~~~~~~~~~~~~~ app controller
const App = (function(ItemCtrl,UICtrl) {
    
    // public method
    return {
        init: function() {
            console.log('init app...');
            
            // fetch items from data structure
            const items = ItemCtrl.getItems();
            
            // populate list with items
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl,UICtrl); 


// init app
App.init();