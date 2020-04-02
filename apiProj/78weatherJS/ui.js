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
        this.string.textContent = `${tempF.toFixed(1)} `;
        this.string.insertAdjacentHTML('beforeend','&#x2109; &nbsp; &nbsp;');
        this.string.insertAdjacentHTML('beforeend',`(${tempC.toFixed(1)} `);
        this.string.insertAdjacentHTML('beforeend','&#x2103;)');

        // icon
        this.icon.setAttribute("src",`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

        // humidity, 
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`; 

        // dewpoint
        let TdC = tempC - ((100 - weather.main.humidity)/5); 
        let TdF = (TdC * (9/5)) + 32;
        this.dewpoint.textContent = `DewPoint: ${TdF.toFixed(1)}`;
        this.dewpoint.insertAdjacentHTML('beforeend','&#x2109; &nbsp; &nbsp;');
        this.dewpoint.insertAdjacentHTML('beforeend',`(${TdC.toFixed(1)}`);
        this.dewpoint.insertAdjacentHTML('beforeend','&#x2103;)');

        // feels like
        let TfC = weather.main.feels_like;
        let TfF = (TfC * (9/5)) + 32;
        this.feelslike.textContent = `Feels like: ${TfF.toFixed(1)}`; 
        this.feelslike.insertAdjacentHTML('beforeend','&#x2109; &nbsp; &nbsp;');
        this.feelslike.insertAdjacentHTML('beforeend',`(${TfC.toFixed(1)}`);
        this.feelslike.insertAdjacentHTML('beforeend','&#x2103;)');

        // wind
        let windSpeed = weather.wind.speed * 2.237;  // m/s -> mi/hour
        
        // get a string representation of the wind direction:

        var windDir = weather.wind.deg / 11.25;
        windDir = windDir+.5|0; 
        var dirName = calcPoint(windDir);
        var shortName = getShortName(dirName);
        dirName = dirName[0].toUpperCase() + dirName.slice(1);

        this.wind.textContent = `Wind: from ${dirName} [${shortName}] at ${windSpeed.toFixed(1)} MPH `;
    }
}

s=String;
s.prototype.r = s.prototype.replace;

function calcPoint(input) {
    var j = input % 8,
        input = (input / 8)|0 % 4,
        cardinal = ['north', 'east', 'south', 'west'],
        pointDesc = ['1', '1 by 2', '1-C', 'C by 1', 'C', 'C by 2', '2-C', '2 by 1'],
        str1, str2, strC;
 
    str1 = cardinal[input];
    str2 = cardinal[(input + 1) % 4];
    strC = (str1 == cardinal[0] | str1 == cardinal[2]) ? str1 + str2 : str2 + str1;
    return pointDesc[j].r(1, str1).r(2, str2).r('C', strC);
}

function getShortName(name) {
    return name.r(/north/g, "N").r(/east/g, "E").r(/south/g, "S").r(/west/g, "W").r(/by/g, "b").r(/[\s-]/g, "");
}


// this was replicated in the UI.paint method:

// var input = prompt() / 11.25;
// input = input+.5|0;
// var name = calcPoint(input);
// var shortName = getShortName(name);
// name = name[0].toUpperCase() + name.slice(1);
// alert(name + " " + shortName);

 