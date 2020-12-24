class Weather {
    constructor(zip) {
        this.apiKey = "271de19780b4f46a44c13c3757e45635";
        this.zip = zip;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=${this.apiKey}&units=imperial`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(zip) {
        this.zip = zip;
    }
}