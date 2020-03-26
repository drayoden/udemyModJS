const api = new Local();

class Weather {

    constructor(city, state) {
        this.apiKey = api.key;
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        console.log(this.apiKey);
        console.log(this.city);
        console.log(this.state);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`)
        const responseData = await response.json();
        return responseData;
    }
}



