class Storage {
    constructor() {
        this.city;
        this.state;
        this.dCity = 'Beaverton';
        this.dState = 'Oregon';
    }

    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.dCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('state') === null) {
            this.state = this.dState;
        } else {
            this.state = localStorage.getItem('state');
        }
        
        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city,state) {
        localStorage.setItem('city',city);
        localStorage.setItem('state',state);
    }
}