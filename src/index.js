function updateWeatherInfo(response) {
    let temperatureElement = document.querySelector("#temperature-value"); 
    let temperature = response.data.temperature.current; 
    let cityElement = document.querySelector("#city-display"); 
    let descriptionElement = document.querySelector("#description"); 
    let humidityElement = document.querySelector("#humidity"); 
    let windSpeedElement = document.querySelector("#wind-speed"); 
    let windSpeedMph = response.data.wind.speed;
    let windSpeedKmh = (windSpeedMph * 1.60934).toFixed(2);
    let timeElement = document.querySelector("#time"); 
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon"); 
    console.log(response.data); 
    cityElement.innerHTML = response.data.city; 
    descriptionElement.innerHTML = response.data.condition.description; 
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${windSpeedKmh}km/h`; 
    timeElement.innerHTML = formatDate(date); 
    temperatureElement.innerHTML = Math.round(temperature); 
   iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`; 
}

function formatDate(date){
    let minutes = date.getMinutes(); 
    let hours = date.getHours(); 
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    let day = days[date.getDay()]; 
    if (minutes < 10){
        minutes = `0${minutes}`; 
    }
    return `${day} ${hours}:${minutes};`; 
}

function searchCity(city) {
let apiKey = "4e3fb40e09d54863ac6o4t0243f8a502"; 
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
axios.get(apiUrl).then(updateWeatherInfo); 
}

function handleSearchSubmit(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-form-input"); 
    searchCity(searchInput.value); 
}

let searchFormElement = document.querySelector("#search-form"); 
searchFormElement.addEventListener("submit", handleSearchSubmit); 

searchCity("Kyiv"); 