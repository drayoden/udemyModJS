// Init storage...
const storage = new Storage();

// get stored location data...
const weatherLocation = storage.getLocationData();


// Init weather object...
const weather = new Weather(weatherLocation.city,weatherLocation.state); 
const ui = new UI();

// wrap getWeather in a fucntion to load when the dom loads...

document.addEventListener('DOMContentLoaded', getWeather);

// change location event...
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // change location
    weather.changeLocation(city,state);

    // set location in local storage
    storage.setLocationData(city,state);

    // get and display weather:
    getWeather();

    // close modal - jQuery!
    $('#locModal').modal('hide'); 
});

function getWeather() {
    weather.getWeather()  // getWeather is an 'async' method thus it returns a promise...
        .then(r => {
           ui.paint(r,weather.city,weather.state);
        })
       .catch(e => console.log(e));
}

// convert C to F => (C x 9/5) + 32 



