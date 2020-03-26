// Init weather object...

const weather = new Weather("Beaverton","Oregon"); 

// wrap getWeather in a fucntion to load when the dom loads...

document.addEventListener('DOMContentLoaded', getWeather);

funtion getWeather() {
    weather.getWeather()  // getWeather is an 'async' method thus it returns a promise...
        .then(r => {console.log(r.main.temp, r.main.feels_like )})
        // .then(r => {console.log(r.wind.speed, r.wind.deg)})
        // .then(r => {console.log(r.weather[0].main, r.weather[0].description, r.weather[0].icon )})
        .catch(e => console.log(e));
}



// convert C to F => (C x 9/5) + 32 