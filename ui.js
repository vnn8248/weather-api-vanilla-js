class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.details = document.getElementById("w-details");
        this.string = document.getElementById("w-string");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.feelsLike = document.getElementById("w-feels-like");
        this.wind = document.getElementById("w-wind");
    }

    paint(weather) {
        const icon = weather.weather.shift().icon;
        // const desc = weather.weather.shift().description;

        this.location.textContent = weather.name;
        // this.desc.textContent = desc;
        this.string.textContent = `${weather.main.temp} F`;
        this.icon.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);       
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} F`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;
    }

}