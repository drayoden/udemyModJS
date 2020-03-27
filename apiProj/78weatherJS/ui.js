class UI {
    
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    // The weather attributes are specific to the api (openweathermap)...
    paint(weather, city, state) {
        this.location.textContent = `${city}, ${state}`;
        this.desc.textContent = `${weather.weather[0].description}`;
        this.string.textContent = `${weather.main.temp}&#8451;`;

        console.log(weather.main.temp);
        //this.desc.textContent
    }
}


//.then(r => {console.log(r.main.temp, r.main.feels_like )})
// .then(r => {console.log(r.wind.speed, r.wind.deg)})
// .then(r => {console.log(r.weather[0].main, r.weather[0].description, r.weather[0].icon )})
 