// singleton pattern - immediate annonymos function and 
// can only return one instance at a time. Not used much, some
// programmmers do not use because it a single point of entry?

const Singleton = (function() {
    
    let instance;
    
    function createInstance() {
        // const obj = new Object('Object created...');
        const obj = new Object({ animal: 'cat'}); 
        return obj;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
        return instance;
        }
    }

})();

const instanceA = Singleton.getInstance();
console.log(instanceA);

const instanceB = Singleton.getInstance();
console.log(instanceB);

console.log(instanceA === instanceB);  // true - onle one instance of the  object exists
