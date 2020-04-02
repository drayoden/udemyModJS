const api = new Local();

class Weather {

    constructor(city, state) {
        this.apiKey = api.key;
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`)
        const responseData = await response.json();
        // console.log(responseData);
        return responseData;
    } 

    changeLocation(city,state) {
        this.city = city;
        this.state = state;
    }
}



