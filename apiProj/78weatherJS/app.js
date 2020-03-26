// Init weather object...

const weather = new Weather("Beaverton","Oregon"); 

weather.getWeather()  // getWeather is an 'async' method thus it returns a promise...
    .then(r => {console.log(r.main.temp, r.main.feels_like )})
    // .then(r => {console.log(r.wind.speed, r.wind.deg)})
    // .then(r => {console.log(r.weather[0].main, r.weather[0].description, r.weather[0].icon )})
    .catch(e => console.log(e));
