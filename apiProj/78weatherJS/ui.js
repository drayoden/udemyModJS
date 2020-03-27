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
        let tempC = weather.main.temp;
        let tempF = (tempC * (9/5)) + 32;
        
        // location and weather description
        this.location.textContent = `${city}, ${state}`;
        this.desc.textContent = `${weather.weather[0].description.toUpperCase()}`;
        
        // temps
        this.string.textContent = `${tempC.toFixed(1)} `;
        this.string.insertAdjacentHTML('beforeend','&#x2103; &nbsp; &nbsp;');
        this.string.insertAdjacentHTML('beforeend',`${tempF.toFixed(1)} `);
        this.string.insertAdjacentHTML('beforeend','&#x2109;');

        // icon
        this.icon.setAttribute("src",`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

        // humidity, 
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`; 

        // dewpoint
        let TdC = tempC - ((100 - weather.main.humidity)/5)
        let TdF = (TdC * (9/5)) + 32;
        this.dewpoint.textContent = `DewPoint: ${TdC.toFixed(1)}`;
        this.dewpoint.insertAdjacentHTML('beforeend','&#x2103; &nbsp; &nbsp;');
        this.dewpoint.insertAdjacentHTML('beforeend',`${TdF.toFixed(1)}`);
        this.dewpoint.insertAdjacentHTML('beforeend','&#x2109;');

        
    }
}


//.then(r => {console.log(r.main.temp, r.main.feels_like )})
// .then(r => {console.log(r.wind.speed, r.wind.deg)})
// .then(r => {console.log(r.weather[0].main, r.weather[0].description, r.weather[0].icon )})
 