function updateWeatherInfo(response) {
    let temperatureElement = document.querySelector("#temperature-value"); 
    let temperature = response.data.temperature.current; 
    let cityElement = document.querySelector("#city-display"); 
    cityElement.innerHTML = response.data.city; 
    temperatureElement.innerHTML = Math.round(temperature); 
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