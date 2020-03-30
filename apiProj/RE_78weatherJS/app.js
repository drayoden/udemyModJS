// Init weather object...

const weather = new Weather("Beaverton","Oregon"); 
const ui = new UI();

// wrap getWeather in a fucntion to load when the dom loads...

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()  // getWeather is an 'async' method thus it returns a promise...
        .then(r => {
           ui.paint(r,weather.city,weather.state);
        })
       .catch(e => console.log(e));
}

// convert C to F => (C x 9/5) + 32 