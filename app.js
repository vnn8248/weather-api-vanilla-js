// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.zip);

// Init UI
const ui = new UI();




// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", changeLocation);

function changeLocation(e) {
    const zip = document.getElementById("zip").value;

    // Change location
    weather.changeLocation(zip);

    // Set location in local storage
    storage.setLocationData(zip);

    // Get weather with new zip
    getWeather();

    // Close modal
    $("#locModal").modal("hide");
}

function getWeather() {
    weather.getWeather()
    .then(res => {
        console.log(res);
        ui.paint(res);
    })
    .catch(err => console.log(err));
}

